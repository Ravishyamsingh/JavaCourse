import { LessonContent } from '../../types/LessonTypes';

export const lesson_17_5: LessonContent = {
  title: 'Message Queues and Event Streaming',
  type: 'lesson',
  duration: '90 min',
  module: 'Microservices and Cloud',
  content: {
    overview: 'Learn asynchronous communication patterns using message queues and event streaming platforms like Apache Kafka. Understand event-driven architecture, message patterns, and implementation with Spring Cloud Stream.',
    objectives: [
      'Understand asynchronous communication patterns',
      'Implement message queues with RabbitMQ and Apache Kafka',
      'Design event-driven architectures',
      'Use Spring Cloud Stream for messaging',
      'Handle message ordering and consistency',
      'Implement event sourcing and CQRS patterns'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Message Queues and Event Streaming
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Asynchronous communication for scalable microservices</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Asynchronous Communication Patterns
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Asynchronous communication decouples services and enables better scalability and resilience. 
            Messages are sent to a queue or stream and processed independently by consumers.
          </p>
          
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">🎯 Key Benefits</h4>
            <ul class="text-purple-700 space-y-1">
              <li>• <strong>Decoupling:</strong> Services don't need to know about each other</li>
              <li>• <strong>Scalability:</strong> Independent scaling of producers and consumers</li>
              <li>• <strong>Resilience:</strong> System continues working even if some services are down</li>
              <li>• <strong>Performance:</strong> Non-blocking communication patterns</li>
              <li>• <strong>Flexibility:</strong> Different processing speeds for different services</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🔄 Message Patterns</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Point-to-Point:</strong> One consumer processes each message</li>
                <li>• <strong>Publish-Subscribe:</strong> Multiple consumers receive messages</li>
                <li>• <strong>Request-Reply:</strong> Synchronous response over asynchronous channel</li>
                <li>• <strong>Dead Letter Queue:</strong> Handle failed messages</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">⚡ Event-Driven Architecture</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Events:</strong> Represent facts that have occurred</li>
                <li>• <strong>Producers:</strong> Generate and publish events</li>
                <li>• <strong>Consumers:</strong> React to events</li>
                <li>• <strong>Event Store:</strong> Persistent event log</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Message Queue Technologies
          </h2>
          
          <div class="space-y-6">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">RabbitMQ Architecture</h4>
              <p class="text-indigo-700 mb-3">RabbitMQ is a robust messaging broker with advanced routing capabilities:</p>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-indigo-800 mb-2">Core Components</h5>
                <div class="grid md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <strong>Producer</strong>
                    <p class="text-gray-600">Sends messages to exchanges</p>
                  </div>
                  <div>
                    <strong>Exchange</strong>
                    <p class="text-gray-600">Routes messages to queues</p>
                  </div>
                  <div>
                    <strong>Queue</strong>
                    <p class="text-gray-600">Stores messages for consumers</p>
                  </div>
                  <div>
                    <strong>Consumer</strong>
                    <p class="text-gray-600">Receives and processes messages</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Apache Kafka Fundamentals</h4>
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white rounded border">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="py-2 px-4 text-left">Component</th>
                      <th class="py-2 px-4 text-left">Description</th>
                      <th class="py-2 px-4 text-left">Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Topic</td>
                      <td class="py-2 px-4">Category or feed name</td>
                      <td class="py-2 px-4">Logical grouping of messages</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Partition</td>
                      <td class="py-2 px-4">Ordered, immutable sequence</td>
                      <td class="py-2 px-4">Parallel processing</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Producer</td>
                      <td class="py-2 px-4">Publishes messages to topics</td>
                      <td class="py-2 px-4">Data ingestion</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Consumer</td>
                      <td class="py-2 px-4">Subscribes to topics</td>
                      <td class="py-2 px-4">Data processing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Spring Cloud Stream
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Stream Processing Model</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Source</h5>
                  <p class="text-sm text-gray-700 mb-2">Produces messages to output channels</p>
                  <ul class="text-xs space-y-1">
                    <li>• Outbound message producers</li>
                    <li>• Event generation</li>
                    <li>• Data publishing</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Sink</h5>
                  <p class="text-sm text-gray-700 mb-2">Consumes messages from input channels</p>
                  <ul class="text-xs space-y-1">
                    <li>• Inbound message consumers</li>
                    <li>• Event processing</li>
                    <li>• Data transformation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Event Sourcing and CQRS
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Event Sourcing Pattern</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">Benefits</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Complete audit trail</li>
                    <li>• Temporal queries</li>
                    <li>• Replay capability</li>
                    <li>• Debugging support</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">Challenges</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Complex implementation</li>
                    <li>• Event schema evolution</li>
                    <li>• Performance considerations</li>
                    <li>• Event store management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
// Complete Spring Cloud Stream Implementation

// 1. Message Producer Service
@SpringBootApplication
@EnableBinding(Source.class)
public class OrderServiceApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(OrderServiceApplication.class, args);
    }
    
    @Autowired
    private Source source;
    
    public void createOrder(Order order) {
        // Process order logic
        order.setStatus("CREATED");
        order.setTimestamp(LocalDateTime.now());
        
        // Send order created event
        OrderCreatedEvent event = new OrderCreatedEvent(
            order.getId(),
            order.getUserId(),
            order.getAmount(),
            order.getTimestamp()
        );
        
        source.output().send(MessageBuilder.withPayload(event).build());
    }
}

// 2. Message Consumer Service
@SpringBootApplication
@EnableBinding(Sink.class)
public class NotificationServiceApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(NotificationServiceApplication.class, args);
    }
    
    @StreamListener(Sink.INPUT)
    public void handleOrderCreated(OrderCreatedEvent event) {
        try {
            // Process order created event
            sendNotification(event.getUserId(), 
                "Order #" + event.getOrderId() + " has been created");
        } catch (Exception e) {
            // Handle processing errors
            handleProcessingError(event, e);
        }
    }
    
    private void sendNotification(String userId, String message) {
        // Notification logic
        System.out.println("Sending notification to user " + userId + ": " + message);
    }
    
    private void handleProcessingError(OrderCreatedEvent event, Exception e) {
        // Send to dead letter queue
        System.err.println("Error processing event: " + e.getMessage());
        // Additional error handling logic
    }
}

