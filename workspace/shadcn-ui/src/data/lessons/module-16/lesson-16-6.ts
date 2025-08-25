import { LessonContent } from '../../types/LessonTypes';

export const lesson_16_6: LessonContent = {
  title: 'Spring Data and Persistence',
  type: 'lesson',
  duration: '75 min',
  module: 'Web Development with Java',
  content: {
    overview: 'Master Spring Data JPA for database operations, including repositories, custom queries, transactions, and advanced persistence patterns.',
    objectives: [
      'Understand Spring Data JPA architecture and benefits',
      'Create and use Spring Data repositories',
      'Write custom queries with JPQL and native SQL',
      'Implement transaction management and isolation levels',
      'Handle entity relationships and lazy loading',
      'Optimize database performance with caching and batching'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Spring Data and Persistence
        </h1>
        <p class="mt-3 text-green-100 text-lg">Simplified data access with Spring Data JPA</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Spring Data JPA Overview
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Spring Data JPA is part of the larger Spring Data family that makes it easy to implement 
            JPA-based repositories. It eliminates boilerplate code and provides powerful query capabilities 
            through method name conventions and custom queries.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🎯 Key Features</h4>
            <ul class="text-blue-700 space-y-1">
              <li>• <strong>Repository Abstraction:</strong> Automatic implementation of common CRUD operations</li>
              <li>• <strong>Query Methods:</strong> Generate queries from method names</li>
              <li>• <strong>Custom Queries:</strong> Support for JPQL, native SQL, and Criteria API</li>
              <li>• <strong>Pagination & Sorting:</strong> Built-in support for large datasets</li>
              <li>• <strong>Auditing:</strong> Automatic tracking of creation and modification timestamps</li>
              <li>• <strong>Specifications:</strong> Dynamic query building with type safety</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Advantages</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Reduced boilerplate code</li>
                <li>• Consistent programming model</li>
                <li>• Powerful query capabilities</li>
                <li>• Built-in pagination and sorting</li>
                <li>• Transaction management integration</li>
                <li>• Caching support</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">⚠️ Considerations</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Learning curve for complex queries</li>
                <li>• Performance tuning requirements</li>
                <li>• N+1 query problems</li>
                <li>• Lazy loading exceptions</li>
                <li>• Transaction boundary management</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Entity Design and Relationships
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">JPA Entity Annotations</h4>
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white rounded border">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="py-2 px-4 text-left">Annotation</th>
                      <th class="py-2 px-4 text-left">Purpose</th>
                      <th class="py-2 px-4 text-left">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">@Entity</td>
                      <td class="py-2 px-4">Mark class as JPA entity</td>
                      <td class="py-2 px-4">@Entity public class User</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">@Table</td>
                      <td class="py-2 px-4">Specify table details</td>
                      <td class="py-2 px-4">@Table(name = "users")</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">@Id</td>
                      <td class="py-2 px-4">Primary key field</td>
                      <td class="py-2 px-4">@Id private Long id</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">@GeneratedValue</td>
                      <td class="py-2 px-4">Auto-generate primary key</td>
                      <td class="py-2 px-4">@GeneratedValue(strategy = IDENTITY)</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">@Column</td>
                      <td class="py-2 px-4">Column mapping details</td>
                      <td class="py-2 px-4">@Column(nullable = false)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Relationship Mappings</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">One-to-Many</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
@OneToMany(mappedBy = "user", 
           cascade = CascadeType.ALL,
           fetch = FetchType.LAZY)
private List&lt;Order&gt; orders;</pre>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Many-to-One</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "user_id")
private User user;</pre>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Many-to-Many</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
@ManyToMany
@JoinTable(name = "user_roles",
  joinColumns = @JoinColumn(name = "user_id"),
  inverseJoinColumns = @JoinColumn(name = "role_id"))
private Set&lt;Role&gt; roles;</pre>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">One-to-One</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
@OneToOne(cascade = CascadeType.ALL)
@JoinColumn(name = "profile_id")
private UserProfile profile;</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Spring Data Repositories
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Repository Hierarchy</h4>
              <div class="bg-white p-4 rounded border">
                <div class="space-y-3">
                  <div class="flex items-center">
                    <span class="bg-purple-600 text-white px-3 py-1 rounded text-sm font-bold mr-3">Repository&lt;T, ID&gt;</span>
                    <span class="text-gray-600">Base marker interface</span>
                  </div>
                  <div class="flex items-center ml-4">
                    <span class="bg-purple-500 text-white px-3 py-1 rounded text-sm font-bold mr-3">CrudRepository&lt;T, ID&gt;</span>
                    <span class="text-gray-600">Basic CRUD operations</span>
                  </div>
                  <div class="flex items-center ml-8">
                    <span class="bg-purple-400 text-white px-3 py-1 rounded text-sm font-bold mr-3">PagingAndSortingRepository&lt;T, ID&gt;</span>
                    <span class="text-gray-600">Pagination and sorting</span>
                  </div>
                  <div class="flex items-center ml-12">
                    <span class="bg-purple-300 text-white px-3 py-1 rounded text-sm font-bold mr-3">JpaRepository&lt;T, ID&gt;</span>
                    <span class="text-gray-600">JPA-specific operations</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Query Method Naming Conventions</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-indigo-800 mb-2">Find Methods</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <code>findByName(String name)</code></li>
                    <li>• <code>findByEmailAndActive(String email, Boolean active)</code></li>
                    <li>• <code>findByAgeGreaterThan(Integer age)</code></li>
                    <li>• <code>findByNameContainingIgnoreCase(String name)</code></li>
                    <li>• <code>findByCreatedDateBetween(Date start, Date end)</code></li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-indigo-800 mb-2">Other Operations</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <code>countByStatus(String status)</code></li>
                    <li>• <code>deleteByEmail(String email)</code></li>
                    <li>• <code>existsByUsername(String username)</code></li>
                    <li>• <code>findTop10ByOrderByCreatedDateDesc()</code></li>
                    <li>• <code>findFirstByOrderByIdAsc()</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Custom Queries and JPQL
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">JPQL Queries</h4>
              <p class="text-orange-700 mb-3">Java Persistence Query Language for object-oriented queries:</p>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-orange-800 mb-2">Basic JPQL Examples</h5>
                <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@Query("SELECT u FROM User u WHERE u.email = ?1")
User findByEmailJPQL(String email);

@Query("SELECT u FROM User u WHERE u.name LIKE %:name% AND u.active = :active")
List&lt;User&gt; findByNameContainingAndActive(@Param("name") String name, 
                                        @Param("active") Boolean active);

@Query("SELECT u FROM User u JOIN u.orders o WHERE o.total > :amount")
List&lt;User&gt; findUsersWithOrdersAbove(@Param("amount") BigDecimal amount);</pre>
              </div>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Native SQL Queries</h4>
              <p class="text-red-700 mb-3">Use database-specific SQL when needed:</p>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-red-800 mb-2">Native Query Examples</h5>
                <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@Query(value = "SELECT * FROM users u WHERE u.created_date > ?1", 
       nativeQuery = true)
List&lt;User&gt; findUsersCreatedAfter(LocalDateTime date);

@Query(value = "SELECT u.*, COUNT(o.id) as order_count " +
               "FROM users u LEFT JOIN orders o ON u.id = o.user_id " +
               "GROUP BY u.id HAVING COUNT(o.id) > :minOrders", 
       nativeQuery = true)
List&lt;Object[]&gt; findUsersWithMinimumOrders(@Param("minOrders") int minOrders);</pre>
              </div>
            </div>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Modifying Queries</h4>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-teal-800 mb-2">Update and Delete Operations</h5>
                <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@Modifying
@Query("UPDATE User u SET u.active = :active WHERE u.lastLogin < :date")
int deactivateInactiveUsers(@Param("active") Boolean active, 
                           @Param("date") LocalDateTime date);

@Modifying
@Query("DELETE FROM User u WHERE u.active = false AND u.createdDate < :date")
int deleteInactiveUsers(@Param("date") LocalDateTime date);</pre>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Transaction Management
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Transaction Annotations</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">@Transactional Options</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <strong>propagation:</strong> REQUIRED, REQUIRES_NEW, SUPPORTS</li>
                    <li>• <strong>isolation:</strong> READ_COMMITTED, REPEATABLE_READ</li>
                    <li>• <strong>readOnly:</strong> true/false for optimization</li>
                    <li>• <strong>timeout:</strong> Transaction timeout in seconds</li>
                    <li>• <strong>rollbackFor:</strong> Exception classes for rollback</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">Usage Examples</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
@Transactional(readOnly = true)
public List&lt;User&gt; findAll() {
    return userRepository.findAll();
}

@Transactional(
    propagation = Propagation.REQUIRES_NEW,
    isolation = Isolation.READ_COMMITTED,
    timeout = 30
)
public void processOrder(Order order) {
    // Complex business logic
}</pre>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Isolation Levels</h4>
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white rounded border">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="py-2 px-4 text-left">Level</th>
                      <th class="py-2 px-4 text-left">Dirty Read</th>
                      <th class="py-2 px-4 text-left">Non-Repeatable Read</th>
                      <th class="py-2 px-4 text-left">Phantom Read</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">READ_UNCOMMITTED</td>
                      <td class="py-2 px-4 text-red-600">Possible</td>
                      <td class="py-2 px-4 text-red-600">Possible</td>
                      <td class="py-2 px-4 text-red-600">Possible</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">READ_COMMITTED</td>
                      <td class="py-2 px-4 text-green-600">Prevented</td>
                      <td class="py-2 px-4 text-red-600">Possible</td>
                      <td class="py-2 px-4 text-red-600">Possible</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">REPEATABLE_READ</td>
                      <td class="py-2 px-4 text-green-600">Prevented</td>
                      <td class="py-2 px-4 text-green-600">Prevented</td>
                      <td class="py-2 px-4 text-red-600">Possible</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">SERIALIZABLE</td>
                      <td class="py-2 px-4 text-green-600">Prevented</td>
                      <td class="py-2 px-4 text-green-600">Prevented</td>
                      <td class="py-2 px-4 text-green-600">Prevented</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Performance Optimization
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Common Performance Issues</h4>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">N+1 Query Problem</h5>
                  <p class="text-sm text-gray-700 mb-2">Loading collections triggers additional queries</p>
                  <div class="bg-gray-800 text-green-400 p-2 rounded text-xs">
                    <div class="text-red-400 mb-1">// Bad - N+1 queries</div>
                    <div>List&lt;User&gt; users = userRepository.findAll();</div>
                    <div>users.forEach(u -> u.getOrders().size());</div>
                    <div class="text-green-400 mt-2 mb-1">// Good - Single query with join fetch</div>
                    <div>@Query("SELECT u FROM User u JOIN FETCH u.orders")</div>
                  </div>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Lazy Loading Exceptions</h5>
                  <p class="text-sm text-gray-700 mb-2">Accessing lazy collections outside transaction</p>
                  <div class="bg-gray-800 text-green-400 p-2 rounded text-xs">
                    <div class="text-red-400 mb-1">// Bad - LazyInitializationException</div>
                    <div>User user = userService.findById(1L);</div>
                    <div>user.getOrders().size(); // Outside transaction</div>
                    <div class="text-green-400 mt-2 mb-1">// Good - Fetch within transaction</div>
                    <div>@Transactional(readOnly = true)</div>
                    <div>public UserDto getUserWithOrders(Long id)</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Optimization Strategies</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Fetch Strategies</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Use @EntityGraph for specific queries</li>
                    <li>• JOIN FETCH in JPQL queries</li>
                    <li>• Batch fetching with @BatchSize</li>
                    <li>• Projection interfaces for read-only data</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Caching</h5>
                  <ul class="text-sm space-y-1">
                    <li>• First-level cache (EntityManager)</li>
                    <li>• Second-level cache (@Cacheable)</li>
                    <li>• Query result caching</li>
                    <li>• Cache eviction strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
// Complete Spring Data JPA Implementation Example

// Entity with Relationships and Auditing
@Entity
@Table(name = "users", indexes = {
    @Index(name = "idx_user_email", columnList = "email"),
    @Index(name = "idx_user_active", columnList = "active")
})
@EntityListeners(AuditingEntityListener.class)
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, length = 100)
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100)
    private String name;
    
    @Column(nullable = false, unique = true, length = 150)
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;
    
    @Column(nullable = false)
    private Boolean active = true;
    
    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdDate;
    
    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime lastModifiedDate;
    
    @CreatedBy
    @Column(updatable = false)
    private String createdBy;
    
    @LastModifiedBy
    private String lastModifiedBy;
    
    // One-to-Many relationship with cascade and fetch strategy
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, 
               fetch = FetchType.LAZY, orphanRemoval = true)
    @OrderBy("createdDate DESC")
    private List<Order> orders = new ArrayList<>();
    
    // Many-to-Many relationship
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();
    
    // One-to-One relationship
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, 
              fetch = FetchType.LAZY, optional = true)
    private UserProfile profile;
    
    // Constructors
    public User() {}
    
    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }
    
    // Helper methods for bidirectional relationships
    public void addOrder(Order order) {
        orders.add(order);
        order.setUser(this);
    }
    
    public void removeOrder(Order order) {
        orders.remove(order);
        order.setUser(null);
    }
    
    public void addRole(Role role) {
        roles.add(role);
        role.getUsers().add(this);
    }
    
    public void removeRole(Role role) {
        roles.remove(role);
        role.getUsers().remove(this);
    }
    
    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public Boolean getActive() { return active; }
    public void setActive(Boolean active) { this.active = active; }
    
    public LocalDateTime getCreatedDate() { return createdDate; }
    public void setCreatedDate(LocalDateTime createdDate) { this.createdDate = createdDate; }
    
    public LocalDateTime getLastModifiedDate() { return lastModifiedDate; }
    public void setLastModifiedDate(LocalDateTime lastModifiedDate) { this.lastModifiedDate = lastModifiedDate; }
    
    public String getCreatedBy() { return createdBy; }
    public void setCreatedBy(String createdBy) { this.createdBy = createdBy; }
    
    public String getLastModifiedBy() { return lastModifiedBy; }
    public void setLastModifiedBy(String lastModifiedBy) { this.lastModifiedBy = lastModifiedBy; }
    
    public List<Order> getOrders() { return orders; }
    public void setOrders(List<Order> orders) { this.orders = orders; }
    
    public Set<Role> getRoles() { return roles; }
    public void setRoles(Set<Role> roles) { this.roles = roles; }
    
    public UserProfile getProfile() { return profile; }
    public void setProfile(UserProfile profile) { this.profile = profile; }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return Objects.equals(id, user.id);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

