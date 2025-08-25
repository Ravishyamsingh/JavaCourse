import { LessonContent } from '../../types/LessonTypes';

export const lesson_19_1: LessonContent = {
  title: 'Project Planning and Design',
  type: 'lesson',
  duration: '90 min',
  module: 'Project Development',
  content: {
    overview: 'Learn the essential processes of software project planning, requirements gathering, system architecture design, and project management methodologies that ensure successful project delivery.',
    objectives: [
      'Understand software project planning fundamentals',
      'Learn requirements gathering and analysis techniques',
      'Master system architecture design principles',
      'Explore technology selection criteria and decision-making',
      'Apply project management methodologies effectively',
      'Implement design patterns and best practices',
      'Create comprehensive project documentation'
    ],
    theory: '<div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Project Planning and Design' +
      '</h1>' +
      '<p class="mt-3 text-blue-100 text-lg">Foundation for successful software development projects</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Requirements Engineering' +
      '</h2>' +
      '<p class="text-gray-700 mb-4 leading-relaxed text-lg">' +
      'Requirements engineering is the process of defining, documenting, and maintaining requirements ' +
      'for a software system. It forms the foundation of successful project delivery.' +
      '</p>' +
      '<div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">' +
      '<h4 class="font-bold text-blue-800 mb-2">🎯 Types of Requirements</h4>' +
      '<ul class="text-blue-700 space-y-1">' +
      '<li>• <strong>Functional Requirements:</strong> What the system should do</li>' +
      '<li>• <strong>Non-functional Requirements:</strong> How the system should perform</li>' +
      '<li>• <strong>Business Requirements:</strong> High-level business objectives</li>' +
      '<li>• <strong>User Requirements:</strong> What users need to accomplish</li>' +
      '<li>• <strong>System Requirements:</strong> Technical specifications</li>' +
      '</ul>' +
      '</div>' +
      '<div class="grid md:grid-cols-2 gap-6">' +
      '<div class="bg-green-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-green-800 mb-2">✅ Requirements Best Practices</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Use clear, unambiguous language</li>' +
      '<li>• Make requirements testable and verifiable</li>' +
      '<li>• Prioritize requirements by business value</li>' +
      '<li>• Involve stakeholders in validation</li>' +
      '<li>• Document assumptions and constraints</li>' +
      '<li>• Maintain traceability throughout project</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-yellow-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-yellow-800 mb-2">⚠️ Common Challenges</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Incomplete or changing requirements</li>' +
      '<li>• Conflicting stakeholder needs</li>' +
      '<li>• Unclear acceptance criteria</li>' +
      '<li>• Scope creep during development</li>' +
      '<li>• Poor communication between teams</li>' +
      '<li>• Inadequate requirement validation</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'System Architecture Design' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-indigo-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-indigo-800 mb-2">Architectural Patterns</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Monolithic Architecture</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Single deployable unit with all components</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Simple deployment and testing</li>' +
      '<li>• Easy to develop initially</li>' +
      '<li>• Challenges with scaling</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Microservices Architecture</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Distributed services with independent deployment</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Independent scaling and deployment</li>' +
      '<li>• Technology diversity</li>' +
      '<li>• Complex service coordination</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">Design Considerations</h4>' +
      '<div class="overflow-x-auto">' +
      '<table class="min-w-full bg-white rounded border">' +
      '<thead>' +
      '<tr class="bg-gray-100">' +
      '<th class="py-2 px-4 text-left">Aspect</th>' +
      '<th class="py-2 px-4 text-left">Considerations</th>' +
      '<th class="py-2 px-4 text-left">Impact</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Scalability</td>' +
      '<td class="py-2 px-4">Horizontal vs Vertical scaling</td>' +
      '<td class="py-2 px-4">Performance under load</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Security</td>' +
      '<td class="py-2 px-4">Authentication, authorization, encryption</td>' +
      '<td class="py-2 px-4">Data protection and compliance</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Maintainability</td>' +
      '<td class="py-2 px-4">Code quality, modularity, documentation</td>' +
      '<td class="py-2 px-4">Long-term development costs</td>' +
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
      'Project Management Methodologies' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-purple-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-purple-800 mb-2">Agile Methodologies</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Scrum</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Sprint-based iterative development</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• 2-4 week sprints</li>' +
      '<li>• Daily standups</li>' +
      '<li>• Sprint planning and retrospectives</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Kanban</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Continuous flow and visual management</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Visual workflow boards</li>' +
      '<li>• Work-in-progress limits</li>' +
      '<li>• Continuous delivery</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>' +
      'Risk Management and Timeline Estimation' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-orange-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-orange-800 mb-2">Risk Assessment Process</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Risk Identification</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Technical risks</li>' +
      '<li>• Schedule risks</li>' +
      '<li>• Resource risks</li>' +
      '<li>• Business risks</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Estimation Techniques</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Expert judgment</li>' +
      '<li>• Analogous estimation</li>' +
      '<li>• Three-point estimation</li>' +
      '<li>• Planning poker</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '</div>',
    codeExample: '// Project Planning Models and Services\n\n' +
      '// Requirements Document Model\n' +
      'class RequirementsDocument {\n' +
      '    private String projectId;\n' +
      '    private String projectName;\n' +
      '    private List<FunctionalRequirement> functionalRequirements;\n' +
      '    private List<NonFunctionalRequirement> nonFunctionalRequirements;\n' +
      '    private List<Stakeholder> stakeholders;\n' +
      '    private Date createdDate;\n' +
      '    private String version;\n' +
      '    \n' +
      '    public RequirementsDocument(String projectId, String projectName) {\n' +
      '        this.projectId = projectId;\n' +
      '        this.projectName = projectName;\n' +
      '        this.functionalRequirements = new ArrayList<>();\n' +
      '        this.nonFunctionalRequirements = new ArrayList<>();\n' +
      '        this.stakeholders = new ArrayList<>();\n' +
      '        this.createdDate = new Date();\n' +
      '        this.version = "1.0";\n' +
      '    }\n' +
      '    \n' +
      '    public void addFunctionalRequirement(String id, String description, \n' +
      '                                       Priority priority, String acceptanceCriteria) {\n' +
      '        FunctionalRequirement req = new FunctionalRequirement(id, description, priority, acceptanceCriteria);\n' +
      '        this.functionalRequirements.add(req);\n' +
      '    }\n' +
      '    \n' +
      '    public void addStakeholder(String name, String role, String contact, \n' +
      '                             StakeholderType type, InfluenceLevel influence) {\n' +
      '        Stakeholder stakeholder = new Stakeholder(name, role, contact, type, influence);\n' +
      '        this.stakeholders.add(stakeholder);\n' +
      '    }\n' +
      '    \n' +
      '    // Getters and setters\n' +
      '    public String getProjectId() { return projectId; }\n' +
      '    public String getProjectName() { return projectName; }\n' +
      '    public List<FunctionalRequirement> getFunctionalRequirements() { return functionalRequirements; }\n' +
      '}\n\n' +
      '// Stakeholder Model\n' +
      'class Stakeholder {\n' +
      '    private String name;\n' +
      '    private String role;\n' +
      '    private String contact;\n' +
      '    private StakeholderType type;\n' +
      '    private InfluenceLevel influence;\n' +
      '    private List<String> responsibilities;\n' +
      '    \n' +
      '    public Stakeholder(String name, String role, String contact, \n' +
      '                      StakeholderType type, InfluenceLevel influence) {\n' +
      '        this.name = name;\n' +
      '        this.role = role;\n' +
      '        this.contact = contact;\n' +
      '        this.type = type;\n' +
      '        this.influence = influence;\n' +
      '        this.responsibilities = new ArrayList<>();\n' +
      '    }\n' +
      '    \n' +
      '    public void addResponsibility(String responsibility) {\n' +
      '        this.responsibilities.add(responsibility);\n' +
      '    }\n' +
      '    \n' +
      '    // Getters\n' +
      '    public String getName() { return name; }\n' +
      '    public String getRole() { return role; }\n' +
      '    public StakeholderType getType() { return type; }\n' +
      '    public InfluenceLevel getInfluence() { return influence; }\n' +
      '}\n\n' +
      'enum StakeholderType {\n' +
      '    BUSINESS_OWNER, END_USER, DEVELOPER, TESTER, PROJECT_MANAGER, ARCHITECT\n' +
      '}\n\n' +
      'enum InfluenceLevel {\n' +
      '    LOW, MEDIUM, HIGH, CRITICAL\n' +
      '}\n\n' +
      '// Functional Requirement Model\n' +
      'class FunctionalRequirement {\n' +
      '    private String id;\n' +
      '    private String description;\n' +
      '    private Priority priority;\n' +
      '    private String acceptanceCriteria;\n' +
      '    private RequirementStatus status;\n' +
      '    private List<String> dependencies;\n' +
      '    \n' +
      '    public FunctionalRequirement(String id, String description, \n' +
      '                               Priority priority, String acceptanceCriteria) {\n' +
      '        this.id = id;\n' +
      '        this.description = description;\n' +
      '        this.priority = priority;\n' +
      '        this.acceptanceCriteria = acceptanceCriteria;\n' +
      '        this.status = RequirementStatus.DRAFT;\n' +
      '        this.dependencies = new ArrayList<>();\n' +
      '    }\n' +
      '    \n' +
      '    public void addDependency(String dependencyId) {\n' +
      '        this.dependencies.add(dependencyId);\n' +
      '    }\n' +
      '    \n' +
      '    // Getters\n' +
      '    public String getId() { return id; }\n' +
      '    public Priority getPriority() { return priority; }\n' +
      '    public RequirementStatus getStatus() { return status; }\n' +
      '}\n\n' +
      'enum Priority {\n' +
      '    LOW, MEDIUM, HIGH, CRITICAL\n' +
      '}\n\n' +
      'enum RequirementStatus {\n' +
      '    DRAFT, APPROVED, IN_DEVELOPMENT, TESTING, COMPLETED, CANCELLED\n' +
      '}\n\n' +
      '// Project Planning Service\n' +
      'class ProjectPlanningService {\n' +
      '    \n' +
      '    public RequirementsDocument createRequirementsDocument(String projectId, String projectName) {\n' +
      '        return new RequirementsDocument(projectId, projectName);\n' +
      '    }\n' +
      '    \n' +
      '    public ProjectPlan createProjectPlan(String projectId, String projectName, \n' +
      '                                       Date startDate, ProjectMethodology methodology) {\n' +
      '        return new ProjectPlan(projectId, projectName, startDate, methodology);\n' +
      '    }\n' +
      '    \n' +
      '    public int estimateComplexity(List<FunctionalRequirement> requirements) {\n' +
      '        int complexity = 0;\n' +
      '        for (FunctionalRequirement req : requirements) {\n' +
      '            switch (req.getPriority()) {\n' +
      '                case LOW:\n' +
      '                    complexity += 1;\n' +
      '                    break;\n' +
      '                case MEDIUM:\n' +
      '                    complexity += 3;\n' +
      '                    break;\n' +
      '                case HIGH:\n' +
      '                    complexity += 5;\n' +
      '                    break;\n' +
      '                case CRITICAL:\n' +
      '                    complexity += 8;\n' +
      '                    break;\n' +
      '            }\n' +
      '        }\n' +
      '        return complexity;\n' +
      '    }\n' +
      '    \n' +
      '    public int estimateTimelineInDays(int complexity, int teamSize, double velocityFactor) {\n' +
      '        // Base estimation: complexity points / (team size * velocity factor)\n' +
      '        double baseEstimate = complexity / (teamSize * velocityFactor);\n' +
      '        \n' +
      '        // Add buffer for risks and unknowns (20%)\n' +
      '        double bufferedEstimate = baseEstimate * 1.2;\n' +
      '        \n' +
      '        return (int) Math.ceil(bufferedEstimate);\n' +
      '    }\n' +
      '    \n' +
      '    public TechnologyStack recommendTechnologyStack(ProjectType projectType) {\n' +
      '        TechnologyStack stack = new TechnologyStack();\n' +
      '        \n' +
      '        switch (projectType) {\n' +
      '            case WEB_APPLICATION:\n' +
      '                stack.setBackend("Spring Boot");\n' +
      '                stack.setFrontend("React/Angular");\n' +
      '                stack.setDatabase("PostgreSQL/MySQL");\n' +
      '                stack.setBuildTool("Maven/Gradle");\n' +
      '                break;\n' +
      '            case MOBILE_APPLICATION:\n' +
      '                stack.setBackend("Spring Boot");\n' +
      '                stack.setMobile("React Native/Flutter");\n' +
      '                stack.setDatabase("PostgreSQL");\n' +
      '                break;\n' +
      '            case DESKTOP_APPLICATION:\n' +
      '                stack.setDesktop("JavaFX/Swing");\n' +
      '                stack.setDatabase("H2/SQLite");\n' +
      '                break;\n' +
      '        }\n' +
      '        \n' +
      '        return stack;\n' +
      '    }\n' +
      '}\n\n' +
      '// Supporting Classes\n' +
      'class ProjectPlan {\n' +
      '    private String projectId;\n' +
      '    private String projectName;\n' +
      '    private Date startDate;\n' +
      '    private ProjectMethodology methodology;\n' +
      '    private List<ProjectPhase> phases;\n' +
      '    \n' +
      '    public ProjectPlan(String projectId, String projectName, \n' +
      '                      Date startDate, ProjectMethodology methodology) {\n' +
      '        this.projectId = projectId;\n' +
      '        this.projectName = projectName;\n' +
      '        this.startDate = startDate;\n' +
      '        this.methodology = methodology;\n' +
      '        this.phases = new ArrayList<>();\n' +
      '    }\n' +
      '    \n' +
      '    public void addPhase(String name, Date startDate, Date endDate) {\n' +
      '        ProjectPhase phase = new ProjectPhase(name, startDate, endDate);\n' +
      '        this.phases.add(phase);\n' +
      '    }\n' +
      '    \n' +
      '    // Getters\n' +
      '    public String getProjectName() { return projectName; }\n' +
      '    public List<ProjectPhase> getPhases() { return phases; }\n' +
      '}\n\n' +
      'class ProjectPhase {\n' +
      '    private String name;\n' +
      '    private Date startDate;\n' +
      '    private Date endDate;\n' +
      '    \n' +
      '    public ProjectPhase(String name, Date startDate, Date endDate) {\n' +
      '        this.name = name;\n' +
      '        this.startDate = startDate;\n' +
      '        this.endDate = endDate;\n' +
      '    }\n' +
      '    \n' +
      '    // Getters\n' +
      '    public String getName() { return name; }\n' +
      '}\n\n' +
      'enum ProjectMethodology {\n' +
      '    WATERFALL, AGILE_SCRUM, AGILE_KANBAN, LEAN, SPIRAL\n' +
      '}\n\n' +
      'enum ProjectType {\n' +
      '    WEB_APPLICATION, MOBILE_APPLICATION, DESKTOP_APPLICATION, MICROSERVICES\n' +
      '}\n\n' +
      'class TechnologyStack {\n' +
      '    private String backend;\n' +
      '    private String frontend;\n' +
      '    private String mobile;\n' +
      '    private String desktop;\n' +
      '    private String database;\n' +
      '    private String buildTool;\n' +
      '    \n' +
      '    // Setters\n' +
      '    public void setBackend(String backend) { this.backend = backend; }\n' +
      '    public void setFrontend(String frontend) { this.frontend = frontend; }\n' +
      '    public void setMobile(String mobile) { this.mobile = mobile; }\n' +
      '    public void setDesktop(String desktop) { this.desktop = desktop; }\n' +
      '    public void setDatabase(String database) { this.database = database; }\n' +
      '    public void setBuildTool(String buildTool) { this.buildTool = buildTool; }\n' +
      '    \n' +
      '    // Getters\n' +
      '    public String getBackend() { return backend; }\n' +
      '    public String getDatabase() { return database; }\n' +
      '}',
    exercise: '<div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Exercise: Create a Library Management System Project Plan' +
      '</h1>' +
      '<p class="mt-3 text-blue-100 text-lg">Develop a comprehensive project plan including requirements, stakeholders, and technology selection</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Requirements Analysis' +
      '</h2>' +
      '<div class="bg-blue-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-blue-800 mb-2">📋 Task Requirements</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-blue-800 mb-2">Functional Requirements</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Book catalog management</li>' +
      '<li>• Member registration and management</li>' +
      '<li>• Book borrowing and returning</li>' +
      '<li>• Fine calculation and payment</li>' +
      '<li>• Reservation system</li>' +
      '<li>• Reporting and analytics</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-blue-800 mb-2">Non-Functional Requirements</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• System response time < 3 seconds</li>' +
      '<li>• 99.9% uptime with daily backups</li>' +
      '<li>• Intuitive user interface</li>' +
      '<li>• Encrypted data storage</li>' +
      '<li>• Support for 500 concurrent users</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-gray-800 text-green-400 p-4 rounded-lg">' +
      '<h4 class="text-white mb-2">💡 Implementation Tasks</h4>' +
      '<pre class="text-sm">' +
      '1. Create RequirementsDocument for Library Management System\n' +
      '2. Add all functional requirements with priorities\n' +
      '3. Define non-functional requirements with metrics\n' +
      '4. Identify and add stakeholders with roles\n' +
      '5. Create project plan with phases and milestones\n' +
      '6. Estimate project complexity and timeline\n' +
      '7. Select appropriate technology stack\n' +
      '8. Identify potential risks and mitigation strategies</pre>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Stakeholder Identification' +
      '</h2>' +
      '<div class="bg-indigo-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-indigo-800 mb-2">🎯 Key Stakeholders</h4>' +
      '<div class="grid md:grid-cols-3 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Primary Users</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Head Librarian</li>' +
      '<li>• Library Staff</li>' +
      '<li>• Students</li>' +
      '<li>• Faculty Members</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Technical Team</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Project Manager</li>' +
      '<li>• System Architect</li>' +
      '<li>• Lead Developer</li>' +
      '<li>• QA Engineer</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Administrative</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• IT Administrator</li>' +
      '<li>• University Administration</li>' +
      '<li>• Budget Approver</li>' +
      '<li>• Compliance Officer</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>' +
      'Technology Selection and Risk Assessment' +
      '</h2>' +
      '<div class="bg-purple-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-purple-800 mb-2">🔧 Recommended Technology Stack</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Backend Technologies</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Java 17 with Spring Boot</li>' +
      '<li>• Spring Data JPA for database access</li>' +
      '<li>• Spring Security for authentication</li>' +
      '<li>• PostgreSQL for data storage</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Frontend Technologies</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• React.js for user interface</li>' +
      '<li>• Material-UI for component library</li>' +
      '<li>• Axios for API communication</li>' +
      '<li>• React Router for navigation</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-red-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-red-800 mb-2">⚠️ Identified Risks</h4>' +
      '<div class="overflow-x-auto">' +
      '<table class="min-w-full bg-white rounded border">' +
      '<thead>' +
      '<tr class="bg-gray-100">' +
      '<th class="py-2 px-4 text-left">Risk</th>' +
      '<th class="py-2 px-4 text-left">Impact</th>' +
      '<th class="py-2 px-4 text-left">Mitigation</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Data Migration</td>' +
      '<td class="py-2 px-4">High</td>' +
      '<td class="py-2 px-4">Thorough testing and backup procedures</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">User Adoption</td>' +
      '<td class="py-2 px-4">Medium</td>' +
      '<td class="py-2 px-4">Training sessions and user-friendly design</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">System Integration</td>' +
      '<td class="py-2 px-4">Medium</td>' +
      '<td class="py-2 px-4">API design and integration testing</td>' +
      '</tr>' +
      '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<div class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg mt-8">' +
      '<h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>' +
      '<p class="text-blue-100">' +
      'After completing this exercise, you will have created a comprehensive project plan ' +
      'with detailed requirements, stakeholder analysis, technology selection, and risk assessment ' +
      'for a real-world library management system.' +
      '</p>' +
      '</div>' +
      '</div>'
  }
};