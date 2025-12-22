import { LessonContent } from '../../types/LessonTypes';

export const lesson_6_4: LessonContent = {
  title: 'Custom Exceptions',
  type: 'coding',
  duration: '20 min',
  module: 'Exception Handling and Debugging',
  content: {
    overview: 'Learn to create custom exception classes for better error handling and application-specific error scenarios. This lesson covers exception hierarchy design, custom exception implementation, and best practices for exception design.',
    objectives: [
      'Design effective custom exception hierarchies',
      'Implement custom exception classes with appropriate constructors',
      'Practice meaningful exception naming and documentation',
      'Understand when to use checked vs unchecked custom exceptions',
      'Implement exception chaining with custom exceptions',
      'Apply best practices for custom exception design'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Custom Exceptions
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Application-specific error handling with custom exceptions</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Custom Exceptions
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Custom exceptions allow you to create application-specific error conditions that are more meaningful 
            than generic exceptions. They provide better context about what went wrong and help in creating 
            more maintainable and readable code.
          </p>
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">💡 Key Concept</h4>
            <p class="text-purple-700">Custom exceptions should be specific, meaningful, and part of a well-designed hierarchy that reflects your application's error conditions.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Custom Exception Design Principles
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Effective custom exception design follows several key principles:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Naming Conventions</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• End exception names with "Exception"</li>
                  <li>• Use descriptive, specific names</li>
                  <li>• Follow camelCase naming</li>
                  <li>• Reflect the error condition clearly</li>
                </ul>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Hierarchy Design</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Group related exceptions under base classes</li>
                  <li>• Create meaningful intermediate classes</li>
                  <li>• Balance specificity with maintainability</li>
                  <li>• Consider checked vs unchecked appropriately</li>
                </ul>
              </div>
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-blue-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Principle</th>
                    <th class="text-left p-3 font-bold border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Specificity</td>
                    <td class="p-3">Exceptions should represent specific error conditions</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Consistency</td>
                    <td class="p-3">Follow consistent naming and design patterns</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Documentation</td>
                    <td class="p-3">Provide clear documentation for each exception</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Reusability</td>
                    <td class="p-3">Design exceptions for reuse across the application</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Checked vs Unchecked Custom Exceptions
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Choosing between checked and unchecked custom exceptions:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Checked Exceptions</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Extend Exception (not RuntimeException)</li>
                  <li>• Must be declared or caught</li>
                  <li>• Represent recoverable conditions</li>
                  <li>• Used for expected error conditions</li>
                  <li>• Example: InvalidUserInputException</li>
                </ul>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Unchecked Exceptions</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Extend RuntimeException</li>
                  <li>• Not required to be declared or caught</li>
                  <li>• Represent programming errors</li>
                  <li>• Used for unexpected conditions</li>
                  <li>• Example: InvalidStateException</li>
                </ul>
              </div>
            </div>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Checked exception<br/>
              public class InsufficientFundsException extends Exception {<br/>
              &nbsp;&nbsp;public InsufficientFundsException(String message) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;super(message);<br/>
              &nbsp;&nbsp;}<br/>
              }<br/>
              <br/>
              // Unchecked exception<br/>
              public class InvalidAccountException extends RuntimeException {<br/>
              &nbsp;&nbsp;public InvalidAccountException(String message) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;super(message);<br/>
              &nbsp;&nbsp;}<br/>
              }
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Exception Hierarchy Design
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Designing a well-structured exception hierarchy:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Base application exception<br/>
              public class BankingException extends Exception {<br/>
              &nbsp;&nbsp;public BankingException(String message) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;super(message);<br/>
              &nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;<br/>
              &nbsp;&nbsp;public BankingException(String message, Throwable cause) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;super(message, cause);<br/>
              &nbsp;&nbsp;}<br/>
              }<br/>
              <br/>
              // Specific exceptions extending base<br/>
              public class InsufficientFundsException extends BankingException {<br/>
              &nbsp;&nbsp;private final double balance;<br/>
              &nbsp;&nbsp;private final double amount;<br/>
              &nbsp;&nbsp;<br/>
              &nbsp;&nbsp;public InsufficientFundsException(double balance, double amount) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;super("Insufficient funds: balance=" + balance + ", amount=" + amount);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;this.balance = balance;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;this.amount = amount;<br/>
              &nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;<br/>
              &nbsp;&nbsp;// Getters for additional information<br/>
              &nbsp;&nbsp;public double getBalance() { return balance; }<br/>
              &nbsp;&nbsp;public double getAmount() { return amount; }<br/>
              }
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Benefits of Hierarchy</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Enables catching groups of related exceptions</li>
                  <li>• Provides clear error categorization</li>
                  <li>• Supports different handling strategies</li>
                  <li>• Improves code maintainability</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Design Considerations</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Keep hierarchy shallow but meaningful</li>
                  <li>• Avoid overly granular exceptions</li>
                  <li>• Consider future extensibility</li>
                  <li>• Document exception relationships</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Exception Chaining with Custom Exceptions
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Preserving exception context with chaining:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              public class DataProcessingException extends Exception {<br/>
              &nbsp;&nbsp;public DataProcessingException(String message, Throwable cause) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;super(message, cause);<br/>
              &nbsp;&nbsp;}<br/>
              }<br/>
              <br/>
              // Usage in code<br/>
              try {<br/>
              &nbsp;&nbsp;// Database operation that might fail<br/>
              &nbsp;&nbsp;database.save(data);<br/>
              } catch (SQLException e) {<br/>
              &nbsp;&nbsp;// Chain to more meaningful application exception<br/>
              &nbsp;&nbsp;throw new DataProcessingException("Failed to save data", e);<br/>
              }
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Benefits</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Preserves original error information</li>
                  <li>• Provides application context</li>
                  <li>• Enables better debugging</li>
                  <li>• Maintains exception hierarchy</li>
                </ul>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Implementation</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Use constructor with cause parameter</li>
                  <li>• Access chained exceptions with getCause()</li>
                  <li>• Print full chain with printStackTrace()</li>
                  <li>• Handle chained exceptions appropriately</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Custom Exceptions</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Create specific, meaningful exception names</li>
                <li>• Provide constructors with message and cause</li>
                <li>• Design shallow but meaningful hierarchies</li>
                <li>• Include relevant context information</li>
                <li>• Document exception behavior clearly</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't create exceptions for normal program flow</li>
                <li>• Don't make exception hierarchies too deep</li>
                <li>• Don't ignore the cause in exception chaining</li>
                <li>• Don't use exceptions for return values</li>
                <li>• Don't create overly granular exceptions</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * CustomExceptionsDemo.java
 * 
 * This comprehensive example demonstrates custom exception creation and usage:
 * - Custom exception hierarchy design
 * - Checked vs unchecked custom exceptions
 * - Exception chaining with custom exceptions
 * - Best practices for custom exception implementation
 * - Application-specific error handling
 * 
 * Run this program to see custom exception techniques in practice.
 */

