import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle2, Target, Download, Share2, Star, Calendar, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface CertificateSectionProps {
  progressPercentage: number;
  completedLessonsCount: number;
  totalLessons: number;
  canGetCertificate: boolean;
}

export default function CertificateSection({
  progressPercentage,
  completedLessonsCount,
  totalLessons,
  canGetCertificate
}: CertificateSectionProps) {
  const navigate = useNavigate();
  const [showPreview, setShowPreview] = useState(false);

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const remainingLessons = totalLessons - completedLessonsCount;
  const estimatedCompletionDays = Math.ceil(remainingLessons / 3); // Assuming 3 lessons per day

  const CertificatePreview = () => (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8 rounded-2xl border-4 border-gradient-to-r from-blue-200 to-purple-200 shadow-2xl max-w-2xl mx-auto">
      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-20"></div>
      <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-20"></div>

      {/* Certificate Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg">
            <Award className="h-12 w-12 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
          Certificate of Completion
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
      </div>

      {/* Certificate Body */}
      <div className="text-center space-y-6">
        <p className="text-lg text-gray-700">This is to certify that</p>
        
        <div className="py-4 px-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-dashed border-blue-200">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <User className="h-5 w-5 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Student Name</span>
          </div>
          <p className="text-sm text-gray-600">Java Course Participant</p>
        </div>

        <p className="text-lg text-gray-700">has successfully completed the comprehensive</p>
        
        <div className="py-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Java Mastery Course
          </h2>
          <p className="text-gray-600">Complete Full-Stack Java Development Program</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Badge className="bg-blue-100 text-blue-800">20 Modules</Badge>
            <Badge className="bg-green-100 text-green-800">140 Lessons</Badge>
            <Badge className="bg-purple-100 text-purple-800">Full-Stack</Badge>
          </div>
        </div>

        <p className="text-gray-700">demonstrating proficiency in Java programming, web development, and software engineering best practices.</p>
      </div>

      {/* Certificate Footer */}
      <div className="flex justify-between items-end mt-12 pt-8 border-t border-gray-200">
        <div className="text-left">
          <div className="flex items-center space-x-2 mb-2">
            <Calendar className="h-4 w-4 text-gray-600" />
            <span className="text-sm text-gray-600">Date of Completion</span>
          </div>
          <p className="font-semibold text-gray-800">{currentDate}</p>
        </div>
        
        <div className="text-center">
          <div className="w-32 border-b-2 border-gray-300 mb-2"></div>
          <p className="text-sm text-gray-600">Instructor Signature</p>
        </div>
        
        <div className="text-right">
          <div className="flex items-center space-x-2 mb-2">
            <Star className="h-4 w-4 text-yellow-500" />
            <span className="text-sm text-gray-600">Certificate ID</span>
          </div>
          <p className="font-mono text-sm text-gray-800">JMC-2024-{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Main Certificate Card */}
      <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 border-b border-yellow-100/50">
          <CardTitle className="flex items-center justify-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-800">Java Mastery Certificate</div>
              <div className="text-sm text-gray-600">Professional Course Completion</div>
            </div>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-8">
          {/* Progress Section */}
          <div className="text-center mb-8">
            <div className="max-w-md mx-auto mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Course Progress</span>
                <span className="text-sm font-bold text-blue-600">{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-4 bg-gray-200" />
              <p className="text-sm text-gray-600 mt-2">
                {completedLessonsCount} of {totalLessons} lessons completed
              </p>
            </div>

            {/* Course Statistics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">20</div>
                <div className="text-xs text-gray-600">Modules</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600">140</div>
                <div className="text-xs text-gray-600">Total Lessons</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">{completedLessonsCount}</div>
                <div className="text-xs text-gray-600">Completed</div>
              </div>
            </div>
          </div>

          {canGetCertificate ? (
            <div className="space-y-6">
              {/* Congratulations Section */}
              <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border-2 border-green-200 rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg animate-pulse">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">🎉 Congratulations!</h3>
                <p className="text-green-700 mb-4">
                  You've successfully completed the Java Mastery Course! Your dedication and hard work have paid off.
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge className="bg-green-100 text-green-800">Course Completed</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800">Certificate Ready</Badge>
                  <Badge className="bg-blue-100 text-blue-800">Professional Level</Badge>
                </div>
              </div>

              {/* Certificate Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setShowPreview(!showPreview)}
                  variant="outline"
                  size="lg"
                  className="hover:bg-blue-50 hover:border-blue-300"
                >
                  <Award className="h-5 w-5 mr-2" />
                  {showPreview ? 'Hide Preview' : 'Preview Certificate'}
                </Button>
                <Button
                  onClick={() => navigate('/certificate')}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 shadow-lg"
                  size="lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Certificate
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-green-50 hover:border-green-300"
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  Share Achievement
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Progress Section */}
              <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-2">Keep Going!</h3>
                <p className="text-blue-700 mb-4">
                  You're making great progress! Complete {remainingLessons} more lessons to earn your certificate.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-white/50 rounded-xl">
                    <div className="text-lg font-bold text-blue-600">{remainingLessons}</div>
                    <div className="text-xs text-gray-600">Lessons Remaining</div>
                  </div>
                  <div className="text-center p-3 bg-white/50 rounded-xl">
                    <div className="text-lg font-bold text-purple-600">~{estimatedCompletionDays}</div>
                    <div className="text-xs text-gray-600">Days to Complete</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate('/course')}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg"
                  size="lg"
                >
                  <Target className="h-5 w-5 mr-2" />
                  Continue Learning
                </Button>
                <Button
                  onClick={() => setShowPreview(!showPreview)}
                  variant="outline"
                  size="lg"
                  className="hover:bg-gray-50"
                >
                  <Award className="h-5 w-5 mr-2" />
                  {showPreview ? 'Hide Preview' : 'Preview Certificate'}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Certificate Preview */}
      {showPreview && (
        <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-bold text-gray-800">Certificate Preview</CardTitle>
            <CardDescription>This is how your certificate will look when completed</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <CertificatePreview />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
