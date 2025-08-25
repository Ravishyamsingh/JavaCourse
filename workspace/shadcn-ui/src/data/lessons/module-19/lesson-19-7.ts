import { LessonContent } from '../../types/LessonTypes';

export const lesson_19_7: LessonContent = {
  title: 'Complete Full-Stack Project',
  type: 'lesson',
  duration: '180 min',
  module: 'Project Development',
  content: {
    overview: 'Integrate all learned technologies to build a complete full-stack application, covering frontend development, backend APIs, database design, security, testing, and deployment strategies.',
    objectives: [
      'Design and implement a complete full-stack architecture',
      'Integrate frontend and backend technologies seamlessly',
      'Implement comprehensive security across all layers',
      'Create automated testing strategies for full-stack applications',
      'Deploy applications to production environments',
      'Implement monitoring and maintenance procedures',
      'Apply DevOps practices for continuous integration and deployment'
    ],
    theory: '<div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Complete Full-Stack Project' +
      '</h1>' +
      '<p class="mt-3 text-purple-100 text-lg">End-to-end application development and deployment</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Full-Stack Architecture Design' +
      '</h2>' +
      '<p class="text-gray-700 mb-4 leading-relaxed text-lg">' +
      'Modern full-stack applications require careful architecture planning to ensure scalability, ' +
      'maintainability, and performance across all layers of the application stack.' +
      '</p>' +
      '<div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">' +
      '<h4 class="font-bold text-purple-800 mb-2">🏗️ Architecture Layers</h4>' +
      '<ul class="text-purple-700 space-y-1">' +
      '<li>• <strong>Frontend:</strong> React/Angular/Vue.js with responsive design</li>' +
      '<li>• <strong>API Gateway:</strong> Request routing and load balancing</li>' +
      '<li>• <strong>Backend Services:</strong> Spring Boot microservices</li>' +
      '<li>• <strong>Database Layer:</strong> Relational and NoSQL databases</li>' +
      '<li>• <strong>Caching Layer:</strong> Redis for performance optimization</li>' +
      '<li>• <strong>Message Queue:</strong> Asynchronous processing</li>' +
      '</ul>' +
      '</div>' +
      '<div class="grid md:grid-cols-2 gap-6">' +
      '<div class="bg-green-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-green-800 mb-2">✅ Frontend Technologies</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• React with TypeScript</li>' +
      '<li>• State management (Redux/Context)</li>' +
      '<li>• UI component libraries</li>' +
      '<li>• Progressive Web App features</li>' +
      '<li>• Mobile-responsive design</li>' +
      '<li>• Performance optimization</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">🔧 Backend Technologies</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Spring Boot with Spring Security</li>' +
      '<li>• RESTful APIs with OpenAPI</li>' +
      '<li>• Database integration (JPA/Hibernate)</li>' +
      '<li>• Message queues (RabbitMQ/Kafka)</li>' +
      '<li>• Caching (Redis/Hazelcast)</li>' +
      '<li>• Monitoring and logging</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'DevOps and Deployment' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-indigo-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-indigo-800 mb-2">Deployment Pipeline</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">CI/CD Pipeline</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Automated build and deployment</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• GitHub Actions/Jenkins</li>' +
      '<li>• Automated testing</li>' +
      '<li>• Code quality checks</li>' +
      '<li>• Security scanning</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Containerization</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Docker and Kubernetes</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Multi-stage Docker builds</li>' +
      '<li>• Kubernetes orchestration</li>' +
      '<li>• Service mesh (Istio)</li>' +
      '<li>• Auto-scaling configuration</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>' +
      'Testing Strategies' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-cyan-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-cyan-800 mb-2">Comprehensive Testing</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-cyan-800 mb-2">Frontend Testing</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Unit tests with Jest</li>' +
      '<li>• Component testing with React Testing Library</li>' +
      '<li>• End-to-end testing with Cypress</li>' +
      '<li>• Visual regression testing</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-cyan-800 mb-2">Backend Testing</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Unit tests with JUnit 5</li>' +
      '<li>• Integration tests with TestContainers</li>' +
      '<li>• API contract testing</li>' +
      '<li>• Performance testing with JMeter</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>' +
      'Production Monitoring' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-orange-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-orange-800 mb-2">Monitoring and Observability</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Application Monitoring</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Metrics with Micrometer</li>' +
      '<li>• Distributed tracing</li>' +
      '<li>• Health checks and readiness probes</li>' +
      '<li>• Error tracking and alerting</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Infrastructure Monitoring</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Server resource monitoring</li>' +
      '<li>• Database performance tracking</li>' +
      '<li>• Network and security monitoring</li>' +
      '<li>• Log aggregation and analysis</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '</div>',
    codeExample: '// Complete Full-Stack E-Learning Platform\n\n' +
      '// 1. Backend - Course Entity\n' +
      '@Entity\n' +
      '@Table(name = "courses")\n' +
      'public class Course {\n' +
      '    \n' +
      '    @Id\n' +
      '    @GeneratedValue(strategy = GenerationType.IDENTITY)\n' +
      '    private Long id;\n' +
      '    \n' +
      '    @NotBlank\n' +
      '    @Size(min = 5, max = 200)\n' +
      '    private String title;\n' +
      '    \n' +
      '    @Column(columnDefinition = "TEXT")\n' +
      '    private String description;\n' +
      '    \n' +
      '    @NotNull\n' +
      '    @DecimalMin("0.0")\n' +
      '    private BigDecimal price;\n' +
      '    \n' +
      '    @ManyToOne(fetch = FetchType.LAZY)\n' +
      '    @JoinColumn(name = "instructor_id")\n' +
      '    private User instructor;\n' +
      '    \n' +
      '    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)\n' +
      '    private List<Lesson> lessons = new ArrayList<>();\n' +
      '    \n' +
      '    @ManyToMany(mappedBy = "enrolledCourses")\n' +
      '    private Set<User> students = new HashSet<>();\n' +
      '    \n' +
      '    @Enumerated(EnumType.STRING)\n' +
      '    private CourseStatus status;\n' +
      '    \n' +
      '    @CreationTimestamp\n' +
      '    private LocalDateTime createdAt;\n' +
      '    \n' +
      '    // Constructors, getters, and setters\n' +
      '    public Course() {}\n' +
      '    \n' +
      '    public Course(String title, String description, BigDecimal price, User instructor) {\n' +
      '        this.title = title;\n' +
      '        this.description = description;\n' +
      '        this.price = price;\n' +
      '        this.instructor = instructor;\n' +
      '        this.status = CourseStatus.DRAFT;\n' +
      '    }\n' +
      '    \n' +
      '    public Long getId() { return id; }\n' +
      '    public String getTitle() { return title; }\n' +
      '    public void setTitle(String title) { this.title = title; }\n' +
      '    public String getDescription() { return description; }\n' +
      '    public void setDescription(String description) { this.description = description; }\n' +
      '    public BigDecimal getPrice() { return price; }\n' +
      '    public void setPrice(BigDecimal price) { this.price = price; }\n' +
      '    public User getInstructor() { return instructor; }\n' +
      '    public List<Lesson> getLessons() { return lessons; }\n' +
      '    public Set<User> getStudents() { return students; }\n' +
      '    public CourseStatus getStatus() { return status; }\n' +
      '    public void setStatus(CourseStatus status) { this.status = status; }\n' +
      '}\n\n' +
      'enum CourseStatus {\n' +
      '    DRAFT, PUBLISHED, ARCHIVED\n' +
      '}\n\n' +
      '// 2. REST Controller with Full CRUD\n' +
      '@RestController\n' +
      '@RequestMapping("/api/v1/courses")\n' +
      '@SecurityRequirement(name = "bearerAuth")\n' +
      '@Tag(name = "Courses", description = "Course management API")\n' +
      'public class CourseController {\n' +
      '    \n' +
      '    private final CourseService courseService;\n' +
      '    private final EnrollmentService enrollmentService;\n' +
      '    \n' +
      '    public CourseController(CourseService courseService, \n' +
      '                           EnrollmentService enrollmentService) {\n' +
      '        this.courseService = courseService;\n' +
      '        this.enrollmentService = enrollmentService;\n' +
      '    }\n' +
      '    \n' +
      '    @GetMapping\n' +
      '    @Operation(summary = "Get all courses")\n' +
      '    public ResponseEntity<PagedResponse<CourseDto>> getAllCourses(\n' +
      '            @RequestParam(defaultValue = "0") int page,\n' +
      '            @RequestParam(defaultValue = "12") int size,\n' +
      '            @RequestParam(required = false) String category,\n' +
      '            @RequestParam(required = false) String search,\n' +
      '            @RequestParam(defaultValue = "createdAt") String sortBy,\n' +
      '            @RequestParam(defaultValue = "desc") String sortDir) {\n' +
      '        \n' +
      '        Pageable pageable = PageRequest.of(page, size, \n' +
      '            Sort.by(Sort.Direction.fromString(sortDir), sortBy));\n' +
      '        \n' +
      '        Page<Course> courses = courseService.findCourses(category, search, pageable);\n' +
      '        \n' +
      '        List<CourseDto> courseDtos = courses.getContent().stream()\n' +
      '                .map(CourseDto::fromEntity)\n' +
      '                .collect(Collectors.toList());\n' +
      '        \n' +
      '        PagedResponse<CourseDto> response = new PagedResponse<>(\n' +
      '            courseDtos, page, size, courses.getTotalElements(), \n' +
      '            courses.getTotalPages(), courses.isLast());\n' +
      '        \n' +
      '        return ResponseEntity.ok(response);\n' +
      '    }\n' +
      '    \n' +
      '    @PostMapping("/{courseId}/enroll")\n' +
      '    @PreAuthorize("hasRole(\'STUDENT\')")\n' +
      '    @Operation(summary = "Enroll in course")\n' +
      '    public ResponseEntity<EnrollmentDto> enrollInCourse(\n' +
      '            @PathVariable Long courseId,\n' +
      '            Authentication authentication) {\n' +
      '        \n' +
      '        String username = authentication.getName();\n' +
      '        Enrollment enrollment = enrollmentService.enrollStudent(courseId, username);\n' +
      '        \n' +
      '        return ResponseEntity.ok(EnrollmentDto.fromEntity(enrollment));\n' +
      '    }\n' +
      '    \n' +
      '    @GetMapping("/{courseId}/progress")\n' +
      '    @PreAuthorize("hasRole(\'STUDENT\') or hasRole(\'INSTRUCTOR\')")\n' +
      '    @Operation(summary = "Get course progress")\n' +
      '    public ResponseEntity<CourseProgressDto> getCourseProgress(\n' +
      '            @PathVariable Long courseId,\n' +
      '            Authentication authentication) {\n' +
      '        \n' +
      '        String username = authentication.getName();\n' +
      '        CourseProgress progress = courseService.getCourseProgress(courseId, username);\n' +
      '        \n' +
      '        return ResponseEntity.ok(CourseProgressDto.fromEntity(progress));\n' +
      '    }\n' +
      '}\n\n' +
      '// 3. Frontend React Component\n' +
      '// CourseList.tsx\n' +
      'import React, { useState, useEffect } from "react";\n' +
      'import { useQuery, useMutation, useQueryClient } from "react-query";\n' +
      'import { courseApi } from "../services/courseApi";\n' +
      'import { Course, CourseFilters } from "../types/Course";\n' +
      '\n' +
      'interface CourseListProps {\n' +
      '  filters: CourseFilters;\n' +
      '}\n' +
      '\n' +
      'export const CourseList: React.FC<CourseListProps> = ({ filters }) => {\n' +
      '  const [page, setPage] = useState(0);\n' +
      '  const queryClient = useQueryClient();\n' +
      '  \n' +
      '  const {\n' +
      '    data: coursesData,\n' +
      '    isLoading,\n' +
      '    error,\n' +
      '    refetch\n' +
      '  } = useQuery(\n' +
      '    ["courses", page, filters],\n' +
      '    () => courseApi.getCourses({ page, size: 12, ...filters }),\n' +
      '    {\n' +
      '      keepPreviousData: true,\n' +
      '      staleTime: 5 * 60 * 1000, // 5 minutes\n' +
      '    }\n' +
      '  );\n' +
      '  \n' +
      '  const enrollMutation = useMutation(\n' +
      '    (courseId: number) => courseApi.enrollInCourse(courseId),\n' +
      '    {\n' +
      '      onSuccess: () => {\n' +
      '        queryClient.invalidateQueries(["courses"]);\n' +
      '        queryClient.invalidateQueries(["enrollments"]);\n' +
      '      },\n' +
      '      onError: (error: any) => {\n' +
      '        console.error("Enrollment failed:", error);\n' +
      '      }\n' +
      '    }\n' +
      '  );\n' +
      '  \n' +
      '  const handleEnroll = async (courseId: number) => {\n' +
      '    try {\n' +
      '      await enrollMutation.mutateAsync(courseId);\n' +
      '    } catch (error) {\n' +
      '      // Error handling is done in mutation onError\n' +
      '    }\n' +
      '  };\n' +
      '  \n' +
      '  if (isLoading) {\n' +
      '    return (\n' +
      '      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\n' +
      '        {Array.from({ length: 6 }).map((_, index) => (\n' +
      '          <div key={index} className="animate-pulse">\n' +
      '            <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>\n' +
      '            <div className="bg-gray-300 h-4 rounded mb-2"></div>\n' +
      '            <div className="bg-gray-300 h-4 rounded w-3/4"></div>\n' +
      '          </div>\n' +
      '        ))}\n' +
      '      </div>\n' +
      '    );\n' +
      '  }\n' +
      '  \n' +
      '  if (error) {\n' +
      '    return (\n' +
      '      <div className="text-center py-12">\n' +
      '        <p className="text-red-600 mb-4">Failed to load courses</p>\n' +
      '        <button \n' +
      '          onClick={() => refetch()}\n' +
      '          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"\n' +
      '        >\n' +
      '          Retry\n' +
      '        </button>\n' +
      '      </div>\n' +
      '    );\n' +
      '  }\n' +
      '  \n' +
      '  return (\n' +
      '    <div>\n' +
      '      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\n' +
      '        {coursesData?.content.map((course: Course) => (\n' +
      '          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">\n' +
      '            <img \n' +
      '              src={course.thumbnailUrl || "/default-course.jpg"} \n' +
      '              alt={course.title}\n' +
      '              className="w-full h-48 object-cover"\n' +
      '            />\n' +
      '            <div className="p-6">\n' +
      '              <h3 className="text-xl font-bold mb-2">{course.title}</h3>\n' +
      '              <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>\n' +
      '              <div className="flex justify-between items-center mb-4">\n' +
      '                <span className="text-2xl font-bold text-green-600">\n' +
      '                  ${course.price}\n' +
      '                </span>\n' +
      '                <span className="text-sm text-gray-500">\n' +
      '                  {course.lessons.length} lessons\n' +
      '                </span>\n' +
      '              </div>\n' +
      '              <button\n' +
      '                onClick={() => handleEnroll(course.id)}\n' +
      '                disabled={enrollMutation.isLoading}\n' +
      '                className="w-full bg-blue-500 text-white py-2 px-4 rounded \n' +
      '                         hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"\n' +
      '              >\n' +
      '                {enrollMutation.isLoading ? "Enrolling..." : "Enroll Now"}\n' +
      '              </button>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        ))}\n' +
      '      </div>\n' +
      '      \n' +
      '      {/* Pagination */}\n' +
      '      <div className="flex justify-center mt-8">\n' +
      '        <nav className="flex space-x-2">\n' +
      '          <button\n' +
      '            onClick={() => setPage(Math.max(0, page - 1))}\n' +
      '            disabled={page === 0}\n' +
      '            className="px-3 py-2 bg-gray-200 rounded disabled:opacity-50"\n' +
      '          >\n' +
      '            Previous\n' +
      '          </button>\n' +
      '          \n' +
      '          <span className="px-3 py-2 bg-blue-500 text-white rounded">\n' +
      '            Page {page + 1} of {coursesData?.totalPages || 1}\n' +
      '          </span>\n' +
      '          \n' +
      '          <button\n' +
      '            onClick={() => setPage(page + 1)}\n' +
      '            disabled={coursesData?.last}\n' +
      '            className="px-3 py-2 bg-gray-200 rounded disabled:opacity-50"\n' +
      '          >\n' +
      '            Next\n' +
      '          </button>\n' +
      '        </nav>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  );\n' +
      '};\n\n' +
      '// 4. API Service Layer\n' +
      '// courseApi.ts\n' +
      'import axios from "axios";\n' +
      'import { Course, CourseFilters, PagedResponse } from "../types/Course";\n' +
      '\n' +
      'const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api/v1";\n' +
      '\n' +
      'const apiClient = axios.create({\n' +
      '  baseURL: API_BASE_URL,\n' +
      '  timeout: 10000,\n' +
      '});\n' +
      '\n' +
      '// Request interceptor for authentication\n' +
      'apiClient.interceptors.request.use(\n' +
      '  (config) => {\n' +
      '    const token = localStorage.getItem("authToken");\n' +
      '    if (token) {\n' +
      '      config.headers.Authorization = `Bearer ${token}`;\n' +
      '    }\n' +
      '    return config;\n' +
      '  },\n' +
      '  (error) => Promise.reject(error)\n' +
      ');\n' +
      '\n' +
      '// Response interceptor for error handling\n' +
      'apiClient.interceptors.response.use(\n' +
      '  (response) => response,\n' +
      '  (error) => {\n' +
      '    if (error.response?.status === 401) {\n' +
      '      localStorage.removeItem("authToken");\n' +
      '      window.location.href = "/login";\n' +
      '    }\n' +
      '    return Promise.reject(error);\n' +
      '  }\n' +
      ');\n' +
      '\n' +
      'export const courseApi = {\n' +
      '  \n' +
      '  async getCourses(params: CourseFilters & { page: number; size: number }): \n' +
      '    Promise<PagedResponse<Course>> {\n' +
      '    const response = await apiClient.get("/courses", { params });\n' +
      '    return response.data;\n' +
      '  },\n' +
      '  \n' +
      '  async getCourseById(id: number): Promise<Course> {\n' +
      '    const response = await apiClient.get(`/courses/${id}`);\n' +
      '    return response.data;\n' +
      '  },\n' +
      '  \n' +
      '  async createCourse(course: Omit<Course, "id" | "createdAt">): Promise<Course> {\n' +
      '    const response = await apiClient.post("/courses", course);\n' +
      '    return response.data;\n' +
      '  },\n' +
      '  \n' +
      '  async updateCourse(id: number, course: Partial<Course>): Promise<Course> {\n' +
      '    const response = await apiClient.put(`/courses/${id}`, course);\n' +
      '    return response.data;\n' +
      '  },\n' +
      '  \n' +
      '  async deleteCourse(id: number): Promise<void> {\n' +
      '    await apiClient.delete(`/courses/${id}`);\n' +
      '  },\n' +
      '  \n' +
      '  async enrollInCourse(courseId: number): Promise<any> {\n' +
      '    const response = await apiClient.post(`/courses/${courseId}/enroll`);\n' +
      '    return response.data;\n' +
      '  },\n' +
      '  \n' +
      '  async getCourseProgress(courseId: number): Promise<any> {\n' +
      '    const response = await apiClient.get(`/courses/${courseId}/progress`);\n' +
      '    return response.data;\n' +
      '  }\n' +
      '};\n\n' +
      '// 5. Docker Configuration\n' +
      '// Dockerfile for Backend\n' +
      'FROM openjdk:17-jdk-slim\n' +
      '\n' +
      'WORKDIR /app\n' +
      '\n' +
      'COPY target/elearning-api-1.0.0.jar app.jar\n' +
      '\n' +
      'EXPOSE 8080\n' +
      '\n' +
      'ENTRYPOINT ["java", "-jar", "app.jar"]\n' +
      '\n' +
      '// docker-compose.yml\n' +
      'version: "3.8"\n' +
      'services:\n' +
      '  frontend:\n' +
      '    build: ./frontend\n' +
      '    ports:\n' +
      '      - "3000:3000"\n' +
      '    environment:\n' +
      '      - REACT_APP_API_URL=http://backend:8080/api/v1\n' +
      '    depends_on:\n' +
      '      - backend\n' +
      '  \n' +
      '  backend:\n' +
      '    build: ./backend\n' +
      '    ports:\n' +
      '      - "8080:8080"\n' +
      '    environment:\n' +
      '      - SPRING_DATASOURCE_URL=jdbc:mysql://database:3306/elearning\n' +
      '      - SPRING_DATASOURCE_USERNAME=root\n' +
      '      - SPRING_DATASOURCE_PASSWORD=password\n' +
      '      - SPRING_REDIS_HOST=redis\n' +
      '    depends_on:\n' +
      '      - database\n' +
      '      - redis\n' +
      '  \n' +
      '  database:\n' +
      '    image: mysql:8.0\n' +
      '    environment:\n' +
      '      - MYSQL_ROOT_PASSWORD=password\n' +
      '      - MYSQL_DATABASE=elearning\n' +
      '    volumes:\n' +
      '      - mysql_data:/var/lib/mysql\n' +
      '    ports:\n' +
      '      - "3306:3306"\n' +
      '  \n' +
      '  redis:\n' +
      '    image: redis:7-alpine\n' +
      '    ports:\n' +
      '      - "6379:6379"\n' +
      '\n' +
      'volumes:\n' +
      '  mysql_data:\n' +
      '\n' +
      '// 6. CI/CD Pipeline (GitHub Actions)\n' +
      '// .github/workflows/deploy.yml\n' +
      'name: Deploy E-Learning Platform\n' +
      '\n' +
      'on:\n' +
      '  push:\n' +
      '    branches: [main]\n' +
      '  pull_request:\n' +
      '    branches: [main]\n' +
      '\n' +
      'jobs:\n' +
      '  test:\n' +
      '    runs-on: ubuntu-latest\n' +
      '    \n' +
      '    steps:\n' +
      '    - uses: actions/checkout@v3\n' +
      '    \n' +
      '    - name: Set up JDK 17\n' +
      '      uses: actions/setup-java@v3\n' +
      '      with:\n' +
      '        java-version: "17"\n' +
      '        distribution: "temurin"\n' +
      '    \n' +
      '    - name: Run backend tests\n' +
      '      run: |\n' +
      '        cd backend\n' +
      '        ./mvnw test\n' +
      '    \n' +
      '    - name: Set up Node.js\n' +
      '      uses: actions/setup-node@v3\n' +
      '      with:\n' +
      '        node-version: "18"\n' +
      '    \n' +
      '    - name: Run frontend tests\n' +
      '      run: |\n' +
      '        cd frontend\n' +
      '        npm ci\n' +
      '        npm test\n' +
      '\n' +
      '  deploy:\n' +
      '    needs: test\n' +
      '    runs-on: ubuntu-latest\n' +
      '    if: github.ref == "refs/heads/main"\n' +
      '    \n' +
      '    steps:\n' +
      '    - uses: actions/checkout@v3\n' +
      '    \n' +
      '    - name: Deploy to production\n' +
      '      run: |\n' +
      '        docker-compose -f docker-compose.prod.yml up -d\n' +
      '\n' +
      '// 7. Monitoring Configuration\n' +
      '@Component\n' +
      'public class ApplicationMetrics {\n' +
      '    \n' +
      '    private final MeterRegistry meterRegistry;\n' +
      '    private final Counter enrollmentCounter;\n' +
      '    private final Timer courseLoadTimer;\n' +
      '    \n' +
      '    public ApplicationMetrics(MeterRegistry meterRegistry) {\n' +
      '        this.meterRegistry = meterRegistry;\n' +
      '        this.enrollmentCounter = Counter.builder("course.enrollments")\n' +
      '                .description("Number of course enrollments")\n' +
      '                .register(meterRegistry);\n' +
      '        this.courseLoadTimer = Timer.builder("course.load.duration")\n' +
      '                .description("Course loading time")\n' +
      '                .register(meterRegistry);\n' +
      '    }\n' +
      '    \n' +
      '    public void recordEnrollment() {\n' +
      '        enrollmentCounter.increment();\n' +
      '    }\n' +
      '    \n' +
      '    public Timer.Sample startCourseLoadTimer() {\n' +
      '        return Timer.start(meterRegistry);\n' +
      '    }\n' +
      '}',
    exercise: 'Build a complete Social Media Platform with full-stack implementation:\n\n' +
      '**Project Overview:**\n' +
      'Create a comprehensive social media platform that integrates all technologies learned throughout the course, including user management, content creation, real-time features, and advanced analytics.\n\n' +
      '**Architecture Requirements:**\n' +
      '1. **Frontend Application (React/TypeScript):**\n' +
      '   - User authentication and profile management\n' +
      '   - Post creation with media upload\n' +
      '   - Real-time feed with infinite scrolling\n' +
      '   - Comment and like functionality\n' +
      '   - Direct messaging system\n' +
      '   - Responsive design for mobile and desktop\n\n' +
      '2. **Backend Services (Spring Boot):**\n' +
      '   - User service with JWT authentication\n' +
      '   - Post service with media handling\n' +
      '   - Notification service with WebSocket\n' +
      '   - Analytics service for user engagement\n' +
      '   - Search service with Elasticsearch\n' +
      '   - File upload service with cloud storage\n\n' +
      '3. **Database Design:**\n' +
      '   - User profiles and authentication\n' +
      '   - Posts, comments, and reactions\n' +
      '   - Follower/following relationships\n' +
      '   - Direct messages and conversations\n' +
      '   - Analytics and engagement tracking\n' +
      '   - Audit logs and user activity\n\n' +
      '4. **Security Implementation:**\n' +
      '   - JWT-based authentication with refresh tokens\n' +
      '   - Role-based access control (USER, MODERATOR, ADMIN)\n' +
      '   - Rate limiting for API endpoints\n' +
      '   - Content moderation and spam detection\n' +
      '   - HTTPS enforcement and CORS configuration\n' +
      '   - Input validation and XSS prevention\n\n' +
      '5. **Real-time Features:**\n' +
      '   - WebSocket for live notifications\n' +
      '   - Real-time messaging with Socket.IO\n' +
      '   - Live feed updates\n' +
      '   - Online user presence indicators\n' +
      '   - Push notifications for mobile\n\n' +
      '6. **Performance Optimization:**\n' +
      '   - Redis caching for frequently accessed data\n' +
      '   - CDN integration for media files\n' +
      '   - Database query optimization\n' +
      '   - Frontend code splitting and lazy loading\n' +
      '   - Image compression and optimization\n\n' +
      '7. **Testing Strategy:**\n' +
      '   - Unit tests for all service methods\n' +
      '   - Integration tests for API endpoints\n' +
      '   - Frontend component testing\n' +
      '   - End-to-end testing with Cypress\n' +
      '   - Performance testing with load simulation\n' +
      '   - Security testing and vulnerability scanning\n\n' +
      '8. **DevOps and Deployment:**\n' +
      '   - Docker containerization for all services\n' +
      '   - Kubernetes deployment configuration\n' +
      '   - CI/CD pipeline with GitHub Actions\n' +
      '   - Environment-specific configurations\n' +
      '   - Automated database migrations\n' +
      '   - Blue-green deployment strategy\n\n' +
      '9. **Monitoring and Analytics:**\n' +
      '   - Application performance monitoring (APM)\n' +
      '   - User behavior analytics\n' +
      '   - Error tracking and alerting\n' +
      '   - Business metrics dashboard\n' +
      '   - Log aggregation and analysis\n' +
      '   - Health checks and uptime monitoring\n\n' +
      '**Key Features to Implement:**\n' +
      '- **User Management:** Registration, login, profile editing, account verification\n' +
      '- **Content Creation:** Text posts, image/video uploads, post editing and deletion\n' +
      '- **Social Features:** Follow/unfollow, likes, comments, shares, mentions\n' +
      '- **Messaging:** Direct messages, group chats, message history\n' +
      '- **Search:** User search, content search, hashtag functionality\n' +
      '- **Notifications:** Real-time notifications, email notifications, push notifications\n' +
      '- **Admin Panel:** User management, content moderation, analytics dashboard\n\n' +
      '**Deliverables:**\n' +
      '- Complete source code for frontend and backend\n' +
      '- Database schema and migration scripts\n' +
      '- Docker configuration and deployment scripts\n' +
      '- Comprehensive test suite with coverage reports\n' +
      '- API documentation with OpenAPI/Swagger\n' +
      '- User documentation and setup instructions\n' +
      '- Performance benchmarks and optimization reports\n' +
      '- Security audit and penetration testing results\n\n' +
      '**Bonus Challenges:**\n' +
      '- Implement machine learning for content recommendations\n' +
      '- Add support for multiple languages (i18n)\n' +
      '- Create mobile app with React Native\n' +
      '- Implement blockchain-based content verification\n' +
      '- Add AI-powered content moderation\n' +
      '- Create analytics dashboard with real-time insights\n\n' +
      '**Timeline:** 4-6 weeks for complete implementation\n' +
      '**Team Size:** 3-5 developers (Frontend, Backend, DevOps, QA)\n' +
      '**Success Metrics:** User engagement, performance benchmarks, security compliance'
  }
};