// Base custom exception for our banking application
class BankingException extends Exception {
    public BankingException(String message) {
        super(message);
    }
    
    public BankingException(String message, Throwable cause) {
        super(message, cause);
    }
}

// Checked exceptions for recoverable conditions
class InsufficientFundsException extends BankingException {
    private final double balance;
    private final double amount;
    
    public InsufficientFundsException(double balance, double amount) {
        super("Insufficient funds: balance=" + balance + ", amount=" + amount);
        this.balance = balance;
        this.amount = amount;
    }
    
    public double getBalance() { return balance; }
    public double getAmount() { return amount; }
}

class InvalidAccountException extends BankingException {
    private final String accountId;
    
    public InvalidAccountException(String accountId) {
        super("Invalid account: " + accountId);
        this.accountId = accountId;
    }
    
    public String getAccountId() { return accountId; }
}

class AccountLockedException extends BankingException {
    private final String accountId;
    
    public AccountLockedException(String accountId) {
        super("Account is locked: " + accountId);
        this.accountId = accountId;
    }
    
    public String getAccountId() { return accountId; }
}

// Unchecked exceptions for programming errors
class InvalidTransactionException extends RuntimeException {
    public InvalidTransactionException(String message) {
        super(message);
    }
    
    public InvalidTransactionException(String message, Throwable cause) {
        super(message, cause);
    }
}

class BankingSystemException extends RuntimeException {
    public BankingSystemException(String message, Throwable cause) {
        super(message, cause);
    }
}

// Custom exception with additional data
class TransactionLimitExceededException extends BankingException {
    private final double limit;
    private final double amount;
    
    public TransactionLimitExceededException(double limit, double amount) {
        super("Transaction limit exceeded: limit=" + limit + ", amount=" + amount);
        this.limit = limit;
        this.amount = amount;
    }
    
    public double getLimit() { return limit; }
    public double getAmount() { return amount; }
}

// Banking service class that uses custom exceptions
class BankingService {
    private Map<String, Double> accounts = new HashMap<>();
    private Map<String, Boolean> accountLocks = new HashMap<>();
    
