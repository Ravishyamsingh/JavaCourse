import { LessonContent } from '../../types/LessonTypes';

export const lesson_18_5: LessonContent = {
  title: 'Security Best Practices',
  type: 'lesson',
  duration: '95 min',
  module: 'Advanced Topics and Best Practices',
  content: {
    overview: 'Learn essential security best practices for Java applications including authentication, authorization, data protection, secure coding practices, and vulnerability management. Understand how to implement robust security measures to protect applications from common threats.',
    objectives: [
      'Implement secure authentication and authorization',
      'Apply encryption and data protection techniques',
      'Follow secure coding practices to prevent vulnerabilities',
      'Manage security dependencies and vulnerabilities',
      'Implement security logging and monitoring',
      'Conduct security testing and penetration testing',
      'Apply OWASP Top 10 mitigation strategies'
    ],
    theory: '<div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Security Best Practices' +
      '</h1>' +
      '<p class="mt-3 text-indigo-100 text-lg">Protecting Java applications from security threats</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Security Fundamentals' +
      '</h2>' +
      '<p class="text-gray-700 mb-4 leading-relaxed text-lg">' +
      'Application security is the practice of protecting software applications ' +
      'from threats that could compromise data, functionality, or availability. ' +
      'A comprehensive security approach includes prevention, detection, and response measures.' +
      '</p>' +
      '<div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">' +
      '<h4 class="font-bold text-indigo-800 mb-2">🎯 Security Principles</h4>' +
      '<ul class="text-indigo-700 space-y-1">' +
      '<li>• <strong>Defense in Depth:</strong> Multiple layers of security controls</li>' +
      '<li>• <strong>Least Privilege:</strong> Minimal necessary access rights</li>' +
      '<li>• <strong>Fail Secure:</strong> Default to secure state on failure</li>' +
      '<li>• <strong>Secure by Design:</strong> Security built into development process</li>' +
      '<li>• <strong>Regular Updates:</strong> Keep dependencies and systems current</li>' +
      '</ul>' +
      '</div>' +
      '<div class="grid md:grid-cols-2 gap-6">' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">✅ Security Areas</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Authentication and Identity Management</li>' +
      '<li>• Authorization and Access Control</li>' +
      '<li>• Data Protection and Encryption</li>' +
      '<li>• Input Validation and Sanitization</li>' +
      '<li>• Secure Configuration Management</li>' +
      '<li>• Security Monitoring and Logging</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-red-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-red-800 mb-2">⚠️ Common Security Mistakes</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Hard-coded credentials in source code</li>' +
      '<li>• Insufficient input validation</li>' +
      '<li>• Weak password policies</li>' +
      '<li>• Ignoring security dependencies</li>' +
      '<li>• Poor error handling that leaks information</li>' +
      '<li>• Inadequate security testing</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Authentication and Authorization' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-purple-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-purple-800 mb-2">Authentication Methods</h4>' +
      '<p class="text-purple-700 mb-3">Secure user authentication approaches:</p>' +
      '<div class="bg-white p-4 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Authentication Types</h5>' +
      '<div class="grid md:grid-cols-3 gap-4 text-sm">' +
      '<div>' +
      '<strong>Multi-Factor Auth (MFA)</strong>' +
      '<p class="text-gray-600">Password + TOTP/SMS/Token</p>' +
      '</div>' +
      '<div>' +
      '<strong>OAuth 2.0</strong>' +
      '<p class="text-gray-600">Third-party authentication</p>' +
      '</div>' +
      '<div>' +
      '<strong>OpenID Connect</strong>' +
      '<p class="text-gray-600">Identity layer on OAuth 2.0</p>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">Authorization Models</h4>' +
      '<div class="overflow-x-auto">' +
      '<table class="min-w-full bg-white rounded border">' +
      '<thead>' +
      '<tr class="bg-gray-100">' +
      '<th class="py-2 px-4 text-left">Model</th>' +
      '<th class="py-2 px-4 text-left">Description</th>' +
      '<th class="py-2 px-4 text-left">Use Case</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">RBAC</td>' +
      '<td class="py-2 px-4">Role-Based Access Control</td>' +
      '<td class="py-2 px-4">Traditional role-based permissions</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">ABAC</td>' +
      '<td class="py-2 px-4">Attribute-Based Access Control</td>' +
      '<td class="py-2 px-4">Fine-grained, context-aware access</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">PBAC</td>' +
      '<td class="py-2 px-4">Policy-Based Access Control</td>' +
      '<td class="py-2 px-4">Rule-based access decisions</td>' +
      '</tr>' +
      '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>' +
      'Data Protection' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-green-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-green-800 mb-2">Encryption Strategies</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-green-800 mb-2">Data at Rest</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Encrypting stored data</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• AES-256 for symmetric encryption</li>' +
      '<li>• RSA for asymmetric encryption</li>' +
      '<li>• Database column-level encryption</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-green-800 mb-2">Data in Transit</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Encrypting data during transmission</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• TLS 1.3 for secure communication</li>' +
      '<li>• Certificate pinning</li>' +
      '<li>• Mutual TLS authentication</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>' +
      'OWASP Top 10 Mitigation' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-orange-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-orange-800 mb-2">Critical Vulnerabilities</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Injection Prevention</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Use parameterized queries</li>' +
      '<li>• Validate and sanitize input</li>' +
      '<li>• Implement ORM frameworks</li>' +
      '<li>• Apply allow-list validation</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Broken Authentication</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Implement strong password policies</li>' +
      '<li>• Use secure session management</li>' +
      '<li>• Enable multi-factor authentication</li>' +
      '<li>• Apply rate limiting</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '</div>',
    codeExample: '// Complete Security Implementation\n\n' +
      '// 1. Secure Configuration Management\n' +
      '@Configuration\n' +
      '@EnableWebSecurity\n' +
      'public class SecurityConfig {\n' +
      '    \n' +
      '    @Bean\n' +
      '    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n' +
      '        http\n' +
      '            // CSRF protection\n' +
      '            .csrf(csrf -> csrf\n' +
      '                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\n' +
      '                .requireCsrfProtectionMatcher(\n' +
      '                    new RequestMatcher() {\n' +
      '                        private final HashSet<String> allowedMethods = \n' +
      '                            new HashSet<>(Arrays.asList("GET", "HEAD", "TRACE", "OPTIONS"));\n' +
      '                        \n' +
      '                        @Override\n' +
      '                        public boolean matches(HttpServletRequest request) {\n' +
      '                            return !allowedMethods.contains(request.getMethod());\n' +
      '                        }\n' +
      '                    })\n' +
      '            )\n' +
      '            \n' +
      '            // Session management\n' +
      '            .sessionManagement(session -> session\n' +
      '                .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)\n' +
      '                .sessionFixation().migrateSession()\n' +
      '                .maximumSessions(1)\n' +
      '                .maxSessionsPreventsLogin(false)\n' +
      '                .expiredUrl("/login?expired=true")\n' +
      '            )\n' +
      '            \n' +
      '            // Authentication\n' +
      '            .authorizeHttpRequests(authz -> authz\n' +
      '                .requestMatchers("/public/**").permitAll()\n' +
      '                .requestMatchers("/api/admin/**").hasRole("ADMIN")\n' +
      '                .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")\n' +
      '                .anyRequest().authenticated()\n' +
      '            )\n' +
      '            \n' +
      '            // Form login\n' +
      '            .formLogin(form -> form\n' +
      '                .loginPage("/login")\n' +
      '                .loginProcessingUrl("/perform_login")\n' +
      '                .defaultSuccessUrl("/dashboard", true)\n' +
      '                .failureUrl("/login?error=true")\n' +
      '                .usernameParameter("username")\n' +
      '                .passwordParameter("password")\n' +
      '                .permitAll()\n' +
      '            )\n' +
      '            \n' +
      '            // Logout\n' +
      '            .logout(logout -> logout\n' +
      '                .logoutUrl("/perform_logout")\n' +
      '                .invalidateHttpSession(true)\n' +
      '                .clearAuthentication(true)\n' +
      '                .deleteCookies("JSESSIONID")\n' +
      '                .logoutSuccessUrl("/login?logout=success")\n' +
      '            )\n' +
      '            \n' +
      '            // Headers\n' +
      '            .headers(headers -> headers\n' +
      '                .frameOptions().deny()\n' +
      '                .contentTypeOptions().and()\n' +
      '                .httpStrictTransportSecurity(hsts -> hsts\n' +
      '                    .maxAgeInSeconds(31536000)\n' +
      '                    .includeSubdomains(true)\n' +
      '                    .preload(true))\n' +
      '                .xssProtection(xss -> xss.headerValue("1; mode=block"))\n' +
      '                .cacheControl()\n' +
      '            );\n' +
      '        \n' +
      '        return http.build();\n' +
      '    }\n' +
      '    \n' +
      '    @Bean\n' +
      '    public PasswordEncoder passwordEncoder() {\n' +
      '        return new BCryptPasswordEncoder(12);\n' +
      '    }\n' +
      '    \n' +
      '    @Bean\n' +
      '    public UserDetailsService userDetailsService() {\n' +
      '        return new CustomUserDetailsService();\n' +
      '    }\n' +
      '}\n\n' +
      '// 2. Secure User Authentication Service\n' +
      '@Service\n' +
      'public class AuthenticationService {\n' +
      '    \n' +
      '    private final UserRepository userRepository;\n' +
      '    private final PasswordEncoder passwordEncoder;\n' +
      '    private final TotpService totpService;\n' +
      '    private final LoginAttemptService loginAttemptService;\n' +
      '    \n' +
      '    /**\n' +
      '     * Authenticates user with username, password, and optional TOTP\n' +
      '     * \n' +
      '     * @param username the username\n' +
      '     * @param password the password\n' +
      '     * @param totpCode optional TOTP code for MFA\n' +
      '     * @return authenticated user details\n' +
      '     * @throws AuthenticationException if authentication fails\n' +
      '     */\n' +
      '    public UserDetails authenticateUser(String username, String password, String totpCode) \n' +
      '            throws AuthenticationException {\n' +
      '        \n' +
      '        // Check rate limiting\n' +
      '        if (loginAttemptService.isBlocked(username)) {\n' +
      '            throw new AuthenticationException("Account temporarily locked due to failed attempts");\n' +
      '        }\n' +
      '        \n' +
      '        // Load user\n' +
      '        User user = userRepository.findByUsername(username)\n' +
      '            .orElseThrow(() -> new BadCredentialsException("Invalid username or password"));\n' +
      '        \n' +
      '        // Check if account is enabled\n' +
      '        if (!user.isEnabled()) {\n' +
      '            throw new DisabledException("Account is disabled");\n' +
      '        }\n' +
      '        \n' +
      '        // Verify password\n' +
      '        if (!passwordEncoder.matches(password, user.getPassword())) {\n' +
      '            loginAttemptService.registerFailedLogin(username);\n' +
      '            throw new BadCredentialsException("Invalid username or password");\n' +
      '        }\n' +
      '        \n' +
      '        // Check MFA if enabled\n' +
      '        if (user.isMfaEnabled()) {\n' +
      '            if (totpCode == null || !totpService.verifyCode(user.getTotpSecret(), totpCode)) {\n' +
      '                throw new BadCredentialsException("Invalid TOTP code");\n' +
      '            }\n' +
      '        }\n' +
      '        \n' +
      '        // Reset failed login attempts\n' +
      '        loginAttemptService.resetFailedLogins(username);\n' +
      '        \n' +
      '        // Update last login\n' +
      '        user.setLastLoginAt(Instant.now());\n' +
      '        userRepository.save(user);\n' +
      '        \n' +
      '        return UserPrincipal.create(user);\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Registers a new user with secure defaults\n' +
      '     * \n' +
      '     * @param registrationRequest the registration details\n' +
      '     * @return the registered user\n' +
      '     * @throws RegistrationException if registration fails\n' +
      '     */\n' +
      '    public User registerUser(RegistrationRequest registrationRequest) \n' +
      '            throws RegistrationException {\n' +
      '        \n' +
      '        // Validate input\n' +
      '        validateRegistrationRequest(registrationRequest);\n' +
      '        \n' +
      '        // Check if user already exists\n' +
      '        if (userRepository.existsByUsername(registrationRequest.getUsername())) {\n' +
      '            throw new RegistrationException("Username already exists");\n' +
      '        }\n' +
      '        \n' +
      '        if (userRepository.existsByEmail(registrationRequest.getEmail())) {\n' +
      '            throw new RegistrationException("Email already registered");\n' +
      '        }\n' +
      '        \n' +
      '        // Create user entity\n' +
      '        User user = new User();\n' +
      '        user.setUsername(registrationRequest.getUsername());\n' +
      '        user.setEmail(registrationRequest.getEmail());\n' +
      '        user.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));\n' +
      '        user.setRoles(Set.of("ROLE_USER"));\n' +
      '        user.setEnabled(false); // Require email verification\n' +
      '        user.setMfaEnabled(false);\n' +
      '        user.setCreatedAt(Instant.now());\n' +
      '        user.setFailedLoginAttempts(0);\n' +
      '        \n' +
      '        // Save user\n' +
      '        User savedUser = userRepository.save(user);\n' +
      '        \n' +
      '        // Send verification email\n' +
      '        sendVerificationEmail(savedUser);\n' +
      '        \n' +
      '        return savedUser;\n' +
      '    }\n' +
      '}\n\n' +
      '// 3. Input Validation and Sanitization\n' +
      '@Component\n' +
      'public class InputValidator {\n' +
      '    \n' +
      '    private static final Pattern EMAIL_PATTERN = \n' +
      '        Pattern.compile("^[A-Za-z0-9+_.-]+@([A-Za-z0-9.-]+\\\\.[A-Za-z]{2,})$");\n' +
      '    \n' +
      '    private static final Pattern USERNAME_PATTERN = \n' +
      '        Pattern.compile("^[a-zA-Z0-9_]{3,20}$");\n' +
      '    \n' +
      '    /**\n' +
      '     * Validates and sanitizes user input\n' +
      '     * \n' +
      '     * @param input the input to validate\n' +
      '     * @param maxLength maximum allowed length\n' +
      '     * @param allowHtml whether HTML is allowed\n' +
      '     * @return sanitized input\n' +
      '     * @throws ValidationException if input is invalid\n' +
      '     */\n' +
      '    public String validateAndSanitize(String input, int maxLength, boolean allowHtml) \n' +
      '            throws ValidationException {\n' +
      '        \n' +
      '        if (input == null) {\n' +
      '            throw new ValidationException("Input cannot be null");\n' +
      '        }\n' +
      '        \n' +
      '        // Check length\n' +
      '        if (input.length() > maxLength) {\n' +
      '            throw new ValidationException("Input exceeds maximum length of " + maxLength);\n' +
      '        }\n' +
      '        \n' +
      '        // Trim whitespace\n' +
      '        String trimmed = input.trim();\n' +
      '        \n' +
      '        // Sanitize HTML if not allowed\n' +
      '        if (!allowHtml) {\n' +
      '            PolicyFactory policy = Sanitizers.FORMATTING.and(Sanitizers.LINKS);\n' +
      '            trimmed = policy.sanitize(trimmed);\n' +
      '        }\n' +
      '        \n' +
      '        return trimmed;\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Validates email format\n' +
      '     * \n' +
      '     * @param email the email to validate\n' +
      '     * @return true if valid, false otherwise\n' +
      '     */\n' +
      '    public boolean isValidEmail(String email) {\n' +
      '        return email != null && EMAIL_PATTERN.matcher(email).matches();\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Validates username format\n' +
      '     * \n' +
      '     * @param username the username to validate\n' +
      '     * @return true if valid, false otherwise\n' +
      '     */\n' +
      '    public boolean isValidUsername(String username) {\n' +
      '        return username != null && USERNAME_PATTERN.matcher(username).matches();\n' +
      '    }\n' +
      '}\n\n' +
      '// 4. Secure Data Encryption\n' +
      '@Component\n' +
      'public class EncryptionService {\n' +
      '    \n' +
      '    private final KeyPair keyPair;\n' +
      '    \n' +
      '    public EncryptionService() throws NoSuchAlgorithmException {\n' +
      '        KeyPairGenerator keyGen = KeyPairGenerator.getInstance("RSA");\n' +
      '        keyGen.initialize(2048);\n' +
      '        this.keyPair = keyGen.generateKeyPair();\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Encrypts sensitive data\n' +
      '     * \n' +
      '     * @param data the data to encrypt\n' +
      '     * @return encrypted data\n' +
      '     */\n' +
      '    public String encrypt(String data) {\n' +
      '        try {\n' +
      '            Cipher cipher = Cipher.getInstance("RSA/ECB/OAEPWITHSHA-256ANDMGF1PADDING");\n' +
      '            cipher.init(Cipher.ENCRYPT_MODE, keyPair.getPublic());\n' +
      '            byte[] encryptedBytes = cipher.doFinal(data.getBytes(StandardCharsets.UTF_8));\n' +
      '            return Base64.getEncoder().encodeToString(encryptedBytes);\n' +
      '        } catch (Exception e) {\n' +
      '            throw new EncryptionException("Failed to encrypt data", e);\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Decrypts sensitive data\n' +
      '     * \n' +
      '     * @param encryptedData the encrypted data\n' +
      '     * @return decrypted data\n' +
      '     */\n' +
      '    public String decrypt(String encryptedData) {\n' +
      '        try {\n' +
      '            Cipher cipher = Cipher.getInstance("RSA/ECB/OAEPWITHSHA-256ANDMGF1PADDING");\n' +
      '            cipher.init(Cipher.DECRYPT_MODE, keyPair.getPrivate());\n' +
      '            byte[] decryptedBytes = cipher.doFinal(Base64.getDecoder().decode(encryptedData));\n' +
      '            return new String(decryptedBytes, StandardCharsets.UTF_8);\n' +
      '        } catch (Exception e) {\n' +
      '            throw new EncryptionException("Failed to decrypt data", e);\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Hashes sensitive data for storage\n' +
      '     * \n' +
      '     * @param data the data to hash\n' +
      '     * @return hashed data\n' +
      '     */\n' +
      '    public String hash(String data) {\n' +
      '        try {\n' +
      '            MessageDigest digest = MessageDigest.getInstance("SHA-256");\n' +
      '            byte[] hashBytes = digest.digest(data.getBytes(StandardCharsets.UTF_8));\n' +
      '            return Base64.getEncoder().encodeToString(hashBytes);\n' +
      '        } catch (NoSuchAlgorithmException e) {\n' +
      '            throw new EncryptionException("Failed to hash data", e);\n' +
      '        }\n' +
      '    }\n' +
      '}\n\n' +
      '// 5. Security Logging and Monitoring\n' +
      '@Component\n' +
      'public class SecurityLogger {\n' +
      '    \n' +
      '    private static final Logger securityLogger = \n' +
      '        LoggerFactory.getLogger("SECURITY_AUDIT");\n' +
      '    \n' +
      '    /**\n' +
      '     * Logs security events\n' +
      '     * \n' +
      '     * @param event the security event\n' +
      '     * @param user the user associated with the event\n' +
      '     * @param details additional details\n' +
      '     */\n' +
      '    public void logSecurityEvent(String event, String user, String details) {\n' +
      '        securityLogger.info("SECURITY_EVENT: {} | USER: {} | DETAILS: {}", \n' +
      '            event, user, details);\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Logs failed authentication attempts\n' +
      '     * \n' +
      '     * @param username the username\n' +
      '     * @param ipAddress the IP address\n' +
      '     * @param reason the failure reason\n' +
      '     */\n' +
      '    public void logFailedLogin(String username, String ipAddress, String reason) {\n' +
      '        securityLogger.warn("FAILED_LOGIN: {} | IP: {} | REASON: {}", \n' +
      '            username, ipAddress, reason);\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Logs successful authentication\n' +
      '     * \n' +
      '     * @param username the username\n' +
      '     * @param ipAddress the IP address\n' +
      '     */\n' +
      '    public void logSuccessfulLogin(String username, String ipAddress) {\n' +
      '        securityLogger.info("SUCCESSFUL_LOGIN: {} | IP: {}", username, ipAddress);\n' +
      '    }\n' +
      '}\n\n' +
      '// 6. Secure REST Controller\n' +
      '@RestController\n' +
      '@RequestMapping("/api/secure")\n' +
      '@PreAuthorize("hasRole(\'USER\')")\n' +
      'public class SecureController {\n' +
      '    \n' +
      '    private final UserService userService;\n' +
      '    private final InputValidator inputValidator;\n' +
      '    private final SecurityLogger securityLogger;\n' +
      '    \n' +
      '    /**\n' +
      '     * Gets user profile with security checks\n' +
      '     * \n' +
      '     * @param userId the user ID\n' +
      '     * @param request the HTTP request\n' +
      '     * @return user profile\n' +
      '     */\n' +
      '    @GetMapping("/profile/{userId}")\n' +
      '    @PreAuthorize("@securityService.canAccessUser(principal, #userId)")\n' +
      '    public ResponseEntity<UserProfile> getUserProfile(\n' +
      '            @PathVariable String userId, \n' +
      '            HttpServletRequest request) {\n' +
      '        \n' +
      '        // Validate input\n' +
      '        String sanitizedUserId = inputValidator.validateAndSanitize(userId, 50, false);\n' +
      '        \n' +
      '        // Get user profile\n' +
      '        UserProfile profile = userService.getUserProfile(sanitizedUserId);\n' +
      '        \n' +
      '        // Log access\n' +
      '        securityLogger.logSecurityEvent("PROFILE_ACCESS", \n' +
      '            getUserIdFromPrincipal(request.getUserPrincipal()), \n' +
      '            "Accessed profile: " + sanitizedUserId);\n' +
      '        \n' +
      '        return ResponseEntity.ok(profile);\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Updates user profile with security validation\n' +
      '     * \n' +
      '     * @param userId the user ID\n' +
      '     * @param profileUpdate the profile update\n' +
      '     * @param request the HTTP request\n' +
      '     * @return updated profile\n' +
      '     */\n' +
      '    @PutMapping("/profile/{userId}")\n' +
      '    @PreAuthorize("@securityService.canModifyUser(principal, #userId)")\n' +
      '    public ResponseEntity<UserProfile> updateUserProfile(\n' +
      '            @PathVariable String userId,\n' +
      '            @RequestBody @Valid UserProfileUpdate profileUpdate,\n' +
      '            HttpServletRequest request) {\n' +
      '        \n' +
      '        // Validate and sanitize inputs\n' +
      '        String sanitizedUserId = inputValidator.validateAndSanitize(userId, 50, false);\n' +
      '        profileUpdate.setName(inputValidator.validateAndSanitize(\n' +
      '            profileUpdate.getName(), 100, false));\n' +
      '        profileUpdate.setEmail(inputValidator.validateAndSanitize(\n' +
      '            profileUpdate.getEmail(), 255, false));\n' +
      '        \n' +
      '        // Update profile\n' +
      '        UserProfile updatedProfile = userService.updateUserProfile(\n' +
      '            sanitizedUserId, profileUpdate);\n' +
      '        \n' +
      '        // Log update\n' +
      '        securityLogger.logSecurityEvent("PROFILE_UPDATE", \n' +
      '            getUserIdFromPrincipal(request.getUserPrincipal()), \n' +
      '            "Updated profile: " + sanitizedUserId);\n' +
      '        \n' +
      '        return ResponseEntity.ok(updatedProfile);\n' +
      '    }\n' +
      '}\n\n' +
      '// 7. Security Headers Filter\n' +
      '@Component\n' +
      '@Order(1)\n' +
      'public class SecurityHeadersFilter implements Filter {\n' +
      '    \n' +
      '    @Override\n' +
      '    public void doFilter(ServletRequest request, ServletResponse response, \n' +
      '            FilterChain chain) throws IOException, ServletException {\n' +
      '        \n' +
      '        HttpServletResponse httpResponse = (HttpServletResponse) response;\n' +
      '        \n' +
      '        // Security headers\n' +
      '        httpResponse.setHeader("X-Content-Type-Options", "nosniff");\n' +
      '        httpResponse.setHeader("X-Frame-Options", "DENY");\n' +
      '        httpResponse.setHeader("X-XSS-Protection", "1; mode=block");\n' +
      '        httpResponse.setHeader("Strict-Transport-Security", \n' +
      '            "max-age=31536000; includeSubDomains; preload");\n' +
      '        httpResponse.setHeader("Content-Security-Policy", \n' +
      '            "default-src \'self\'; script-src \'self\' \'unsafe-inline\'; " +\n' +
      '            "style-src \'self\' \'unsafe-inline\'; img-src \'self\' data:; " +\n' +
      '            "font-src \'self\'; connect-src \'self\';");\n' +
      '        httpResponse.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");\n' +
      '        \n' +
      '        chain.doFilter(request, response);\n' +
      '    }\n' +
      '}',
    exercise: '<div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Exercise: Implement Comprehensive Security for a Banking Application' +
      '</h1>' +
      '<p class="mt-3 text-indigo-100 text-lg">Create a secure banking application with robust authentication, authorization, and data protection</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Banking Application Security' +
      '</h2>' +
      '<div class="bg-indigo-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-indigo-800 mb-2">📋 Security Requirements</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Authentication</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Multi-factor authentication (MFA)</li>' +
      '<li>• Secure password policies</li>' +
      '<li>• Session management</li>' +
      '<li>• Account lockout mechanisms</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Data Protection</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• End-to-end encryption</li>' +
      '<li>• PCI DSS compliance</li>' +
      '<li>• Secure key management</li>' +
      '<li>• Data loss prevention</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-gray-800 text-indigo-400 p-4 rounded-lg">' +
      '<h4 class="text-white mb-2">💡 Implementation Tasks</h4>' +
      '<pre class="text-sm">' +
      '1. Implement OAuth 2.0 with PKCE for secure authentication\n' +
      '2. Add multi-factor authentication with TOTP\n' +
      '3. Implement end-to-end encryption for sensitive data\n' +
      '4. Add comprehensive input validation and sanitization\n' +
      '5. Configure security headers and CORS policies\n' +
      '6. Implement security logging and monitoring\n' +
      '7. Add rate limiting and brute force protection\n' +
      '8. Conduct security testing and penetration testing</pre>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Compliance and Auditing' +
      '</h2>' +
      '<div class="bg-purple-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-purple-800 mb-2">✅ Security Standards</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Regulatory Compliance</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• PCI DSS for payment card data</li>' +
      '<li>• GDPR for personal data protection</li>' +
      '<li>• SOX for financial reporting</li>' +
      '<li>• ISO 27001 for information security</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Security Auditing</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Regular vulnerability assessments</li>' +
      '<li>• Penetration testing</li>' +
      '<li>• Security code reviews</li>' +
      '<li>• Incident response procedures</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<div class="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-lg mt-8">' +
      '<h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>' +
      '<p class="text-indigo-100">' +
      'After completing this exercise, you\'ll have implemented comprehensive security measures ' +
      'for a banking application that meets industry standards and regulatory requirements.' +
      '</p>' +
      '</div>' +
      '</div>'
  }
};