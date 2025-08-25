import { LessonContent } from '../../types/LessonTypes';

export const lesson_16_2: LessonContent = {
  title: 'JSP (JavaServer Pages)',
  type: 'lesson',
  duration: '50 min',
  module: 'Web Development with Java',
  content: {
    overview: 'Learn JavaServer Pages (JSP) technology for creating dynamic web content by embedding Java code in HTML pages.',
    objectives: [
      'Understand JSP architecture and lifecycle',
      'Learn JSP syntax, directives, and scripting elements',
      'Master JSP implicit objects and scope',
      'Work with JSP tags and custom tag libraries',
      'Implement JSP best practices and MVC pattern',
      'Handle JSP error pages and exception handling'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          JSP (JavaServer Pages)
        </h1>
        <p class="mt-3 text-green-100 text-lg">Dynamic web content with embedded Java</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What is JSP?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            JavaServer Pages (JSP) is a technology that allows developers to create dynamic web pages by embedding 
            Java code directly into HTML. JSP pages are compiled into servlets by the container, providing the 
            power of Java with the simplicity of HTML templating.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🎯 Key Features</h4>
            <ul class="text-blue-700 space-y-1">
              <li>• <strong>Separation of Concerns:</strong> Separate presentation from business logic</li>
              <li>• <strong>Automatic Compilation:</strong> JSP pages compiled to servlets automatically</li>
              <li>• <strong>Implicit Objects:</strong> Built-in objects for request, response, session, etc.</li>
              <li>• <strong>Tag Libraries:</strong> Reusable custom tags and JSTL support</li>
              <li>• <strong>Expression Language:</strong> Simplified syntax for accessing data</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Advantages</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Easier to write than servlets</li>
                <li>• Better separation of presentation and logic</li>
                <li>• Automatic servlet generation</li>
                <li>• Rich tag library ecosystem</li>
                <li>• IDE support and debugging</li>
                <li>• Reusable components</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">⚠️ Considerations</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Can lead to mixing logic with presentation</li>
                <li>• Compilation overhead on first request</li>
                <li>• Debugging can be challenging</li>
                <li>• Performance considerations</li>
                <li>• Learning curve for complex features</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            JSP Architecture and Lifecycle
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">JSP Processing Model</h4>
              <p class="text-green-700 mb-3">JSP pages follow a translation and execution model:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Translation Phase</h5>
                  <ol class="text-sm space-y-1">
                    <li>1. JSP page is parsed</li>
                    <li>2. Servlet source code is generated</li>
                    <li>3. Servlet is compiled to bytecode</li>
                    <li>4. Servlet class is loaded</li>
                  </ol>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Execution Phase</h5>
                  <ol class="text-sm space-y-1">
                    <li>1. Servlet instance is created</li>
                    <li>2. jspInit() method is called</li>
                    <li>3. _jspService() handles requests</li>
                    <li>4. jspDestroy() cleans up resources</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">JSP Lifecycle Methods</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-semibold text-blue-800 mb-1">jspInit()</h5>
                  <p class="text-gray-700 text-sm">Called once when JSP is first loaded, similar to servlet init()</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-semibold text-blue-800 mb-1">_jspService()</h5>
                  <p class="text-gray-700 text-sm">Called for each request, contains the JSP page content</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-semibold text-blue-800 mb-1">jspDestroy()</h5>
                  <p class="text-gray-700 text-sm">Called when JSP is being removed from memory</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            JSP Syntax Elements
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Scripting Elements</h4>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Scriptlets</h5>
                  <p class="text-sm text-gray-700 mb-2"><code><% Java code %></code></p>
                  <p class="text-xs text-gray-600">Execute Java statements</p>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Expressions</h5>
                  <p class="text-sm text-gray-700 mb-2"><code><%= expression %></code></p>
                  <p class="text-xs text-gray-600">Output values to response</p>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Declarations</h5>
                  <p class="text-sm text-gray-700 mb-2"><code><%! declarations %></code></p>
                  <p class="text-xs text-gray-600">Declare variables and methods</p>
                </div>
              </div>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Directives</h4>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-indigo-800 mb-2">Page Directive</h5>
                  <p class="text-sm text-gray-700 mb-2"><code><%@ page ... %></code></p>
                  <p class="text-xs text-gray-600">Page-level settings and imports</p>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-indigo-800 mb-2">Include Directive</h5>
                  <p class="text-sm text-gray-700 mb-2"><code><%@ include ... %></code></p>
                  <p class="text-xs text-gray-600">Include files at translation time</p>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-indigo-800 mb-2">Taglib Directive</h5>
                  <p class="text-sm text-gray-700 mb-2"><code><%@ taglib ... %></code></p>
                  <p class="text-xs text-gray-600">Import custom tag libraries</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            JSP Implicit Objects
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Built-in Objects</h4>
              <p class="text-orange-700 mb-3">JSP provides several implicit objects available in all JSP pages:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">Request/Response Objects</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <code class="bg-gray-100 px-2 py-1 rounded">request</code> - HttpServletRequest</li>
                    <li>• <code class="bg-gray-100 px-2 py-1 rounded">response</code> - HttpServletResponse</li>
                    <li>• <code class="bg-gray-100 px-2 py-1 rounded">session</code> - HttpSession</li>
                    <li>• <code class="bg-gray-100 px-2 py-1 rounded">application</code> - ServletContext</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">JSP-Specific Objects</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <code class="bg-gray-100 px-2 py-1 rounded">out</code> - JspWriter</li>
                    <li>• <code class="bg-gray-100 px-2 py-1 rounded">pageContext</code> - PageContext</li>
                    <li>• <code class="bg-gray-100 px-2 py-1 rounded">page</code> - Object (this)</li>
                    <li>• <code class="bg-gray-100 px-2 py-1 rounded">config</code> - ServletConfig</li>
                    <li>• <code class="bg-gray-100 px-2 py-1 rounded">exception</code> - Throwable</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Scope and Attributes</h4>
              <div class="grid md:grid-cols-4 gap-3">
                <div class="bg-white p-3 rounded border text-center">
                  <h5 class="font-bold text-red-800 mb-1">Page Scope</h5>
                  <p class="text-xs text-gray-600">Current page only</p>
                </div>
                <div class="bg-white p-3 rounded border text-center">
                  <h5 class="font-bold text-red-800 mb-1">Request Scope</h5>
                  <p class="text-xs text-gray-600">Current request</p>
                </div>
                <div class="bg-white p-3 rounded border text-center">
                  <h5 class="font-bold text-red-800 mb-1">Session Scope</h5>
                  <p class="text-xs text-gray-600">User session</p>
                </div>
                <div class="bg-white p-3 rounded border text-center">
                  <h5 class="font-bold text-red-800 mb-1">Application Scope</h5>
                  <p class="text-xs text-gray-600">Entire application</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            JSP Standard Actions and JSTL
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Standard Actions</h4>
              <p class="text-teal-700 mb-3">Built-in JSP actions for common tasks:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">Navigation Actions</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <code><jsp:include></code> - Include content</li>
                    <li>• <code><jsp:forward></code> - Forward request</li>
                    <li>• <code><jsp:param></code> - Pass parameters</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">JavaBean Actions</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <code><jsp:useBean></code> - Use JavaBean</li>
                    <li>• <code><jsp:setProperty></code> - Set properties</li>
                    <li>• <code><jsp:getProperty></code> - Get properties</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">JSTL (JSP Standard Tag Library)</h4>
              <p class="text-blue-700 mb-3">Powerful tag library for common JSP tasks:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Core Tags</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <code><c:out></code> - Output values</li>
                    <li>• <code><c:if></code> - Conditional logic</li>
                    <li>• <code><c:forEach></code> - Iteration</li>
                    <li>• <code><c:choose></code> - Multiple conditions</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Other Libraries</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <strong>fmt:</strong> Formatting and i18n</li>
                    <li>• <strong>sql:</strong> Database operations</li>
                    <li>• <strong>xml:</strong> XML processing</li>
                    <li>• <strong>fn:</strong> String functions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            JSP Best Practices
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Design Principles</h4>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Do's</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Use JSTL and EL instead of scriptlets</li>
                    <li>Separate presentation from business logic</li>
                    <li>Use custom tags for reusable components</li>
                    <li>Implement proper error handling</li>
                    <li>Follow MVC pattern</li>
                    <li>Use page directives appropriately</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Don'ts</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Avoid excessive scriptlet usage</li>
                    <li>Don't put business logic in JSP</li>
                    <li>Avoid direct database access in JSP</li>
                    <li>Don't ignore exception handling</li>
                    <li>Avoid complex Java code in pages</li>
                    <li>Don't mix different concerns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
// Basic JSP Page Structure
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.Date, java.text.SimpleDateFormat" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>JSP Example</title>
</head>
<body>
    <h1>Welcome to JSP!</h1>
    
    <!-- JSP Expression -->
    <p>Current time: <%= new Date() %></p>
    
    <!-- JSP Scriptlet -->
    <%
        String userName = request.getParameter("name");
        if (userName == null || userName.trim().isEmpty()) {
            userName = "Guest";
        }
    %>
    
    <p>Hello, <%= userName %>!</p>
    
    <!-- JSP Declaration -->
    <%!
        private String formatDate(Date date) {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            return sdf.format(date);
        }
        
        private int visitCount = 0;
    %>
    
    <p>Formatted time: <%= formatDate(new Date()) %></p>
    <p>Page visits: <%= ++visitCount %></p>
</body>
</html>

// JSP with JSTL Example
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>JSTL Example</title>
</head>
<body>
    <h1>Product Catalog</h1>
    
    <!-- Set variables using JSTL -->
    <c:set var="currentUser" value="John Doe" />
    
    <!-- Conditional display -->
    <c:choose>
        <c:when test="not empty currentUser">
            <div class="user-info">
                <h2>Welcome back, <c:out value="currentUser" />!</h2>
            </div>
        </c:when>
        <c:otherwise>
            <p><a href="login.jsp">Please log in</a></p>
        </c:otherwise>
    </c:choose>
    
    <!-- Loop example -->
    <c:forEach var="i" begin="1" end="5">
        <div class="product">
            <h3>Product number: <c:out value="i" /></h3>
            <p>Price: <fmt:formatNumber value="10.99" type="currency" /></p>
        </div>
    </c:forEach>
</body>
</html>

// JSP with JavaBean
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:useBean id="user" class="com.example.model.User" scope="session" />

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>User Profile</title>
</head>
<body>
    <h1>User Profile</h1>
    
    <!-- Check if form was submitted -->
    <% if ("POST".equals(request.getMethod())) { %>
        <jsp:setProperty name="user" property="*" />
        <p style="color: green;">Profile updated successfully!</p>
    <% } %>
    
    <form method="post">
        <table>
            <tr>
                <td>Name:</td>
                <td>
                    <input type="text" name="name" value="<jsp:getProperty name="user" property="name" />" />
                </td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>
                    <input type="email" name="email" value="<jsp:getProperty name="user" property="email" />" />
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="submit" value="Update Profile" />
                </td>
            </tr>
        </table>
    </form>
    
    <h2>Current Profile Information</h2>
    <p>Name: <jsp:getProperty name="user" property="name" /></p>
    <p>Email: <jsp:getProperty name="user" property="email" /></p>
</body>
</html>

// JSP Include Example
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>JSP Actions Example</title>
</head>
<body>
    <!-- Include header -->
    <jsp:include page="header.jsp">
        <jsp:param name="pageTitle" value="Main Page" />
    </jsp:include>
    
    <main>
        <h1>Welcome to Our Website</h1>
        <p>This is the main content area.</p>
    </main>
    
    <!-- Include footer -->
    <jsp:include page="footer.jsp" />
</body>
</html>
    `,
    exercise: `
      **🎯 JSP (JavaServer Pages) Exercises**

      **Exercise 1: Basic JSP Page**
      Create a JSP page with the following features:
      - Use page directives to set content type and import necessary classes
      - Display current date and time using JSP expressions
      - Accept a "username" parameter and display a personalized greeting
      - Use JSP scriptlets to implement simple logic
      - Include proper HTML structure and basic styling

      **Exercise 2: JSP with JSTL**
      Build a product listing page using JSTL:
      - Use JSTL core tags for conditional logic and loops
      - Create a list of products with name, price, and availability
      - Display products using c:forEach loop
      - Use c:if and c:choose for conditional display
      - Format prices using fmt:formatNumber
      - Implement proper error handling

      **Exercise 3: JSP with JavaBeans**
      Create a user management system:
      - Create a User JavaBean with properties (name, email, age)
      - Use jsp:useBean to instantiate the bean
      - Create a form to collect user information
      - Use jsp:setProperty and jsp:getProperty for data binding
      - Display user information after form submission
      - Implement form validation

      **Exercise 4: JSP Include and Forward**
      Build a multi-page application:
      - Create header.jsp and footer.jsp as reusable components
      - Use jsp:include to include header and footer in main pages
      - Implement navigation between pages
      - Use jsp:forward for conditional page routing
      - Pass parameters between pages using jsp:param

      **Exercise 5: Error Handling**
      Implement comprehensive error handling:
      - Create a custom error page using isErrorPage directive
      - Handle different types of exceptions
      - Display user-friendly error messages
      - Implement logging for debugging purposes
      - Test error scenarios and recovery

      **Deliverable:**
      Create a complete JSP-based web application that demonstrates understanding of JSP syntax, JSTL usage, JavaBean integration, page composition, and error handling. Include proper separation of concerns and follow JSP best practices.
    `
  }
};