// Order Entity
@Entity
@Table(name = "orders")
public class Order {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String orderNumber;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal total;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private OrderStatus status;
    
    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdDate;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL,
               fetch = FetchType.LAZY, orphanRemoval = true)
    private List<OrderItem> items = new ArrayList<>();
    
    // Constructors, getters, setters, helper methods
    public Order() {}
    
    public Order(String orderNumber, BigDecimal total, OrderStatus status) {
        this.orderNumber = orderNumber;
        this.total = total;
        this.status = status;
    }
    
    // Getters and setters omitted for brevity
}

// Advanced Repository Interface
@Repository
public interface UserRepository extends JpaRepository<User, Long>, JpaSpecificationExecutor<User> {
    
    // Query method examples
    Optional<User> findByEmail(String email);
    
    List<User> findByActiveTrue();
    
    List<User> findByNameContainingIgnoreCase(String name);
    
    @Query("SELECT u FROM User u WHERE u.createdDate >= :date")
    List<User> findUsersCreatedAfter(@Param("date") LocalDateTime date);
    
    @Query("SELECT u FROM User u JOIN FETCH u.orders WHERE u.id = :id")
    Optional<User> findByIdWithOrders(@Param("id") Long id);
    
    @Query("SELECT u FROM User u JOIN FETCH u.roles WHERE u.email = :email")
    Optional<User> findByEmailWithRoles(@Param("email") String email);
    
