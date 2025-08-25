import { LessonContent } from '../../types/LessonTypes';

export const lesson_18_1: LessonContent = {
  title: 'Code Review and Quality Standards',
  type: 'lesson',
  duration: '90 min',
  module: 'Advanced Topics and Best Practices',
  content: {
    overview: 'Learn effective code review practices, quality standards, and tools to ensure maintainable, readable, and robust Java code. Understand how to establish and enforce coding standards in team environments.',
    objectives: [
      'Master effective code review techniques and best practices',
      'Understand industry-standard coding quality metrics',
      'Learn to use static analysis tools for code quality',
      'Implement coding standards and style guides',
      'Identify common code smells and anti-patterns',
      'Provide constructive feedback during code reviews',
      'Establish quality gates in development workflows'
    ],
    theory: '<div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Code Review and Quality Standards' +
      '</h1>' +
      '<p class="mt-3 text-blue-100 text-lg">Ensuring code quality through systematic review processes</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Code Review Fundamentals' +
      '</h2>' +
      '<p class="text-gray-700 mb-4 leading-relaxed text-lg">' +
      'Code review is a systematic examination of source code to identify and improve quality, ' +
      'maintainability, and adherence to standards. It\'s a critical practice for team collaboration ' +
      'and software quality assurance.' +
      '</p>' +
      '<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">' +
      '<h4 class="font-bold text-blue-800 mb-2">🎯 Benefits of Code Reviews</h4>' +
      '<ul class="text-blue-700 space-y-1">' +
      '<li>• <strong>Knowledge Sharing:</strong> Team members learn from each other</li>' +
      '<li>• <strong>Quality Improvement:</strong> Catch bugs and issues early</li>' +
      '<li>• <strong>Consistency:</strong> Enforce coding standards and practices</li>' +
      '<li>• <strong>Mentoring:</strong> Help junior developers grow</li>' +
      '<li>• <strong>Security:</strong> Identify potential vulnerabilities</li>' +
      '</ul>' +
      '</div>' +
      '<div class="grid md:grid-cols-2 gap-6">' +
      '<div class="bg-green-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-green-800 mb-2">✅ Best Practices</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Review small, focused changes</li>' +
      '<li>• Provide constructive feedback</li>' +
      '<li>• Focus on code, not the developer</li>' +
      '<li>• Use automated tools to assist</li>' +
      '<li>• Set clear expectations and standards</li>' +
      '<li>• Review code regularly and consistently</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-red-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-red-800 mb-2">⚠️ Common Pitfalls</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Reviewing too much code at once</li>' +
      '<li>• Focusing on style over substance</li>' +
      '<li>• Taking feedback personally</li>' +
      '<li>• Rushing through reviews</li>' +
      '<li>• Ignoring automated analysis tools</li>' +
      '<li>• Not following up on feedback</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Code Quality Metrics' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-indigo-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-indigo-800 mb-2">Key Quality Indicators</h4>' +
      '<p class="text-indigo-700 mb-3">Measurable metrics that indicate code quality and maintainability:</p>' +
      '<div class="bg-white p-4 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Important Metrics</h5>' +
      '<div class="grid md:grid-cols-2 gap-4 text-sm">' +
      '<div>' +
      '<strong>Cyclomatic Complexity</strong>' +
      '<p class="text-gray-600">Measures the number of linearly independent paths</p>' +
      '</div>' +
      '<div>' +
      '<strong>Code Coverage</strong>' +
      '<p class="text-gray-600">Percentage of code executed by tests</p>' +
      '</div>' +
      '<div>' +
      '<strong>Duplicate Code</strong>' +
      '<p class="text-gray-600">Amount of repeated code blocks</p>' +
      '</div>' +
      '<div>' +
      '<strong>Code Smells</strong>' +
      '<p class="text-gray-600">Indicators of deeper design problems</p>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">Quality Gates</h4>' +
      '<div class="overflow-x-auto">' +
      '<table class="min-w-full bg-white rounded border">' +
      '<thead>' +
      '<tr class="bg-gray-100">' +
      '<th class="py-2 px-4 text-left">Metric</th>' +
      '<th class="py-2 px-4 text-left">Threshold</th>' +
      '<th class="py-2 px-4 text-left">Purpose</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Code Coverage</td>' +
      '<td class="py-2 px-4">≥ 80%</td>' +
      '<td class="py-2 px-4">Ensure adequate testing</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Complexity</td>' +
      '<td class="py-2 px-4">≤ 10 per method</td>' +
      '<td class="py-2 px-4">Maintain readable code</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Duplications</td>' +
      '<td class="py-2 px-4">≤ 3%</td>' +
      '<td class="py-2 px-4">Reduce maintenance burden</td>' +
      '</tr>' +
      '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>' +
      'Static Analysis Tools' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-purple-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-purple-800 mb-2">Popular Java Analysis Tools</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">SonarQube</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Continuous inspection of code quality</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Multi-language support</li>' +
      '<li>• Quality gates and metrics</li>' +
      '<li>• Technical debt tracking</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Checkstyle</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Enforce coding standards</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Style guide enforcement</li>' +
      '<li>• Customizable rules</li>' +
      '<li>• Integration with build tools</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>' +
      'Code Review Process' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-orange-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-orange-800 mb-2">Review Workflow</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Pre-Review</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Self-review the code</li>' +
      '<li>• Ensure tests pass</li>' +
      '<li>• Add clear descriptions</li>' +
      '<li>• Follow team guidelines</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">During Review</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Focus on logic and design</li>' +
      '<li>• Ask clarifying questions</li>' +
      '<li>• Suggest improvements</li>' +
      '<li>• Approve when satisfied</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '</div>',
    codeExample: '// Complete Code Review Implementation\n\n' +
      '// 1. Example of Well-Structured Code for Review\n' +
      'public class OrderService {\n' +
      '    \n' +
      '    private final OrderRepository orderRepository;\n' +
      '    private final PaymentService paymentService;\n' +
      '    private final NotificationService notificationService;\n' +
      '    private final Logger logger = LoggerFactory.getLogger(OrderService.class);\n' +
      '    \n' +
      '    public OrderService(OrderRepository orderRepository, \n' +
      '                       PaymentService paymentService,\n' +
      '                       NotificationService notificationService) {\n' +
      '        this.orderRepository = orderRepository;\n' +
      '        this.paymentService = paymentService;\n' +
      '        this.notificationService = notificationService;\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Creates a new order and processes payment\n' +
      '     * \n' +
      '     * @param orderRequest the order details\n' +
      '     * @return the created order with ID\n' +
      '     * @throws OrderProcessingException if order creation fails\n' +
      '     */\n' +
      '    public Order createOrder(OrderRequest orderRequest) throws OrderProcessingException {\n' +
      '        try {\n' +
      '            // Validate order request\n' +
      '            validateOrderRequest(orderRequest);\n' +
      '            \n' +
      '            // Create order entity\n' +
      '            Order order = new Order();\n' +
      '            order.setCustomerId(orderRequest.getCustomerId());\n' +
      '            order.setItems(orderRequest.getItems());\n' +
      '            order.setTotalAmount(calculateTotal(orderRequest.getItems()));\n' +
      '            order.setStatus(OrderStatus.PENDING);\n' +
      '            order.setCreatedAt(LocalDateTime.now());\n' +
      '            \n' +
      '            // Save order\n' +
      '            Order savedOrder = orderRepository.save(order);\n' +
      '            \n' +
      '            // Process payment\n' +
      '            PaymentResult paymentResult = paymentService.processPayment(\n' +
      '                savedOrder.getId(), \n' +
      '                savedOrder.getTotalAmount(), \n' +
      '                orderRequest.getPaymentDetails()\n' +
      '            );\n' +
      '            \n' +
      '            // Update order status based on payment result\n' +
      '            if (paymentResult.isSuccessful()) {\n' +
      '                savedOrder.setStatus(OrderStatus.CONFIRMED);\n' +
      '                savedOrder.setPaymentId(paymentResult.getPaymentId());\n' +
      '                orderRepository.save(savedOrder);\n' +
      '                \n' +
      '                // Send confirmation notification\n' +
      '                notificationService.sendOrderConfirmation(savedOrder);\n' +
      '            } else {\n' +
      '                savedOrder.setStatus(OrderStatus.FAILED);\n' +
      '                orderRepository.save(savedOrder);\n' +
      '                throw new OrderProcessingException("Payment failed for order: " + savedOrder.getId());\n' +
      '            }\n' +
      '            \n' +
      '            logger.info("Order created successfully: {}", savedOrder.getId());\n' +
      '            return savedOrder;\n' +
      '            \n' +
      '        } catch (Exception e) {\n' +
      '            logger.error("Error creating order", e);\n' +
      '            throw new OrderProcessingException("Failed to create order", e);\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    private void validateOrderRequest(OrderRequest orderRequest) throws ValidationException {\n' +
      '        if (orderRequest.getCustomerId() == null) {\n' +
      '            throw new ValidationException("Customer ID is required");\n' +
      '        }\n' +
      '        \n' +
      '        if (orderRequest.getItems() == null || orderRequest.getItems().isEmpty()) {\n' +
      '            throw new ValidationException("Order must contain at least one item");\n' +
      '        }\n' +
      '        \n' +
      '        for (OrderItem item : orderRequest.getItems()) {\n' +
      '            if (item.getProductId() == null || item.getQuantity() <= 0) {\n' +
      '                throw new ValidationException("Invalid item: " + item);\n' +
      '            }\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    private BigDecimal calculateTotal(List<OrderItem> items) {\n' +
      '        return items.stream()\n' +
      '            .map(item -> item.getPrice().multiply(BigDecimal.valueOf(item.getQuantity())))\n' +
      '            .reduce(BigDecimal.ZERO, BigDecimal::add);\n' +
      '    }\n' +
      '}\n\n' +
      '// 2. Checkstyle Configuration Example\n' +
      '<?xml version="1.0"?>\n' +
      '<!DOCTYPE module PUBLIC\n' +
      '    "-//Checkstyle//DTD Checkstyle Configuration 1.3//EN"\n' +
      '    "https://checkstyle.org/dtds/configuration_1_3.dtd">\n\n' +
      '<module name="Checker">\n' +
      '    <property name="charset" value="UTF-8"/>\n' +
      '    <property name="severity" value="warning"/>\n' +
      '    <property name="fileExtensions" value="java, properties, xml"/>\n\n' +
      '    <!-- Excludes all \'module-info.java\' files -->\n' +
      '    <module name="BeforeExecutionExclusionFileFilter">\n' +
      '        <property name="fileNamePattern" value="module\\\\-info\\\\.java$"/>\n' +
      '    </module>\n\n' +
      '    <!-- Checks for whitespace -->\n' +
      '    <module name="FileTabCharacter"/>\n\n' +
      '    <module name="TreeWalker">\n' +
      '        <!-- Naming conventions -->\n' +
      '        <module name="ConstantName"/>\n' +
      '        <module name="LocalFinalVariableName"/>\n' +
      '        <module name="LocalVariableName"/>\n' +
      '        <module name="MemberName"/>\n' +
      '        <module name="MethodName"/>\n' +
      '        <module name="PackageName"/>\n' +
      '        <module name="ParameterName"/>\n' +
      '        <module name="StaticVariableName"/>\n' +
      '        <module name="TypeName"/>\n\n' +
      '        <!-- Imports -->\n' +
      '        <module name="AvoidStarImport"/>\n' +
      '        <module name="IllegalImport"/>\n' +
      '        <module name="RedundantImport"/>\n' +
      '        <module name="UnusedImports"/>\n\n' +
      '        <!-- Size violations -->\n' +
      '        <module name="LineLength">\n' +
      '            <property name="max" value="120"/>\n' +
      '        </module>\n' +
      '        <module name="MethodLength"/>\n' +
      '        <module name="ParameterNumber"/>\n\n' +
      '        <!-- Whitespace -->\n' +
      '        <module name="EmptyForIteratorPad"/>\n' +
      '        <module name="GenericWhitespace"/>\n' +
      '        <module name="MethodParamPad"/>\n' +
      '        <module name="NoWhitespaceAfter"/>\n' +
      '        <module name="NoWhitespaceBefore"/>\n' +
      '        <module name="OperatorWrap"/>\n' +
      '        <module name="ParenPad"/>\n' +
      '        <module name="TypecastParenPad"/>\n' +
      '        <module name="WhitespaceAfter"/>\n' +
      '        <module name="WhitespaceAround"/>\n\n' +
      '        <!-- Modifier Checks -->\n' +
      '        <module name="ModifierOrder"/>\n' +
      '        <module name="RedundantModifier"/>\n\n' +
      '        <!-- Blocks -->\n' +
      '        <module name="AvoidNestedBlocks"/>\n' +
      '        <module name="EmptyBlock"/>\n' +
      '        <module name="LeftCurly"/>\n' +
      '        <module name="NeedBraces"/>\n' +
      '        <module name="RightCurly"/>\n\n' +
      '        <!-- Common coding problems -->\n' +
      '        <module name="EmptyStatement"/>\n' +
      '        <module name="EqualsHashCode"/>\n' +
      '        <module name="HiddenField"/>\n' +
      '        <module name="IllegalInstantiation"/>\n' +
      '        <module name="InnerAssignment"/>\n' +
      '        <module name="MissingSwitchDefault"/>\n' +
      '        <module name="SimplifyBooleanExpression"/>\n' +
      '        <module name="SimplifyBooleanReturn"/>\n\n' +
      '        <!-- Class Design -->\n' +
      '        <module name="DesignForExtension"/>\n' +
      '        <module name="FinalClass"/>\n' +
      '        <module name="HideUtilityClassConstructor"/>\n' +
      '        <module name="InterfaceIsType"/>\n' +
      '        <module name="VisibilityModifier"/>\n\n' +
      '        <!-- Miscellaneous -->\n' +
      '        <module name="ArrayTypeStyle"/>\n' +
      '        <module name="FinalParameters"/>\n' +
      '        <module name="TodoComment"/>\n' +
      '        <module name="UpperEll"/>\n' +
      '    </module>\n' +
      '</module>\n\n' +
      '// 3. SonarQube Quality Profile Example\n' +
      '// This would be configured in SonarQube UI or via configuration files\n' +
      '{\n' +
      '  "name": "Java Best Practices",\n' +
      '  "language": "java",\n' +
      '  "rules": [\n' +
      '    {\n' +
      '      "key": "java:S1192",\n' +
      '      "severity": "MAJOR",\n' +
      '      "params": [\n' +
      '        {\n' +
      '          "key": "threshold",\n' +
      '          "value": "3"\n' +
      '        }\n' +
      '      ]\n' +
      '    },\n' +
      '    {\n' +
      '      "key": "java:S1481",\n' +
      '      "severity": "MINOR"\n' +
      '    },\n' +
      '    {\n' +
      '      "key": "java:S1118",\n' +
      '      "severity": "MAJOR"\n' +
      '    }\n' +
      '  ]\n' +
      '}\n\n' +
      '// 4. GitHub Actions for Code Quality\n' +
      'name: Code Quality Check\n\n' +
      'on: [push, pull_request]\n\n' +
      'jobs:\n' +
      '  code-quality:\n' +
      '    runs-on: ubuntu-latest\n' +
      '    steps:\n' +
      '    - uses: actions/checkout@v3\n' +
      '    \n' +
      '    - name: Set up JDK 17\n' +
      '      uses: actions/setup-java@v3\n' +
      '      with:\n' +
      '        java-version: \'17\'\n' +
      '        distribution: \'temurin\'\n' +
      '    \n' +
      '    - name: Cache Maven packages\n' +
      '      uses: actions/cache@v3\n' +
      '      with:\n' +
      '        path: ~/.m2\n' +
      '        key: \\${{ runner.os }}-m2-\\${{ hashFiles(\'**/pom.xml\') }}\n' +
      '        restore-keys: \\${{ runner.os }}-m2\n' +
      '    \n' +
      '    - name: Run Checkstyle\n' +
      '      run: mvn checkstyle:check\n' +
      '    \n' +
      '    - name: Run tests with coverage\n' +
      '      run: mvn test jacoco:report\n' +
      '    \n' +
      '    - name: Run SonarQube analysis\n' +
      '      run: mvn sonar:sonar\n' +
      '      env:\n' +
      '        SONAR_TOKEN: \\${{ secrets.SONAR_TOKEN }}\n' +
      '        SONAR_HOST_URL: \\${{ secrets.SONAR_HOST_URL }}\n',
    exercise: '<div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Exercise: Implement a Comprehensive Code Review Process' +
      '</h1>' +
      '<p class="mt-3 text-blue-100 text-lg">Create a code review workflow with automated quality checks and team guidelines</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Setup Code Quality Tools' +
      '</h2>' +
      '<div class="bg-blue-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-blue-800 mb-2">📋 Tool Configuration</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-blue-800 mb-2">Checkstyle</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Configure coding standards</li>' +
      '<li>• Integrate with build process</li>' +
      '<li>• Set up IDE plugins</li>' +
      '<li>• Define custom rules</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-blue-800 mb-2">SonarQube</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Set up quality profiles</li>' +
      '<li>• Configure quality gates</li>' +
      '<li>• Integrate with CI/CD</li>' +
      '<li>• Define metrics thresholds</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-gray-800 text-green-400 p-4 rounded-lg">' +
      '<h4 class="text-white mb-2">💡 Implementation Tasks</h4>' +
      '<pre class="text-sm">' +
      '1. Create Checkstyle configuration file\n' +
      '2. Set up SonarQube quality profiles\n' +
      '3. Configure Maven/Gradle for static analysis\n' +
      '4. Integrate tools with GitHub Actions\n' +
      '5. Create code review guidelines document\n' +
      '6. Set up pull request templates\n' +
      '7. Define team review responsibilities\n' +
      '8. Establish quality gate thresholds</pre>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Code Review Practice' +
      '</h2>' +
      '<div class="bg-indigo-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-indigo-800 mb-2">🔍 Review Process</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Review Checklist</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Functionality correctness</li>' +
      '<li>• Code readability</li>' +
      '<li>• Performance considerations</li>' +
      '<li>• Security implications</li>' +
      '<li>• Test coverage adequacy</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Feedback Guidelines</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Be specific and actionable</li>' +
      '<li>• Explain the reasoning</li>' +
      '<li>• Provide examples when possible</li>' +
      '<li>• Balance criticism with praise</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<div class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg mt-8">' +
      '<h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>' +
      '<p class="text-blue-100">' +
      'After completing this exercise, you\'ll have established a comprehensive code quality ' +
      'process with automated checks and effective team review practices.' +
      '</p>' +
      '</div>' +
      '</div>'
  }
};