import { LessonContent } from '../../types/LessonTypes';

export const lesson_14_3: LessonContent = {
  title: 'Mocking with Mockito',
  type: 'lesson',
  duration: '50 min',
  module: 'Testing and Quality Assurance',
  content: {
    overview: 'Learn to use Mockito, the most popular mocking framework for Java. Master creating mock objects, stubbing methods, verifying interactions, and testing in isolation to write more effective unit tests.',
    objectives: [
      'Understand the concept of mocking and its importance in unit testing',
      'Learn to create and configure mock objects with Mockito',
      'Master method stubbing and behavior verification',
      'Use argument matchers and captor for flexible testing',
      'Apply mocking best practices and avoid common pitfalls',
      'Test complex interactions and dependencies effectively'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Mocking with Mockito
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Isolate your tests with powerful mocking capabilities</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What is Mocking?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Mocking is a technique used in unit testing to replace dependencies with fake objects (mocks) that simulate 
            the behavior of real objects. This allows you to test your code in isolation, focusing on the unit under test 
            without worrying about the complexity or availability of its dependencies.
          </p>
          
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">🎭 Why Use Mocks?</h4>
            <ul class="text-purple-700 space-y-1">
              <li>• <strong>Isolation:</strong> Test units independently of their dependencies</li>
              <li>• <strong>Speed:</strong> Avoid slow operations like database calls or network requests</li>
              <li>• <strong>Control:</strong> Simulate specific scenarios and edge cases</li>
              <li>• <strong>Reliability:</strong> Tests don't fail due to external system issues</li>
              <li>• <strong>Focus:</strong> Test only the logic you're interested in</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ When to Use Mocks</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• External dependencies (databases, web services)</li>
                <li>• Complex objects that are hard to create</li>
                <li>• Slow or unreliable operations</li>
                <li>• Testing error conditions</li>
                <li>• Verifying method calls and interactions</li>
                <li>• Isolating the system under test</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">⚠️ When NOT to Use Mocks</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Simple value objects or data structures</li>
                <li>• Testing integration between components</li>
                <li>• When the mock becomes more complex than the real object</li>
                <li>• Over-mocking leads to brittle tests</li>
                <li>• Testing framework or library code</li>
                <li>• When you need to test the actual behavior</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Introduction to Mockito
          </h2>
          
          <p class="text-gray-700 mb-4 leading-relaxed">
            Mockito is the most popular mocking framework for Java. It provides a clean API for creating mocks, 
            stubbing methods, and verifying interactions. Mockito integrates seamlessly with JUnit and other testing frameworks.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 class="font-bold text-blue-800 mb-2">🔧 Setting up Mockito</h4>
            <p class="text-blue-700 mb-3">Add Mockito dependency to your project:</p>
            <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
&lt;dependency&gt;
    &lt;groupId&gt;org.mockito&lt;/groupId&gt;
    &lt;artifactId&gt;mockito-core&lt;/artifactId&gt;
    &lt;version&gt;5.7.0&lt;/version&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;

&lt;!-- For JUnit 5 integration --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.mockito&lt;/groupId&gt;
    &lt;artifactId&gt;mockito-junit-jupiter&lt;/artifactId&gt;
    &lt;version&gt;5.7.0&lt;/version&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;</pre>
          </div>
          
          <div class="space-y-4">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Creating Mocks</h4>
              <p class="text-indigo-700 mb-3">Three ways to create mock objects:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// 1. Using Mockito.mock()
UserService userService = Mockito.mock(UserService.class);

// 2. Using @Mock annotation
@Mock
private UserService userService;

// 3. Using MockitoAnnotations.openMocks() or @ExtendWith
@ExtendWith(MockitoExtension.class)
class MyTest {
    @Mock
    private UserService userService;
}</pre>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Basic Stubbing</h4>
              <p class="text-green-700 mb-3">Define behavior for mock methods:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// When-then stubbing
when(userService.findById(1L)).thenReturn(new User("John"));
when(userService.findById(2L)).thenThrow(new UserNotFoundException());

// Void method stubbing
doThrow(new RuntimeException()).when(userService).deleteUser(1L);
doNothing().when(userService).updateUser(any(User.class));</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Stubbing and Verification
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Method Stubbing Patterns</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-green-700 mb-2">Return Values</h5>
                  <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// Simple return
when(mock.method()).thenReturn(value);

// Multiple calls
when(mock.method())
    .thenReturn(value1)
    .thenReturn(value2);

// Conditional returns
when(mock.method(anyString()))
    .thenReturn("default");</pre>
                </div>
                <div>
                  <h5 class="font-bold text-green-700 mb-2">Exceptions</h5>
                  <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// Throw exceptions
when(mock.method())
    .thenThrow(RuntimeException.class);

// Multiple exceptions
when(mock.method())
    .thenThrow(new IOException())
    .thenReturn("success");</pre>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Verification</h4>
              <p class="text-blue-700 mb-3">Verify that methods were called with expected parameters:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// Verify method was called
verify(userService).findById(1L);

// Verify number of calls
verify(userService, times(2)).findById(anyLong());
verify(userService, never()).deleteUser(anyLong());
verify(userService, atLeast(1)).updateUser(any(User.class));

// Verify order of calls
InOrder inOrder = inOrder(userService, emailService);
inOrder.verify(userService).findById(1L);
inOrder.verify(emailService).sendEmail(any(String.class));</pre>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Argument Matchers</h4>
              <p class="text-purple-700 mb-3">Flexible matching for method arguments:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// Common matchers
when(userService.findById(anyLong())).thenReturn(user);
when(userService.findByName(anyString())).thenReturn(user);
when(userService.save(any(User.class))).thenReturn(user);

// Specific matchers
when(userService.findById(eq(1L))).thenReturn(user);
when(userService.findByAge(gt(18))).thenReturn(users);
when(userService.findByEmail(contains("@gmail"))).thenReturn(user);

// Custom matchers
when(userService.save(argThat(user -> user.getAge() > 18)))
    .thenReturn(savedUser);</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Advanced Mockito Features
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Argument Captors</h4>
              <p class="text-orange-700 mb-3">Capture arguments passed to mock methods for detailed verification:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@Captor
private ArgumentCaptor&lt;User&gt; userCaptor;

@Test
void testUserCreation() {
    // Execute the method under test
    userController.createUser("John", "john@email.com");
    
    // Capture the argument
    verify(userService).save(userCaptor.capture());
    
    // Verify the captured argument
    User capturedUser = userCaptor.getValue();
    assertEquals("John", capturedUser.getName());
    assertEquals("john@email.com", capturedUser.getEmail());
}</pre>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Spies</h4>
              <p class="text-red-700 mb-3">Partial mocking - use real object but stub specific methods:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// Create spy
List&lt;String&gt; spyList = spy(new ArrayList&lt;&gt;());

// Use real methods
spyList.add("one");
spyList.add("two");

// Stub specific methods
when(spyList.size()).thenReturn(100);

// Verify
assertEquals(100, spyList.size()); // Stubbed
assertEquals("one", spyList.get(0)); // Real method</pre>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Mock Annotations</h4>
              <p class="text-indigo-700 mb-3">Convenient annotations for different mock types:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    
    @Mock
    private UserRepository userRepository;
    
    @Spy
    private UserValidator userValidator = new UserValidator();
    
    @InjectMocks
    private UserService userService;
    
    @Captor
    private ArgumentCaptor&lt;User&gt; userCaptor;
}</pre>
            </div>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Answer Interface</h4>
              <p class="text-teal-700 mb-3">Custom behavior for complex stubbing scenarios:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
when(userService.processUser(any(User.class)))
    .thenAnswer(invocation -> {
        User user = invocation.getArgument(0);
        user.setProcessed(true);
        return user;
    });

// Or using lambda
when(userService.calculateAge(any(LocalDate.class)))
    .thenAnswer(inv -> Period.between(inv.getArgument(0), LocalDate.now()).getYears());</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Best Practices and Common Pitfalls
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">✅ Best Practices</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Mock only direct dependencies</li>
                  <li>• Use @InjectMocks for dependency injection</li>
                  <li>• Verify behavior, not implementation</li>
                  <li>• Keep mocks simple and focused</li>
                  <li>• Use argument matchers consistently</li>
                  <li>• Reset mocks between tests if needed</li>
                  <li>• Prefer composition over inheritance for testability</li>
                </ul>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">🎯 Testing Strategies</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Test one behavior per test method</li>
                  <li>• Use descriptive test names</li>
                  <li>• Arrange-Act-Assert pattern</li>
                  <li>• Verify only what's necessary</li>
                  <li>• Use meaningful assertion messages</li>
                  <li>• Test both happy path and edge cases</li>
                </ul>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">❌ Common Pitfalls</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Over-mocking (mocking everything)</li>
                  <li>• Mocking value objects or simple classes</li>
                  <li>• Testing implementation details</li>
                  <li>• Complex mock setups</li>
                  <li>• Not resetting mocks between tests</li>
                  <li>• Mixing argument matchers incorrectly</li>
                  <li>• Verifying too many interactions</li>
                </ul>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold text-yellow-800 mb-2">⚠️ Watch Out For</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Brittle tests due to over-verification</li>
                  <li>• Mocks returning null by default</li>
                  <li>• Stubbing methods that are never called</li>
                  <li>• Forgetting to verify important interactions</li>
                  <li>• Mocking final classes (use mockito-inline)</li>
                  <li>• Circular dependencies in tests</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Complete Mockito Example - User Service Testing</div>
        
        <div class="text-gray-400 mb-4">// === DOMAIN CLASSES ===</div>
        
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">User</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">Long</div> id;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> name;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> email;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">boolean</div> active;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Constructors, getters, setters...</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">User</div>(<div class="text-blue-400">String</div> name, <div class="text-blue-400">String</div> email) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.name = name;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.email = email;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.active = <div class="text-blue-400">true</div>;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// === REPOSITORY INTERFACE ===</div><br/>
        
        <div class="text-blue-400">public interface</div> <div class="text-yellow-400">UserRepository</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">User</div> <div class="text-yellow-400">findById</div>(<div class="text-blue-400">Long</div> id);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">User</div> <div class="text-yellow-400">save</div>(<div class="text-blue-400">User</div> user);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">delete</div>(<div class="text-blue-400">Long</div> id);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">User</div>&gt; <div class="text-yellow-400">findByEmail</div>(<div class="text-blue-400">String</div> email);<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// === EMAIL SERVICE INTERFACE ===</div><br/>
        
        <div class="text-blue-400">public interface</div> <div class="text-yellow-400">EmailService</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">sendWelcomeEmail</div>(<div class="text-blue-400">User</div> user);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">sendNotification</div>(<div class="text-blue-400">String</div> email, <div class="text-blue-400">String</div> message);<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// === SERVICE CLASS UNDER TEST ===</div><br/>
        
        <div class="text-purple-400">@Service</div><br/>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">UserService</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">UserRepository</div> userRepository;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">EmailService</div> emailService;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">UserService</div>(<div class="text-blue-400">UserRepository</div> userRepository, <div class="text-blue-400">EmailService</div> emailService) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.userRepository = userRepository;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.emailService = emailService;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">User</div> <div class="text-yellow-400">createUser</div>(<div class="text-blue-400">String</div> name, <div class="text-blue-400">String</div> email) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Check if user already exists</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">User</div>&gt; existingUsers = userRepository.findByEmail(email);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (!existingUsers.isEmpty()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throw new</div> <div class="text-yellow-400">IllegalArgumentException</div>(<div class="text-green-300">"User already exists"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Create and save user</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">User</div> user = <div class="text-blue-400">new</div> <div class="text-yellow-400">User</div>(name, email);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">User</div> savedUser = userRepository.save(user);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Send welcome email</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;emailService.sendWelcomeEmail(savedUser);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> savedUser;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">User</div> <div class="text-yellow-400">getUserById</div>(<div class="text-blue-400">Long</div> id) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">User</div> user = userRepository.findById(id);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (user == <div class="text-blue-400">null</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throw new</div> <div class="text-yellow-400">UserNotFoundException</div>(<div class="text-green-300">"User not found: "</div> + id);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> user;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">void</div> <div class="text-yellow-400">deactivateUser</div>(<div class="text-blue-400">Long</div> id) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">User</div> user = getUserById(id);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;user.setActive(<div class="text-blue-400">false</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;userRepository.save(user);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;emailService.sendNotification(user.getEmail(), <div class="text-green-300">"Account deactivated"</div>);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// === COMPREHENSIVE TEST CLASS ===</div><br/>
        
        <div class="text-blue-400">import</div> org.junit.jupiter.api.Test;<br/>
        <div class="text-blue-400">import</div> org.junit.jupiter.api.extension.ExtendWith;<br/>
        <div class="text-blue-400">import</div> org.mockito.junit.jupiter.MockitoExtension;<br/>
        <div class="text-blue-400">import static</div> org.mockito.Mockito.*;<br/>
        <div class="text-blue-400">import static</div> org.junit.jupiter.api.Assertions.*;<br/><br/>
        
        <div class="text-purple-400">@ExtendWith</div>(<div class="text-blue-400">MockitoExtension</div>.<div class="text-blue-400">class</div>)<br/>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">UserServiceTest</div> {<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Mock</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">UserRepository</div> userRepository;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Mock</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">EmailService</div> emailService;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@InjectMocks</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">UserService</div> userService;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Captor</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">ArgumentCaptor</div>&lt;<div class="text-blue-400">User</div>&gt; userCaptor;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// === BASIC STUBBING AND VERIFICATION ===</div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">createUser_ValidInput_ReturnsUser</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Arrange</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> name = <div class="text-green-300">"John Doe"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> email = <div class="text-green-300">"john@example.com"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">User</div> savedUser = <div class="text-blue-400">new</div> <div class="text-yellow-400">User</div>(name, email);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;savedUser.setId(<div class="text-green-300">1L</div>);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Stub repository methods</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;when(userRepository.findByEmail(email)).thenReturn(Collections.emptyList());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;when(userRepository.save(any(<div class="text-blue-400">User</div>.<div class="text-blue-400">class</div>))).thenReturn(savedUser);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Act</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">User</div> result = userService.createUser(name, email);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Assert</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertNotNull(result);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(name, result.getName());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(email, result.getEmail());<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Verify interactions</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;verify(userRepository).findByEmail(email);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;verify(userRepository).save(any(<div class="text-blue-400">User</div>.<div class="text-blue-400">class</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;verify(emailService).sendWelcomeEmail(savedUser);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// === EXCEPTION TESTING ===</div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">createUser_UserExists_ThrowsException</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Arrange</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> email = <div class="text-green-300">"existing@example.com"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">User</div> existingUser = <div class="text-blue-400">new</div> <div class="text-yellow-400">User</div>(<div class="text-green-300">"Existing"</div>, email);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;when(userRepository.findByEmail(email))<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.thenReturn(Arrays.asList(existingUser));<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Act & Assert</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">IllegalArgumentException</div> exception = assertThrows(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">IllegalArgumentException</div>.<div class="text-blue-400">class</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;() -> userService.createUser(<div class="text-green-300">"New User"</div>, email)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(<div class="text-green-300">"User already exists"</div>, exception.getMessage());<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Verify no save or email was called</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;verify(userRepository, never()).save(any(<div class="text-blue-400">User</div>.<div class="text-blue-400">class</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;verify(emailService, never()).sendWelcomeEmail(any(<div class="text-blue-400">User</div>.<div class="text-blue-400">class</div>));<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// === ARGUMENT CAPTOR EXAMPLE ===</div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">createUser_CapturesSavedUser</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Arrange</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> name = <div class="text-green-300">"Jane Doe"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> email = <div class="text-green-300">"jane@example.com"</div>;<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;when(userRepository.findByEmail(email)).thenReturn(Collections.emptyList());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;when(userRepository.save(any(<div class="text-blue-400">User</div>.<div class="text-blue-400">class</div>)))<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.thenAnswer(invocation -> invocation.getArgument(<div class="text-green-300">0</div>));<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Act</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;userService.createUser(name, email);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Capture and verify the saved user</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;verify(userRepository).save(userCaptor.capture());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">User</div> capturedUser = userCaptor.getValue();<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(name, capturedUser.getName());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(email, capturedUser.getEmail());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertTrue(capturedUser.isActive());<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// === VOID METHOD STUBBING ===</div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">deactivateUser_EmailServiceFails_StillDeactivates</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Arrange</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Long</div> userId = <div class="text-green-300">1L</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">User</div> user = <div class="text-blue-400">new</div> <div class="text-yellow-400">User</div>(<div class="text-green-300">"John"</div>, <div class="text-green-300">"john@example.com"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;user.setId(userId);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;when(userRepository.findById(userId)).thenReturn(user);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;doThrow(<div class="text-blue-400">new</div> <div class="text-yellow-400">RuntimeException</div>(<div class="text-green-300">"Email service down"</div>))<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.when(emailService).sendNotification(anyString(), anyString());<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Act & Assert</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertThrows(<div class="text-blue-400">RuntimeException</div>.<div class="text-blue-400">class</div>, () -> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;userService.deactivateUser(userId);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;});<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Verify user was still saved (deactivated)</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;verify(userRepository).save(user);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertFalse(user.isActive());<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// === VERIFICATION WITH TIMES ===</div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">getUserById_NotFound_ThrowsException</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Arrange</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Long</div> userId = <div class="text-green-300">999L</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;when(userRepository.findById(userId)).thenReturn(<div class="text-blue-400">null</div>);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Act & Assert</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">UserNotFoundException</div> exception = assertThrows(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">UserNotFoundException</div>.<div class="text-blue-400">class</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;() -> userService.getUserById(userId)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;assertTrue(exception.getMessage().contains(<div class="text-green-300">"999"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;verify(userRepository, times(<div class="text-green-300">1</div>)).findById(userId);<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
    exercise: `
      **🎯 Mockito Framework Exercises**

      **Exercise 1: Basic Mocking Setup**
      Create a BookService class that depends on BookRepository and NotificationService:
      - BookService should have methods: findBook(id), saveBook(book), deleteBook(id)
      - Write tests using @Mock, @InjectMocks annotations
      - Practice basic stubbing with when().thenReturn()
      - Verify method calls with verify()

      **Exercise 2: Exception Testing with Mocks**
      Extend your BookService tests to handle error scenarios:
      - Test what happens when BookRepository throws DataAccessException
      - Test what happens when NotificationService fails
      - Use when().thenThrow() and doThrow().when() patterns
      - Verify that appropriate exceptions are propagated or handled

      **Exercise 3: Argument Captors and Matchers**
      Create comprehensive tests using argument captors:
      - Use @Captor to capture arguments passed to mocked methods
      - Verify the captured arguments have correct values
      - Practice with argument matchers: any(), eq(), anyString(), etc.
      - Test methods that modify objects before saving

      **Exercise 4: Spies and Partial Mocking**
      Create tests using Mockito spies:
      - Create a spy of a real ArrayList and stub specific methods
      - Create a spy of your service class and stub only certain methods
      - Understand the difference between mocks and spies
      - Practice with @Spy annotation

      **Exercise 5: Advanced Verification**
      Implement complex verification scenarios:
      - Verify method call order using InOrder
      - Verify number of interactions with times(), never(), atLeast()
      - Use verifyNoMoreInteractions() and verifyNoInteractions()
      - Test timeout scenarios with timeout() verification

      **Exercise 6: Custom Answer Implementation**
      Create tests with custom Answer implementations:
      - Use thenAnswer() to provide dynamic responses
      - Implement Answer interface for complex stubbing
      - Practice with lambda expressions in answers
      - Handle multiple method calls with different responses

      **Deliverable:**
      Create a complete test suite demonstrating all Mockito features with proper test organization, clear naming, and comprehensive coverage of both happy path and error scenarios.
    `
  }
};