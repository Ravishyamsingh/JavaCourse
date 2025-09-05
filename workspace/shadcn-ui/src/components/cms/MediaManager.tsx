import React, { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Upload,
  Image,
  Video,
  FileText,
  Music,
  Archive,
  Trash2,
  Download,
  Eye,
  Edit,
  Copy,
  Search,
  Filter,
  Grid,
  List,
  FolderPlus,
  Folder,
  X,
  Check,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';
import { MediaFile, ResourceType } from '@/types/cms';
import { toast } from 'sonner';

interface MediaManagerProps {
  onSelect?: (file: MediaFile) => void;
  allowMultiple?: boolean;
  acceptedTypes?: ResourceType[];
  maxFileSize?: number; // in MB
  className?: string;
}

interface UploadProgress {
  file: File;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  error?: string;
}

const MIME_TYPE_ICONS: Record<string, React.ReactNode> = {
  'image/': <Image className="h-6 w-6" />,
  'video/': <Video className="h-6 w-6" />,
  'audio/': <Music className="h-6 w-6" />,
  'application/pdf': <FileText className="h-6 w-6" />,
  'text/': <FileText className="h-6 w-6" />,
  'application/zip': <Archive className="h-6 w-6" />,
  'application/x-rar': <Archive className="h-6 w-6" />,
};

const getFileIcon = (mimeType: string): React.ReactNode => {
  for (const [type, icon] of Object.entries(MIME_TYPE_ICONS)) {
    if (mimeType.startsWith(type)) {
      return icon;
    }
  }
  return <FileText className="h-6 w-6" />;
};

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const MediaManager: React.FC<MediaManagerProps> = ({
  onSelect,
  allowMultiple = false,
  acceptedTypes,
  maxFileSize = 10,
  className = '',
}) => {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());
  const [uploadProgress, setUploadProgress] = useState<UploadProgress[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentFolder, setCurrentFolder] = useState<string>('root');
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [editingFile, setEditingFile] = useState<MediaFile | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  // Mock data - in real app, this would come from API
  React.useEffect(() => {
    setFiles([
      {
        id: '1',
        filename: 'course-banner.jpg',
        originalName: 'Course Banner.jpg',
        mimeType: 'image/jpeg',
        size: 2048576,
        url: '/api/media/course-banner.jpg',
        thumbnailUrl: '/api/media/thumbnails/course-banner.jpg',
        alt: 'Course banner image',
        caption: 'Main course banner',
        uploadedBy: 'instructor-1',
        uploadedAt: new Date('2024-01-15'),
      },
      {
        id: '2',
        filename: 'lesson-video.mp4',
        originalName: 'Introduction Video.mp4',
        mimeType: 'video/mp4',
        size: 52428800,
        url: '/api/media/lesson-video.mp4',
        uploadedBy: 'instructor-1',
        uploadedAt: new Date('2024-01-16'),
      },
      {
        id: '3',
        filename: 'assignment-template.pdf',
        originalName: 'Assignment Template.pdf',
        mimeType: 'application/pdf',
        size: 1048576,
        url: '/api/media/assignment-template.pdf',
        uploadedBy: 'instructor-1',
        uploadedAt: new Date('2024-01-17'),
      },
    ]);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFileUpload(droppedFiles);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    handleFileUpload(selectedFiles);
  };

  const handleFileUpload = async (filesToUpload: File[]) => {
    const validFiles = filesToUpload.filter(file => {
      if (file.size > maxFileSize * 1024 * 1024) {
        toast.error(`File ${file.name} is too large. Maximum size is ${maxFileSize}MB.`);
        return false;
      }
      return true;
    });

    if (validFiles.length === 0) return;

    const newUploadProgress: UploadProgress[] = validFiles.map(file => ({
      file,
      progress: 0,
      status: 'uploading',
    }));

    setUploadProgress(prev => [...prev, ...newUploadProgress]);

    // Simulate file upload
    for (let i = 0; i < validFiles.length; i++) {
      const file = validFiles[i];
      
      try {
        // Simulate upload progress
        for (let progress = 0; progress <= 100; progress += 10) {
          await new Promise(resolve => setTimeout(resolve, 100));
          setUploadProgress(prev => 
            prev.map(item => 
              item.file === file 
                ? { ...item, progress }
                : item
            )
          );
        }

        // Create new media file
        const newMediaFile: MediaFile = {
          id: Date.now().toString() + i,
          filename: file.name.toLowerCase().replace(/\s+/g, '-'),
          originalName: file.name,
          mimeType: file.type,
          size: file.size,
          url: URL.createObjectURL(file),
          thumbnailUrl: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
          uploadedBy: 'current-user',
          uploadedAt: new Date(),
        };

        setFiles(prev => [...prev, newMediaFile]);
        
        setUploadProgress(prev => 
          prev.map(item => 
            item.file === file 
              ? { ...item, status: 'completed' }
              : item
          )
        );

        toast.success(`${file.name} uploaded successfully!`);
      } catch (error) {
        setUploadProgress(prev => 
          prev.map(item => 
            item.file === file 
              ? { ...item, status: 'error', error: 'Upload failed' }
              : item
          )
        );
        toast.error(`Failed to upload ${file.name}`);
      }
    }

    // Clear completed uploads after 3 seconds
    setTimeout(() => {
      setUploadProgress(prev => prev.filter(item => item.status !== 'completed'));
    }, 3000);
  };

  const handleFileSelection = (file: MediaFile) => {
    if (allowMultiple) {
      const newSelected = new Set(selectedFiles);
      if (newSelected.has(file.id)) {
        newSelected.delete(file.id);
      } else {
        newSelected.add(file.id);
      }
      setSelectedFiles(newSelected);
    } else {
      setSelectedFiles(new Set([file.id]));
      if (onSelect) {
        onSelect(file);
      }
    }
  };

  const handleDeleteFile = async (fileId: string) => {
    try {
      setFiles(prev => prev.filter(f => f.id !== fileId));
      setSelectedFiles(prev => {
        const newSet = new Set(prev);
        newSet.delete(fileId);
        return newSet;
      });
      toast.success('File deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete file');
    }
  };

  const handleEditFile = (file: MediaFile) => {
    setEditingFile(file);
    setShowEditDialog(true);
  };

  const handleSaveEdit = async (updatedFile: Partial<MediaFile>) => {
    if (!editingFile) return;

    try {
      setFiles(prev => 
        prev.map(f => 
          f.id === editingFile.id 
            ? { ...f, ...updatedFile }
            : f
        )
      );
      setShowEditDialog(false);
      setEditingFile(null);
      toast.success('File updated successfully!');
    } catch (error) {
      toast.error('Failed to update file');
    }
  };

  const filteredFiles = files.filter(file => {
    const matchesSearch = file.originalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         file.filename.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || file.mimeType.startsWith(filterType);
    return matchesSearch && matchesType;
  });

  const renderFileCard = (file: MediaFile) => {
    const isSelected = selectedFiles.has(file.id);
    
    return (
      <Card 
        key={file.id}
        className={`cursor-pointer transition-all hover:shadow-md ${
          isSelected ? 'ring-2 ring-blue-500' : ''
        }`}
        onClick={() => handleFileSelection(file)}
      >
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              {getFileIcon(file.mimeType)}
              <span className="text-sm font-medium truncate">{file.originalName}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEditFile(file);
                }}
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteFile(file.id);
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {file.thumbnailUrl && (
            <div className="mb-2">
              <img
                src={file.thumbnailUrl}
                alt={file.alt || file.originalName}
                className="w-full h-32 object-cover rounded"
              />
            </div>
          )}
          
          <div className="text-xs text-gray-500 space-y-1">
            <div>Size: {formatFileSize(file.size)}</div>
            <div>Type: {file.mimeType}</div>
            <div>Uploaded: {file.uploadedAt.toLocaleDateString()}</div>
          </div>
          
          {file.caption && (
            <div className="mt-2 text-xs text-gray-600">{file.caption}</div>
          )}
        </CardContent>
      </Card>
    );
  };

  const renderFileRow = (file: MediaFile) => {
    const isSelected = selectedFiles.has(file.id);
    
    return (
      <div
        key={file.id}
        className={`flex items-center p-3 border-b cursor-pointer hover:bg-gray-50 ${
          isSelected ? 'bg-blue-50' : ''
        }`}
        onClick={() => handleFileSelection(file)}
      >
        <div className="flex items-center space-x-3 flex-1">
          {getFileIcon(file.mimeType)}
          <div className="flex-1 min-w-0">
            <div className="font-medium truncate">{file.originalName}</div>
            <div className="text-sm text-gray-500">{file.filename}</div>
          </div>
          <div className="text-sm text-gray-500">{formatFileSize(file.size)}</div>
          <div className="text-sm text-gray-500">{file.uploadedAt.toLocaleDateString()}</div>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleEditFile(file);
              }}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteFile(file.id);
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Media Manager</CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            >
              {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
            </Button>
            <Button onClick={() => fileInputRef.current?.click()}>
              <Upload className="h-4 w-4 mr-2" />
              Upload Files
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Search and Filter */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Files</SelectItem>
              <SelectItem value="image/">Images</SelectItem>
              <SelectItem value="video/">Videos</SelectItem>
              <SelectItem value="audio/">Audio</SelectItem>
              <SelectItem value="application/pdf">PDFs</SelectItem>
              <SelectItem value="text/">Documents</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Upload Progress */}
        {uploadProgress.length > 0 && (
          <div className="mb-6 space-y-2">
            {uploadProgress.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{item.file.name}</span>
                    <span className="text-sm text-gray-500">
                      {item.status === 'uploading' && `${item.progress}%`}
                      {item.status === 'completed' && <Check className="h-4 w-4 text-green-500" />}
                      {item.status === 'error' && <AlertCircle className="h-4 w-4 text-red-500" />}
                    </span>
                  </div>
                  {item.status === 'uploading' && (
                    <Progress value={item.progress} className="h-2" />
                  )}
                  {item.status === 'error' && (
                    <div className="text-sm text-red-500">{item.error}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Drag and Drop Zone */}
        <div
          ref={dropZoneRef}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6 hover:border-gray-400 transition-colors"
        >
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <div className="text-lg font-medium text-gray-600 mb-2">
            Drag and drop files here
          </div>
          <div className="text-sm text-gray-500 mb-4">
            or click to browse files
          </div>
          <Button
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
          >
            Browse Files
          </Button>
        </div>

        {/* File List */}
        {filteredFiles.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No files found
          </div>
        ) : (
          <div>
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredFiles.map(renderFileCard)}
              </div>
            ) : (
              <div className="border rounded-lg">
                <div className="flex items-center p-3 border-b bg-gray-50 font-medium text-sm">
                  <div className="flex-1">Name</div>
                  <div className="w-20">Size</div>
                  <div className="w-24">Date</div>
                  <div className="w-20">Actions</div>
                </div>
                {filteredFiles.map(renderFileRow)}
              </div>
            )}
          </div>
        )}

        {/* Selected Files Actions */}
        {selectedFiles.size > 0 && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                {selectedFiles.size} file{selectedFiles.size > 1 ? 's' : ''} selected
              </span>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedFiles(new Set())}
                >
                  Clear Selection
                </Button>
                {onSelect && allowMultiple && (
                  <Button
                    size="sm"
                    onClick={() => {
                      const selectedFileObjects = files.filter(f => selectedFiles.has(f.id));
                      selectedFileObjects.forEach(onSelect);
                    }}
                  >
                    Use Selected
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileSelect}
          className="hidden"
          accept={acceptedTypes?.map(type => {
            switch (type) {
              case ResourceType.IMAGE: return 'image/*';
              case ResourceType.VIDEO: return 'video/*';
              case ResourceType.AUDIO: return 'audio/*';
              case ResourceType.DOCUMENT: return '.pdf,.doc,.docx,.txt';
              default: return '*/*';
            }
          }).join(',')}
        />

        {/* Edit File Dialog */}
        {showEditDialog && editingFile && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-96 max-h-[80vh] overflow-y-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Edit File</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowEditDialog(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="fileName">File Name</Label>
                  <Input
                    id="fileName"
                    defaultValue={editingFile.originalName}
                    onChange={(e) => setEditingFile({...editingFile, originalName: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="altText">Alt Text</Label>
                  <Input
                    id="altText"
                    defaultValue={editingFile.alt || ''}
                    onChange={(e) => setEditingFile({...editingFile, alt: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="caption">Caption</Label>
                  <Textarea
                    id="caption"
                    defaultValue={editingFile.caption || ''}
                    onChange={(e) => setEditingFile({...editingFile, caption: e.target.value})}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setShowEditDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => handleSaveEdit(editingFile)}>
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MediaManager;