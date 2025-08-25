import { LessonContent } from '../../types/LessonTypes';

export const lesson_19_3: LessonContent = {
  title: 'Creating a GUI Application',
  type: 'lesson',
  duration: '120 min',
  module: 'Project Development',
  content: {
    overview: 'Learn to build desktop GUI applications using JavaFX, covering UI design, event handling, data binding, layouts, and creating professional desktop applications with modern user interfaces.',
    objectives: [
      'Master JavaFX fundamentals and architecture',
      'Design responsive and intuitive user interfaces',
      'Implement event handling and user interactions',
      'Apply data binding and MVC patterns',
      'Create custom controls and layouts',
      'Handle file operations and data persistence in GUI apps',
      'Build complete desktop applications with professional UI'
    ],
    theory: '<div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Creating a GUI Application' +
      '</h1>' +
      '<p class="mt-3 text-purple-100 text-lg">Building modern desktop applications with JavaFX</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'JavaFX Architecture and Components' +
      '</h2>' +
      '<p class="text-gray-700 mb-4 leading-relaxed text-lg">' +
      'JavaFX provides a rich set of graphics and media APIs for creating modern desktop applications ' +
      'with hardware-accelerated graphics, CSS styling, and FXML markup support.' +
      '</p>' +
      '<div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">' +
      '<h4 class="font-bold text-purple-800 mb-2">🏗️ Core Components</h4>' +
      '<ul class="text-purple-700 space-y-1">' +
      '<li>• <strong>Stage:</strong> Top-level container (window)</li>' +
      '<li>• <strong>Scene:</strong> Content container within a stage</li>' +
      '<li>• <strong>Scene Graph:</strong> Hierarchical tree of nodes</li>' +
      '<li>• <strong>Controls:</strong> UI elements (buttons, text fields, etc.)</li>' +
      '<li>• <strong>Layouts:</strong> Container nodes for organizing UI</li>' +
      '<li>• <strong>CSS Styling:</strong> Appearance customization</li>' +
      '</ul>' +
      '</div>' +
      '<div class="grid md:grid-cols-2 gap-6">' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">✅ JavaFX Advantages</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Modern, rich user interfaces</li>' +
      '<li>• Hardware-accelerated graphics</li>' +
      '<li>• CSS styling support</li>' +
      '<li>• FXML for declarative UI</li>' +
      '<li>• Built-in animations and effects</li>' +
      '<li>• Cross-platform compatibility</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-green-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-green-800 mb-2">🎯 Design Principles</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Separation of UI and business logic</li>' +
      '<li>• Model-View-Controller pattern</li>' +
      '<li>• Event-driven programming</li>' +
      '<li>• Responsive layout design</li>' +
      '<li>• Accessibility considerations</li>' +
      '<li>• User experience optimization</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-pink-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Layout Management and Controls' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-pink-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-pink-800 mb-2">Layout Containers</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-pink-800 mb-2">Basic Layouts</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Fundamental layout containers</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• VBox - Vertical arrangement</li>' +
      '<li>• HBox - Horizontal arrangement</li>' +
      '<li>• BorderPane - Five-region layout</li>' +
      '<li>• GridPane - Grid-based layout</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-pink-800 mb-2">Advanced Layouts</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Complex layout management</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• StackPane - Layered components</li>' +
      '<li>• FlowPane - Flowing arrangement</li>' +
      '<li>• TilePane - Uniform tile layout</li>' +
      '<li>• AnchorPane - Anchor-based positioning</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">Common Controls</h4>' +
      '<div class="overflow-x-auto">' +
      '<table class="min-w-full bg-white rounded border">' +
      '<thead>' +
      '<tr class="bg-gray-100">' +
      '<th class="py-2 px-4 text-left">Control</th>' +
      '<th class="py-2 px-4 text-left">Purpose</th>' +
      '<th class="py-2 px-4 text-left">Key Properties</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Button</td>' +
      '<td class="py-2 px-4">User actions</td>' +
      '<td class="py-2 px-4">text, onAction</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">TextField</td>' +
      '<td class="py-2 px-4">Text input</td>' +
      '<td class="py-2 px-4">text, promptText</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">TableView</td>' +
      '<td class="py-2 px-4">Data display</td>' +
      '<td class="py-2 px-4">items, columns</td>' +
      '</tr>' +
      '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>' +
      'Event Handling and Data Binding' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-indigo-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-indigo-800 mb-2">Event Handling Patterns</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Lambda Expressions</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Modern event handling approach</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Concise syntax</li>' +
      '<li>• Functional programming style</li>' +
      '<li>• Type inference</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Event Handlers</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Traditional event handling</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• EventHandler interface</li>' +
      '<li>• Anonymous inner classes</li>' +
      '<li>• Method references</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>' +
      'FXML and Scene Builder' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-orange-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-orange-800 mb-2">FXML Benefits</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Declarative UI</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• XML-based UI definition</li>' +
      '<li>• Separation of UI and logic</li>' +
      '<li>• Designer-developer collaboration</li>' +
      '<li>• Easier maintenance</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Scene Builder</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Visual UI design tool</li>' +
      '<li>• Drag-and-drop interface</li>' +
      '<li>• Property editing</li>' +
      '<li>• FXML generation</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '</div>',
    codeExample: '// Complete JavaFX GUI Application - Task Manager\n\n' +
      'import javafx.application.Application;\n' +
      'import javafx.collections.FXCollections;\n' +
      'import javafx.collections.ObservableList;\n' +
      'import javafx.geometry.Insets;\n' +
      'import javafx.geometry.Pos;\n' +
      'import javafx.scene.Scene;\n' +
      'import javafx.scene.control.*;\n' +
      'import javafx.scene.control.cell.PropertyValueFactory;\n' +
      'import javafx.scene.layout.*;\n' +
      'import javafx.stage.Stage;\n' +
      'import java.time.LocalDate;\n' +
      'import java.time.LocalDateTime;\n' +
      'import java.util.Optional;\n\n' +
      '// Main Application Class\n' +
      'public class TaskManagerApp extends Application {\n' +
      '    \n' +
      '    private TaskService taskService;\n' +
      '    private ObservableList<Task> taskList;\n' +
      '    private TableView<Task> taskTable;\n' +
      '    private TextField titleField;\n' +
      '    private TextArea descriptionArea;\n' +
      '    private ComboBox<Priority> priorityCombo;\n' +
      '    private DatePicker dueDatePicker;\n' +
      '    private ComboBox<TaskStatus> statusCombo;\n' +
      '    \n' +
      '    @Override\n' +
      '    public void start(Stage primaryStage) {\n' +
      '        taskService = new TaskService();\n' +
      '        taskList = FXCollections.observableArrayList();\n' +
      '        \n' +
      '        // Load existing tasks\n' +
      '        taskService.loadTasks().forEach(taskList::add);\n' +
      '        \n' +
      '        // Create main layout\n' +
      '        BorderPane root = new BorderPane();\n' +
      '        root.setTop(createMenuBar());\n' +
      '        root.setCenter(createMainContent());\n' +
      '        root.setRight(createTaskForm());\n' +
      '        root.setBottom(createStatusBar());\n' +
      '        \n' +
      '        // Create scene and stage\n' +
      '        Scene scene = new Scene(root, 1000, 700);\n' +
      '        scene.getStylesheets().add(getClass().getResource("/styles.css").toExternalForm());\n' +
      '        \n' +
      '        primaryStage.setTitle("Task Manager - JavaFX Application");\n' +
      '        primaryStage.setScene(scene);\n' +
      '        primaryStage.setMinWidth(800);\n' +
      '        primaryStage.setMinHeight(600);\n' +
      '        primaryStage.show();\n' +
      '        \n' +
      '        // Handle application close\n' +
      '        primaryStage.setOnCloseRequest(e -> {\n' +
      '            taskService.saveTasks(taskList);\n' +
      '            System.out.println("Tasks saved successfully!");\n' +
      '        });\n' +
      '    }\n' +
      '    \n' +
      '    private MenuBar createMenuBar() {\n' +
      '        MenuBar menuBar = new MenuBar();\n' +
      '        \n' +
      '        // File Menu\n' +
      '        Menu fileMenu = new Menu("File");\n' +
      '        MenuItem newTask = new MenuItem("New Task");\n' +
      '        MenuItem saveAll = new MenuItem("Save All");\n' +
      '        MenuItem exit = new MenuItem("Exit");\n' +
      '        \n' +
      '        newTask.setOnAction(e -> clearForm());\n' +
      '        saveAll.setOnAction(e -> taskService.saveTasks(taskList));\n' +
      '        exit.setOnAction(e -> System.exit(0));\n' +
      '        \n' +
      '        fileMenu.getItems().addAll(newTask, new SeparatorMenuItem(), saveAll, new SeparatorMenuItem(), exit);\n' +
      '        \n' +
      '        // View Menu\n' +
      '        Menu viewMenu = new Menu("View");\n' +
      '        MenuItem showCompleted = new MenuItem("Show Completed");\n' +
      '        MenuItem showPending = new MenuItem("Show Pending");\n' +
      '        MenuItem showAll = new MenuItem("Show All");\n' +
      '        \n' +
      '        showCompleted.setOnAction(e -> filterTasks(TaskStatus.COMPLETED));\n' +
      '        showPending.setOnAction(e -> filterTasks(TaskStatus.PENDING));\n' +
      '        showAll.setOnAction(e -> showAllTasks());\n' +
      '        \n' +
      '        viewMenu.getItems().addAll(showCompleted, showPending, showAll);\n' +
      '        \n' +
      '        menuBar.getMenus().addAll(fileMenu, viewMenu);\n' +
      '        return menuBar;\n' +
      '    }\n' +
      '    \n' +
      '    private VBox createMainContent() {\n' +
      '        VBox content = new VBox(10);\n' +
      '        content.setPadding(new Insets(10));\n' +
      '        \n' +
      '        // Search and filter section\n' +
      '        HBox searchBox = new HBox(10);\n' +
      '        searchBox.setAlignment(Pos.CENTER_LEFT);\n' +
      '        \n' +
      '        TextField searchField = new TextField();\n' +
      '        searchField.setPromptText("Search tasks...");\n' +
      '        searchField.setPrefWidth(200);\n' +
      '        \n' +
      '        Button searchButton = new Button("Search");\n' +
      '        Button clearButton = new Button("Clear");\n' +
      '        \n' +
      '        searchButton.setOnAction(e -> searchTasks(searchField.getText()));\n' +
      '        clearButton.setOnAction(e -> {\n' +
      '            searchField.clear();\n' +
      '            showAllTasks();\n' +
      '        });\n' +
      '        \n' +
      '        searchBox.getChildren().addAll(\n' +
      '            new Label("Search:"), searchField, searchButton, clearButton\n' +
      '        );\n' +
      '        \n' +
      '        // Task table\n' +
      '        taskTable = createTaskTable();\n' +
      '        \n' +
      '        content.getChildren().addAll(searchBox, taskTable);\n' +
      '        VBox.setVgrow(taskTable, Priority.ALWAYS);\n' +
      '        \n' +
      '        return content;\n' +
      '    }\n' +
      '    \n' +
      '    private TableView<Task> createTaskTable() {\n' +
      '        TableView<Task> table = new TableView<>();\n' +
      '        table.setItems(taskList);\n' +
      '        \n' +
      '        // Create columns\n' +
      '        TableColumn<Task, String> titleCol = new TableColumn<>("Title");\n' +
      '        titleCol.setCellValueFactory(new PropertyValueFactory<>("title"));\n' +
      '        titleCol.setPrefWidth(200);\n' +
      '        \n' +
      '        TableColumn<Task, String> descriptionCol = new TableColumn<>("Description");\n' +
      '        descriptionCol.setCellValueFactory(new PropertyValueFactory<>("description"));\n' +
      '        descriptionCol.setPrefWidth(250);\n' +
      '        \n' +
      '        TableColumn<Task, Priority> priorityCol = new TableColumn<>("Priority");\n' +
      '        priorityCol.setCellValueFactory(new PropertyValueFactory<>("priority"));\n' +
      '        priorityCol.setPrefWidth(100);\n' +
      '        \n' +
      '        TableColumn<Task, TaskStatus> statusCol = new TableColumn<>("Status");\n' +
      '        statusCol.setCellValueFactory(new PropertyValueFactory<>("status"));\n' +
      '        statusCol.setPrefWidth(120);\n' +
      '        \n' +
      '        TableColumn<Task, LocalDate> dueDateCol = new TableColumn<>("Due Date");\n' +
      '        dueDateCol.setCellValueFactory(new PropertyValueFactory<>("dueDate"));\n' +
      '        dueDateCol.setPrefWidth(120);\n' +
      '        \n' +
      '        table.getColumns().addAll(titleCol, descriptionCol, priorityCol, statusCol, dueDateCol);\n' +
      '        \n' +
      '        // Handle row selection\n' +
      '        table.getSelectionModel().selectedItemProperty().addListener(\n' +
      '            (obs, oldSelection, newSelection) -> {\n' +
      '                if (newSelection != null) {\n' +
      '                    populateForm(newSelection);\n' +
      '                }\n' +
      '            }\n' +
      '        );\n' +
      '        \n' +
      '        return table;\n' +
      '    }\n' +
      '    \n' +
      '    private VBox createTaskForm() {\n' +
      '        VBox form = new VBox(10);\n' +
      '        form.setPadding(new Insets(10));\n' +
      '        form.setPrefWidth(300);\n' +
      '        form.setStyle("-fx-background-color: #f5f5f5; -fx-border-color: #ddd;");\n' +
      '        \n' +
      '        Label formTitle = new Label("Task Details");\n' +
      '        formTitle.setStyle("-fx-font-size: 16px; -fx-font-weight: bold;");\n' +
      '        \n' +
      '        // Form fields\n' +
      '        titleField = new TextField();\n' +
      '        titleField.setPromptText("Task title...");\n' +
      '        \n' +
      '        descriptionArea = new TextArea();\n' +
      '        descriptionArea.setPromptText("Task description...");\n' +
      '        descriptionArea.setPrefRowCount(3);\n' +
      '        \n' +
      '        priorityCombo = new ComboBox<>();\n' +
      '        priorityCombo.getItems().addAll(Priority.values());\n' +
      '        priorityCombo.setValue(Priority.MEDIUM);\n' +
      '        \n' +
      '        dueDatePicker = new DatePicker();\n' +
      '        dueDatePicker.setValue(LocalDate.now().plusDays(7));\n' +
      '        \n' +
      '        statusCombo = new ComboBox<>();\n' +
      '        statusCombo.getItems().addAll(TaskStatus.values());\n' +
      '        statusCombo.setValue(TaskStatus.PENDING);\n' +
      '        \n' +
      '        // Buttons\n' +
      '        HBox buttonBox = new HBox(10);\n' +
      '        Button addButton = new Button("Add Task");\n' +
      '        Button updateButton = new Button("Update");\n' +
      '        Button deleteButton = new Button("Delete");\n' +
      '        Button clearButton = new Button("Clear");\n' +
      '        \n' +
      '        addButton.setOnAction(e -> addTask());\n' +
      '        updateButton.setOnAction(e -> updateTask());\n' +
      '        deleteButton.setOnAction(e -> deleteTask());\n' +
      '        clearButton.setOnAction(e -> clearForm());\n' +
      '        \n' +
      '        buttonBox.getChildren().addAll(addButton, updateButton);\n' +
      '        \n' +
      '        HBox actionBox = new HBox(10);\n' +
      '        actionBox.getChildren().addAll(deleteButton, clearButton);\n' +
      '        \n' +
      '        form.getChildren().addAll(\n' +
      '            formTitle,\n' +
      '            new Label("Title:"), titleField,\n' +
      '            new Label("Description:"), descriptionArea,\n' +
      '            new Label("Priority:"), priorityCombo,\n' +
      '            new Label("Due Date:"), dueDatePicker,\n' +
      '            new Label("Status:"), statusCombo,\n' +
      '            new Separator(),\n' +
      '            buttonBox,\n' +
      '            actionBox\n' +
      '        );\n' +
      '        \n' +
      '        return form;\n' +
      '    }\n' +
      '    \n' +
      '    private HBox createStatusBar() {\n' +
      '        HBox statusBar = new HBox();\n' +
      '        statusBar.setPadding(new Insets(5, 10, 5, 10));\n' +
      '        statusBar.setStyle("-fx-background-color: #e0e0e0;");\n' +
      '        \n' +
      '        Label statusLabel = new Label("Ready");\n' +
      '        Label taskCountLabel = new Label();\n' +
      '        \n' +
      '        // Update task count\n' +
      '        taskList.addListener((javafx.collections.ListChangeListener<Task>) change -> {\n' +
      '            taskCountLabel.setText("Total Tasks: " + taskList.size());\n' +
      '        });\n' +
      '        \n' +
      '        Region spacer = new Region();\n' +
      '        HBox.setHgrow(spacer, Priority.ALWAYS);\n' +
      '        \n' +
      '        statusBar.getChildren().addAll(statusLabel, spacer, taskCountLabel);\n' +
      '        return statusBar;\n' +
      '    }\n' +
      '    \n' +
      '    private void addTask() {\n' +
      '        if (validateForm()) {\n' +
      '            Task task = new Task(\n' +
      '                generateTaskId(),\n' +
      '                titleField.getText(),\n' +
      '                descriptionArea.getText(),\n' +
      '                priorityCombo.getValue(),\n' +
      '                dueDatePicker.getValue(),\n' +
      '                statusCombo.getValue()\n' +
      '            );\n' +
      '            \n' +
      '            taskList.add(task);\n' +
      '            taskService.addTask(task);\n' +
      '            clearForm();\n' +
      '            \n' +
      '            showAlert("Success", "Task added successfully!", Alert.AlertType.INFORMATION);\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    private void updateTask() {\n' +
      '        Task selectedTask = taskTable.getSelectionModel().getSelectedItem();\n' +
      '        if (selectedTask != null && validateForm()) {\n' +
      '            selectedTask.setTitle(titleField.getText());\n' +
      '            selectedTask.setDescription(descriptionArea.getText());\n' +
      '            selectedTask.setPriority(priorityCombo.getValue());\n' +
      '            selectedTask.setDueDate(dueDatePicker.getValue());\n' +
      '            selectedTask.setStatus(statusCombo.getValue());\n' +
      '            selectedTask.setUpdatedAt(LocalDateTime.now());\n' +
      '            \n' +
      '            taskTable.refresh();\n' +
      '            taskService.updateTask(selectedTask);\n' +
      '            \n' +
      '            showAlert("Success", "Task updated successfully!", Alert.AlertType.INFORMATION);\n' +
      '        } else {\n' +
      '            showAlert("Error", "Please select a task to update!", Alert.AlertType.WARNING);\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    private void deleteTask() {\n' +
      '        Task selectedTask = taskTable.getSelectionModel().getSelectedItem();\n' +
      '        if (selectedTask != null) {\n' +
      '            Alert confirmation = new Alert(Alert.AlertType.CONFIRMATION);\n' +
      '            confirmation.setTitle("Delete Task");\n' +
      '            confirmation.setHeaderText("Are you sure?");\n' +
      '            confirmation.setContentText("This will permanently delete the task: " + selectedTask.getTitle());\n' +
      '            \n' +
      '            Optional<ButtonType> result = confirmation.showAndWait();\n' +
      '            if (result.isPresent() && result.get() == ButtonType.OK) {\n' +
      '                taskList.remove(selectedTask);\n' +
      '                taskService.deleteTask(selectedTask.getId());\n' +
      '                clearForm();\n' +
      '                \n' +
      '                showAlert("Success", "Task deleted successfully!", Alert.AlertType.INFORMATION);\n' +
      '            }\n' +
      '        } else {\n' +
      '            showAlert("Error", "Please select a task to delete!", Alert.AlertType.WARNING);\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    private void populateForm(Task task) {\n' +
      '        titleField.setText(task.getTitle());\n' +
      '        descriptionArea.setText(task.getDescription());\n' +
      '        priorityCombo.setValue(task.getPriority());\n' +
      '        dueDatePicker.setValue(task.getDueDate());\n' +
      '        statusCombo.setValue(task.getStatus());\n' +
      '    }\n' +
      '    \n' +
      '    private void clearForm() {\n' +
      '        titleField.clear();\n' +
      '        descriptionArea.clear();\n' +
      '        priorityCombo.setValue(Priority.MEDIUM);\n' +
      '        dueDatePicker.setValue(LocalDate.now().plusDays(7));\n' +
      '        statusCombo.setValue(TaskStatus.PENDING);\n' +
      '        taskTable.getSelectionModel().clearSelection();\n' +
      '    }\n' +
      '    \n' +
      '    private boolean validateForm() {\n' +
      '        if (titleField.getText().trim().isEmpty()) {\n' +
      '            showAlert("Validation Error", "Task title is required!", Alert.AlertType.ERROR);\n' +
      '            return false;\n' +
      '        }\n' +
      '        \n' +
      '        if (dueDatePicker.getValue() == null) {\n' +
      '            showAlert("Validation Error", "Due date is required!", Alert.AlertType.ERROR);\n' +
      '            return false;\n' +
      '        }\n' +
      '        \n' +
      '        return true;\n' +
      '    }\n' +
      '    \n' +
      '    private void searchTasks(String searchTerm) {\n' +
      '        if (searchTerm.trim().isEmpty()) {\n' +
      '            showAllTasks();\n' +
      '            return;\n' +
      '        }\n' +
      '        \n' +
      '        ObservableList<Task> filteredTasks = FXCollections.observableArrayList();\n' +
      '        for (Task task : taskService.getAllTasks()) {\n' +
      '            if (task.getTitle().toLowerCase().contains(searchTerm.toLowerCase()) ||\n' +
      '                task.getDescription().toLowerCase().contains(searchTerm.toLowerCase())) {\n' +
      '                filteredTasks.add(task);\n' +
      '            }\n' +
      '        }\n' +
      '        \n' +
      '        taskTable.setItems(filteredTasks);\n' +
      '    }\n' +
      '    \n' +
      '    private void filterTasks(TaskStatus status) {\n' +
      '        ObservableList<Task> filteredTasks = FXCollections.observableArrayList();\n' +
      '        for (Task task : taskService.getAllTasks()) {\n' +
      '            if (task.getStatus() == status) {\n' +
      '                filteredTasks.add(task);\n' +
      '            }\n' +
      '        }\n' +
      '        taskTable.setItems(filteredTasks);\n' +
      '    }\n' +
      '    \n' +
      '    private void showAllTasks() {\n' +
      '        taskTable.setItems(taskList);\n' +
      '    }\n' +
      '    \n' +
      '    private void showAlert(String title, String message, Alert.AlertType type) {\n' +
      '        Alert alert = new Alert(type);\n' +
      '        alert.setTitle(title);\n' +
      '        alert.setHeaderText(null);\n' +
      '        alert.setContentText(message);\n' +
      '        alert.showAndWait();\n' +
      '    }\n' +
      '    \n' +
      '    private String generateTaskId() {\n' +
      '        return "TASK-" + System.currentTimeMillis();\n' +
      '    }\n' +
      '    \n' +
      '    public static void main(String[] args) {\n' +
      '        launch(args);\n' +
      '    }\n' +
      '}\n\n' +
      '// Task Model\n' +
      'class Task {\n' +
      '    private String id;\n' +
      '    private String title;\n' +
      '    private String description;\n' +
      '    private Priority priority;\n' +
      '    private LocalDate dueDate;\n' +
      '    private TaskStatus status;\n' +
      '    private LocalDateTime createdAt;\n' +
      '    private LocalDateTime updatedAt;\n' +
      '    \n' +
      '    public Task(String id, String title, String description, \n' +
      '               Priority priority, LocalDate dueDate, TaskStatus status) {\n' +
      '        this.id = id;\n' +
      '        this.title = title;\n' +
      '        this.description = description;\n' +
      '        this.priority = priority;\n' +
      '        this.dueDate = dueDate;\n' +
      '        this.status = status;\n' +
      '        this.createdAt = LocalDateTime.now();\n' +
      '        this.updatedAt = LocalDateTime.now();\n' +
      '    }\n' +
      '    \n' +
      '    // Getters and setters\n' +
      '    public String getId() { return id; }\n' +
      '    public String getTitle() { return title; }\n' +
      '    public void setTitle(String title) { this.title = title; }\n' +
      '    public String getDescription() { return description; }\n' +
      '    public void setDescription(String description) { this.description = description; }\n' +
      '    public Priority getPriority() { return priority; }\n' +
      '    public void setPriority(Priority priority) { this.priority = priority; }\n' +
      '    public LocalDate getDueDate() { return dueDate; }\n' +
      '    public void setDueDate(LocalDate dueDate) { this.dueDate = dueDate; }\n' +
      '    public TaskStatus getStatus() { return status; }\n' +
      '    public void setStatus(TaskStatus status) { this.status = status; }\n' +
      '    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }\n' +
      '}\n\n' +
      'enum Priority {\n' +
      '    LOW, MEDIUM, HIGH, URGENT\n' +
      '}\n\n' +
      'enum TaskStatus {\n' +
      '    PENDING, IN_PROGRESS, COMPLETED, CANCELLED\n' +
      '}\n\n' +
      '// Task Service\n' +
      'class TaskService {\n' +
      '    private List<Task> tasks;\n' +
      '    private static final String DATA_FILE = "tasks.json";\n' +
      '    \n' +
      '    public TaskService() {\n' +
      '        this.tasks = new ArrayList<>();\n' +
      '    }\n' +
      '    \n' +
      '    public void addTask(Task task) {\n' +
      '        tasks.add(task);\n' +
      '    }\n' +
      '    \n' +
      '    public void updateTask(Task task) {\n' +
      '        // Task is updated by reference in JavaFX\n' +
      '        System.out.println("Task updated: " + task.getTitle());\n' +
      '    }\n' +
      '    \n' +
      '    public void deleteTask(String taskId) {\n' +
      '        tasks.removeIf(task -> task.getId().equals(taskId));\n' +
      '    }\n' +
      '    \n' +
      '    public List<Task> getAllTasks() {\n' +
      '        return new ArrayList<>(tasks);\n' +
      '    }\n' +
      '    \n' +
      '    public List<Task> loadTasks() {\n' +
      '        // In a real implementation, load from JSON file\n' +
      '        // For demo, create sample tasks\n' +
      '        tasks.add(new Task("TASK-1", "Complete JavaFX Tutorial", \n' +
      '                          "Learn JavaFX basics and create first application", \n' +
      '                          Priority.HIGH, LocalDate.now().plusDays(3), TaskStatus.IN_PROGRESS));\n' +
      '        \n' +
      '        tasks.add(new Task("TASK-2", "Design Database Schema", \n' +
      '                          "Create database design for the project", \n' +
      '                          Priority.MEDIUM, LocalDate.now().plusDays(5), TaskStatus.PENDING));\n' +
      '        \n' +
      '        return new ArrayList<>(tasks);\n' +
      '    }\n' +
      '    \n' +
      '    public void saveTasks(ObservableList<Task> taskList) {\n' +
      '        this.tasks = new ArrayList<>(taskList);\n' +
      '        // In a real implementation, save to JSON file\n' +
      '        System.out.println("Saved " + tasks.size() + " tasks to file.");\n' +
      '    }\n' +
      '}',
    exercise: '<div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Exercise: Build a Personal Finance Manager GUI' +
      '</h1>' +
      '<p class="mt-3 text-purple-100 text-lg">Create a complete JavaFX application for managing personal finances</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Application Requirements' +
      '</h2>' +
      '<div class="bg-purple-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-purple-800 mb-2">💰 Finance Management Features</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Core Features</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Add income and expense transactions</li>' +
      '<li>• Categorize transactions</li>' +
      '<li>• View transaction history</li>' +
      '<li>• Generate financial reports</li>' +
      '<li>• Set and track budgets</li>' +
      '<li>• Export data to CSV</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">UI Components</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Transaction entry form</li>' +
      '<li>• Transaction table with filtering</li>' +
      '<li>• Category management</li>' +
      '<li>• Charts for visualization</li>' +
      '<li>• Menu bar with file operations</li>' +
      '<li>• Status bar with summary info</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-gray-800 text-green-400 p-4 rounded-lg">' +
      '<h4 class="text-white mb-2">💡 Implementation Tasks</h4>' +
      '<pre class="text-sm">' +
      '1. Create Transaction model class\\n' +
      '2. Design main application window layout\\n' +
      '3. Implement transaction entry form\\n' +
      '4. Build transaction table with sorting\\n' +
      '5. Add category management functionality\\n' +
      '6. Create charts for data visualization\\n' +
      '7. Implement file operations (save/load)\\n' +
      '8. Add data validation and error handling</pre>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-pink-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'UI Design and Layout' +
      '</h2>' +
      '<div class="bg-pink-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-pink-800 mb-2">🎨 Layout Structure</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-pink-800 mb-2">Main Window</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• BorderPane as root layout</li>' +
      '<li>• MenuBar at top</li>' +
      '<li>• Transaction table in center</li>' +
      '<li>• Entry form on right side</li>' +
      '<li>• Status bar at bottom</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-pink-800 mb-2">Form Design</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• GridPane for form layout</li>' +
      '<li>• Input validation</li>' +
      '<li>• Clear visual feedback</li>' +
      '<li>• Responsive design</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">🔧 Technical Requirements</h4>' +
      '<div class="overflow-x-auto">' +
      '<table class="min-w-full bg-white rounded border">' +
      '<thead>' +
      '<tr class="bg-gray-100">' +
      '<th class="py-2 px-4 text-left">Component</th>' +
      '<th class="py-2 px-4 text-left">Implementation</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Data Binding</td>' +
      '<td class="py-2 px-4">ObservableList for automatic UI updates</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Event Handling</td>' +
      '<td class="py-2 px-4">Lambda expressions and method references</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Validation</td>' +
      '<td class="py-2 px-4">Input validation with user feedback</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Persistence</td>' +
      '<td class="py-2 px-4">JSON file storage with error handling</td>' +
      '</tr>' +
      '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>' +
      'Testing and User Experience' +
      '</h2>' +
      '<div class="bg-indigo-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-indigo-800 mb-2">✅ Testing Checklist</h4>' +
      '<div class="grid md:grid-cols-3 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Functionality</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Add 20+ transactions</li>' +
      '<li>• Test all form validations</li>' +
      '<li>• Verify data persistence</li>' +
      '<li>• Check search and filtering</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">User Interface</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Responsive layout</li>' +
      '<li>• Clear visual feedback</li>' +
      '<li>• Intuitive navigation</li>' +
      '<li>• Error message display</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Performance</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Large dataset handling</li>' +
      '<li>• UI responsiveness</li>' +
      '<li>• Memory usage</li>' +
      '<li>• Startup time</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg mt-8">' +
      '<h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>' +
      '<p class="text-purple-100">' +
      'After completing this exercise, you will have built a complete JavaFX desktop application ' +
      'with modern UI design, data binding, event handling, and file persistence capabilities.' +
      '</p>' +
      '</div>' +
      '</div>'
  }
};