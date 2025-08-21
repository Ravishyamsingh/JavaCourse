import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Award, CheckCircle2, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center space-x-2">
          <Award className="h-6 w-6 text-yellow-600" />
          <span>Course Completion Certificate</span>
        </CardTitle>
        <CardDescription>
          Complete all modules to earn your Java Mastery Certificate
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <div className="max-w-md mx-auto">
          <Progress value={progressPercentage} className="h-3" />
          <p className="text-sm text-gray-600 mt-2">
            {Math.round(progressPercentage)}% Complete ({completedLessonsCount}/{totalLessons} lessons)
          </p>
        </div>

        {canGetCertificate ? (
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <h3 className="text-lg font-bold text-green-800">Congratulations!</h3>
              <p className="text-green-700">You've completed the Java Mastery Course!</p>
            </div>
            <Button 
              onClick={() => navigate('/certificate')}
              className="bg-yellow-600 hover:bg-yellow-700"
              size="lg"
            >
              <Award className="h-5 w-5 mr-2" />
              Download Certificate
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-2" />
              <h3 className="text-lg font-bold text-blue-800">Keep Going!</h3>
              <p className="text-blue-700">
                Complete {totalLessons - completedLessonsCount} more lessons to earn your certificate
              </p>
            </div>
            <Button 
              onClick={() => navigate('/course')}
              variant="outline"
              size="lg"
            >
              Continue Learning
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
