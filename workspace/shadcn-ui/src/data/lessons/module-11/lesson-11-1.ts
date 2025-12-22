import { LessonContent } from '../../types/LessonTypes';

export const lesson_11_1: LessonContent = {
  title: 'Introduction to JDBC',
  type: 'lesson',
  duration: '20 min',
  module: 'Database Connectivity (JDBC)',
  content: {
    overview: 'Learn the fundamentals of Java Database Connectivity (JDBC), the standard API for connecting Java applications to relational databases. Understand JDBC architecture, components, and the role of database drivers.',
    objectives: [
      'Understand what JDBC is and its purpose',
      'Learn about JDBC architecture and components',
      'Explore different types of JDBC drivers',
      'Understand the JDBC API structure',
      'Learn about database URLs and connection strings',
      'Set up the foundation for database programming in Java'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Introduction to JDBC
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Java Database Connectivity - Bridge between Java and databases</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What is JDBC?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            JDBC (Java Database Connectivity) is a Java API that enables Java applications to interact with 
            relational databases. It provides a standard interface for connecting to databases, executing SQL 
            statements, and processing results.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">💡 Key Concept</h4>
            <p class="text-blue-700">JDBC acts as a bridge between Java applications and databases, providing database independence through a standardized API.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">JDBC Benefits</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Database independence</li>
                <li>• Standardized API</li>
                <li>• Platform independence</li>
                <li>• Support for multiple databases</li>
                <li>• Transaction management</li>
                <li>• Connection pooling support</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Common Use Cases</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Web applications</li>
                <li>• Enterprise applications</li>
                <li>• Data analysis tools</li>
                <li>• Reporting systems</li>
                <li>• Data migration utilities</li>
                <li>• Business intelligence applications</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            JDBC Architecture
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">JDBC follows a layered architecture that separates application logic from database-specific implementations.</p>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-3">Architecture Layers</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-bold text-blue-800">1. Application Layer</h5>
                  <p class="text-gray-700 text-sm">Your Java application code that uses JDBC API</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-green-400">
                  <h5 class="font-bold text-green-800">2. JDBC API Layer</h5>
                  <p class="text-gray-700 text-sm">Standard Java interfaces (Connection, Statement, ResultSet, etc.)</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                  <h5 class="font-bold text-purple-800">3. JDBC Driver Manager</h5>
                  <p class="text-gray-700 text-sm">Manages database drivers and establishes connections</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-orange-400">
                  <h5 class="font-bold text-orange-800">4. JDBC Driver</h5>
                  <p class="text-gray-700 text-sm">Database-specific implementation of JDBC interfaces</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-red-400">
                  <h5 class="font-bold text-red-800">5. Database</h5>
                  <p class="text-gray-700 text-sm">The actual database system (MySQL, PostgreSQL, Oracle, etc.)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            JDBC Driver Types
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">JDBC drivers are categorized into four types based on their implementation approach:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Type 1: JDBC-ODBC Bridge</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Uses ODBC driver to connect</li>
                  <li>• Platform dependent</li>
                  <li>• Slower performance</li>
                  <li>• Deprecated in Java 8+</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Type 2: Native-API Driver</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Uses database native libraries</li>
                  <li>• Platform dependent</li>
                  <li>• Better performance than Type 1</li>
                  <li>• Requires native libraries installation</li>
                </ul>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Type 3: Network Protocol Driver</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Uses middleware server</li>
                  <li>• Platform independent</li>
                  <li>• Good for web applications</li>
                  <li>• Requires middleware setup</li>
                </ul>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Type 4: Thin Driver (Pure Java)</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Pure Java implementation</li>
                  <li>• Platform independent</li>
                  <li>• Best performance</li>
                  <li>• Most commonly used</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Core JDBC Components
          </h2>
          <div class="space-y-4">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Key Interfaces</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>Driver:</strong> Database driver interface</li>
                  <li>• <strong>Connection:</strong> Database connection</li>
                  <li>• <strong>Statement:</strong> SQL statement execution</li>
                  <li>• <strong>PreparedStatement:</strong> Precompiled SQL</li>
                  <li>• <strong>CallableStatement:</strong> Stored procedures</li>
                  <li>• <strong>ResultSet:</strong> Query results</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Key Classes</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>DriverManager:</strong> Manages drivers</li>
                  <li>• <strong>SQLException:</strong> Database exceptions</li>
                  <li>• <strong>Types:</strong> SQL data type constants</li>
                  <li>• <strong>DatabaseMetaData:</strong> Database information</li>
                  <li>• <strong>ResultSetMetaData:</strong> Result set information</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Database URLs and Connection Strings
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Database URLs specify how to connect to a database and follow a standard format.</p>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">URL Format</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                jdbc:&lt;subprotocol&gt;:&lt;subname&gt;
              </div>
              <p class="text-gray-700 mt-2 text-sm">Where subprotocol is the driver type and subname contains database-specific connection information.</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Common Database URLs</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-gray-900 text-green-400 p-2 rounded font-mono">
                    <div class="text-yellow-400">// MySQL</div>
                    jdbc:mysql://localhost:3306/mydb
                  </div>
                  <div class="bg-gray-900 text-green-400 p-2 rounded font-mono">
                    <div class="text-yellow-400">// PostgreSQL</div>
                    jdbc:postgresql://localhost:5432/mydb
                  </div>
                  <div class="bg-gray-900 text-green-400 p-2 rounded font-mono">
                    <div class="text-yellow-400">// Oracle</div>
                    jdbc:oracle:thin:@localhost:1521:xe
                  </div>
                </div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">URL Components</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>Protocol:</strong> jdbc</li>
                  <li>• <strong>Subprotocol:</strong> Database type (mysql, postgresql)</li>
                  <li>• <strong>Host:</strong> Database server address</li>
                  <li>• <strong>Port:</strong> Database server port</li>
                  <li>• <strong>Database:</strong> Database name</li>
                  <li>• <strong>Parameters:</strong> Additional connection options</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            JDBC Workflow
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The typical JDBC workflow follows these steps:</p>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-3">Standard JDBC Steps</h4>
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <span class="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                  <span class="text-gray-700">Load and register the JDBC driver</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                  <span class="text-gray-700">Establish a connection to the database</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                  <span class="text-gray-700">Create a Statement object</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</span>
                  <span class="text-gray-700">Execute SQL queries or updates</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">5</span>
                  <span class="text-gray-700">Process the ResultSet (for queries)</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">6</span>
                  <span class="text-gray-700">Close resources (ResultSet, Statement, Connection)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">7</span>
            Popular Database Drivers
          </h2>
          <div class="space-y-4">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold text-yellow-800 mb-2">Open Source Databases</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>MySQL:</strong> mysql-connector-java</li>
                  <li>• <strong>PostgreSQL:</strong> postgresql</li>
                  <li>• <strong>H2:</strong> h2 (embedded database)</li>
                  <li>• <strong>SQLite:</strong> sqlite-jdbc</li>
                  <li>• <strong>MariaDB:</strong> mariadb-java-client</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Commercial Databases</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>Oracle:</strong> ojdbc (various versions)</li>
                  <li>• <strong>SQL Server:</strong> mssql-jdbc</li>
                  <li>• <strong>DB2:</strong> db2jcc</li>
                  <li>• <strong>Sybase:</strong> jconn</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// JDBCIntroDemo.java</div>
        <div class="text-blue-400">import</div> java.sql.*;<br/>
        <div class="text-blue-400">import</div> java.util.Properties;<br/><br/>

        <div class="text-blue-400">public class</div> <div class="text-yellow-400">JDBCIntroDemo</div> {<br/>
        &nbsp;&nbsp;<div class="text-gray-400">// Database connection parameters</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> DB_URL = <div class="text-green-300">"jdbc:h2:mem:testdb"</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> USER = <div class="text-green-300">"sa"</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> PASSWORD = <div class="text-green-300">""</div>;<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 1. Display JDBC driver information</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;displayDriverInfo();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 2. Basic connection example</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;basicConnectionExample();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 3. Connection with properties</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;connectionWithProperties();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 4. Database metadata example</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;databaseMetadataExample();<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">displayDriverInfo</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"=== JDBC Driver Information ==="</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Load H2 driver (automatic in modern JDBC)</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Class</div>.forName(<div class="text-green-300">"org.h2.Driver"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"H2 Driver loaded successfully"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Get driver version information</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Driver</div> driver = <div class="text-blue-400">DriverManager</div>.getDriver(DB_URL);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Driver Version: "</div> + <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver.getMajorVersion() + <div class="text-green-300">"."</div> + driver.getMinorVersion());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"JDBC Compliant: "</div> + driver.jdbcCompliant());<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">ClassNotFoundException</div> | <div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"Driver loading failed: "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">basicConnectionExample</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Basic Connection Example ==="</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Connection</div> connection = <div class="text-blue-400">null</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Establish connection</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;connection = <div class="text-blue-400">DriverManager</div>.getConnection(DB_URL, USER, PASSWORD);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Connection established successfully"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Database URL: "</div> + connection.getMetaData().getURL());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Database Product: "</div> + <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;connection.getMetaData().getDatabaseProductName());<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"Connection failed: "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">finally</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Always close resources</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (connection != <div class="text-blue-400">null</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;connection.close();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Connection closed"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"Error closing connection: "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">connectionWithProperties</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Connection with Properties ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Create connection properties</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Properties</div> props = <div class="text-blue-400">new</div> <div class="text-yellow-400">Properties</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;props.setProperty(<div class="text-green-300">"user"</div>, USER);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;props.setProperty(<div class="text-green-300">"password"</div>, PASSWORD);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;props.setProperty(<div class="text-green-300">"autoReconnect"</div>, <div class="text-green-300">"true"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;props.setProperty(<div class="text-green-300">"characterEncoding"</div>, <div class="text-green-300">"UTF-8"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Connection</div> conn = <div class="text-blue-400">DriverManager</div>.getConnection(DB_URL, props)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Connection with properties established"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Auto-commit: "</div> + conn.getAutoCommit());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Transaction isolation: "</div> + <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.getTransactionIsolation());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"Connection with properties failed: "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">databaseMetadataExample</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Database Metadata Example ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Connection</div> conn = <div class="text-blue-400">DriverManager</div>.getConnection(DB_URL, USER, PASSWORD)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">DatabaseMetaData</div> metaData = conn.getMetaData();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Database Product Name: "</div> + <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metaData.getDatabaseProductName());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Database Product Version: "</div> + <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metaData.getDatabaseProductVersion());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Driver Name: "</div> + metaData.getDriverName());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Driver Version: "</div> + metaData.getDriverVersion());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"JDBC Version: "</div> + <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metaData.getJDBCMajorVersion() + <div class="text-green-300">"."</div> + <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metaData.getJDBCMinorVersion());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Max Connections: "</div> + <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metaData.getMaxConnections());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Supports Transactions: "</div> + <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metaData.supportsTransactions());<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"Metadata retrieval failed: "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Utility method to demonstrate URL parsing</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">demonstrateURLFormats</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Database URL Examples ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div>[] urls = {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"jdbc:mysql://localhost:3306/mydb"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"jdbc:postgresql://localhost:5432/mydb"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"jdbc:oracle:thin:@localhost:1521:xe"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"jdbc:sqlserver://localhost:1433;databaseName=mydb"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"jdbc:h2:mem:testdb"</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;};<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">String</div> url : urls) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"URL: "</div> + url);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"  Protocol: "</div> + extractProtocol(url));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"  Subprotocol: "</div> + extractSubprotocol(url));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">extractProtocol</div>(<div class="text-blue-400">String</div> url) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> url.substring(<div class="text-purple-400">0</div>, url.indexOf(<div class="text-green-300">":"</div>));<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">extractSubprotocol</div>(<div class="text-blue-400">String</div> url) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> start = url.indexOf(<div class="text-green-300">":"</div>) + <div class="text-purple-400">1</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> end = url.indexOf(<div class="text-green-300">":"</div>, start);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> end > <div class="text-purple-400">0</div> ? url.substring(start, end) : url.substring(start);<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
    exercise: `
1) Load a JDBC driver using Class.forName() and verify it's loaded successfully.
2) Create a database connection using DriverManager.getConnection() with proper error handling.
3) Extract and display database metadata information from a Connection object.
4) Parse a JDBC URL to extract protocol, subprotocol, and connection details.
5) Create a Properties object with database connection parameters and use it for connection.
`
  }
};