import { LessonContent } from '../../types/LessonTypes';

export const lesson_18_3: LessonContent = {
  title: 'Internationalization (i18n)',
  type: 'lesson',
  duration: '80 min',
  module: 'Advanced Topics and Best Practices',
  content: {
    overview: 'Learn how to implement internationalization (i18n) in Java applications to support multiple languages and locales. Understand resource bundles, locale management, and best practices for creating globally accessible applications.',
    objectives: [
      'Understand internationalization concepts and benefits',
      'Implement resource bundles for multiple languages',
      'Manage locales and regional settings',
      'Handle date, time, and number formatting',
      'Work with message formatting and pluralization',
      'Implement right-to-left language support',
      'Test internationalized applications'
    ],
    theory: '<div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Internationalization (i18n)' +
      '</h1>' +
      '<p class="mt-3 text-purple-100 text-lg">Creating globally accessible Java applications</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Internationalization Fundamentals' +
      '</h2>' +
      '<p class="text-gray-700 mb-4 leading-relaxed text-lg">' +
      'Internationalization (i18n) is the process of designing and developing applications ' +
      'to support multiple languages, regional differences, and cultural conventions without ' +
      'requiring engineering changes. Localization (l10n) is the process of adapting an ' +
      'internationalized application for a specific region or language.' +
      '</p>' +
      '<div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">' +
      '<h4 class="font-bold text-purple-800 mb-2">🎯 Benefits of Internationalization</h4>' +
      '<ul class="text-purple-700 space-y-1">' +
      '<li>• <strong>Global Reach:</strong> Access to international markets</li>' +
      '<li>• <strong>User Experience:</strong> Native language interfaces</li>' +
      '<li>• <strong>Compliance:</strong> Meeting regional requirements</li>' +
      '<li>• <strong>Competitive Advantage:</strong> Stand out in global markets</li>' +
      '<li>• <strong>Scalability:</strong> Easy expansion to new markets</li>' +
      '</ul>' +
      '</div>' +
      '<div class="grid md:grid-cols-2 gap-6">' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">✅ i18n Best Practices</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Separate text from code using resource bundles</li>' +
      '<li>• Use locale-sensitive formatting for dates and numbers</li>' +
      '<li>• Design flexible layouts for text expansion</li>' +
      '<li>• Handle pluralization and gender variations</li>' +
      '<li>• Test with different character sets and scripts</li>' +
      '<li>• Consider cultural differences in content</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-red-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-red-800 mb-2">⚠️ Common i18n Pitfalls</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Hard-coded strings in source code</li>' +
      '<li>• Assumptions about text direction</li>' +
      '<li>• Fixed-width UI elements</li>' +
      '<li>• Ignoring cultural differences</li>' +
      '<li>• Inadequate testing for target locales</li>' +
      '<li>• Poor font and character support</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Resource Bundles' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-indigo-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-indigo-800 mb-2">Resource Bundle Structure</h4>' +
      '<p class="text-indigo-700 mb-3">Resource bundles are collections of key-value pairs that contain locale-specific objects:</p>' +
      '<div class="bg-white p-4 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Bundle Naming Convention</h5>' +
      '<div class="grid md:grid-cols-3 gap-4 text-sm">' +
      '<div>' +
      '<strong>Base Name</strong>' +
      '<p class="text-gray-600">messages.properties</p>' +
      '</div>' +
      '<div>' +
      '<strong>Language</strong>' +
      '<p class="text-gray-600">messages_fr.properties</p>' +
      '</div>' +
      '<div>' +
      '<strong>Language + Country</strong>' +
      '<p class="text-gray-600">messages_fr_FR.properties</p>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">Bundle Loading Hierarchy</h4>' +
      '<div class="overflow-x-auto">' +
      '<table class="min-w-full bg-white rounded border">' +
      '<thead>' +
      '<tr class="bg-gray-100">' +
      '<th class="py-2 px-4 text-left">Locale</th>' +
      '<th class="py-2 px-4 text-left">Bundle Loaded</th>' +
      '<th class="py-2 px-4 text-left">Fallback</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">fr_FR</td>' +
      '<td class="py-2 px-4">messages_fr_FR.properties</td>' +
      '<td class="py-2 px-4">messages_fr.properties → messages.properties</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">de_DE</td>' +
      '<td class="py-2 px-4">messages_de_DE.properties</td>' +
      '<td class="py-2 px-4">messages_de.properties → messages.properties</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">ja_JP</td>' +
      '<td class="py-2 px-4">messages_ja_JP.properties</td>' +
      '<td class="py-2 px-4">messages_ja.properties → messages.properties</td>' +
      '</tr>' +
      '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>' +
      'Locale Management' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-green-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-green-800 mb-2">Locale Handling Strategies</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-green-800 mb-2">User Preference</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Allow users to select their preferred language</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Language selector in UI</li>' +
      '<li>• Store in user profile</li>' +
      '<li>• Cookie-based persistence</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-green-800 mb-2">Browser Detection</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Use browser Accept-Language header</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• HTTP header parsing</li>' +
      '<li>• Default fallback mechanism</li>' +
      '<li>• Combine with user preference</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>' +
      'Advanced i18n Features' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-orange-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-orange-800 mb-2">Message Formatting</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Pluralization</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Handle different plural forms</li>' +
      '<li>• Use MessageFormat patterns</li>' +
      '<li>• Support for complex rules</li>' +
      '<li>• Language-specific variations</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Parameter Substitution</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Dynamic content insertion</li>' +
      '<li>• Type-safe formatting</li>' +
      '<li>• Date/time formatting</li>' +
      '<li>• Number formatting</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '</div>',
    codeExample: '// Complete Internationalization Implementation\n\n' +
      '// 1. Resource Bundle Example (messages.properties)\n' +
      'app.title=My Application\n' +
      'app.welcome=Welcome to {0}!\n' +
      'user.login=Login\n' +
      'user.logout=Logout\n' +
      'user.profile=Profile\n' +
      'user.settings=Settings\n' +
      'error.invalid.credentials=Invalid username or password\n' +
      'error.account.locked=Account is locked\n' +
      'success.login=You have been successfully logged in\n' +
      'success.logout=You have been successfully logged out\n\n' +
      '// 2. French Resource Bundle (messages_fr.properties)\n' +
      'app.title=Mon Application\n' +
      'app.welcome=Bienvenue à {0} !\n' +
      'user.login=Connexion\n' +
      'user.logout=Déconnexion\n' +
      'user.profile=Profil\n' +
      'user.settings=Paramètres\n' +
      'error.invalid.credentials=Nom d\'utilisateur ou mot de passe invalide\n' +
      'error.account.locked=Compte verrouillé\n' +
      'success.login=Vous êtes connecté avec succès\n' +
      'success.logout=Vous êtes déconnecté avec succès\n\n' +
      '// 3. German Resource Bundle (messages_de.properties)\n' +
      'app.title=Meine Anwendung\n' +
      'app.welcome=Willkommen bei {0}!\n' +
      'user.login=Anmelden\n' +
      'user.logout=Abmelden\n' +
      'user.profile=Profil\n' +
      'user.settings=Einstellungen\n' +
      'error.invalid.credentials=Ungültiger Benutzername oder Passwort\n' +
      'error.account.locked=Konto ist gesperrt\n' +
      'success.login=Sie wurden erfolgreich angemeldet\n' +
      'success.logout=Sie wurden erfolgreich abgemeldet\n\n' +
      '// 4. Japanese Resource Bundle (messages_ja.properties)\n' +
      'app.title=マイアプリケーション\n' +
      'app.welcome=ようこそ {0} へ！\n' +
      'user.login=ログイン\n' +
      'user.logout=ログアウト\n' +
      'user.profile=プロフィール\n' +
      'user.settings=設定\n' +
      'error.invalid.credentials=ユーザー名またはパスワードが無効です\n' +
      'error.account.locked=アカウントがロックされています\n' +
      'success.login=ログインに成功しました\n' +
      'success.logout=ログアウトに成功しました\n\n' +
      '// 5. Resource Bundle Manager\n' +
      'public class MessageService {\n' +
      '    \n' +
      '    private static final String BASE_NAME = "messages";\n' +
      '    \n' +
      '    /**\n' +
      '     * Gets a localized message for the specified key and locale\n' +
      '     * \n' +
      '     * @param key the message key\n' +
      '     * @param locale the target locale\n' +
      '     * @param params optional parameters for message formatting\n' +
      '     * @return the localized message\n' +
      '     */\n' +
      '    public static String getMessage(String key, Locale locale, Object... params) {\n' +
      '        try {\n' +
      '            ResourceBundle bundle = ResourceBundle.getBundle(BASE_NAME, locale);\n' +
      '            String message = bundle.getString(key);\n' +
      '            \n' +
      '            if (params.length > 0) {\n' +
      '                MessageFormat formatter = new MessageFormat(message, locale);\n' +
      '                return formatter.format(params);\n' +
      '            }\n' +
      '            \n' +
      '            return message;\n' +
      '        } catch (MissingResourceException e) {\n' +
      '            // Fallback to key if message not found\n' +
      '            return key;\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Gets a localized message using the default locale\n' +
      '     * \n' +
      '     * @param key the message key\n' +
      '     * @param params optional parameters for message formatting\n' +
      '     * @return the localized message\n' +
      '     */\n' +
      '    public static String getMessage(String key, Object... params) {\n' +
      '        return getMessage(key, Locale.getDefault(), params);\n' +
      '    }\n' +
      '}\n\n' +
      '// 6. Locale Detection and Management\n' +
      '@Service\n' +
      'public class LocaleService {\n' +
      '    \n' +
      '    private static final List<Locale> SUPPORTED_LOCALES = Arrays.asList(\n' +
      '        Locale.ENGLISH,\n' +
      '        Locale.FRENCH,\n' +
      '        Locale.GERMAN,\n' +
      '        Locale.JAPANESE\n' +
      '    );\n' +
      '    \n' +
      '    /**\n' +
      '     * Determines the best matching locale from HTTP headers\n' +
      '     * \n' +
      '     * @param request the HTTP request\n' +
      '     * @return the best matching locale\n' +
      '     */\n' +
      '    public Locale determineLocale(HttpServletRequest request) {\n' +
      '        // Check for user preference in session\n' +
      '        Locale sessionLocale = (Locale) request.getSession()\n' +
      '            .getAttribute("user.locale");\n' +
      '        if (sessionLocale != null) {\n' +
      '            return sessionLocale;\n' +
      '        }\n' +
      '        \n' +
      '        // Parse Accept-Language header\n' +
      '        String acceptLanguage = request.getHeader("Accept-Language");\n' +
      '        if (acceptLanguage != null) {\n' +
      '            List<Locale.LanguageRange> languageRanges = \n' +
      '                Locale.LanguageRange.parse(acceptLanguage);\n' +
      '            \n' +
      '            Locale bestMatch = Locale.lookup(languageRanges, SUPPORTED_LOCALES);\n' +
      '            if (bestMatch != null) {\n' +
      '                return bestMatch;\n' +
      '            }\n' +
      '        }\n' +
      '        \n' +
      '        // Fallback to default\n' +
      '        return Locale.ENGLISH;\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Sets the user\'s preferred locale\n' +
      '     * \n' +
      '     * @param request the HTTP request\n' +
      '     * @param locale the preferred locale\n' +
      '     */\n' +
      '    public void setUserLocale(HttpServletRequest request, Locale locale) {\n' +
      '        if (SUPPORTED_LOCALES.contains(locale)) {\n' +
      '            request.getSession().setAttribute("user.locale", locale);\n' +
      '        }\n' +
      '    }\n' +
      '}\n\n' +
      '// 7. Spring Configuration for i18n\n' +
      '@Configuration\n' +
      '@EnableWebMvc\n' +
      'public class WebConfig implements WebMvcConfigurer {\n' +
      '    \n' +
      '    @Bean\n' +
      '    public LocaleResolver localeResolver() {\n' +
      '        SessionLocaleResolver localeResolver = new SessionLocaleResolver();\n' +
      '        localeResolver.setDefaultLocale(Locale.ENGLISH);\n' +
      '        return localeResolver;\n' +
      '    }\n' +
      '    \n' +
      '    @Bean\n' +
      '    public LocaleChangeInterceptor localeChangeInterceptor() {\n' +
      '        LocaleChangeInterceptor interceptor = new LocaleChangeInterceptor();\n' +
      '        interceptor.setParamName("lang");\n' +
      '        return interceptor;\n' +
      '    }\n' +
      '    \n' +
      '    @Override\n' +
      '    public void addInterceptors(InterceptorRegistry registry) {\n' +
      '        registry.addInterceptor(localeChangeInterceptor());\n' +
      '    }\n' +
      '    \n' +
      '    @Bean\n' +
      '    public MessageSource messageSource() {\n' +
      '        ReloadableResourceBundleMessageSource messageSource = \n' +
      '            new ReloadableResourceBundleMessageSource();\n' +
      '        messageSource.setBasename("classpath:messages");\n' +
      '        messageSource.setDefaultEncoding("UTF-8");\n' +
      '        messageSource.setCacheSeconds(3600); // Refresh every hour\n' +
      '        return messageSource;\n' +
      '    }\n' +
      '}\n\n' +
      '// 8. Controller with i18n Support\n' +
      '@Controller\n' +
      'public class HomeController {\n' +
      '    \n' +
      '    @Autowired\n' +
      '    private MessageSource messageSource;\n' +
      '    \n' +
      '    @Autowired\n' +
      '    private LocaleService localeService;\n' +
      '    \n' +
      '    @GetMapping("/home")\n' +
      '    public String home(Model model, HttpServletRequest request) {\n' +
      '        Locale locale = localeService.determineLocale(request);\n' +
      '        \n' +
      '        // Get localized messages\n' +
      '        String appTitle = messageSource.getMessage("app.title", null, locale);\n' +
      '        String welcomeMessage = messageSource.getMessage(\n' +
      '            "app.welcome", new Object[]{"My Application"}, locale);\n' +
      '        \n' +
      '        model.addAttribute("appTitle", appTitle);\n' +
      '        model.addAttribute("welcomeMessage", welcomeMessage);\n' +
      '        model.addAttribute("currentLocale", locale);\n' +
      '        \n' +
      '        return "home";\n' +
      '    }\n' +
      '    \n' +
      '    @GetMapping("/change-language")\n' +
      '    public String changeLanguage(\n' +
      '            @RequestParam("lang") String language, \n' +
      '            HttpServletRequest request,\n' +
      '            HttpServletResponse response) {\n' +
      '        \n' +
      '        Locale locale = Locale.forLanguageTag(language);\n' +
      '        localeService.setUserLocale(request, locale);\n' +
      '        \n' +
      '        // Redirect to referring page\n' +
      '        String referer = request.getHeader("Referer");\n' +
      '        return referer != null ? "redirect:" + referer : "redirect:/home";\n' +
      '    }\n' +
      '}\n\n' +
      '// 9. Utility Class for Locale-Sensitive Formatting\n' +
      'public class LocalizationUtils {\n' +
      '    \n' +
      '    /**\n' +
      '     * Formats a date according to the specified locale\n' +
      '     * \n' +
      '     * @param date the date to format\n' +
      '     * @param locale the target locale\n' +
      '     * @return formatted date string\n' +
      '     */\n' +
      '    public static String formatDate(LocalDate date, Locale locale) {\n' +
      '        DateTimeFormatter formatter = DateTimeFormatter\n' +
      '            .ofLocalizedDate(FormatStyle.MEDIUM)\n' +
      '            .withLocale(locale);\n' +
      '        return date.format(formatter);\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Formats a number according to the specified locale\n' +
      '     * \n' +
      '     * @param number the number to format\n' +
      '     * @param locale the target locale\n' +
      '     * @return formatted number string\n' +
      '     */\n' +
      '    public static String formatNumber(Number number, Locale locale) {\n' +
      '        NumberFormat formatter = NumberFormat.getInstance(locale);\n' +
      '        return formatter.format(number);\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Formats currency according to the specified locale and currency code\n' +
      '     * \n' +
      '     * @param amount the amount to format\n' +
      '     * @param locale the target locale\n' +
      '     * @param currencyCode the currency code (e.g., "USD", "EUR")\n' +
      '     * @return formatted currency string\n' +
      '     */\n' +
      '    public static String formatCurrency(\n' +
      '            BigDecimal amount, Locale locale, String currencyCode) {\n' +
      '        NumberFormat formatter = NumberFormat.getCurrencyInstance(locale);\n' +
      '        Currency currency = Currency.getInstance(currencyCode);\n' +
      '        formatter.setCurrency(currency);\n' +
      '        return formatter.format(amount);\n' +
      '    }\n' +
      '}\n\n' +
      '// 10. Thymeleaf Template with i18n Support\n' +
      '<!-- home.html -->\n' +
      '<!DOCTYPE html>\n' +
      '<html xmlns:th="http://www.thymeleaf.org">\n' +
      '<head>\n' +
      '    <title th:text="#{app.title}">My Application</title>\n' +
      '</head>\n' +
      '<body>\n' +
      '    <div class="header">\n' +
      '        <h1 th:text="#{app.title}">My Application</h1>\n' +
      '        \n' +
      '        <!-- Language Selector -->\n' +
      '        <div class="language-selector">\n' +
      '            <a th:href="@{/change-language(lang=\'en\')}">English</a> |\n' +
      '            <a th:href="@{/change-language(lang=\'fr\')}">Français</a> |\n' +
      '            <a th:href="@{/change-language(lang=\'de\')}">Deutsch</a> |\n' +
      '            <a th:href="@{/change-language(lang=\'ja\')}">日本語</a>\n' +
      '        </div>\n' +
      '    </div>\n' +
      '    \n' +
      '    <div class="content">\n' +
      '        <p th:text="#{app.welcome(${appTitle})}">\n' +
      '            Welcome to My Application!\n' +
      '        </p>\n' +
      '        \n' +
      '        <div th:if="${currentUser != null}">\n' +
      '            <p th:text="#{user.welcome(${currentUser.name})}">\n' +
      '                Welcome, User!\n' +
      '            </p>\n' +
      '        </div>\n' +
      '        \n' +
      '        <!-- Navigation -->\n' +
      '        <nav>\n' +
      '            <ul>\n' +
      '                <li><a th:href="@{/login}" th:text="#{user.login}">Login</a></li>\n' +
      '                <li><a th:href="@{/profile}" th:text="#{user.profile}">Profile</a></li>\n' +
      '                <li><a th:href="@{/settings}" th:text="#{user.settings}">Settings</a></li>\n' +
      '            </ul>\n' +
      '        </nav>\n' +
      '    </div>\n' +
      '    \n' +
      '    <div class="footer">\n' +
      '        <p th:text="#{app.copyright(${#dates.year(#dates.createNow())})}">\n' +
      '            © 2023 My Application\n' +
      '        </p>\n' +
      '    </div>\n' +
      '</body>\n' +
      '</html>',
    exercise: '<div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Exercise: Implement Internationalization for an E-Commerce Application' +
      '</h1>' +
      '<p class="mt-3 text-purple-100 text-lg">Create a fully internationalized e-commerce application with support for multiple languages</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'E-Commerce Application i18n' +
      '</h2>' +
      '<div class="bg-purple-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-purple-800 mb-2">📋 Application Components</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Core Features</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Product catalog with descriptions</li>' +
      '<li>• Shopping cart functionality</li>' +
      '<li>• User registration and login</li>' +
      '<li>• Order processing and confirmation</li>' +
      '<li>• Payment processing interface</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Supported Languages</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• English (default)</li>' +
      '<li>• Spanish (es_ES)</li>' +
      '<li>• French (fr_FR)</li>' +
      '<li>• German (de_DE)</li>' +
      '<li>• Japanese (ja_JP)</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-gray-800 text-purple-400 p-4 rounded-lg">' +
      '<h4 class="text-white mb-2">💡 Implementation Tasks</h4>' +
      '<pre class="text-sm">' +
      '1. Create resource bundles for all supported languages\n' +
      '2. Implement locale detection and management\n' +
      '3. Add i18n support to all user-facing components\n' +
      '4. Handle currency and number formatting\n' +
      '5. Implement language switching functionality\n' +
      '6. Test with different character sets and scripts\n' +
      '7. Add right-to-left language support\n' +
      '8. Validate all translations with native speakers</pre>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'i18n Quality Assurance' +
      '</h2>' +
      '<div class="bg-indigo-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-indigo-800 mb-2">✅ Testing Checklist</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Functional Testing</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• All text is properly localized</li>' +
      '<li>• Date/time formatting is correct</li>' +
      '<li>• Number/currency formatting works</li>' +
      '<li>• Language switching functions</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">UI/UX Testing</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Text expansion doesn\'t break layouts</li>' +
      '<li>• Right-to-left languages display correctly</li>' +
      '<li>• Fonts support all required characters</li>' +
      '<li>• Cultural appropriateness of content</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<div class="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-lg mt-8">' +
      '<h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>' +
      '<p class="text-purple-100">' +
      'After completing this exercise, you\'ll have implemented comprehensive internationalization ' +
      'for a complete e-commerce application with proper resource management and locale handling.' +
      '</p>' +
      '</div>' +
      '</div>'
  }
};