// 3. Event Models
public class OrderCreatedEvent {
    private String orderId;
    private String userId;
    private BigDecimal amount;
    private LocalDateTime timestamp;
    
    // Constructors
    public OrderCreatedEvent() {}
    
    public OrderCreatedEvent(String orderId, String userId, BigDecimal amount, LocalDateTime timestamp) {
        this.orderId = orderId;
        this.userId = userId;
        this.amount = amount;
        this.timestamp = timestamp;
    }
    
    // Getters and setters
    public String getOrderId() { return orderId; }
    public void setOrderId(String orderId) { this.orderId = orderId; }
    
    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }
    
    public BigDecimal getAmount() { return amount; }
    public void setAmount(BigDecimal amount) { this.amount = amount; }
    
    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }
}

// 4. Custom Message Channels
public interface OrderProcessingChannels {
    
    String ORDER_CREATED = "orderCreatedChannel";
    String ORDER_CANCELLED = "orderCancelledChannel";
    String PAYMENT_PROCESSED = "paymentProcessedChannel";
    
    @Input(ORDER_CREATED)
    SubscribableChannel orderCreated();
    
    @Output(ORDER_CANCELLED)
    MessageChannel orderCancelled();
    
    @Input(PAYMENT_PROCESSED)
    SubscribableChannel paymentProcessed();
}

// 5. Advanced Configuration
@Configuration
@EnableBinding(OrderProcessingChannels.class)
public class StreamConfiguration {
    
    @Bean
    @StreamRetryTemplate
    public RetryTemplate orderRetryTemplate() {
        return RetryTemplate.builder()
            .maxAttempts(3)
            .exponentialBackoff(1000, 2.0, 10000)
            .build();
    }
    
