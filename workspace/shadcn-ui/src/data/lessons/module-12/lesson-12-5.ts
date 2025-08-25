import { LessonContent } from '../../types/LessonTypes';

export const lesson_12_5: LessonContent = {
  title: 'Security Features',
  type: 'lesson',
  duration: '55 min',
  module: 'Advanced Java Features',
  content: {
    overview: 'Master Java security architecture including cryptography, authentication, authorization, and secure coding practices. Learn to implement robust security measures and protect applications from common vulnerabilities.',
    objectives: [
      'Understand Java security architecture and security manager',
      'Implement cryptographic operations and secure communication',
      'Master authentication and authorization mechanisms',
      'Apply secure coding practices and vulnerability prevention',
      'Use Java security APIs and frameworks effectively',
      'Build comprehensive security audit and monitoring systems'
    ],
    theory: `
      <div class="bg-gradient-to-r from-red-600 to-pink-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Java Security Features
        </h1>
        <p class="mt-3 text-red-100 text-lg">Comprehensive security implementation and vulnerability protection</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Java Security Architecture
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Java provides a comprehensive security framework with multiple layers of protection including 
            bytecode verification, security manager, access control, and cryptographic services.
          </p>
          
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mb-4">
            <h4 class="font-bold text-red-800 mb-2">🛡️ Security Layers</h4>
            <p class="text-red-700">Java security operates through multiple layers: language-level safety, bytecode verification, class loading security, and runtime access control.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Core Components</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-bold text-blue-700">Security Manager</h5>
                  <p class="text-gray-600 text-sm">Runtime access control and permission checking</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-green-400">
                  <h5 class="font-bold text-green-700">Access Controller</h5>
                  <p class="text-gray-600 text-sm">Stack-based access control decisions</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                  <h5 class="font-bold text-purple-700">Policy Files</h5>
                  <p class="text-gray-600 text-sm">Permission configuration and management</p>
                </div>
              </div>
            </div>
            
            <div class="bg-pink-50 p-4 rounded-lg">
              <h4 class="font-bold text-pink-800 mb-2">Security Domains</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>System Domain:</strong> Full privileges for system code</li>
                <li>• <strong>Application Domain:</strong> Restricted privileges for apps</li>
                <li>• <strong>Untrusted Domain:</strong> Minimal privileges for external code</li>
                <li>• <strong>Signed Code:</strong> Enhanced privileges with verification</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-pink-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Cryptography and Secure Communication
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Java Cryptography Architecture (JCA) provides comprehensive cryptographic services for data protection and secure communication.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-pink-50 p-4 rounded-lg">
                <h4 class="font-bold text-pink-800 mb-2">Cryptographic Services</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-red-400">
                    <h5 class="font-bold text-red-700">Symmetric Encryption</h5>
                    <p class="text-gray-600 text-sm">AES, DES for fast data encryption</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                    <h5 class="font-bold text-blue-700">Asymmetric Encryption</h5>
                    <p class="text-gray-600 text-sm">RSA, ECC for key exchange and signatures</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-green-400">
                    <h5 class="font-bold text-green-700">Hash Functions</h5>
                    <p class="text-gray-600 text-sm">SHA-256, SHA-3 for data integrity</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-rose-50 p-4 rounded-lg">
                <h4 class="font-bold text-rose-800 mb-2">Secure Protocols</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                    <h5 class="font-bold text-purple-700">TLS/SSL</h5>
                    <p class="text-gray-600 text-sm">Secure network communication</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-indigo-400">
                    <h5 class="font-bold text-indigo-700">HTTPS</h5>
                    <p class="text-gray-600 text-sm">Secure web communication</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-teal-400">
                    <h5 class="font-bold text-teal-700">Digital Certificates</h5>
                    <p class="text-gray-600 text-sm">Identity verification and trust</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Authentication and Authorization
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Java Authentication and Authorization Service (JAAS) provides pluggable authentication and fine-grained access control.</p>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Authentication</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Username/password verification</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Certificate-based authentication</li>
                  <li>• Single sign-on (SSO)</li>
                  <li>• OAuth and OpenID Connect</li>
                </ul>
              </div>
              
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Authorization</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Role-based access control (RBAC)</li>
                  <li>• Attribute-based access control (ABAC)</li>
                  <li>• Permission-based security</li>
                  <li>• Resource-level protection</li>
                  <li>• Dynamic access decisions</li>
                </ul>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Session Management</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Secure session creation</li>
                  <li>• Session timeout handling</li>
                  <li>• Session fixation prevention</li>
                  <li>• Concurrent session control</li>
                  <li>• Session invalidation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Secure Coding Practices
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Implementing secure coding practices prevents common vulnerabilities and strengthens application security posture.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Common Vulnerabilities</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-white p-2 rounded border-l-4 border-red-400">
                    <strong>Injection Attacks:</strong> SQL, LDAP, OS command injection
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-blue-400">
                    <strong>XSS:</strong> Cross-site scripting vulnerabilities
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-green-400">
                    <strong>CSRF:</strong> Cross-site request forgery
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-purple-400">
                    <strong>Deserialization:</strong> Unsafe object deserialization
                  </div>
                </div>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold text-yellow-800 mb-2">Prevention Techniques</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-white p-2 rounded border-l-4 border-teal-400">
                    <strong>Input Validation:</strong> Sanitize and validate all inputs
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-indigo-400">
                    <strong>Output Encoding:</strong> Encode data for safe output
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-pink-400">
                    <strong>Parameterized Queries:</strong> Prevent SQL injection
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-cyan-400">
                    <strong>Secure Defaults:</strong> Fail-safe security configurations
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
        <div class="text-yellow-400 mb-4">// Java Security Implementation Examples</div>
        
        <div class="text-blue-400">import</div> javax.crypto.*;<br/>
        <div class="text-blue-400">import</div> javax.crypto.spec.*;<br/>
        <div class="text-blue-400">import</div> java.security.*;<br/>
        <div class="text-blue-400">import</div> java.security.cert.*;<br/>
        <div class="text-blue-400">import</div> javax.net.ssl.*;<br/>
        <div class="text-blue-400">import</div> java.util.*;<br/><br/>

        <div class="text-gray-400 mb-4">// === Cryptographic Operations ===</div>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">CryptographyExample</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> ALGORITHM = <div class="text-green-300">"AES"</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> TRANSFORMATION = <div class="text-green-300">"AES/GCM/NoPadding"</div>;<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Generate secure random key</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">SecretKey</div> <div class="text-yellow-400">generateKey</div>() <div class="text-blue-400">throws</div> <div class="text-blue-400">NoSuchAlgorithmException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">KeyGenerator</div> keyGen = <div class="text-blue-400">KeyGenerator</div>.getInstance(ALGORITHM);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;keyGen.init(<div class="text-purple-400">256</div>); <div class="text-gray-400">// AES-256</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> keyGen.generateKey();<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Encrypt data with AES-GCM</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">EncryptedData</div> <div class="text-yellow-400">encrypt</div>(<div class="text-blue-400">String</div> plaintext, <div class="text-blue-400">SecretKey</div> key) <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throws</div> <div class="text-blue-400">Exception</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Cipher</div> cipher = <div class="text-blue-400">Cipher</div>.getInstance(TRANSFORMATION);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;cipher.init(<div class="text-blue-400">Cipher</div>.ENCRYPT_MODE, key);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">byte</div>[] iv = cipher.getIV();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">byte</div>[] ciphertext = cipher.doFinal(plaintext.getBytes(<div class="text-green-300">"UTF-8"</div>));<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return new</div> <div class="text-yellow-400">EncryptedData</div>(ciphertext, iv);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Decrypt data with AES-GCM</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">decrypt</div>(<div class="text-blue-400">EncryptedData</div> encryptedData, <div class="text-blue-400">SecretKey</div> key) <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throws</div> <div class="text-blue-400">Exception</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Cipher</div> cipher = <div class="text-blue-400">Cipher</div>.getInstance(TRANSFORMATION);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">GCMParameterSpec</div> gcmSpec = <div class="text-blue-400">new</div> <div class="text-yellow-400">GCMParameterSpec</div>(<div class="text-purple-400">128</div>, encryptedData.getIv());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;cipher.init(<div class="text-blue-400">Cipher</div>.DECRYPT_MODE, key, gcmSpec);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">byte</div>[] plaintext = cipher.doFinal(encryptedData.getCiphertext());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return new</div> <div class="text-yellow-400">String</div>(plaintext, <div class="text-green-300">"UTF-8"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Digital signature creation</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">byte</div>[] <div class="text-yellow-400">signData</div>(<div class="text-blue-400">String</div> data, <div class="text-blue-400">PrivateKey</div> privateKey) <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throws</div> <div class="text-blue-400">Exception</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Signature</div> signature = <div class="text-blue-400">Signature</div>.getInstance(<div class="text-green-300">"SHA256withRSA"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;signature.initSign(privateKey);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;signature.update(data.getBytes(<div class="text-green-300">"UTF-8"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> signature.sign();<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Digital signature verification</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">boolean</div> <div class="text-yellow-400">verifySignature</div>(<div class="text-blue-400">String</div> data, <div class="text-blue-400">byte</div>[] signatureBytes, <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">PublicKey</div> publicKey) <div class="text-blue-400">throws</div> <div class="text-blue-400">Exception</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Signature</div> signature = <div class="text-blue-400">Signature</div>.getInstance(<div class="text-green-300">"SHA256withRSA"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;signature.initVerify(publicKey);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;signature.update(data.getBytes(<div class="text-green-300">"UTF-8"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> signature.verify(signatureBytes);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// === Secure Password Handling ===</div>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">PasswordSecurity</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> PBKDF2_ALGORITHM = <div class="text-green-300">"PBKDF2WithHmacSHA256"</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">int</div> SALT_LENGTH = <div class="text-purple-400">32</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">int</div> ITERATIONS = <div class="text-purple-400">100000</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">int</div> KEY_LENGTH = <div class="text-purple-400">256</div>;<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Generate secure random salt</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">byte</div>[] <div class="text-yellow-400">generateSalt</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">SecureRandom</div> random = <div class="text-blue-400">new</div> <div class="text-yellow-400">SecureRandom</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">byte</div>[] salt = <div class="text-blue-400">new</div> <div class="text-blue-400">byte</div>[SALT_LENGTH];<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;random.nextBytes(salt);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> salt;<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Hash password with PBKDF2</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">byte</div>[] <div class="text-yellow-400">hashPassword</div>(<div class="text-blue-400">char</div>[] password, <div class="text-blue-400">byte</div>[] salt) <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throws</div> <div class="text-blue-400">Exception</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">PBEKeySpec</div> spec = <div class="text-blue-400">new</div> <div class="text-yellow-400">PBEKeySpec</div>(password, salt, ITERATIONS, KEY_LENGTH);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">SecretKeyFactory</div> factory = <div class="text-blue-400">SecretKeyFactory</div>.getInstance(PBKDF2_ALGORITHM);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> factory.generateSecret(spec).getEncoded();<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Verify password</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">boolean</div> <div class="text-yellow-400">verifyPassword</div>(<div class="text-blue-400">char</div>[] password, <div class="text-blue-400">byte</div>[] salt, <div class="text-blue-400">byte</div>[] hash) <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throws</div> <div class="text-blue-400">Exception</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">byte</div>[] testHash = <div class="text-yellow-400">hashPassword</div>(password, salt);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">MessageDigest</div>.isEqual(hash, testHash);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// === Input Validation and Sanitization ===</div>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">InputValidator</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">Pattern</div> EMAIL_PATTERN = <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Pattern</div>.compile(<div class="text-green-300">"^[A-Za-z0-9+_.-]+@([A-Za-z0-9.-]+\\.[A-Za-z]{2,})$"</div>);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">Pattern</div> SQL_INJECTION_PATTERN = <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Pattern</div>.compile(<div class="text-green-300">".*([';]|(--)|(/\\*)|(\\*/)|(@)|char|nchar|varchar|nvarchar|alter|begin|cast|create|cursor|declare|delete|drop|end|exec|execute|fetch|insert|kill|open|select|sys|sysobjects|syscolumns|table|update).*"</div>, <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Pattern</div>.CASE_INSENSITIVE);<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Validate email format</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">boolean</div> <div class="text-yellow-400">isValidEmail</div>(<div class="text-blue-400">String</div> email) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> email != <div class="text-blue-400">null</div> && EMAIL_PATTERN.matcher(email).matches();<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Check for SQL injection patterns</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">boolean</div> <div class="text-yellow-400">containsSqlInjection</div>(<div class="text-blue-400">String</div> input) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> input != <div class="text-blue-400">null</div> && SQL_INJECTION_PATTERN.matcher(input).matches();<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Sanitize HTML input</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">sanitizeHtml</div>(<div class="text-blue-400">String</div> input) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (input == <div class="text-blue-400">null</div>) <div class="text-blue-400">return</div> <div class="text-blue-400">null</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> input.replaceAll(<div class="text-green-300">"&"</div>, <div class="text-green-300">"&amp;"</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replaceAll(<div class="text-green-300">"<"</div>, <div class="text-green-300">"&lt;"</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replaceAll(<div class="text-green-300">">"</div>, <div class="text-green-300">"&gt;"</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replaceAll(<div class="text-green-300">"\""</div>, <div class="text-green-300">"&quot;"</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replaceAll(<div class="text-green-300">"'"</div>, <div class="text-green-300">"&#x27;"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Validate and sanitize file path</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">sanitizeFilePath</div>(<div class="text-blue-400">String</div> path) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (path == <div class="text-blue-400">null</div>) <div class="text-blue-400">return</div> <div class="text-blue-400">null</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Remove directory traversal attempts</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> path.replaceAll(<div class="text-green-300">"\\.\\."</div>, <div class="text-green-300">""</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replaceAll(<div class="text-green-300">"/"</div>, <div class="text-green-300">""</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replaceAll(<div class="text-green-300">"\\\\"</div>, <div class="text-green-300">""</div>);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// === Secure HTTP Client ===</div>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">SecureHttpClient</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">SSLContext</div> sslContext;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">HostnameVerifier</div> hostnameVerifier;<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">SecureHttpClient</div>() <div class="text-blue-400">throws</div> <div class="text-blue-400">Exception</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Create secure SSL context</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-4">this</div>.sslContext = <div class="text-blue-400">SSLContext</div>.getInstance(<div class="text-green-300">"TLSv1.3"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;sslContext.init(<div class="text-blue-400">null</div>, <div class="text-blue-400">null</div>, <div class="text-blue-400">new</div> <div class="text-yellow-400">SecureRandom</div>());<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Strict hostname verification</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.hostnameVerifier = <div class="text-blue-400">HttpsURLConnection</div>.getDefaultHostnameVerifier();<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">secureGet</div>(<div class="text-blue-400">String</div> url) <div class="text-blue-400">throws</div> <div class="text-blue-400">Exception</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">URL</div> urlObj = <div class="text-blue-400">new</div> <div class="text-yellow-400">URL</div>(url);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">HttpsURLConnection</div> conn = (<div class="text-blue-400">HttpsURLConnection</div>) urlObj.openConnection();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Configure secure connection</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;conn.setSSLSocketFactory(sslContext.getSocketFactory());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;conn.setHostnameVerifier(hostnameVerifier);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;conn.setRequestMethod(<div class="text-green-300">"GET"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;conn.setConnectTimeout(<div class="text-purple-400">5000</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;conn.setReadTimeout(<div class="text-purple-400">10000</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Read response securely</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Scanner</div> scanner = <div class="text-blue-400">new</div> <div class="text-yellow-400">Scanner</div>(conn.getInputStream())) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> scanner.useDelimiter(<div class="text-green-300">"\\A"</div>).next();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-red-600 to-pink-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <span class="w-3 h-8 bg-white rounded mr-3"></span>
          Practice Exercise: Enterprise Security Framework
        </h2>
        <p class="text-red-100">Build a comprehensive enterprise security framework with authentication, authorization, and threat protection</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Requirements</h3>
          <div class="space-y-4">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">1. Authentication System</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Multi-factor authentication with TOTP support</li>
                <li>• OAuth 2.0 and OpenID Connect integration</li>
                <li>• Secure password policies and validation</li>
                <li>• Account lockout and brute force protection</li>
              </ul>
            </div>
            
            <div class="bg-pink-50 p-4 rounded-lg">
              <h4 class="font-bold text-pink-800 mb-2">2. Authorization Framework</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Role-based and attribute-based access control</li>
                <li>• Dynamic permission evaluation</li>
                <li>• Resource-level security annotations</li>
                <li>• Audit trail for access decisions</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">3. Cryptographic Services</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• End-to-end encryption for sensitive data</li>
                <li>• Digital signature and certificate management</li>
                <li>• Secure key generation and rotation</li>
                <li>• Hardware security module (HSM) integration</li>
              </ul>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">4. Threat Protection</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Input validation and sanitization framework</li>
                <li>• SQL injection and XSS prevention</li>
                <li>• Rate limiting and DDoS protection</li>
                <li>• Security monitoring and alerting</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">✅ Success Criteria</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                <div>
                  <p class="font-semibold text-gray-800">Secure Authentication</p>
                  <p class="text-gray-600 text-sm">Multi-factor authentication with secure session management</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p class="font-semibold text-gray-800">Fine-grained Authorization</p>
                  <p class="text-gray-600 text-sm">Flexible access control with audit capabilities</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p class="font-semibold text-gray-800">Data Protection</p>
                  <p class="text-gray-600 text-sm">End-to-end encryption and secure data handling</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                <div>
                  <p class="font-semibold text-gray-800">Vulnerability Prevention</p>
                  <p class="text-gray-600 text-sm">Comprehensive protection against common attacks</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</div>
                <div>
                  <p class="font-semibold text-gray-800">Security Monitoring</p>
                  <p class="text-gray-600 text-sm">Real-time threat detection and incident response</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</div>
                <div>
                  <p class="font-semibold text-gray-800">Compliance Ready</p>
                  <p class="text-gray-600 text-sm">GDPR, HIPAA, and SOX compliance features</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🔒 Security Implementation Areas</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="bg-green-50 p-3 rounded-lg">
                <h4 class="font-bold text-green-800 mb-1">Identity Management</h4>
                <p class="text-gray-700 text-sm">Implement secure user registration, password reset, and profile management with proper validation and encryption.</p>
              </div>
              
              <div class="bg-blue-50 p-3 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-1">Session Security</h4>
                <p class="text-gray-700 text-sm">Secure session creation, timeout handling, and protection against session fixation and hijacking attacks.</p>
              </div>
              
              <div class="bg-purple-50 p-3 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-1">API Security</h4>
                <p class="text-gray-700 text-sm">JWT token management, API rate limiting, and secure REST endpoint protection with proper authentication.</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="bg-orange-50 p-3 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-1">Data Encryption</h4>
                <p class="text-gray-700 text-sm">Implement field-level encryption, secure key management, and encrypted communication channels.</p>
              </div>
              
              <div class="bg-red-50 p-3 rounded-lg">
                <h4 class="font-bold text-red-800 mb-1">Threat Detection</h4>
                <p class="text-gray-700 text-sm">Anomaly detection, intrusion prevention, and automated incident response with security event correlation.</p>
              </div>
              
              <div class="bg-pink-50 p-3 rounded-lg">
                <h4 class="font-bold text-pink-800 mb-1">Compliance Logging</h4>
                <p class="text-gray-700 text-sm">Comprehensive audit logging, data retention policies, and compliance reporting for regulatory requirements.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">⚡ Advanced Security Features</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Zero Trust Architecture</h4>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>• Never trust, always verify</li>
                <li>• Micro-segmentation</li>
                <li>• Continuous authentication</li>
                <li>• Least privilege access</li>
              </ul>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Behavioral Analytics</h4>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>• User behavior profiling</li>
                <li>• Anomaly detection ML</li>
                <li>• Risk scoring algorithms</li>
                <li>• Adaptive authentication</li>
              </ul>
            </div>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Security Automation</h4>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>• Automated threat response</li>
                <li>• Security orchestration</li>
                <li>• Vulnerability scanning</li>
                <li>• Compliance automation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  }
};