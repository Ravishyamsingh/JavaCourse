import { LessonContent } from '../../types/LessonTypes';

export const lesson_19_6: LessonContent = {
  title: 'REST API Development',
  type: 'lesson',
  duration: '120 min',
  module: 'Project Development',
  content: {
    overview: 'Master comprehensive REST API development including advanced Spring Boot features, API documentation, testing strategies, security implementation, and deployment best practices.',
    objectives: [
      'Design RESTful APIs following industry standards',
      'Implement advanced Spring Boot REST features',
      'Create comprehensive API documentation',
      'Implement API security and authentication',
      'Build robust error handling and validation',
      'Develop API testing strategies',
      'Deploy and monitor REST APIs in production'
    ],
    theory: '<div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'REST API Development' +
      '</h1>' +
      '<p class="mt-3 text-blue-100 text-lg">Professional REST API development and deployment</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'RESTful API Design Principles' +
      '</h2>' +
      '<p class="text-gray-700 mb-4 leading-relaxed text-lg">' +
      'Professional REST APIs follow established conventions for resource naming, HTTP methods, ' +
      'status codes, and response formats to ensure consistency and usability.' +
      '</p>' +
      '<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">' +
      '<h4 class="font-bold text-blue-800 mb-2">🎯 REST Principles</h4>' +
      '<ul class="text-blue-700 space-y-1">' +
      '<li>• <strong>Stateless:</strong> Each request contains all necessary information</li>' +
      '<li>• <strong>Resource-based:</strong> URLs represent resources, not actions</li>' +
      '<li>• <strong>HTTP Methods:</strong> Use appropriate verbs (GET, POST, PUT, DELETE)</li>' +
      '<li>• <strong>Status Codes:</strong> Meaningful HTTP response codes</li>' +
      '<li>• <strong>Content Negotiation:</strong> Support multiple formats (JSON, XML)</li>' +
      '<li>• <strong>HATEOAS:</strong> Hypermedia as the Engine of Application State</li>' +
      '</ul>' +
      '</div>' +
      '<div class="grid md:grid-cols-2 gap-6">' +
      '<div class="bg-green-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-green-800 mb-2">✅ URL Design Patterns</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• <code>/api/v1/users</code> - Collection</li>' +
      '<li>• <code>/api/v1/users/{id}</code> - Resource</li>' +
      '<li>• <code>/api/v1/users/{id}/orders</code> - Sub-collection</li>' +
      '<li>• <code>/api/v1/search/users?name=john</code> - Search</li>' +
      '<li>• <code>/api/v1/users/{id}/activate</code> - Action</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-yellow-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-yellow-800 mb-2">🔧 HTTP Methods</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• <strong>GET:</strong> Retrieve resources</li>' +
      '<li>• <strong>POST:</strong> Create new resources</li>' +
      '<li>• <strong>PUT:</strong> Update entire resource</li>' +
      '<li>• <strong>PATCH:</strong> Partial updates</li>' +
      '<li>• <strong>DELETE:</strong> Remove resources</li>' +
      '<li>• <strong>OPTIONS:</strong> Get allowed methods</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'API Documentation and Testing' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-purple-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-purple-800 mb-2">Documentation Tools</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">OpenAPI/Swagger</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Interactive API documentation</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Automatic documentation generation</li>' +
      '<li>• Interactive testing interface</li>' +
      '<li>• Schema validation</li>' +
      '<li>• Code generation support</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">API Testing</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Comprehensive testing strategies</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Unit testing with MockMvc</li>' +
      '<li>• Integration testing</li>' +
      '<li>• Contract testing</li>' +
      '<li>• Performance testing</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>' +
      'Security and Authentication' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-cyan-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-cyan-800 mb-2">Security Implementation</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-cyan-800 mb-2">Authentication Methods</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• JWT token authentication</li>' +
      '<li>• OAuth2 integration</li>' +
      '<li>• API key authentication</li>' +
      '<li>• Basic authentication</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-cyan-800 mb-2">Security Features</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Rate limiting</li>' +
      '<li>• CORS configuration</li>' +
      '<li>• Input validation</li>' +
      '<li>• SQL injection prevention</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>' +
      'Monitoring and Deployment' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-orange-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-orange-800 mb-2">Production Considerations</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Monitoring</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Health checks and metrics</li>' +
      '<li>• Logging and tracing</li>' +
      '<li>• Performance monitoring</li>' +
      '<li>• Error tracking</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Deployment</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Containerization with Docker</li>' +
      '<li>• CI/CD pipeline setup</li>' +
      '<li>• Environment configuration</li>' +
      '<li>• Load balancing</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '</div>',
    codeExample: '// Comprehensive REST API - E-commerce Product API\n\n' +
      '// 1. Product Entity\n' +
      '@Entity\n' +
      '@Table(name = "products")\n' +
      'public class Product {\n' +
      '    \n' +
      '    @Id\n' +
      '    @GeneratedValue(strategy = GenerationType.IDENTITY)\n' +
      '    private Long id;\n' +
      '    \n' +
      '    @NotBlank(message = "Product name is required")\n' +
      '    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")\n' +
      '    private String name;\n' +
      '    \n' +
      '    @Size(max = 1000, message = "Description cannot exceed 1000 characters")\n' +
      '    private String description;\n' +
      '    \n' +
      '    @NotNull(message = "Price is required")\n' +
      '    @DecimalMin(value = "0.0", inclusive = false, message = "Price must be greater than 0")\n' +
      '    @Digits(integer = 8, fraction = 2, message = "Invalid price format")\n' +
      '    private BigDecimal price;\n' +
      '    \n' +
      '    @NotNull(message = "Stock quantity is required")\n' +
      '    @Min(value = 0, message = "Stock quantity cannot be negative")\n' +
      '    private Integer stockQuantity;\n' +
      '    \n' +
      '    @NotBlank(message = "Category is required")\n' +
      '    private String category;\n' +
      '    \n' +
      '    @CreationTimestamp\n' +
      '    private LocalDateTime createdAt;\n' +
      '    \n' +
      '    @UpdateTimestamp\n' +
      '    private LocalDateTime updatedAt;\n' +
      '    \n' +
      '    // Constructors, getters, and setters\n' +
      '    public Product() {}\n' +
      '    \n' +
      '    public Product(String name, String description, BigDecimal price, \n' +
      '                  Integer stockQuantity, String category) {\n' +
      '        this.name = name;\n' +
      '        this.description = description;\n' +
      '        this.price = price;\n' +
      '        this.stockQuantity = stockQuantity;\n' +
      '        this.category = category;\n' +
      '    }\n' +
      '    \n' +
      '    // Getters and setters\n' +
      '    public Long getId() { return id; }\n' +
      '    public String getName() { return name; }\n' +
      '    public void setName(String name) { this.name = name; }\n' +
      '    public String getDescription() { return description; }\n' +
      '    public void setDescription(String description) { this.description = description; }\n' +
      '    public BigDecimal getPrice() { return price; }\n' +
      '    public void setPrice(BigDecimal price) { this.price = price; }\n' +
      '    public Integer getStockQuantity() { return stockQuantity; }\n' +
      '    public void setStockQuantity(Integer stockQuantity) { this.stockQuantity = stockQuantity; }\n' +
      '    public String getCategory() { return category; }\n' +
      '    public void setCategory(String category) { this.category = category; }\n' +
      '    public LocalDateTime getCreatedAt() { return createdAt; }\n' +
      '    public LocalDateTime getUpdatedAt() { return updatedAt; }\n' +
      '}\n\n' +
      '// 2. Product DTO Classes\n' +
      'public class ProductCreateDto {\n' +
      '    \n' +
      '    @NotBlank(message = "Product name is required")\n' +
      '    @Size(min = 2, max = 100)\n' +
      '    private String name;\n' +
      '    \n' +
      '    @Size(max = 1000)\n' +
      '    private String description;\n' +
      '    \n' +
      '    @NotNull(message = "Price is required")\n' +
      '    @DecimalMin(value = "0.0", inclusive = false)\n' +
      '    private BigDecimal price;\n' +
      '    \n' +
      '    @NotNull(message = "Stock quantity is required")\n' +
      '    @Min(value = 0)\n' +
      '    private Integer stockQuantity;\n' +
      '    \n' +
      '    @NotBlank(message = "Category is required")\n' +
      '    private String category;\n' +
      '    \n' +
      '    // Constructors, getters, and setters\n' +
      '    public ProductCreateDto() {}\n' +
      '    \n' +
      '    public String getName() { return name; }\n' +
      '    public void setName(String name) { this.name = name; }\n' +
      '    public String getDescription() { return description; }\n' +
      '    public void setDescription(String description) { this.description = description; }\n' +
      '    public BigDecimal getPrice() { return price; }\n' +
      '    public void setPrice(BigDecimal price) { this.price = price; }\n' +
      '    public Integer getStockQuantity() { return stockQuantity; }\n' +
      '    public void setStockQuantity(Integer stockQuantity) { this.stockQuantity = stockQuantity; }\n' +
      '    public String getCategory() { return category; }\n' +
      '    public void setCategory(String category) { this.category = category; }\n' +
      '}\n\n' +
      'public class ProductResponseDto {\n' +
      '    \n' +
      '    private Long id;\n' +
      '    private String name;\n' +
      '    private String description;\n' +
      '    private BigDecimal price;\n' +
      '    private Integer stockQuantity;\n' +
      '    private String category;\n' +
      '    private LocalDateTime createdAt;\n' +
      '    private LocalDateTime updatedAt;\n' +
      '    \n' +
      '    // Constructor from entity\n' +
      '    public ProductResponseDto(Product product) {\n' +
      '        this.id = product.getId();\n' +
      '        this.name = product.getName();\n' +
      '        this.description = product.getDescription();\n' +
      '        this.price = product.getPrice();\n' +
      '        this.stockQuantity = product.getStockQuantity();\n' +
      '        this.category = product.getCategory();\n' +
      '        this.createdAt = product.getCreatedAt();\n' +
      '        this.updatedAt = product.getUpdatedAt();\n' +
      '    }\n' +
      '    \n' +
      '    // Getters and setters\n' +
      '    public Long getId() { return id; }\n' +
      '    public String getName() { return name; }\n' +
      '    public BigDecimal getPrice() { return price; }\n' +
      '    public Integer getStockQuantity() { return stockQuantity; }\n' +
      '    public String getCategory() { return category; }\n' +
      '    public LocalDateTime getCreatedAt() { return createdAt; }\n' +
      '    public LocalDateTime getUpdatedAt() { return updatedAt; }\n' +
      '}\n\n' +
      '// 3. Advanced REST Controller\n' +
      '@RestController\n' +
      '@RequestMapping("/api/v1/products")\n' +
      '@Validated\n' +
      '@Tag(name = "Products", description = "Product management API")\n' +
      '@CrossOrigin(origins = {"http://localhost:3000", "https://myapp.com"})\n' +
      'public class ProductController {\n' +
      '    \n' +
      '    private final ProductService productService;\n' +
      '    private final ProductMapper productMapper;\n' +
      '    \n' +
      '    public ProductController(ProductService productService, ProductMapper productMapper) {\n' +
      '        this.productService = productService;\n' +
      '        this.productMapper = productMapper;\n' +
      '    }\n' +
      '    \n' +
      '    @GetMapping\n' +
      '    @Operation(summary = "Get all products", description = "Retrieve paginated list of products")\n' +
      '    @ApiResponses(value = {\n' +
      '        @ApiResponse(responseCode = "200", description = "Products retrieved successfully"),\n' +
      '        @ApiResponse(responseCode = "400", description = "Invalid request parameters")\n' +
      '    })\n' +
      '    public ResponseEntity<PagedResponse<ProductResponseDto>> getAllProducts(\n' +
      '            @RequestParam(defaultValue = "0") @Min(0) int page,\n' +
      '            @RequestParam(defaultValue = "10") @Min(1) @Max(100) int size,\n' +
      '            @RequestParam(defaultValue = "id") String sortBy,\n' +
      '            @RequestParam(defaultValue = "asc") String sortDir,\n' +
      '            @RequestParam(required = false) String category,\n' +
      '            @RequestParam(required = false) String search) {\n' +
      '        \n' +
      '        Sort sort = sortDir.equalsIgnoreCase("desc") ? \n' +
      '                   Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();\n' +
      '        \n' +
      '        Pageable pageable = PageRequest.of(page, size, sort);\n' +
      '        Page<Product> products = productService.findProducts(category, search, pageable);\n' +
      '        \n' +
      '        List<ProductResponseDto> productDtos = products.getContent().stream()\n' +
      '                .map(ProductResponseDto::new)\n' +
      '                .collect(Collectors.toList());\n' +
      '        \n' +
      '        PagedResponse<ProductResponseDto> response = new PagedResponse<>(\n' +
      '            productDtos,\n' +
      '            products.getNumber(),\n' +
      '            products.getSize(),\n' +
      '            products.getTotalElements(),\n' +
      '            products.getTotalPages(),\n' +
      '            products.isLast()\n' +
      '        );\n' +
      '        \n' +
      '        return ResponseEntity.ok(response);\n' +
      '    }\n' +
      '    \n' +
      '    @GetMapping("/{id}")\n' +
      '    @Operation(summary = "Get product by ID")\n' +
      '    public ResponseEntity<ProductResponseDto> getProductById(\n' +
      '            @PathVariable @Positive Long id) {\n' +
      '        \n' +
      '        Product product = productService.findById(id)\n' +
      '                .orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));\n' +
      '        \n' +
      '        return ResponseEntity.ok(new ProductResponseDto(product));\n' +
      '    }\n' +
      '    \n' +
      '    @PostMapping\n' +
      '    @Operation(summary = "Create new product")\n' +
      '    public ResponseEntity<ProductResponseDto> createProduct(\n' +
      '            @Valid @RequestBody ProductCreateDto productDto) {\n' +
      '        \n' +
      '        Product product = productMapper.toEntity(productDto);\n' +
      '        Product savedProduct = productService.save(product);\n' +
      '        \n' +
      '        URI location = ServletUriComponentsBuilder\n' +
      '                .fromCurrentRequest()\n' +
      '                .path("/{id}")\n' +
      '                .buildAndExpand(savedProduct.getId())\n' +
      '                .toUri();\n' +
      '        \n' +
      '        return ResponseEntity.created(location)\n' +
      '                .body(new ProductResponseDto(savedProduct));\n' +
      '    }\n' +
      '    \n' +
      '    @PutMapping("/{id}")\n' +
      '    @Operation(summary = "Update product")\n' +
      '    public ResponseEntity<ProductResponseDto> updateProduct(\n' +
      '            @PathVariable @Positive Long id,\n' +
      '            @Valid @RequestBody ProductCreateDto productDto) {\n' +
      '        \n' +
      '        Product existingProduct = productService.findById(id)\n' +
      '                .orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));\n' +
      '        \n' +
      '        productMapper.updateEntity(productDto, existingProduct);\n' +
      '        Product updatedProduct = productService.save(existingProduct);\n' +
      '        \n' +
      '        return ResponseEntity.ok(new ProductResponseDto(updatedProduct));\n' +
      '    }\n' +
      '    \n' +
      '    @PatchMapping("/{id}/stock")\n' +
      '    @Operation(summary = "Update product stock")\n' +
      '    public ResponseEntity<ProductResponseDto> updateStock(\n' +
      '            @PathVariable @Positive Long id,\n' +
      '            @Valid @RequestBody StockUpdateDto stockUpdate) {\n' +
      '        \n' +
      '        Product product = productService.updateStock(id, stockUpdate.getQuantity());\n' +
      '        return ResponseEntity.ok(new ProductResponseDto(product));\n' +
      '    }\n' +
      '    \n' +
      '    @DeleteMapping("/{id}")\n' +
      '    @Operation(summary = "Delete product")\n' +
      '    public ResponseEntity<Void> deleteProduct(@PathVariable @Positive Long id) {\n' +
      '        \n' +
      '        if (!productService.existsById(id)) {\n' +
      '            throw new ProductNotFoundException("Product not found with id: " + id);\n' +
      '        }\n' +
      '        \n' +
      '        productService.deleteById(id);\n' +
      '        return ResponseEntity.noContent().build();\n' +
      '    }\n' +
      '    \n' +
      '    @GetMapping("/search")\n' +
      '    @Operation(summary = "Search products")\n' +
      '    public ResponseEntity<List<ProductResponseDto>> searchProducts(\n' +
      '            @RequestParam String query,\n' +
      '            @RequestParam(defaultValue = "10") @Min(1) @Max(50) int limit) {\n' +
      '        \n' +
      '        List<Product> products = productService.searchProducts(query, limit);\n' +
      '        List<ProductResponseDto> productDtos = products.stream()\n' +
      '                .map(ProductResponseDto::new)\n' +
      '                .collect(Collectors.toList());\n' +
      '        \n' +
      '        return ResponseEntity.ok(productDtos);\n' +
      '    }\n' +
      '    \n' +
      '    @GetMapping("/categories/{category}")\n' +
      '    @Operation(summary = "Get products by category")\n' +
      '    public ResponseEntity<List<ProductResponseDto>> getProductsByCategory(\n' +
      '            @PathVariable String category) {\n' +
      '        \n' +
      '        List<Product> products = productService.findByCategory(category);\n' +
      '        List<ProductResponseDto> productDtos = products.stream()\n' +
      '                .map(ProductResponseDto::new)\n' +
      '                .collect(Collectors.toList());\n' +
      '        \n' +
      '        return ResponseEntity.ok(productDtos);\n' +
      '    }\n' +
      '}\n\n' +
      '// 4. Global Exception Handler\n' +
      '@RestControllerAdvice\n' +
      'public class GlobalExceptionHandler {\n' +
      '    \n' +
      '    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);\n' +
      '    \n' +
      '    @ExceptionHandler(ProductNotFoundException.class)\n' +
      '    public ResponseEntity<ErrorResponse> handleProductNotFound(ProductNotFoundException ex) {\n' +
      '        ErrorResponse error = new ErrorResponse(\n' +
      '            "PRODUCT_NOT_FOUND",\n' +
      '            ex.getMessage(),\n' +
      '            LocalDateTime.now()\n' +
      '        );\n' +
      '        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);\n' +
      '    }\n' +
      '    \n' +
      '    @ExceptionHandler(MethodArgumentNotValidException.class)\n' +
      '    public ResponseEntity<ValidationErrorResponse> handleValidationErrors(\n' +
      '            MethodArgumentNotValidException ex) {\n' +
      '        \n' +
      '        List<FieldError> fieldErrors = ex.getBindingResult().getFieldErrors();\n' +
      '        Map<String, String> errors = fieldErrors.stream()\n' +
      '                .collect(Collectors.toMap(\n' +
      '                    FieldError::getField,\n' +
      '                    FieldError::getDefaultMessage,\n' +
      '                    (existing, replacement) -> existing\n' +
      '                ));\n' +
      '        \n' +
      '        ValidationErrorResponse errorResponse = new ValidationErrorResponse(\n' +
      '            "VALIDATION_FAILED",\n' +
      '            "Request validation failed",\n' +
      '            errors,\n' +
      '            LocalDateTime.now()\n' +
      '        );\n' +
      '        \n' +
      '        return ResponseEntity.badRequest().body(errorResponse);\n' +
      '    }\n' +
      '    \n' +
      '    @ExceptionHandler(ConstraintViolationException.class)\n' +
      '    public ResponseEntity<ErrorResponse> handleConstraintViolation(\n' +
      '            ConstraintViolationException ex) {\n' +
      '        \n' +
      '        String message = ex.getConstraintViolations().stream()\n' +
      '                .map(ConstraintViolation::getMessage)\n' +
      '                .collect(Collectors.joining(", "));\n' +
      '        \n' +
      '        ErrorResponse error = new ErrorResponse(\n' +
      '            "CONSTRAINT_VIOLATION",\n' +
      '            message,\n' +
      '            LocalDateTime.now()\n' +
      '        );\n' +
      '        \n' +
      '        return ResponseEntity.badRequest().body(error);\n' +
      '    }\n' +
      '    \n' +
      '    @ExceptionHandler(Exception.class)\n' +
      '    public ResponseEntity<ErrorResponse> handleGenericException(Exception ex) {\n' +
      '        logger.error("Unexpected error occurred", ex);\n' +
      '        \n' +
      '        ErrorResponse error = new ErrorResponse(\n' +
      '            "INTERNAL_SERVER_ERROR",\n' +
      '            "An unexpected error occurred",\n' +
      '            LocalDateTime.now()\n' +
      '        );\n' +
      '        \n' +
      '        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);\n' +
      '    }\n' +
      '}\n\n' +
      '// 5. Error Response Classes\n' +
      'public class ErrorResponse {\n' +
      '    \n' +
      '    private String code;\n' +
      '    private String message;\n' +
      '    private LocalDateTime timestamp;\n' +
      '    \n' +
      '    public ErrorResponse(String code, String message, LocalDateTime timestamp) {\n' +
      '        this.code = code;\n' +
      '        this.message = message;\n' +
      '        this.timestamp = timestamp;\n' +
      '    }\n' +
      '    \n' +
      '    // Getters and setters\n' +
      '    public String getCode() { return code; }\n' +
      '    public String getMessage() { return message; }\n' +
      '    public LocalDateTime getTimestamp() { return timestamp; }\n' +
      '}\n\n' +
      'public class ValidationErrorResponse extends ErrorResponse {\n' +
      '    \n' +
      '    private Map<String, String> fieldErrors;\n' +
      '    \n' +
      '    public ValidationErrorResponse(String code, String message, \n' +
      '                                  Map<String, String> fieldErrors, \n' +
      '                                  LocalDateTime timestamp) {\n' +
      '        super(code, message, timestamp);\n' +
      '        this.fieldErrors = fieldErrors;\n' +
      '    }\n' +
      '    \n' +
      '    public Map<String, String> getFieldErrors() { return fieldErrors; }\n' +
      '}\n\n' +
      '// 6. Paged Response Wrapper\n' +
      'public class PagedResponse<T> {\n' +
      '    \n' +
      '    private List<T> content;\n' +
      '    private int page;\n' +
      '    private int size;\n' +
      '    private long totalElements;\n' +
      '    private int totalPages;\n' +
      '    private boolean last;\n' +
      '    \n' +
      '    public PagedResponse(List<T> content, int page, int size, \n' +
      '                        long totalElements, int totalPages, boolean last) {\n' +
      '        this.content = content;\n' +
      '        this.page = page;\n' +
      '        this.size = size;\n' +
      '        this.totalElements = totalElements;\n' +
      '        this.totalPages = totalPages;\n' +
      '        this.last = last;\n' +
      '    }\n' +
      '    \n' +
      '    // Getters and setters\n' +
      '    public List<T> getContent() { return content; }\n' +
      '    public int getPage() { return page; }\n' +
      '    public int getSize() { return size; }\n' +
      '    public long getTotalElements() { return totalElements; }\n' +
      '    public int getTotalPages() { return totalPages; }\n' +
      '    public boolean isLast() { return last; }\n' +
      '}\n\n' +
      '// 7. Security Configuration\n' +
      '@Configuration\n' +
      '@EnableWebSecurity\n' +
      '@EnableMethodSecurity\n' +
      'public class ApiSecurityConfig {\n' +
      '    \n' +
      '    @Bean\n' +
      '    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n' +
      '        http\n' +
      '            .csrf(csrf -> csrf.disable())\n' +
      '            .sessionManagement(session -> \n' +
      '                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))\n' +
      '            .authorizeHttpRequests(auth -> auth\n' +
      '                .requestMatchers("/api/v1/auth/**").permitAll()\n' +
      '                .requestMatchers(HttpMethod.GET, "/api/v1/products/**").permitAll()\n' +
      '                .requestMatchers("/swagger-ui/**", "/v3/api-docs/**").permitAll()\n' +
      '                .requestMatchers("/actuator/health").permitAll()\n' +
      '                .anyRequest().authenticated()\n' +
      '            )\n' +
      '            .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()))\n' +
      '            .exceptionHandling(ex -> ex\n' +
      '                .authenticationEntryPoint(new JwtAuthenticationEntryPoint())\n' +
      '                .accessDeniedHandler(new JwtAccessDeniedHandler())\n' +
      '            );\n' +
      '        \n' +
      '        return http.build();\n' +
      '    }\n' +
      '    \n' +
      '    @Bean\n' +
      '    public JwtDecoder jwtDecoder() {\n' +
      '        return NimbusJwtDecoder.withJwkSetUri("https://your-auth-server/.well-known/jwks.json")\n' +
      '                .build();\n' +
      '    }\n' +
      '}\n\n' +
      '// 8. API Documentation Configuration\n' +
      '@Configuration\n' +
      '@OpenAPIDefinition(\n' +
      '    info = @Info(\n' +
      '        title = "E-commerce Product API",\n' +
      '        version = "1.0",\n' +
      '        description = "REST API for product management",\n' +
      '        contact = @Contact(name = "API Support", email = "support@example.com")\n' +
      '    ),\n' +
      '    servers = {\n' +
      '        @Server(url = "http://localhost:8080", description = "Development server"),\n' +
      '        @Server(url = "https://api.example.com", description = "Production server")\n' +
      '    }\n' +
      ')\n' +
      '@SecurityScheme(\n' +
      '    name = "bearerAuth",\n' +
      '    type = SecuritySchemeType.HTTP,\n' +
      '    bearerFormat = "JWT",\n' +
      '    scheme = "bearer"\n' +
      ')\n' +
      'public class OpenApiConfig {\n' +
      '    \n' +
      '    @Bean\n' +
      '    public OpenAPI customOpenAPI() {\n' +
      '        return new OpenAPI()\n' +
      '            .components(new Components()\n' +
      '                .addSecuritySchemes("bearerAuth", \n' +
      '                    new SecurityScheme()\n' +
      '                        .type(SecurityScheme.Type.HTTP)\n' +
      '                        .scheme("bearer")\n' +
      '                        .bearerFormat("JWT")\n' +
      '                )\n' +
      '            );\n' +
      '    }\n' +
      '}\n\n' +
      '// 9. Rate Limiting Configuration\n' +
      '@Component\n' +
      'public class RateLimitingFilter implements Filter {\n' +
      '    \n' +
      '    private final RedisTemplate<String, String> redisTemplate;\n' +
      '    private static final int MAX_REQUESTS_PER_MINUTE = 60;\n' +
      '    \n' +
      '    public RateLimitingFilter(RedisTemplate<String, String> redisTemplate) {\n' +
      '        this.redisTemplate = redisTemplate;\n' +
      '    }\n' +
      '    \n' +
      '    @Override\n' +
      '    public void doFilter(ServletRequest request, ServletResponse response, \n' +
      '                        FilterChain chain) throws IOException, ServletException {\n' +
      '        \n' +
      '        HttpServletRequest httpRequest = (HttpServletRequest) request;\n' +
      '        HttpServletResponse httpResponse = (HttpServletResponse) response;\n' +
      '        \n' +
      '        String clientIp = getClientIp(httpRequest);\n' +
      '        String key = "rate_limit:" + clientIp;\n' +
      '        \n' +
      '        String currentCount = redisTemplate.opsForValue().get(key);\n' +
      '        int requestCount = currentCount != null ? Integer.parseInt(currentCount) : 0;\n' +
      '        \n' +
      '        if (requestCount >= MAX_REQUESTS_PER_MINUTE) {\n' +
      '            httpResponse.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());\n' +
      '            httpResponse.getWriter().write("Rate limit exceeded");\n' +
      '            return;\n' +
      '        }\n' +
      '        \n' +
      '        redisTemplate.opsForValue().increment(key);\n' +
      '        redisTemplate.expire(key, Duration.ofMinutes(1));\n' +
      '        \n' +
      '        chain.doFilter(request, response);\n' +
      '    }\n' +
      '    \n' +
      '    private String getClientIp(HttpServletRequest request) {\n' +
      '        String xForwardedFor = request.getHeader("X-Forwarded-For");\n' +
      '        if (xForwardedFor != null && !xForwardedFor.isEmpty()) {\n' +
      '            return xForwardedFor.split(",")[0].trim();\n' +
      '        }\n' +
      '        return request.getRemoteAddr();\n' +
      '    }\n' +
      '}',
    exercise: 'Build a comprehensive REST API for a Library Management System:\n\n' +
      '**Project Requirements:**\n' +
      '1. **API Design:**\n' +
      '   - Design RESTful endpoints for Books, Authors, Members, Loans\n' +
      '   - Implement proper HTTP methods and status codes\n' +
      '   - Create consistent URL patterns and naming conventions\n' +
      '   - Support pagination, sorting, and filtering\n\n' +
      '2. **Data Validation:**\n' +
      '   - Implement comprehensive input validation\n' +
      '   - Create custom validation annotations\n' +
      '   - Handle validation errors gracefully\n' +
      '   - Provide meaningful error messages\n\n' +
      '3. **Security Implementation:**\n' +
      '   - Implement JWT-based authentication\n' +
      '   - Add role-based authorization (ADMIN, LIBRARIAN, MEMBER)\n' +
      '   - Configure CORS for frontend integration\n' +
      '   - Implement rate limiting to prevent abuse\n\n' +
      '4. **API Documentation:**\n' +
      '   - Set up OpenAPI/Swagger documentation\n' +
      '   - Add detailed endpoint descriptions\n' +
      '   - Include request/response examples\n' +
      '   - Document authentication requirements\n\n' +
      '5. **Error Handling:**\n' +
      '   - Create global exception handler\n' +
      '   - Implement custom exception classes\n' +
      '   - Provide consistent error response format\n' +
      '   - Log errors appropriately\n\n' +
      '6. **Testing:**\n' +
      '   - Write unit tests for controllers\n' +
      '   - Create integration tests for API endpoints\n' +
      '   - Test authentication and authorization\n' +
      '   - Validate error handling scenarios\n\n' +
      '7. **Performance and Monitoring:**\n' +
      '   - Implement caching for frequently accessed data\n' +
      '   - Add metrics and health checks\n' +
      '   - Configure logging for API requests\n' +
      '   - Monitor API performance\n\n' +
      '**API Endpoints to Implement:**\n' +
      '- **Books:** GET /api/v1/books, POST /api/v1/books, PUT /api/v1/books/{id}, DELETE /api/v1/books/{id}\n' +
      '- **Authors:** GET /api/v1/authors, POST /api/v1/authors, GET /api/v1/authors/{id}/books\n' +
      '- **Members:** GET /api/v1/members, POST /api/v1/members, GET /api/v1/members/{id}/loans\n' +
      '- **Loans:** POST /api/v1/loans, PUT /api/v1/loans/{id}/return, GET /api/v1/loans/overdue\n' +
      '- **Search:** GET /api/v1/search/books?query={query}, GET /api/v1/search/authors?name={name}\n\n' +
      '**Deliverables:**\n' +
      '- Complete REST API with all endpoints\n' +
      '- Comprehensive input validation\n' +
      '- Security configuration with JWT\n' +
      '- OpenAPI documentation\n' +
      '- Global exception handling\n' +
      '- Complete test suite\n' +
      '- API performance monitoring\n' +
      '- Deployment configuration\n\n' +
      '**Bonus Features:**\n' +
      '- Implement API versioning strategy\n' +
      '- Add GraphQL endpoint alongside REST\n' +
      '- Create SDK/client libraries\n' +
      '- Implement webhook notifications\n' +
      '- Add API analytics and usage tracking'
  }
};