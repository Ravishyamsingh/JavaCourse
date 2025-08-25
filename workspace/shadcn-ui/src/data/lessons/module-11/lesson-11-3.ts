import { LessonContent } from '../../types/LessonTypes';

export const lesson_11_3: LessonContent = {
  title: 'Executing SQL Queries',
  type: 'lesson',
  duration: '30 min',
  module: 'Database Connectivity (JDBC)',
  content: {
    overview: 'Learn to execute various types of SQL statements using JDBC. Master the Statement interface, understand different query types, and implement proper error handling for database operations.',
    objectives: [
      'Understand different types of SQL statements',
      'Master the Statement interface and its methods',
      'Learn to execute SELECT, INSERT, UPDATE, and DELETE operations',
      'Handle SQL exceptions and error conditions',
      'Implement batch processing for multiple statements',
      'Practice DDL operations for database schema management'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Executing SQL Queries
        </h1>
        <p class="mt-3 text-green-100 text-lg">Master SQL execution with JDBC Statement interface</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Statement Interface
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            The Statement interface is used to execute SQL statements against a database. It provides methods 
            for different types of SQL operations and handles the communication between Java and the database.
          </p>
          
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">💡 Key Concept</h4>
            <p class="text-green-700">Statement objects are created from Connection objects and are used to send SQL commands to the database.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Statement Types</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>Statement:</strong> Basic SQL execution</li>
                <li>• <strong>PreparedStatement:</strong> Precompiled SQL</li>
                <li>• <strong>CallableStatement:</strong> Stored procedures</li>
              </ul>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                Statement stmt = conn.createStatement();<br/>
                PreparedStatement pstmt = conn.prepareStatement(sql);<br/>
                CallableStatement cstmt = conn.prepareCall(sql);
              </div>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Execution Methods</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>executeQuery():</strong> SELECT statements</li>
                <li>• <strong>executeUpdate():</strong> INSERT, UPDATE, DELETE</li>
                <li>• <strong>execute():</strong> Any SQL statement</li>
                <li>• <strong>executeBatch():</strong> Batch operations</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-emerald-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Query Types and Methods
          </h2>
          <div class="space-y-4">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-emerald-50 p-4 rounded-lg">
                <h4 class="font-bold text-emerald-800 mb-2">SELECT Queries</h4>
                <p class="text-gray-700 mb-2">Use executeQuery() for SELECT statements that return data:</p>
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  String sql = "SELECT * FROM users";<br/>
                  ResultSet rs = stmt.executeQuery(sql);<br/>
                  while (rs.next()) {<br/>
                  &nbsp;&nbsp;// Process results<br/>
                  }
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">DML Operations</h4>
                <p class="text-gray-700 mb-2">Use executeUpdate() for INSERT, UPDATE, DELETE:</p>
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  String sql = "INSERT INTO users VALUES (1, 'John')";<br/>
                  int rowsAffected = stmt.executeUpdate(sql);<br/>
                  System.out.println("Rows affected: " + rowsAffected);
                </div>
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">DDL Operations</h4>
                <p class="text-gray-700 mb-2">Use executeUpdate() for CREATE, ALTER, DROP:</p>
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  String sql = "CREATE TABLE users (id INT, name VARCHAR(50))";<br/>
                  stmt.executeUpdate(sql);<br/>
                  System.out.println("Table created successfully");
                </div>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Generic Execution</h4>
                <p class="text-gray-700 mb-2">Use execute() when SQL type is unknown:</p>
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  boolean hasResultSet = stmt.execute(sql);<br/>
                  if (hasResultSet) {<br/>
                  &nbsp;&nbsp;ResultSet rs = stmt.getResultSet();<br/>
                  } else {<br/>
                  &nbsp;&nbsp;int count = stmt.getUpdateCount();<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Batch Processing
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Batch processing allows you to execute multiple SQL statements efficiently in a single database round trip.</p>
            
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
              <h4 class="font-bold text-blue-800 mb-2">⚡ Performance Tip</h4>
              <p class="text-blue-700">Use batch processing for multiple similar operations to significantly improve performance by reducing network overhead.</p>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Batch Operations</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                Statement stmt = conn.createStatement();<br/>
                stmt.addBatch("INSERT INTO users VALUES (1, 'Alice')");<br/>
                stmt.addBatch("INSERT INTO users VALUES (2, 'Bob')");<br/>
                stmt.addBatch("UPDATE users SET name='Charlie' WHERE id=1");<br/><br/>
                int[] results = stmt.executeBatch();<br/>
                System.out.println("Batch executed: " + Arrays.toString(results));
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Error Handling
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Proper error handling is essential for robust database applications.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Common SQL Exceptions</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>SQLSyntaxErrorException:</strong> Invalid SQL syntax</li>
                  <li>• <strong>SQLIntegrityConstraintViolationException:</strong> Constraint violations</li>
                  <li>• <strong>SQLTimeoutException:</strong> Query timeout</li>
                  <li>• <strong>SQLDataException:</strong> Data-related errors</li>
                  <li>• <strong>SQLTransactionRollbackException:</strong> Transaction issues</li>
                </ul>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Error Information</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>getMessage():</strong> Error description</li>
                  <li>• <strong>getSQLState():</strong> SQL state code</li>
                  <li>• <strong>getErrorCode():</strong> Vendor error code</li>
                  <li>• <strong>getNextException():</strong> Chained exceptions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Statement Configuration
          </h2>
          <div class="space-y-4">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Statement Properties</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                Statement stmt = conn.createStatement(<br/>
                &nbsp;&nbsp;ResultSet.TYPE_SCROLL_INSENSITIVE,<br/>
                &nbsp;&nbsp;ResultSet.CONCUR_READ_ONLY);<br/><br/>
                stmt.setQueryTimeout(30); <div class="text-yellow-400">// 30 seconds</div><br/>
                stmt.setMaxRows(1000); <div class="text-yellow-400">// Limit results</div><br/>
                stmt.setFetchSize(100); <div class="text-yellow-400">// Fetch size hint</div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Best Practices
          </h2>
          <div class="space-y-4">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">✅ Do</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Use try-with-resources for automatic cleanup</li>
                  <li>• Set appropriate timeouts</li>
                  <li>• Use batch processing for multiple operations</li>
                  <li>• Handle exceptions appropriately</li>
                  <li>• Use PreparedStatement for parameterized queries</li>
                  <li>• Close resources in proper order</li>
                </ul>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">❌ Don't</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Concatenate user input directly into SQL</li>
                  <li>• Ignore SQL exceptions</li>
                  <li>• Leave resources unclosed</li>
                  <li>• Use Statement for parameterized queries</li>
                  <li>• Execute SQL without validation</li>
                  <li>• Ignore transaction boundaries</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// SQLExecutionDemo.java</div>
        <div class="text-blue-400">import</div> java.sql.*;<br/>
        <div class="text-blue-400">import</div> java.util.Arrays;<br/><br/>

        <div class="text-blue-400">public class</div> <div class="text-yellow-400">SQLExecutionDemo</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> DB_URL = <div class="text-green-300">"jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1"</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> USER = <div class="text-green-300">"sa"</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> PASSWORD = <div class="text-green-300">""</div>;<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Connection</div> conn = <div class="text-blue-400">DriverManager</div>.getConnection(DB_URL, USER, PASSWORD)) {<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 1. Create table (DDL)</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;createTable(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 2. Insert data (DML)</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;insertData(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 3. Query data (DQL)</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;queryData(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 4. Update data</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;updateData(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 5. Batch operations</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;batchOperations(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 6. Delete data</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deleteData(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;handleSQLException(e);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">createTable</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"=== Creating Table ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> createTableSQL = <div class="text-green-300">"""</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">CREATE TABLE employees (</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">id INTEGER PRIMARY KEY,</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">name VARCHAR(100) NOT NULL,</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">email VARCHAR(100) UNIQUE,</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">department VARCHAR(50),</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">salary DECIMAL(10,2),</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">hire_date DATE</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">)</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"""</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Statement</div> stmt = conn.createStatement()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stmt.executeUpdate(createTableSQL);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Table 'employees' created successfully"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">insertData</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Inserting Data ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Statement</div> stmt = conn.createStatement()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div>[] insertStatements = {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"INSERT INTO employees VALUES (1, 'Alice Johnson', 'alice@company.com', 'Engineering', 75000.00, '2023-01-15')"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"INSERT INTO employees VALUES (2, 'Bob Smith', 'bob@company.com', 'Marketing', 65000.00, '2023-02-20')"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"INSERT INTO employees VALUES (3, 'Charlie Brown', 'charlie@company.com', 'Sales', 55000.00, '2023-03-10')"</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">String</div> sql : insertStatements) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> rowsAffected = stmt.executeUpdate(sql);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Inserted "</div> + rowsAffected + <div class="text-green-300">" row(s)"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">queryData</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Querying Data ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> selectSQL = <div class="text-green-300">"SELECT id, name, email, department, salary FROM employees ORDER BY salary DESC"</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Statement</div> stmt = conn.createStatement();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ResultSet</div> rs = stmt.executeQuery(selectSQL)) {<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Employee List (sorted by salary):"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"ID | Name           | Email                | Department  | Salary"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"---|----------------|----------------------|-------------|--------"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">while</div> (rs.next()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> id = rs.getInt(<div class="text-green-300">"id"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> name = rs.getString(<div class="text-green-300">"name"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> email = rs.getString(<div class="text-green-300">"email"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> department = rs.getString(<div class="text-green-300">"department"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">double</div> salary = rs.getDouble(<div class="text-green-300">"salary"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.printf(<div class="text-green-300">"%2d | %-14s | %-20s | %-11s | %.2f%n"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id, name, email, department, salary);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">updateData</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Updating Data ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> updateSQL = <div class="text-green-300">"UPDATE employees SET salary = salary * 1.10 WHERE department = 'Engineering'"</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Statement</div> stmt = conn.createStatement()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> rowsUpdated = stmt.executeUpdate(updateSQL);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Updated "</div> + rowsUpdated + <div class="text-green-300">" employee(s) with 10% salary increase"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Verify the update</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> verifySQL = <div class="text-green-300">"SELECT name, salary FROM employees WHERE department = 'Engineering'"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">ResultSet</div> rs = stmt.executeQuery(verifySQL)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Updated Engineering employees:"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">while</div> (rs.next()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"  "</div> + rs.getString(<div class="text-green-300">"name"</div>) + <div class="text-green-300">": $"</div> + rs.getDouble(<div class="text-green-300">"salary"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">batchOperations</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Batch Operations ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Statement</div> stmt = conn.createStatement()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Add multiple statements to batch</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stmt.addBatch(<div class="text-green-300">"INSERT INTO employees VALUES (4, 'David Wilson', 'david@company.com', 'HR', 60000.00, '2023-04-01')"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stmt.addBatch(<div class="text-green-300">"INSERT INTO employees VALUES (5, 'Eve Davis', 'eve@company.com', 'Finance', 70000.00, '2023-05-15')"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stmt.addBatch(<div class="text-green-300">"UPDATE employees SET department = 'IT' WHERE department = 'Engineering'"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Execute batch</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div>[] results = stmt.executeBatch();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Batch executed successfully"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"  Results: "</div> + <div class="text-blue-400">Arrays</div>.toString(results));<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Clear batch if needed</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stmt.clearBatch();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">deleteData</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Deleting Data ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> deleteSQL = <div class="text-green-300">"DELETE FROM employees WHERE salary < 60000"</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Statement</div> stmt = conn.createStatement()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> rowsDeleted = stmt.executeUpdate(deleteSQL);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Deleted "</div> + rowsDeleted + <div class="text-green-300">" employee(s) with salary < $60,000"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Show remaining employees</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> countSQL = <div class="text-green-300">"SELECT COUNT(*) as total FROM employees"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">ResultSet</div> rs = stmt.executeQuery(countSQL)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (rs.next()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"  Remaining employees: "</div> + rs.getInt(<div class="text-green-300">"total"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">handleSQLException</div>(<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"=== SQL Exception Details ==="</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"Message: "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"SQL State: "</div> + e.getSQLState());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"Error Code: "</div> + e.getErrorCode());<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Print stack trace for debugging</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;e.printStackTrace();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Handle chained exceptions</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">SQLException</div> nextException = e.getNextException();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">while</div> (nextException != <div class="text-blue-400">null</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"Chained Exception: "</div> + nextException.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nextException = nextException.getNextException();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Utility method to demonstrate different execution methods</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">demonstrateExecuteMethods</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Execute Methods Demonstration ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Statement</div> stmt = conn.createStatement()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Using execute() method</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> sql = <div class="text-green-300">"SELECT COUNT(*) FROM employees"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">boolean</div> hasResultSet = stmt.execute(sql);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (hasResultSet) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">ResultSet</div> rs = stmt.getResultSet()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (rs.next()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Total employees: "</div> + rs.getInt(<div class="text-purple-400">1</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">else</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> updateCount = stmt.getUpdateCount();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Update count: "</div> + updateCount);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-lg mb-8">
        <h2 class="text-2xl font-bold mb-4">🎯 Practice Exercise: Employee Management System</h2>
        <p class="text-green-100">Build a complete employee management system that demonstrates all SQL execution patterns using JDBC Statement interface.</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Requirements</h3>
          <div class="space-y-4">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">1. Database Schema</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Create employees table with comprehensive fields</li>
                <li>• Create departments table with department information</li>
                <li>• Create projects table for project assignments</li>
                <li>• Implement proper foreign key relationships</li>
              </ul>
            </div>
            
            <div class="bg-emerald-50 p-4 rounded-lg">
              <h4 class="font-bold text-emerald-800 mb-2">2. CRUD Operations</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Implement employee creation with validation</li>
                <li>• Create methods for reading employee data with filtering</li>
                <li>• Update employee information (salary, department, etc.)</li>
                <li>• Delete employees with proper constraint handling</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">3. Advanced Queries</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Implement complex SELECT queries with JOINs</li>
                <li>• Create aggregate queries (COUNT, SUM, AVG)</li>
                <li>• Build reporting queries with GROUP BY and HAVING</li>
                <li>• Implement search functionality with LIKE operators</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">4. Batch Processing</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Implement bulk employee import functionality</li>
                <li>• Create batch update operations for salary adjustments</li>
                <li>• Handle batch execution errors gracefully</li>
                <li>• Measure and compare batch vs individual operation performance</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">💡 Implementation Hints</h3>
          <div class="space-y-3">
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-gray-700"><strong>DDL Operations:</strong> Use executeUpdate() for CREATE, ALTER, DROP statements</p>
            </div>
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-gray-700"><strong>DML Operations:</strong> Use executeUpdate() for INSERT, UPDATE, DELETE and check affected row count</p>
            </div>
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-gray-700"><strong>Query Operations:</strong> Use executeQuery() for SELECT statements and process ResultSet</p>
            </div>
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-gray-700"><strong>Batch Processing:</strong> Use addBatch() and executeBatch() for multiple operations</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🎯 Success Criteria</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Complete database schema with proper relationships</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Working CRUD operations for all entities</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Complex queries with JOINs and aggregations</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Efficient batch processing implementation</span>
              </div>
            </div>
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Comprehensive error handling for all SQL operations</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Proper resource management with try-with-resources</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Performance measurement and optimization</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Clean, maintainable code structure</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🚀 Bonus Challenges</h3>
          <div class="space-y-3">
            <div class="bg-yellow-50 p-3 rounded">
              <p class="text-gray-700"><strong>Query Builder:</strong> Create a dynamic SQL query builder for flexible search operations</p>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <p class="text-gray-700"><strong>SQL Injection Prevention:</strong> Demonstrate SQL injection vulnerabilities and prevention techniques</p>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <p class="text-gray-700"><strong>Performance Profiling:</strong> Implement query execution time measurement and optimization</p>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <p class="text-gray-700"><strong>Data Export:</strong> Create functionality to export query results to CSV or JSON format</p>
            </div>
          </div>
        </div>
      </div>
    `
  }
};