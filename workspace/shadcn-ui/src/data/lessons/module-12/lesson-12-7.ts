import { LessonContent } from '../../types/LessonTypes';

export const lesson_12_7: LessonContent = {
  title: 'Native Interoperability (JNI)',
  type: 'lesson',
  duration: '60 min',
  module: 'Advanced Java Features',
  content: {
    overview: 'Master Java Native Interface (JNI) for seamless integration with native code. Learn to call C/C++ libraries from Java, handle native memory management, and build high-performance hybrid applications.',
    objectives: [
      'Understand JNI architecture and native method invocation',
      'Create and compile native libraries for Java integration',
      'Master data type mapping between Java and native code',
      'Implement efficient memory management and error handling',
      'Build cross-platform native extensions',
      'Apply best practices for production JNI applications'
    ],
    theory: `
      <div class="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Java Native Interface (JNI)
        </h1>
        <p class="mt-3 text-orange-100 text-lg">Bridging Java applications with native C/C++ libraries for maximum performance</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            JNI Architecture and Concepts
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            JNI enables Java applications to call native methods written in C/C++ and allows native code to 
            call Java methods, providing a bridge between the Java Virtual Machine and native libraries.
          </p>
          
          <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 mb-4">
            <h4 class="font-bold text-orange-800 mb-2">🔗 JNI Benefits</h4>
            <p class="text-orange-700">JNI enables performance-critical operations, legacy system integration, platform-specific functionality, and access to hardware-level features.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Core Components</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-bold text-blue-700">Native Methods</h5>
                  <p class="text-gray-600 text-sm">Java methods declared as native</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-green-400">
                  <h5 class="font-bold text-green-700">JNI Functions</h5>
                  <p class="text-gray-600 text-sm">C/C++ functions implementing native methods</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                  <h5 class="font-bold text-purple-700">JNI Environment</h5>
                  <p class="text-gray-600 text-sm">Interface pointer for JVM interaction</p>
                </div>
              </div>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Use Cases</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>Performance:</strong> CPU-intensive computations</li>
                <li>• <strong>Legacy Integration:</strong> Existing C/C++ libraries</li>
                <li>• <strong>Platform APIs:</strong> OS-specific functionality</li>
                <li>• <strong>Hardware Access:</strong> Direct hardware control</li>
                <li>• <strong>Third-party Libraries:</strong> Native library integration</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Native Method Implementation
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Implementing native methods involves declaring native methods in Java, generating header files, and implementing the native functions in C/C++.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Implementation Steps</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-green-400">
                    <h5 class="font-bold text-green-700">1. Declare Native Methods</h5>
                    <p class="text-gray-600 text-sm">Use native keyword in Java</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                    <h5 class="font-bold text-blue-700">2. Generate Headers</h5>
                    <p class="text-gray-600 text-sm">Use javac -h to create C headers</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                    <h5 class="font-bold text-purple-700">3. Implement Functions</h5>
                    <p class="text-gray-600 text-sm">Write C/C++ implementation</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-orange-400">
                    <h5 class="font-bold text-orange-700">4. Compile Library</h5>
                    <p class="text-gray-600 text-sm">Create shared library (.so/.dll)</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-pink-50 p-4 rounded-lg">
                <h4 class="font-bold text-pink-800 mb-2">Data Type Mapping</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-white p-2 rounded border-l-4 border-blue-400">
                    <strong>int ↔ jint:</strong> 32-bit signed integer
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-green-400">
                    <strong>long ↔ jlong:</strong> 64-bit signed integer
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-purple-400">
                    <strong>String ↔ jstring:</strong> Unicode string object
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-red-400">
                    <strong>Object[] ↔ jobjectArray:</strong> Object array
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Memory Management and Error Handling
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Proper memory management and error handling are critical in JNI to prevent memory leaks, crashes, and security vulnerabilities.</p>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Memory Management</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Local and global references</li>
                  <li>• Reference cleanup and deletion</li>
                  <li>• String and array handling</li>
                  <li>• Critical section management</li>
                  <li>• Memory leak prevention</li>
                </ul>
              </div>
              
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Error Handling</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Exception checking and handling</li>
                  <li>• Native error propagation</li>
                  <li>• Graceful failure recovery</li>
                  <li>• Resource cleanup on errors</li>
                  <li>• Debugging and logging</li>
                </ul>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Best Practices</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Minimize JNI call overhead</li>
                  <li>• Cache field and method IDs</li>
                  <li>• Use direct byte buffers</li>
                  <li>• Avoid frequent callbacks</li>
                  <li>• Thread safety considerations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Advanced JNI Techniques
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Advanced JNI techniques enable sophisticated native integrations with optimal performance and maintainability.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Performance Optimization</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-white p-2 rounded border-l-4 border-blue-400">
                    <strong>Critical Sections:</strong> Pin arrays for direct access
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-green-400">
                    <strong>Direct Buffers:</strong> Zero-copy data transfer
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-purple-400">
                    <strong>Batch Operations:</strong> Minimize JNI transitions
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-red-400">
                    <strong>Caching:</strong> Store method/field IDs
                  </div>
                </div>
              </div>
              
              <div class="bg-lime-50 p-4 rounded-lg">
                <h4 class="font-bold text-lime-800 mb-2">Advanced Features</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-white p-2 rounded border-l-4 border-orange-400">
                    <strong>Callbacks:</strong> Native to Java method calls
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-teal-400">
                    <strong>Threading:</strong> Multi-threaded native code
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-indigo-400">
                    <strong>Weak References:</strong> Avoid memory leaks
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-pink-400">
                    <strong>JVM Invocation:</strong> Embed JVM in native apps
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// JNI Implementation Examples</div>
        
        <div class="text-gray-400 mb-4">// === Java Native Method Declaration ===</div>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">NativeCalculator</div> {<br/>
        &nbsp;&nbsp;<div class="text-gray-400">// Load native library</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">static</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.loadLibrary(<div class="text-green-300">"nativecalc"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Native method declarations</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public native</div> <div class="text-blue-400">int</div> <div class="text-yellow-400">add</div>(<div class="text-blue-400">int</div> a, <div class="text-blue-400">int</div> b);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public native</div> <div class="text-blue-400">double</div> <div class="text-yellow-400">sqrt</div>(<div class="text-blue-400">double</div> value);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public native</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">processString</div>(<div class="text-blue-400">String</div> input);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public native</div> <div class="text-blue-400">int</div>[] <div class="text-yellow-400">sortArray</div>(<div class="text-blue-400">int</div>[] array);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public native</div> <div class="text-blue-400">void</div> <div class="text-yellow-400">processBuffer</div>(<div class="text-blue-400">java.nio.ByteBuffer</div> buffer);<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Callback method for native code</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">onProgress</div>(<div class="text-blue-400">int</div> percentage) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Progress: "</div> + percentage + <div class="text-green-300">"%"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">NativeCalculator</div> calc = <div class="text-blue-400">new</div> <div class="text-yellow-400">NativeCalculator</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"5 + 3 = "</div> + calc.add(<div class="text-purple-400">5</div>, <div class="text-purple-400">3</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"sqrt(16) = "</div> + calc.sqrt(<div class="text-purple-400">16.0</div>));<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// === C Implementation (nativecalc.c) ===</div>
        <div class="text-blue-400">#include</div> <div class="text-green-300">&lt;jni.h&gt;</div><br/>
        <div class="text-blue-400">#include</div> <div class="text-green-300">&lt;stdio.h&gt;</div><br/>
        <div class="text-blue-400">#include</div> <div class="text-green-300">&lt;stdlib.h&gt;</div><br/>
        <div class="text-blue-400">#include</div> <div class="text-green-300">&lt;string.h&gt;</div><br/>
        <div class="text-blue-400">#include</div> <div class="text-green-300">&lt;math.h&gt;</div><br/>
        <div class="text-blue-400">#include</div> <div class="text-green-300">"NativeCalculator.h"</div><br/><br/>

        <div class="text-gray-400">// Simple addition function</div><br/>
        <div class="text-blue-400">JNIEXPORT</div> <div class="text-blue-400">jint</div> <div class="text-blue-400">JNICALL</div><br/>
        <div class="text-yellow-400">Java_NativeCalculator_add</div>(<div class="text-blue-400">JNIEnv</div> *env, <div class="text-blue-400">jobject</div> obj, <div class="text-blue-400">jint</div> a, <div class="text-blue-400">jint</div> b) {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">return</div> a + b;<br/>
        }<br/><br/>

        <div class="text-gray-400">// Square root calculation</div><br/>
        <div class="text-blue-400">JNIEXPORT</div> <div class="text-blue-400">jdouble</div> <div class="text-blue-400">JNICALL</div><br/>
        <div class="text-yellow-400">Java_NativeCalculator_sqrt</div>(<div class="text-blue-400">JNIEnv</div> *env, <div class="text-blue-400">jobject</div> obj, <div class="text-blue-400">jdouble</div> value) {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">if</div> (value &lt; <div class="text-purple-400">0</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Throw exception for negative values</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">jclass</div> exceptionClass = (*env)-&gt;FindClass(env, <div class="text-green-300">"java/lang/IllegalArgumentException"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;(*env)-&gt;ThrowNew(env, exceptionClass, <div class="text-green-300">"Cannot calculate square root of negative number"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-purple-400">0.0</div>;<br/>
        &nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;<div class="text-blue-400">return</div> sqrt(value);<br/>
        }<br/><br/>

        <div class="text-gray-400">// String processing with memory management</div><br/>
        <div class="text-blue-400">JNIEXPORT</div> <div class="text-blue-400">jstring</div> <div class="text-blue-400">JNICALL</div><br/>
        <div class="text-yellow-400">Java_NativeCalculator_processString</div>(<div class="text-blue-400">JNIEnv</div> *env, <div class="text-blue-400">jobject</div> obj, <div class="text-blue-400">jstring</div> input) {<br/>
        &nbsp;&nbsp;<div class="text-gray-400">// Get C string from Java string</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">const char</div> *inputStr = (*env)-&gt;GetStringUTFChars(env, input, <div class="text-blue-400">NULL</div>);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">if</div> (inputStr == <div class="text-blue-400">NULL</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">NULL</div>; <div class="text-gray-400">// OutOfMemoryError already thrown</div><br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Process string (convert to uppercase)</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">int</div> len = strlen(inputStr);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">char</div> *result = malloc(len + <div class="text-purple-400">1</div>);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> i = <div class="text-purple-400">0</div>; i &lt; len; i++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;result[i] = toupper(inputStr[i]);<br/>
        &nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;result[len] = <div class="text-green-300">'\\0'</div>;<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Create Java string and cleanup</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">jstring</div> jResult = (*env)-&gt;NewStringUTF(env, result);<br/>
        &nbsp;&nbsp;(*env)-&gt;ReleaseStringUTFChars(env, input, inputStr);<br/>
        &nbsp;&nbsp;free(result);<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">return</div> jResult;<br/>
        }<br/><br/>

        <div class="text-gray-400">// Array processing with critical sections</div><br/>
        <div class="text-blue-400">JNIEXPORT</div> <div class="text-blue-400">jintArray</div> <div class="text-blue-400">JNICALL</div><br/>
        <div class="text-yellow-400">Java_NativeCalculator_sortArray</div>(<div class="text-blue-400">JNIEnv</div> *env, <div class="text-blue-400">jobject</div> obj, <div class="text-blue-400">jintArray</div> array) {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">jsize</div> length = (*env)-&gt;GetArrayLength(env, array);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">jint</div> *elements = (*env)-&gt;GetIntArrayElements(env, array, <div class="text-blue-400">NULL</div>);<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Simple bubble sort</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> i = <div class="text-purple-400">0</div>; i &lt; length - <div class="text-purple-400">1</div>; i++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> j = <div class="text-purple-400">0</div>; j &lt; length - i - <div class="text-purple-400">1</div>; j++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (elements[j] &gt; elements[j + <div class="text-purple-400">1</div>]) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> temp = elements[j];<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elements[j] = elements[j + <div class="text-purple-400">1</div>];<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elements[j + <div class="text-purple-400">1</div>] = temp;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Create new array and copy sorted elements</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">jintArray</div> result = (*env)-&gt;NewIntArray(env, length);<br/>
        &nbsp;&nbsp;(*env)-&gt;SetIntArrayRegion(env, result, <div class="text-purple-400">0</div>, length, elements);<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Release array elements</div><br/>
        &nbsp;&nbsp;(*env)-&gt;ReleaseIntArrayElements(env, array, elements, <div class="text-purple-400">0</div>);<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">return</div> result;<br/>
        }<br/><br/>

        <div class="text-gray-400">// Direct buffer processing</div><br/>
        <div class="text-blue-400">JNIEXPORT</div> <div class="text-blue-400">void</div> <div class="text-blue-400">JNICALL</div><br/>
        <div class="text-yellow-400">Java_NativeCalculator_processBuffer</div>(<div class="text-blue-400">JNIEnv</div> *env, <div class="text-blue-400">jobject</div> obj, <div class="text-blue-400">jobject</div> buffer) {<br/>
        &nbsp;&nbsp;<div class="text-gray-400">// Get direct buffer address and capacity</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> *bufferPtr = (*env)-&gt;GetDirectBufferAddress(env, buffer);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">jlong</div> capacity = (*env)-&gt;GetDirectBufferCapacity(env, buffer);<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">if</div> (bufferPtr != <div class="text-blue-400">NULL</div> && capacity &gt; <div class="text-purple-400">0</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Process buffer data directly (example: fill with pattern)</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">unsigned char</div> *data = (<div class="text-blue-400">unsigned char</div> *)bufferPtr;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">jlong</div> i = <div class="text-purple-400">0</div>; i &lt; capacity; i++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data[i] = (<div class="text-blue-400">unsigned char</div>)(i % <div class="text-purple-400">256</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Call Java callback method</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">jclass</div> clazz = (*env)-&gt;GetObjectClass(env, obj);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">jmethodID</div> methodID = (*env)-&gt;GetMethodID(env, clazz, <div class="text-green-300">"onProgress"</div>, <div class="text-green-300">"(I)V"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (methodID != <div class="text-blue-400">NULL</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(*env)-&gt;CallVoidMethod(env, obj, methodID, <div class="text-purple-400">100</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// === Compilation Commands ===</div>
        <div class="text-gray-400">// Generate header file</div><br/>
        <div class="text-green-300">javac -h . NativeCalculator.java</div><br/><br/>

        <div class="text-gray-400">// Compile C library (Linux/macOS)</div><br/>
        <div class="text-green-300">gcc -shared -fPIC -I$JAVA_HOME/include -I$JAVA_HOME/include/linux -o libnativecalc.so nativecalc.c</div><br/><br/>

        <div class="text-gray-400">// Compile C library (Windows)</div><br/>
        <div class="text-green-300">gcc -shared -I"%JAVA_HOME%\\include" -I"%JAVA_HOME%\\include\\win32" -o nativecalc.dll nativecalc.c</div><br/><br/>

        <div class="text-gray-400">// Run Java application</div><br/>
        <div class="text-green-300">java -Djava.library.path=. NativeCalculator</div>
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <span class="w-3 h-8 bg-white rounded mr-3"></span>
          Practice Exercise: High-Performance Image Processing Library
        </h2>
        <p class="text-orange-100">Build a comprehensive JNI-based image processing library with native performance optimizations</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Requirements</h3>
          <div class="space-y-4">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">1. Core Image Operations</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Image loading and saving (JPEG, PNG, BMP formats)</li>
                <li>• Basic transformations (resize, rotate, flip)</li>
                <li>• Color space conversions (RGB, HSV, Grayscale)</li>
                <li>• Histogram analysis and equalization</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">2. Advanced Filters</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Convolution filters (blur, sharpen, edge detection)</li>
                <li>• Morphological operations (erosion, dilation)</li>
                <li>• Noise reduction algorithms</li>
                <li>• Custom kernel-based filtering</li>
              </ul>
            </div>
            
            <div class="bg-pink-50 p-4 rounded-lg">
              <h4 class="font-bold text-pink-800 mb-2">3. Performance Optimization</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Multi-threaded processing with OpenMP</li>
                <li>• SIMD optimizations for pixel operations</li>
                <li>• Memory-efficient streaming for large images</li>
                <li>• GPU acceleration integration (optional)</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">4. Java Integration</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• BufferedImage integration for seamless Java usage</li>
                <li>• Progress callbacks for long-running operations</li>
                <li>• Exception handling and error reporting</li>
                <li>• Memory management and resource cleanup</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">✅ Success Criteria</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                <div>
                  <p class="font-semibold text-gray-800">Native Performance</p>
                  <p class="text-gray-600 text-sm">Significant performance improvement over pure Java implementation</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p class="font-semibold text-gray-800">Memory Efficiency</p>
                  <p class="text-gray-600 text-sm">Proper memory management without leaks or crashes</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p class="font-semibold text-gray-800">Cross-Platform Support</p>
                  <p class="text-gray-600 text-sm">Works on Windows, Linux, and macOS</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                <div>
                  <p class="font-semibold text-gray-800">Robust Error Handling</p>
                  <p class="text-gray-600 text-sm">Graceful handling of errors and edge cases</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</div>
                <div>
                  <p class="font-semibold text-gray-800">Java API Integration</p>
                  <p class="text-gray-600 text-sm">Seamless integration with Java imaging APIs</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</div>
                <div>
                  <p class="font-semibold text-gray-800">Documentation</p>
                  <p class="text-gray-600 text-sm">Complete API documentation and usage examples</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🎯 Implementation Focus Areas</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="bg-blue-50 p-3 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-1">JNI Best Practices</h4>
                <p class="text-gray-700 text-sm">Implement proper reference management, exception handling, and thread safety for production-quality native code.</p>
              </div>
              
              <div class="bg-indigo-50 p-3 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-1">Performance Optimization</h4>
                <p class="text-gray-700 text-sm">Use SIMD instructions, multi-threading, and memory-efficient algorithms for maximum performance.</p>
              </div>
              
              <div class="bg-purple-50 p-3 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-1">Memory Management</h4>
                <p class="text-gray-700 text-sm">Implement efficient memory allocation strategies and ensure proper cleanup of native resources.</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="bg-cyan-50 p-3 rounded-lg">
                <h4 class="font-bold text-cyan-800 mb-1">Cross-Platform Build</h4>
                <p class="text-gray-700 text-sm">Create build scripts for multiple platforms and handle platform-specific compilation requirements.</p>
              </div>
              
              <div class="bg-teal-50 p-3 rounded-lg">
                <h4 class="font-bold text-teal-800 mb-1">Testing Strategy</h4>
                <p class="text-gray-700 text-sm">Develop comprehensive tests for native code including unit tests, integration tests, and performance benchmarks.</p>
              </div>
              
              <div class="bg-green-50 p-3 rounded-lg">
                <h4 class="font-bold text-green-800 mb-1">API Design</h4>
                <p class="text-gray-700 text-sm">Design intuitive Java APIs that hide JNI complexity while providing access to native performance.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🔧 Technical Architecture</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Java Layer</h4>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>• ImageProcessor main class</li>
                <li>• Filter and transformation APIs</li>
                <li>• Progress callback interfaces</li>
                <li>• Exception handling framework</li>
                <li>• BufferedImage integration</li>
              </ul>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Native Layer</h4>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>• Core image processing algorithms</li>
                <li>• Memory management utilities</li>
                <li>• Multi-threading coordination</li>
                <li>• Platform-specific optimizations</li>
                <li>• Error handling and logging</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Build System</h4>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>• Cross-platform build scripts</li>
                <li>• Dependency management</li>
                <li>• Automated testing pipeline</li>
                <li>• Performance benchmarking</li>
                <li>• Distribution packaging</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">⚡ Advanced Features</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="bg-indigo-50 p-3 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-1">Streaming Processing</h4>
                <p class="text-gray-700 text-sm">Handle large images that don't fit in memory by processing them in chunks with minimal memory footprint.</p>
              </div>
              
              <div class="bg-violet-50 p-3 rounded-lg">
                <h4 class="font-bold text-violet-800 mb-1">Plugin Architecture</h4>
                <p class="text-gray-700 text-sm">Design extensible architecture allowing custom filters and operations to be added dynamically.</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="bg-pink-50 p-3 rounded-lg">
                <h4 class="font-bold text-pink-800 mb-1">GPU Acceleration</h4>
                <p class="text-gray-700 text-sm">Optional GPU acceleration using OpenCL or CUDA for compute-intensive operations like convolutions.</p>
              </div>
              
              <div class="bg-rose-50 p-3 rounded-lg">
                <h4 class="font-bold text-rose-800 mb-1">Batch Processing</h4>
                <p class="text-gray-700 text-sm">Efficient batch processing capabilities for handling multiple images with optimized resource usage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
};