    // Native query example
    @Query(value = "SELECT u.*, COUNT(o.id) as order_count " +
                   "FROM users u LEFT JOIN orders o ON u.id = o.user_id " +
                   "WHERE u.active = true " +
                   "GROUP BY u.id " +
                   "HAVING COUNT(o.id) >= :minOrders " +
                   "ORDER BY order_count DESC",
           nativeQuery = true)
    List<Object[]> findActiveUsersWithMinimumOrders(@Param("minOrders") int minOrders);
    
    // Modifying queries
    @Modifying
    @Query("UPDATE User u SET u.active = :active WHERE u.lastModifiedDate < :date")
    int updateInactiveUsers(@Param("active") Boolean active, @Param("date") LocalDateTime date);
    
    @Modifying
    @Query("DELETE FROM User u WHERE u.active = false AND u.orders IS EMPTY")
    int deleteInactiveUsersWithoutOrders();
    
    // Pagination and sorting
    Page<User> findByActiveTrue(Pageable pageable);
    
    // Projection interface for read-only data
    @Query("SELECT u.id as id, u.name as name, u.email as email, " +
           "COUNT(o.id) as orderCount FROM User u LEFT JOIN u.orders o " +
           "GROUP BY u.id, u.name, u.email")
    List<UserSummary> findUserSummaries();
    
