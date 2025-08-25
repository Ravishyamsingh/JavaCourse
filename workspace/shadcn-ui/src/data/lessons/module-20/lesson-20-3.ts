import { LessonContent } from '../../types/LessonTypes';

export const lesson_20_3: LessonContent = {
  title: 'Open Source Contribution',
  type: 'lesson',
  duration: '90 min',
  module: 'Career and Advanced Learning',
  content: {
    overview: 'Learn how to effectively contribute to open source Java projects, build your professional reputation, develop collaboration skills, and give back to the Java community while advancing your career.',
    objectives: [
      'Understand the benefits of open source contribution',
      'Learn how to find suitable open source projects',
      'Master the contribution workflow and best practices',
      'Develop effective collaboration and communication skills',
      'Build a strong open source portfolio',
      'Understand licensing and legal considerations',
      'Create and maintain your own open source projects'
    ],
    theory: '<div class="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Open Source Contribution' +
      '</h1>' +
      '<p class="mt-3 text-green-100 text-lg">Building reputation and skills through community contribution</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Benefits of Open Source Contribution' +
      '</h2>' +
      '<p class="text-gray-700 mb-4 leading-relaxed text-lg">' +
      'Contributing to open source projects provides invaluable learning opportunities, ' +
      'professional networking, and career advancement while giving back to the community.' +
      '</p>' +
      '<div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">' +
      '<h4 class="font-bold text-green-800 mb-2">🌟 Professional Benefits</h4>' +
      '<ul class="text-green-700 space-y-1">' +
      '<li>• <strong>Skill Development:</strong> Learn from experienced developers</li>' +
      '<li>• <strong>Portfolio Building:</strong> Showcase real-world contributions</li>' +
      '<li>• <strong>Networking:</strong> Connect with industry professionals</li>' +
      '<li>• <strong>Reputation:</strong> Build credibility in the developer community</li>' +
      '<li>• <strong>Experience:</strong> Work on large-scale, production systems</li>' +
      '<li>• <strong>Mentorship:</strong> Learn from maintainers and senior contributors</li>' +
      '</ul>' +
      '</div>' +
      '<div class="grid md:grid-cols-2 gap-6">' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">📈 Career Impact</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Enhanced resume and GitHub profile</li>' +
      '<li>• Demonstration of collaboration skills</li>' +
      '<li>• Evidence of continuous learning</li>' +
      '<li>• Access to job opportunities</li>' +
      '<li>• Speaking and conference opportunities</li>' +
      '<li>• Industry recognition and awards</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-purple-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-purple-800 mb-2">🎯 Learning Opportunities</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Code review and feedback</li>' +
      '<li>• Best practices and patterns</li>' +
      '<li>• Testing and quality assurance</li>' +
      '<li>• Documentation and communication</li>' +
      '<li>• Project management skills</li>' +
      '<li>• Cross-cultural collaboration</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Finding the Right Projects' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">Project Selection Criteria</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-blue-800 mb-2">Beginner-Friendly Projects</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Good documentation and contributing guides</li>' +
      '<li>• Active maintainer community</li>' +
      '<li>• "Good first issue" labels</li>' +
      '<li>• Welcoming to new contributors</li>' +
      '<li>• Clear code style guidelines</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-blue-800 mb-2">Popular Java Projects</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Spring Framework ecosystem</li>' +
      '<li>• Apache projects (Maven, Kafka, etc.)</li>' +
      '<li>• Eclipse IDE and plugins</li>' +
      '<li>• JUnit and testing frameworks</li>' +
      '<li>• Build tools (Gradle, Maven)</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>' +
      'Contribution Workflow' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-purple-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-purple-800 mb-2">Step-by-Step Process</h4>' +
      '<div class="space-y-3">' +
      '<div class="bg-white p-3 rounded border border-l-4 border-purple-400">' +
      '<h6 class="font-bold text-purple-800 mb-1">1. Project Research</h6>' +
      '<p class="text-sm text-gray-700">Study project goals, architecture, and contribution guidelines</p>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border border-l-4 border-purple-400">' +
      '<h6 class="font-bold text-purple-800 mb-1">2. Environment Setup</h6>' +
      '<p class="text-sm text-gray-700">Fork repository, set up development environment, run tests</p>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border border-l-4 border-purple-400">' +
      '<h6 class="font-bold text-purple-800 mb-1">3. Issue Selection</h6>' +
      '<p class="text-sm text-gray-700">Choose appropriate issues, discuss approach with maintainers</p>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border border-l-4 border-purple-400">' +
      '<h6 class="font-bold text-purple-800 mb-1">4. Implementation</h6>' +
      '<p class="text-sm text-gray-700">Write code, add tests, update documentation</p>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border border-l-4 border-purple-400">' +
      '<h6 class="font-bold text-purple-800 mb-1">5. Pull Request</h6>' +
      '<p class="text-sm text-gray-700">Submit PR with clear description, respond to feedback</p>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>' +
      'Building Your Open Source Profile' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-orange-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-orange-800 mb-2">Profile Optimization</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">GitHub Profile</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Professional profile picture and bio</li>' +
      '<li>• Pinned repositories showcasing skills</li>' +
      '<li>• Consistent contribution activity</li>' +
      '<li>• Clear project documentation</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Community Engagement</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Helpful issue discussions</li>' +
      '<li>• Code review participation</li>' +
      '<li>• Documentation improvements</li>' +
      '<li>• Community support and mentoring</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '</div>',
    codeExample: '// Open Source Contribution Management System\n\n' +
      '// 1. Project Discovery and Analysis\n' +
      'public class OpenSourceProject {\n' +
      '    \n' +
      '    private String name;\n' +
      '    private String description;\n' +
      '    private String repositoryUrl;\n' +
      '    private List<String> technologies;\n' +
      '    private ProjectMetrics metrics;\n' +
      '    private ContributionGuidelines guidelines;\n' +
      '    private DifficultyLevel difficulty;\n' +
      '    \n' +
      '    public OpenSourceProject(String name, String description, String repositoryUrl) {\n' +
      '        this.name = name;\n' +
      '        this.description = description;\n' +
      '        this.repositoryUrl = repositoryUrl;\n' +
      '        this.technologies = new ArrayList<>();\n' +
      '    }\n' +
      '    \n' +
      '    // Analyze project suitability for contribution\n' +
      '    public ContributionSuitability analyzeSuitability(DeveloperProfile profile) {\n' +
      '        int skillMatch = calculateSkillMatch(profile);\n' +
      '        int experienceMatch = calculateExperienceMatch(profile);\n' +
      '        int activityScore = metrics.getActivityScore();\n' +
      '        \n' +
      '        return new ContributionSuitability(skillMatch, experienceMatch, activityScore);\n' +
      '    }\n' +
      '    \n' +
      '    private int calculateSkillMatch(DeveloperProfile profile) {\n' +
      '        Set<String> profileSkills = new HashSet<>(profile.getSkills());\n' +
      '        Set<String> projectTech = new HashSet<>(technologies);\n' +
      '        \n' +
      '        profileSkills.retainAll(projectTech);\n' +
      '        return (profileSkills.size() * 100) / Math.max(projectTech.size(), 1);\n' +
      '    }\n' +
      '    \n' +
      '    private int calculateExperienceMatch(DeveloperProfile profile) {\n' +
      '        int profileExp = profile.getExperienceYears();\n' +
      '        int requiredExp = difficulty.getMinExperience();\n' +
      '        \n' +
      '        if (profileExp >= requiredExp) {\n' +
      '            return 100;\n' +
      '        } else {\n' +
      '            return (profileExp * 100) / requiredExp;\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    // Getters and setters\n' +
      '    public String getName() { return name; }\n' +
      '    public String getDescription() { return description; }\n' +
      '    public String getRepositoryUrl() { return repositoryUrl; }\n' +
      '    public List<String> getTechnologies() { return technologies; }\n' +
      '    public void addTechnology(String tech) { technologies.add(tech); }\n' +
      '    public void setMetrics(ProjectMetrics metrics) { this.metrics = metrics; }\n' +
      '    public void setGuidelines(ContributionGuidelines guidelines) { this.guidelines = guidelines; }\n' +
      '    public void setDifficulty(DifficultyLevel difficulty) { this.difficulty = difficulty; }\n' +
      '}\n\n' +
      'class ProjectMetrics {\n' +
      '    private int stars;\n' +
      '    private int forks;\n' +
      '    private int openIssues;\n' +
      '    private int contributors;\n' +
      '    private LocalDateTime lastCommit;\n' +
      '    private double issueResponseTime; // in hours\n' +
      '    \n' +
      '    public ProjectMetrics(int stars, int forks, int openIssues, \n' +
      '                         int contributors, LocalDateTime lastCommit, \n' +
      '                         double issueResponseTime) {\n' +
      '        this.stars = stars;\n' +
      '        this.forks = forks;\n' +
      '        this.openIssues = openIssues;\n' +
      '        this.contributors = contributors;\n' +
      '        this.lastCommit = lastCommit;\n' +
      '        this.issueResponseTime = issueResponseTime;\n' +
      '    }\n' +
      '    \n' +
      '    public int getActivityScore() {\n' +
      '        int score = 0;\n' +
      '        \n' +
      '        // Recent activity (40% weight)\n' +
      '        long daysSinceLastCommit = ChronoUnit.DAYS.between(lastCommit, LocalDateTime.now());\n' +
      '        if (daysSinceLastCommit <= 7) score += 40;\n' +
      '        else if (daysSinceLastCommit <= 30) score += 25;\n' +
      '        else if (daysSinceLastCommit <= 90) score += 10;\n' +
      '        \n' +
      '        // Community engagement (30% weight)\n' +
      '        if (issueResponseTime <= 24) score += 30;\n' +
      '        else if (issueResponseTime <= 72) score += 20;\n' +
      '        else if (issueResponseTime <= 168) score += 10;\n' +
      '        \n' +
      '        // Project popularity (30% weight)\n' +
      '        if (stars >= 1000) score += 30;\n' +
      '        else if (stars >= 100) score += 20;\n' +
      '        else if (stars >= 10) score += 10;\n' +
      '        \n' +
      '        return score;\n' +
      '    }\n' +
      '    \n' +
      '    // Getters\n' +
      '    public int getStars() { return stars; }\n' +
      '    public int getForks() { return forks; }\n' +
      '    public int getOpenIssues() { return openIssues; }\n' +
      '    public int getContributors() { return contributors; }\n' +
      '}\n\n' +
      'enum DifficultyLevel {\n' +
      '    BEGINNER(0, "Good for first-time contributors"),\n' +
      '    INTERMEDIATE(2, "Requires some open source experience"),\n' +
      '    ADVANCED(5, "Requires significant experience"),\n' +
      '    EXPERT(8, "For experienced contributors only");\n' +
      '    \n' +
      '    private final int minExperience;\n' +
      '    private final String description;\n' +
      '    \n' +
      '    DifficultyLevel(int minExperience, String description) {\n' +
      '        this.minExperience = minExperience;\n' +
      '        this.description = description;\n' +
      '    }\n' +
      '    \n' +
      '    public int getMinExperience() { return minExperience; }\n' +
      '    public String getDescription() { return description; }\n' +
      '}\n\n' +
      '// 2. Contribution Tracking System\n' +
      'public class ContributionTracker {\n' +
      '    \n' +
      '    private String contributorName;\n' +
      '    private List<Contribution> contributions;\n' +
      '    private Map<String, Integer> projectContributions;\n' +
      '    \n' +
      '    public ContributionTracker(String contributorName) {\n' +
      '        this.contributorName = contributorName;\n' +
      '        this.contributions = new ArrayList<>();\n' +
      '        this.projectContributions = new HashMap<>();\n' +
      '    }\n' +
      '    \n' +
      '    public void addContribution(Contribution contribution) {\n' +
      '        contributions.add(contribution);\n' +
      '        \n' +
      '        String projectName = contribution.getProjectName();\n' +
      '        projectContributions.merge(projectName, 1, Integer::sum);\n' +
      '    }\n' +
      '    \n' +
      '    public ContributionStats generateStats() {\n' +
      '        int totalContributions = contributions.size();\n' +
      '        int totalProjects = projectContributions.size();\n' +
      '        \n' +
      '        Map<ContributionType, Long> typeBreakdown = contributions.stream()\n' +
      '            .collect(Collectors.groupingBy(\n' +
      '                Contribution::getType,\n' +
      '                Collectors.counting()\n' +
      '            ));\n' +
      '        \n' +
      '        LocalDateTime firstContribution = contributions.stream()\n' +
      '            .map(Contribution::getDate)\n' +
      '            .min(LocalDateTime::compareTo)\n' +
      '            .orElse(LocalDateTime.now());\n' +
      '        \n' +
      '        long activeDays = ChronoUnit.DAYS.between(firstContribution, LocalDateTime.now());\n' +
      '        double contributionsPerMonth = activeDays > 0 ? \n' +
      '            (totalContributions * 30.0) / activeDays : 0;\n' +
      '        \n' +
      '        return new ContributionStats(totalContributions, totalProjects, \n' +
      '            typeBreakdown, contributionsPerMonth, calculateImpactScore());\n' +
      '    }\n' +
      '    \n' +
      '    private int calculateImpactScore() {\n' +
      '        return contributions.stream()\n' +
      '            .mapToInt(Contribution::getImpactScore)\n' +
      '            .sum();\n' +
      '    }\n' +
      '    \n' +
      '    public void printContributionSummary() {\n' +
      '        ContributionStats stats = generateStats();\n' +
      '        \n' +
      '        System.out.println("=== Open Source Contribution Summary ===");\n' +
      '        System.out.println("Contributor: " + contributorName);\n' +
      '        System.out.println("Total Contributions: " + stats.getTotalContributions());\n' +
      '        System.out.println("Projects Contributed To: " + stats.getTotalProjects());\n' +
      '        System.out.println("Average Contributions/Month: " + \n' +
      '            String.format("%.1f", stats.getContributionsPerMonth()));\n' +
      '        System.out.println("Impact Score: " + stats.getImpactScore());\n' +
      '        \n' +
      '        System.out.println("\\nContribution Breakdown:");\n' +
      '        stats.getTypeBreakdown().forEach((type, count) -> \n' +
      '            System.out.println("  " + type + ": " + count));\n' +
      '        \n' +
      '        System.out.println("\\nTop Projects:");\n' +
      '        projectContributions.entrySet().stream()\n' +
      '            .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())\n' +
      '            .limit(5)\n' +
      '            .forEach(entry -> \n' +
      '                System.out.println("  " + entry.getKey() + ": " + entry.getValue() + " contributions"));\n' +
      '    }\n' +
      '}\n\n' +
      'class Contribution {\n' +
      '    private String projectName;\n' +
      '    private ContributionType type;\n' +
      '    private String description;\n' +
      '    private LocalDateTime date;\n' +
      '    private String pullRequestUrl;\n' +
      '    private int impactScore;\n' +
      '    \n' +
      '    public Contribution(String projectName, ContributionType type, \n' +
      '                       String description, String pullRequestUrl) {\n' +
      '        this.projectName = projectName;\n' +
      '        this.type = type;\n' +
      '        this.description = description;\n' +
      '        this.pullRequestUrl = pullRequestUrl;\n' +
      '        this.date = LocalDateTime.now();\n' +
      '        this.impactScore = calculateImpactScore(type);\n' +
      '    }\n' +
      '    \n' +
      '    private int calculateImpactScore(ContributionType type) {\n' +
      '        return switch (type) {\n' +
      '            case BUG_FIX -> 10;\n' +
      '            case FEATURE -> 20;\n' +
      '            case DOCUMENTATION -> 5;\n' +
      '            case PERFORMANCE -> 15;\n' +
      '            case SECURITY -> 25;\n' +
      '            case REFACTORING -> 8;\n' +
      '            case TESTING -> 7;\n' +
      '        };\n' +
      '    }\n' +
      '    \n' +
      '    // Getters\n' +
      '    public String getProjectName() { return projectName; }\n' +
      '    public ContributionType getType() { return type; }\n' +
      '    public String getDescription() { return description; }\n' +
      '    public LocalDateTime getDate() { return date; }\n' +
      '    public String getPullRequestUrl() { return pullRequestUrl; }\n' +
      '    public int getImpactScore() { return impactScore; }\n' +
      '}\n\n' +
      'enum ContributionType {\n' +
      '    BUG_FIX, FEATURE, DOCUMENTATION, PERFORMANCE, SECURITY, REFACTORING, TESTING\n' +
      '}\n\n' +
      '// 3. GitHub API Integration for Project Discovery\n' +
      'public class GitHubProjectDiscovery {\n' +
      '    \n' +
      '    private static final String GITHUB_API_BASE = "https://api.github.com";\n' +
      '    private final HttpClient httpClient;\n' +
      '    \n' +
      '    public GitHubProjectDiscovery() {\n' +
      '        this.httpClient = HttpClient.newHttpClient();\n' +
      '    }\n' +
      '    \n' +
      '    public List<OpenSourceProject> findJavaProjects(ProjectSearchCriteria criteria) {\n' +
      '        try {\n' +
      '            String query = buildSearchQuery(criteria);\n' +
      '            String url = GITHUB_API_BASE + "/search/repositories?q=" + \n' +
      '                URLEncoder.encode(query, StandardCharsets.UTF_8) + \n' +
      '                "&sort=stars&order=desc&per_page=" + criteria.getLimit();\n' +
      '            \n' +
      '            HttpRequest request = HttpRequest.newBuilder()\n' +
      '                .uri(URI.create(url))\n' +
      '                .header("Accept", "application/vnd.github.v3+json")\n' +
      '                .GET()\n' +
      '                .build();\n' +
      '            \n' +
      '            HttpResponse<String> response = httpClient.send(request, \n' +
      '                HttpResponse.BodyHandlers.ofString());\n' +
      '            \n' +
      '            return parseSearchResults(response.body());\n' +
      '            \n' +
      '        } catch (Exception e) {\n' +
      '            System.err.println("Error searching GitHub: " + e.getMessage());\n' +
      '            return new ArrayList<>();\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    private String buildSearchQuery(ProjectSearchCriteria criteria) {\n' +
      '        StringBuilder query = new StringBuilder("language:java");\n' +
      '        \n' +
      '        if (criteria.getMinStars() > 0) {\n' +
      '            query.append(" stars:>=").append(criteria.getMinStars());\n' +
      '        }\n' +
      '        \n' +
      '        if (criteria.hasGoodFirstIssues()) {\n' +
      '            query.append(" good-first-issues:>0");\n' +
      '        }\n' +
      '        \n' +
      '        if (criteria.getTopics() != null && !criteria.getTopics().isEmpty()) {\n' +
      '            criteria.getTopics().forEach(topic -> \n' +
      '                query.append(" topic:").append(topic));\n' +
      '        }\n' +
      '        \n' +
      '        return query.toString();\n' +
      '    }\n' +
      '    \n' +
      '    private List<OpenSourceProject> parseSearchResults(String jsonResponse) {\n' +
      '        // Simplified JSON parsing - in real implementation use Jackson or Gson\n' +
      '        List<OpenSourceProject> projects = new ArrayList<>();\n' +
      '        \n' +
      '        // Mock parsing for demonstration\n' +
      '        projects.add(createSampleProject("Spring Framework", \n' +
      '            "The Spring Framework provides comprehensive infrastructure support for developing Java applications"));\n' +
      '        projects.add(createSampleProject("Apache Maven", \n' +
      '            "Apache Maven is a software project management and comprehension tool"));\n' +
      '        \n' +
      '        return projects;\n' +
      '    }\n' +
      '    \n' +
      '    private OpenSourceProject createSampleProject(String name, String description) {\n' +
      '        OpenSourceProject project = new OpenSourceProject(name, description, \n' +
      '            "https://github.com/" + name.toLowerCase().replace(" ", "-"));\n' +
      '        \n' +
      '        project.addTechnology("Java");\n' +
      '        project.addTechnology("Spring");\n' +
      '        project.setMetrics(new ProjectMetrics(5000, 2000, 150, 300, \n' +
      '            LocalDateTime.now().minusDays(2), 12.5));\n' +
      '        project.setDifficulty(DifficultyLevel.INTERMEDIATE);\n' +
      '        \n' +
      '        return project;\n' +
      '    }\n' +
      '}\n\n' +
      'class ProjectSearchCriteria {\n' +
      '    private int minStars;\n' +
      '    private boolean goodFirstIssues;\n' +
      '    private List<String> topics;\n' +
      '    private int limit;\n' +
      '    \n' +
      '    public ProjectSearchCriteria() {\n' +
      '        this.minStars = 0;\n' +
      '        this.goodFirstIssues = false;\n' +
      '        this.topics = new ArrayList<>();\n' +
      '        this.limit = 10;\n' +
      '    }\n' +
      '    // Getters and setters\n' +
      '    public int getMinStars() { return minStars; }\n' +
      '    public void setMinStars(int minStars) { this.minStars = minStars; }\n' +
      '    public boolean hasGoodFirstIssues() { return goodFirstIssues; }\n' +
      '    public void setGoodFirstIssues(boolean goodFirstIssues) { this.goodFirstIssues = goodFirstIssues; }\n' +
      '    public List<String> getTopics() { return topics; }\n' +
      '    public void addTopic(String topic) { topics.add(topic); }\n' +
      '    public int getLimit() { return limit; }\n' +
      '    public void setLimit(int limit) { this.limit = limit; }\n' +
      '}\n\n' +
      '// 4. Contribution Quality Assessment\n' +
      'public class ContributionQualityChecker {\n' +
      '    \n' +
      '    public static QualityReport assessContribution(String projectPath, \n' +
      '                                                  String contributionBranch) {\n' +
      '        QualityReport report = new QualityReport();\n' +
      '        \n' +
      '        // Check code quality\n' +
      '        report.addCheck("Code Style", checkCodeStyle(projectPath));\n' +
      '        report.addCheck("Test Coverage", checkTestCoverage(projectPath));\n' +
      '        report.addCheck("Documentation", checkDocumentation(projectPath));\n' +
      '        report.addCheck("Performance Impact", checkPerformance(projectPath));\n' +
      '        report.addCheck("Security Considerations", checkSecurity(projectPath));\n' +
      '        \n' +
      '        return report;\n' +
      '    }\n' +
      '    \n' +
      '    private static boolean checkCodeStyle(String projectPath) {\n' +
      '        // Simulate code style check\n' +
      '        System.out.println("Running code style analysis...");\n' +
      '        return true; // Assume passes\n' +
      '    }\n' +
      '    \n' +
      '    private static boolean checkTestCoverage(String projectPath) {\n' +
      '        // Simulate test coverage check\n' +
      '        System.out.println("Analyzing test coverage...");\n' +
      '        return true; // Assume adequate coverage\n' +
      '    }\n' +
      '    \n' +
      '    private static boolean checkDocumentation(String projectPath) {\n' +
      '        // Check for JavaDoc and README updates\n' +
      '        System.out.println("Validating documentation...");\n' +
      '        return true;\n' +
      '    }\n' +
      '    \n' +
      '    private static boolean checkPerformance(String projectPath) {\n' +
      '        // Analyze performance impact\n' +
      '        System.out.println("Assessing performance impact...");\n' +
      '        return true;\n' +
      '    }\n' +
      '    \n' +
      '    private static boolean checkSecurity(String projectPath) {\n' +
      '        // Security vulnerability scan\n' +
      '        System.out.println("Scanning for security issues...");\n' +
      '        return true;\n' +
      '    }\n' +
      '}\n\n' +
      'class QualityReport {\n' +
      '    private Map<String, Boolean> checks;\n' +
      '    \n' +
      '    public QualityReport() {\n' +
      '        this.checks = new LinkedHashMap<>();\n' +
      '    }\n' +
      '    \n' +
      '    public void addCheck(String checkName, boolean passed) {\n' +
      '        checks.put(checkName, passed);\n' +
      '    }\n' +
      '    \n' +
      '    public boolean allChecksPassed() {\n' +
      '        return checks.values().stream().allMatch(Boolean::booleanValue);\n' +
      '    }\n' +
      '    \n' +
      '    public void printReport() {\n' +
      '        System.out.println("\\n=== Contribution Quality Report ===");\n' +
      '        checks.forEach((check, passed) -> {\n' +
      '            String status = passed ? "✅ PASS" : "❌ FAIL";\n' +
      '            System.out.println(status + " " + check);\n' +
      '        });\n' +
      '        \n' +
      '        if (allChecksPassed()) {\n' +
      '            System.out.println("\\n🎉 All quality checks passed! Ready for submission.");\n' +
      '        } else {\n' +
      '            System.out.println("\\n⚠️ Some checks failed. Please address issues before submitting.");\n' +
      '        }\n' +
      '    }\n' +
      '}',
    exercise: 'Build a comprehensive Open Source Contribution Management Platform:\n\n' +
      '**Project Requirements:**\n' +
      '1. **Project Discovery Engine:**\n' +
      '   - Integrate with GitHub API to find suitable Java projects\n' +
      '   - Implement filtering by difficulty, technology stack, and activity level\n' +
      '   - Create project recommendation system based on user skills\n' +
      '   - Track project health metrics and maintainer responsiveness\n\n' +
      '2. **Contribution Workflow Manager:**\n' +
      '   - Guide users through the complete contribution process\n' +
      '   - Provide templates for issue discussions and pull requests\n' +
      '   - Implement pre-submission quality checks\n' +
      '   - Track contribution status and feedback\n\n' +
      '3. **Skill Development Tracker:**\n' +
      '   - Map contributions to skill development areas\n' +
      '   - Track learning progress through open source work\n' +
      '   - Identify skill gaps and suggest relevant projects\n' +
      '   - Generate skill-based contribution recommendations\n\n' +
      '4. **Community Engagement Tools:**\n' +
      '   - Create profiles showcasing open source contributions\n' +
      '   - Implement mentorship matching for new contributors\n' +
      '   - Build communication tools for project collaboration\n' +
      '   - Track community reputation and recognition\n\n' +
      '5. **Impact Measurement System:**\n' +
      '   - Quantify the impact of contributions on projects\n' +
      '   - Track career benefits from open source involvement\n' +
      '   - Generate contribution portfolios for job applications\n' +
      '   - Measure community engagement and leadership\n\n' +
      '6. **Learning Resource Integration:**\n' +
      '   - Curate learning materials for open source best practices\n' +
      '   - Provide guides for different types of contributions\n' +
      '   - Create tutorials for using collaboration tools\n' +
      '   - Offer templates and examples for common scenarios\n\n' +
      '**Key Features to Implement:**\n' +
      '- **Project Matcher:** AI-powered project recommendations\n' +
      '- **Contribution Planner:** Strategic planning for meaningful contributions\n' +
      '- **Quality Assurance:** Automated checks before submission\n' +
      '- **Progress Dashboard:** Visual tracking of contribution journey\n' +
      '- **Networking Hub:** Connect with other contributors and maintainers\n' +
      '- **Achievement System:** Gamification to encourage participation\n\n' +
      '**Technical Implementation:**\n' +
      '- **GitHub Integration:** REST API for project data and contribution tracking\n' +
      '- **Quality Analysis:** Static code analysis and best practice validation\n' +
      '- **Notification System:** Updates on project activity and opportunities\n' +
      '- **Analytics Engine:** Contribution impact and career benefit analysis\n' +
      '- **Mobile App:** Track contributions and opportunities on the go\n\n' +
      '**Deliverables:**\n' +
      '- Complete project discovery and recommendation system\n' +
      '- Contribution workflow management tools\n' +
      '- Quality assurance and pre-submission checks\n' +
      '- Community engagement and networking features\n' +
      '- Impact measurement and portfolio generation\n' +
      '- Mobile application for contribution tracking\n\n' +
      '**Success Metrics:**\n' +
      '- Successfully submitted and merged pull requests\n' +
      '- Positive feedback from project maintainers\n' +
      '- Increased GitHub profile activity and followers\n' +
      '- Recognition within the Java developer community\n' +
      '- Career opportunities arising from open source work\n\n' +
      '**Bonus Challenges:**\n' +
      '- Create your own open source Java library\n' +
      '- Become a maintainer of an existing project\n' +
      '- Speak at conferences about your open source experience\n' +
      '- Mentor new contributors in the community'
  }
};