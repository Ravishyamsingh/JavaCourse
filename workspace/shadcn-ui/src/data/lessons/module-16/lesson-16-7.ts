import { LessonContent } from '../../types/LessonTypes';

export const lesson_16_7: LessonContent = {
  title: 'Security with Spring Security',
  type: 'lesson',
  duration: '90 min',
  module: 'Web Development with Java',
  content: {
    overview: 'Implement comprehensive security for web applications using Spring Security, including authentication, authorization, JWT tokens, and security best practices.',
    objectives: [
      'Understand Spring Security architecture and components',
      'Implement authentication with multiple providers',
      'Configure method-level and URL-based authorization',
      'Work with JWT tokens and stateless authentication',
      'Handle CORS, CSRF, and other security concerns',
      'Implement OAuth2 and social login integration'
    ],
    theory: `
      <div class="bg-gradient-to-r from-red-600 to-pink-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Security with Spring Security
        </h1>
        <p class="mt-3 text-red-100 text-lg">Comprehensive security framework for Java applications</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Spring Security Overview
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Spring Security is a powerful and highly customizable authentication and access-control framework. 
            It provides comprehensive security services for Java EE-based enterprise software applications, 
            with particular focus on applications built using the Spring Framework.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🎯 Core Features</h4>
            <ul class="text-blue-700 space-y-1">
              <li>• <strong>Authentication:</strong> Verify user identity through various mechanisms</li>
              <li>• <strong>Authorization:</strong> Control access to resources based on roles/permissions</li>
              <li>• <strong>Protection:</strong> CSRF, session fixation, clickjacking prevention</li>
              <li>• <strong>Integration:</strong> LDAP, OAuth2, SAML, JWT support</li>
              <li>• <strong>Method Security:</strong> Annotation-based method-level security</li>
              <li>• <strong>Web Security:</strong> URL-based access control and filters</li>
            </ul>
          </div>
          
          <div class="bg-indigo-50 p-4 rounded-lg">
            <h4 class="font-bold text-indigo-800 mb-2">Security Filter Chain</h4>
            <div class="bg-white p-4 rounded border">
              <div class="space-y-2 text-sm">
                <div class="flex items-center">
                  <span class="bg-indigo-600 text-white px-2 py-1 rounded text-xs mr-2">1</span>
                  <span>SecurityContextPersistenceFilter</span>
                </div>
                <div class="flex items-center">
                  <span class="bg-indigo-600 text-white px-2 py-1 rounded text-xs mr-2">2</span>
                  <span>UsernamePasswordAuthenticationFilter</span>
                </div>
                <div class="flex items-center">
                  <span class="bg-indigo-600 text-white px-2 py-1 rounded text-xs mr-2">3</span>
                  <span>BasicAuthenticationFilter</span>
                </div>
                <div class="flex items-center">
                  <span class="bg-indigo-600 text-white px-2 py-1 rounded text-xs mr-2">4</span>
                  <span>ExceptionTranslationFilter</span>
                </div>
                <div class="flex items-center">
                  <span class="bg-indigo-600 text-white px-2 py-1 rounded text-xs mr-2">5</span>
                  <span>FilterSecurityInterceptor</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Authentication Mechanisms
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Authentication Providers</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Built-in Providers</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <strong>DaoAuthenticationProvider:</strong> Database-based authentication</li>
                    <li>• <strong>LdapAuthenticationProvider:</strong> LDAP directory authentication</li>
                    <li>• <strong>JwtAuthenticationProvider:</strong> JWT token validation</li>
                    <li>• <strong>RememberMeAuthenticationProvider:</strong> Remember-me functionality</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Custom Providers</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Implement AuthenticationProvider interface</li>
                    <li>• Custom business logic validation</li>
                    <li>• Integration with external systems</li>
                    <li>• Multi-factor authentication support</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Password Encoding</h4>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-blue-800 mb-2">Supported Encoders</h5>
                <div class="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>BCryptPasswordEncoder</strong>
                    <p class="text-gray-600">Recommended for production</p>
                  </div>
                  <div>
                    <strong>SCryptPasswordEncoder</strong>
                    <p class="text-gray-600">Memory-hard function</p>
                  </div>
                  <div>
                    <strong>Argon2PasswordEncoder</strong>
                    <p class="text-gray-600">Latest standard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Authorization and Access Control
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Authorization Strategies</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">URL-based Security</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
http.authorizeHttpRequests(auth -> auth
    .requestMatchers("/public/**").permitAll()
    .requestMatchers("/admin/**").hasRole("ADMIN")
    .requestMatchers("/api/**").hasAnyRole("USER", "ADMIN")
    .anyRequest().authenticated()
);</pre>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Method-level Security</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
@PreAuthorize("hasRole('ADMIN')")
public void deleteUser(Long id) { }

@PostAuthorize("returnObject.owner == authentication.name")
public Document getDocument(Long id) { }

@Secured({"ROLE_USER", "ROLE_ADMIN"})
public List&lt;User&gt; getUsers() { }</pre>
                </div>
              </div>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Role-Based Access Control (RBAC)</h4>
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white rounded border">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="py-2 px-4 text-left">Component</th>
                      <th class="py-2 px-4 text-left">Description</th>
                      <th class="py-2 px-4 text-left">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">User</td>
                      <td class="py-2 px-4">Individual with access to system</td>
                      <td class="py-2 px-4">john.doe@example.com</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Role</td>
                      <td class="py-2 px-4">Collection of permissions</td>
                      <td class="py-2 px-4">ADMIN, USER, MANAGER</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Authority</td>
                      <td class="py-2 px-4">Specific permission</td>
                      <td class="py-2 px-4">READ_USERS, WRITE_POSTS</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Resource</td>
                      <td class="py-2 px-4">Protected endpoint or method</td>
                      <td class="py-2 px-4">/api/admin/users</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            JWT and Stateless Authentication
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">JWT Token Structure</h4>
              <div class="bg-white p-4 rounded border">
                <div class="space-y-3">
                  <div class="flex items-center">
                    <span class="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold mr-3">Header</span>
                    <span class="text-gray-600 text-sm">Algorithm and token type</span>
                  </div>
                  <div class="flex items-center">
                    <span class="bg-blue-500 text-white px-3 py-1 rounded text-sm font-bold mr-3">Payload</span>
                    <span class="text-gray-600 text-sm">Claims and user information</span>
                  </div>
                  <div class="flex items-center">
                    <span class="bg-green-500 text-white px-3 py-1 rounded text-sm font-bold mr-3">Signature</span>
                    <span class="text-gray-600 text-sm">Verification signature</span>
                  </div>
                </div>
                <div class="mt-4 p-3 bg-gray-100 rounded text-xs font-mono">
                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
                </div>
              </div>
            </div>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">JWT vs Session-based Authentication</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">JWT Advantages</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Stateless - no server-side storage</li>
                    <li>• Scalable across multiple servers</li>
                    <li>• Self-contained with user information</li>
                    <li>• Cross-domain authentication</li>
                    <li>• Mobile-friendly</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">Session Advantages</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Immediate revocation capability</li>
                    <li>• Smaller client-side storage</li>
                    <li>• Server-side session management</li>
                    <li>• Built-in CSRF protection</li>
                    <li>• Simpler implementation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            OAuth2 and Social Login
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">OAuth2 Flow Types</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">Authorization Code Flow</h5>
                  <p class="text-sm text-gray-700 mb-2">Most secure for web applications</p>
                  <ol class="text-xs space-y-1">
                    <li>1. Redirect to authorization server</li>
                    <li>2. User grants permission</li>
                    <li>3. Receive authorization code</li>
                    <li>4. Exchange code for access token</li>
                  </ol>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">Client Credentials Flow</h5>
                  <p class="text-sm text-gray-700 mb-2">For machine-to-machine communication</p>
                  <ol class="text-xs space-y-1">
                    <li>1. Client authenticates with credentials</li>
                    <li>2. Receives access token directly</li>
                    <li>3. No user interaction required</li>
                    <li>4. Used for API access</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Social Login Providers</h4>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded border text-center">
                  <h5 class="font-bold text-blue-800 mb-2">Google</h5>
                  <p class="text-xs text-gray-600">OAuth2 + OpenID Connect</p>
                </div>
                <div class="bg-white p-3 rounded border text-center">
                  <h5 class="font-bold text-blue-800 mb-2">GitHub</h5>
                  <p class="text-xs text-gray-600">OAuth2 with scopes</p>
                </div>
                <div class="bg-white p-3 rounded border text-center">
                  <h5 class="font-bold text-blue-800 mb-2">Facebook</h5>
                  <p class="text-xs text-gray-600">OAuth2 with Graph API</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Security Best Practices
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Common Security Threats</h4>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Web Vulnerabilities</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Cross-Site Scripting (XSS)</li>
                    <li>Cross-Site Request Forgery (CSRF)</li>
                    <li>SQL Injection attacks</li>
                    <li>Session fixation</li>
                    <li>Clickjacking</li>
                    <li>Insecure direct object references</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Spring Security Protections</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Automatic CSRF token validation</li>
                    <li>XSS protection headers</li>
                    <li>Content Security Policy (CSP)</li>
                    <li>Secure session management</li>
                    <li>X-Frame-Options header</li>
                    <li>Input validation and sanitization</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Security Configuration Best Practices</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-yellow-800 mb-2">Authentication</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Use strong password policies</li>
                    <li>• Implement account lockout mechanisms</li>
                    <li>• Enable multi-factor authentication</li>
                    <li>• Use secure password encoding</li>
                    <li>• Implement proper session timeout</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-yellow-800 mb-2">Authorization</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Follow principle of least privilege</li>
                    <li>• Use role-based access control</li>
                    <li>• Implement proper error handling</li>
                    <li>• Validate all user inputs</li>
                    <li>• Log security-relevant events</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
// Complete Spring Security Configuration Example

// Security Configuration Class
@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
public class SecurityConfig {
    
    private final UserDetailsService userDetailsService;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtRequestFilter jwtRequestFilter;
    
    public SecurityConfig(UserDetailsService userDetailsService,
                         JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint,
                         JwtRequestFilter jwtRequestFilter) {
        this.userDetailsService = userDetailsService;
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
        this.jwtRequestFilter = jwtRequestFilter;
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }
    
    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
    
    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .exceptionHandling(exceptions -> exceptions
                .authenticationEntryPoint(jwtAuthenticationEntryPoint))
            .authorizeHttpRequests(auth -> auth
                // Public endpoints
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/swagger-ui/**", "/v3/api-docs/**").permitAll()
                
                // Admin endpoints
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                
                // User endpoints
                .requestMatchers(HttpMethod.GET, "/api/users/profile").hasAnyRole("USER", "ADMIN")
                .requestMatchers(HttpMethod.PUT, "/api/users/profile").hasAnyRole("USER", "ADMIN")
                
                // All other requests need authentication
                .anyRequest().authenticated()
            )
            .headers(headers -> headers
                .frameOptions().deny()
                .contentTypeOptions().and()
                .httpStrictTransportSecurity(hsts -> hsts
                    .maxAgeInSeconds(31536000)
                    .includeSubdomains(true))
            )
            .cors(cors -> cors.configurationSource(corsConfigurationSource()));
        
        // Add JWT filter before UsernamePasswordAuthenticationFilter
        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
        
        return http.build();
    }
    
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOriginPatterns(Arrays.asList("http://localhost:*", "https://*.example.com"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", configuration);
        return source;
    }
}

// Custom UserDetailsService Implementation
@Service
@Transactional(readOnly = true)
public class CustomUserDetailsService implements UserDetailsService {
    
    private final UserRepository userRepository;
    
    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmailWithRoles(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
        
        return UserPrincipal.create(user);
    }
    
    @Transactional(readOnly = true)
    public UserDetails loadUserById(Long id) {
        User user = userRepository.findByIdWithRoles(id)
            .orElseThrow(() -> new UsernameNotFoundException("User not found with id: " + id));
        
        return UserPrincipal.create(user);
    }
}

// Custom UserPrincipal Implementation
public class UserPrincipal implements UserDetails {
    
    private Long id;
    private String name;
    private String username;
    private String email;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;
    private boolean enabled;
    private boolean accountNonExpired;
    private boolean accountNonLocked;
    private boolean credentialsNonExpired;
    
    public UserPrincipal(Long id, String name, String username, String email, 
                        String password, Collection<? extends GrantedAuthority> authorities,
                        boolean enabled, boolean accountNonExpired, 
                        boolean accountNonLocked, boolean credentialsNonExpired) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
        this.enabled = enabled;
        this.accountNonExpired = accountNonExpired;
        this.accountNonLocked = accountNonLocked;
        this.credentialsNonExpired = credentialsNonExpired;
    }
    
    public static UserPrincipal create(User user) {
        List<GrantedAuthority> authorities = user.getRoles().stream()
            .map(role -> new SimpleGrantedAuthority("ROLE_" + role.getName()))
            .collect(Collectors.toList());
        
        // Add individual permissions
        user.getRoles().stream()
            .flatMap(role -> role.getPermissions().stream())
            .forEach(permission -> authorities.add(new SimpleGrantedAuthority(permission.getName())));
        
        return new UserPrincipal(
            user.getId(),
            user.getName(),
            user.getEmail(),
            user.getEmail(),
            user.getPassword(),
            authorities,
            user.getEnabled(),
            true, // accountNonExpired
            !user.getLocked(),
            true  // credentialsNonExpired
        );
    }
    
    // UserDetails interface methods
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }
    
    @Override
    public String getPassword() {
        return password;
    }
    
    @Override
    public String getUsername() {
        return username;
    }
    
    @Override
    public boolean isAccountNonExpired() {
        return accountNonExpired;
    }
    
    @Override
    public boolean isAccountNonLocked() {
        return accountNonLocked;
    }
    
    @Override
    public boolean isCredentialsNonExpired() {
        return credentialsNonExpired;
    }
    
    @Override
    public boolean isEnabled() {
        return enabled;
    }
    
    // Additional getters
    public Long getId() { return id; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserPrincipal that = (UserPrincipal) o;
        return Objects.equals(id, that.id);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

// JWT Utility Class
@Component
public class JwtTokenUtil {
    
    private static final String SECRET = "mySecretKey";
    private static final int JWT_TOKEN_VALIDITY = 5 * 60 * 60; // 5 hours
    
    private Key getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET);
        return Keys.hmacShaKeyFor(keyBytes);
    }
    
    // Retrieve username from JWT token
    public String getUsernameFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }
    
    // Retrieve expiration date from JWT token
    public Date getExpirationDateFromToken(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }
    
    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }
    
    // Retrieve any information from token using secret key
    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parserBuilder()
            .setSigningKey(getSigningKey())
            .build()
            .parseClaimsJws(token)
            .getBody();
    }
    
    // Check if the token has expired
    private Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }
    
    // Generate token for user
    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        
        // Add custom claims
        if (userDetails instanceof UserPrincipal) {
            UserPrincipal userPrincipal = (UserPrincipal) userDetails;
            claims.put("id", userPrincipal.getId());
            claims.put("name", userPrincipal.getName());
            claims.put("email", userPrincipal.getEmail());
            claims.put("authorities", userPrincipal.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList()));
        }
        
        return createToken(claims, userDetails.getUsername());
    }
    
    // Create token with claims and subject
    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
            .setClaims(claims)
            .setSubject(subject)
            .setIssuedAt(new Date(System.currentTimeMillis()))
            .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
            .signWith(getSigningKey(), SignatureAlgorithm.HS512)
            .compact();
    }
    
    // Validate token
    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = getUsernameFromToken(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
    
    // Extract token from request header
    public String getTokenFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}

// JWT Authentication Filter
@Component
public class JwtRequestFilter extends OncePerRequestFilter {
    
    private final CustomUserDetailsService userDetailsService;
    private final JwtTokenUtil jwtTokenUtil;
    
    public JwtRequestFilter(CustomUserDetailsService userDetailsService,
                           JwtTokenUtil jwtTokenUtil) {
        this.userDetailsService = userDetailsService;
        this.jwtTokenUtil = jwtTokenUtil;
    }
    
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                   HttpServletResponse response,
                                   FilterChain chain) throws ServletException, IOException {
        
        final String requestTokenHeader = request.getHeader("Authorization");
        
        String username = null;
        String jwtToken = null;
        
        // JWT Token is in the form "Bearer token"
        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);
            try {
                username = jwtTokenUtil.getUsernameFromToken(jwtToken);
            } catch (IllegalArgumentException e) {
                logger.error("Unable to get JWT Token");
            } catch (ExpiredJwtException e) {
                logger.error("JWT Token has expired");
            } catch (MalformedJwtException e) {
                logger.error("JWT Token is malformed");
            } catch (UnsupportedJwtException e) {
                logger.error("JWT Token is unsupported");
            } catch (SignatureException e) {
                logger.error("JWT signature does not match");
            }
        } else {
            logger.warn("JWT Token does not begin with Bearer String");
        }
        
        // Validate token and set authentication
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
            
            if (jwtTokenUtil.validateToken(jwtToken, userDetails)) {
                UsernamePasswordAuthenticationToken authToken =
                    new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        
        chain.doFilter(request, response);
    }
}

// JWT Authentication Entry Point
@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
    
    private static final Logger logger = LoggerFactory.getLogger(JwtAuthenticationEntryPoint.class);
    
    @Override
    public void commence(HttpServletRequest request,
                        HttpServletResponse response,
                        AuthenticationException authException) throws IOException {
        
        logger.error("Unauthorized error: {}", authException.getMessage());
        
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        
        final Map<String, Object> body = new HashMap<>();
        body.put("status", HttpServletResponse.SC_UNAUTHORIZED);
        body.put("error", "Unauthorized");
        body.put("message", authException.getMessage());
        body.put("path", request.getServletPath());
        body.put("timestamp", new Date());
        
        final ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(response.getOutputStream(), body);
    }
}

// Authentication Controller
@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AuthController {
    
    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;
    private final JwtTokenUtil jwtTokenUtil;
    private final PasswordEncoder passwordEncoder;
    private final UserService userService;
    
    public AuthController(AuthenticationManager authenticationManager,
                         UserDetailsService userDetailsService,
                         JwtTokenUtil jwtTokenUtil,
                         PasswordEncoder passwordEncoder,
                         UserService userService) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.jwtTokenUtil = jwtTokenUtil;
        this.passwordEncoder = passwordEncoder;
        this.userService = userService;
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    loginRequest.getEmail(),
                    loginRequest.getPassword()
                )
            );
            
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String jwt = jwtTokenUtil.generateToken(userDetails);
            
            return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(),
                userDetails.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.toList())));
                    
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(new MessageResponse("Invalid credentials"));
        } catch (DisabledException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(new MessageResponse("Account is disabled"));
        } catch (LockedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(new MessageResponse("Account is locked"));
        }
    }
    
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        if (userService.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity.badRequest()
                .body(new MessageResponse("Email is already taken!"));
        }
        
        // Create new user account
        User user = new User(signUpRequest.getName(),
                           signUpRequest.getEmail(),
                           passwordEncoder.encode(signUpRequest.getPassword()));
        
        // Set default role
        Role userRole = roleService.findByName("USER")
            .orElseThrow(() -> new RuntimeException("User Role not found."));
        user.setRoles(Set.of(userRole));
        
        User savedUser = userService.save(user);
        
        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
    
    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(HttpServletRequest request) {
        String token = jwtTokenUtil.getTokenFromRequest(request);
        
        if (token != null && !jwtTokenUtil.isTokenExpired(token)) {
            String username = jwtTokenUtil.getUsernameFromToken(token);
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            
            if (jwtTokenUtil.validateToken(token, userDetails)) {
                String newToken = jwtTokenUtil.generateToken(userDetails);
                return ResponseEntity.ok(new JwtResponse(newToken, userDetails.getUsername(),
                    userDetails.getAuthorities().stream()
                        .map(GrantedAuthority::getAuthority)
                        .collect(Collectors.toList())));
            }
        }
        
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
            .body(new MessageResponse("Invalid or expired token"));
    }
    
    @PostMapping("/logout")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> logoutUser() {
        // In stateless JWT, logout is handled client-side by removing the token
        // For server-side logout, you would need to maintain a blacklist of tokens
        return ResponseEntity.ok(new MessageResponse("User logged out successfully!"));
    }
}

// Method-level Security Examples
@Service
@Transactional
public class SecureUserService {
    
    private final UserRepository userRepository;
    
    public SecureUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    @PreAuthorize("hasRole('ADMIN') or #id == authentication.principal.id")
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }
    
    @PreAuthorize("hasRole('USER')")
    @PostAuthorize("returnObject.email == authentication.name")
    public User getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        return userRepository.findByEmail(email)
            .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
    
    @PreAuthorize("hasRole('ADMIN') or #user.email == authentication.name")
    public User updateUser(User user) {
        return userRepository.save(user);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    
    @PreAuthorize("hasAuthority('WRITE_USERS')")
    public User createUser(User user) {
        return userRepository.save(user);
    }
}

// OAuth2 Configuration (Optional)
@Configuration
@EnableOAuth2Client
public class OAuth2Config {
    
    @Bean
    public ClientRegistrationRepository clientRegistrationRepository() {
        return new InMemoryClientRegistrationRepository(
            googleClientRegistration(),
            githubClientRegistration()
        );
    }
    
    private ClientRegistration googleClientRegistration() {
        return ClientRegistration.withRegistrationId("google")
            .clientId("your-google-client-id")
            .clientSecret("your-google-client-secret")
            .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
            .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
            .redirectUri("{baseUrl}/login/oauth2/code/{registrationId}")
            .scope("openid", "profile", "email")
            .authorizationUri("https://accounts.google.com/o/oauth2/v2/auth")
            .tokenUri("https://www.googleapis.com/oauth2/v4/token")
            .userInfoUri("https://www.googleapis.com/oauth2/v3/userinfo")
            .userNameAttributeName(IdTokenClaimNames.SUB)
            .jwkSetUri("https://www.googleapis.com/oauth2/v3/certs")
            .clientName("Google")
            .build();
    }
    
    private ClientRegistration githubClientRegistration() {
        return ClientRegistration.withRegistrationId("github")
            .clientId("your-github-client-id")
            .clientSecret("your-github-client-secret")
            .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
            .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
            .redirectUri("{baseUrl}/login/oauth2/code/{registrationId}")
            .scope("read:user")
            .authorizationUri("https://github.com/login/oauth/authorize")
            .tokenUri("https://github.com/login/oauth/access_token")
            .userInfoUri("https://api.github.com/user")
            .userNameAttributeName("id")
            .clientName("GitHub")
            .build();
    }
}

// Security Testing
@SpringBootTest
@AutoConfigureMockMvc
public class SecurityIntegrationTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    
    @MockBean
    private UserDetailsService userDetailsService;
    
    @Test
    @WithMockUser(roles = "USER")
    public void shouldAllowAccessToUserEndpoint() throws Exception {
        mockMvc.perform(get("/api/users/profile"))
            .andExpect(status().isOk());
    }
    
    @Test
    @WithMockUser(roles = "ADMIN")
    public void shouldAllowAdminAccessToAdminEndpoint() throws Exception {
        mockMvc.perform(get("/api/admin/users"))
            .andExpect(status().isOk());
    }
    
    @Test
    public void shouldRejectUnauthenticatedRequest() throws Exception {
        mockMvc.perform(get("/api/users/profile"))
            .andExpect(status().isUnauthorized());
    }
    
    @Test
    @WithMockUser(roles = "USER")
    public void shouldRejectUserAccessToAdminEndpoint() throws Exception {
        mockMvc.perform(get("/api/admin/users"))
            .andExpect(status().isForbidden());
    }
    
    @Test
    public void shouldAuthenticateWithValidCredentials() throws Exception {
        String loginJson = "{"
            + "\\"email\\": \\"user@example.com\\","
            + "\\"password\\": \\"password\\""
            + "}";
        
        mockMvc.perform(post("/api/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(loginJson))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.token").exists())
            .andExpect(jsonPath("$.username").value("user@example.com"));
    }
}
    `,
    exercise: `
      <div class="bg-gradient-to-r from-red-600 to-pink-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Exercise: Secure Banking Application
        </h1>
        <p class="mt-3 text-red-100 text-lg">Build a comprehensive security system for a banking application with authentication, authorization, and security best practices</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Setup Security Configuration
          </h2>
          
          <div class="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-blue-800 mb-2">📋 Security Requirements</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-blue-800 mb-2">Authentication</h5>
                <ul class="text-sm space-y-1">
                  <li>• JWT-based stateless authentication</li>
                  <li>• BCrypt password encoding</li>
                  <li>• Custom UserDetailsService</li>
                  <li>• Account lockout after failed attempts</li>
                  <li>• Password strength validation</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-blue-800 mb-2">Authorization</h5>
                <ul class="text-sm space-y-1">
                  <li>• Role-based access control (CUSTOMER, MANAGER, ADMIN)</li>
                  <li>• Method-level security annotations</li>
                  <li>• URL-based access restrictions</li>
                  <li>• Resource ownership validation</li>
                  <li>• Permission-based fine-grained control</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Security Configuration Template</h4>
            <pre class="text-sm">
@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
public class BankingSecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/manager/**").hasAnyRole("MANAGER", "ADMIN")
                .requestMatchers("/api/customer/**").hasAnyRole("CUSTOMER", "MANAGER", "ADMIN")
                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }
}</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Implement User Management System
          </h2>
          
          <div class="bg-green-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-green-800 mb-2">🎯 User Entities to Create</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-green-800 mb-2">User Entity</h5>
                <ul class="text-sm space-y-1">
                  <li>• id, username, email, password</li>
                  <li>• enabled, accountNonExpired, accountNonLocked</li>
                  <li>• credentialsNonExpired, failedLoginAttempts</li>
                  <li>• lastLoginDate, createdDate, modifiedDate</li>
                  <li>• Many-to-Many relationship with Role</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-green-800 mb-2">Role & Permission</h5>
                <ul class="text-sm space-y-1">
                  <li>• Role: id, name, description</li>
                  <li>• Permission: id, name, resource, action</li>
                  <li>• Role-Permission Many-to-Many relationship</li>
                  <li>• Hierarchical role structure</li>
                  <li>• Dynamic permission assignment</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 User Entity Implementation</h4>
            <pre class="text-sm">
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true, nullable = false)
    private String username;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    @Column(nullable = false)
    private String password;
    
    private boolean enabled = true;
    private boolean accountNonExpired = true;
    private boolean accountNonLocked = true;
    private boolean credentialsNonExpired = true;
    
    private int failedLoginAttempts = 0;
    private LocalDateTime lastLoginDate;
    private LocalDateTime lockTime;
    
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set&lt;Role&gt; roles = new HashSet&lt;&gt;();
    
    // Constructors, getters, setters, helper methods
}</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Banking Domain Security
          </h2>
          
          <div class="bg-purple-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-purple-800 mb-2">🏦 Banking Entities & Security</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-purple-800 mb-2">Account Management</h5>
                <ul class="text-sm space-y-1">
                  <li>• Account entity with owner validation</li>
                  <li>• Balance inquiry restrictions</li>
                  <li>• Account access based on ownership</li>
                  <li>• Manager override capabilities</li>
                  <li>• Audit trail for all operations</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-purple-800 mb-2">Transaction Security</h5>
                <ul class="text-sm space-y-1">
                  <li>• Transaction amount limits by role</li>
                  <li>• Two-factor authentication for large amounts</li>
                  <li>• Transaction approval workflow</li>
                  <li>• Fraud detection and prevention</li>
                  <li>• Real-time transaction monitoring</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-orange-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-orange-800 mb-2">🔐 Method-Level Security Examples</h4>
            <ul class="text-orange-700 space-y-2">
              <li>• <code>@PreAuthorize("hasRole('CUSTOMER') and #accountId == authentication.principal.accountId")</code></li>
              <li>• <code>@PostAuthorize("returnObject.owner.username == authentication.name")</code></li>
              <li>• <code>@PreAuthorize("hasRole('MANAGER') or (#amount &lt; 10000 and hasRole('CUSTOMER'))")</code></li>
              <li>• <code>@Secured({"ROLE_ADMIN", "ROLE_MANAGER"})</code></li>
            </ul>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Secure Service Implementation</h4>
            <pre class="text-sm">
@Service
@Transactional
public class BankingService {
    
    @PreAuthorize("hasRole('CUSTOMER') and @accountService.isOwner(#accountId, authentication.name)")
    public Account getAccountBalance(Long accountId) {
        return accountRepository.findById(accountId)
            .orElseThrow(() -> new AccountNotFoundException(accountId));
    }
    
    @PreAuthorize("hasRole('CUSTOMER') and @accountService.isOwner(#fromAccountId, authentication.name)")
    public Transaction transferMoney(Long fromAccountId, Long toAccountId,
                                   BigDecimal amount) {
        // Validate transaction limits
        if (amount.compareTo(new BigDecimal("50000")) > 0 &&
            !SecurityContextHolder.getContext().getAuthentication()
                .getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().equals("ROLE_MANAGER"))) {
            throw new TransactionLimitExceededException();
        }
        
        // Perform transfer logic
        return performTransfer(fromAccountId, toAccountId, amount);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    public void freezeAccount(Long accountId) {
        Account account = accountRepository.findById(accountId)
            .orElseThrow(() -> new AccountNotFoundException(accountId));
        account.setStatus(AccountStatus.FROZEN);
        accountRepository.save(account);
    }
}</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Advanced Security Features
          </h2>
          
          <div class="bg-orange-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-orange-800 mb-2">🚀 Advanced Security Requirements</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-orange-800 mb-2">Multi-Factor Authentication</h5>
                <ul class="text-sm space-y-1">
                  <li>• SMS-based OTP verification</li>
                  <li>• Email verification for sensitive operations</li>
                  <li>• TOTP (Time-based One-Time Password)</li>
                  <li>• Backup codes for account recovery</li>
                  <li>• Device registration and trust</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-orange-800 mb-2">Security Monitoring</h5>
                <ul class="text-sm space-y-1">
                  <li>• Failed login attempt tracking</li>
                  <li>• Suspicious activity detection</li>
                  <li>• Real-time security alerts</li>
                  <li>• IP-based access restrictions</li>
                  <li>• Session management and timeout</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-teal-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-teal-800 mb-2">🔒 Data Protection</h4>
            <ul class="text-teal-700 space-y-2">
              <li>• Encrypt sensitive data at rest (account numbers, SSN)</li>
              <li>• Implement field-level encryption for PII</li>
              <li>• Use HTTPS for all communications</li>
              <li>• Implement proper CORS configuration</li>
              <li>• Add security headers (HSTS, CSP, X-Frame-Options)</li>
              <li>• Implement rate limiting for API endpoints</li>
            </ul>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Security Monitoring Implementation</h4>
            <pre class="text-sm">
@Component
public class SecurityEventListener {
    
    private final SecurityAuditService auditService;
    private final NotificationService notificationService;
    
    @EventListener
    public void handleAuthenticationSuccess(AuthenticationSuccessEvent event) {
        String username = event.getAuthentication().getName();
        String ipAddress = getClientIpAddress();
        
        auditService.logSecurityEvent(SecurityEventType.LOGIN_SUCCESS,
                                     username, ipAddress);
        
        // Reset failed login attempts
        userService.resetFailedLoginAttempts(username);
    }
    
    @EventListener
    public void handleAuthenticationFailure(AbstractAuthenticationFailureEvent event) {
        String username = event.getAuthentication().getName();
        String ipAddress = getClientIpAddress();
        
        auditService.logSecurityEvent(SecurityEventType.LOGIN_FAILURE,
                                     username, ipAddress);
        
        // Increment failed attempts and lock if necessary
        int failedAttempts = userService.incrementFailedLoginAttempts(username);
        if (failedAttempts >= 5) {
            userService.lockAccount(username);
            notificationService.sendSecurityAlert(username,
                "Account locked due to multiple failed login attempts");
        }
    }
    
    @EventListener
    public void handleLargeTransaction(TransactionEvent event) {
        if (event.getAmount().compareTo(new BigDecimal("10000")) > 0) {
            auditService.logSecurityEvent(SecurityEventType.LARGE_TRANSACTION,
                                         event.getUsername(),
                                         "Amount: " + event.getAmount());
            
            // Trigger additional verification
            mfaService.requireAdditionalVerification(event.getUsername());
        }
    }
}</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Testing and Validation
          </h2>
          
          <div class="bg-red-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-red-800 mb-2">🧪 Security Testing Requirements</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-red-800 mb-2">Authentication Tests</h5>
                <ul class="text-sm space-y-1">
                  <li>• Valid/invalid credential scenarios</li>
                  <li>• JWT token validation and expiration</li>
                  <li>• Account lockout functionality</li>
                  <li>• Password strength validation</li>
                  <li>• Multi-factor authentication flow</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-red-800 mb-2">Authorization Tests</h5>
                <ul class="text-sm space-y-1">
                  <li>• Role-based access control</li>
                  <li>• Method-level security annotations</li>
                  <li>• Resource ownership validation</li>
                  <li>• Permission-based access</li>
                  <li>• Cross-user data access prevention</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-yellow-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-yellow-800 mb-2">🔍 Security Audit Requirements</h4>
            <ul class="text-yellow-700 space-y-2">
              <li>• Implement comprehensive audit logging</li>
              <li>• Track all financial transactions</li>
              <li>• Log authentication and authorization events</li>
              <li>• Monitor for suspicious patterns</li>
              <li>• Generate security compliance reports</li>
              <li>• Implement log integrity protection</li>
            </ul>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Security Test Examples</h4>
            <pre class="text-sm">
@SpringBootTest
@AutoConfigureMockMvc
public class BankingSecurityTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @Test
    @WithMockUser(username = "customer1", roles = "CUSTOMER")
    public void shouldAllowCustomerToAccessOwnAccount() throws Exception {
        mockMvc.perform(get("/api/customer/accounts/1"))
            .andExpect(status().isOk());
    }
    
    @Test
    @WithMockUser(username = "customer1", roles = "CUSTOMER")
    public void shouldDenyCustomerAccessToOtherAccount() throws Exception {
        mockMvc.perform(get("/api/customer/accounts/2"))
            .andExpect(status().isForbidden());
    }
    
    @Test
    @WithMockUser(username = "manager1", roles = "MANAGER")
    public void shouldAllowManagerToAccessAllAccounts() throws Exception {
        mockMvc.perform(get("/api/manager/accounts/1"))
            .andExpect(status().isOk());
    }
    
    @Test
    public void shouldRequireAuthenticationForProtectedEndpoints() throws Exception {
        mockMvc.perform(get("/api/customer/accounts/1"))
            .andExpect(status().isUnauthorized());
    }
    
    @Test
    public void shouldLockAccountAfterFailedAttempts() throws Exception {
        // Simulate 5 failed login attempts
        for (int i = 0; i < 5; i++) {
            mockMvc.perform(post("/api/auth/login")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content("{\\"username\\": \\"testuser\\", \\"password\\": \\"wrong\\"}"))
                .andExpect(status().isUnauthorized());
        }
        
        // Verify account is locked
        User user = userRepository.findByUsername("testuser").get();
        assertThat(user.isAccountNonLocked()).isFalse();
    }
}</pre>
          </div>
        </section>

        <div class="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-lg mt-8">
          <h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>
          <p class="text-red-100">
            After completing this exercise, you'll have implemented a production-ready security system with
            authentication, authorization, audit logging, fraud detection, and comprehensive testing strategies
            suitable for financial applications.
          </p>
        </div>
      </div>
    `
  }
};