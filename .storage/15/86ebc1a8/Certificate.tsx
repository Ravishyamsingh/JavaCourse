import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Download, Share2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Certificate() {
  const navigate = useNavigate();
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const downloadCertificate = () => {
    // In a real application, this would generate and download a PDF certificate
    const element = document.getElementById('certificate');
    if (element) {
      // Simple implementation - in production, use libraries like jsPDF or html2canvas
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex items-center space-x-2">
              <Button onClick={downloadCertificate} className="bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Certificate */}
          <Card id="certificate" className="bg-white shadow-2xl border-8 border-yellow-200">
            <CardContent className="p-16">
              <div className="text-center space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                      <Award className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 tracking-wide">
                    CERTIFICATE OF COMPLETION
                  </h1>
                  <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    This is to certify that
                  </p>
                  
                  <div className="space-y-2">
                    <h2 className="text-5xl font-bold text-blue-900 border-b-2 border-gray-300 pb-2 inline-block">
                      [Student Name]
                    </h2>
                    <p className="text-sm text-gray-500 italic">Please enter your name above</p>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    has successfully completed the comprehensive
                  </p>

                  <h3 className="text-3xl font-bold text-blue-900">
                    Java Mastery Course
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    This course covered Java fundamentals, object-oriented programming, 
                    data structures, exception handling, multithreading, database connectivity, 
                    GUI development, web development basics, Spring framework, advanced topics, 
                    testing methodologies, and hands-on projects.
                  </p>

                  <div className="grid md:grid-cols-3 gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">78</div>
                      <div className="text-sm text-gray-600">Lessons Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">15</div>
                      <div className="text-sm text-gray-600">Modules Mastered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">50+</div>
                      <div className="text-sm text-gray-600">Exercises Completed</div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-8 space-y-6">
                  <p className="text-lg text-gray-600">
                    Awarded on <span className="font-semibold">{currentDate}</span>
                  </p>

                  <div className="flex justify-between items-center pt-8">
                    <div className="text-center">
                      <div className="w-48 border-b-2 border-gray-400 mb-2"></div>
                      <p className="text-sm text-gray-600">Course Instructor</p>
                      <p className="font-semibold">Java Mastery Team</p>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-xs text-gray-500">Official Seal</p>
                    </div>

                    <div className="text-center">
                      <div className="w-48 border-b-2 border-gray-400 mb-2"></div>
                      <p className="text-sm text-gray-600">Program Director</p>
                      <p className="font-semibold">MGX Education</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      Certificate ID: JM-{Date.now().toString().slice(-8)} | 
                      Verification available at javamasterycourse.com/verify
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="text-center mt-8 space-y-4">
            <p className="text-gray-600">
              🎉 Congratulations on completing the Java Mastery Course! 🎉
            </p>
            <div className="flex justify-center space-x-4">
              <Button onClick={downloadCertificate} size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="h-5 w-5 mr-2" />
                Download Certificate
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="h-5 w-5 mr-2" />
                Share on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}