    // Using Specifications for dynamic queries
    default Page<User> findUsersWithCriteria(String name, Boolean active,
                                            LocalDateTime createdAfter, Pageable pageable) {
        return findAll(Specification
            .where(hasName(name))
            .and(hasActiveStatus(active))
            .and(createdAfter(createdAfter)), pageable);
    }
    
    // Specification methods
    static Specification<User> hasName(String name) {
        return (root, query, criteriaBuilder) ->
            name == null ? null : criteriaBuilder.like(
                criteriaBuilder.lower(root.get("name")),
                "%" + name.toLowerCase() + "%");
    }
    
    static Specification<User> hasActiveStatus(Boolean active) {
        return (root, query, criteriaBuilder) ->
            active == null ? null : criteriaBuilder.equal(root.get("active"), active);
    }
    
    static Specification<User> createdAfter(LocalDateTime date) {
        return (root, query, criteriaBuilder) ->
            date == null ? null : criteriaBuilder.greaterThanOrEqualTo(root.get("createdDate"), date);
    }
}

// Projection Interface
public interface UserSummary {
    Long getId();
    String getName();
    String getEmail();
    Long getOrderCount();
}

// Service Layer with Transaction Management
@Service
@Transactional
public class UserService {
    
    private final UserRepository userRepository;
    private final OrderRepository orderRepository;
    
