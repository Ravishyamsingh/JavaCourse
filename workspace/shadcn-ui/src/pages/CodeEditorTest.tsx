import CodeEditor from '@/components/CodeEditor';

export default function CodeEditorTest() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Code Editor Test Page</h1>
        <p className="text-gray-600 mb-8">Test the Java code editor functionality below. Click "Run Code" to compile and execute your Java code.</p>
        
        <CodeEditor
          initialCode={`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Try modifying this code
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }
    }
}`}
          title="Java Code Editor"
          description="Write and run your Java code"
          readonly={false}
          sampleInput=""
          height="500px"
        />
      </div>
    </div>
  );
}
