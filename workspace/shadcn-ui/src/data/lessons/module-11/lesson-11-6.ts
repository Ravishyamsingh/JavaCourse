import { LessonContent } from '../../types/LessonTypes';

export const lesson_11_6: LessonContent = {
  title: 'Transaction Management',
  type: 'lesson',
  duration: '45 min',
  module: 'Database Connectivity (JDBC)',
  content: {
    overview: 'Master database transaction management in JDBC. Learn ACID properties, transaction isolation levels, commit and rollback operations, savepoints, and distributed transactions for robust database applications.',
    objectives: [
      'Understand ACID properties and transaction concepts',
      'Master transaction control with commit and rollback',
      'Learn transaction isolation levels and their effects',
      'Implement savepoints for partial rollbacks',
      'Handle transaction exceptions and recovery',
      'Practice distributed transaction management'
    ],
    theory: `
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Transaction Management
        </h1>
        <p class="mt-3 text-indigo-100 text-lg">Ensuring data consistency and integrity through transaction control</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Transaction Fundamentals
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            A transaction is a logical unit of work that consists of one or more database operations. 
            Transactions ensure data consistency and integrity by following the ACID properties.
          </p>
          
          <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">
            <h4 class="font-bold text-indigo-800 mb-2">🎯 Transaction Definition</h4>
            <p class="text-indigo-700">A transaction is an atomic unit of database operations that either completes entirely or fails completely, maintaining database consistency.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">ACID Properties</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border-l-4 border-red-400">
                  <h5 class="font-bold text-red-700">Atomicity</h5>
                  <p class="text-gray-600 text-sm">All operations succeed or all fail</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-bold text-blue-700">Consistency</h5>
                  <p class="text-gray-600 text-sm">Database remains in valid state</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-green-400">
                  <h5 class="font-bold text-green-700">Isolation</h5>
                  <p class="text-gray-600 text-sm">Concurrent transactions don't interfere</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                  <h5 class="font-bold text-purple-700">Durability</h5>
                  <p class="text-gray-600 text-sm">Committed changes persist</p>
                </div>
              </div>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Transaction States</h4>
              <div class="space-y-2">
                <div class="bg-white p-2 rounded border-l-4 border-yellow-400">
                  <strong>Active:</strong> Transaction is executing
                </div>
                <div class="bg-white p-2 rounded border-l-4 border-blue-400">
                  <strong>Partially Committed:</strong> Final statement executed
                </div>
                <div class="bg-white p-2 rounded border-l-4 border-green-400">
                  <strong>Committed:</strong> Transaction completed successfully
                </div>
                <div class="bg-white p-2 rounded border-l-4 border-red-400">
                  <strong>Failed:</strong> Transaction cannot proceed
                </div>
                <div class="bg-white p-2 rounded border-l-4 border-gray-400">
                  <strong>Aborted:</strong> Transaction rolled back
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            JDBC Transaction Control
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">JDBC provides methods to control transaction boundaries and behavior.</p>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Auto-commit Mode</h4>
              <p class="text-gray-700 mb-3">By default, JDBC connections operate in auto-commit mode where each statement is automatically committed.</p>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                <div class="text-yellow-400">// Disable auto-commit for manual transaction control</div>
                conn.setAutoCommit(<div class="text-blue-400">false</div>);<br/><br/>
                <div class="text-yellow-400">// Check current auto-commit status</div>
                <div class="text-blue-400">boolean</div> autoCommit = conn.getAutoCommit();
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Transaction Methods</h4>
                <div class="space-y-2">
                  <div class="bg-white p-2 rounded border-l-4 border-green-400">
                    <code class="text-green-700 font-bold">setAutoCommit(false)</code>
                    <p class="text-gray-600 text-sm">Start manual transaction</p>
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-blue-400">
                    <code class="text-blue-700 font-bold">commit()</code>
                    <p class="text-gray-600 text-sm">Commit transaction</p>
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-red-400">
                    <code class="text-red-700 font-bold">rollback()</code>
                    <p class="text-gray-600 text-sm">Rollback transaction</p>
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-purple-400">
                    <code class="text-purple-700 font-bold">setSavepoint()</code>
                    <p class="text-gray-600 text-sm">Create savepoint</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Transaction Pattern</h4>
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div class="text-blue-400">try</div> {<br/>
                  &nbsp;&nbsp;conn.setAutoCommit(<div class="text-blue-400">false</div>);<br/>
                  &nbsp;&nbsp;<div class="text-yellow-400">// Execute operations</div><br/>
                  &nbsp;&nbsp;conn.commit();<br/>
                  } <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
                  &nbsp;&nbsp;conn.rollback();<br/>
                  } <div class="text-blue-400">finally</div> {<br/>
                  &nbsp;&nbsp;conn.setAutoCommit(<div class="text-blue-400">true</div>);<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Transaction Isolation Levels
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Isolation levels control how transactions interact with each other and what phenomena they prevent.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Isolation Levels</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-red-400">
                    <h5 class="font-bold text-red-700">READ_UNCOMMITTED</h5>
                    <p class="text-gray-600 text-sm">Lowest isolation, allows dirty reads</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-orange-400">
                    <h5 class="font-bold text-orange-700">READ_COMMITTED</h5>
                    <p class="text-gray-600 text-sm">Prevents dirty reads</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-yellow-400">
                    <h5 class="font-bold text-yellow-700">REPEATABLE_READ</h5>
                    <p class="text-gray-600 text-sm">Prevents dirty and non-repeatable reads</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-green-400">
                    <h5 class="font-bold text-green-700">SERIALIZABLE</h5>
                    <p class="text-gray-600 text-sm">Highest isolation, prevents all phenomena</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-cyan-50 p-4 rounded-lg">
                <h4 class="font-bold text-cyan-800 mb-2">Read Phenomena</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-red-400">
                    <h5 class="font-bold text-red-700">Dirty Read</h5>
                    <p class="text-gray-600 text-sm">Reading uncommitted changes</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-orange-400">
                    <h5 class="font-bold text-orange-700">Non-repeatable Read</h5>
                    <p class="text-gray-600 text-sm">Different values on re-read</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-yellow-400">
                    <h5 class="font-bold text-yellow-700">Phantom Read</h5>
                    <p class="text-gray-600 text-sm">New rows appear in range queries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Savepoints
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Savepoints allow partial rollbacks within a transaction, providing fine-grained control over transaction recovery.</p>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Savepoint Operations</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <div class="bg-white p-2 rounded border-l-4 border-green-400">
                    <strong>Create:</strong> setSavepoint(name)
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-blue-400">
                    <strong>Rollback:</strong> rollback(savepoint)
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="bg-white p-2 rounded border-l-4 border-purple-400">
                    <strong>Release:</strong> releaseSavepoint(savepoint)
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-orange-400">
                    <strong>Check Support:</strong> supportsSavepoints()
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Exception Handling in Transactions
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Proper exception handling is crucial for maintaining data consistency in transactions.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Exception Types</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>SQLException:</strong> Database errors</li>
                  <li>• <strong>SQLTransactionRollbackException:</strong> Rollback required</li>
                  <li>• <strong>SQLTimeoutException:</strong> Operation timeout</li>
                  <li>• <strong>SQLRecoverableException:</strong> Recoverable errors</li>
                </ul>
              </div>
              
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Best Practices</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Always rollback on exceptions</li>
                  <li>• Use try-with-resources</li>
                  <li>• Log transaction failures</li>
                  <li>• Restore auto-commit mode</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// TransactionManagementDemo.java</div>
        <div class="text-blue-400">import</div> java.sql.*;<br/>
        <div class="text-blue-400">import</div> java.math.BigDecimal;<br/>
        <div class="text-blue-400">import</div> java.util.logging.Logger;<br/>
        <div class="text-blue-400">import</div> java.util.logging.Level;<br/><br/>

        <div class="text-blue-400">public class</div> <div class="text-yellow-400">TransactionManagementDemo</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> DB_URL = <div class="text-green-300">"jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1"</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> USER = <div class="text-green-300">"sa"</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">String</div> PASSWORD = <div class="text-green-300">""</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">Logger</div> logger = <div class="text-blue-400">Logger</div>.getLogger(<div class="text-yellow-400">TransactionManagementDemo</div>.<div class="text-blue-400">class</div>.getName());<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Connection</div> conn = <div class="text-blue-400">DriverManager</div>.getConnection(DB_URL, USER, PASSWORD)) {<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Setup database</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setupDatabase(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 1. Basic transaction management</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;basicTransactionDemo(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 2. Transaction rollback demo</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transactionRollbackDemo(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 3. Savepoint demo</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;savepointDemo(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 4. Bank transfer simulation</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bankTransferDemo(conn);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.log(<div class="text-blue-400">Level</div>.SEVERE, <div class="text-green-300">"Database error"</div>, e);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">setupDatabase</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> createTable = <div class="text-green-300">"""</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">CREATE TABLE accounts (</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">id INTEGER PRIMARY KEY,</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">account_number VARCHAR(20) UNIQUE,</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">balance DECIMAL(15,2) NOT NULL,</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">account_type VARCHAR(20)</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">)</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"""</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">Statement</div> stmt = conn.createStatement()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stmt.executeUpdate(createTable);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Database setup complete"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Insert sample accounts</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> insertSQL = <div class="text-green-300">"INSERT INTO accounts (id, account_number, balance, account_type) VALUES (?, ?, ?, ?)"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">PreparedStatement</div> pstmt = conn.prepareStatement(insertSQL)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Object</div>[][] accounts = {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<div class="text-purple-400">1</div>, <div class="text-green-300">"ACC001"</div>, <div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"10000.00"</div>), <div class="text-green-300">"CHECKING"</div>},<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<div class="text-purple-400">2</div>, <div class="text-green-300">"ACC002"</div>, <div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"5000.00"</div>), <div class="text-green-300">"SAVINGS"</div>}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">Object</div>[] account : accounts) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setInt(<div class="text-purple-400">1</div>, (<div class="text-blue-400">Integer</div>) account[<div class="text-purple-400">0</div>]);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setString(<div class="text-purple-400">2</div>, (<div class="text-blue-400">String</div>) account[<div class="text-purple-400">1</div>]);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setBigDecimal(<div class="text-purple-400">3</div>, (<div class="text-blue-400">BigDecimal</div>) account[<div class="text-purple-400">2</div>]);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setString(<div class="text-purple-400">4</div>, (<div class="text-blue-400">String</div>) account[<div class="text-purple-400">3</div>]);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.executeUpdate();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">basicTransactionDemo</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"=== Basic Transaction Demo ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.setAutoCommit(<div class="text-blue-400">false</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> updateSQL = <div class="text-green-300">"UPDATE accounts SET balance = balance + ? WHERE id = ?"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">PreparedStatement</div> pstmt = conn.prepareStatement(updateSQL)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setBigDecimal(<div class="text-purple-400">1</div>, <div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"1000.00"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setInt(<div class="text-purple-400">2</div>, <div class="text-purple-400">1</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.executeUpdate();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.commit();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Transaction committed successfully"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.rollback();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✗ Transaction rolled back: "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">finally</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.setAutoCommit(<div class="text-blue-400">true</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">transactionRollbackDemo</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Transaction Rollback Demo ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.setAutoCommit(<div class="text-blue-400">false</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> invalidSQL = <div class="text-green-300">"UPDATE accounts SET balance = balance - ? WHERE id = ? AND balance >= ?"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">PreparedStatement</div> pstmt = conn.prepareStatement(invalidSQL)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setBigDecimal(<div class="text-purple-400">1</div>, <div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"50000.00"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setInt(<div class="text-purple-400">2</div>, <div class="text-purple-400">1</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setBigDecimal(<div class="text-purple-400">3</div>, <div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"50000.00"</div>));<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> rowsUpdated = pstmt.executeUpdate();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (rowsUpdated == <div class="text-purple-400">0</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throw new</div> <div class="text-yellow-400">SQLException</div>(<div class="text-green-300">"Insufficient funds"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.commit();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.rollback();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Transaction rolled back: "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">finally</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.setAutoCommit(<div class="text-blue-400">true</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">savepointDemo</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Savepoint Demo ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.setAutoCommit(<div class="text-blue-400">false</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Savepoint</div> savepoint1 = conn.setSavepoint(<div class="text-green-300">"savepoint1"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Savepoint created"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> updateSQL = <div class="text-green-300">"UPDATE accounts SET balance = balance + ? WHERE id = ?"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">PreparedStatement</div> pstmt = conn.prepareStatement(updateSQL)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setBigDecimal(<div class="text-purple-400">1</div>, <div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"500.00"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setInt(<div class="text-purple-400">2</div>, <div class="text-purple-400">1</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.executeUpdate();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.rollback(savepoint1);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Rolled back to savepoint"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.commit();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.rollback();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Transaction rolled back: "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">finally</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.setAutoCommit(<div class="text-blue-400">true</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">bankTransferDemo</div>(<div class="text-blue-400">Connection</div> conn) <div class="text-blue-400">throws</div> <div class="text-blue-400">SQLException</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\\n=== Bank Transfer Demo ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">BigDecimal</div> transferAmount = <div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"2000.00"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> fromAccount = <div class="text-purple-400">1</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> toAccount = <div class="text-purple-400">2</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.setAutoCommit(<div class="text-blue-400">false</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Debit source account</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> debitSQL = <div class="text-green-300">"UPDATE accounts SET balance = balance - ? WHERE id = ? AND balance >= ?"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">PreparedStatement</div> pstmt = conn.prepareStatement(debitSQL)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setBigDecimal(<div class="text-purple-400">1</div>, transferAmount);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setInt(<div class="text-purple-400">2</div>, fromAccount);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setBigDecimal(<div class="text-purple-400">3</div>, transferAmount);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> rowsUpdated = pstmt.executeUpdate();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (rowsUpdated == <div class="text-purple-400">0</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throw new</div> <div class="text-yellow-400">SQLException</div>(<div class="text-green-300">"Insufficient funds"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Credit destination account</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> creditSQL = <div class="text-green-300">"UPDATE accounts SET balance = balance + ? WHERE id = ?"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> (<div class="text-blue-400">PreparedStatement</div> pstmt = conn.prepareStatement(creditSQL)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setBigDecimal(<div class="text-purple-400">1</div>, transferAmount);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.setInt(<div class="text-purple-400">2</div>, toAccount);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pstmt.executeUpdate();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.commit();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✓ Transfer completed successfully"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.rollback();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"✗ Transfer failed: "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">finally</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.setAutoCommit(<div class="text-blue-400">true</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
    exercise: `
Question 1: Disable auto-commit mode and manually commit a transaction after executing multiple SQL statements.
Question 2: Use rollback() to undo changes when an exception occurs during a transaction.
Question 3: Create a savepoint and rollback to it without affecting the entire transaction.
Question 4: Set the transaction isolation level to prevent dirty reads.
Question 5: Handle SQLException in a transaction and ensure proper rollback and resource cleanup.
`
  }
};