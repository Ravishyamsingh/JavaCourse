import fetch from 'node-fetch';
import config from '../config.js';

const SOURCE_LIMIT = Number(process.env.JAVA_SOURCE_LIMIT_BYTES || config.JAVA_SOURCE_LIMIT_BYTES || 40000);
const INPUT_LIMIT = Number(process.env.JAVA_INPUT_LIMIT_BYTES || config.JAVA_INPUT_LIMIT_BYTES || 8000);
const OUTPUT_LIMIT = Number(process.env.JAVA_OUTPUT_LIMIT_BYTES || config.JAVA_OUTPUT_LIMIT_BYTES || 20000);
const API_BASE = process.env.PAIZA_API_BASE || config.PAIZA_API_BASE || 'https://api.paiza.io';
const API_KEY = process.env.PAIZA_API_KEY || config.PAIZA_API_KEY || 'guest';
const POLL_INTERVAL_MS = Number(process.env.COMPILER_POLL_INTERVAL_MS || config.COMPILER_POLL_INTERVAL_MS || 1200);
const MAX_POLLS = Number(process.env.COMPILER_MAX_POLLS || config.COMPILER_MAX_POLLS || 20);

export class CompilerError extends Error {
  constructor(message, options = {}) {
    super(message);
    this.name = 'CompilerError';
    this.statusCode = options.statusCode || 400;
    this.details = options.details || {};
    this.code = options.code || 'COMPILER_ERROR';
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const truncate = (value = '') => {
  if (!value) return '';
  return value.length > OUTPUT_LIMIT
    ? `${value.slice(0, OUTPUT_LIMIT)}\n...[output truncated]`
    : value;
};

const ensureLimits = (code, input) => {
  if (!code || !code.trim()) {
    throw new CompilerError('Code is required.', { statusCode: 400, code: 'CODE_REQUIRED' });
  }

  if (Buffer.byteLength(code, 'utf8') > SOURCE_LIMIT) {
    throw new CompilerError(`Code is too large. Limit is ${SOURCE_LIMIT} bytes.`, {
      statusCode: 413,
      code: 'CODE_TOO_LARGE'
    });
  }

  if (Buffer.byteLength(input || '', 'utf8') > INPUT_LIMIT) {
    throw new CompilerError(`Input is too large. Limit is ${INPUT_LIMIT} bytes.`, {
      statusCode: 413,
      code: 'INPUT_TOO_LARGE'
    });
  }
};

const buildFormBody = (payload) => {
  const params = new URLSearchParams();
  Object.entries(payload).forEach(([key, value]) => {
    if (typeof value !== 'undefined' && value !== null) {
      params.append(key, value);
    }
  });
  return params;
};

const fetchJson = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    const body = await response.text();
    throw new CompilerError('Compiler service request failed', {
      statusCode: response.status,
      code: 'REMOTE_COMPILER_ERROR',
      details: { body }
    });
  }
  return response.json();
};

export const executeJavaRemotely = async ({ code, input = '' }) => {
  ensureLimits(code, input);

  const form = buildFormBody({
    source_code: code,
    language: 'java',
    input: input || '',
    api_key: API_KEY,
  });

  const createResponse = await fetchJson(`${API_BASE}/runners/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: form
  });

  const submissionId = createResponse.id;
  if (!submissionId) {
    throw new CompilerError('Compiler service returned an invalid submission id', {
      statusCode: 502,
      code: 'INVALID_RESPONSE',
      details: createResponse
    });
  }

  let attempts = 0;
  let details;
  while (attempts < MAX_POLLS) {
    attempts += 1;
    await sleep(POLL_INTERVAL_MS);
    details = await fetchJson(`${API_BASE}/runners/get_details?id=${submissionId}&api_key=${API_KEY}`);
    if (details.status !== 'running' && details.status !== 'pending') {
      break;
    }
  }

  if (!details || (details.status === 'running' || details.status === 'pending')) {
    throw new CompilerError('Compiler timed out before returning a result', {
      statusCode: 504,
      code: 'COMPILER_TIMEOUT'
    });
  }

  return {
    stdout: truncate(details.stdout || ''),
    stderr: truncate(details.stderr || ''),
    buildStdout: truncate(details.build_stdout || ''),
    buildStderr: truncate(details.build_stderr || ''),
    exitCode: Number(details.exit_code),
    status: details.status,
    time: details.time ? Number(details.time) * 1000 : null,
    buildTime: details.build_time ? Number(details.build_time) * 1000 : null,
    memory: details.memory ? Number(details.memory) : null,
    result: details.result,
    raw: details
  };
};
