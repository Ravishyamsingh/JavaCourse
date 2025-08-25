import { LessonContent } from '../../types/LessonTypes';

export const lesson_19_5: LessonContent = {
  title: 'Database Integration Project',
  type: 'lesson',
  duration: '120 min',
  module: 'Project Development',
  content: {
    overview: 'Learn to build applications with comprehensive database integration, covering advanced JPA features, database design, performance optimization, and data migration strategies.',
    objectives: [
      'Design complex database schemas with relationships',
      'Implement advanced JPA features and custom queries',
      'Optimize database performance and indexing',
      'Handle data migration and versioning',
      'Implement caching strategies for performance',
      'Create comprehensive data access layers',
      'Build reporting and analytics features'
    ],
    theory: '<div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Database Integration Project' +
      '</h1>' +
      '<p class="mt-3 text-indigo-100 text-lg">Advanced database integration and optimization techniques</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Advanced Database Design' +
      '</h2>' +
      '<p class="text-gray-700 mb-4 leading-relaxed text-lg">' +
      'Complex applications require sophisticated database designs with proper normalization, ' +
      'indexing strategies, and relationship management for optimal performance and data integrity.' +
      '</p>' +
      '<div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">' +
      '<h4 class="font-bold text-indigo-800 mb-2">🗄️ Design Principles</h4>' +
      '<ul class="text-indigo-700 space-y-1">' +
      '<li>• <strong>Normalization:</strong> Eliminate data redundancy</li>' +
      '<li>• <strong>Indexing:</strong> Optimize query performance</li>' +
      '<li>• <strong>Relationships:</strong> Maintain data integrity</li>' +
      '<li>• <strong>Constraints:</strong> Enforce business rules</li>' +
      '<li>• <strong>Partitioning:</strong> Handle large datasets</li>' +
      '<li>• <strong>Auditing:</strong> Track data changes</li>' +
      '</ul>' +
      '</div>' +
      '<div class="grid md:grid-cols-2 gap-6">' +
      '<div class="bg-green-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-green-800 mb-2">✅ JPA Advanced Features</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Entity inheritance strategies</li>' +
      '<li>• Custom query methods</li>' +
      '<li>• Native SQL queries</li>' +
      '<li>• Stored procedure calls</li>' +
      '<li>• Batch processing</li>' +
      '<li>• Lazy loading optimization</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-yellow-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-yellow-800 mb-2">🎯 Performance Optimization</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Query optimization techniques</li>' +
      '<li>• Connection pooling</li>' +
      '<li>• Caching strategies</li>' +
      '<li>• Database indexing</li>' +
      '<li>• Pagination implementation</li>' +
      '<li>• N+1 query problem solutions</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Data Migration and Versioning' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-purple-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-purple-800 mb-2">Migration Strategies</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Flyway Migration</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Version-controlled database changes</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• SQL-based migrations</li>' +
      '<li>• Version tracking</li>' +
      '<li>• Rollback capabilities</li>' +
      '<li>• Team collaboration</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Liquibase</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Database-independent migrations</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• XML/YAML/JSON formats</li>' +
      '<li>• Database abstraction</li>' +
      '<li>• Change tracking</li>' +
      '<li>• Conditional migrations</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>' +
      'Caching and Performance' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-cyan-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-cyan-800 mb-2">Caching Strategies</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-cyan-800 mb-2">Application-Level Caching</h5>' +
      '<p class="text-sm text-gray-700 mb-2">In-memory caching solutions</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Spring Cache abstraction</li>' +
      '<li>• Ehcache integration</li>' +
      '<li>• Caffeine cache</li>' +
      '<li>• Custom cache implementations</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-cyan-800 mb-2">Distributed Caching</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Scalable caching solutions</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Redis integration</li>' +
      '<li>• Hazelcast clustering</li>' +
      '<li>• Cache synchronization</li>' +
      '<li>• Cache invalidation strategies</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>' +
      'Analytics and Reporting' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-orange-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-orange-800 mb-2">Reporting Features</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Data Aggregation</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Complex SQL queries</li>' +
      '<li>• JPA Criteria API</li>' +
      '<li>• Native query optimization</li>' +
      '<li>• Stored procedures</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Report Generation</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• PDF report generation</li>' +
      '<li>• Excel export functionality</li>' +
      '<li>• Chart and graph creation</li>' +
      '<li>• Scheduled reporting</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '</div>',
    codeExample: '// Advanced Database Integration - Inventory Management System\n\n' +
      '// 1. Product Entity with Advanced JPA Features\n' +
      '@Entity\n' +
      '@Table(name = "products", indexes = {\n' +
      '    @Index(name = "idx_product_name", columnList = "name"),\n' +
      '    @Index(name = "idx_product_category", columnList = "category_id"),\n' +
      '    @Index(name = "idx_product_price", columnList = "price")\n' +
      '})\n' +
      '@EntityListeners(AuditingEntityListener.class)\n' +
      'public class Product {\n' +
      '    \n' +
      '    @Id\n' +
      '    @GeneratedValue(strategy = GenerationType.IDENTITY)\n' +
      '    private Long id;\n' +
      '    \n' +
      '    @Column(nullable = false, length = 200)\n' +
      '    private String name;\n' +
      '    \n' +
      '    @Column(columnDefinition = "TEXT")\n' +
      '    private String description;\n' +
      '    \n' +
      '    @Column(nullable = false, precision = 10, scale = 2)\n' +
      '    private BigDecimal price;\n' +
      '    \n' +
      '    @Column(nullable = false)\n' +
      '    private Integer stockQuantity;\n' +
      '    \n' +
      '    @ManyToOne(fetch = FetchType.LAZY)\n' +
      '    @JoinColumn(name = "category_id", nullable = false)\n' +
      '    private Category category;\n' +
      '    \n' +
      '    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)\n' +
      '    private List<ProductImage> images = new ArrayList<>();\n' +
      '    \n' +
      '    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)\n' +
      '    private List<StockMovement> stockMovements = new ArrayList<>();\n' +
      '    \n' +
      '    @Embedded\n' +
      '    private ProductMetadata metadata;\n' +
      '    \n' +
      '    @CreatedDate\n' +
      '    private LocalDateTime createdAt;\n' +
      '    \n' +
      '    @LastModifiedDate\n' +
      '    private LocalDateTime updatedAt;\n' +
      '    \n' +
      '    @Version\n' +
      '    private Long version;\n' +
      '    \n' +
      '    // Constructors, getters, and setters\n' +
      '    public Product() {}\n' +
      '    \n' +
      '    public Product(String name, String description, BigDecimal price, \n' +
      '                  Integer stockQuantity, Category category) {\n' +
      '        this.name = name;\n' +
      '        this.description = description;\n' +
      '        this.price = price;\n' +
      '        this.stockQuantity = stockQuantity;\n' +
      '        this.category = category;\n' +
      '        this.metadata = new ProductMetadata();\n' +
      '    }\n' +
      '    \n' +
      '    public void updateStock(Integer quantity, StockMovementType type, String reason) {\n' +
      '        StockMovement movement = new StockMovement(this, quantity, type, reason);\n' +
      '        this.stockMovements.add(movement);\n' +
      '        \n' +
      '        if (type == StockMovementType.IN) {\n' +
      '            this.stockQuantity += quantity;\n' +
      '        } else if (type == StockMovementType.OUT) {\n' +
      '            this.stockQuantity -= quantity;\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    // Getters and setters\n' +
      '    public Long getId() { return id; }\n' +
      '    public String getName() { return name; }\n' +
      '    public void setName(String name) { this.name = name; }\n' +
      '    public BigDecimal getPrice() { return price; }\n' +
      '    public void setPrice(BigDecimal price) { this.price = price; }\n' +
      '    public Integer getStockQuantity() { return stockQuantity; }\n' +
      '    public Category getCategory() { return category; }\n' +
      '    public void setCategory(Category category) { this.category = category; }\n' +
      '}\n\n' +
      '// 2. Category Entity\n' +
      '@Entity\n' +
      '@Table(name = "categories")\n' +
      'public class Category {\n' +
      '    \n' +
      '    @Id\n' +
      '    @GeneratedValue(strategy = GenerationType.IDENTITY)\n' +
      '    private Long id;\n' +
      '    \n' +
      '    @Column(nullable = false, unique = true, length = 100)\n' +
      '    private String name;\n' +
      '    \n' +
      '    @Column(length = 500)\n' +
      '    private String description;\n' +
      '    \n' +
      '    @ManyToOne(fetch = FetchType.LAZY)\n' +
      '    @JoinColumn(name = "parent_id")\n' +
      '    private Category parent;\n' +
      '    \n' +
      '    @OneToMany(mappedBy = "parent", cascade = CascadeType.ALL)\n' +
      '    private List<Category> children = new ArrayList<>();\n' +
      '    \n' +
      '    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)\n' +
      '    private List<Product> products = new ArrayList<>();\n' +
      '    \n' +
      '    // Constructors, getters, and setters\n' +
      '    public Category() {}\n' +
      '    \n' +
      '    public Category(String name, String description) {\n' +
      '        this.name = name;\n' +
      '        this.description = description;\n' +
      '    }\n' +
      '    \n' +
      '    public Long getId() { return id; }\n' +
      '    public String getName() { return name; }\n' +
      '    public void setName(String name) { this.name = name; }\n' +
      '    public List<Product> getProducts() { return products; }\n' +
      '}\n\n' +
      '// 3. Stock Movement Entity\n' +
      '@Entity\n' +
      '@Table(name = "stock_movements")\n' +
      'public class StockMovement {\n' +
      '    \n' +
      '    @Id\n' +
      '    @GeneratedValue(strategy = GenerationType.IDENTITY)\n' +
      '    private Long id;\n' +
      '    \n' +
      '    @ManyToOne(fetch = FetchType.LAZY)\n' +
      '    @JoinColumn(name = "product_id", nullable = false)\n' +
      '    private Product product;\n' +
      '    \n' +
      '    @Column(nullable = false)\n' +
      '    private Integer quantity;\n' +
      '    \n' +
      '    @Enumerated(EnumType.STRING)\n' +
      '    @Column(nullable = false)\n' +
      '    private StockMovementType type;\n' +
      '    \n' +
      '    @Column(length = 500)\n' +
      '    private String reason;\n' +
      '    \n' +
      '    @CreationTimestamp\n' +
      '    private LocalDateTime timestamp;\n' +
      '    \n' +
      '    public StockMovement() {}\n' +
      '    \n' +
      '    public StockMovement(Product product, Integer quantity, \n' +
      '                        StockMovementType type, String reason) {\n' +
      '        this.product = product;\n' +
      '        this.quantity = quantity;\n' +
      '        this.type = type;\n' +
      '        this.reason = reason;\n' +
      '    }\n' +
      '    \n' +
      '    // Getters and setters\n' +
      '    public Long getId() { return id; }\n' +
      '    public Product getProduct() { return product; }\n' +
      '    public Integer getQuantity() { return quantity; }\n' +
      '    public StockMovementType getType() { return type; }\n' +
      '    public LocalDateTime getTimestamp() { return timestamp; }\n' +
      '}\n\n' +
      'enum StockMovementType {\n' +
      '    IN, OUT, ADJUSTMENT\n' +
      '}\n\n' +
      '// 4. Embedded Class for Metadata\n' +
      '@Embeddable\n' +
      'public class ProductMetadata {\n' +
      '    \n' +
      '    @Column(name = "weight_kg")\n' +
      '    private Double weight;\n' +
      '    \n' +
      '    @Column(name = "dimensions")\n' +
      '    private String dimensions;\n' +
      '    \n' +
      '    @Column(name = "manufacturer")\n' +
      '    private String manufacturer;\n' +
      '    \n' +
      '    @Column(name = "warranty_months")\n' +
      '    private Integer warrantyMonths;\n' +
      '    \n' +
      '    // Constructors, getters, and setters\n' +
      '    public ProductMetadata() {}\n' +
      '    \n' +
      '    public Double getWeight() { return weight; }\n' +
      '    public void setWeight(Double weight) { this.weight = weight; }\n' +
      '    public String getDimensions() { return dimensions; }\n' +
      '    public void setDimensions(String dimensions) { this.dimensions = dimensions; }\n' +
      '}\n\n' +
      '// 5. Advanced Repository with Custom Queries\n' +
      '@Repository\n' +
      'public interface ProductRepository extends JpaRepository<Product, Long>, \n' +
      '                                         JpaSpecificationExecutor<Product> {\n' +
      '    \n' +
      '    // Query methods\n' +
      '    List<Product> findByCategoryName(String categoryName);\n' +
      '    \n' +
      '    List<Product> findByStockQuantityLessThan(Integer threshold);\n' +
      '    \n' +
      '    @Query("SELECT p FROM Product p WHERE p.price BETWEEN :minPrice AND :maxPrice")\n' +
      '    List<Product> findByPriceRange(@Param("minPrice") BigDecimal minPrice, \n' +
      '                                   @Param("maxPrice") BigDecimal maxPrice);\n' +
      '    \n' +
      '    @Query("SELECT p FROM Product p JOIN p.stockMovements sm " +\n' +
      '           "WHERE sm.timestamp >= :startDate GROUP BY p " +\n' +
      '           "ORDER BY SUM(CASE WHEN sm.type = \'OUT\' THEN sm.quantity ELSE 0 END) DESC")\n' +
      '    List<Product> findMostSoldProducts(@Param("startDate") LocalDateTime startDate, Pageable pageable);\n' +
      '    \n' +
      '    @Query("SELECT new com.example.dto.ProductSummary(p.id, p.name, p.stockQuantity, " +\n' +
      '           "COUNT(sm), SUM(CASE WHEN sm.type = \'OUT\' THEN sm.quantity ELSE 0 END)) " +\n' +
      '           "FROM Product p LEFT JOIN p.stockMovements sm " +\n' +
      '           "WHERE sm.timestamp >= :startDate OR sm.timestamp IS NULL " +\n' +
      '           "GROUP BY p.id, p.name, p.stockQuantity")\n' +
      '    List<ProductSummary> getProductSummary(@Param("startDate") LocalDateTime startDate);\n' +
      '    \n' +
      '    @Modifying\n' +
      '    @Query("UPDATE Product p SET p.stockQuantity = p.stockQuantity + :quantity WHERE p.id = :productId")\n' +
      '    int updateStock(@Param("productId") Long productId, @Param("quantity") Integer quantity);\n' +
      '    \n' +
      '    // Native query for complex reporting\n' +
      '    @Query(value = "SELECT c.name as category_name, " +\n' +
      '                   "COUNT(p.id) as product_count, " +\n' +
      '                   "AVG(p.price) as avg_price, " +\n' +
      '                   "SUM(p.stock_quantity) as total_stock " +\n' +
      '                   "FROM products p " +\n' +
      '                   "JOIN categories c ON p.category_id = c.id " +\n' +
      '                   "GROUP BY c.id, c.name " +\n' +
      '                   "ORDER BY product_count DESC", nativeQuery = true)\n' +
      '    List<Object[]> getCategoryStatistics();\n' +
      '}\n\n' +
      '// 6. Advanced Service with Caching\n' +
      '@Service\n' +
      '@Transactional\n' +
      '@CacheConfig(cacheNames = "products")\n' +
      'public class InventoryService {\n' +
      '    \n' +
      '    private final ProductRepository productRepository;\n' +
      '    private final CategoryRepository categoryRepository;\n' +
      '    private final StockMovementRepository stockMovementRepository;\n' +
      '    \n' +
      '    public InventoryService(ProductRepository productRepository,\n' +
      '                           CategoryRepository categoryRepository,\n' +
      '                           StockMovementRepository stockMovementRepository) {\n' +
      '        this.productRepository = productRepository;\n' +
      '        this.categoryRepository = categoryRepository;\n' +
      '        this.stockMovementRepository = stockMovementRepository;\n' +
      '    }\n' +
      '    \n' +
      '    @Cacheable(key = "#id")\n' +
      '    @Transactional(readOnly = true)\n' +
      '    public Optional<Product> getProductById(Long id) {\n' +
      '        return productRepository.findById(id);\n' +
      '    }\n' +
      '    \n' +
      '    @Cacheable(key = "\'all-products\'")\n' +
      '    @Transactional(readOnly = true)\n' +
      '    public List<Product> getAllProducts() {\n' +
      '        return productRepository.findAll();\n' +
      '    }\n' +
      '    \n' +
      '    @CacheEvict(key = "#result.id")\n' +
      '    public Product createProduct(ProductDto productDto) {\n' +
      '        Category category = categoryRepository.findById(productDto.getCategoryId())\n' +
      '                .orElseThrow(() -> new CategoryNotFoundException("Category not found"));\n' +
      '        \n' +
      '        Product product = new Product(\n' +
      '            productDto.getName(),\n' +
      '            productDto.getDescription(),\n' +
      '            productDto.getPrice(),\n' +
      '            productDto.getStockQuantity(),\n' +
      '            category\n' +
      '        );\n' +
      '        \n' +
      '        return productRepository.save(product);\n' +
      '    }\n' +
      '    \n' +
      '    @CacheEvict(key = "#id")\n' +
      '    public Product updateProduct(Long id, ProductDto productDto) {\n' +
      '        Product product = productRepository.findById(id)\n' +
      '                .orElseThrow(() -> new ProductNotFoundException("Product not found"));\n' +
      '        \n' +
      '        product.setName(productDto.getName());\n' +
      '        product.setDescription(productDto.getDescription());\n' +
      '        product.setPrice(productDto.getPrice());\n' +
      '        \n' +
      '        if (!product.getCategory().getId().equals(productDto.getCategoryId())) {\n' +
      '            Category newCategory = categoryRepository.findById(productDto.getCategoryId())\n' +
      '                    .orElseThrow(() -> new CategoryNotFoundException("Category not found"));\n' +
      '            product.setCategory(newCategory);\n' +
      '        }\n' +
      '        \n' +
      '        return productRepository.save(product);\n' +
      '    }\n' +
      '    \n' +
      '    @Transactional\n' +
      '    public void adjustStock(Long productId, Integer quantity, String reason) {\n' +
      '        Product product = productRepository.findById(productId)\n' +
      '                .orElseThrow(() -> new ProductNotFoundException("Product not found"));\n' +
      '        \n' +
      '        StockMovementType type = quantity > 0 ? StockMovementType.IN : StockMovementType.OUT;\n' +
      '        product.updateStock(Math.abs(quantity), type, reason);\n' +
      '        \n' +
      '        productRepository.save(product);\n' +
      '    }\n' +
      '    \n' +
      '    @Transactional(readOnly = true)\n' +
      '    public Page<Product> searchProducts(String keyword, String categoryName, \n' +
      '                                       BigDecimal minPrice, BigDecimal maxPrice, \n' +
      '                                       Pageable pageable) {\n' +
      '        \n' +
      '        Specification<Product> spec = Specification.where(null);\n' +
      '        \n' +
      '        if (keyword != null && !keyword.trim().isEmpty()) {\n' +
      '            spec = spec.and((root, query, cb) -> \n' +
      '                cb.or(\n' +
      '                    cb.like(cb.lower(root.get("name")), "%" + keyword.toLowerCase() + "%"),\n' +
      '                    cb.like(cb.lower(root.get("description")), "%" + keyword.toLowerCase() + "%")\n' +
      '                )\n' +
      '            );\n' +
      '        }\n' +
      '        \n' +
      '        if (categoryName != null && !categoryName.trim().isEmpty()) {\n' +
      '            spec = spec.and((root, query, cb) -> \n' +
      '                cb.equal(root.get("category").get("name"), categoryName)\n' +
      '            );\n' +
      '        }\n' +
      '        \n' +
      '        if (minPrice != null) {\n' +
      '            spec = spec.and((root, query, cb) -> \n' +
      '                cb.greaterThanOrEqualTo(root.get("price"), minPrice)\n' +
      '            );\n' +
      '        }\n' +
      '        \n' +
      '        if (maxPrice != null) {\n' +
      '            spec = spec.and((root, query, cb) -> \n' +
      '                cb.lessThanOrEqualTo(root.get("price"), maxPrice)\n' +
      '            );\n' +
      '        }\n' +
      '        \n' +
      '        return productRepository.findAll(spec, pageable);\n' +
      '    }\n' +
      '    \n' +
      '    @Transactional(readOnly = true)\n' +
      '    public List<Product> getLowStockProducts(Integer threshold) {\n' +
      '        return productRepository.findByStockQuantityLessThan(threshold);\n' +
      '    }\n' +
      '    \n' +
      '    @Transactional(readOnly = true)\n' +
      '    public List<ProductSummary> getProductSummary(LocalDateTime startDate) {\n' +
      '        return productRepository.getProductSummary(startDate);\n' +
      '    }\n' +
      '    \n' +
      '    @Transactional(readOnly = true)\n' +
      '    public List<Object[]> getCategoryStatistics() {\n' +
      '        return productRepository.getCategoryStatistics();\n' +
      '    }\n' +
      '    \n' +
      '    @CacheEvict(value = "products", allEntries = true)\n' +
      '    public void clearProductCache() {\n' +
      '        // Cache will be cleared automatically\n' +
      '    }\n' +
      '}\n\n' +
      '// 7. Data Transfer Objects\n' +
      'public class ProductDto {\n' +
      '    \n' +
      '    private String name;\n' +
      '    private String description;\n' +
      '    private BigDecimal price;\n' +
      '    private Integer stockQuantity;\n' +
      '    private Long categoryId;\n' +
      '    \n' +
      '    // Constructors\n' +
      '    public ProductDto() {}\n' +
      '    \n' +
      '    public ProductDto(String name, String description, BigDecimal price, \n' +
      '                     Integer stockQuantity, Long categoryId) {\n' +
      '        this.name = name;\n' +
      '        this.description = description;\n' +
      '        this.price = price;\n' +
      '        this.stockQuantity = stockQuantity;\n' +
      '        this.categoryId = categoryId;\n' +
      '    }\n' +
      '    \n' +
      '    // Getters and setters\n' +
      '    public String getName() { return name; }\n' +
      '    public void setName(String name) { this.name = name; }\n' +
      '    public String getDescription() { return description; }\n' +
      '    public void setDescription(String description) { this.description = description; }\n' +
      '    public BigDecimal getPrice() { return price; }\n' +
      '    public void setPrice(BigDecimal price) { this.price = price; }\n' +
      '    public Integer getStockQuantity() { return stockQuantity; }\n' +
      '    public void setStockQuantity(Integer stockQuantity) { this.stockQuantity = stockQuantity; }\n' +
      '    public Long getCategoryId() { return categoryId; }\n' +
      '    public void setCategoryId(Long categoryId) { this.categoryId = categoryId; }\n' +
      '}\n\n' +
      'public class ProductSummary {\n' +
      '    \n' +
      '    private Long id;\n' +
      '    private String name;\n' +
      '    private Integer currentStock;\n' +
      '    private Long movementCount;\n' +
      '    private Long totalSold;\n' +
      '    \n' +
      '    public ProductSummary(Long id, String name, Integer currentStock, \n' +
      '                         Long movementCount, Long totalSold) {\n' +
      '        this.id = id;\n' +
      '        this.name = name;\n' +
      '        this.currentStock = currentStock;\n' +
      '        this.movementCount = movementCount;\n' +
      '        this.totalSold = totalSold;\n' +
      '    }\n' +
      '    \n' +
      '    // Getters\n' +
      '    public Long getId() { return id; }\n' +
      '    public String getName() { return name; }\n' +
      '    public Integer getCurrentStock() { return currentStock; }\n' +
      '    public Long getMovementCount() { return movementCount; }\n' +
      '    public Long getTotalSold() { return totalSold; }\n' +
      '}\n\n' +
      '// 8. Database Configuration\n' +
      '@Configuration\n' +
      '@EnableJpaRepositories(basePackages = "com.example.repository")\n' +
      '@EnableJpaAuditing\n' +
      '@EnableCaching\n' +
      'public class DatabaseConfig {\n' +
      '    \n' +
      '    @Bean\n' +
      '    @Primary\n' +
      '    @ConfigurationProperties("spring.datasource.primary")\n' +
      '    public DataSource primaryDataSource() {\n' +
      '        return DataSourceBuilder.create().build();\n' +
      '    }\n' +
      '    \n' +
      '    @Bean\n' +
      '    @ConfigurationProperties("spring.datasource.reporting")\n' +
      '    public DataSource reportingDataSource() {\n' +
      '        return DataSourceBuilder.create().build();\n' +
      '    }\n' +
      '    \n' +
      '    @Bean\n' +
      '    public CacheManager cacheManager() {\n' +
      '        CaffeineCacheManager cacheManager = new CaffeineCacheManager();\n' +
      '        cacheManager.setCaffeine(Caffeine.newBuilder()\n' +
      '            .maximumSize(1000)\n' +
      '            .expireAfterWrite(10, TimeUnit.MINUTES)\n' +
      '            .recordStats());\n' +
      '        return cacheManager;\n' +
      '    }\n' +
      '    \n' +
      '    @Bean\n' +
      '    public PlatformTransactionManager transactionManager(EntityManagerFactory emf) {\n' +
      '        return new JpaTransactionManager(emf);\n' +
      '    }\n' +
      '}\n\n' +
      '// 9. Performance Monitoring Service\n' +
      '@Service\n' +
      'public class DatabasePerformanceService {\n' +
      '    \n' +
      '    private final EntityManager entityManager;\n' +
      '    private final MeterRegistry meterRegistry;\n' +
      '    \n' +
      '    public DatabasePerformanceService(EntityManager entityManager, \n' +
      '                                    MeterRegistry meterRegistry) {\n' +
      '        this.entityManager = entityManager;\n' +
      '        this.meterRegistry = meterRegistry;\n' +
      '    }\n' +
      '    \n' +
      '    @Transactional(readOnly = true)\n' +
      '    public List<QueryPerformanceInfo> getSlowQueries() {\n' +
      '        String sql = "SELECT sql_text, avg_timer_wait, count_star " +\n' +
      '                    "FROM performance_schema.events_statements_summary_by_digest " +\n' +
      '                    "WHERE avg_timer_wait > 1000000000 " +\n' +
      '                    "ORDER BY avg_timer_wait DESC LIMIT 10";\n' +
      '        \n' +
      '        Query query = entityManager.createNativeQuery(sql);\n' +
      '        List<Object[]> results = query.getResultList();\n' +
      '        \n' +
      '        return results.stream()\n' +
      '            .map(row -> new QueryPerformanceInfo(\n' +
      '                (String) row[0],\n' +
      '                ((Number) row[1]).longValue(),\n' +
      '                ((Number) row[2]).longValue()\n' +
      '            ))\n' +
      '            .collect(Collectors.toList());\n' +
      '    }\n' +
      '    \n' +
      '    public void recordQueryExecution(String queryName, long executionTime) {\n' +
      '        Timer.Sample sample = Timer.start(meterRegistry);\n' +
      '        sample.stop(Timer.builder("database.query.duration")\n' +
      '            .tag("query", queryName)\n' +
      '            .register(meterRegistry));\n' +
      '    }\n' +
      '}',
    exercise: 'Build a comprehensive Inventory Management System with advanced database features:\n\n' +
      '**Project Requirements:**\n' +
      '1. **Database Design:**\n' +
      '   - Create entities for Product, Category, Supplier, Customer, Order, OrderItem\n' +
      '   - Implement proper relationships and constraints\n' +
      '   - Add audit fields and versioning\n' +
      '   - Create database indexes for performance\n\n' +
      '2. **Advanced JPA Features:**\n' +
      '   - Use entity inheritance for different product types\n' +
      '   - Implement custom repository methods with Specifications\n' +
      '   - Create native queries for complex reporting\n' +
      '   - Add batch processing for bulk operations\n\n' +
      '3. **Performance Optimization:**\n' +
      '   - Implement caching with Spring Cache\n' +
      '   - Add connection pooling configuration\n' +
      '   - Optimize queries to avoid N+1 problems\n' +
      '   - Implement pagination for large datasets\n\n' +
      '4. **Data Migration:**\n' +
      '   - Set up Flyway for database versioning\n' +
      '   - Create migration scripts for schema changes\n' +
      '   - Implement data seeding for testing\n' +
      '   - Add rollback capabilities\n\n' +
      '5. **Reporting and Analytics:**\n' +
      '   - Create sales reports with aggregated data\n' +
      '   - Implement inventory level monitoring\n' +
      '   - Generate supplier performance reports\n' +
      '   - Add real-time dashboard metrics\n\n' +
      '6. **Testing:**\n' +
      '   - Write unit tests for repository methods\n' +
      '   - Create integration tests for database operations\n' +
      '   - Test performance with large datasets\n' +
      '   - Validate data integrity constraints\n\n' +
      '**Deliverables:**\n' +
      '- Complete entity model with relationships\n' +
      '- Repository layer with custom queries\n' +
      '- Service layer with caching and transactions\n' +
      '- Database migration scripts\n' +
      '- Performance monitoring implementation\n' +
      '- Comprehensive test suite\n' +
      '- Documentation for database schema and queries\n\n' +
      '**Bonus Features:**\n' +
      '- Implement database sharding for scalability\n' +
      '- Add read replicas for reporting queries\n' +
      '- Create automated backup and recovery procedures\n' +
      '- Implement database monitoring and alerting'
  }
};