import { LessonContent } from '../../types/LessonTypes';

export const lesson_11_7: LessonContent = {
  title: 'Connection Pooling and Best Practices',
  type: 'lesson',
  duration: '50 min',
  module: 'Database Connectivity (JDBC)',
  content: {
    overview: 'Master connection pooling techniques and JDBC best practices for high-performance, scalable database applications. Learn industry-standard pooling libraries, configuration optimization, and performance monitoring strategies.',
    objectives: [
      'Understand connection pooling concepts and benefits',
      'Implement connection pooling with popular libraries',
      'Configure pool parameters for optimal performance',
      'Apply JDBC best practices for security and efficiency',
      'Monitor and troubleshoot connection pool issues',
      'Implement connection lifecycle management'
    ],
    theory: `
      <div class="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Connection Pooling and Best Practices
        </h1>
        <p class="mt-3 text-teal-100 text-lg">Optimizing database connections for performance and scalability</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Connection Pooling Fundamentals
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Connection pooling is a technique that reuses database connections instead of creating new ones for each request. 
            This significantly reduces connection overhead and improves application performance.
          </p>
          
          <div class="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400 mb-4">
            <h4 class="font-bold text-teal-800 mb-2">🎯 Pooling Benefits</h4>
            <p class="text-teal-700">Connection pooling eliminates the overhead of creating and destroying connections, reducing latency and improving throughput.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Connection Lifecycle</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border-l-4 border-red-400">
                  <h5 class="font-bold text-red-700">Creation</h5>
                  <p class="text-gray-600 text-sm">Establish database connection</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-bold text-blue-700">Usage</h5>
                  <p class="text-gray-600 text-sm">Execute database operations</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-green-400">
                  <h5 class="font-bold text-green-700">Return</h5>
                  <p class="text-gray-600 text-sm">Return to pool for reuse</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                  <h5 class="font-bold text-purple-700">Destruction</h5>
                  <p class="text-gray-600 text-sm">Close connection when expired</p>
                </div>
              </div>
            </div>
            
            <div class="bg-cyan-50 p-4 rounded-lg">
              <h4 class="font-bold text-cyan-800 mb-2">Pooling Advantages</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>Performance:</strong> Reduced connection overhead</li>
                <li>• <strong>Scalability:</strong> Better resource utilization</li>
                <li>• <strong>Consistency:</strong> Controlled connection usage</li>
                <li>• <strong>Monitoring:</strong> Connection usage tracking</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Popular Connection Pool Libraries
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Several connection pool libraries provide robust pooling capabilities with different features and configurations.</p>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-cyan-50 p-4 rounded-lg">
                <h4 class="font-bold text-cyan-800 mb-2">HikariCP</h4>
                <p class="text-gray-700 text-sm mb-3">High-performance, lightweight connection pool</p>
                <ul class="space-y-1 text-gray-600 text-sm">
                  <li>• Fastest connection pool</li>
                  <li>• Minimal overhead</li>
                  <li>• Production ready</li>
                  <li>• Easy configuration</li>
                </ul>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Apache DBCP</h4>
                <p class="text-gray-700 text-sm mb-3">Apache Commons database connection pool</p>
                <ul class="space-y-1 text-gray-600 text-sm">
                  <li>• Feature rich</li>
                  <li>• Well documented</li>
                  <li>• JMX support</li>
                  <li>• Validation options</li>
                </ul>
              </div>
              
              <div class="bg-teal-50 p-4 rounded-lg">
                <h4 class="font-bold text-teal-800 mb-2">C3P0</h4>
                <p class="text-gray-700 text-sm mb-3">JDBC connection pooling library</p>
                <ul class="space-y-1 text-gray-600 text-sm">
                  <li>• Mature and stable</li>
                  <li>• Automatic configuration</li>
                  <li>• Statement pooling</li>
                  <li>• Recovery mechanisms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Pool Configuration Parameters
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Proper configuration of connection pool parameters is crucial for optimal performance and resource utilization.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Core Parameters</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-green-400">
                    <h5 class="font-bold text-green-700">Minimum Pool Size</h5>
                    <p class="text-gray-600 text-sm">Minimum number of connections maintained</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                    <h5 class="font-bold text-blue-700">Maximum Pool Size</h5>
                    <p class="text-gray-600 text-sm">Maximum number of connections allowed</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                    <h5 class="font-bold text-purple-700">Connection Timeout</h5>
                    <p class="text-gray-600 text-sm">Time to wait for connection availability</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-teal-50 p-4 rounded-lg">
                <h4 class="font-bold text-teal-800 mb-2">Advanced Parameters</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-cyan-400">
                    <h5 class="font-bold text-cyan-700">Idle Timeout</h5>
                    <p class="text-gray-600 text-sm">Time before idle connections are closed</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-indigo-400">
                    <h5 class="font-bold text-indigo-700">Max Lifetime</h5>
                    <p class="text-gray-600 text-sm">Maximum lifetime of a connection</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-orange-400">
                    <h5 class="font-bold text-orange-700">Validation Query</h5>
                    <p class="text-gray-600 text-sm">Query to test connection validity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            JDBC Best Practices
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Following JDBC best practices ensures secure, efficient, and maintainable database applications.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Security Practices</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Use PreparedStatement:</strong> Prevent SQL injection</li>
                  <li>• <strong>Validate inputs:</strong> Sanitize user data</li>
                  <li>• <strong>Encrypt connections:</strong> Use SSL/TLS</li>
                  <li>• <strong>Secure credentials:</strong> Use configuration files</li>
                </ul>
              </div>
              
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Performance Practices</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Use connection pooling:</strong> Reuse connections</li>
                  <li>• <strong>Batch operations:</strong> Reduce round trips</li>
                  <li>• <strong>Fetch size optimization:</strong> Control result set size</li>
                  <li>• <strong>Proper resource management:</strong> Close resources</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Monitoring and Troubleshooting
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Effective monitoring and troubleshooting help identify and resolve connection pool issues.</p>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Key Metrics</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Active connections</li>
                  <li>• Idle connections</li>
                  <li>• Connection wait time</li>
                  <li>• Connection creation rate</li>
                </ul>
              </div>
              
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Common Issues</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Connection leaks</li>
                  <li>• Pool exhaustion</li>
                  <li>• Deadlock scenarios</li>
                  <li>• Validation failures</li>
                </ul>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold text-yellow-800 mb-2">Troubleshooting</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Enable logging</li>
                  <li>• Monitor connection usage</li>
                  <li>• Check configuration</li>
                  <li>• Analyze stack traces</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Connection Lifecycle Management
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Connection lifecycle management ensures proper resource handling and prevents leaks.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Resource Management</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Try-with-resources:</strong> Automatic cleanup</li>
                  <li>• <strong>Connection validation:</strong> Check before use</li>
                  <li>• <strong>Proper closing:</strong> Release resources</li>
                  <li>• <strong>Exception handling:</strong> Graceful recovery</li>
                </ul>
              </div>
              
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Connection Validation</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Validation query:</strong> Simple SQL test</li>
                  <li>• <strong>Connection test:</strong> On borrow/return</li>
                  <li>• <strong>Idle validation:</strong> Periodic checks</li>
                  <li>• <strong>Background validation:</strong> Asynchronous testing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// ConnectionPoolingDemo.java</div>
        <div class="text-blue-400">import</div> com.zaxxer.hikari.HikariConfig;<br/>
        <div class="text-blue-400">import</div> com.zaxxer.hikari.HikariDataSource;<br/>
        <div class="text-blue-400">import</div> java.sql.*;<br/>
        <div class="text-blue-400">import</div> java.util.concurrent.ExecutorService;<br/>
        <div class="text-blue-400">import</div> java.util.concurrent.Executors;<br/>
        <div class="text-blue-400">import</div> java.util.concurrent.TimeUnit;<br/>
        <div class="text-blue-400">import</div> java.util.logging.Logger;<br/>
        <div class="text-blue-400">import</div> java.util.logging.Level;<br/><br/>

        <div class="text-blue-400">public class</div> <div class="text-yellow-400">ConnectionPoolingDemo</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> DB_URL = <div class="text-green-300">"jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1"</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> USER = <div class="text-green-300">"sa"</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> PASSWORD = <div class="text-green-300">""</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">Logger</div> logger = <div class="text-blue-400">Logger</div>.getLogger(<div class="text-yellow-400">ConnectionPoolingDemo</div>.<div class="text-blue-400">class</div>.getName());<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Setup database</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setupDatabase();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 1. HikariCP configuration</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HikariDataSource dataSource = configureHikariCP();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 2. Basic connection pool usage</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;basicConnectionPoolDemo(dataSource);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 3. Concurrent connection usage</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;concurrentConnectionDemo(dataSource);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 4. Pool monitoring</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;monitorConnectionPool(dataSource);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dataSource.close();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">Exception</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.log(<div class="text-blue-400">Level</div>.SEVERE, <div class="text-green-300">"Error in connection pooling demo"</div>, e);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">setupDatabase</div>() <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Connection</div> conn = <div class="text-blue-400">DriverManager</div>.getConnection(DB_URL, USER, PASSWORD);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Statement</div> stmt = conn.createStatement()) {<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> createTable = <div class="text-green-300">"""</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">CREATE TABLE users (</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">id INTEGER AUTO_INCREMENT PRIMARY KEY,</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">name VARCHAR(100) NOT NULL,</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">email VARCHAR(100) UNIQUE,</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">created TIMESTAMP DEFAULT CURRENT_TIMESTAMP</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">)</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"""</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stmt.executeUpdate(createTable);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Database setup complete"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static</div> <div class="text-yellow-400">HikariDataSource</div> <div class="text-yellow-400">configureHikariCP</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"=== HikariCP Configuration ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;HikariConfig config = <div class="text-blue-400">new</div> <div class="text-yellow-400">HikariConfig</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;config.setJdbcUrl(DB_URL);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;config.setUsername(USER);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;config.setPassword(PASSWORD);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Pool configuration</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;config.setMinimumIdle(<div class="text-purple-400">5</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;config.setMaximumPoolSize(<div class="text-purple-400">20</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;config.setConnectionTimeout(<div class="text-purple-400">30000</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;config.setIdleTimeout(<div class="text-purple-400">600000</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;config.setMaxLifetime(<div class="text-purple-400">1800000</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;config.setLeakDetectionThreshold(<div class="text-purple-400">60000</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Validation</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;config.setConnectionTestQuery(<div class="text-green-300">"SELECT 1"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;config.setValidationTimeout(<div class="text-purple-400">5000</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Performance</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;config.setPoolName(<div class="text-green-300">"MyHikariPool"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;config.setAutoCommit(<div class="text-blue-400">true</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;HikariDataSource dataSource = <div class="text-blue-400">new</div> <div class="text-yellow-400">HikariDataSource</div>(config);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ HikariCP configured successfully"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> dataSource;<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">basicConnectionPoolDemo</div>(<div class="text-blue-400">HikariDataSource</div> dataSource) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Basic Connection Pool Demo ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">long</div> startTime = <div class="text-blue-400">System</div>.currentTimeMillis();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Get connection from pool</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Connection</div> conn = dataSource.getConnection()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Connection obtained from pool"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Insert sample data</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> insertSQL = <div class="text-green-300">"INSERT INTO users (name, email) VALUES (?, ?)"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">PreparedStatement</div> pstmt = conn.prepareStatement(insertSQL)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setString(<div class="text-purple-400">1</div>, <div class="text-green-300">"John Doe"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setString(<div class="text-purple-400">2</div>, <div class="text-green-300">"john@example.com"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.executeUpdate();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Query data</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> selectSQL = <div class="text-green-300">"SELECT COUNT(*) FROM users"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">PreparedStatement</div> pstmt = conn.prepareStatement(selectSQL);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ResultSet</div> rs = pstmt.executeQuery()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (rs.next()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> count = rs.getInt(<div class="text-purple-400">1</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Total users: "</div> + count);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">long</div> endTime = <div class="text-blue-400">System</div>.currentTimeMillis();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Connection pool operation completed in "</div> + (endTime - startTime) + <div class="text-green-300">"ms"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">concurrentConnectionDemo</div>(<div class="text-blue-400">HikariDataSource</div> dataSource) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Concurrent Connection Demo ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> threadCount = <div class="text-purple-400">10</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ExecutorService</div> executor = <div class="text-blue-400">Executors</div>.newFixedThreadPool(threadCount);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> i = <div class="text-purple-400">0</div>; i < threadCount; i++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">final int</div> taskId = i;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;executor.submit(() -> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Connection</div> conn = dataSource.getConnection();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Thread "</div> + taskId + <div class="text-green-300">" got connection"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Simulate work</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Thread</div>.sleep(<div class="text-purple-400">1000</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.close();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Thread "</div> + taskId + <div class="text-green-300">" released connection"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">Exception</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.log(<div class="text-blue-400">Level</div>.SEVERE, <div class="text-green-300">"Error in thread "</div> + taskId, e);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;executor.shutdown();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;executor.awaitTermination(<div class="text-purple-400">30</div>, <div class="text-blue-400">TimeUnit</div>.SECONDS);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">InterruptedException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Thread</div>.currentThread().interrupt();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Concurrent connection demo completed"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">monitorConnectionPool</div>(<div class="text-blue-400">HikariDataSource</div> dataSource) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Connection Pool Monitoring ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Pool Name: "</div> + dataSource.getPoolName());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Active Connections: "</div> + dataSource.getHikariPoolMXBean().getActiveConnections());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Idle Connections: "</div> + dataSource.getHikariPoolMXBean().getIdleConnections());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Total Connections: "</div> + dataSource.getHikariPoolMXBean().getTotalConnections());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Threads Awaiting Connection: "</div> + dataSource.getHikariPoolMXBean().getThreadsAwaitingConnection());<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
    exercise: `
Question 1: Configure a HikariCP connection pool with minimum and maximum pool sizes.
Question 2: Implement connection validation using a test query in a connection pool.
Question 3: Monitor connection pool metrics like active connections and idle connections.
Question 4: Handle connection leaks by setting appropriate timeout values.
Question 5: Use try-with-resources to properly manage connection pool resources.
`
  }
};