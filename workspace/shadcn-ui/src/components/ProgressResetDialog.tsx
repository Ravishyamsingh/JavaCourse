import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useProgress } from '@/contexts/ProgressContext';
import { toast } from 'sonner';
import { RotateCcw, AlertTriangle, X } from 'lucide-react';

interface ProgressResetDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProgressResetDialog({ open, onOpenChange }: ProgressResetDialogProps) {
  const { resetProgress, getCompletedCount, totalStudyTime, studyStreak } = useProgress();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleResetClick = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmReset = () => {
    resetProgress();
    setShowConfirmDialog(false);
    onOpenChange(false);
    toast.success('Course progress has been reset successfully!', {
      description: 'You can now start the course from the beginning.',
    });
  };

  const completedLessons = getCompletedCount();
  const studyHours = Math.round(totalStudyTime * 10) / 10;

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <RotateCcw className="h-5 w-5" />
              <span>Reset Course Progress</span>
            </DialogTitle>
            <DialogDescription>
              This will permanently delete all your course progress and start fresh. This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Current Progress Summary:</h4>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{completedLessons}</div>
                  <div className="text-xs text-gray-600">Lessons</div>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{studyHours}h</div>
                  <div className="text-xs text-gray-600">Study Time</div>
                </div>
                <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{studyStreak}</div>
                  <div className="text-xs text-gray-600">Day Streak</div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-red-800">Warning</p>
                  <p className="text-sm text-red-700">
                    All completed lessons, study time, and streak data will be permanently deleted.
                    You will need to restart the course from Module 1, Lesson 1.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-500 space-y-1">
              <p><strong>What will be reset:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>All completed lesson markers</li>
                <li>Total study time counter</li>
                <li>Study streak counter</li>
                <li>Module progress indicators</li>
              </ul>
            </div>
          </div>
          
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleResetClick}
              disabled={completedLessons === 0}
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset Progress
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <span>Are you absolutely sure?</span>
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete all your course progress
              including {completedLessons} completed lessons, {studyHours} hours of study time, 
              and your {studyStreak}-day streak.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmReset}
              className="bg-red-600 hover:bg-red-700"
            >
              Yes, reset everything
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}