    public UserService(UserRepository userRepository, OrderRepository orderRepository) {
        this.userRepository = userRepository;
        this.orderRepository = orderRepository;
    }
    
    @Transactional(readOnly = true)
    public Page<User> findAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }
    
    @Transactional(readOnly = true)
    public Optional<User> findUserById(Long id) {
        return userRepository.findById(id);
    }
    
    @Transactional(readOnly = true)
    public Optional<User> findUserWithOrders(Long id) {
        return userRepository.findByIdWithOrders(id);
    }
    
    public User createUser(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new EmailAlreadyExistsException("Email already exists: " + user.getEmail());
        }
        return userRepository.save(user);
    }
    
    public Optional<User> updateUser(Long id, User updatedUser) {
        return userRepository.findById(id)
            .map(existingUser -> {
                existingUser.setName(updatedUser.getName());
                existingUser.setEmail(updatedUser.getEmail());
                existingUser.setActive(updatedUser.getActive());
                return userRepository.save(existingUser);
            });
    }
    
    public boolean deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }
    
    @Transactional(readOnly = true)
    public Page<User> searchUsers(String name, Boolean active,
                                 LocalDateTime createdAfter, Pageable pageable) {
        return userRepository.findUsersWithCriteria(name, active, createdAfter, pageable);
    }
    
    // Batch operations
    @Transactional
    public void deactivateInactiveUsers(LocalDateTime cutoffDate) {
        int updatedCount = userRepository.updateInactiveUsers(false, cutoffDate);
        log.info("Deactivated {} inactive users", updatedCount);
    }
    
    @Transactional
    public List<User> saveAllUsers(List<User> users) {
        return userRepository.saveAll(users);
    }
}

// Configuration for JPA Auditing
@Configuration
@EnableJpaAuditing
public class JpaConfig {
    
    @Bean
    public AuditorAware<String> auditorProvider() {
        return new SpringSecurityAuditorAware();
    }
}

// Custom AuditorAware implementation
public class SpringSecurityAuditorAware implements AuditorAware<String> {
    
    @Override
    public Optional<String> getCurrentAuditor() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        
        if (authentication == null || !authentication.isAuthenticated() ||
            authentication instanceof AnonymousAuthenticationToken) {
            return Optional.of("system");
        }
        
        return Optional.of(authentication.getName());
    }
}

// Custom Repository Implementation
@Repository
public class CustomUserRepositoryImpl implements CustomUserRepository {
    
    @PersistenceContext
    private EntityManager entityManager;
    
    @Override
    public List<User> findUsersWithComplexCriteria(UserSearchCriteria criteria) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<User> query = cb.createQuery(User.class);
        Root<User> root = query.from(User.class);
        
        List<Predicate> predicates = new ArrayList<>();
        
        if (criteria.getName() != null) {
            predicates.add(cb.like(cb.lower(root.get("name")),
                "%" + criteria.getName().toLowerCase() + "%"));
        }
        
        if (criteria.getActive() != null) {
            predicates.add(cb.equal(root.get("active"), criteria.getActive()));
        }
        
        if (criteria.getMinOrderCount() != null) {
            Join<User, Order> orderJoin = root.join("orders", JoinType.LEFT);
            query.groupBy(root.get("id"));
            query.having(cb.greaterThanOrEqualTo(
                cb.count(orderJoin.get("id")), criteria.getMinOrderCount().longValue()));
        }
        
        query.where(predicates.toArray(new Predicate[0]));
        query.orderBy(cb.desc(root.get("createdDate")));
        
        return entityManager.createQuery(query)
            .setMaxResults(criteria.getMaxResults())
            .getResultList();
    }
}

