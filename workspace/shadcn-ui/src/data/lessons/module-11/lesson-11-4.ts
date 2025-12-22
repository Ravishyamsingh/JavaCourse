import { LessonContent } from '../../types/LessonTypes';

export const lesson_11_4: LessonContent = {
  title: 'PreparedStatement and CallableStatement',
  type: 'lesson',
  duration: '35 min',
  module: 'Database Connectivity (JDBC)',
  content: {
    overview: 'Master PreparedStatement for secure, efficient parameterized queries and CallableStatement for stored procedure execution. Learn about SQL injection prevention, parameter binding, and advanced database operations.',
    objectives: [
      'Understand the benefits of PreparedStatement over Statement',
      'Learn to create and execute parameterized queries',
      'Master parameter binding and data type handling',
      'Implement SQL injection prevention techniques',
      'Learn CallableStatement for stored procedure execution',
      'Practice batch operations with PreparedStatement'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          PreparedStatement and CallableStatement
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Secure, efficient parameterized queries and stored procedures</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            PreparedStatement Overview
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            PreparedStatement is a precompiled SQL statement that offers better performance, security, and 
            maintainability compared to regular Statement. It prevents SQL injection attacks and allows 
            parameter binding for dynamic queries.
          </p>
          
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">🔒 Security Benefit</h4>
            <p class="text-purple-700">PreparedStatement automatically escapes parameters, preventing SQL injection attacks that can occur with string concatenation.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">❌ Vulnerable Statement</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                <div class="text-yellow-400">// SQL Injection risk!</div>
                String sql = "SELECT * FROM users WHERE " +<br/>
                &nbsp;&nbsp;"username = '" + userInput + "'";<br/>
                Statement stmt = conn.createStatement();<br/>
                ResultSet rs = stmt.executeQuery(sql);
              </div>
              <p class="text-red-700 mt-2 text-sm">Vulnerable to SQL injection</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Safe PreparedStatement</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                <div class="text-yellow-400">// Safe from SQL injection</div>
                String sql = "SELECT * FROM users WHERE username = ?";<br/>
                PreparedStatement pstmt = conn.prepareStatement(sql);<br/>
                pstmt.setString(1, userInput);<br/>
                ResultSet rs = pstmt.executeQuery();
              </div>
              <p class="text-green-700 mt-2 text-sm">Parameters are safely escaped</p>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-violet-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Parameter Binding
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">PreparedStatement uses placeholders (?) for parameters that are bound using setter methods.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-violet-50 p-4 rounded-lg">
                <h4 class="font-bold text-violet-800 mb-2">Common Setter Methods</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>setString(index, value):</strong> String values</li>
                  <li>• <strong>setInt(index, value):</strong> Integer values</li>
                  <li>• <strong>setDouble(index, value):</strong> Double values</li>
                  <li>• <strong>setDate(index, value):</strong> Date values</li>
                  <li>• <strong>setTimestamp(index, value):</strong> Timestamp values</li>
                  <li>• <strong>setNull(index, sqlType):</strong> NULL values</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Parameter Example</h4>
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  String sql = "INSERT INTO employees " +<br/>
                  &nbsp;&nbsp;"(name, email, salary, hire_date) " +<br/>
                  &nbsp;&nbsp;"VALUES (?, ?, ?, ?)";<br/><br/>
                  PreparedStatement pstmt = conn.prepareStatement(sql);<br/>
                  pstmt.setString(1, "John Doe");<br/>
                  pstmt.setString(2, "john@company.com");<br/>
                  pstmt.setDouble(3, 75000.0);<br/>
                  pstmt.setDate(4, Date.valueOf("2023-01-15"));
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            PreparedStatement Benefits
          </h2>
          <div class="space-y-4">
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">🔒 Security</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Prevents SQL injection</li>
                  <li>• Automatic parameter escaping</li>
                  <li>• Type-safe parameter binding</li>
                </ul>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">⚡ Performance</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Precompiled SQL</li>
                  <li>• Query plan caching</li>
                  <li>• Reduced parsing overhead</li>
                </ul>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">🛠️ Maintainability</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Cleaner code</li>
                  <li>• Easier debugging</li>
                  <li>• Better error handling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            CallableStatement
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">CallableStatement is used to execute stored procedures and functions in the database.</p>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Stored Procedure Syntax</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                <div class="text-yellow-400">// Call stored procedure</div>
                String sql = "{call procedure_name(?, ?, ?)}";<br/>
                CallableStatement cstmt = conn.prepareCall(sql);<br/><br/>
                <div class="text-yellow-400">// Call function</div>
                String sql2 = "{? = call function_name(?, ?)}";<br/>
                CallableStatement cstmt2 = conn.prepareCall(sql2);
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Parameter Types</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>IN:</strong> Input parameters</li>
                  <li>• <strong>OUT:</strong> Output parameters</li>
                  <li>• <strong>INOUT:</strong> Input/Output parameters</li>
                </ul>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Parameter Methods</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>setXxx():</strong> Set input parameters</li>
                  <li>• <strong>registerOutParameter():</strong> Register output</li>
                  <li>• <strong>getXxx():</strong> Get output values</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Batch Processing with PreparedStatement
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">PreparedStatement batch processing is more efficient than Statement batching for similar operations.</p>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Batch Pattern</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                PreparedStatement pstmt = conn.prepareStatement(<br/>
                &nbsp;&nbsp;"INSERT INTO employees (name, email, salary) VALUES (?, ?, ?)");<br/><br/>
                for (Employee emp : employees) {<br/>
                &nbsp;&nbsp;pstmt.setString(1, emp.getName());<br/>
                &nbsp;&nbsp;pstmt.setString(2, emp.getEmail());<br/>
                &nbsp;&nbsp;pstmt.setDouble(3, emp.getSalary());<br/>
                &nbsp;&nbsp;pstmt.addBatch();<br/>
                }<br/><br/>
                int[] results = pstmt.executeBatch();
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// PreparedStatementDemo.java</div>
        <div class="text-blue-400">import</div> java.sql.*;<br/>
        <div class="text-blue-400">import</div> java.math.BigDecimal;<br/>
        <div class="text-blue-400">import</div> java.time.LocalDate;<br/>
        <div class="text-blue-400">import</div> java.util.Arrays;<br/>
        <div class="text-blue-400">import</div> java.util.List;<br/>
        <div class="text-blue-400">import</div> java.util.ArrayList;<br/><br/>

        <div class="text-blue-400">public class</div> <div class="text-yellow-400">PreparedStatementDemo</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> DB_URL = <div class="text-green-300">"jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1"</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> USER = <div class="text-green-300">"sa"</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> PASSWORD = <div class="text-green-300">""</div>;<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">static class</div> <div class="text-yellow-400">Employee</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> name;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> email;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> department;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">BigDecimal</div> salary;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">LocalDate</div> hireDate;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">Employee</div>(<div class="text-blue-400">String</div> name, <div class="text-blue-400">String</div> email, <div class="text-blue-400">String</div> department, <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">BigDecimal</div> salary, <div class="text-blue-400">LocalDate</div> hireDate) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.name = name;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.email = email;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.department = department;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.salary = salary;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.hireDate = hireDate;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Getters</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getName</div>() { <div class="text-blue-400">return</div> name; }<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getEmail</div>() { <div class="text-blue-400">return</div> email; }<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getDepartment</div>() { <div class="text-blue-400">return</div> department; }<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">BigDecimal</div> <div class="text-yellow-400">getSalary</div>() { <div class="text-blue-400">return</div> salary; }<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">LocalDate</div> <div class="text-yellow-400">getHireDate</div>() { <div class="text-blue-400">return</div> hireDate; }<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Connection</div> conn = <div class="text-blue-400">DriverManager</div>.getConnection(DB_URL, USER, PASSWORD)) {<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Setup database</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setupDatabase(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 1. Basic PreparedStatement operations</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;basicPreparedStatementDemo(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 2. Parameterized queries</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;parameterizedQueriesDemo(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 3. Batch processing</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;batchProcessingDemo(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 4. CallableStatement demo</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callableStatementDemo(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 5. SQL injection prevention demo</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sqlInjectionPreventionDemo(conn);<br/><br/>

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
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">basicPreparedStatementDemo</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"=== Basic PreparedStatement Demo ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Insert with PreparedStatement</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> insertSQL = <div class="text-green-300">"INSERT INTO employees (name, email, department, salary, hire_date) VALUES (?, ?, ?, ?, ?)"</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">PreparedStatement</div> pstmt = conn.prepareStatement(insertSQL)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Set parameters</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setString(<div class="text-purple-400">1</div>, <div class="text-green-300">"Alice Johnson"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setString(<div class="text-purple-400">2</div>, <div class="text-green-300">"alice@company.com"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setString(<div class="text-purple-400">3</div>, <div class="text-green-300">"Engineering"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setBigDecimal(<div class="text-purple-400">4</div>, <div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"75000.00"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setDate(<div class="text-purple-400">5</div>, <div class="text-blue-400">Date</div>.valueOf(<div class="text-green-300">"2023-01-15"</div>));<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> rowsAffected = pstmt.executeUpdate();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Inserted "</div> + rowsAffected + <div class="text-green-300">" employee"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">parameterizedQueriesDemo</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Parameterized Queries Demo ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Query with multiple parameters</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> selectSQL = <div class="text-green-300">"""</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">SELECT id, name, email, department, salary </div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">FROM employees </div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">WHERE department = ? AND salary >= ? </div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">ORDER BY salary DESC</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"""</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">PreparedStatement</div> pstmt = conn.prepareStatement(selectSQL)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setString(<div class="text-purple-400">1</div>, <div class="text-green-300">"Engineering"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setBigDecimal(<div class="text-purple-400">2</div>, <div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"70000"</div>));<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">ResultSet</div> rs = pstmt.executeQuery()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"High-paid Engineering employees:"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">while</div> (rs.next()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.printf(<div class="text-green-300">"%s (%s) - $%.2f%n"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rs.getString(<div class="text-green-300">"name"</div>),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rs.getString(<div class="text-green-300">"email"</div>),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rs.getBigDecimal(<div class="text-green-300">"salary"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">batchProcessingDemo</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Batch Processing Demo ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> insertSQL = <div class="text-green-300">"INSERT INTO employees (name, email, department, salary, hire_date) VALUES (?, ?, ?, ?, ?)"</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Sample employees for batch insert</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Employee</div>&gt; employees = <div class="text-blue-400">Arrays</div>.asList(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">Employee</div>(<div class="text-green-300">"Bob Smith"</div>, <div class="text-green-300">"bob@company.com"</div>, <div class="text-green-300">"Marketing"</div>, <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"65000"</div>), <div class="text-blue-400">LocalDate</div>.of(<div class="text-purple-400">2023</div>, <div class="text-purple-400">2</div>, <div class="text-purple-400">1</div>)),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">Employee</div>(<div class="text-green-300">"Carol Davis"</div>, <div class="text-green-300">"carol@company.com"</div>, <div class="text-green-300">"Engineering"</div>, <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"80000"</div>), <div class="text-blue-400">LocalDate</div>.of(<div class="text-purple-400">2023</div>, <div class="text-purple-400">3</div>, <div class="text-purple-400">15</div>)),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">Employee</div>(<div class="text-green-300">"David Wilson"</div>, <div class="text-green-300">"david@company.com"</div>, <div class="text-green-300">"Sales"</div>, <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"55000"</div>), <div class="text-blue-400">LocalDate</div>.of(<div class="text-purple-400">2023</div>, <div class="text-purple-400">4</div>, <div class="text-purple-400">10</div>))<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">PreparedStatement</div> pstmt = conn.prepareStatement(insertSQL)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">Employee</div> emp : employees) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setString(<div class="text-purple-400">1</div>, emp.getName());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setString(<div class="text-purple-400">2</div>, emp.getEmail());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setString(<div class="text-purple-400">3</div>, emp.getDepartment());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setBigDecimal(<div class="text-purple-400">4</div>, emp.getSalary());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setDate(<div class="text-purple-400">5</div>, <div class="text-blue-400">Date</div>.valueOf(emp.getHireDate()));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.addBatch();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div>[] results = pstmt.executeBatch();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Batch inserted "</div> + results.length + <div class="text-green-300">" employees"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">callableStatementDemo</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== CallableStatement Demo ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Create a simple stored procedure</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> createProcedure = <div class="text-green-300">"""</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">CREATE OR REPLACE PROCEDURE get_employee_count(</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">IN dept_name VARCHAR(50),</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">OUT emp_count INTEGER</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">)</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">LANGUAGE SQL</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">READS SQL DATA</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">BEGIN</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">SELECT COUNT(*) INTO emp_count FROM employees WHERE department = dept_name;</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">END</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"""</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Statement</div> stmt = conn.createStatement()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stmt.executeUpdate(createProcedure);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Stored procedure created"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Call the stored procedure</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> callProcedure = <div class="text-green-300">"{call get_employee_count(?, ?)}"</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">CallableStatement</div> cstmt = conn.prepareCall(callProcedure)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Set input parameter</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cstmt.setString(<div class="text-purple-400">1</div>, <div class="text-green-300">"Engineering"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Register output parameter</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cstmt.registerOutParameter(<div class="text-purple-400">2</div>, <div class="text-blue-400">Types</div>.INTEGER);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Execute the procedure</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cstmt.execute();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Get output parameter</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> count = cstmt.getInt(<div class="text-purple-400">2</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Engineering department has "</div> + count + <div class="text-green-300">" employees"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">sqlInjectionPreventionDemo</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== SQL Injection Prevention Demo ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Simulate malicious input</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> maliciousInput = <div class="text-green-300">"'; DROP TABLE employees; --"</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Safe query with PreparedStatement</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> safeQuery = <div class="text-green-300">"SELECT * FROM employees WHERE name = ?"</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">PreparedStatement</div> pstmt = conn.prepareStatement(safeQuery)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setString(<div class="text-purple-400">1</div>, maliciousInput);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">ResultSet</div> rs = pstmt.executeQuery()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">boolean</div> found = <div class="text-blue-400">false</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">while</div> (rs.next()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;found = <div class="text-blue-400">true</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Found: "</div> + rs.getString(<div class="text-green-300">"name"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (!found) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ No employees found with malicious input (SQL injection prevented)"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Verify table still exists</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Statement</div> stmt = conn.createStatement();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ResultSet</div> rs = stmt.executeQuery(<div class="text-green-300">"SELECT COUNT(*) FROM employees"</div>)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (rs.next()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Table still exists with "</div> + rs.getInt(<div class="text-purple-400">1</div>) + <div class="text-green-300">" employees"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
    exercise: `
Question 1: Create a PreparedStatement with placeholders and use setter methods to bind parameters.
Question 2: Use PreparedStatement to execute a parameterized SELECT query and process the ResultSet.
Question 3: Implement batch processing with PreparedStatement by adding multiple parameter sets and executing them together.
Question 4: Create a CallableStatement to call a stored procedure with IN and OUT parameters.
Question 5: Demonstrate SQL injection prevention by comparing Statement vs PreparedStatement with malicious input.
`
  }
};