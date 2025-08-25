import { LessonContent } from '../../types/LessonTypes';

export const lesson_11_2: LessonContent = {
  title: 'Connecting to Databases',
  type: 'lesson',
  duration: '25 min',
  module: 'Database Connectivity (JDBC)',
  content: {
    overview: 'Master the process of establishing database connections using JDBC. Learn different connection methods, connection parameters, security considerations, and best practices for managing database connections.',
    objectives: [
      'Learn various methods to establish database connections',
      'Understand connection parameters and properties',
      'Master connection security and authentication',
      'Implement proper resource management with try-with-resources',
      'Handle connection exceptions and errors',
      'Practice connection configuration for different databases'
    ],
    theory: `
      <div class="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Connecting to Databases
        </h1>
        <p class="mt-3 text-teal-100 text-lg">Establishing secure and efficient database connections</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Connection Methods
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            JDBC provides several ways to establish database connections, each suitable for different scenarios 
            and security requirements.
          </p>
          
          <div class="space-y-4">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">1. Basic Connection with URL and Credentials</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                Connection conn = DriverManager.getConnection(<br/>
                &nbsp;&nbsp;"jdbc:mysql://localhost:3306/mydb", <br/>
                &nbsp;&nbsp;"username", "password");
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">2. Connection with Properties Object</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                Properties props = new Properties();<br/>
                props.setProperty("user", "username");<br/>
                props.setProperty("password", "password");<br/>
                Connection conn = DriverManager.getConnection(url, props);
              </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">3. Connection with Embedded Credentials</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                String url = "jdbc:mysql://localhost:3306/mydb" +<br/>
                &nbsp;&nbsp;"?user=username&password=password";<br/>
                Connection conn = DriverManager.getConnection(url);
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Connection Parameters
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Connection parameters control various aspects of database connectivity and behavior.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-cyan-50 p-4 rounded-lg">
                <h4 class="font-bold text-cyan-800 mb-2">Common Parameters</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>autoReconnect:</strong> Automatic reconnection</li>
                  <li>• <strong>useSSL:</strong> SSL encryption</li>
                  <li>• <strong>characterEncoding:</strong> Character set</li>
                  <li>• <strong>connectTimeout:</strong> Connection timeout</li>
                  <li>• <strong>socketTimeout:</strong> Socket timeout</li>
                  <li>• <strong>useUnicode:</strong> Unicode support</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Performance Parameters</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>cachePrepStmts:</strong> Cache prepared statements</li>
                  <li>• <strong>prepStmtCacheSize:</strong> Cache size</li>
                  <li>• <strong>useServerPrepStmts:</strong> Server-side preparation</li>
                  <li>• <strong>rewriteBatchedStatements:</strong> Batch optimization</li>
                  <li>• <strong>useCompression:</strong> Data compression</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Resource Management
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Proper resource management is crucial for preventing memory leaks and connection exhaustion.</p>
            
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
              <h4 class="font-bold text-blue-800 mb-2">🔧 Best Practice</h4>
              <p class="text-blue-700">Always use try-with-resources for automatic resource cleanup, ensuring connections are closed even if exceptions occur.</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">❌ Poor Resource Management</h4>
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  Connection conn = DriverManager.getConnection(url);<br/>
                  <div class="text-yellow-400">// If exception occurs here, connection leaks</div><br/>
                  Statement stmt = conn.createStatement();<br/>
                  <div class="text-yellow-400">// Manual cleanup required</div><br/>
                  conn.close();
                </div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">✅ Proper Resource Management</h4>
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  try (Connection conn = DriverManager.getConnection(url);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Statement stmt = conn.createStatement()) {<br/>
                  &nbsp;&nbsp;<div class="text-yellow-400">// Resources automatically closed</div><br/>
                  &nbsp;&nbsp;<div class="text-yellow-400">// Even if exceptions occur</div><br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Connection Security
          </h2>
          <div class="space-y-4">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Security Best Practices</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Use SSL/TLS encryption</li>
                  <li>• Store credentials securely</li>
                  <li>• Use connection pooling</li>
                  <li>• Implement proper authentication</li>
                  <li>• Validate connection parameters</li>
                  <li>• Use least privilege principle</li>
                </ul>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold text-yellow-800 mb-2">Common Security Issues</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Hardcoded credentials in source code</li>
                  <li>• Unencrypted connections</li>
                  <li>• Excessive database privileges</li>
                  <li>• Connection string exposure</li>
                  <li>• Lack of connection validation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Connection Validation
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Connection validation ensures that database connections are healthy and ready for use.</p>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Validation Methods</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                <div class="text-yellow-400">// Check if connection is valid</div>
                boolean isValid = connection.isValid(5); <div class="text-yellow-400">// 5 second timeout</div><br/><br/>
                <div class="text-yellow-400">// Check if connection is closed</div>
                boolean isClosed = connection.isClosed();<br/><br/>
                <div class="text-yellow-400">// Test with simple query</div>
                Statement stmt = connection.createStatement();<br/>
                ResultSet rs = stmt.executeQuery("SELECT 1");
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// DatabaseConnectionDemo.java</div>
        <div class="text-blue-400">import</div> java.sql.*;<br/>
        <div class="text-blue-400">import</div> java.util.Properties;<br/>
        <div class="text-blue-400">import</div> java.io.FileInputStream;<br/>
        <div class="text-blue-400">import</div> java.io.IOException;<br/><br/>

        <div class="text-blue-400">public class</div> <div class="text-yellow-400">DatabaseConnectionDemo</div> {<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Connection configuration</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static class</div> <div class="text-yellow-400">DatabaseConfig</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">String</div> url;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">String</div> username;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">String</div> password;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">Properties</div> properties;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">DatabaseConfig</div>(<div class="text-blue-400">String</div> url, <div class="text-blue-400">String</div> username, <div class="text-blue-400">String</div> password) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.url = url;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.username = username;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.password = password;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.properties = <div class="text-blue-400">new</div> <div class="text-yellow-400">Properties</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setupDefaultProperties();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private void</div> <div class="text-yellow-400">setupDefaultProperties</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;properties.setProperty(<div class="text-green-300">"user"</div>, username);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;properties.setProperty(<div class="text-green-300">"password"</div>, password);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;properties.setProperty(<div class="text-green-300">"autoReconnect"</div>, <div class="text-green-300">"true"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;properties.setProperty(<div class="text-green-300">"characterEncoding"</div>, <div class="text-green-300">"UTF-8"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;properties.setProperty(<div class="text-green-300">"useSSL"</div>, <div class="text-green-300">"false"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;properties.setProperty(<div class="text-green-300">"allowPublicKeyRetrieval"</div>, <div class="text-green-300">"true"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">Connection</div> <div class="text-yellow-400">getConnection</div>() <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">DriverManager</div>.getConnection(url, properties);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">addProperty</div>(<div class="text-blue-400">String</div> key, <div class="text-blue-400">String</div> value) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;properties.setProperty(key, value);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 1. Basic connection example</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;basicConnectionExample();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 2. Connection with custom properties</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;connectionWithCustomProperties();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 3. Connection from properties file</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;connectionFromPropertiesFile();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 4. Connection validation examples</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;connectionValidationExample();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 5. Multiple database connections</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;multipleDatabaseConnections();<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">basicConnectionExample</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"=== Basic Connection Example ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// H2 in-memory database for demonstration</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> url = <div class="text-green-300">"jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> user = <div class="text-green-300">"sa"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> password = <div class="text-green-300">""</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Connection</div> conn = <div class="text-blue-400">DriverManager</div>.getConnection(url, user, password)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Connection established successfully"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"  Database: "</div> + conn.getCatalog());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"  Auto-commit: "</div> + conn.getAutoCommit());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"  Read-only: "</div> + conn.isReadOnly());<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"✗ Connection failed: "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.printStackTrace();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">connectionWithCustomProperties</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Connection with Custom Properties ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">DatabaseConfig</div> config = <div class="text-blue-400">new</div> <div class="text-yellow-400">DatabaseConfig</div>(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"jdbc:h2:mem:testdb2"</div>, <div class="text-green-300">"sa"</div>, <div class="text-green-300">""</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Add custom properties</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;config.addProperty(<div class="text-green-300">"TRACE_LEVEL_SYSTEM_OUT"</div>, <div class="text-green-300">"2"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;config.addProperty(<div class="text-green-300">"DB_CLOSE_ON_EXIT"</div>, <div class="text-green-300">"FALSE"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Connection</div> conn = config.getConnection()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Custom connection established"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"  Transaction isolation: "</div> + <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getIsolationLevelName(conn.getTransactionIsolation()));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"  Holdability: "</div> + <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getHoldabilityName(conn.getHoldability()));<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"✗ Custom connection failed: "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">connectionFromPropertiesFile</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Connection from Properties File ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Properties</div> dbProps = <div class="text-blue-400">new</div> <div class="text-yellow-400">Properties</div>();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Simulate loading from properties file</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;dbProps.setProperty(<div class="text-green-300">"db.url"</div>, <div class="text-green-300">"jdbc:h2:mem:configdb"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;dbProps.setProperty(<div class="text-green-300">"db.username"</div>, <div class="text-green-300">"sa"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;dbProps.setProperty(<div class="text-green-300">"db.password"</div>, <div class="text-green-300">""</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;dbProps.setProperty(<div class="text-green-300">"db.driver"</div>, <div class="text-green-300">"org.h2.Driver"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Load driver if specified</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> driverClass = dbProps.getProperty(<div class="text-green-300">"db.driver"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (driverClass != <div class="text-blue-400">null</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Class</div>.forName(driverClass);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Driver loaded: "</div> + driverClass);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Connection</div> conn = <div class="text-blue-400">DriverManager</div>.getConnection(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dbProps.getProperty(<div class="text-green-300">"db.url"</div>),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dbProps.getProperty(<div class="text-green-300">"db.username"</div>),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dbProps.getProperty(<div class="text-green-300">"db.password"</div>))) {<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Connection from properties established"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;displayConnectionInfo(conn);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">ClassNotFoundException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"✗ Driver not found: "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"✗ Connection failed: "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">connectionValidationExample</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Connection Validation Example ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> url = <div class="text-green-300">"jdbc:h2:mem:validationdb"</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Connection</div> conn = <div class="text-blue-400">DriverManager</div>.getConnection(url, <div class="text-green-300">"sa"</div>, <div class="text-green-300">""</div>)) {<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Method 1: Using isValid()</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">boolean</div> isValid = conn.isValid(<div class="text-purple-400">5</div>); <div class="text-gray-400">// 5 second timeout</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Connection is valid: "</div> + isValid);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Method 2: Check if closed</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">boolean</div> isClosed = conn.isClosed();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Connection is closed: "</div> + isClosed);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Method 3: Test with simple query</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Statement</div> stmt = conn.createStatement();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ResultSet</div> rs = stmt.executeQuery(<div class="text-green-300">"SELECT 1"</div>)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Connection validated with test query"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"✗ Validation failed: "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">multipleDatabaseConnections</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Multiple Database Connections ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div>[] databases = {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"jdbc:h2:mem:db1"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"jdbc:h2:mem:db2"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"jdbc:h2:mem:db3"</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;};<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> i = <div class="text-purple-400">0</div>; i < databases.length; i++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Connection</div> conn = <div class="text-blue-400">DriverManager</div>.getConnection(databases[i], <div class="text-green-300">"sa"</div>, <div class="text-green-300">""</div>)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Connected to database "</div> + (i + <div class="text-purple-400">1</div>) + <div class="text-green-300">": "</div> + databases[i]);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"  Connection valid: "</div> + conn.isValid(<div class="text-purple-400">3</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"✗ Failed to connect to database "</div> + (i + <div class="text-purple-400">1</div>) + <div class="text-green-300">": "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">displayConnectionInfo</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">DatabaseMetaData</div> metaData = conn.getMetaData();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"  Product: "</div> + metaData.getDatabaseProductName());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"  Version: "</div> + metaData.getDatabaseProductVersion());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"  URL: "</div> + metaData.getURL());<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getIsolationLevelName</div>(<div class="text-blue-400">int</div> level) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">switch</div> (level) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">case</div> <div class="text-blue-400">Connection</div>.TRANSACTION_NONE: <div class="text-blue-400">return</div> <div class="text-green-300">"NONE"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">case</div> <div class="text-blue-400">Connection</div>.TRANSACTION_READ_UNCOMMITTED: <div class="text-blue-400">return</div> <div class="text-green-300">"READ_UNCOMMITTED"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">case</div> <div class="text-blue-400">Connection</div>.TRANSACTION_READ_COMMITTED: <div class="text-blue-400">return</div> <div class="text-green-300">"READ_COMMITTED"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">case</div> <div class="text-blue-400">Connection</div>.TRANSACTION_REPEATABLE_READ: <div class="text-blue-400">return</div> <div class="text-green-300">"REPEATABLE_READ"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">case</div> <div class="text-blue-400">Connection</div>.TRANSACTION_SERIALIZABLE: <div class="text-blue-400">return</div> <div class="text-green-300">"SERIALIZABLE"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">default</div>: <div class="text-blue-400">return</div> <div class="text-green-300">"UNKNOWN"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getHoldabilityName</div>(<div class="text-blue-400">int</div> holdability) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">switch</div> (holdability) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">case</div> <div class="text-blue-400">ResultSet</div>.HOLD_CURSORS_OVER_COMMIT: <div class="text-blue-400">return</div> <div class="text-green-300">"HOLD_CURSORS_OVER_COMMIT"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">case</div> <div class="text-blue-400">ResultSet</div>.CLOSE_CURSORS_AT_COMMIT: <div class="text-blue-400">return</div> <div class="text-green-300">"CLOSE_CURSORS_AT_COMMIT"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">default</div>: <div class="text-blue-400">return</div> <div class="text-green-300">"UNKNOWN"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6 rounded-lg mb-8">
        <h2 class="text-2xl font-bold mb-4">🎯 Practice Exercise: Advanced Connection Management System</h2>
        <p class="text-teal-100">Build a comprehensive connection management system that handles multiple databases with different configurations and security requirements.</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Requirements</h3>
          <div class="space-y-4">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">1. Connection Factory</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Create a DatabaseConnectionFactory class</li>
                <li>• Support multiple database types (H2, MySQL, PostgreSQL)</li>
                <li>• Implement different connection strategies</li>
                <li>• Handle connection configuration from properties files</li>
              </ul>
            </div>
            
            <div class="bg-cyan-50 p-4 rounded-lg">
              <h4 class="font-bold text-cyan-800 mb-2">2. Connection Pool Simulator</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Create a simple connection pool implementation</li>
                <li>• Manage connection lifecycle (create, validate, close)</li>
                <li>• Implement connection borrowing and returning</li>
                <li>• Add connection health monitoring</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">3. Security Manager</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Implement secure credential management</li>
                <li>• Support encrypted connection strings</li>
                <li>• Add connection parameter validation</li>
                <li>• Implement connection timeout handling</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">4. Performance Monitor</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Measure connection establishment time</li>
                <li>• Track connection usage statistics</li>
                <li>• Monitor connection failures and retries</li>
                <li>• Generate performance reports</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">💡 Implementation Hints</h3>
          <div class="space-y-3">
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-gray-700"><strong>Factory Pattern:</strong> Use factory methods to encapsulate connection creation logic for different database types</p>
            </div>
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-gray-700"><strong>Configuration:</strong> Use Properties files or environment variables for database configuration</p>
            </div>
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-gray-700"><strong>Validation:</strong> Implement robust connection validation before returning connections to clients</p>
            </div>
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-gray-700"><strong>Monitoring:</strong> Use System.currentTimeMillis() or System.nanoTime() for performance measurements</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🎯 Success Criteria</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Working connection factory supporting multiple database types</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Proper resource management with automatic cleanup</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Secure credential handling and validation</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Comprehensive error handling and recovery</span>
              </div>
            </div>
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Connection validation and health monitoring</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Performance measurement and reporting</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Configuration-driven connection management</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Thread-safe connection handling</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🚀 Bonus Challenges</h3>
          <div class="space-y-3">
            <div class="bg-yellow-50 p-3 rounded">
              <p class="text-gray-700"><strong>Failover Support:</strong> Implement automatic failover to backup database servers</p>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <p class="text-gray-700"><strong>Load Balancing:</strong> Distribute connections across multiple database instances</p>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <p class="text-gray-700"><strong>Connection Caching:</strong> Implement intelligent connection caching with TTL</p>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <p class="text-gray-700"><strong>Metrics Collection:</strong> Integrate with monitoring systems for connection metrics</p>
            </div>
          </div>
        </div>
      </div>
    `
  }
};