// Testing Repository Layer
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class UserRepositoryTest {
    
    @Autowired
    private TestEntityManager entityManager;
    
    @Autowired
    private UserRepository userRepository;
    
    @Test
    void shouldFindUserByEmail() {
        // Given
        User user = new User("John Doe", "john@example.com");
        entityManager.persistAndFlush(user);
        
        // When
        Optional<User> found = userRepository.findByEmail("john@example.com");
        
        // Then
        assertThat(found).isPresent();
        assertThat(found.get().getName()).isEqualTo("John Doe");
    }
    
    @Test
    void shouldFindActiveUsers() {
        // Given
        User activeUser = new User("Active User", "active@example.com");
        activeUser.setActive(true);
        
        User inactiveUser = new User("Inactive User", "inactive@example.com");
        inactiveUser.setActive(false);
        
        entityManager.persist(activeUser);
        entityManager.persist(inactiveUser);
        entityManager.flush();
        
        // When
        List<User> activeUsers = userRepository.findByActiveTrue();
        
        // Then
        assertThat(activeUsers).hasSize(1);
        assertThat(activeUsers.get(0).getName()).isEqualTo("Active User");
    }
    
    @Test
    void shouldFindUsersWithPagination() {
        // Given
        for (int i = 1; i <= 25; i++) {
            User user = new User("User " + i, "user" + i + "@example.com");
            entityManager.persist(user);
        }
        entityManager.flush();
        
        // When
        Pageable pageable = PageRequest.of(0, 10, Sort.by("name"));
        Page<User> userPage = userRepository.findByActiveTrue(pageable);
        
        // Then
        assertThat(userPage.getContent()).hasSize(10);
        assertThat(userPage.getTotalElements()).isEqualTo(25);
        assertThat(userPage.getTotalPages()).isEqualTo(3);
    }
    
    @Test
    void shouldUpdateInactiveUsers() {
        // Given
        User oldUser = new User("Old User", "old@example.com");
        oldUser.setLastModifiedDate(LocalDateTime.now().minusDays(30));
        entityManager.persistAndFlush(oldUser);
        
        // When
        int updatedCount = userRepository.updateInactiveUsers(
            false, LocalDateTime.now().minusDays(7));
        
        // Then
        assertThat(updatedCount).isEqualTo(1);
        
        User updatedUser = entityManager.find(User.class, oldUser.getId());
        assertThat(updatedUser.getActive()).isFalse();
    }
}
    `,
    exercise: `
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Exercise: Build a Library Management System
        </h1>
        <p class="mt-3 text-green-100 text-lg">Create a comprehensive data persistence layer using Spring Data JPA with entities, repositories, and advanced querying</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Design Entity Model
          </h2>
          
          <div class="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-blue-800 mb-2">📋 Entity Requirements</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-blue-800 mb-2">Core Entities</h5>
                <ul class="text-sm space-y-1">
                  <li>• <strong>Book:</strong> id, title, isbn, publishedDate, pages, available</li>
                  <li>• <strong>Author:</strong> id, firstName, lastName, birthDate, biography</li>
                  <li>• <strong>Member:</strong> id, memberNumber, name, email, joinDate, active</li>
                  <li>• <strong>Loan:</strong> id, loanDate, dueDate, returnDate, status</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-blue-800 mb-2">Relationships</h5>
                <ul class="text-sm space-y-1">
                  <li>• Book ↔ Author (Many-to-Many)</li>
                  <li>• Book ↔ Loan (One-to-Many)</li>
                  <li>• Member ↔ Loan (One-to-Many)</li>
                  <li>• Member ↔ MemberProfile (One-to-One)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Entity Design Hints</h4>
            <pre class="text-sm">
@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, length = 200)
    private String title;
    
    @Column(unique = true, length = 17)
    @Pattern(regexp = "^\\d{3}-\\d{10}$")
    private String isbn;
    
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "book_authors",
        joinColumns = @JoinColumn(name = "book_id"),
        inverseJoinColumns = @JoinColumn(name = "author_id"))
    private Set&lt;Author&gt; authors = new HashSet&lt;&gt;();
    
    // Add auditing, validation, constructors, getters/setters
}</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Create Repository Interfaces
          </h2>
          
          <div class="bg-green-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-green-800 mb-2">🎯 Repository Methods to Implement</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-green-800 mb-2">BookRepository</h5>
                <ul class="text-sm space-y-1">
                  <li>• findByTitleContainingIgnoreCase</li>
                  <li>• findByAuthorsNameContaining</li>
                  <li>• findByAvailableTrue</li>
                  <li>• findByPublishedDateBetween</li>
                  <li>• findBooksWithActiveLoans (custom query)</li>
                  <li>• countByAvailable</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-green-800 mb-2">LoanRepository</h5>
                <ul class="text-sm space-y-1">
                  <li>• findByMemberAndReturnDateIsNull</li>
                  <li>• findByDueDateBeforeAndReturnDateIsNull</li>
                  <li>• findByStatusAndDueDateBefore</li>
                  <li>• countByMemberAndReturnDateIsNull</li>
                  <li>• findOverdueLoans (custom query)</li>
                  <li>• findLoanStatistics (native query)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Repository Implementation</h4>
            <pre class="text-sm">
