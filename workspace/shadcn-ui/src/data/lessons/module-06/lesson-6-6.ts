import { LessonContent } from '../../types/LessonTypes';

export const lesson_6_6: LessonContent = {
  title: 'Logging and Error Handling',
  type: 'coding',
  duration: '35 min',
  module: 'Exception Handling and Debugging',
  content: {
    overview: 'Learn to implement comprehensive logging strategies and advanced error handling techniques to build robust, maintainable Java applications.',
    objectives: [
      'Understand logging frameworks and their benefits',
      'Implement structured logging with different levels',
      'Configure logging for different environments',
      'Design effective error handling strategies',
      'Create custom logging utilities and formatters',
      'Monitor application health through logs',
      'Implement log analysis and alerting systems'
    ],
    theory: '<div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Logging and Error Handling' +
      '</h1>' +
      '<p class="mt-3 text-green-100 text-lg">Build robust applications with comprehensive logging</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Logging Frameworks' +
      '</h2>' +
      '<p class="text-gray-700 mb-4 leading-relaxed text-lg">' +
      'Logging frameworks provide structured, configurable, and efficient ways to record application events, ' +
      'errors, and diagnostic information for debugging and monitoring purposes.' +
      '</p>' +
      '<div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">' +
      '<h4 class="font-bold text-green-800 mb-2">📊 Popular Java Logging Frameworks</h4>' +
      '<ul class="text-green-700 space-y-1">' +
      '<li>• <strong>SLF4J:</strong> Simple Logging Facade for Java (abstraction layer)</li>' +
      '<li>• <strong>Logback:</strong> Native SLF4J implementation with advanced features</li>' +
      '<li>• <strong>Log4j2:</strong> High-performance logging with async capabilities</li>' +
      '<li>• <strong>Java Util Logging:</strong> Built-in JDK logging (basic features)</li>' +
      '</ul>' +
      '</div>' +
      '<div class="grid md:grid-cols-2 gap-6">' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">🎯 Log Levels</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• <strong>ERROR:</strong> Application errors</li>' +
      '<li>• <strong>WARN:</strong> Potential problems</li>' +
      '<li>• <strong>INFO:</strong> General information</li>' +
      '<li>• <strong>DEBUG:</strong> Detailed diagnostic info</li>' +
      '<li>• <strong>TRACE:</strong> Very detailed execution flow</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-purple-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-purple-800 mb-2">⚡ Best Practices</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Use appropriate log levels</li>' +
      '<li>• Include contextual information</li>' +
      '<li>• Avoid logging sensitive data</li>' +
      '<li>• Use structured logging formats</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Error Handling Strategies' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">Comprehensive Error Management</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-blue-800 mb-2">Error Categories</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• <strong>System Errors:</strong> Infrastructure failures</li>' +
      '<li>• <strong>Business Errors:</strong> Logic violations</li>' +
      '<li>• <strong>User Errors:</strong> Invalid input</li>' +
      '<li>• <strong>Integration Errors:</strong> External service failures</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-blue-800 mb-2">Handling Strategies</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• <strong>Fail Fast:</strong> Immediate error detection</li>' +
      '<li>• <strong>Graceful Degradation:</strong> Reduced functionality</li>' +
      '<li>• <strong>Retry Logic:</strong> Automatic recovery attempts</li>' +
      '<li>• <strong>Circuit Breaker:</strong> Prevent cascade failures</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '</div>',
    codeExample: '// Comprehensive Logging and Error Handling System\n\n' +
      'import java.util.logging.*;\n' +
      'import java.io.*;\n' +
      'import java.time.LocalDateTime;\n' +
      'import java.time.format.DateTimeFormatter;\n\n' +
      '// 1. Custom Logger Utility\n' +
      'public class ApplicationLogger {\n' +
      '    private static final Logger logger = Logger.getLogger(ApplicationLogger.class.getName());\n' +
      '    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");\n' +
      '    \n' +
      '    static {\n' +
      '        setupLogger();\n' +
      '    }\n' +
      '    \n' +
      '    private static void setupLogger() {\n' +
      '        try {\n' +
      '            // Remove default console handler\n' +
      '            Logger rootLogger = Logger.getLogger("");\n' +
      '            Handler[] handlers = rootLogger.getHandlers();\n' +
      '            for (Handler handler : handlers) {\n' +
      '                rootLogger.removeHandler(handler);\n' +
      '            }\n' +
      '            \n' +
      '            // Add custom console handler\n' +
      '            ConsoleHandler consoleHandler = new ConsoleHandler();\n' +
      '            consoleHandler.setFormatter(new CustomFormatter());\n' +
      '            consoleHandler.setLevel(Level.ALL);\n' +
      '            logger.addHandler(consoleHandler);\n' +
      '            \n' +
      '            // Add file handler\n' +
      '            FileHandler fileHandler = new FileHandler("application.log", true);\n' +
      '            fileHandler.setFormatter(new CustomFormatter());\n' +
      '            fileHandler.setLevel(Level.INFO);\n' +
      '            logger.addHandler(fileHandler);\n' +
      '            \n' +
      '            logger.setLevel(Level.ALL);\n' +
      '            \n' +
      '        } catch (IOException e) {\n' +
      '            System.err.println("Failed to setup logger: " + e.getMessage());\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    public static void info(String message) {\n' +
      '        logger.info(formatMessage("INFO", message));\n' +
      '    }\n' +
      '    \n' +
      '    public static void debug(String message) {\n' +
      '        logger.fine(formatMessage("DEBUG", message));\n' +
      '    }\n' +
      '    \n' +
      '    public static void warn(String message) {\n' +
      '        logger.warning(formatMessage("WARN", message));\n' +
      '    }\n' +
      '    \n' +
      '    public static void error(String message, Throwable throwable) {\n' +
      '        logger.severe(formatMessage("ERROR", message));\n' +
      '        if (throwable != null) {\n' +
      '            StringWriter sw = new StringWriter();\n' +
      '            PrintWriter pw = new PrintWriter(sw);\n' +
      '            throwable.printStackTrace(pw);\n' +
      '            logger.severe("Stack trace: " + sw.toString());\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    private static String formatMessage(String level, String message) {\n' +
      '        return String.format("[%s] [%s] [%s] %s", \n' +
      '            formatter.format(LocalDateTime.now()),\n' +
      '            Thread.currentThread().getName(),\n' +
      '            level,\n' +
      '            message);\n' +
      '    }\n' +
      '}\n\n' +
      '// 2. Custom Formatter\n' +
      'class CustomFormatter extends Formatter {\n' +
      '    @Override\n' +
      '    public String format(LogRecord record) {\n' +
      '        return record.getMessage() + "\\n";\n' +
      '    }\n' +
      '}\n\n' +
      '// 3. Error Handling Framework\n' +
      'public class ErrorHandler {\n' +
      '    \n' +
      '    public static class ApplicationException extends Exception {\n' +
      '        private final String errorCode;\n' +
      '        private final String userMessage;\n' +
      '        \n' +
      '        public ApplicationException(String errorCode, String message, String userMessage) {\n' +
      '            super(message);\n' +
      '            this.errorCode = errorCode;\n' +
      '            this.userMessage = userMessage;\n' +
      '        }\n' +
      '        \n' +
      '        public ApplicationException(String errorCode, String message, String userMessage, Throwable cause) {\n' +
      '            super(message, cause);\n' +
      '            this.errorCode = errorCode;\n' +
      '            this.userMessage = userMessage;\n' +
      '        }\n' +
      '        \n' +
      '        public String getErrorCode() { return errorCode; }\n' +
      '        public String getUserMessage() { return userMessage; }\n' +
      '    }\n' +
      '    \n' +
      '    public static void handleError(String context, Exception e) {\n' +
      '        String errorId = generateErrorId();\n' +
      '        \n' +
      '        ApplicationLogger.error(\n' +
      '            String.format("Error ID: %s, Context: %s, Message: %s", \n' +
      '                errorId, context, e.getMessage()), e);\n' +
      '        \n' +
      '        // In a real application, you might:\n' +
      '        // - Send alerts to monitoring systems\n' +
      '        // - Store error details in database\n' +
      '        // - Notify administrators\n' +
      '        \n' +
      '        if (e instanceof ApplicationException) {\n' +
      '            ApplicationException appEx = (ApplicationException) e;\n' +
      '            System.out.println("User Message: " + appEx.getUserMessage());\n' +
      '            System.out.println("Error Code: " + appEx.getErrorCode());\n' +
      '            System.out.println("Reference ID: " + errorId);\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    private static String generateErrorId() {\n' +
      '        return "ERR-" + System.currentTimeMillis() + "-" + \n' +
      '               Thread.currentThread().getId();\n' +
      '    }\n' +
      '}\n\n' +
      '// 4. Business Logic with Comprehensive Error Handling\n' +
      'public class BankingService {\n' +
      '    \n' +
      '    public void transferMoney(String fromAccount, String toAccount, double amount) {\n' +
      '        String context = String.format("Transfer: %s -> %s, Amount: %.2f", \n' +
      '            fromAccount, toAccount, amount);\n' +
      '        \n' +
      '        ApplicationLogger.info("Starting money transfer: " + context);\n' +
      '        \n' +
      '        try {\n' +
      '            // Validate inputs\n' +
      '            validateTransferRequest(fromAccount, toAccount, amount);\n' +
      '            \n' +
      '            // Check account balance\n' +
      '            double balance = getAccountBalance(fromAccount);\n' +
      '            if (balance < amount) {\n' +
      '                throw new ErrorHandler.ApplicationException(\n' +
      '                    "INSUFFICIENT_FUNDS",\n' +
      '                    "Account " + fromAccount + " has insufficient funds. Balance: " + balance + ", Required: " + amount,\n' +
      '                    "Insufficient funds for this transaction. Please check your account balance."\n' +
      '                );\n' +
      '            }\n' +
      '            \n' +
      '            // Perform transfer\n' +
      '            debitAccount(fromAccount, amount);\n' +
      '            creditAccount(toAccount, amount);\n' +
      '            \n' +
      '            ApplicationLogger.info("Transfer completed successfully: " + context);\n' +
      '            \n' +
      '        } catch (ErrorHandler.ApplicationException e) {\n' +
      '            ErrorHandler.handleError(context, e);\n' +
      '            throw e; // Re-throw to caller\n' +
      '        } catch (Exception e) {\n' +
      '            ErrorHandler.ApplicationException appEx = new ErrorHandler.ApplicationException(\n' +
      '                "SYSTEM_ERROR",\n' +
      '                "Unexpected error during money transfer: " + e.getMessage(),\n' +
      '                "A system error occurred. Please try again later or contact support.",\n' +
      '                e\n' +
      '            );\n' +
      '            ErrorHandler.handleError(context, appEx);\n' +
      '            throw appEx;\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    private void validateTransferRequest(String fromAccount, String toAccount, double amount) \n' +
      '            throws ErrorHandler.ApplicationException {\n' +
      '        if (fromAccount == null || fromAccount.trim().isEmpty()) {\n' +
      '            throw new ErrorHandler.ApplicationException(\n' +
      '                "INVALID_FROM_ACCOUNT",\n' +
      '                "From account is null or empty",\n' +
      '                "Please provide a valid source account number."\n' +
      '            );\n' +
      '        }\n' +
      '        \n' +
      '        if (toAccount == null || toAccount.trim().isEmpty()) {\n' +
      '            throw new ErrorHandler.ApplicationException(\n' +
      '                "INVALID_TO_ACCOUNT",\n' +
      '                "To account is null or empty",\n' +
      '                "Please provide a valid destination account number."\n' +
      '            );\n' +
      '        }\n' +
      '        \n' +
      '        if (amount <= 0) {\n' +
      '            throw new ErrorHandler.ApplicationException(\n' +
      '                "INVALID_AMOUNT",\n' +
      '                "Transfer amount must be positive: " + amount,\n' +
      '                "Please enter a valid transfer amount greater than zero."\n' +
      '            );\n' +
      '        }\n' +
      '        \n' +
      '        if (fromAccount.equals(toAccount)) {\n' +
      '            throw new ErrorHandler.ApplicationException(\n' +
      '                "SAME_ACCOUNT_TRANSFER",\n' +
      '                "Cannot transfer to the same account: " + fromAccount,\n' +
      '                "Source and destination accounts cannot be the same."\n' +
      '            );\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    private double getAccountBalance(String account) throws Exception {\n' +
      '        // Simulate database call\n' +
      '        ApplicationLogger.debug("Fetching balance for account: " + account);\n' +
      '        \n' +
      '        // Simulate potential database error\n' +
      '        if (Math.random() < 0.1) { // 10% chance of error\n' +
      '            throw new Exception("Database connection timeout");\n' +
      '        }\n' +
      '        \n' +
      '        // Return mock balance\n' +
      '        return 1000.0 + (Math.random() * 5000.0);\n' +
      '    }\n' +
      '    \n' +
      '    private void debitAccount(String account, double amount) throws Exception {\n' +
      '        ApplicationLogger.debug(String.format("Debiting account %s with amount %.2f", account, amount));\n' +
      '        // Simulate debit operation\n' +
      '    }\n' +
      '    \n' +
      '    private void creditAccount(String account, double amount) throws Exception {\n' +
      '        ApplicationLogger.debug(String.format("Crediting account %s with amount %.2f", account, amount));\n' +
      '        // Simulate credit operation\n' +
      '    }\n' +
      '}\n\n' +
      '// 5. Demonstration\n' +
      'public class LoggingDemo {\n' +
      '    public static void main(String[] args) {\n' +
      '        BankingService service = new BankingService();\n' +
      '        \n' +
      '        // Test successful transfer\n' +
      '        try {\n' +
      '            service.transferMoney("ACC001", "ACC002", 500.0);\n' +
      '        } catch (Exception e) {\n' +
      '            System.out.println("Transfer failed: " + e.getMessage());\n' +
      '        }\n' +
      '        \n' +
      '        // Test validation errors\n' +
      '        try {\n' +
      '            service.transferMoney("", "ACC002", 100.0);\n' +
      '        } catch (Exception e) {\n' +
      '            System.out.println("Validation failed: " + e.getMessage());\n' +
      '        }\n' +
      '        \n' +
      '        // Test business logic error\n' +
      '        try {\n' +
      '            service.transferMoney("ACC001", "ACC002", 10000.0); // Large amount\n' +
      '        } catch (Exception e) {\n' +
      '            System.out.println("Business rule violation: " + e.getMessage());\n' +
      '        }\n' +
      '    }\n' +
      '}',
    exercise: 'Build a comprehensive logging and error handling system for a library management application.\n\n' +
      '**Requirements:**\n' +
      '1. **Logging Framework:**\n' +
      '   - Implement multi-level logging (ERROR, WARN, INFO, DEBUG)\n' +
      '   - Create custom formatters for different output formats\n' +
      '   - Configure file and console logging with rotation\n' +
      '   - Add contextual information (user ID, session, timestamp)\n\n' +
      '2. **Error Handling System:**\n' +
      '   - Create custom exception hierarchy for different error types\n' +
      '   - Implement error categorization and severity levels\n' +
      '   - Add error recovery and retry mechanisms\n' +
      '   - Include user-friendly error messages\n\n' +
      '3. **Library Operations:**\n' +
      '   - Book checkout/return with comprehensive logging\n' +
      '   - User registration with validation and error handling\n' +
      '   - Fine calculation with business rule validation\n' +
      '   - Inventory management with audit trails\n\n' +
      '4. **Monitoring and Alerting:**\n' +
      '   - Error rate tracking and reporting\n' +
      '   - Performance metrics logging\n' +
      '   - Critical error alerting simulation\n' +
      '   - Log analysis and reporting tools\n\n' +
      '**Learning Objectives:**\n' +
      '- Master logging framework configuration and usage\n' +
      '- Design robust error handling strategies\n' +
      '- Implement monitoring and alerting systems\n' +
      '- Practice debugging through comprehensive logging'
  }
};