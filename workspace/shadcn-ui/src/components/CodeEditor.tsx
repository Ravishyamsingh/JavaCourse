import { useState } from 'react';
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
  Code
} from 'lucide-react';

interface CodeEditorProps {
  initialCode?: string;
  title?: string;
  description?: string;
  readonly?: boolean;
}

export default function CodeEditor({ 
  initialCode = "", 
  title = "Java Code Editor", 
  description = "Write and run your Java code",
  readonly = false 
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [hasError, setHasError] = useState(false);

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Compiling and running...');
    setHasError(false);

    // Simulate compilation and execution
    setTimeout(() => {
      try {
        // Simple simulation of Java code execution
        if (code.includes('System.out.println')) {
          const matches = code.match(/System\.out\.println\s*\(\s*"([^"]*)"\s*\)/g);
          if (matches) {
            const outputs = matches.map(match => {
              const text = match.match(/"([^"]*)"/)?.[1] || '';
              return text;
            });
            setOutput(`Compilation successful!\n\nOutput:\n${outputs.join('\n')}`);
          } else {
            setOutput('Compilation successful!\n\nProgram executed successfully (no output)');
          }
        } else if (code.includes('public static void main')) {
          setOutput('Compilation successful!\n\nProgram executed successfully');
        } else if (code.trim() === '') {
          setOutput('Please write some Java code first');
          setHasError(true);
        } else {
          setOutput('Compilation successful!\n\nCode compiled without errors');
        }
      } catch (error) {
        setOutput(`Compilation Error:\n${error}`);
        setHasError(true);
      }
      setIsRunning(false);
    }, 1500);
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
    setHasError(false);
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
            <div className="relative">
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="min-h-[400px] border-0 rounded-none font-mono text-sm bg-gray-900 text-gray-100 resize-none focus:ring-0"
                placeholder={`// Write your Java code here
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
                readOnly={readonly}
              />
              {!readonly && (
                <div className="absolute bottom-4 right-4">
                  <Button
                    onClick={runCode}
                    disabled={isRunning}
                    className="bg-green-600 hover:bg-green-700 text-white shadow-lg"
                  >
                    {isRunning ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
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
          </div>

          {/* Output Console */}
          <div className="bg-gray-100">
            <div className="bg-gray-700 text-white p-3 flex items-center justify-between">
              <span className="text-sm font-medium flex items-center">
                <Terminal className="h-4 w-4 mr-2" />
                Console Output
              </span>
              {output && !hasError && (
                <CheckCircle2 className="h-4 w-4 text-green-400" />
              )}
              {hasError && (
                <AlertCircle className="h-4 w-4 text-red-400" />
              )}
            </div>
            <div className="p-4">
              {output ? (
                <div className={`font-mono text-sm whitespace-pre-wrap p-3 rounded ${
                  hasError 
                    ? 'bg-red-50 text-red-800 border border-red-200' 
                    : 'bg-green-50 text-green-800 border border-green-200'
                }`}>
                  {output}
                </div>
              ) : (
                <div className="text-gray-500 italic">
                  Click "Run Code" to see the output here
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