    public BankingService() {
        // Initialize some test accounts
        accounts.put("ACC001", 1000.0);
        accounts.put("ACC002", 500.0);
        accounts.put("ACC003", 2500.0);
        accountLocks.put("ACC001", false);
        accountLocks.put("ACC002", false);
        accountLocks.put("ACC003", true); // Locked account
    }
    
    public void transfer(String fromAccount, String toAccount, double amount) 
            throws BankingException {
        
        // Validate accounts
        if (!accounts.containsKey(fromAccount)) {
            throw new InvalidAccountException(fromAccount);
        }
        
        if (!accounts.containsKey(toAccount)) {
            throw new InvalidAccountException(toAccount);
        }
        
        // Check if accounts are locked
        if (accountLocks.get(fromAccount)) {
            throw new AccountLockedException(fromAccount);
        }
        
        if (accountLocks.get(toAccount)) {
            throw new AccountLockedException(toAccount);
        }
        
        // Check balance
        double balance = accounts.get(fromAccount);
        if (balance < amount) {
            throw new InsufficientFundsException(balance, amount);
        }
        
        // Check transaction limit (example: $1000 max)
        if (amount > 1000) {
            throw new TransactionLimitExceededException(1000, amount);
        }
        
        // Perform transfer
        try {
            accounts.put(fromAccount, balance - amount);
            accounts.put(toAccount, accounts.get(toAccount) + amount);
            System.out.println("   Transfer successful: " + amount + " from " + 
                             fromAccount + " to " + toAccount);
        } catch (Exception e) {
            // Chain any unexpected errors
            throw new BankingSystemException("Failed to complete transfer", e);
        }
    }
    
    public double getBalance(String accountId) throws BankingException {
        if (!accounts.containsKey(accountId)) {
            throw new InvalidAccountException(accountId);
        }
        return accounts.get(accountId);
    }
    
    public void validateTransaction(String accountId, double amount) {
        if (accountId == null || accountId.isEmpty()) {
            throw new InvalidTransactionException("Account ID cannot be null or empty");
        }
        
        if (amount <= 0) {
            throw new InvalidTransactionException("Transaction amount must be positive");
        }
    }
}

