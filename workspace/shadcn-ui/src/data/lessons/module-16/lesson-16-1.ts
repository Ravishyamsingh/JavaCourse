import { LessonContent } from '../../types/LessonTypes';

export const lesson_16_1: LessonContent = {
  title: 'Introduction to Servlets',
  type: 'lesson',
  duration: '45 min',
  module: 'Web Development with Java',
  content: {
    overview: 'Learn the fundamentals of Java Servlets, the foundation of Java web development and server-side programming.',
    objectives: [
      'Understand what servlets are and their role in web development',
      'Learn the servlet lifecycle and container architecture',
      'Create and deploy basic servlets',
      'Handle HTTP requests and responses',
      'Understand servlet configuration and deployment descriptors'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Introduction to Servlets
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Building dynamic web applications with Java</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What are Servlets?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Java Servlets are server-side Java programs that handle client requests and generate dynamic web content. 
            They form the foundation of Java web development and are part of the Java Enterprise Edition (Java EE) specification.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🎯 Key Characteristics</h4>
            <ul class="text-blue-700 space-y-1">
              <li>• <strong>Platform-independent:</strong> Run on any servlet container</li>
              <li>• <strong>Efficient and scalable:</strong> Handle multiple requests concurrently</li>
              <li>• <strong>Secure and robust:</strong> Built-in security features</li>
              <li>• <strong>Protocol-independent:</strong> Though commonly used with HTTP</li>
              <li>• <strong>Server-side processing:</strong> Execute on the web server</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Advantages</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Better performance than CGI</li>
                <li>• Platform and server independence</li>
                <li>• Robust error handling</li>
                <li>• Built-in session management</li>
                <li>• Extensive API support</li>
                <li>• Easy deployment and maintenance</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">⚠️ Considerations</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Requires servlet container</li>
                <li>• Java-specific technology</li>
                <li>• Learning curve for beginners</li>
                <li>• Memory usage considerations</li>
                <li>• Thread safety requirements</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Servlet Architecture
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Servlet Container</h4>
              <p class="text-green-700 mb-3">The servlet container (like Tomcat, Jetty) manages servlet lifecycle and provides runtime environment:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Container Responsibilities</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Load and instantiate servlets</li>
                    <li>• Manage servlet lifecycle</li>
                    <li>• Handle request/response objects</li>
                    <li>• Provide security and session management</li>
                    <li>• Thread pool management</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Request Processing Flow</h5>
                  <ol class="text-sm space-y-1">
                    <li>1. Client sends HTTP request</li>
                    <li>2. Container receives request</li>
                    <li>3. Container creates request/response objects</li>
                    <li>4. Container calls servlet's service() method</li>
                    <li>5. Servlet processes request</li>
                    <li>6. Container sends response to client</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Servlet Lifecycle
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Lifecycle Phases</h4>
              <div class="space-y-4">
                <div class="bg-white p-4 rounded border-l-4 border-purple-400">
                  <h5 class="font-semibold text-purple-800 mb-2">1. Loading and Instantiation</h5>
                  <p class="text-gray-700 text-sm">Container loads servlet class and creates instance (usually on first request or at startup)</p>
                </div>
                <div class="bg-white p-4 rounded border-l-4 border-purple-400">
                  <h5 class="font-semibold text-purple-800 mb-2">2. Initialization - init()</h5>
                  <p class="text-gray-700 text-sm">Called once after instantiation to initialize servlet resources and configuration</p>
                </div>
                <div class="bg-white p-4 rounded border-l-4 border-purple-400">
                  <h5 class="font-semibold text-purple-800 mb-2">3. Request Handling - service()</h5>
                  <p class="text-gray-700 text-sm">Called for each client request to process and generate response (thread-safe)</p>
                </div>
                <div class="bg-white p-4 rounded border-l-4 border-purple-400">
                  <h5 class="font-semibold text-purple-800 mb-2">4. Destruction - destroy()</h5>
                  <p class="text-gray-700 text-sm">Called before servlet is removed from memory to clean up resources</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            HTTP Servlet Methods
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">HttpServlet Class Methods</h4>
              <p class="text-orange-700 mb-3">HttpServlet class provides methods for handling different HTTP request types:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">HTTP Methods</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <code class="bg-gray-100 px-2 py-1 rounded">doGet()</code> - Handle GET requests</li>
                    <li>• <code class="bg-gray-100 px-2 py-1 rounded">doPost()</code> - Handle POST requests</li>
                    <li>• <code class="bg-gray-100 px-2 py-1 rounded">doPut()</code> - Handle PUT requests</li>
                    <li>• <code class="bg-gray-100 px-2 py-1 rounded">doDelete()</code> - Handle DELETE requests</li>
                    <li>• <code class="bg-gray-100 px-2 py-1 rounded">doHead()</code> - Handle HEAD requests</li>
                    <li>• <code class="bg-gray-100 px-2 py-1 rounded">doOptions()</code> - Handle OPTIONS requests</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">Request/Response Objects</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <code class="bg-gray-100 px-2 py-1 rounded">HttpServletRequest</code> - Client request data</li>
                    <li>• <code class="bg-gray-100 px-2 py-1 rounded">HttpServletResponse</code> - Server response</li>
                    <li>• Parameters, headers, cookies</li>
                    <li>• Session and context data</li>
                    <li>• Response content and status codes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Deployment and Configuration
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Configuration Methods</h4>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">web.xml Configuration</h5>
                  <p class="text-gray-700 mb-3 text-sm">
                    Traditional deployment descriptor for servlet configuration and URL mapping.
                  </p>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Servlet declarations</li>
                    <li>URL pattern mappings</li>
                    <li>Initialization parameters</li>
                    <li>Security constraints</li>
                    <li>Filter configurations</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Annotation-based Configuration</h5>
                  <p class="text-gray-700 mb-3 text-sm">
                    Modern approach using annotations for servlet configuration (Servlet 3.0+).
                  </p>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>@WebServlet annotation</li>
                    <li>URL patterns in annotations</li>
                    <li>Initialization parameters</li>
                    <li>Load-on-startup configuration</li>
                    <li>Multipart configuration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
// Basic Servlet Example
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    
    // Initialization method - called once
    @Override
    public void init() throws ServletException {
        System.out.println("HelloServlet initialized");
    }
    
    // Handle GET requests
    @Override
    protected void doGet(HttpServletRequest request, 
                        HttpServletResponse response) 
                        throws ServletException, IOException {
        
        // Set response content type
        response.setContentType("text/html");
        
        // Get response writer
        PrintWriter out = response.getWriter();
        
        // Get request parameters
        String name = request.getParameter("name");
        if (name == null) {
            name = "World";
        }
        
        // Generate HTML response
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head><title>Hello Servlet</title></head>");
        out.println("<body>");
        out.println("<h1>Hello, " + name + "!</h1>");
        out.println("<p>Current time: " + new java.util.Date() + "</p>");
        out.println("</body>");
        out.println("</html>");
    }
    
    // Handle POST requests
    @Override
    protected void doPost(HttpServletRequest request, 
                         HttpServletResponse response) 
                         throws ServletException, IOException {
        
        // Get form data
        String username = request.getParameter("username");
        String email = request.getParameter("email");
        
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head><title>Form Submission</title></head>");
        out.println("<body>");
        out.println("<h2>Form Data Received</h2>");
        out.println("<p>Username: " + username + "</p>");
        out.println("<p>Email: " + email + "</p>");
        out.println("</body>");
        out.println("</html>");
    }
    
    // Cleanup method - called before servlet is destroyed
    @Override
    public void destroy() {
        System.out.println("HelloServlet destroyed");
    }
}

// Advanced Servlet with Session Management
@WebServlet("/session-demo")
public class SessionDemoServlet extends HttpServlet {
    
    @Override
    protected void doGet(HttpServletRequest request, 
                        HttpServletResponse response) 
                        throws ServletException, IOException {
        
        // Get or create session
        HttpSession session = request.getSession();
        
        // Get visit count from session
        Integer visitCount = (Integer) session.getAttribute("visitCount");
        if (visitCount == null) {
            visitCount = 1;
        } else {
            visitCount++;
        }
        
        // Update session attribute
        session.setAttribute("visitCount", visitCount);
        
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head><title>Session Demo</title></head>");
        out.println("<body>");
        out.println("<h2>Session Information</h2>");
        out.println("<p>Session ID: " + session.getId() + "</p>");
        out.println("<p>Visit Count: " + visitCount + "</p>");
        out.println("<p>Session Created: " + new java.util.Date(session.getCreationTime()) + "</p>");
        out.println("<p>Last Accessed: " + new java.util.Date(session.getLastAccessedTime()) + "</p>");
        out.println("</body>");
        out.println("</html>");
    }
}

// Servlet with Initialization Parameters
@WebServlet(
    urlPatterns = "/config-demo",
    initParams = {
        @WebInitParam(name = "adminEmail", value = "admin@example.com"),
        @WebInitParam(name = "maxUsers", value = "100")
    }
)
public class ConfigDemoServlet extends HttpServlet {
    
    private String adminEmail;
    private int maxUsers;
    
    @Override
    public void init() throws ServletException {
        // Read initialization parameters
        adminEmail = getInitParameter("adminEmail");
        maxUsers = Integer.parseInt(getInitParameter("maxUsers"));
        
        System.out.println("Admin Email: " + adminEmail);
        System.out.println("Max Users: " + maxUsers);
    }
    
    @Override
    protected void doGet(HttpServletRequest request, 
                        HttpServletResponse response) 
                        throws ServletException, IOException {
        
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head><title>Configuration Demo</title></head>");
        out.println("<body>");
        out.println("<h2>Servlet Configuration</h2>");
        out.println("<p>Admin Email: " + adminEmail + "</p>");
        out.println("<p>Max Users: " + maxUsers + "</p>");
        out.println("</body>");
        out.println("</html>");
    }
}
    `,
    exercise: `
      **🎯 Introduction to Servlets Exercises**

      **Exercise 1: Basic Servlet Creation**
      Create your first servlet with the following requirements:
      - Create a servlet that responds to GET requests at "/hello"
      - Display a personalized greeting with the current date and time
      - Accept a "name" parameter from the URL query string
      - Use proper HTML structure in the response
      - Handle cases where no name parameter is provided

      **Exercise 2: Form Processing Servlet**
      Build a servlet that handles form submission:
      - Create an HTML form with fields for name, email, and message
      - Process the form data in a POST request handler
      - Display the submitted information back to the user
      - Implement basic validation for required fields
      - Show appropriate error messages for invalid input

      **Exercise 3: Session Management**
      Implement session tracking in a servlet:
      - Create a servlet that tracks user visits using sessions
      - Store and display visit count, first visit time, and last visit time
      - Provide functionality to reset the session
      - Display session ID and other session attributes
      - Handle session timeout scenarios

      **Exercise 4: Servlet Configuration**
      Practice servlet configuration techniques:
      - Configure a servlet using both annotations and web.xml
      - Set initialization parameters for database connection details
      - Use servlet context to share data between servlets
      - Implement proper initialization and cleanup methods
      - Test different URL mapping patterns

      **Exercise 5: User Registration System**
      Create a comprehensive user registration servlet:
      - Handle both GET (display form) and POST (process form) requests
      - Implement form validation for username, email, and password
      - Store user data temporarily in session
      - Display success/error messages appropriately
      - Use proper HTML structure and basic CSS styling

      **Deliverable:**
      Create a complete servlet-based web application that demonstrates understanding of servlet lifecycle, request/response handling, session management, and form processing. Include proper error handling and user-friendly interfaces.
    `
  }
};