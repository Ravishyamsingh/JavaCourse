import { useCallback, useMemo, useRef, useState } from 'react';
import Editor, { OnMount, loader } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Play,
  Copy,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Terminal,
  Code,
  Keyboard
} from 'lucide-react';
import { CompilerClientError, runJavaCode, type RunJavaResponse } from '@/services/compiler';

// Configure Monaco to use local package instead of CDN
loader.config({ monaco });

interface CodeEditorProps {
  initialCode?: string;
  title?: string;
  description?: string;
  readonly?: boolean;
  lessonId?: string;
  sampleInput?: string;
  onChange?: (code: string) => void;
  onRunComplete?: (result: RunJavaResponse) => void;
  height?: string;
}

export default function CodeEditor({
  initialCode = '',
  title = 'Java Code Editor',
  description = 'Write and run your Java code',
  readonly = false,
  lessonId,
  sampleInput = '',
  onChange,
  onRunComplete,
  height = '420px'
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [stdin, setStdin] = useState(sampleInput);
  const [output, setOutput] = useState('');
  const [diagnostics, setDiagnostics] = useState('');
  const [stats, setStats] = useState<{ compileTimeMs: number; runTimeMs: number } | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [status, setStatus] = useState<'idle' | 'queued' | 'success' | 'error'>('idle');
  const [jobMeta, setJobMeta] = useState<{ exitCode?: number | string | null; memory?: number | string | null; status?: string } | null>(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const runCodeRef = useRef<() => void>();

  const editorOptions = useMemo<monaco.editor.IStandaloneEditorConstructionOptions>(() => ({
    fontSize: 14,
    fontFamily: 'JetBrains Mono, Fira Code, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    minimap: { enabled: false },
    padding: { top: 16, bottom: 8 },
    smoothScrolling: true,
    cursorBlinking: 'smooth',
    scrollBeyondLastLine: false,
    automaticLayout: true,
    tabSize: 4,
    insertSpaces: true,
    detectIndentation: false,
    stickyTabStops: true,
    useTabStops: true,
    autoIndent: 'full',
    autoClosingBrackets: 'always',
    autoClosingQuotes: 'always',
    autoSurround: 'languageDefined',
    acceptSuggestionOnEnter: 'smart',
    suggestOnTriggerCharacters: true,
    formatOnType: true,
    formatOnPaste: true,
    quickSuggestions: true,
    wordWrap: 'on',
    contextmenu: true,
    renderWhitespace: 'selection',
    bracketPairColorization: { enabled: true },
    guides: { indentation: true, highlightActiveIndentGuide: true },
    unicodeHighlight: { ambiguousCharacters: false },
    readOnly: readonly,
  }), [readonly]);

  const runCode = useCallback(async () => {
    if (!code.trim()) {
      setOutput('Please write some Java code first.');
      setDiagnostics('');
      setHasError(true);
      setStatus('error');
      return;
    }

    setIsRunning(true);
    setStatus('queued');
    setOutput('Running code in the browser...');
    setDiagnostics('');
    setStats(null);
    setHasError(false);
    setJobMeta(null);

    try {
      const response = await runJavaCode({ code, input: stdin, lessonId });

      setOutput(response.output || 'Program finished without output.');
      setDiagnostics(response.diagnostics || '');
      setStats(response.stats ?? null);
      setHasError(!response.success || Boolean(response.diagnostics));
      setStatus(response.success ? 'success' : 'error');
      setJobMeta({
        exitCode: response.raw?.exit_code ?? null,
        memory: response.raw?.memory ?? null,
        status: response.raw?.status ?? response.raw?.result
      });

      // Notify parent about run completion
      try {
        onRunComplete?.(response);
      } catch {}
    } catch (error) {
      let message = 'Unable to run code right now.';
      let detail = '';

      if (error instanceof CompilerClientError) {
        message = error.message;
        detail = typeof error.details === 'string'
          ? error.details
          : error.details
            ? JSON.stringify(error.details, null, 2)
            : '';
      } else if (error instanceof Error) {
        message = error.message;
      }

      setOutput(message);
      setDiagnostics(detail);
      setHasError(true);
      setStatus('error');

      // Inform parent about failure in a normalized shape
      try {
        const resp: RunJavaResponse = {
          success: false,
          output: message,
          diagnostics: detail || undefined,
          stats: null,
          raw: { error: String(message) }
        };
        onRunComplete?.(resp);
      } catch {}
    } finally {
      setIsRunning(false);
    }
  }, [code, stdin, lessonId]);

  runCodeRef.current = runCode;

  const handleEditorMount: OnMount = useCallback((editor, monaco) => {
    editorRef.current = editor;
    editor.focus();

    // Run code on Ctrl/Cmd+Enter and Shift+Enter
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      runCodeRef.current?.();
    });
    editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
      runCodeRef.current?.();
    });

    // Ensure Tab indents selection and Shift+Tab outdents
    editor.addCommand(monaco.KeyCode.Tab, () => {
      editor.trigger('keyboard', 'editor.action.indentLines', undefined);
    });
    editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Tab, () => {
      editor.trigger('keyboard', 'editor.action.outdentLines', undefined);
    });
  }, []);

  const resetCode = () => {
    setCode(initialCode);
    setStdin(sampleInput);
    setOutput('');
    setDiagnostics('');
    setStats(null);
    setHasError(false);
    setStatus('idle');
    setJobMeta(null);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2 text-green-800">
              <Code className="h-5 w-5" />
              <span>{title}</span>
            </CardTitle>
            <CardDescription className="text-green-600">
              {description}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Java
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Code Editor */}
          <div className="border-r">
            <div className="bg-gray-800 text-white p-3 flex items-center justify-between">
              <span className="text-sm font-medium">Code Editor</span>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyCode}
                  className="text-gray-300 hover:text-white h-7"
                >
                  <Copy className="h-3 w-3" />
                </Button>
                {!readonly && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetCode}
                    className="text-gray-300 hover:text-white h-7"
                  >
                    <RotateCcw className="h-3 w-3" />
                  </Button>
                )}
              </div>
            </div>
            <div className="relative min-h-[420px] bg-gray-900">
              <Editor
                height={height}
                language="java"
                theme="vs-dark"
                value={code}
                onChange={(value) => {
                  const v = value || '';
                  setCode(v);
                  try { onChange?.(v); } catch {}
                }}
                options={editorOptions}
                onMount={handleEditorMount}
                loading={
                  <div className="flex items-center justify-center h-full min-h-[420px] bg-gray-900">
                    <div className="flex flex-col items-center gap-3">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500" />
                      <span className="text-gray-400 text-sm">Loading Code Editor...</span>
                    </div>
                  </div>
                }
              />
              {!readonly && (
                <div className="absolute bottom-4 right-4 flex items-center gap-3">
                  <Button
                    onClick={runCode}
                    disabled={isRunning}
                    className="bg-green-600 hover:bg-green-700 text-white shadow-lg"
                  >
                    {isRunning ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Running...
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Run Code
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
            {!readonly && (
              <div className="border-t border-gray-800 bg-gray-900 p-4 space-y-2">
                <div className="flex items-center justify-between text-xs uppercase tracking-wide text-gray-400">
                  <span className="flex items-center gap-2">
                    <Keyboard className="h-3 w-3" /> Custom Input (stdin)
                  </span>
                  <span className="text-gray-500">{stdin.length} / 8000</span>
                </div>
                <Textarea
                  value={stdin}
                  onChange={(e) => setStdin(e.target.value)}
                  className="h-28 bg-gray-950 border-gray-800 text-gray-100 font-mono text-sm"
                  placeholder={`Optional input passed to System.in\nExample:\n5 10`}
                />
                <p className="text-xs text-gray-500">This text is piped to your program via standard input.</p>
              </div>
            )}
          </div>

          {/* Output Console */}
          <div className="bg-gray-100">
            <div className="bg-gray-700 text-white p-3 flex items-center justify-between">
              <span className="text-sm font-medium flex items-center">
                <Terminal className="h-4 w-4 mr-2" />
                Console Output
              </span>
              {output && !hasError ? (
                <CheckCircle2 className="h-4 w-4 text-green-400" />
              ) : null}
              {hasError && (
                <AlertCircle className="h-4 w-4 text-red-400" />
              )}
            </div>
            <div className="p-4 space-y-4">
              {output ? (
                <div
                  className={`font-mono text-sm whitespace-pre-wrap p-3 rounded ${
                    hasError
                      ? 'bg-red-50 text-red-800 border border-red-200'
                      : 'bg-green-50 text-green-800 border border-green-200'
                  }`}
                >
                  {output}
                </div>
              ) : (
                <div className="text-gray-500 italic">Click "Run Code" to see the output here</div>
              )}

              {diagnostics && (
                <div className="font-mono text-sm whitespace-pre-wrap p-3 rounded bg-yellow-50 text-yellow-800 border border-yellow-200">
                  {diagnostics}
                </div>
              )}

              {false && jobMeta && (
                <div className="hidden" />
              )}

              {false && stats && (
                <div className="hidden" />
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
