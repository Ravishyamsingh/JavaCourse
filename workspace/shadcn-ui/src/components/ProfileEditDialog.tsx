import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useAuth } from '@/contexts/AuthContext';
import { updateProfile } from 'firebase/auth';
import { toast } from 'sonner';
import { User, Save, X } from 'lucide-react';

interface ProfileEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProfileEditDialog({ open, onOpenChange }: ProfileEditDialogProps) {
  const { user } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [isLoading, setIsLoading] = useState(false);

  // Function to clean and validate name
  const cleanDisplayName = (name: string) => {
    // Common department abbreviations to remove
    const departmentCodes = [
      'CSE', 'ECE', 'EEE', 'MECH', 'CIVIL', 'IT', 'BTECH', 'MTECH', 'MBA', 'MCA',
      'CS', 'EC', 'EE', 'ME', 'CE', 'AI', 'ML', 'DS', 'AIML', 'AIDS', 'CSBS'
    ];
    
    // First, handle initials with dots (preserve them temporarily)
    let cleanName = name
      .replace(/([A-Z])\./g, '$1DOTPLACEHOLDER') // Replace A. with ADOTPLACEHOLDER
      .replace(/[^a-zA-Z\s]/g, '') // Remove numbers and other special characters
      .replace(/DOTPLACEHOLDER/g, '.') // Restore dots for initials
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim(); // Remove leading/trailing spaces
    
    // Remove department codes (case insensitive)
    departmentCodes.forEach(dept => {
      const regex = new RegExp(`\\b${dept}\\b`, 'gi');
      cleanName = cleanName.replace(regex, '');
    });
    
    // Clean up extra spaces after removal
    cleanName = cleanName.replace(/\s+/g, ' ').trim();
    
    // Capitalize each word, handling initials properly
    return cleanName
      .split(' ')
      .map(word => {
        if (word.length === 2 && word.endsWith('.')) {
          // Handle initials like "A." or "M."
          return word.charAt(0).toUpperCase() + '.';
        } else {
          // Handle regular words
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      })
      .join(' ');
  };

  const handleSave = async () => {
    if (!user) return;
    
    const cleanedName = cleanDisplayName(displayName);
    
    if (!cleanedName) {
      toast.error('Please enter a valid name');
      return;
    }

    setIsLoading(true);
    
    try {
      await updateProfile(user, {
        displayName: cleanedName
      });
      
      toast.success('Profile updated successfully!');
      onOpenChange(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const previewName = cleanDisplayName(displayName);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <User className="h-5 w-5" />
            <span>Edit Profile</span>
          </DialogTitle>
          <DialogDescription>
            Update your display name for certificates. Department codes and numbers will be automatically removed.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="displayName">Display Name</Label>
            <Input
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full"
            />
          </div>
          
          {previewName && (
            <div className="space-y-2">
              <Label>Certificate Preview</Label>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">This name will appear on your certificate:</p>
                <p className="font-semibold text-blue-900 text-lg">{previewName}</p>
              </div>
            </div>
          )}
          
          <div className="text-xs text-gray-500 space-y-1">
            <p><strong>Auto-removed:</strong> Department codes (CSE, ECE, IT, etc.), numbers, special characters</p>
            <p><strong>Preserved:</strong> Initials with dots (A., Dr., etc.)</p>
            <p><strong>Example:</strong> "A. Kumar Singh CSE" → "A. Kumar Singh"</p>
          </div>
        </div>
        
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isLoading}
          >
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSave}
            disabled={isLoading || !displayName.trim()}
          >
            <Save className="h-4 w-4 mr-2" />
            {isLoading ? 'Saving...' : 'Save Changes'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}