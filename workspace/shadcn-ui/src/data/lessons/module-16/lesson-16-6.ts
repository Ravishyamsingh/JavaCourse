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
private List<Order> orders;</pre>
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
private Set<Role> roles;</pre>
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
                    <span class="bg-purple-600 text-white px-3 py-1 rounded text-sm font-bold mr-3">Repository<T, ID></span>
                    <span class="text-gray-600">Base marker interface</span>
                  </div>
                  <div class="flex items-center ml-4">
                    <span class="bg-purple-500 text-white px-3 py-1 rounded text-sm font-bold mr-3">CrudRepository<T, ID></span>
                    <span class="text-gray-600">Basic CRUD operations</span>
                  </div>
                  <div class="flex items-center ml-8">
                    <span class="bg-purple-400 text-white px-3 py-1 rounded text-sm font-bold mr-3">PagingAndSortingRepository<T, ID></span>
                    <span class="text-gray-600">Pagination and sorting</span>
                  </div>
                  <div class="flex items-center ml-12">
                    <span class="bg-purple-300 text-white px-3 py-1 rounded text-sm font-bold mr-3">JpaRepository<T, ID></span>
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
List<User> findByNameContainingAndActive(@Param("name") String name,
                                       @Param("active") Boolean active);

@Query("SELECT u FROM User u JOIN u.orders o WHERE o.total > :amount")
List<User> findUsersWithOrdersAbove(@Param("amount") BigDecimal amount);</pre>
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
List<User> findUsersCreatedAfter(LocalDateTime date);

@Query(value = "SELECT u.*, COUNT(o.id) as order_count " +
               "FROM users u LEFT JOIN orders o ON u.id = o.user_id " +
               "GROUP BY u.id HAVING COUNT(o.id) > :minOrders",
       nativeQuery = true)
List<Object[]> findUsersWithMinimumOrders(@Param("minOrders") int minOrders);</pre>
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
public List<User> findAll() {
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
                    <div>List<User> users = userRepository.findAll();</div>
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
1) Create a JPA entity class with @Entity annotation and @Id field with @GeneratedValue.
2) Implement a Spring Data repository interface extending JpaRepository with custom query methods.
3) Write a JPQL query using @Query annotation to find entities with specific criteria.
4) Create a service method with @Transactional annotation for database operations.
5) Implement entity relationships using @OneToMany and @ManyToOne annotations.
`
  }
};