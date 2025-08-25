import { LessonContent } from '../../types/LessonTypes';

export const lesson_19_4: LessonContent = {
  title: 'Developing a Web Application',
  type: 'lesson',
  duration: '120 min',
  module: 'Project Development',
  content: {
    overview: 'Learn to build complete web applications using Spring Boot, covering MVC architecture, RESTful APIs, database integration, security, and frontend integration for modern web development.',
    objectives: [
      'Master Spring Boot web application development',
      'Implement MVC architecture and RESTful APIs',
      'Integrate databases with Spring Data JPA',
      'Apply security with Spring Security',
      'Create responsive frontend interfaces',
      'Handle file uploads and downloads',
      'Deploy web applications to production'
    ],
    theory: '<div class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Developing a Web Application' +
      '</h1>' +
      '<p class="mt-3 text-blue-100 text-lg">Building modern web applications with Spring Boot</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Spring Boot Web Architecture' +
      '</h2>' +
      '<p class="text-gray-700 mb-4 leading-relaxed text-lg">' +
      'Spring Boot provides a comprehensive framework for building web applications with ' +
      'embedded servers, auto-configuration, and production-ready features out of the box.' +
      '</p>' +
      '<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">' +
      '<h4 class="font-bold text-blue-800 mb-2">🏗️ MVC Components</h4>' +
      '<ul class="text-blue-700 space-y-1">' +
      '<li>• <strong>Model:</strong> Data entities and business logic</li>' +
      '<li>• <strong>View:</strong> Templates and user interface</li>' +
      '<li>• <strong>Controller:</strong> Request handling and routing</li>' +
      '<li>• <strong>Service:</strong> Business logic layer</li>' +
      '<li>• <strong>Repository:</strong> Data access layer</li>' +
      '<li>• <strong>Configuration:</strong> Application settings</li>' +
      '</ul>' +
      '</div>' +
      '<div class="grid md:grid-cols-2 gap-6">' +
      '<div class="bg-green-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-green-800 mb-2">✅ Spring Boot Features</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Auto-configuration</li>' +
      '<li>• Embedded web servers</li>' +
      '<li>• Production-ready actuators</li>' +
      '<li>• Comprehensive testing support</li>' +
      '<li>• Easy dependency management</li>' +
      '<li>• Microservices ready</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-yellow-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-yellow-800 mb-2">🎯 Best Practices</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• RESTful API design</li>' +
      '<li>• Proper error handling</li>' +
      '<li>• Input validation</li>' +
      '<li>• Security implementation</li>' +
      '<li>• Performance optimization</li>' +
      '<li>• Comprehensive testing</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'RESTful API Development' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-cyan-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-cyan-800 mb-2">REST Principles</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-cyan-800 mb-2">HTTP Methods</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Standard REST operations</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• GET - Retrieve data</li>' +
      '<li>• POST - Create new resources</li>' +
      '<li>• PUT - Update existing resources</li>' +
      '<li>• DELETE - Remove resources</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-cyan-800 mb-2">Response Codes</h5>' +
      '<p class="text-sm text-gray-700 mb-2">HTTP status codes</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• 200 OK - Success</li>' +
      '<li>• 201 Created - Resource created</li>' +
      '<li>• 400 Bad Request - Client error</li>' +
      '<li>• 404 Not Found - Resource not found</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>' +
      'Database Integration and Security' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-purple-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-purple-800 mb-2">Data Persistence</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Spring Data JPA</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Object-relational mapping</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Entity annotations</li>' +
      '<li>• Repository interfaces</li>' +
      '<li>• Query methods</li>' +
      '<li>• Transaction management</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Security Features</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Application security</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Authentication</li>' +
      '<li>• Authorization</li>' +
      '<li>• CSRF protection</li>' +
      '<li>• Session management</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>' +
      'Frontend Integration and Deployment' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-orange-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-orange-800 mb-2">Frontend Technologies</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Template Engines</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Thymeleaf for server-side rendering</li>' +
      '<li>• Mustache for logic-less templates</li>' +
      '<li>• Freemarker for complex templating</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">SPA Integration</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• React.js frontend</li>' +
      '<li>• Angular applications</li>' +
      '<li>• Vue.js integration</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '</div>',
    codeExample: '// Complete Spring Boot Web Application - Blog Platform\n\n' +
      '// 1. Main Application Class\n' +
      '@SpringBootApplication\n' +
      'public class BlogApplication {\n' +
      '    public static void main(String[] args) {\n' +
      '        SpringApplication.run(BlogApplication.class, args);\n' +
      '    }\n' +
      '}\n\n' +
      '// 2. Blog Post Entity\n' +
      '@Entity\n' +
      '@Table(name = "blog_posts")\n' +
      'public class BlogPost {\n' +
      '    \n' +
      '    @Id\n' +
      '    @GeneratedValue(strategy = GenerationType.IDENTITY)\n' +
      '    private Long id;\n' +
      '    \n' +
      '    @Column(nullable = false, length = 200)\n' +
      '    private String title;\n' +
      '    \n' +
      '    @Column(nullable = false, columnDefinition = "TEXT")\n' +
      '    private String content;\n' +
      '    \n' +
      '    @Column(nullable = false, length = 100)\n' +
      '    private String author;\n' +
      '    \n' +
      '    @Enumerated(EnumType.STRING)\n' +
      '    private PostStatus status;\n' +
      '    \n' +
      '    @ElementCollection\n' +
      '    @CollectionTable(name = "post_tags", joinColumns = @JoinColumn(name = "post_id"))\n' +
      '    @Column(name = "tag")\n' +
      '    private Set<String> tags = new HashSet<>();\n' +
      '    \n' +
      '    @CreationTimestamp\n' +
      '    private LocalDateTime createdAt;\n' +
      '    \n' +
      '    @UpdateTimestamp\n' +
      '    private LocalDateTime updatedAt;\n' +
      '    \n' +
      '    // Constructors\n' +
      '    public BlogPost() {}\n' +
      '    \n' +
      '    public BlogPost(String title, String content, String author) {\n' +
      '        this.title = title;\n' +
      '        this.content = content;\n' +
      '        this.author = author;\n' +
      '        this.status = PostStatus.DRAFT;\n' +
      '    }\n' +
      '    \n' +
      '    // Getters and setters\n' +
      '    public Long getId() { return id; }\n' +
      '    public void setId(Long id) { this.id = id; }\n' +
      '    \n' +
      '    public String getTitle() { return title; }\n' +
      '    public void setTitle(String title) { this.title = title; }\n' +
      '    \n' +
      '    public String getContent() { return content; }\n' +
      '    public void setContent(String content) { this.content = content; }\n' +
      '    \n' +
      '    public String getAuthor() { return author; }\n' +
      '    public void setAuthor(String author) { this.author = author; }\n' +
      '    \n' +
      '    public PostStatus getStatus() { return status; }\n' +
      '    public void setStatus(PostStatus status) { this.status = status; }\n' +
      '    \n' +
      '    public Set<String> getTags() { return tags; }\n' +
      '    public void setTags(Set<String> tags) { this.tags = tags; }\n' +
      '    \n' +
      '    public LocalDateTime getCreatedAt() { return createdAt; }\n' +
      '    public LocalDateTime getUpdatedAt() { return updatedAt; }\n' +
      '}\n\n' +
      'enum PostStatus {\n' +
      '    DRAFT, PUBLISHED, ARCHIVED\n' +
      '}\n\n' +
      '// 3. Repository Interface\n' +
      '@Repository\n' +
      'public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {\n' +
      '    \n' +
      '    List<BlogPost> findByStatus(PostStatus status);\n' +
      '    \n' +
      '    List<BlogPost> findByAuthor(String author);\n' +
      '    \n' +
      '    @Query("SELECT p FROM BlogPost p WHERE p.title LIKE %:keyword% OR p.content LIKE %:keyword%")\n' +
      '    List<BlogPost> findByKeyword(@Param("keyword") String keyword);\n' +
      '    \n' +
      '    @Query("SELECT p FROM BlogPost p JOIN p.tags t WHERE t = :tag")\n' +
      '    List<BlogPost> findByTag(@Param("tag") String tag);\n' +
      '    \n' +
      '    List<BlogPost> findByCreatedAtBetween(LocalDateTime start, LocalDateTime end);\n' +
      '    \n' +
      '    @Query("SELECT COUNT(p) FROM BlogPost p WHERE p.status = :status")\n' +
      '    long countByStatus(@Param("status") PostStatus status);\n' +
      '}\n\n' +
      '// 4. Service Layer\n' +
      '@Service\n' +
      '@Transactional\n' +
      'public class BlogService {\n' +
      '    \n' +
      '    private final BlogPostRepository blogPostRepository;\n' +
      '    \n' +
      '    public BlogService(BlogPostRepository blogPostRepository) {\n' +
      '        this.blogPostRepository = blogPostRepository;\n' +
      '    }\n' +
      '    \n' +
      '    public BlogPost createPost(BlogPostDto postDto) {\n' +
      '        BlogPost post = new BlogPost();\n' +
      '        post.setTitle(postDto.getTitle());\n' +
      '        post.setContent(postDto.getContent());\n' +
      '        post.setAuthor(postDto.getAuthor());\n' +
      '        post.setStatus(PostStatus.DRAFT);\n' +
      '        \n' +
      '        if (postDto.getTags() != null) {\n' +
      '            post.setTags(new HashSet<>(postDto.getTags()));\n' +
      '        }\n' +
      '        \n' +
      '        return blogPostRepository.save(post);\n' +
      '    }\n' +
      '    \n' +
      '    @Transactional(readOnly = true)\n' +
      '    public List<BlogPost> getAllPosts() {\n' +
      '        return blogPostRepository.findAll();\n' +
      '    }\n' +
      '    \n' +
      '    @Transactional(readOnly = true)\n' +
      '    public List<BlogPost> getPublishedPosts() {\n' +
      '        return blogPostRepository.findByStatus(PostStatus.PUBLISHED);\n' +
      '    }\n' +
      '    \n' +
      '    @Transactional(readOnly = true)\n' +
      '    public Optional<BlogPost> getPostById(Long id) {\n' +
      '        return blogPostRepository.findById(id);\n' +
      '    }\n' +
      '    \n' +
      '    public BlogPost updatePost(Long id, BlogPostDto postDto) {\n' +
      '        BlogPost post = blogPostRepository.findById(id)\n' +
      '                .orElseThrow(() -> new PostNotFoundException("Post not found with id: " + id));\n' +
      '        \n' +
      '        post.setTitle(postDto.getTitle());\n' +
      '        post.setContent(postDto.getContent());\n' +
      '        \n' +
      '        if (postDto.getTags() != null) {\n' +
      '            post.setTags(new HashSet<>(postDto.getTags()));\n' +
      '        }\n' +
      '        \n' +
      '        return blogPostRepository.save(post);\n' +
      '    }\n' +
      '    \n' +
      '    public void deletePost(Long id) {\n' +
      '        if (!blogPostRepository.existsById(id)) {\n' +
      '            throw new PostNotFoundException("Post not found with id: " + id);\n' +
      '        }\n' +
      '        blogPostRepository.deleteById(id);\n' +
      '    }\n' +
      '    \n' +
      '    public BlogPost publishPost(Long id) {\n' +
      '        BlogPost post = blogPostRepository.findById(id)\n' +
      '                .orElseThrow(() -> new PostNotFoundException("Post not found with id: " + id));\n' +
      '        \n' +
      '        post.setStatus(PostStatus.PUBLISHED);\n' +
      '        return blogPostRepository.save(post);\n' +
      '    }\n' +
      '    \n' +
      '    @Transactional(readOnly = true)\n' +
      '    public List<BlogPost> searchPosts(String keyword) {\n' +
      '        return blogPostRepository.findByKeyword(keyword);\n' +
      '    }\n' +
      '    \n' +
      '    @Transactional(readOnly = true)\n' +
      '    public BlogStatistics getStatistics() {\n' +
      '        long totalPosts = blogPostRepository.count();\n' +
      '        long publishedPosts = blogPostRepository.countByStatus(PostStatus.PUBLISHED);\n' +
      '        long draftPosts = blogPostRepository.countByStatus(PostStatus.DRAFT);\n' +
      '        \n' +
      '        return new BlogStatistics(totalPosts, publishedPosts, draftPosts);\n' +
      '    }\n' +
      '}\n\n' +
      '// 5. REST Controller\n' +
      '@RestController\n' +
      '@RequestMapping("/api/posts")\n' +
      '@CrossOrigin(origins = "*")\n' +
      'public class BlogController {\n' +
      '    \n' +
      '    private final BlogService blogService;\n' +
      '    \n' +
      '    public BlogController(BlogService blogService) {\n' +
      '        this.blogService = blogService;\n' +
      '    }\n' +
      '    \n' +
      '    @GetMapping\n' +
      '    public ResponseEntity<List<BlogPost>> getAllPosts(\n' +
      '            @RequestParam(defaultValue = "false") boolean publishedOnly) {\n' +
      '        \n' +
      '        List<BlogPost> posts = publishedOnly ? \n' +
      '                blogService.getPublishedPosts() : \n' +
      '                blogService.getAllPosts();\n' +
      '        \n' +
      '        return ResponseEntity.ok(posts);\n' +
      '    }\n' +
      '    \n' +
      '    @GetMapping("/{id}")\n' +
      '    public ResponseEntity<BlogPost> getPostById(@PathVariable Long id) {\n' +
      '        Optional<BlogPost> post = blogService.getPostById(id);\n' +
      '        \n' +
      '        return post.map(ResponseEntity::ok)\n' +
      '                  .orElse(ResponseEntity.notFound().build());\n' +
      '    }\n' +
      '    \n' +
      '    @PostMapping\n' +
      '    public ResponseEntity<BlogPost> createPost(@Valid @RequestBody BlogPostDto postDto) {\n' +
      '        BlogPost createdPost = blogService.createPost(postDto);\n' +
      '        \n' +
      '        return ResponseEntity.status(HttpStatus.CREATED).body(createdPost);\n' +
      '    }\n' +
      '    \n' +
      '    @PutMapping("/{id}")\n' +
      '    public ResponseEntity<BlogPost> updatePost(@PathVariable Long id, \n' +
      '                                              @Valid @RequestBody BlogPostDto postDto) {\n' +
      '        try {\n' +
      '            BlogPost updatedPost = blogService.updatePost(id, postDto);\n' +
      '            return ResponseEntity.ok(updatedPost);\n' +
      '        } catch (PostNotFoundException e) {\n' +
      '            return ResponseEntity.notFound().build();\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    @DeleteMapping("/{id}")\n' +
      '    public ResponseEntity<Void> deletePost(@PathVariable Long id) {\n' +
      '        try {\n' +
      '            blogService.deletePost(id);\n' +
      '            return ResponseEntity.noContent().build();\n' +
      '        } catch (PostNotFoundException e) {\n' +
      '            return ResponseEntity.notFound().build();\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    @PutMapping("/{id}/publish")\n' +
      '    public ResponseEntity<BlogPost> publishPost(@PathVariable Long id) {\n' +
      '        try {\n' +
      '            BlogPost publishedPost = blogService.publishPost(id);\n' +
      '            return ResponseEntity.ok(publishedPost);\n' +
      '        } catch (PostNotFoundException e) {\n' +
      '            return ResponseEntity.notFound().build();\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    @GetMapping("/search")\n' +
      '    public ResponseEntity<List<BlogPost>> searchPosts(@RequestParam String keyword) {\n' +
      '        List<BlogPost> results = blogService.searchPosts(keyword);\n' +
      '        return ResponseEntity.ok(results);\n' +
      '    }\n' +
      '    \n' +
      '    @GetMapping("/statistics")\n' +
      '    public ResponseEntity<BlogStatistics> getStatistics() {\n' +
      '        BlogStatistics stats = blogService.getStatistics();\n' +
      '        return ResponseEntity.ok(stats);\n' +
      '    }\n' +
      '}\n\n' +
      '// 6. Data Transfer Object\n' +
      'public class BlogPostDto {\n' +
      '    \n' +
      '    @NotBlank(message = "Title is required")\n' +
      '    @Size(max = 200, message = "Title must not exceed 200 characters")\n' +
      '    private String title;\n' +
      '    \n' +
      '    @NotBlank(message = "Content is required")\n' +
      '    private String content;\n' +
      '    \n' +
      '    @NotBlank(message = "Author is required")\n' +
      '    @Size(max = 100, message = "Author name must not exceed 100 characters")\n' +
      '    private String author;\n' +
      '    \n' +
      '    private List<String> tags;\n' +
      '    \n' +
      '    // Constructors\n' +
      '    public BlogPostDto() {}\n' +
      '    \n' +
      '    public BlogPostDto(String title, String content, String author) {\n' +
      '        this.title = title;\n' +
      '        this.content = content;\n' +
      '        this.author = author;\n' +
      '    }\n' +
      '    \n' +
      '    // Getters and setters\n' +
      '    public String getTitle() { return title; }\n' +
      '    public void setTitle(String title) { this.title = title; }\n' +
      '    \n' +
      '    public String getContent() { return content; }\n' +
      '    public void setContent(String content) { this.content = content; }\n' +
      '    \n' +
      '    public String getAuthor() { return author; }\n' +
      '    public void setAuthor(String author) { this.author = author; }\n' +
      '    \n' +
      '    public List<String> getTags() { return tags; }\n' +
      '    public void setTags(List<String> tags) { this.tags = tags; }\n' +
      '}\n\n' +
      '// 7. Exception Handling\n' +
      '@ResponseStatus(HttpStatus.NOT_FOUND)\n' +
      'public class PostNotFoundException extends RuntimeException {\n' +
      '    public PostNotFoundException(String message) {\n' +
      '        super(message);\n' +
      '    }\n' +
      '}\n\n' +
      '@ControllerAdvice\n' +
      'public class GlobalExceptionHandler {\n' +
      '    \n' +
      '    @ExceptionHandler(PostNotFoundException.class)\n' +
      '    public ResponseEntity<ErrorResponse> handlePostNotFound(PostNotFoundException e) {\n' +
      '        ErrorResponse error = new ErrorResponse("POST_NOT_FOUND", e.getMessage());\n' +
      '        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);\n' +
      '    }\n' +
      '    \n' +
      '    @ExceptionHandler(MethodArgumentNotValidException.class)\n' +
      '    public ResponseEntity<ErrorResponse> handleValidationErrors(MethodArgumentNotValidException e) {\n' +
      '        List<String> errors = e.getBindingResult()\n' +
      '                .getFieldErrors()\n' +
      '                .stream()\n' +
      '                .map(FieldError::getDefaultMessage)\n' +
      '                .collect(Collectors.toList());\n' +
      '        \n' +
      '        ErrorResponse error = new ErrorResponse("VALIDATION_ERROR", String.join(", ", errors));\n' +
      '        return ResponseEntity.badRequest().body(error);\n' +
      '    }\n' +
      '}\n\n' +
      '// 8. Web Controller for Thymeleaf Views\n' +
      '@Controller\n' +
      '@RequestMapping("/blog")\n' +
      'public class BlogWebController {\n' +
      '    \n' +
      '    private final BlogService blogService;\n' +
      '    \n' +
      '    public BlogWebController(BlogService blogService) {\n' +
      '        this.blogService = blogService;\n' +
      '    }\n' +
      '    \n' +
      '    @GetMapping\n' +
      '    public String listPosts(Model model) {\n' +
      '        List<BlogPost> posts = blogService.getPublishedPosts();\n' +
      '        model.addAttribute("posts", posts);\n' +
      '        model.addAttribute("statistics", blogService.getStatistics());\n' +
      '        return "blog/list";\n' +
      '    }\n' +
      '    \n' +
      '    @GetMapping("/new")\n' +
      '    public String newPostForm(Model model) {\n' +
      '        model.addAttribute("post", new BlogPostDto());\n' +
      '        return "blog/form";\n' +
      '    }\n' +
      '    \n' +
      '    @PostMapping\n' +
      '    public String createPost(@Valid @ModelAttribute BlogPostDto postDto, \n' +
      '                           BindingResult result, Model model) {\n' +
      '        if (result.hasErrors()) {\n' +
      '            return "blog/form";\n' +
      '        }\n' +
      '        \n' +
      '        blogService.createPost(postDto);\n' +
      '        return "redirect:/blog";\n' +
      '    }\n' +
      '    \n' +
      '    @GetMapping("/{id}/edit")\n' +
      '    public String editPostForm(@PathVariable Long id, Model model) {\n' +
      '        Optional<BlogPost> post = blogService.getPostById(id);\n' +
      '        if (post.isPresent()) {\n' +
      '            BlogPostDto dto = new BlogPostDto();\n' +
      '            dto.setTitle(post.get().getTitle());\n' +
      '            dto.setContent(post.get().getContent());\n' +
      '            dto.setAuthor(post.get().getAuthor());\n' +
      '            \n' +
      '            model.addAttribute("post", dto);\n' +
      '            model.addAttribute("postId", id);\n' +
      '            return "blog/form";\n' +
      '        }\n' +
      '        return "redirect:/blog";\n' +
      '    }\n' +
      '}\n\n' +
      '// 9. Supporting Classes\n' +
      'class BlogStatistics {\n' +
      '    private long totalPosts;\n' +
      '    private long publishedPosts;\n' +
      '    private long draftPosts;\n' +
      '    \n' +
      '    public BlogStatistics(long totalPosts, long publishedPosts, long draftPosts) {\n' +
      '        this.totalPosts = totalPosts;\n' +
      '        this.publishedPosts = publishedPosts;\n' +
      '        this.draftPosts = draftPosts;\n' +
      '    }\n' +
      '    \n' +
      '    // Getters\n' +
      '    public long getTotalPosts() { return totalPosts; }\n' +
      '    public long getPublishedPosts() { return publishedPosts; }\n' +
      '    public long getDraftPosts() { return draftPosts; }\n' +
      '}\n\n' +
      'class ErrorResponse {\n' +
      '    private String code;\n' +
      '    private String message;\n' +
      '    private LocalDateTime timestamp;\n' +
      '    \n' +
      '    public ErrorResponse(String code, String message) {\n' +
      '        this.code = code;\n' +
      '        this.message = message;\n' +
      '        this.timestamp = LocalDateTime.now();\n' +
      '    }\n' +
      '    \n' +
      '    // Getters\n' +
      '    public String getCode() { return code; }\n' +
      '    public String getMessage() { return message; }\n' +
      '    public LocalDateTime getTimestamp() { return timestamp; }\n' +
      '}',
    exercise: '<div class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Exercise: Build an E-commerce Web Application' +
      '</h1>' +
      '<p class="mt-3 text-blue-100 text-lg">Create a complete e-commerce platform with Spring Boot and modern frontend</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Application Requirements' +
      '</h2>' +
      '<div class="bg-blue-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-blue-800 mb-2">🛒 E-commerce Features</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-blue-800 mb-2">Core Features</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Product catalog management</li>' +
      '<li>• User registration and authentication</li>' +
      '<li>• Shopping cart functionality</li>' +
      '<li>• Order processing and tracking</li>' +
      '<li>• Payment integration</li>' +
      '<li>• Admin dashboard</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-blue-800 mb-2">Technical Stack</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Spring Boot backend</li>' +
      '<li>• Spring Security for authentication</li>' +
      '<li>• Spring Data JPA for database</li>' +
      '<li>• Thymeleaf for templates</li>' +
      '<li>• Bootstrap for styling</li>' +
      '<li>• H2/PostgreSQL database</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-gray-800 text-green-400 p-4 rounded-lg">' +
      '<h4 class="text-white mb-2">💡 Implementation Tasks</h4>' +
      '<pre class="text-sm">' +
      '1. Create Product, User, Order entities\\n' +
      '2. Implement repository interfaces\\n' +
      '3. Build service layer with business logic\\n' +
      '4. Create REST controllers for API\\n' +
      '5. Add web controllers for UI\\n' +
      '6. Implement security configuration\\n' +
      '7. Create Thymeleaf templates\\n' +
      '8. Add validation and error handling</pre>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Database Design and API Structure' +
      '</h2>' +
      '<div class="bg-cyan-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-cyan-800 mb-2">🗄️ Entity Relationships</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-cyan-800 mb-2">Core Entities</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Product (id, name, price, description)</li>' +
      '<li>• Category (id, name, description)</li>' +
      '<li>• User (id, username, email, roles)</li>' +
      '<li>• Order (id, user, items, total, status)</li>' +
      '<li>• OrderItem (order, product, quantity, price)</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-cyan-800 mb-2">API Endpoints</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• GET /api/products - List products</li>' +
      '<li>• POST /api/products - Create product</li>' +
      '<li>• GET /api/orders - List orders</li>' +
      '<li>• POST /api/orders - Create order</li>' +
      '<li>• GET /api/users/profile - User profile</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">🔧 Technical Implementation</h4>' +
      '<div class="overflow-x-auto">' +
      '<table class="min-w-full bg-white rounded border">' +
      '<thead>' +
      '<tr class="bg-gray-100">' +
      '<th class="py-2 px-4 text-left">Component</th>' +
      '<th class="py-2 px-4 text-left">Technology</th>' +
      '<th class="py-2 px-4 text-left">Purpose</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Backend API</td>' +
      '<td class="py-2 px-4">Spring Boot REST</td>' +
      '<td class="py-2 px-4">Business logic and data access</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Database</td>' +
      '<td class="py-2 px-4">Spring Data JPA</td>' +
      '<td class="py-2 px-4">Data persistence and queries</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Security</td>' +
      '<td class="py-2 px-4">Spring Security</td>' +
      '<td class="py-2 px-4">Authentication and authorization</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Frontend</td>' +
      '<td class="py-2 px-4">Thymeleaf + Bootstrap</td>' +
      '<td class="py-2 px-4">User interface and styling</td>' +
      '</tr>' +
      '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>' +
      'Testing and Deployment' +
      '</h2>' +
      '<div class="bg-purple-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-purple-800 mb-2">✅ Testing Strategy</h4>' +
      '<div class="grid md:grid-cols-3 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Unit Tests</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Service layer testing</li>' +
      '<li>• Repository testing</li>' +
      '<li>• Validation testing</li>' +
      '<li>• Business logic verification</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Integration Tests</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• API endpoint testing</li>' +
      '<li>• Database integration</li>' +
      '<li>• Security testing</li>' +
      '<li>• End-to-end workflows</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Performance</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Load testing</li>' +
      '<li>• Database performance</li>' +
      '<li>• Memory usage</li>' +
      '<li>• Response times</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-lg mt-8">' +
      '<h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>' +
      '<p class="text-blue-100">' +
      'After completing this exercise, you will have built a complete e-commerce web application ' +
      'with Spring Boot backend, database integration, security, and modern frontend interface.' +
      '</p>' +
      '</div>' +
      '</div>'
  }
};