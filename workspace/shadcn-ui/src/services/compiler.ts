// New browser-based Java compiler service using Piston API
// This replaces the previous backend-dependent compiler client.
// It sends code directly to the public Piston execution API from the browser.

export interface RunJavaPayload {
  code: string;
  input?: string;
  className?: string; // optional: if provided, will be used for file name
  lessonId?: string;
}

export interface RunJavaResponse {
  success: boolean;
  output: string;
  diagnostics?: string;
  stats?: {
    compileTimeMs: number;
    runTimeMs: number;
  } | null;
  className?: string;
  raw?: any;
}

export class CompilerClientError extends Error {
  details?: unknown;
  constructor(message: string, details?: unknown) {
    super(message);
    this.name = 'CompilerClientError';
    this.details = details;
  }
}

// Piston public API endpoint
const PISTON_BASE = 'https://emkc.org/api/v2/piston';

// Cache runtime version to avoid extra network calls
let cachedJavaVersion: string | null = null;

async function resolveJavaVersion(): Promise<string> {
  if (cachedJavaVersion) return cachedJavaVersion;
  // Fetch runtimes and find a Java entry
  const resp = await fetch(`${PISTON_BASE}/runtimes`);
  if (!resp.ok) {
    // Fallback to a widely-available version
    cachedJavaVersion = '17';
    return cachedJavaVersion;
  }
  const runtimes = await resp.json();
  // Runtimes entries look like: { language: 'java', version: '17.0.7', aliases: ['java'] }
  const java = Array.isArray(runtimes)
    ? runtimes.find((r: any) => String(r.language).toLowerCase() === 'java')
    : null;
  if (!java) {
    cachedJavaVersion = '17';
    return cachedJavaVersion;
  }
  // Use the full version string if present; otherwise fallback to major
  const ver = String(java.version || '').trim();
  cachedJavaVersion = ver || '17';
  return cachedJavaVersion;
}

// Utility to derive a Java filename from code or provided className
function deriveJavaFileName(code: string, className?: string): string {
  if (className && /^(?!\d)[\w$]+$/.test(className)) return `${className}.java`;
  const match = code.match(/class\s+([A-Za-z_$][A-Za-z\d_$]*)/);
  const name = match?.[1] || 'Main';
  return `${name}.java`;
}

export const runJavaCode = async (payload: RunJavaPayload): Promise<RunJavaResponse> => {
  const { code, input = '', className } = payload || {} as RunJavaPayload;

  if (!code || !code.trim()) {
    throw new CompilerClientError('Code is required.');
  }

  // Build request for Piston execute API
  const filename = deriveJavaFileName(code, className);

  // Resolve runtime version required by the API
  const version = await resolveJavaVersion();

  // Build the execute body with version
  const body = {
    language: 'java',
    version,
    files: [
      {
        name: filename,
        content: code,
      },
    ],
    stdin: input,
  } as const;

  const started = performance.now();
  let compileTimeMs = 0;
  let runTimeMs = 0;

  try {
    const response = await fetch(`${PISTON_BASE}/execute`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new CompilerClientError('Compiler service request failed.', { status: response.status, body: text });
    }

    const data = await response.json();

    // Piston returns optional compile and run sections
    const compile = data.compile || {};
    const run = data.run || {};

    // No exact time fields are guaranteed; compute a best-effort measurement
    const finished = performance.now();
    const totalMs = Math.max(0, Math.round(finished - started));
    // Heuristic: if compile stderr/stdout present, attribute small portion to compile time
    const hasCompile = Boolean(compile.stdout || compile.stderr || compile.code !== undefined);
    if (hasCompile) {
      // naive split, because Piston does not expose precise timings
      compileTimeMs = Math.floor(totalMs * 0.25);
      runTimeMs = totalMs - compileTimeMs;
    } else {
      compileTimeMs = 0;
      runTimeMs = totalMs;
    }

    const stdout = String(run.stdout || '') || '';
    const stderr = String(run.stderr || '') || '';
    const cstderr = String(compile.stderr || '') || '';
    const cstdout = String(compile.stdout || '') || '';

    // Keep only stdout as the primary output
    const outputOnly = stdout.trim();
    const diagnostics = [cstdout, cstderr, stderr].filter(Boolean).join('\n').trim();

    // success if exit code is 0 and no compile error code
    const success = (compile.code === undefined || compile.code === 0) && (run.code === 0 || run.code === undefined);

    return {
      success,
      output: outputOnly || (success ? 'Program finished without output.' : ''),
      diagnostics: diagnostics || undefined,
      stats: { compileTimeMs, runTimeMs },
      className: filename.replace(/\.java$/, ''),
      raw: data,
    };
  } catch (error: any) {
    if (error instanceof CompilerClientError) throw error;
    throw new CompilerClientError(error?.message || 'Compiler service request failed.', error);
  }
};
