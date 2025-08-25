import { LessonContent } from '../../types/LessonTypes';

export const lesson_16_5: LessonContent = {
  title: 'RESTful Web Services',
  type: 'lesson',
  duration: '60 min',
  module: 'Web Development with Java',
  content: {
    overview: 'Learn to design and implement RESTful web services following REST architectural principles with proper resource modeling, HTTP methods, and status codes.',
    objectives: [
      'Understand REST architectural principles and constraints',
      'Learn RESTful resource design and URI conventions',
      'Master HTTP methods, status codes, and headers',
      'Implement HATEOAS and versioning strategies',
      'Work with JSON and XML data formats',
      'Handle errors and implement security best practices'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          RESTful Web Services
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Architectural style for distributed hypermedia systems</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What is REST?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            REST (Representational State Transfer) is an architectural style for designing networked applications. 
            It relies on a stateless, client-server communication protocol, typically HTTP, and emphasizes 
            scalability, simplicity, and visibility of interfaces.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🎯 REST Constraints</h4>
            <ul class="text-blue-700 space-y-1">
              <li>• <strong>Client-Server:</strong> Separation of concerns between client and server</li>
              <li>• <strong>Stateless:</strong> Each request contains all information needed</li>
              <li>• <strong>Cacheable:</strong> Responses can be cached to improve performance</li>
              <li>• <strong>Uniform Interface:</strong> Standardized interface for interactions</li>
              <li>• <strong>Layered System:</strong> Architecture can be composed of layers</li>
              <li>• <strong>Code on Demand (optional):</strong> Servers can extend client functionality</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Advantages</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Scalability and performance</li>
                <li>• Simplicity and visibility</li>
                <li>• Interoperability across platforms</li>
                <li>• Loose coupling between components</li>
                <li>• Independent evolution of client and server</li>
                <li>• Caching capabilities</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">⚠️ Considerations</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Over-fetching or under-fetching data</li>
                <li>• Limited standardization beyond HTTP</li>
                <li>• Security considerations</li>
                <li>• Versioning challenges</li>
                <li>• Network latency issues</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            RESTful Resource Design
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Resource Naming Conventions</h4>
              <p class="text-green-700 mb-3">Follow REST conventions for consistent and intuitive API design:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Good Practices</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Use nouns, not verbs (e.g., /users not /getUsers)</li>
                    <li>• Use plural nouns (e.g., /users not /user)</li>
                    <li>• Use forward slashes for hierarchy (/users/123/orders)</li>
                    <li>• Use hyphens for readability (/user-profiles)</li>
                    <li>• Use lowercase letters</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Avoid These</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Don't use file extensions (/users.json)</li>
                    <li>• Don't use query parameters for CRUD (/users?create=true)</li>
                    <li>• Don't use verbs in URLs</li>
                    <li>• Don't use underscores</li>
                    <li>• Don't expose internal implementation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">HTTP Methods Mapping</h4>
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white rounded border">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="py-2 px-4 text-left">Method</th>
                      <th class="py-2 px-4 text-left">Purpose</th>
                      <th class="py-2 px-4 text-left">Idempotent</th>
                      <th class="py-2 px-4 text-left">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">GET</td>
                      <td class="py-2 px-4">Retrieve resource(s)</td>
                      <td class="py-2 px-4">Yes</td>
                      <td class="py-2 px-4">GET /users</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">POST</td>
                      <td class="py-2 px-4">Create new resource</td>
                      <td class="py-2 px-4">No</td>
                      <td class="py-2 px-4">POST /users</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">PUT</td>
                      <td class="py-2 px-4">Update entire resource</td>
                      <td class="py-2 px-4">Yes</td>
                      <td class="py-2 px-4">PUT /users/123</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">PATCH</td>
                      <td class="py-2 px-4">Partial update</td>
                      <td class="py-2 px-4">No</td>
                      <td class="py-2 px-4">PATCH /users/123</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">DELETE</td>
                      <td class="py-2 px-4">Remove resource</td>
                      <td class="py-2 px-4">Yes</td>
                      <td class="py-2 px-4">DELETE /users/123</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            HTTP Status Codes and Headers
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Common Status Codes</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">2xx Success</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <strong>200 OK:</strong> Successful GET, PUT, PATCH</li>
                    <li>• <strong>201 Created:</strong> Successful POST</li>
                    <li>• <strong>204 No Content:</strong> Successful DELETE</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">4xx Client Errors</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <strong>400 Bad Request:</strong> Invalid request</li>
                    <li>• <strong>401 Unauthorized:</strong> Authentication required</li>
                    <li>• <strong>403 Forbidden:</strong> Access denied</li>
                    <li>• <strong>404 Not Found:</strong> Resource not found</li>
                    <li>• <strong>409 Conflict:</strong> Resource conflict</li>
                    <li>• <strong>422 Unprocessable:</strong> Validation errors</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Important HTTP Headers</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-indigo-800 mb-2">Request Headers</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <strong>Accept:</strong> Desired response format</li>
                    <li>• <strong>Content-Type:</strong> Request body format</li>
                    <li>• <strong>Authorization:</strong> Authentication credentials</li>
                    <li>• <strong>If-Match/If-None-Match:</strong> Conditional requests</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-indigo-800 mb-2">Response Headers</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <strong>Content-Type:</strong> Response format</li>
                    <li>• <strong>Location:</strong> URL of created resource</li>
                    <li>• <strong>ETag:</strong> Resource version identifier</li>
                    <li>• <strong>Cache-Control:</strong> Caching directives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            HATEOAS and API Versioning
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">HATEOAS (Hypermedia)</h4>
              <p class="text-orange-700 mb-3">Hypermedia as the Engine of Application State provides navigation through the API:</p>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-orange-800 mb-2">Example Response with Links</h5>
                <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "links": [
    {
      "rel": "self",
      "href": "http://api.example.com/users/123"
    },
    {
      "rel": "orders",
      "href": "http://api.example.com/users/123/orders"
    },
    {
      "rel": "update",
      "href": "http://api.example.com/users/123",
      "method": "PUT"
    }
  ]
}</pre>
              </div>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">API Versioning Strategies</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-2">URI Versioning</h5>
                  <p class="text-sm text-gray-700 mb-2">Version in URL path</p>
                  <ul class="text-xs space-y-1">
                    <li>• http://api.example.com/v1/users</li>
                    <li>• http://api.example.com/v2/users</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-2">Header Versioning</h5>
                  <p class="text-sm text-gray-700 mb-2">Version in Accept header</p>
                  <ul class="text-xs space-y-1">
                    <li>• Accept: application/vnd.example.v1+json</li>
                    <li>• Accept: application/vnd.example.v2+json</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Data Formats and Serialization
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">JSON Best Practices</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">Good JSON Structure</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2023-01-15T10:30:00Z",
  "profile": {
    "avatar": "https://example.com/avatar.jpg",
    "bio": "Software developer"
  },
  "tags": ["developer", "java", "spring"]
}</pre>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">Error Response Format</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": {
      "email": "Invalid email format",
      "password": "Password too short"
    }
  }
}</pre>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Content Negotiation</h4>
              <p class="text-blue-700 mb-3">Support multiple data formats based on client preferences:</p>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-blue-800 mb-2">Request Headers</h5>
                <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