public class CustomExceptionsDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate custom exception hierarchy
        demonstrateExceptionHierarchy();
        
        // Demonstrate checked custom exceptions
        demonstrateCheckedExceptions();
        
        // Demonstrate unchecked custom exceptions
        demonstrateUncheckedExceptions();
        
        // Demonstrate exception chaining
        demonstrateExceptionChaining();
        
        // Demonstrate best practices
        demonstrateBestPractices();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║              CUSTOM EXCEPTIONS DEMO                          ║");
        System.out.println("║         Application-Specific Error Handling                  ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateExceptionHierarchy() {
        System.out.println("🔸 CUSTOM EXCEPTION HIERARCHY DEMONSTRATION");
        System.out.println("   ─────────────────────────────────────────");
        
        System.out.println("   BankingException (Base)");
        System.out.println("   ├── InsufficientFundsException (Checked)");
        System.out.println("   ├── InvalidAccountException (Checked)");
        System.out.println("   ├── AccountLockedException (Checked)");
        System.out.println("   └── TransactionLimitExceededException (Checked)");
        System.out.println("   ");
        System.out.println("   RuntimeException (Base for unchecked)");
        System.out.println("   ├── InvalidTransactionException (Unchecked)");
        System.out.println("   └── BankingSystemException (Unchecked)");
        
        System.out.println();
    }
    
    private static void demonstrateCheckedExceptions() {
        System.out.println("🔸 CHECKED CUSTOM EXCEPTIONS DEMONSTRATION");
        System.out.println("   ────────────────────────────────────────");
        
        BankingService bankingService = new BankingService();
        
        // Test insufficient funds
        try {
            System.out.println("   Attempting transfer with insufficient funds:");
            bankingService.transfer("ACC002", "ACC001", 1000); // ACC002 only has 500
        } catch (InsufficientFundsException e) {
            System.out.println("   Caught InsufficientFundsException: " + e.getMessage());
            System.out.println("   Balance: " + e.getBalance() + ", Amount: " + e.getAmount());
        } catch (BankingException e) {
            System.out.println("   Caught BankingException: " + e.getMessage());
        }
        
        // Test invalid account
        try {
            System.out.println("   Attempting transfer to invalid account:");
            bankingService.transfer("ACC001", "INVALID", 100);
        } catch (InvalidAccountException e) {
            System.out.println("   Caught InvalidAccountException: " + e.getMessage());
            System.out.println("   Invalid account ID: " + e.getAccountId());
        } catch (BankingException e) {
            System.out.println("   Caught BankingException: " + e.getMessage());
        }
        
        // Test locked account
        try {
            System.out.println("   Attempting transfer from locked account:");
            bankingService.transfer("ACC003", "ACC001", 100);
        } catch (AccountLockedException e) {
            System.out.println("   Caught AccountLockedException: " + e.getMessage());
            System.out.println("   Locked account ID: " + e.getAccountId());
        } catch (BankingException e) {
            System.out.println("   Caught BankingException: " + e.getMessage());
        }
        
        // Test transaction limit
        try {
            System.out.println("   Attempting transfer exceeding limit:");
            bankingService.transfer("ACC001", "ACC002", 1500); // Limit is 1000
        } catch (TransactionLimitExceededException e) {
            System.out.println("   Caught TransactionLimitExceededException: " + e.getMessage());
            System.out.println("   Limit: " + e.getLimit() + ", Amount: " + e.getAmount());
        } catch (BankingException e) {
            System.out.println("   Caught BankingException: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateUncheckedExceptions() {
        System.out.println("🔸 UNCHECKED CUSTOM EXCEPTIONS DEMONSTRATION");
        System.out.println("   ──────────────────────────────────────────");
        
        BankingService bankingService = new BankingService();
        
        // Test invalid transaction parameters
        try {
            System.out.println("   Attempting transaction with invalid parameters:");
            bankingService.validateTransaction(null, -50);
        } catch (InvalidTransactionException e) {
            System.out.println("   Caught InvalidTransactionException: " + e.getMessage());
        }
        
        // Test valid transaction
        try {
            System.out.println("   Validating correct transaction parameters:");
            bankingService.validateTransaction("ACC001", 100);
            System.out.println("   Transaction validation passed");
        } catch (InvalidTransactionException e) {
            System.out.println("   Caught InvalidTransactionException: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateExceptionChaining() {
        System.out.println("🔸 EXCEPTION CHAINING DEMONSTRATION");
        System.out.println("   ─────────────────────────────────");
        
        try {
            // Simulate a system error that gets chained
            simulateSystemError();
        } catch (BankingSystemException e) {
            System.out.println("   Caught BankingSystemException: " + e.getMessage());
            System.out.println("   Original cause: " + e.getCause().getClass().getSimpleName() + 
                             " - " + e.getCause().getMessage());
            
            // Print full stack trace including chained exceptions
            System.out.println("   Full exception chain:");
            e.printStackTrace(System.out);
        }
        
        System.out.println();
    }
    
    private static void simulateSystemError() throws BankingSystemException {
        try {
            // Simulate a database error
            throw new RuntimeException("Database connection failed");
        } catch (RuntimeException e) {
            // Chain to our custom exception
            throw new BankingSystemException("System error during banking operation", e);
        }
    }
    
    private static void demonstrateBestPractices() {
        System.out.println("🔸 CUSTOM EXCEPTION BEST PRACTICES");
        System.out.println("   ─────────────────────────────────");
        
        BankingService bankingService = new BankingService();
        
        // Demonstrate proper exception handling with meaningful messages
        try {
            double balance = bankingService.getBalance("ACC001");
            System.out.println("   Account ACC001 balance: " + balance);
            
            // Perform a successful transfer
            bankingService.transfer("ACC001", "ACC002", 200);
            
            // Check new balances
            System.out.println("   New balance ACC001: " + bankingService.getBalance("ACC001"));
            System.out.println("   New balance ACC002: " + bankingService.getBalance("ACC002"));
            
        } catch (BankingException e) {
            System.out.println("   Banking operation failed: " + e.getMessage());
            
            // Log with context (in real application)
            System.out.println("   Logging error for debugging:");
            System.out.println("   Time: " + java.time.LocalDateTime.now());
            System.out.println("   Exception type: " + e.getClass().getSimpleName());
        }
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Custom exception hierarchy design                         ║");
        System.out.println("║  • Checked vs unchecked custom exceptions                    ║");
        System.out.println("║  • Exception chaining with custom exceptions                 ║");
        System.out.println("║  • Best practices for custom exception implementation         ║");
        System.out.println("║  • Application-specific error handling                       ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Create specific, meaningful exception names                ║");
        System.out.println("║  • Provide constructors with message and cause               ║");
        System.out.println("║  • Design shallow but meaningful hierarchies                 ║");
        System.out.println("║  • Include relevant context information                      ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
    exercise: `
1) Create a custom checked exception class that extends Exception and includes a constructor with message and cause.
2) Create a custom unchecked exception class that extends RuntimeException and includes additional context information.
3) Implement exception chaining by creating a custom exception that wraps an original SQLException.
`
  }
};