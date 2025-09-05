import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Code,
  Link,
  Image,
  Video,
  Table,
  Heading1,
  Heading2,
  Heading3,
  Undo,
  Redo,
  Save,
  Eye,
  Upload,
  X,
  Plus,
  Settings,
} from 'lucide-react';
import { toast } from 'sonner';

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  onSave?: (content: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  showToolbar?: boolean;
  showPreview?: boolean;
  maxLength?: number;
  className?: string;
}

interface ToolbarButton {
  icon: React.ReactNode;
  label: string;
  command: string;
  value?: string;
}

const TOOLBAR_BUTTONS: ToolbarButton[] = [
  { icon: <Bold className="h-4 w-4" />, label: 'Bold', command: 'bold' },
  { icon: <Italic className="h-4 w-4" />, label: 'Italic', command: 'italic' },
  { icon: <Underline className="h-4 w-4" />, label: 'Underline', command: 'underline' },
  { icon: <Strikethrough className="h-4 w-4" />, label: 'Strikethrough', command: 'strikeThrough' },
  { icon: <AlignLeft className="h-4 w-4" />, label: 'Align Left', command: 'justifyLeft' },
  { icon: <AlignCenter className="h-4 w-4" />, label: 'Align Center', command: 'justifyCenter' },
  { icon: <AlignRight className="h-4 w-4" />, label: 'Align Right', command: 'justifyRight' },
  { icon: <AlignJustify className="h-4 w-4" />, label: 'Justify', command: 'justifyFull' },
  { icon: <List className="h-4 w-4" />, label: 'Bullet List', command: 'insertUnorderedList' },
  { icon: <ListOrdered className="h-4 w-4" />, label: 'Numbered List', command: 'insertOrderedList' },
  { icon: <Quote className="h-4 w-4" />, label: 'Quote', command: 'formatBlock', value: 'blockquote' },
  { icon: <Code className="h-4 w-4" />, label: 'Code', command: 'formatBlock', value: 'pre' },
  { icon: <Heading1 className="h-4 w-4" />, label: 'Heading 1', command: 'formatBlock', value: 'h1' },
  { icon: <Heading2 className="h-4 w-4" />, label: 'Heading 2', command: 'formatBlock', value: 'h2' },
  { icon: <Heading3 className="h-4 w-4" />, label: 'Heading 3', command: 'formatBlock', value: 'h3' },
];

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  content,
  onChange,
  onSave,
  placeholder = 'Start writing...',
  readOnly = false,
  showToolbar = true,
  showPreview = true,
  maxLength,
  className = '',
}) => {
  const [currentContent, setCurrentContent] = useState(content);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);

  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCurrentContent(content);
    updateCounts(content);
  }, [content]);

  useEffect(() => {
    if (editorRef.current && !readOnly) {
      editorRef.current.innerHTML = currentContent;
    }
  }, [currentContent, readOnly]);

  const updateCounts = (text: string) => {
    const plainText = text.replace(/<[^>]*>/g, '');
    setCharacterCount(plainText.length);
    setWordCount(plainText.trim() ? plainText.trim().split(/\s+/).length : 0);
  };

  const handleContentChange = () => {
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML;
      setCurrentContent(newContent);
      updateCounts(newContent);
      onChange(newContent);
    }
  };

  const executeCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    handleContentChange();
  };

  const handleToolbarClick = (button: ToolbarButton) => {
    if (button.command === 'createLink') {
      setShowLinkDialog(true);
      return;
    }
    if (button.command === 'insertImage') {
      setShowImageDialog(true);
      return;
    }
    executeCommand(button.command, button.value);
  };

  const insertLink = () => {
    if (linkUrl) {
      const link = linkText || linkUrl;
      executeCommand('insertHTML', `<a href="${linkUrl}" target="_blank">${link}</a>`);
      setLinkUrl('');
      setLinkText('');
      setShowLinkDialog(false);
    }
  };

  const insertImage = () => {
    if (imageUrl) {
      executeCommand('insertHTML', `<img src="${imageUrl}" alt="${imageAlt}" style="max-width: 100%; height: auto;" />`);
      setImageUrl('');
      setImageAlt('');
      setShowImageDialog(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // In a real app, you would upload the file to your server
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (file.type.startsWith('image/')) {
          executeCommand('insertHTML', `<img src="${result}" alt="${file.name}" style="max-width: 100%; height: auto;" />`);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const insertTable = () => {
    const tableHTML = `
      <table border="1" style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr>
            <th style="padding: 8px; border: 1px solid #ddd;">Header 1</th>
            <th style="padding: 8px; border: 1px solid #ddd;">Header 2</th>
            <th style="padding: 8px; border: 1px solid #ddd;">Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Cell 1</td>
            <td style="padding: 8px; border: 1px solid #ddd;">Cell 2</td>
            <td style="padding: 8px; border: 1px solid #ddd;">Cell 3</td>
          </tr>
        </tbody>
      </table>
    `;
    executeCommand('insertHTML', tableHTML);
  };

  const insertCodeBlock = () => {
    const codeHTML = `
      <pre style="background-color: #f4f4f4; padding: 16px; border-radius: 4px; overflow-x: auto; font-family: 'Courier New', monospace;">
        <code>// Your code here</code>
      </pre>
    `;
    executeCommand('insertHTML', codeHTML);
  };

  const handleSave = () => {
    if (onSave) {
      onSave(currentContent);
      toast.success('Content saved successfully!');
    }
  };

  const renderPreview = () => {
    return (
      <div
        className="prose prose-sm max-w-none p-4 min-h-[400px] border rounded-md"
        dangerouslySetInnerHTML={{ __html: currentContent }}
      />
    );
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Content Editor</CardTitle>
          <div className="flex items-center space-x-2">
            {showPreview && (
              <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'edit' | 'preview')}>
                <TabsList>
                  <TabsTrigger value="edit">Edit</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
              </Tabs>
            )}
            {onSave && (
              <Button onClick={handleSave} size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {showToolbar && !readOnly && activeTab === 'edit' && (
          <div className="border-b pb-3 mb-3">
            <div className="flex flex-wrap gap-1">
              {TOOLBAR_BUTTONS.map((button, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleToolbarClick(button)}
                  title={button.label}
                >
                  {button.icon}
                </Button>
              ))}
              
              <Separator orientation="vertical" className="mx-1 h-8" />
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowLinkDialog(true)}
                title="Insert Link"
              >
                <Link className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                title="Upload Image"
              >
                <Upload className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={insertTable}
                title="Insert Table"
              >
                <Table className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={insertCodeBlock}
                title="Insert Code Block"
              >
                <Code className="h-4 w-4" />
              </Button>
              
              <Separator orientation="vertical" className="mx-1 h-8" />
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => executeCommand('undo')}
                title="Undo"
              >
                <Undo className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => executeCommand('redo')}
                title="Redo"
              >
                <Redo className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {activeTab === 'edit' ? (
          <div>
            <div
              ref={editorRef}
              contentEditable={!readOnly}
              className="min-h-[400px] p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ whiteSpace: 'pre-wrap' }}
              onInput={handleContentChange}
              onBlur={handleContentChange}
              data-placeholder={placeholder}
              suppressContentEditableWarning={true}
            />
            
            <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span>{wordCount} words</span>
                <span>{characterCount} characters</span>
                {maxLength && (
                  <Badge variant={characterCount > maxLength ? 'destructive' : 'secondary'}>
                    {characterCount}/{maxLength}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ) : (
          renderPreview()
        )}

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />

        {/* Link Dialog */}
        {showLinkDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-96">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Insert Link</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowLinkDialog(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="linkUrl">URL</Label>
                  <Input
                    id="linkUrl"
                    value={linkUrl}
                    onChange={(e) => setLinkUrl(e.target.value)}
                    placeholder="https://example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="linkText">Link Text (optional)</Label>
                  <Input
                    id="linkText"
                    value={linkText}
                    onChange={(e) => setLinkText(e.target.value)}
                    placeholder="Link text"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setShowLinkDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={insertLink}>Insert Link</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Image Dialog */}
        {showImageDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-96">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Insert Image</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowImageDialog(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="imageUrl">Image URL</Label>
                  <Input
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div>
                  <Label htmlFor="imageAlt">Alt Text</Label>
                  <Input
                    id="imageAlt"
                    value={imageAlt}
                    onChange={(e) => setImageAlt(e.target.value)}
                    placeholder="Image description"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setShowImageDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={insertImage}>Insert Image</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RichTextEditor;