@Repository
public interface BookRepository extends JpaRepository&lt;Book, Long&gt;,
                                       JpaSpecificationExecutor&lt;Book&gt; {
    
    // Query methods
    List&lt;Book&gt; findByTitleContainingIgnoreCase(String title);
    
    @Query("SELECT b FROM Book b JOIN b.authors a WHERE a.lastName LIKE %:name%")
    List&lt;Book&gt; findByAuthorLastName(@Param("name") String name);
    
    @Query("SELECT b FROM Book b WHERE b.available = true AND " +
           "NOT EXISTS (SELECT l FROM Loan l WHERE l.book = b AND l.returnDate IS NULL)")
    List&lt;Book&gt; findAvailableBooks();
    
    // Projection for book summaries
    @Query("SELECT b.id as id, b.title as title, " +
           "COUNT(l.id) as loanCount FROM Book b LEFT JOIN b.loans l " +
           "GROUP BY b.id, b.title")
    List&lt;BookSummary&gt; findBookSummaries();
    
    // Specifications for dynamic queries
    static Specification&lt;Book&gt; hasTitle(String title) {
        return (root, query, cb) -> title == null ? null :
            cb.like(cb.lower(root.get("title")), "%" + title.toLowerCase() + "%");
    }
}</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Implement Service Layer with Transactions
          </h2>
          
          <div class="bg-purple-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-purple-800 mb-2">🔄 Service Methods to Implement</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-purple-800 mb-2">LibraryService</h5>
                <ul class="text-sm space-y-1">
                  <li>• loanBook(memberId, bookId) - Create loan</li>
                  <li>• returnBook(loanId) - Process return</li>
                  <li>• renewLoan(loanId) - Extend due date</li>
                  <li>• findOverdueLoans() - Get overdue items</li>
                  <li>• calculateFines(memberId) - Compute penalties</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-purple-800 mb-2">BookService</h5>
                <ul class="text-sm space-y-1">
                  <li>• searchBooks(criteria) - Dynamic search</li>
                  <li>• addBook(book, authors) - Create with relationships</li>
                  <li>• updateBookAvailability(bookId, available)</li>
                  <li>• getBookStatistics() - Usage analytics</li>
                  <li>• findSimilarBooks(bookId) - Recommendations</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Service Implementation</h4>
            <pre class="text-sm">
@Service
@Transactional
public class LibraryService {
    
    private final BookRepository bookRepository;
    private final MemberRepository memberRepository;
    private final LoanRepository loanRepository;
    
    @Transactional
    public Loan loanBook(Long memberId, Long bookId) {
        Member member = memberRepository.findById(memberId)
            .orElseThrow(() -> new MemberNotFoundException(memberId));
        
        Book book = bookRepository.findById(bookId)
            .orElseThrow(() -> new BookNotFoundException(bookId));
        
        // Business logic validation
        if (!book.getAvailable()) {
            throw new BookNotAvailableException(bookId);
        }
        
        long activeLoans = loanRepository.countByMemberAndReturnDateIsNull(member);
        if (activeLoans >= member.getMaxLoans()) {
            throw new LoanLimitExceededException(memberId);
        }
        
        // Create loan and update book availability
        Loan loan = new Loan(member, book, LocalDate.now(),
                            LocalDate.now().plusWeeks(2));
        book.setAvailable(false);
        
        return loanRepository.save(loan);
    }
    
    @Transactional(readOnly = true)
    public Page&lt;Book&gt; searchBooks(BookSearchCriteria criteria, Pageable pageable) {
        return bookRepository.findAll(
            Specification.where(BookRepository.hasTitle(criteria.getTitle()))
                .and(BookRepository.hasAuthor(criteria.getAuthor()))
                .and(BookRepository.isAvailable(criteria.getAvailable())),
            pageable);
    }
}</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Advanced Features Implementation
          </h2>
          
          <div class="bg-orange-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-orange-800 mb-2">🚀 Advanced Requirements</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-orange-800 mb-2">Auditing & Caching</h5>
                <ul class="text-sm space-y-1">
                  <li>• Enable JPA auditing for all entities</li>
                  <li>• Implement custom AuditorAware</li>
                  <li>• Add @Cacheable to frequently accessed data</li>
                  <li>• Configure cache eviction strategies</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-orange-800 mb-2">Performance Optimization</h5>
                <ul class="text-sm space-y-1">
                  <li>• Use @EntityGraph for fetch optimization</li>
                  <li>• Implement batch operations</li>
                  <li>• Add database indexes</li>
                  <li>• Configure connection pooling</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-teal-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-teal-800 mb-2">📊 Reporting Features</h4>
            <ul class="text-teal-700 space-y-2">
              <li>• Generate loan statistics reports</li>
              <li>• Create member activity summaries</li>
              <li>• Implement book popularity rankings</li>
              <li>• Build overdue loans dashboard</li>
              <li>• Export data to CSV/Excel formats</li>
            </ul>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Advanced Implementation</h4>
            <pre class="text-sm">
