import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Play, Loader2, FileText } from 'lucide-react';
import { runOAuthTestSuite, generateTestReport, TestSuiteResult, OAuthTestResult } from '@/utils/oauthTest';
import { toast } from 'sonner';

const OAuthTestRunner: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState<TestSuiteResult | null>(null);
  const [progress, setProgress] = useState(0);

  const runTests = async () => {
    setIsRunning(true);
    setProgress(0);
    setTestResults(null);

    try {
      console.log('🚀 Starting OAuth test suite...');
      toast.info('Running OAuth tests...');

      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 500);

      const results = await runOAuthTestSuite();

      clearInterval(progressInterval);
      setProgress(100);
      setTestResults(results);

      const successRate = (results.passedTests / results.totalTests) * 100;
      if (successRate === 100) {
        toast.success(`All ${results.totalTests} tests passed!`);
      } else if (successRate >= 80) {
        toast.warning(`${results.passedTests}/${results.totalTests} tests passed`);
      } else {
        toast.error(`${results.failedTests}/${results.totalTests} tests failed`);
      }

    } catch (error) {
      console.error('❌ Test execution failed:', error);
      toast.error('Test execution failed');
      setProgress(0);
    } finally {
      setIsRunning(false);
    }
  };

  const downloadReport = () => {
    if (!testResults) return;

    const report = generateTestReport(testResults);
    const blob = new Blob([report], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `oauth-test-report-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success('Test report downloaded');
  };

  const getStatusIcon = (success: boolean) => {
    return success ? (
      <CheckCircle className="h-4 w-4 text-green-500" />
    ) : (
      <XCircle className="h-4 w-4 text-red-500" />
    );
  };

  const getStatusBadge = (success: boolean) => {
    return success ? (
      <Badge variant="default" className="bg-green-100 text-green-800">
        PASSED
      </Badge>
    ) : (
      <Badge variant="destructive">
        FAILED
      </Badge>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5" />
            OAuth Authentication Test Suite
          </CardTitle>
          <CardDescription>
            Comprehensive testing for Google OAuth, role-based access control, session management, and error handling
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Button
              onClick={runTests}
              disabled={isRunning}
              className="flex items-center gap-2"
            >
              {isRunning ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Play className="h-4 w-4" />
              )}
              {isRunning ? 'Running Tests...' : 'Run Test Suite'}
            </Button>

            {testResults && (
              <Button
                variant="outline"
                onClick={downloadReport}
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Download Report
              </Button>
            )}
          </div>

          {isRunning && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Running tests...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          )}

          {testResults && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold">{testResults.totalTests}</div>
                    <p className="text-xs text-muted-foreground">Total Tests</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-green-600">{testResults.passedTests}</div>
                    <p className="text-xs text-muted-foreground">Passed</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-red-600">{testResults.failedTests}</div>
                    <p className="text-xs text-muted-foreground">Failed</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold">{testResults.duration}ms</div>
                    <p className="text-xs text-muted-foreground">Duration</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Test Results</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {testResults.results.map((result, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          {getStatusIcon(result.success)}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">Test {index + 1}</span>
                              {getStatusBadge(result.success)}
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {result.message}
                            </p>
                            {result.error && (
                              <p className="text-sm text-red-600 bg-red-50 p-2 rounded">
                                Error: {result.error}
                              </p>
                            )}
                            {result.user && (
                              <p className="text-sm text-blue-600 bg-blue-50 p-2 rounded">
                                User: {JSON.stringify(result.user, null, 2)}
                              </p>
                            )}
                            <p className="text-xs text-muted-foreground mt-2">
                              {result.timestamp.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Test Coverage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Authentication Tests</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Google OAuth initialization</li>
                <li>• Environment variable validation</li>
                <li>• API connectivity testing</li>
                <li>• Token handling verification</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Role-Based Tests</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Guest user permissions</li>
                <li>• Regular user access</li>
                <li>• Admin functionality</li>
                <li>• Super admin privileges</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Session Tests</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Token storage/retrieval</li>
                <li>• Session persistence</li>
                <li>• Concurrent login detection</li>
                <li>• Automatic logout</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Error Handling Tests</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Invalid token responses</li>
                <li>• Missing credentials</li>
                <li>• Network failures</li>
                <li>• API error recovery</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OAuthTestRunner;