Accept: application/json
Accept: application/xml
Accept: text/csv

Content-Type: application/json
Content-Type: application/xml</pre>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            REST Security and Best Practices
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Security Considerations</h4>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Essential Security Measures</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Use HTTPS for all API communications</li>
                    <li>Implement proper authentication (JWT, OAuth2)</li>
                    <li>Validate and sanitize all input data</li>
                    <li>Implement rate limiting and throttling</li>
                    <li>Use appropriate HTTP status codes</li>
                    <li>Log security-relevant events</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Avoid These Practices</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Don't expose sensitive data in URLs</li>
                    <li>Don't use basic authentication without HTTPS</li>
                    <li>Don't ignore CORS configuration</li>
                    <li>Don't store session state on server</li>
                    <li>Don't use predictable resource IDs</li>
                    <li>Don't expose internal implementation details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
// REST Controller with Spring Boot
@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    // GET /api/users - Retrieve all users
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<PagedResponse<UserDto>> getAllUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "name") String sortBy) {
        
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        Page<UserDto> users = userService.findAll(pageable);
        
        PagedResponse<UserDto> response = new PagedResponse<>();
        response.setContent(users.getContent());
        response.setPage(page);
        response.setSize(size);
        response.setTotalElements(users.getTotalElements());
        response.setTotalPages(users.getTotalPages());
        
        return ResponseEntity.ok(response);
    }
    
    // GET /api/users/123 - Retrieve specific user
    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {
        return userService.findById(id)
            .map(user -> ResponseEntity.ok(new UserDto(user)))
            .orElse(ResponseEntity.notFound().build());
    }
    
    // POST /api/users - Create new user
    @PostMapping(
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<?> createUser(
            @Valid @RequestBody CreateUserRequest request,
            UriComponentsBuilder uriBuilder) {
        
        try {
            User user = userService.createUser(request);
            URI location = uriBuilder.path("/api/users/{id}")
                .buildAndExpand(user.getId()).toUri();
            
            UserDto response = new UserDto(user);
            response.addLink("self", "/api/users/" + user.getId(), "GET");
            response.addLink("update", "/api/users/" + user.getId(), "PUT");
            response.addLink("delete", "/api/users/" + user.getId(), "DELETE");
            
            return ResponseEntity.created(location).body(response);
        } catch (EmailAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                .body(new ErrorResponse("EMAIL_EXISTS", e.getMessage()));
        } catch (ValidationException e) {
            return ResponseEntity.badRequest()
                .body(new ErrorResponse("VALIDATION_ERROR", e.getMessage()));
        }
    }
    
    // PUT /api/users/123 - Update entire user
    @PutMapping(
        value = "/{id}",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<UserDto> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UpdateUserRequest request) {
        
        return userService.updateUser(id, request)
            .map(user -> {
                UserDto response = new UserDto(user);
                response.addLink("self", "/api/users/" + user.getId(), "GET");
                return ResponseEntity.ok(response);
            })
            .orElse(ResponseEntity.notFound().build());
    }
    
    // PATCH /api/users/123 - Partial update
    @PatchMapping(
        value = "/{id}",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<UserDto> partialUpdateUser(
            @PathVariable Long id,
            @RequestBody Map<String, Object> updates) {
        
        return userService.partialUpdateUser(id, updates)
            .map(user -> {
                UserDto response = new UserDto(user);
                response.addLink("self", "/api/users/" + user.getId(), "GET");
                return ResponseEntity.ok(response);
            })
            .orElse(ResponseEntity.notFound().build());
    }
    
    // DELETE /api/users/123 - Delete user
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (userService.deleteUser(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    // GET /api/users/123/orders - Get user's orders (HATEOAS)
    @GetMapping(value = "/{id}/orders", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<PagedResponse<OrderDto>> getUserOrders(
            @PathVariable Long id,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        
        Pageable pageable = PageRequest.of(page, size);
        Page<OrderDto> orders = userService.findUserOrders(id, pageable);
        
        PagedResponse<OrderDto> response = new PagedResponse<>();
        response.setContent(orders.getContent());
        response.setPage(page);
        response.setSize(size);
        response.setTotalElements(orders.getTotalElements());
        response.setTotalPages(orders.getTotalPages());
        
        // Add HATEOAS links
        response.addLink("self", "/api/users/" + id + "/orders?page=" + page + "&size=" + size, "GET");
        response.addLink("user", "/api/users/" + id, "GET");
        
        return ResponseEntity.ok(response);
    }
}

// DTOs for Data Transfer
public class UserDto {
    private Long id;
    private String name;
    private String email;
    private LocalDateTime createdAt;
    private List<Link> links = new ArrayList<>();
    
    public UserDto() {}
    
    public UserDto(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.createdAt = user.getCreatedAt();
    }
    
    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    
    public List<Link> getLinks() { return links; }
    public void setLinks(List<Link> links) { this.links = links; }
    
    public void addLink(String rel, String href, String method) {
        this.links.add(new Link(rel, href, method));
    }
}

public class Link {
    private String rel;
    private String href;
    private String method;
    
    public Link() {}
    
    public Link(String rel, String href, String method) {
        this.rel = rel;
        this.href = href;
        this.method = method;
    }
    
    // Getters and setters
    public String getRel() { return rel; }
    public void setRel(String rel) { this.rel = rel; }
    
    public String getHref() { return href; }
    public void setHref(String href) { this.href = href; }
    
    public String getMethod() { return method; }
    public void setMethod(String method) { this.method = method; }
}

public class PagedResponse<T> {
    private List<T> content;
    private int page;
    private int size;
    private long totalElements;
    private int totalPages;
    private List<Link> links = new ArrayList<>();
    
    // Getters and setters
    public List<T> getContent() { return content; }
    public void setContent(List<T> content) { this.content = content; }
    
    public int getPage() { return page; }
    public void setPage(int page) { this.page = page; }
    
    public int getSize() { return size; }
    public void setSize(int size) { this.size = size; }
    
    public long getTotalElements() { return totalElements; }
    public void setTotalElements(long totalElements) { this.totalElements = totalElements; }
    
    public int getTotalPages() { return totalPages; }
    public void setTotalPages(int totalPages) { this.totalPages = totalPages; }
    
    public List<Link> getLinks() { return links; }
    public void setLinks(List<Link> links) { this.links = links; }
    
    public void addLink(String rel, String href, String method) {
        this.links.add(new Link(rel, href, method));
    }
}

// Request DTOs for Validation
public class CreateUserRequest {
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
    private String name;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;
    
    @NotBlank(message = "Password is required")
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;
    
    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}

public class UpdateUserRequest {
    @Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
    private String name;
    
    @Email(message = "Invalid email format")
    private String email;
    
    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}

// Exception Handling with Controller Advice
@ControllerAdvice
public class RestExceptionHandler {
    
    private static final Logger logger = LoggerFactory.getLogger(RestExceptionHandler.class);
    
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFound(UserNotFoundException ex) {
        logger.warn("User not found: {}", ex.getMessage());
        ErrorResponse error = new ErrorResponse("USER_NOT_FOUND", ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
    
    @ExceptionHandler(EmailAlreadyExistsException.class)
    public ResponseEntity<ErrorResponse> handleEmailExists(EmailAlreadyExistsException ex) {
        logger.warn("Email already exists: {}", ex.getMessage());
        ErrorResponse error = new ErrorResponse("EMAIL_EXISTS", ex.getMessage());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidation(MethodArgumentNotValidException ex) {
        logger.warn("Validation error: {}", ex.getMessage());
        
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error ->
            errors.put(error.getField(), error.getDefaultMessage())
        );
        
        ErrorResponse error = new ErrorResponse("VALIDATION_ERROR", "Validation failed", errors);
        return ResponseEntity.badRequest().body(error);
    }
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGeneral(Exception ex) {
        logger.error("Unexpected error: ", ex);
        ErrorResponse error = new ErrorResponse("INTERNAL_ERROR", "An unexpected error occurred");
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
}

// Error Response DTO
public class ErrorResponse {
    private String code;
    private String message;
    private Map<String, String> details;
    private LocalDateTime timestamp;
    
    public ErrorResponse() {
        this.timestamp = LocalDateTime.now();
    }
    
    public ErrorResponse(String code, String message) {
        this();
        this.code = code;
        this.message = message;
    }
    
    public ErrorResponse(String code, String message, Map<String, String> details) {
        this(code, message);
        this.details = details;
    }
    
    // Getters and setters
    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }
    
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    
    public Map<String, String> getDetails() { return details; }
    public void setDetails(Map<String, String> details) { this.details = details; }
    
    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }
}

// Configuration for CORS and Content Negotiation
@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOrigins("http://localhost:3000", "https://myapp.com")
            .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
            .allowedHeaders("*")
            .allowCredentials(true)
            .maxAge(3600);
    }
    
    @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        configurer
            .favorParameter(false)
            .favorPathExtension(false)
            .ignoreAcceptHeader(false)
            .defaultContentType(MediaType.APPLICATION_JSON)
            .mediaType("json", MediaType.APPLICATION_JSON)
            .mediaType("xml", MediaType.APPLICATION_XML);
    }
}

// Custom Exceptions
public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
    
    public UserNotFoundException(Long id) {
        super("User not found with id: " + id);
    }
}

public class EmailAlreadyExistsException extends RuntimeException {
    public EmailAlreadyExistsException(String email) {
        super("User already exists with email: " + email);
    }
}

// Testing RESTful Services
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class UserControllerIntegrationTest {
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    @Autowired
    private UserRepository userRepository;
    
    @LocalServerPort
    private int port;
    
    private String baseUrl;
    
    @BeforeEach
    void setUp() {
        baseUrl = "http://localhost:" + port + "/api/users";
        userRepository.deleteAll();
    }
    
    @Test
    void shouldCreateUser() {
        CreateUserRequest request = new CreateUserRequest();
        request.setName("John Doe");
        request.setEmail("john@example.com");
        request.setPassword("password123");
        
        ResponseEntity<UserDto> response = restTemplate.postForEntity(
            baseUrl, request, UserDto.class);
        
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody().getName()).isEqualTo("John Doe");
        assertThat(response.getBody().getEmail()).isEqualTo("john@example.com");
        assertThat(response.getHeaders().getLocation()).isNotNull();
    }
    
    @Test
    void shouldGetAllUsers() {
        // Create test users
        User user1 = new User("John Doe", "john@example.com", "password");
        User user2 = new User("Jane Smith", "jane@example.com", "password");
        userRepository.saveAll(Arrays.asList(user1, user2));
        
        ResponseEntity<PagedResponse> response = restTemplate.getForEntity(
            baseUrl + "?page=0&size=10", PagedResponse.class);
        
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody().getTotalElements()).isEqualTo(2);
    }
    
    @Test
    void shouldReturnNotFoundForNonExistentUser() {
        ResponseEntity<ErrorResponse> response = restTemplate.getForEntity(
            baseUrl + "/999", ErrorResponse.class);
        
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
        assertThat(response.getBody().getCode()).isEqualTo("USER_NOT_FOUND");
    }
    
    @Test
    void shouldUpdateUser() {
        User user = userRepository.save(new User("John Doe", "john@example.com", "password"));
        
        UpdateUserRequest request = new UpdateUserRequest();
        request.setName("John Updated");
        request.setEmail("john.updated@example.com");
        
        HttpEntity<UpdateUserRequest> entity = new HttpEntity<>(request);
        ResponseEntity<UserDto> response = restTemplate.exchange(
            baseUrl + "/" + user.getId(), HttpMethod.PUT, entity, UserDto.class);
        
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody().getName()).isEqualTo("John Updated");
    }
    
    @Test
    void shouldDeleteUser() {
        User user = userRepository.save(new User("John Doe", "john@example.com", "password"));
        
        ResponseEntity<Void> response = restTemplate.exchange(
            baseUrl + "/" + user.getId(), HttpMethod.DELETE, null, Void.class);
        
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NO_CONTENT);
        assertThat(userRepository.findById(user.getId())).isEmpty();
    }
}
    `,
    exercise: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Exercise: Build a RESTful Book Management API
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Create a complete RESTful API for managing books with proper HTTP methods, status codes, and HATEOAS</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Create Book Entity and Repository
          </h2>
          
          <div class="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-blue-800 mb-2">📋 Task Requirements</h4>
            <ul class="text-blue-700 space-y-2">
              <li>• Create a Book entity with id, title, author, isbn, publishedDate, and price</li>
              <li>• Implement JPA repository with custom query methods</li>
              <li>• Add validation annotations for required fields</li>
              <li>• Create DTOs for request/response handling</li>
            </ul>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Implementation Hints</h4>
            <pre class="text-sm">
// Book Entity Structure
@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    @Size(max = 200)
    private String title;
    
    @NotBlank
    @Size(max = 100)
    private String author;
    
    @Pattern(regexp = "^\\d{3}-\\d{10}$")
    private String isbn;
    
    @Past
    private LocalDate publishedDate;
    
    @DecimalMin("0.0")
    private BigDecimal price;
    
    // constructors, getters, setters
}</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Implement RESTful Controller
          </h2>
          
          <div class="bg-green-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-green-800 mb-2">🎯 API Endpoints to Implement</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-green-800 mb-2">Basic CRUD Operations</h5>
                <ul class="text-sm space-y-1">
                  <li>• GET /api/books - List all books (with pagination)</li>
                  <li>• GET /api/books/{id} - Get specific book</li>
                  <li>• POST /api/books - Create new book</li>
                  <li>• PUT /api/books/{id} - Update entire book</li>
                  <li>• PATCH /api/books/{id} - Partial update</li>
                  <li>• DELETE /api/books/{id} - Delete book</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-green-800 mb-2">Search Operations</h5>
                <ul class="text-sm space-y-1">
                  <li>• GET /api/books/search?title=... - Search by title</li>
                  <li>• GET /api/books/author/{author} - Books by author</li>
                  <li>• GET /api/books/published/{year} - Books by year</li>
                  <li>• GET /api/books/price-range?min=...&max=... - Price range</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Controller Structure</h4>
            <pre class="text-sm">
@RestController
@RequestMapping("/api/books")
@Validated
public class BookController {
    
    @Autowired
    private BookService bookService;
    
    @GetMapping
    public ResponseEntity<PagedResponse<BookDto>> getAllBooks(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "title") String sortBy) {
        // Implementation with pagination and sorting
    }
    
    @PostMapping
    public ResponseEntity<BookDto> createBook(
            @Valid @RequestBody CreateBookRequest request,
            UriComponentsBuilder uriBuilder) {
        // Implementation with HATEOAS links
    }
    
    // Other endpoints...
}</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Add HATEOAS and Error Handling
          </h2>
          
          <div class="bg-purple-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-purple-800 mb-2">🔗 HATEOAS Implementation</h4>
            <ul class="text-purple-700 space-y-2">
              <li>• Add self, update, delete links to book responses</li>
              <li>• Include navigation links for collections (first, last, next, prev)</li>
              <li>• Add related resource links (author books, similar books)</li>
              <li>• Implement conditional links based on user permissions</li>
            </ul>
          </div>
          
          <div class="bg-orange-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-orange-800 mb-2">⚠️ Error Handling Requirements</h4>
            <ul class="text-orange-700 space-y-2">
              <li>• Handle BookNotFoundException with 404 status</li>
              <li>• Handle validation errors with detailed field messages</li>
              <li>• Handle ISBN conflicts with 409 status</li>
              <li>• Implement global exception handler with @ControllerAdvice</li>
              <li>• Return consistent error response format</li>
            </ul>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 HATEOAS Response Example</h4>
            <pre class="text-sm">
{
  "id": 1,
  "title": "Spring Boot in Action",
  "author": "Craig Walls",
  "isbn": "978-1617292545",
  "publishedDate": "2015-12-01",
  "price": 39.99,
  "links": [
    {
      "rel": "self",
      "href": "http://localhost:8080/api/books/1",
      "method": "GET"
    },
    {
      "rel": "update",
      "href": "http://localhost:8080/api/books/1",
      "method": "PUT"
    },
    {
      "rel": "delete",
      "href": "http://localhost:8080/api/books/1",
      "method": "DELETE"
    },
    {
      "rel": "author-books",
      "href": "http://localhost:8080/api/books/author/Craig%20Walls",
      "method": "GET"
    }
  ]
}</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Testing and Documentation
          </h2>
          
          <div class="bg-red-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-red-800 mb-2">🧪 Testing Requirements</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-red-800 mb-2">Unit Tests</h5>
                <ul class="text-sm space-y-1">
                  <li>• Test controller methods with @WebMvcTest</li>
                  <li>• Mock service layer dependencies</li>
                  <li>• Test validation scenarios</li>
                  <li>• Test error handling paths</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-red-800 mb-2">Integration Tests</h5>
                <ul class="text-sm space-y-1">
                  <li>• Test complete HTTP request/response cycle</li>
                  <li>• Test database interactions</li>
                  <li>• Test pagination and sorting</li>
                  <li>• Test CORS configuration</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-teal-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-teal-800 mb-2">📚 API Documentation</h4>
            <ul class="text-teal-700 space-y-2">
              <li>• Add Swagger/OpenAPI annotations to controllers</li>
              <li>• Document request/response schemas</li>
              <li>• Include example requests and responses</li>
              <li>• Document error codes and their meanings</li>
              <li>• Add API versioning information</li>
            </ul>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Test Example</h4>
            <pre class="text-sm">
@Test
void shouldCreateBookWithValidData() {
    CreateBookRequest request = new CreateBookRequest();
    request.setTitle("Test Book");
    request.setAuthor("Test Author");
    request.setIsbn("978-1234567890");
    request.setPrice(new BigDecimal("29.99"));
    
    ResponseEntity<BookDto> response = restTemplate
        .postForEntity("/api/books", request, BookDto.class);
    
    assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
    assertThat(response.getBody().getTitle()).isEqualTo("Test Book");
    assertThat(response.getHeaders().getLocation()).isNotNull();
    assertThat(response.getBody().getLinks()).isNotEmpty();
}</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Bonus Challenges
          </h2>
          
          <div class="bg-indigo-50 p-4 rounded-lg">
            <h4 class="font-bold text-indigo-800 mb-2">🚀 Advanced Features</h4>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-indigo-800 mb-3">Performance & Caching</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Implement ETag support for conditional requests</li>
                  <li>Add caching headers (Cache-Control, Last-Modified)</li>
                  <li>Implement server-side caching with @Cacheable</li>
                  <li>Add compression support for responses</li>
                </ul>
              </div>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-indigo-800 mb-3">Security & Monitoring</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Add rate limiting for API endpoints</li>
                  <li>Implement API key authentication</li>
                  <li>Add request/response logging</li>
                  <li>Implement health check endpoints</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div class="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg mt-8">
          <h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>
          <p class="text-green-100">
            After completing this exercise, you'll have hands-on experience with RESTful API design principles,
            proper HTTP method usage, status code handling, HATEOAS implementation, comprehensive error handling,
            and testing strategies for web services.
          </p>
        </div>
      </div>
    `
  }
};