// Custom repository with Criteria API
@Repository
public class CustomBookRepositoryImpl implements CustomBookRepository {
    
    @PersistenceContext
    private EntityManager entityManager;
    
    @Override
    public List&lt;BookStatistics&gt; getBookStatistics(LocalDate startDate, LocalDate endDate) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery&lt;BookStatistics&gt; query = cb.createQuery(BookStatistics.class);
        
        Root&lt;Book&gt; book = query.from(Book.class);
        Join&lt;Book, Loan&gt; loan = book.join("loans", JoinType.LEFT);
        
        query.select(cb.construct(BookStatistics.class,
            book.get("id"),
            book.get("title"),
            cb.count(loan.get("id")),
            cb.avg(cb.function("DATEDIFF", Integer.class,
                loan.get("returnDate"), loan.get("loanDate")))
        ));
        
        query.where(cb.between(loan.get("loanDate"), startDate, endDate));
        query.groupBy(book.get("id"), book.get("title"));
        query.orderBy(cb.desc(cb.count(loan.get("id"))));
        
        return entityManager.createQuery(query).getResultList();
    }
}

// Caching configuration
@EnableCaching
@Configuration
public class CacheConfig {
    
    @Bean
    public CacheManager cacheManager() {
        CaffeineCacheManager cacheManager = new CaffeineCacheManager();
        cacheManager.setCaffeine(Caffeine.newBuilder()
            .maximumSize(1000)
            .expireAfterWrite(10, TimeUnit.MINUTES));
        return cacheManager;
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
            <h4 class="font-bold text-red-800 mb-2">🧪 Testing Requirements</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-red-800 mb-2">Repository Tests</h5>
                <ul class="text-sm space-y-1">
                  <li>• Test custom query methods</li>
                  <li>• Verify pagination and sorting</li>
                  <li>• Test entity relationships</li>
                  <li>• Validate constraint violations</li>
                  <li>• Test transaction rollback scenarios</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-red-800 mb-2">Service Tests</h5>
                <ul class="text-sm space-y-1">
                  <li>• Test business logic validation</li>
                  <li>• Mock repository dependencies</li>
                  <li>• Test exception handling</li>
                  <li>• Verify transaction boundaries</li>
                  <li>• Test concurrent access scenarios</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Test Examples</h4>
            <pre class="text-sm">
@DataJpaTest
class BookRepositoryTest {
    
    @Autowired
    private TestEntityManager entityManager;
    
    @Autowired
    private BookRepository bookRepository;
    
    @Test
    void shouldFindBooksByAuthor() {
        // Given
        Author author = new Author("John", "Doe");
        Book book = new Book("Test Book", "978-1234567890");
        book.addAuthor(author);
        
        entityManager.persist(author);
        entityManager.persist(book);
        entityManager.flush();
        
        // When
        List&lt;Book&gt; books = bookRepository.findByAuthorLastName("Doe");
        
        // Then
        assertThat(books).hasSize(1);
        assertThat(books.get(0).getTitle()).isEqualTo("Test Book");
    }
    
    @Test
    void shouldHandleConcurrentBookLoans() {
        // Test optimistic locking and concurrent access
        Book book = new Book("Popular Book", "978-1111111111");
        book.setAvailable(true);
        entityManager.persistAndFlush(book);
        
        // Simulate concurrent loan attempts
        CompletableFuture&lt;Loan&gt; loan1 = CompletableFuture.supplyAsync(() ->
            libraryService.loanBook(member1.getId(), book.getId()));
        CompletableFuture&lt;Loan&gt; loan2 = CompletableFuture.supplyAsync(() ->
            libraryService.loanBook(member2.getId(), book.getId()));
        
        // Verify only one loan succeeds
        assertThat(loan1.join()).isNotNull();
        assertThatThrownBy(() -> loan2.join())
            .hasCauseInstanceOf(BookNotAvailableException.class);
    }
}</pre>
          </div>
        </section>

        <div class="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg mt-8">
          <h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>
          <p class="text-green-100">
            After completing this exercise, you'll have mastered Spring Data JPA concepts including entity design,
            repository patterns, custom queries, transaction management, performance optimization, and comprehensive testing strategies.
          </p>
        </div>
      </div>
    `
  }
};