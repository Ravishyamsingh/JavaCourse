import { LessonContent } from '../../types/LessonTypes';

export const lesson_11_5: LessonContent = {
  title: 'ResultSet Processing',
  type: 'lesson',
  duration: '40 min',
  module: 'Database Connectivity (JDBC)',
  content: {
    overview: 'Master ResultSet processing for efficient data retrieval and manipulation. Learn navigation methods, data extraction techniques, metadata handling, and advanced ResultSet features for comprehensive database result processing.',
    objectives: [
      'Understand ResultSet types and characteristics',
      'Master ResultSet navigation and positioning',
      'Learn data extraction methods for different data types',
      'Implement ResultSet metadata processing',
      'Practice scrollable and updatable ResultSets',
      'Handle large result sets efficiently'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          ResultSet Processing
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Efficient data retrieval and manipulation from database queries</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            ResultSet Overview
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            ResultSet represents a table of data returned by executing a database query. It maintains a cursor 
            pointing to the current row and provides methods to navigate through rows and extract column values.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🎯 Key Characteristics</h4>
            <p class="text-blue-700">ResultSet acts like a virtual table with a cursor that can move forward, backward, or to specific positions depending on its type.</p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">📍 Cursor Position</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Initially before first row</li>
                <li>• Moves with navigation methods</li>
                <li>• Can be positioned anywhere</li>
                <li>• Indicates current row</li>
              </ul>
            </div>
            <div class="bg-cyan-50 p-4 rounded-lg">
              <h4 class="font-bold text-cyan-800 mb-2">🔄 Navigation</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Forward-only (default)</li>
                <li>• Bidirectional scrolling</li>
                <li>• Absolute positioning</li>
                <li>• Relative movement</li>
              </ul>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">📊 Data Access</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Column index (1-based)</li>
                <li>• Column name</li>
                <li>• Type-safe getters</li>
                <li>• Null value handling</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            ResultSet Types
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">ResultSet behavior is determined by its type and concurrency settings.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-cyan-50 p-4 rounded-lg">
                <h4 class="font-bold text-cyan-800 mb-2">ResultSet Types</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-cyan-400">
                    <h5 class="font-bold text-cyan-700">TYPE_FORWARD_ONLY</h5>
                    <p class="text-gray-600 text-sm">Cursor moves forward only (default)</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                    <h5 class="font-bold text-blue-700">TYPE_SCROLL_INSENSITIVE</h5>
                    <p class="text-gray-600 text-sm">Scrollable, not sensitive to changes</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                    <h5 class="font-bold text-purple-700">TYPE_SCROLL_SENSITIVE</h5>
                    <p class="text-gray-600 text-sm">Scrollable, sensitive to changes</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Concurrency Types</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                    <h5 class="font-bold text-blue-700">CONCUR_READ_ONLY</h5>
                    <p class="text-gray-600 text-sm">Read-only access (default)</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-green-400">
                    <h5 class="font-bold text-green-700">CONCUR_UPDATABLE</h5>
                    <p class="text-gray-600 text-sm">Can update, insert, delete rows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Navigation Methods
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">ResultSet provides various methods to navigate through the result data.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Basic Navigation</h4>
                <div class="space-y-2">
                  <div class="bg-white p-2 rounded border-l-4 border-green-400">
                    <code class="text-green-700 font-bold">next()</code>
                    <p class="text-gray-600 text-sm">Move to next row</p>
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-blue-400">
                    <code class="text-blue-700 font-bold">previous()</code>
                    <p class="text-gray-600 text-sm">Move to previous row</p>
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-purple-400">
                    <code class="text-purple-700 font-bold">first()</code>
                    <p class="text-gray-600 text-sm">Move to first row</p>
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-orange-400">
                    <code class="text-orange-700 font-bold">last()</code>
                    <p class="text-gray-600 text-sm">Move to last row</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Advanced Navigation</h4>
                <div class="space-y-2">
                  <div class="bg-white p-2 rounded border-l-4 border-blue-400">
                    <code class="text-blue-700 font-bold">absolute(int row)</code>
                    <p class="text-gray-600 text-sm">Move to specific row</p>
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-cyan-400">
                    <code class="text-cyan-700 font-bold">relative(int rows)</code>
                    <p class="text-gray-600 text-sm">Move relative to current</p>
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-indigo-400">
                    <code class="text-indigo-700 font-bold">beforeFirst()</code>
                    <p class="text-gray-600 text-sm">Move before first row</p>
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-pink-400">
                    <code class="text-pink-700 font-bold">afterLast()</code>
                    <p class="text-gray-600 text-sm">Move after last row</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Data Extraction Methods
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">ResultSet provides type-specific getter methods for extracting column values.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Common Getter Methods</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-white p-2 rounded">
                    <code class="text-purple-700">getString(int/String)</code> - String values
                  </div>
                  <div class="bg-white p-2 rounded">
                    <code class="text-blue-700">getInt(int/String)</code> - Integer values
                  </div>
                  <div class="bg-white p-2 rounded">
                    <code class="text-green-700">getDouble(int/String)</code> - Double values
                  </div>
                  <div class="bg-white p-2 rounded">
                    <code class="text-orange-700">getDate(int/String)</code> - Date values
                  </div>
                  <div class="bg-white p-2 rounded">
                    <code class="text-cyan-700">getTimestamp(int/String)</code> - Timestamp values
                  </div>
                  <div class="bg-white p-2 rounded">
                    <code class="text-pink-700">getBigDecimal(int/String)</code> - BigDecimal values
                  </div>
                </div>
              </div>
              
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Advanced Getters</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-white p-2 rounded">
                    <code class="text-indigo-700">getObject(int/String)</code> - Generic object
                  </div>
                  <div class="bg-white p-2 rounded">
                    <code class="text-red-700">getBlob(int/String)</code> - Binary data
                  </div>
                  <div class="bg-white p-2 rounded">
                    <code class="text-yellow-700">getClob(int/String)</code> - Character data
                  </div>
                  <div class="bg-white p-2 rounded">
                    <code class="text-teal-700">getArray(int/String)</code> - SQL arrays
                  </div>
                  <div class="bg-white p-2 rounded">
                    <code class="text-violet-700">wasNull()</code> - Check for NULL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            ResultSet Metadata
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">ResultSetMetaData provides information about the structure and properties of the ResultSet.</p>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Metadata Information</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <div class="bg-white p-2 rounded border-l-4 border-orange-400">
                    <strong>Column Count:</strong> getColumnCount()
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-red-400">
                    <strong>Column Name:</strong> getColumnName(int)
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-yellow-400">
                    <strong>Column Type:</strong> getColumnType(int)
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="bg-white p-2 rounded border-l-4 border-green-400">
                    <strong>Column Size:</strong> getColumnDisplaySize(int)
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-blue-400">
                    <strong>Nullable:</strong> isNullable(int)
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-purple-400">
                    <strong>Table Name:</strong> getTableName(int)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Updatable ResultSets
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Updatable ResultSets allow you to modify, insert, and delete rows directly through the ResultSet.</p>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Update Operations</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• updateXxx() methods</li>
                  <li>• updateRow() to commit</li>
                  <li>• cancelRowUpdates() to cancel</li>
                  <li>• Row-level modifications</li>
                </ul>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Insert Operations</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• moveToInsertRow()</li>
                  <li>• updateXxx() for new values</li>
                  <li>• insertRow() to commit</li>
                  <li>• moveToCurrentRow() to return</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Delete Operations</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• deleteRow() method</li>
                  <li>• Removes current row</li>
                  <li>• Immediate effect</li>
                  <li>• Cannot be undone</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// ResultSetProcessingDemo.java</div>
        <div class="text-blue-400">import</div> java.sql.*;<br/>
        <div class="text-blue-400">import</div> java.math.BigDecimal;<br/>
        <div class="text-blue-400">import</div> java.util.ArrayList;<br/>
        <div class="text-blue-400">import</div> java.util.List;<br/><br/>

        <div class="text-blue-400">public class</div> <div class="text-yellow-400">ResultSetProcessingDemo</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> DB_URL = <div class="text-green-300">"jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1"</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> USER = <div class="text-green-300">"sa"</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> PASSWORD = <div class="text-green-300">""</div>;<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Connection</div> conn = <div class="text-blue-400">DriverManager</div>.getConnection(DB_URL, USER, PASSWORD)) {<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Setup database</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setupDatabase(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 1. Basic ResultSet processing</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;basicResultSetProcessing(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 2. ResultSet navigation</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resultSetNavigation(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 3. ResultSet metadata</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resultSetMetadata(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 4. Updatable ResultSet</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;updatableResultSet(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.printStackTrace();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">setupDatabase</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> createTable = <div class="text-green-300">"""</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">CREATE TABLE employees (</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">id INTEGER AUTO_INCREMENT PRIMARY KEY,</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">name VARCHAR(100) NOT NULL,</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">email VARCHAR(100) UNIQUE,</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">department VARCHAR(50),</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">salary DECIMAL(10,2),</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">hire_date DATE</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">)</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"""</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Statement</div> stmt = conn.createStatement()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stmt.executeUpdate(createTable);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Database setup complete"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Insert sample data</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> insertSQL = <div class="text-green-300">"INSERT INTO employees (name, email, department, salary, hire_date) VALUES (?, ?, ?, ?, ?)"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">PreparedStatement</div> pstmt = conn.prepareStatement(insertSQL)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Object</div>[][] employees = {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<div class="text-green-300">"Alice Johnson"</div>, <div class="text-green-300">"alice@company.com"</div>, <div class="text-green-300">"Engineering"</div>, <div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"75000"</div>), <div class="text-blue-400">Date</div>.valueOf(<div class="text-green-300">"2023-01-15"</div>)},<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<div class="text-green-300">"Bob Smith"</div>, <div class="text-green-300">"bob@company.com"</div>, <div class="text-green-300">"Marketing"</div>, <div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"65000"</div>), <div class="text-blue-400">Date</div>.valueOf(<div class="text-green-300">"2023-02-01"</div>)},<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<div class="text-green-300">"Carol Davis"</div>, <div class="text-green-300">"carol@company.com"</div>, <div class="text-green-300">"Engineering"</div>, <div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"80000"</div>), <div class="text-blue-400">Date</div>.valueOf(<div class="text-green-300">"2023-03-15"</div>)}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">Object</div>[] emp : employees) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setString(<div class="text-purple-400">1</div>, (<div class="text-blue-400">String</div>) emp[<div class="text-purple-400">0</div>]);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setString(<div class="text-purple-400">2</div>, (<div class="text-blue-400">String</div>) emp[<div class="text-purple-400">1</div>]);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setString(<div class="text-purple-400">3</div>, (<div class="text-blue-400">String</div>) emp[<div class="text-purple-400">2</div>]);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setBigDecimal(<div class="text-purple-400">4</div>, (<div class="text-blue-400">BigDecimal</div>) emp[<div class="text-purple-400">3</div>]);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setDate(<div class="text-purple-400">5</div>, (<div class="text-blue-400">Date</div>) emp[<div class="text-purple-400">4</div>]);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.executeUpdate();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">basicResultSetProcessing</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"=== Basic ResultSet Processing ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> query = <div class="text-green-300">"SELECT id, name, email, department, salary FROM employees ORDER BY salary DESC"</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">PreparedStatement</div> pstmt = conn.prepareStatement(query);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ResultSet</div> rs = pstmt.executeQuery()) {<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Employees (ordered by salary):"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">while</div> (rs.next()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> id = rs.getInt(<div class="text-green-300">"id"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> name = rs.getString(<div class="text-green-300">"name"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> email = rs.getString(<div class="text-green-300">"email"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> department = rs.getString(<div class="text-green-300">"department"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">BigDecimal</div> salary = rs.getBigDecimal(<div class="text-green-300">"salary"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.printf(<div class="text-green-300">"%d: %s (%s) - %s - $%.2f%n"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id, name, email, department, salary);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">resultSetNavigation</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== ResultSet Navigation Demo ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> query = <div class="text-green-300">"SELECT id, name, salary FROM employees ORDER BY id"</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">PreparedStatement</div> pstmt = conn.prepareStatement(query,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ResultSet</div>.TYPE_SCROLL_INSENSITIVE,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ResultSet</div>.CONCUR_READ_ONLY);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ResultSet</div> rs = pstmt.executeQuery()) {<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (rs.last()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Last employee: "</div> + rs.getString(<div class="text-green-300">"name"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (rs.first()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"First employee: "</div> + rs.getString(<div class="text-green-300">"name"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">resultSetMetadata</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== ResultSet Metadata Demo ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> query = <div class="text-green-300">"SELECT * FROM employees LIMIT 1"</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">PreparedStatement</div> pstmt = conn.prepareStatement(query);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ResultSet</div> rs = pstmt.executeQuery()) {<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ResultSetMetaData</div> metaData = rs.getMetaData();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> columnCount = metaData.getColumnCount();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Number of columns: "</div> + columnCount);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> i = <div class="text-purple-400">1</div>; i <= columnCount; i++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Column "</div> + i + <div class="text-green-300">": "</div> + metaData.getColumnName(i) + <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">" ("</div> + metaData.getColumnTypeName(i) + <div class="text-green-300">")"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">updatableResultSet</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Updatable ResultSet Demo ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> query = <div class="text-green-300">"SELECT id, name, salary FROM employees WHERE department = 'Engineering'"</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">PreparedStatement</div> pstmt = conn.prepareStatement(query,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ResultSet</div>.TYPE_SCROLL_INSENSITIVE,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ResultSet</div>.CONCUR_UPDATABLE);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ResultSet</div> rs = pstmt.executeQuery()) {<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">while</div> (rs.next()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">BigDecimal</div> currentSalary = rs.getBigDecimal(<div class="text-green-300">"salary"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">BigDecimal</div> newSalary = currentSalary.multiply(<div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"1.10"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rs.updateBigDecimal(<div class="text-green-300">"salary"</div>, newSalary);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rs.updateRow();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Updated salary for "</div> + rs.getString(<div class="text-green-300">"name"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <span class="w-3 h-8 bg-white rounded mr-3"></span>
          Practice Exercise: Advanced ResultSet Operations
        </h2>
        <p class="text-blue-100">Build a comprehensive data analysis system using advanced ResultSet processing techniques</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Requirements</h3>
          <div class="space-y-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">1. Database Setup</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Create employees table with comprehensive data</li>
                <li>• Create departments table with budget information</li>
                <li>• Create projects table with project details</li>
                <li>• Add relationships between tables</li>
              </ul>
            </div>
            
            <div class="bg-cyan-50 p-4 rounded-lg">
              <h4 class="font-bold text-cyan-800 mb-2">2. ResultSet Navigation</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Implement forward and backward navigation</li>
                <li>• Create absolute and relative positioning</li>
                <li>• Add first/last row navigation</li>
                <li>• Handle boundary conditions properly</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">3. Data Extraction</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Extract data using column indices and names</li>
                <li>• Handle different data types properly</li>
                <li>• Implement null value checking</li>
                <li>• Create type-safe data extraction methods</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">4. Metadata Processing</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Extract and display table metadata</li>
                <li>• Show column information dynamically</li>
                <li>• Create generic result display methods</li>
                <li>• Handle unknown table structures</li>
              </ul>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">5. Updatable ResultSets</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Implement row updates and modifications</li>
                <li>• Add new row insertion functionality</li>
                <li>• Create row deletion capabilities</li>
                <li>• Handle update conflicts and errors</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">💡 Implementation Tips</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-cyan-50 p-4 rounded-lg">
                <h4 class="font-bold text-cyan-800 mb-2">Navigation Best Practices</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Always check return values of navigation methods</li>
                  <li>• Handle empty ResultSets gracefully</li>
                  <li>• Use appropriate ResultSet types for your needs</li>
                  <li>• Consider performance implications of scrolling</li>
                </ul>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Data Extraction Tips</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Use column names for better maintainability</li>
                  <li>• Always check wasNull() after getting values</li>
                  <li>• Use appropriate getter methods for data types</li>
                  <li>• Handle type conversions carefully</li>
                </ul>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Metadata Guidelines</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Use metadata for dynamic table processing</li>
                  <li>• Cache metadata when processing multiple rows</li>
                  <li>• Handle different database-specific types</li>
                  <li>• Consider nullable columns in processing</li>
                </ul>
              </div>
              
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Update Operations</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Always call updateRow() after modifications</li>
                  <li>• Use moveToInsertRow() for new records</li>
                  <li>• Handle concurrent modification exceptions</li>
                  <li>• Validate data before updating</li>
                </ul>
              </div>
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
                  <p class="font-semibold text-gray-800">Navigation Mastery</p>
                  <p class="text-gray-600 text-sm">All navigation methods work correctly with proper error handling</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p class="font-semibold text-gray-800">Data Extraction</p>
                  <p class="text-gray-600 text-sm">Type-safe data extraction with proper null handling</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p class="font-semibold text-gray-800">Metadata Processing</p>
                  <p class="text-gray-600 text-sm">Dynamic table structure analysis and display</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                <div>
                  <p class="font-semibold text-gray-800">Update Operations</p>
                  <p class="text-gray-600 text-sm">Successful row updates, inserts, and deletes</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</div>
                <div>
                  <p class="font-semibold text-gray-800">Performance Optimization</p>
                  <p class="text-gray-600 text-sm">Efficient handling of large result sets</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</div>
                <div>
                  <p class="font-semibold text-gray-800">Error Handling</p>
                  <p class="text-gray-600 text-sm">Robust error handling and resource management</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-lg">
          <h3 class="text-xl font-bold mb-4">🎯 Bonus Challenges</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold mb-2">Advanced Features</h4>
              <ul class="space-y-1 text-blue-100">
                <li>• Implement result set caching</li>
                <li>• Add pagination support</li>
                <li>• Create result set filtering</li>
                <li>• Build data export functionality</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-2">Integration</h4>
              <ul class="space-y-1 text-blue-100">
                <li>• Add concurrent access handling</li>
                <li>• Implement result set monitoring</li>
                <li>• Create performance benchmarks</li>
                <li>• Build automated testing suite</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  }
};