    @Bean
    public MessageConverter jsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }
    
    @Bean
    public PartitionKeyExtractorStrategy partitionKeyExtractor() {
        return message -> {
            if (message.getPayload() instanceof OrderCreatedEvent) {
                OrderCreatedEvent event = (OrderCreatedEvent) message.getPayload();
                return event.getUserId().hashCode() % 5; // 5 partitions
            }
            return null;
        };
    }
}

// 6. Error Handling Configuration
@Component
public class StreamErrorHandler implements ListenerErrorHandler {
    
    @Override
    public Object handleError(Message<?> message, ListenerExecutionFailedException exception) {
        System.err.println("Message processing failed: " + exception.getMessage());
        
        // Send to dead letter queue
        sendToDLQ(message, exception);
        
        // Return null to acknowledge message
        return null;
    }
    
    private void sendToDLQ(Message<?> message, Exception exception) {
        // Dead letter queue logic
        System.err.println("Sending message to DLQ: " + message.getPayload());
    }
}

// 7. Kafka Specific Configuration
@Configuration
@Profile("kafka")
public class KafkaConfiguration {
    
    @Bean
    public ConcurrentKafkaListenerContainerFactory<?, ?> kafkaListenerContainerFactory(
            ConsumerFactory<Object, Object> consumerFactory) {
        
        ConcurrentKafkaListenerContainerFactory<Object, Object> factory = 
            new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory);
        factory.setConcurrency(3);
        factory.setBatchListener(true);
        
        // Error handling
        factory.setErrorHandler(new SeekToCurrentErrorHandler(
            new FixedBackOff(1000L, 3)));
        
        return factory;
    }
}

// 8. RabbitMQ Specific Configuration
@Configuration
@Profile("rabbitmq")
public class RabbitMQConfiguration {
    
    @Bean
    public SimpleRabbitListenerContainerFactory rabbitListenerContainerFactory(
            ConnectionFactory connectionFactory) {
        
        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
        factory.setConnectionFactory(connectionFactory);
        factory.setConcurrentConsumers(3);
        factory.setMaxConcurrentConsumers(10);
        factory.setPrefetchCount(50);
        
        return factory;
    }
}
    `,
    exercise: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Exercise: Build an Event-Driven Order Processing System
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Create a complete event-driven architecture with multiple microservices communicating through message queues</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            System Architecture
          </h2>
          
          <div class="bg-purple-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-purple-800 mb-2">📋 System Components</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-purple-800 mb-2">Order Service</h5>
                <ul class="text-sm space-y-1">
                  <li>• Create and manage orders</li>
                  <li>• Publish order events</li>
                  <li>• Handle order lifecycle</li>
                  <li>• Communicate with inventory</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-purple-800 mb-2">Notification Service</h5>
                <ul class="text-sm space-y-1">
                  <li>• Send email/SMS notifications</li>
                  <li>• Process user events</li>
                  <li>• Handle delivery updates</li>
                  <li>• Manage notification templates</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Implementation Tasks</h4>
            <pre class="text-sm">
1. Set up RabbitMQ/Kafka cluster
2. Create Order Service with event publishing
3. Implement Notification Service consumer
4. Add Payment Service with event handling
5. Configure dead letter queues
6. Implement retry mechanisms
7. Add monitoring and metrics
8. Test event flow and error handling</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Event Flow Requirements
          </h2>
          
          <div class="bg-indigo-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-indigo-800 mb-2">🔄 Event Processing Flow</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-indigo-800 mb-2">Order Events</h5>
                <ul class="text-sm space-y-1">
                  <li>• OrderCreatedEvent</li>
                  <li>• OrderCancelledEvent</li>
                  <li>• OrderUpdatedEvent</li>
                  <li>• OrderShippedEvent</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-indigo-800 mb-2">Payment Events</h5>
                <ul class="text-sm space-y-1">
                  <li>• PaymentProcessedEvent</li>
                  <li>• PaymentFailedEvent</li>
                  <li>• RefundInitiatedEvent</li>
                  <li>• RefundCompletedEvent</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div class="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-lg mt-8">
          <h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>
          <p class="text-purple-100">
            After completing this exercise, you'll have built a robust event-driven system with 
            proper error handling, retry mechanisms, and monitoring capabilities.
          </p>
        </div>
      </div>
    `
  }
};