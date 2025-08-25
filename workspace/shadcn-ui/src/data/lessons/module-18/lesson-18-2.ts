import { LessonContent } from '../../types/LessonTypes';

export const lesson_18_2: LessonContent = {
  title: 'Documentation and JavaDoc',
  type: 'lesson',
  duration: '75 min',
  module: 'Advanced Topics and Best Practices',
  content: {
    overview: 'Learn the importance of documentation in software development and master JavaDoc for creating comprehensive API documentation. Understand different types of documentation and best practices for maintaining up-to-date documentation.',
    objectives: [
      'Understand the importance of software documentation',
      'Master JavaDoc syntax and best practices',
      'Create comprehensive API documentation',
      'Generate documentation with Maven and Gradle',
      'Maintain documentation as code practices',
      'Document architecture and design decisions',
      'Create user guides and technical documentation'
    ],
    theory: '<div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Documentation and JavaDoc' +
      '</h1>' +
      '<p class="mt-3 text-green-100 text-lg">Creating comprehensive documentation for Java applications</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Importance of Documentation' +
      '</h2>' +
      '<p class="text-gray-700 mb-4 leading-relaxed text-lg">' +
      'Documentation is a critical aspect of software development that ensures maintainability, ' +
      'usability, and knowledge transfer. Well-documented code is easier to understand, maintain, ' +
      'and extend by both current and future team members.' +
      '</p>' +
      '<div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">' +
      '<h4 class="font-bold text-green-800 mb-2">🎯 Benefits of Good Documentation</h4>' +
      '<ul class="text-green-700 space-y-1">' +
      '<li>• <strong>Knowledge Transfer:</strong> Helps new team members get up to speed quickly</li>' +
      '<li>• <strong>Maintainability:</strong> Makes code easier to understand and modify</li>' +
      '<li>• <strong>Collaboration:</strong> Facilitates effective team communication</li>' +
      '<li>• <strong>API Usability:</strong> Enables developers to use APIs effectively</li>' +
      '<li>• <strong>Compliance:</strong> Meets regulatory and organizational requirements</li>' +
      '</ul>' +
      '</div>' +
      '<div class="grid md:grid-cols-2 gap-6">' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">✅ Documentation Types</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Code Comments and JavaDoc</li>' +
      '<li>• API Documentation</li>' +
      '<li>• Architecture Documentation</li>' +
      '<li>• User Guides and Tutorials</li>' +
      '<li>• Release Notes</li>' +
      '<li>• Design Decisions (ADR)</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-red-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-red-800 mb-2">⚠️ Common Documentation Issues</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Outdated or inaccurate information</li>' +
      '<li>• Incomplete or missing documentation</li>' +
      '<li>• Poor organization and structure</li>' +
      '<li>• Inconsistent style and terminology</li>' +
      '<li>• Lack of examples and use cases</li>' +
      '<li>• Documentation debt accumulation</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'JavaDoc Fundamentals' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-teal-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-teal-800 mb-2">JavaDoc Syntax and Tags</h4>' +
      '<p class="text-teal-700 mb-3">JavaDoc uses special comments to generate documentation from source code:</p>' +
      '<div class="bg-white p-4 rounded border">' +
      '<h5 class="font-bold text-teal-800 mb-2">Common JavaDoc Tags</h5>' +
      '<div class="grid md:grid-cols-2 gap-4 text-sm">' +
      '<div>' +
      '<strong>@param</strong>' +
      '<p class="text-gray-600">Document method parameters</p>' +
      '</div>' +
      '<div>' +
      '<strong>@return</strong>' +
      '<p class="text-gray-600">Document return values</p>' +
      '</div>' +
      '<div>' +
      '<strong>@throws</strong>' +
      '<p class="text-gray-600">Document exceptions</p>' +
      '</div>' +
      '<div>' +
      '<strong>@see</strong>' +
      '<p class="text-gray-600">Create cross-references</p>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">Documentation Quality</h4>' +
      '<div class="overflow-x-auto">' +
      '<table class="min-w-full bg-white rounded border">' +
      '<thead>' +
      '<tr class="bg-gray-100">' +
      '<th class="py-2 px-4 text-left">Element</th>' +
      '<th class="py-2 px-4 text-left">Documentation Requirement</th>' +
      '<th class="py-2 px-4 text-left">Example</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Classes</td>' +
      '<td class="py-2 px-4">Purpose and usage</td>' +
      '<td class="py-2 px-4">/** Service for user management */</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Methods</td>' +
      '<td class="py-2 px-4">Behavior, params, returns, exceptions</td>' +
      '<td class="py-2 px-4">/** Creates a new user account */</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Fields</td>' +
      '<td class="py-2 px-4">Purpose and constraints</td>' +
      '<td class="py-2 px-4">/** Maximum login attempts allowed */</td>' +
      '</tr>' +
      '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>' +
      'Documentation Generation Tools' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-purple-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-purple-800 mb-2">Documentation Generation Tools</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Maven Javadoc Plugin</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Generate documentation during build</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Integrated with build lifecycle</li>' +
      '<li>• Customizable output formats</li>' +
      '<li>• Aggregate reports for multi-module</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Gradle Javadoc Plugin</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Gradle-based documentation generation</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Task-based configuration</li>' +
      '<li>• Dependency-aware generation</li>' +
      '<li>• Flexible customization</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>' +
      'Documentation Best Practices' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-orange-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-orange-800 mb-2">Maintaining Documentation</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Keep It Current</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Update with code changes</li>' +
      '<li>• Review during code reviews</li>' +
      '<li>• Automate where possible</li>' +
      '<li>• Version with code</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Make It Accessible</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Publish to central location</li>' +
      '<li>• Provide search functionality</li>' +
      '<li>• Include examples and tutorials</li>' +
      '<li>• Gather user feedback</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '</div>',
    codeExample: '// Complete JavaDoc Implementation\n\n' +
      '// 1. Well-Documented Class Example\n' +
      '/**\n' +
      ' * UserService provides operations for managing user accounts in the system.\n' +
      ' * \n' +
      ' * This service handles user creation, authentication, profile management,\n' +
      ' * and account lifecycle operations. It integrates with the UserRepository\n' +
      ' * for data persistence and NotificationService for user communications.\n' +
      ' * \n' +
      ' * <p><strong>Usage Example:</strong></p>\n' +
      ' * <pre>\n' +
      ' * {@code\n' +
      ' * UserService userService = new UserService(userRepository, notificationService);\n' +
      ' * User newUser = userService.createUser("john@example.com", "John Doe");\n' +
      ' * }\n' +
      ' * </pre>\n' +
      ' * \n' +
      ' * @author Jane Developer\n' +
      ' * @version 1.2.0\n' +
      ' * @since 1.0.0\n' +
      ' * @see UserRepository\n' +
      ' * @see NotificationService\n' +
      ' */\n' +
      '@Service\n' +
      '@Transactional\n' +
      'public class UserService {\n' +
      '    \n' +
      '    private final UserRepository userRepository;\n' +
      '    private final NotificationService notificationService;\n' +
      '    private final PasswordEncoder passwordEncoder;\n' +
      '    \n' +
      '    private static final Logger logger = LoggerFactory.getLogger(UserService.class);\n' +
      '    \n' +
      '    /**\n' +
      '     * Constructs a UserService with required dependencies.\n' +
      '     * \n' +
      '     * @param userRepository the repository for user data persistence\n' +
      '     * @param notificationService the service for sending user notifications\n' +
      '     * @param passwordEncoder the encoder for securing user passwords\n' +
      '     * @throws IllegalArgumentException if any parameter is null\n' +
      '     */\n' +
      '    public UserService(UserRepository userRepository, \n' +
      '                      NotificationService notificationService,\n' +
      '                      PasswordEncoder passwordEncoder) {\n' +
      '        this.userRepository = Objects.requireNonNull(userRepository, "UserRepository cannot be null");\n' +
      '        this.notificationService = Objects.requireNonNull(notificationService, "NotificationService cannot be null");\n' +
      '        this.passwordEncoder = Objects.requireNonNull(passwordEncoder, "PasswordEncoder cannot be null");\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Creates a new user account with the specified email and name.\n' +
      '     * \n' +
      '     * This method validates the email format, checks for duplicates,\n' +
      '     * generates a secure password, and sends a welcome notification.\n' +
      '     * The user account is initially set to PENDING status until email\n' +
      '     * verification is completed.\n' +
      '     * \n' +
      '     * <p><strong>Business Rules:</strong></p>\n' +
      '     * <ul>\n' +
      '     *   <li>Email must be unique across all users</li>\n' +
      '     *   <li>Password is auto-generated and sent via email</li>\n' +
      '     *   <li>User must verify email within 24 hours</li>\n' +
      '     * </ul>\n' +
      '     * \n' +
      '     * @param email the user\'s email address (must be valid format)\n' +
      '     * @param name the user\'s full name\n' +
      '     * @param roles the initial roles to assign (optional)\n' +
      '     * @return the created User entity with generated ID\n' +
      '     * @throws DuplicateUserException if email already exists\n' +
      '     * @throws ValidationException if email format is invalid\n' +
      '     * @throws NotificationException if welcome email fails to send\n' +
      '     * \n' +
      '     * @see #validateEmail(String)\n' +
      '     * @see #generateSecurePassword()\n' +
      '     */\n' +
      '    public User createUser(String email, String name, Set<Role> roles) \n' +
      '            throws DuplicateUserException, ValidationException, NotificationException {\n' +
      '        \n' +
      '        logger.info("Creating user with email: {}", email);\n' +
      '        \n' +
      '        // Validate email format\n' +
      '        validateEmail(email);\n' +
      '        \n' +
      '        // Check for duplicate email\n' +
      '        if (userRepository.existsByEmail(email)) {\n' +
      '            throw new DuplicateUserException("User already exists with email: " + email);\n' +
      '        }\n' +
      '        \n' +
      '        // Create user entity\n' +
      '        User user = new User();\n' +
      '        user.setEmail(email);\n' +
      '        user.setName(name);\n' +
      '        user.setRoles(roles != null ? roles : Set.of(Role.USER));\n' +
      '        user.setPassword(passwordEncoder.encode(generateSecurePassword()));\n' +
      '        user.setStatus(UserStatus.PENDING);\n' +
      '        user.setCreatedAt(LocalDateTime.now());\n' +
      '        user.setLastLoginAt(null);\n' +
      '        \n' +
      '        // Save user\n' +
      '        User savedUser = userRepository.save(user);\n' +
      '        \n' +
      '        // Send welcome notification\n' +
      '        try {\n' +
      '            notificationService.sendWelcomeEmail(savedUser);\n' +
      '        } catch (Exception e) {\n' +
      '            logger.error("Failed to send welcome email to user: {}", savedUser.getEmail(), e);\n' +
      '            // Don\'t fail user creation for notification issues\n' +
      '        }\n' +
      '        \n' +
      '        logger.info("User created successfully with ID: {}", savedUser.getId());\n' +
      '        return savedUser;\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Authenticates a user with the provided credentials.\n' +
      '     * \n' +
      '     * This method verifies the user\'s email exists and the password matches\n' +
      '     * the stored hash. It updates the last login timestamp on successful\n' +
      '     * authentication and implements brute-force protection.\n' +
      '     * \n' +
      '     * <p><strong>Security Considerations:</strong></p>\n' +
      '     * <ul>\n' +
      '     *   <li>Timing-attack resistant password comparison</li>\n' +
      '     *   <li>Account lockout after 5 failed attempts</li>\n' +
      '     *   <li>IP-based rate limiting</li>\n' +
      '     *   <li>Password hashing with BCrypt</li>\n' +
      '     * </ul>\n' +
      '     * \n' +
      '     * @param email the user\'s email address\n' +
      '     * @param password the plain-text password to verify\n' +
      '     * @return the authenticated User entity\n' +
      '     * @throws AuthenticationException if credentials are invalid\n' +
      '     * @throws AccountLockedException if account is locked\n' +
      '     * @throws UserNotFoundException if email doesn\'t exist\n' +
      '     * \n' +
      '     * @see PasswordEncoder#matches(CharSequence, String)\n' +
      '     */\n' +
      '    public User authenticate(String email, String password) \n' +
      '            throws AuthenticationException, AccountLockedException, UserNotFoundException {\n' +
      '        \n' +
      '        logger.debug("Authenticating user: {}", email);\n' +
      '        \n' +
      '        // Find user by email\n' +
      '        User user = userRepository.findByEmail(email)\n' +
      '            .orElseThrow(() -> new UserNotFoundException("No user found with email: " + email));\n' +
      '        \n' +
      '        // Check if account is locked\n' +
      '        if (user.isLocked()) {\n' +
      '            logger.warn("Authentication attempt on locked account: {}", email);\n' +
      '            throw new AccountLockedException("Account is locked");\n' +
      '        }\n' +
      '        \n' +
      '        // Verify password\n' +
      '        if (!passwordEncoder.matches(password, user.getPassword())) {\n' +
      '            handleFailedLoginAttempt(user);\n' +
      '            throw new AuthenticationException("Invalid credentials");\n' +
      '        }\n' +
      '        \n' +
      '        // Reset failed attempts and update last login\n' +
      '        user.setFailedLoginAttempts(0);\n' +
      '        user.setLastLoginAt(LocalDateTime.now());\n' +
      '        userRepository.save(user);\n' +
      '        \n' +
      '        logger.info("User authenticated successfully: {}", email);\n' +
      '        return user;\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Updates the user\'s profile information.\n' +
      '     * \n' +
      '     * This method allows users to update their name, phone number, and\n' +
      '     * notification preferences. It validates all input and maintains\n' +
      '     * an audit trail of changes.\n' +
      '     * \n' +
      '     * @param userId the ID of the user to update\n' +
      '     * @param profileUpdate the updated profile information\n' +
      '     * @return the updated User entity\n' +
      '     * @throws UserNotFoundException if user doesn\'t exist\n' +
      '     * @throws ValidationException if update data is invalid\n' +
      '     * \n' +
      '     * @see UserProfileUpdate\n' +
      '     * @see UserAudit\n' +
      '     */\n' +
      '    @Transactional\n' +
      '    public User updateProfile(Long userId, UserProfileUpdate profileUpdate) \n' +
      '            throws UserNotFoundException, ValidationException {\n' +
      '        \n' +
      '        logger.info("Updating profile for user ID: {}", userId);\n' +
      '        \n' +
      '        // Find user\n' +
      '        User user = userRepository.findById(userId)\n' +
      '            .orElseThrow(() -> new UserNotFoundException("User not found with ID: " + userId));\n' +
      '        \n' +
      '        // Validate update data\n' +
      '        validateProfileUpdate(profileUpdate);\n' +
      '        \n' +
      '        // Update profile fields\n' +
      '        user.setName(profileUpdate.getName());\n' +
      '        user.setPhone(profileUpdate.getPhone());\n' +
      '        user.setNotificationPreferences(profileUpdate.getNotificationPreferences());\n' +
      '        user.setUpdatedAt(LocalDateTime.now());\n' +
      '        \n' +
      '        // Save changes\n' +
      '        User updatedUser = userRepository.save(user);\n' +
      '        \n' +
      '        logger.info("Profile updated successfully for user ID: {}", userId);\n' +
      '        return updatedUser;\n' +
      '    }\n' +
      '    \n' +
      '    // Private helper methods with documentation\n' +
      '    \n' +
      '    /**\n' +
      '     * Validates email format using RFC 5322 compliant regex.\n' +
      '     * \n' +
      '     * This method checks that the email contains a valid local part,\n' +
      '     * domain, and top-level domain. It does not verify if the email\n' +
      '     * address actually exists.\n' +
      '     * \n' +
      '     * @param email the email address to validate\n' +
      '     * @throws ValidationException if email format is invalid\n' +
      '     * \n' +
      '     * @see <a href="https://tools.ietf.org/html/rfc5322">RFC 5322</a>\n' +
      '     */\n' +
      '    private void validateEmail(String email) throws ValidationException {\n' +
      '        if (email == null || email.isEmpty()) {\n' +
      '            throw new ValidationException("Email cannot be null or empty");\n' +
      '        }\n' +
      '        \n' +
      '        if (!EMAIL_PATTERN.matcher(email).matches()) {\n' +
      '            throw new ValidationException("Invalid email format: " + email);\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Generates a cryptographically secure random password.\n' +
      '     * \n' +
      '     * The generated password contains 12 characters including uppercase,\n' +
      '     * lowercase, numbers, and special characters. It meets OWASP password\n' +
      '     * complexity requirements.\n' +
      '     * \n' +
      '     * @return a secure random password string\n' +
      '     * \n' +
      '     * @see <a href="https://owasp.org/www-community/password-special-characters">OWASP Password Guidelines</a>\n' +
      '     */\n' +
      '    private String generateSecurePassword() {\n' +
      '        // Implementation details...\n' +
      '        return "GeneratedPassword123!";\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Handles failed login attempts for brute-force protection.\n' +
      '     * \n' +
      '     * This method increments the failed login counter and locks the\n' +
      '     * account if the threshold is exceeded. It also logs security\n' +
      '     * events for monitoring.\n' +
      '     * \n' +
      '     * @param user the user with failed login attempt\n' +
      '     * \n' +
      '     * @see #MAX_FAILED_ATTEMPTS\n' +
      '     */\n' +
      '    private void handleFailedLoginAttempt(User user) {\n' +
      '        int attempts = user.getFailedLoginAttempts() + 1;\n' +
      '        user.setFailedLoginAttempts(attempts);\n' +
      '        \n' +
      '        if (attempts >= MAX_FAILED_ATTEMPTS) {\n' +
      '            user.setLocked(true);\n' +
      '            logger.warn("Account locked due to failed login attempts: {}", user.getEmail());\n' +
      '        }\n' +
      '        \n' +
      '        userRepository.save(user);\n' +
      '    }\n' +
      '    \n' +
      '    // Constants with documentation\n' +
      '    /**\n' +
      '     * Maximum number of failed login attempts before account lockout.\n' +
      '     * \n' +
      '     * This security measure helps prevent brute-force attacks by\n' +
      '     * temporarily disabling accounts after repeated failed attempts.\n' +
      '     * \n' +
      '     * @see #handleFailedLoginAttempt(User)\n' +
      '     */\n' +
      '    private static final int MAX_FAILED_ATTEMPTS = 5;\n' +
      '    \n' +
      '    /**\n' +
      '     * Regular expression pattern for email validation.\n' +
      '     * \n' +
      '     * This pattern implements RFC 5322 compliant email validation\n' +
      '     * with support for internationalized domain names.\n' +
      '     * \n' +
      '     * @see #validateEmail(String)\n' +
      '     */\n' +
      '    private static final Pattern EMAIL_PATTERN = Pattern.compile(\n' +
      '        "^[A-Za-z0-9+_.-]+@([A-Za-z0-9.-]+\\\\.[A-Za-z]{2,})$"\n' +
      '    );\n' +
      '}\n\n' +
      '// 2. Maven Javadoc Plugin Configuration\n' +
      '<plugin>\n' +
      '    <groupId>org.apache.maven.plugins</groupId>\n' +
      '    <artifactId>maven-javadoc-plugin</artifactId>\n' +
      '    <version>3.4.1</version>\n' +
      '    <configuration>\n' +
      '        <!-- General settings -->\n' +
      '        <source>17</source>\n' +
      '        <encoding>UTF-8</encoding>\n' +
      '        <docencoding>UTF-8</docencoding>\n' +
      '        <charset>UTF-8</charset>\n' +
      '        \n' +
      '        <!-- Output settings -->\n' +
      '        <outputDirectory>${project.build.directory}/apidocs</outputDirectory>\n' +
      '        <reportOutputDirectory>${project.reporting.outputDirectory}/apidocs</reportOutputDirectory>\n' +
      '        \n' +
      '        <!-- Content settings -->\n' +
      '        <author>true</author>\n' +
      '        <version>true</version>\n' +
      '        <show>protected</show>\n' +
      '        <nohelp>true</nohelp>\n' +
      '        \n' +
      '        <!-- Links to external documentation -->\n' +
      '        <links>\n' +
      '            <link>https://docs.oracle.com/en/java/javase/17/docs/api/</link>\n' +
      '            <link>https://docs.spring.io/spring-framework/docs/current/javadoc-api/</link>\n' +
      '        </links>\n' +
      '        \n' +
      '        <!-- Exclude patterns -->\n' +
      '        <excludePackageNames>*.internal:*.generated</excludePackageNames>\n' +
      '        \n' +
      '        <!-- Custom styling -->\n' +
      '        <stylesheetfile>src/main/javadoc/stylesheet.css</stylesheetfile>\n' +
      '        <overview>src/main/javadoc/overview.html</overview>\n' +
      '        \n' +
      '        <!-- Additional options -->\n' +
      '        <additionalOptions>\n' +
      '            <additionalOption>-Xdoclint:none</additionalOption>\n' +
      '        </additionalOptions>\n' +
      '    </configuration>\n' +
      '    <executions>\n' +
      '        <execution>\n' +
      '            <id>attach-javadocs</id>\n' +
      '            <goals>\n' +
      '                <goal>jar</goal>\n' +
      '            </goals>\n' +
      '        </execution>\n' +
      '        <execution>\n' +
      '            <id>aggregate</id>\n' +
      '            <goals>\n' +
      '                <goal>aggregate</goal>\n' +
      '            </goals>\n' +
      '            <phase>site</phase>\n' +
      '        </execution>\n' +
      '    </executions>\n' +
      '</plugin>\n\n' +
      '// 3. Gradle Javadoc Configuration\n' +
      'plugins {\n' +
      '    id \'java\'\n' +
      '    id \'maven-publish\'\n' +
      '}\n\n' +
      'java {\n' +
      '    withJavadocJar()\n' +
      '}\n\n' +
      'javadoc {\n' +
      '    source = sourceSets.main.allJava\n' +
      '    classpath = configurations.compileClasspath\n' +
      '    destinationDir = file("${buildDir}/docs/javadoc")\n' +
      '    \n' +
      '    options {\n' +
      '        author = true\n' +
      '        version = true\n' +
      '        showFromProtected()\n' +
      '        noHelp = true\n' +
      '        encoding = \'UTF-8\'\n' +
      '        docEncoding = \'UTF-8\'\n' +
      '        charSet = \'UTF-8\'\n' +
      '        links = [\n' +
      '            \'https://docs.oracle.com/en/java/javase/17/docs/api/\',\n' +
      '            \'https://docs.spring.io/spring-framework/docs/current/javadoc-api/\'\n' +
      '        ]\n' +
      '        addStringOption(\'Xdoclint:none\', \'-quiet\')\n' +
      '    }\n' +
      '    \n' +
      '    // Exclude internal packages\n' +
      '    exclude \'**/internal/**\', \'**/generated/**\'\n' +
      '    \n' +
      '    // Custom overview\n' +
      '    title = "My Application API Documentation"\n' +
      '    overview = "src/main/javadoc/overview.html"\n' +
      '}\n\n' +
      '// 4. Package-level documentation (package-info.java)\n' +
      '/**\n' +
      ' * Provides classes for user management and authentication services.\n' +
      ' * \n' +
      ' * <p>This package contains the core functionality for managing user accounts,\n' +
      ' * including registration, authentication, profile management, and security\n' +
      ' * features. The main entry point is the {@link com.example.user.UserService}\n' +
      ' * which coordinates with repositories and external services.</p>\n' +
      ' * \n' +
      ' * <h2>Package Structure</h2>\n' +
      ' * <ul>\n' +
      ' *   <li>{@link com.example.user.service} - Business logic and service classes</li>\n' +
      ' *   <li>{@link com.example.user.repository} - Data access and persistence</li>\n' +
      ' *   <li>{@link com.example.user.model} - Data models and entities</li>\n' +
      ' *   <li>{@link com.example.user.exception} - Custom exception classes</li>\n' +
      ' * </ul>\n' +
      ' * \n' +
      ' * <h2>Security Considerations</h2>\n' +
      ' * <p>All operations in this package implement security best practices including:\n' +
      ' * <ul>\n' +
      ' *   <li>Password hashing with BCrypt</li>\n' +
      ' *   <li>Brute-force attack prevention</li>\n' +
      ' *   <li>Account lockout mechanisms</li>\n' +
      ' *   <li>Input validation and sanitization</li>\n' +
      ' * </ul>\n' +
      ' * </p>\n' +
      ' * \n' +
      ' * @since 1.0.0\n' +
      ' * @author Security Team\n' +
      ' * @version 2.1.0\n' +
      ' */\n' +
      'package com.example.user;\n\n' +
      'import com.example.user.service.UserService;',
    exercise: '<div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Exercise: Create Comprehensive JavaDoc Documentation' +
      '</h1>' +
      '<p class="mt-3 text-green-100 text-lg">Document a complete e-commerce system with JavaDoc and generate professional documentation</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Document E-Commerce System' +
      '</h2>' +
      '<div class="bg-green-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-green-800 mb-2">📋 System Components</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-green-800 mb-2">Core Services</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• ProductService - Product catalog management</li>' +
      '<li>• OrderService - Order processing and fulfillment</li>' +
      '<li>• PaymentService - Payment processing integration</li>' +
      '<li>• InventoryService - Stock level management</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-green-800 mb-2">Supporting Classes</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• User entities and repositories</li>' +
      '<li>• Shopping cart functionality</li>' +
      '<li>• Notification system</li>' +
      '<li>• Security and authentication</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-gray-800 text-green-400 p-4 rounded-lg">' +
      '<h4 class="text-white mb-2">💡 Implementation Tasks</h4>' +
      '<pre class="text-sm">' +
      '1. Add JavaDoc to all public classes and methods\n' +
      '2. Create package-level documentation\n' +
      '3. Document business rules and constraints\n' +
      '4. Include usage examples in documentation\n' +
      '5. Configure Maven/Gradle for documentation generation\n' +
      '6. Add cross-references between related classes\n' +
      '7. Document exception handling strategies\n' +
      '8. Generate and review HTML documentation</pre>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Documentation Quality Checklist' +
      '</h2>' +
      '<div class="bg-teal-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-teal-800 mb-2">✅ Documentation Standards</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-teal-800 mb-2">Content Requirements</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Clear purpose and usage descriptions</li>' +
      '<li>• Complete parameter and return value docs</li>' +
      '<li>• Exception documentation</li>' +
      '<li>• Business rule explanations</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-teal-800 mb-2">Style Guidelines</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Consistent terminology</li>' +
      '<li>• Proper grammar and spelling</li>' +
      '<li>• Concise but comprehensive</li>' +
      '<li>• Examples and code snippets</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<div class="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg mt-8">' +
      '<h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>' +
      '<p class="text-green-100">' +
      'After completing this exercise, you\'ll have created professional-quality ' +
      'documentation for a complete Java application with automated generation processes.' +
      '</p>' +
      '</div>' +
      '</div>'
  }
};