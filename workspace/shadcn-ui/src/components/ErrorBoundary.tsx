import React, { ReactNode, ErrorInfo } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorCount: number;
}

/**
 * Error Boundary Component
 * Catches React component errors and displays a fallback UI
 */
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details
    console.error('🔴 Error caught by ErrorBoundary:', error);
    console.error('📋 Error Info:', errorInfo);

    // Update state with error info
    this.setState(prevState => ({
      errorInfo,
      errorCount: prevState.errorCount + 1
    }));

    // Log to external service in production
    if (import.meta.env.PROD) {
      // You can send this to a logging service like Sentry
      console.error('Sending error to logging service...');
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 p-4">
          <div className="max-w-2xl w-full">
            {/* Error Card */}
            <div className="bg-white rounded-lg shadow-xl border-2 border-red-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-white" />
                  <div>
                    <h1 className="text-2xl font-bold text-white">Oops! Something went wrong</h1>
                    <p className="text-red-100 text-sm">Error #{this.state.errorCount}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Error Message */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h2 className="font-semibold text-red-900 mb-2">Error Message:</h2>
                  <p className="text-red-700 font-mono text-sm break-words">
                    {this.state.error?.message || 'An unexpected error occurred'}
                  </p>
                </div>

                {/* Error Details (Development Only) */}
                {import.meta.env.DEV && this.state.errorInfo && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h2 className="font-semibold text-gray-900 mb-2">Stack Trace:</h2>
                    <pre className="text-gray-700 text-xs overflow-auto max-h-48 bg-white p-3 rounded border border-gray-200">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </div>
                )}

                {/* Helpful Tips */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h2 className="font-semibold text-blue-900 mb-2">What you can try:</h2>
                  <ul className="text-blue-700 text-sm space-y-1 list-disc list-inside">
                    <li>Refresh the page to reload the application</li>
                    <li>Clear your browser cache and cookies</li>
                    <li>Try again in a few moments</li>
                    <li>Contact support if the problem persists</li>
                  </ul>
                </div>

                {/* Error Code */}
                <div className="text-center text-gray-500 text-xs">
                  Error ID: {new Date().getTime()}
                </div>
              </div>

              {/* Actions */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex gap-3 flex-wrap justify-center">
                <Button
                  onClick={this.handleReset}
                  variant="outline"
                  className="gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Try Again
                </Button>

                <Button
                  onClick={this.handleReload}
                  variant="outline"
                  className="gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Reload Page
                </Button>

                <Button
                  onClick={this.handleHome}
                  className="gap-2 bg-blue-600 hover:bg-blue-700"
                >
                  <Home className="h-4 w-4" />
                  Go Home
                </Button>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-6 text-gray-600 text-sm">
              <p>If this problem continues, please contact support with the error ID above.</p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
