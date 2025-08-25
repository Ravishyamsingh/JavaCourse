import { LessonContent } from '../../types/LessonTypes';

export const lesson_12_6: LessonContent = {
  title: 'JMX and Monitoring',
  type: 'lesson',
  duration: '50 min',
  module: 'Advanced Java Features',
  content: {
    overview: 'Master Java Management Extensions (JMX) for application monitoring, management, and diagnostics. Learn to create custom MBeans, implement monitoring solutions, and integrate with enterprise monitoring systems.',
    objectives: [
      'Understand JMX architecture and management concepts',
      'Create and register custom MBeans for application monitoring',
      'Implement JMX notifications and event handling',
      'Build comprehensive monitoring dashboards',
      'Integrate with enterprise monitoring tools',
      'Apply best practices for production monitoring'
    ],
    theory: `
      <div class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          JMX and Application Monitoring
        </h1>
        <p class="mt-3 text-indigo-100 text-lg">Comprehensive application monitoring and management with Java Management Extensions</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            JMX Architecture Overview
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            JMX provides a standard way to monitor and manage Java applications through managed beans (MBeans), 
            enabling runtime configuration, performance monitoring, and operational control.
          </p>
          
          <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">
            <h4 class="font-bold text-indigo-800 mb-2">📊 JMX Components</h4>
            <p class="text-indigo-700">MBean Server acts as the registry for MBeans, while connectors provide remote access and adapters enable integration with management tools.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Core Components</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-bold text-blue-700">MBean Server</h5>
                  <p class="text-gray-600 text-sm">Central registry for managed beans</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-green-400">
                  <h5 class="font-bold text-green-700">MBeans</h5>
                  <p class="text-gray-600 text-sm">Managed objects exposing operations and attributes</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                  <h5 class="font-bold text-purple-700">JMX Connectors</h5>
                  <p class="text-gray-600 text-sm">Remote access to MBean Server</p>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">MBean Types</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>Standard MBeans:</strong> Static management interface</li>
                <li>• <strong>Dynamic MBeans:</strong> Runtime-defined interface</li>
                <li>• <strong>Open MBeans:</strong> Self-describing with metadata</li>
                <li>• <strong>Model MBeans:</strong> Configurable generic MBeans</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Creating Custom MBeans
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Custom MBeans expose application-specific metrics, configuration parameters, and operational controls for monitoring and management.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Standard MBean Pattern</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-green-400">
                    <h5 class="font-bold text-green-700">Interface Definition</h5>
                    <p class="text-gray-600 text-sm">Define management interface with MBean suffix</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                    <h5 class="font-bold text-blue-700">Implementation</h5>
                    <p class="text-gray-600 text-sm">Implement interface with business logic</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                    <h5 class="font-bold text-purple-700">Registration</h5>
                    <p class="text-gray-600 text-sm">Register with MBean Server using ObjectName</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-cyan-50 p-4 rounded-lg">
                <h4 class="font-bold text-cyan-800 mb-2">MBean Features</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-red-400">
                    <h5 class="font-bold text-red-700">Attributes</h5>
                    <p class="text-gray-600 text-sm">Readable/writable properties</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-orange-400">
                    <h5 class="font-bold text-orange-700">Operations</h5>
                    <p class="text-gray-600 text-sm">Callable methods for management</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-teal-400">
                    <h5 class="font-bold text-teal-700">Notifications</h5>
                    <p class="text-gray-600 text-sm">Event-driven alerts and updates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Monitoring and Metrics Collection
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Effective monitoring requires collecting the right metrics, setting appropriate thresholds, and providing actionable insights for system health.</p>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-cyan-50 p-4 rounded-lg">
                <h4 class="font-bold text-cyan-800 mb-2">Performance Metrics</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Response time and throughput</li>
                  <li>• CPU and memory utilization</li>
                  <li>• Thread pool statistics</li>
                  <li>• Database connection metrics</li>
                  <li>• Cache hit/miss ratios</li>
                </ul>
              </div>
              
              <div class="bg-teal-50 p-4 rounded-lg">
                <h4 class="font-bold text-teal-800 mb-2">Business Metrics</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Transaction volumes</li>
                  <li>• Error rates and types</li>
                  <li>• User activity patterns</li>
                  <li>• Service availability</li>
                  <li>• Custom KPIs</li>
                </ul>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">System Health</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• JVM heap and GC metrics</li>
                  <li>• File system usage</li>
                  <li>• Network connectivity</li>
                  <li>• External service health</li>
                  <li>• Security events</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Enterprise Integration and Tools
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">JMX integrates with enterprise monitoring solutions, providing centralized visibility and management across distributed systems.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Monitoring Tools</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-white p-2 rounded border-l-4 border-blue-400">
                    <strong>JConsole:</strong> Built-in JMX monitoring tool
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-green-400">
                    <strong>VisualVM:</strong> Comprehensive profiling and monitoring
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-purple-400">
                    <strong>Micrometer:</strong> Metrics collection facade
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-red-400">
                    <strong>Prometheus:</strong> Time-series monitoring system
                  </div>
                </div>
              </div>
              
              <div class="bg-lime-50 p-4 rounded-lg">
                <h4 class="font-bold text-lime-800 mb-2">Integration Patterns</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-white p-2 rounded border-l-4 border-orange-400">
                    <strong>Pull Model:</strong> Monitoring tools query JMX endpoints
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-teal-400">
                    <strong>Push Model:</strong> Applications send metrics to collectors
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-indigo-400">
                    <strong>Hybrid:</strong> Combination of pull and push approaches
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-pink-400">
                    <strong>Agent-based:</strong> Monitoring agents collect and forward data
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// JMX Monitoring Implementation Examples</div>
        
        <div class="text-blue-400">import</div> javax.management.*;<br/>
        <div class="text-blue-400">import</div> java.lang.management.*;<br/>
        <div class="text-blue-400">import</div> java.util.concurrent.atomic.*;<br/>
        <div class="text-blue-400">import</div> java.util.concurrent.*;<br/><br/>

        <div class="text-gray-400 mb-4">// === Custom MBean Interface ===</div>
        <div class="text-blue-400">public interface</div> <div class="text-yellow-400">ApplicationMonitorMBean</div> {<br/>
        &nbsp;&nbsp;<div class="text-gray-400">// Readable attributes</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">long</div> <div class="text-yellow-400">getRequestCount</div>();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">double</div> <div class="text-yellow-400">getAverageResponseTime</div>();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">int</div> <div class="text-yellow-400">getActiveThreads</div>();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">String</div> <div class="text-yellow-400">getApplicationStatus</div>();<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Writable attributes</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">setLogLevel</div>(<div class="text-blue-400">String</div> level);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">String</div> <div class="text-yellow-400">getLogLevel</div>();<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Operations</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">resetCounters</div>();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">String</div> <div class="text-yellow-400">performHealthCheck</div>();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">triggerGarbageCollection</div>();<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// === MBean Implementation ===</div>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">ApplicationMonitor</div> <div class="text-blue-400">extends</div> <div class="text-blue-400">NotificationBroadcasterSupport</div> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implements</div> <div class="text-blue-400">ApplicationMonitorMBean</div> {<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">AtomicLong</div> requestCount = <div class="text-blue-400">new</div> <div class="text-yellow-400">AtomicLong</div>();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">AtomicLong</div> totalResponseTime = <div class="text-blue-400">new</div> <div class="text-yellow-400">AtomicLong</div>();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">ThreadMXBean</div> threadBean = <div class="text-blue-400">ManagementFactory</div>.getThreadMXBean();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private volatile</div> <div class="text-blue-400">String</div> logLevel = <div class="text-green-300">"INFO"</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private volatile</div> <div class="text-blue-400">String</div> applicationStatus = <div class="text-green-300">"RUNNING"</div>;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">long</div> notificationSequence = <div class="text-purple-400">0</div>;<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">long</div> <div class="text-yellow-400">getRequestCount</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> requestCount.get();<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">double</div> <div class="text-yellow-400">getAverageResponseTime</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">long</div> count = requestCount.get();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> count == <div class="text-purple-400">0</div> ? <div class="text-purple-400">0.0</div> : (<div class="text-blue-400">double</div>) totalResponseTime.get() / count;<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">int</div> <div class="text-yellow-400">getActiveThreads</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> threadBean.getThreadCount();<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getApplicationStatus</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> applicationStatus;<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">void</div> <div class="text-yellow-400">setLogLevel</div>(<div class="text-blue-400">String</div> level) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> oldLevel = <div class="text-blue-400">this</div>.logLevel;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.logLevel = level;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">sendNotification</div>(<div class="text-green-300">"Log level changed from "</div> + oldLevel + <div class="text-green-300">" to "</div> + level);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getLogLevel</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> logLevel;<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">void</div> <div class="text-yellow-400">resetCounters</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;requestCount.set(<div class="text-purple-400">0</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;totalResponseTime.set(<div class="text-purple-400">0</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">sendNotification</div>(<div class="text-green-300">"Performance counters reset"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">performHealthCheck</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Perform comprehensive health check</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">StringBuilder</div> result = <div class="text-blue-400">new</div> <div class="text-yellow-400">StringBuilder</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;result.append(<div class="text-green-300">"Health Check Results:\\n"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;result.append(<div class="text-green-300">"Memory Usage: "</div>).append(<div class="text-yellow-400">getMemoryUsage</div>()).append(<div class="text-green-300">"%\\n"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;result.append(<div class="text-green-300">"Thread Count: "</div>).append(<div class="text-yellow-400">getActiveThreads</div>()).append(<div class="text-green-300">"\\n"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;result.append(<div class="text-green-300">"Status: "</div>).append(applicationStatus);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> result.toString();<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">void</div> <div class="text-yellow-400">triggerGarbageCollection</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.gc();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">sendNotification</div>(<div class="text-green-300">"Garbage collection triggered"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Record request metrics</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">recordRequest</div>(<div class="text-blue-400">long</div> responseTime) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;requestCount.incrementAndGet();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;totalResponseTime.addAndGet(responseTime);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Send JMX notification</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private void</div> <div class="text-yellow-400">sendNotification</div>(<div class="text-blue-400">String</div> message) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Notification</div> notification = <div class="text-blue-400">new</div> <div class="text-yellow-400">Notification</div>(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"application.event"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++notificationSequence,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.currentTimeMillis(),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;sendNotification(notification);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">double</div> <div class="text-yellow-400">getMemoryUsage</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">MemoryMXBean</div> memoryBean = <div class="text-blue-400">ManagementFactory</div>.getMemoryMXBean();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">MemoryUsage</div> heapUsage = memoryBean.getHeapMemoryUsage();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> (<div class="text-blue-400">double</div>) heapUsage.getUsed() / heapUsage.getMax() * <div class="text-purple-400">100</div>;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// === JMX Server Setup ===</div>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">JMXMonitoringServer</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">MBeanServer</div> mBeanServer;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">JMXConnectorServer</div> connectorServer;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">ApplicationMonitor</div> applicationMonitor;<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">start</div>() <div class="text-blue-400">throws</div> <div class="text-blue-400">Exception</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Get platform MBean server</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;mBeanServer = <div class="text-blue-400">ManagementFactory</div>.getPlatformMBeanServer();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Create and register custom MBean</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;applicationMonitor = <div class="text-blue-400">new</div> <div class="text-yellow-400">ApplicationMonitor</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ObjectName</div> objectName = <div class="text-blue-400">new</div> <div class="text-yellow-400">ObjectName</div>(<div class="text-green-300">"com.example:type=ApplicationMonitor"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;mBeanServer.registerMBean(applicationMonitor, objectName);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Setup JMX connector for remote access</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">JMXServiceURL</div> serviceURL = <div class="text-blue-400">new</div> <div class="text-yellow-400">JMXServiceURL</div>(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"service:jmx:rmi:///jndi/rmi://localhost:9999/jmxrmi"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;connectorServer = <div class="text-blue-400">JMXConnectorServerFactory</div>.newJMXConnectorServer(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;serviceURL, <div class="text-blue-400">null</div>, mBeanServer);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;connectorServer.start();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"JMX Monitoring Server started on port 9999"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">stop</div>() <div class="text-blue-400">throws</div> <div class="text-blue-400">Exception</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (connectorServer != <div class="text-blue-400">null</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;connectorServer.stop();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"JMX Monitoring Server stopped"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">ApplicationMonitor</div> <div class="text-yellow-400">getApplicationMonitor</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> applicationMonitor;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// === Metrics Collector ===</div>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">MetricsCollector</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">ScheduledExecutorService</div> scheduler = <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Executors</div>.newScheduledThreadPool(<div class="text-purple-400">2</div>);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">Map</div>&lt;<div class="text-blue-400">String</div>, <div class="text-blue-400">Double</div>&gt; metrics = <div class="text-blue-400">new</div> <div class="text-yellow-400">ConcurrentHashMap</div>&lt;&gt;();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">List</div>&lt;<div class="text-blue-400">MetricsListener</div>&gt; listeners = <div class="text-blue-400">new</div> <div class="text-yellow-400">CopyOnWriteArrayList</div>&lt;&gt;();<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">startCollection</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Collect system metrics every 30 seconds</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;scheduler.scheduleAtFixedRate(<div class="text-blue-400">this</div>::<div class="text-yellow-400">collectSystemMetrics</div>, <div class="text-purple-400">0</div>, <div class="text-purple-400">30</div>, <div class="text-blue-400">TimeUnit</div>.SECONDS);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Collect JVM metrics every 10 seconds</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;scheduler.scheduleAtFixedRate(<div class="text-blue-400">this</div>::<div class="text-yellow-400">collectJvmMetrics</div>, <div class="text-purple-400">0</div>, <div class="text-purple-400">10</div>, <div class="text-blue-400">TimeUnit</div>.SECONDS);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private void</div> <div class="text-yellow-400">collectSystemMetrics</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">OperatingSystemMXBean</div> osBean = <div class="text-blue-400">ManagementFactory</div>.getOperatingSystemMXBean();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metrics.put(<div class="text-green-300">"system.cpu.usage"</div>, osBean.getProcessCpuLoad() * <div class="text-purple-400">100</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metrics.put(<div class="text-green-300">"system.load.average"</div>, osBean.getSystemLoadAverage());<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Runtime</div> runtime = <div class="text-blue-400">Runtime</div>.getRuntime();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metrics.put(<div class="text-green-300">"jvm.memory.free"</div>, (<div class="text-blue-400">double</div>) runtime.freeMemory());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metrics.put(<div class="text-green-300">"jvm.memory.total"</div>, (<div class="text-blue-400">double</div>) runtime.totalMemory());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metrics.put(<div class="text-green-300">"jvm.memory.max"</div>, (<div class="text-blue-400">double</div>) runtime.maxMemory());<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">notifyListeners</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">Exception</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"Error collecting system metrics: "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private void</div> <div class="text-yellow-400">collectJvmMetrics</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ThreadMXBean</div> threadBean = <div class="text-blue-400">ManagementFactory</div>.getThreadMXBean();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metrics.put(<div class="text-green-300">"jvm.threads.count"</div>, (<div class="text-blue-400">double</div>) threadBean.getThreadCount());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metrics.put(<div class="text-green-300">"jvm.threads.daemon"</div>, (<div class="text-blue-400">double</div>) threadBean.getDaemonThreadCount());<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">GarbageCollectorMXBean</div> gcBean : <div class="text-blue-400">ManagementFactory</div>.getGarbageCollectorMXBeans()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> name = gcBean.getName().replaceAll(<div class="text-green-300">" "</div>, <div class="text-green-300">"_"</div>).toLowerCase();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metrics.put(<div class="text-green-300">"jvm.gc."</div> + name + <div class="text-green-300">".collections"</div>, (<div class="text-blue-400">double</div>) gcBean.getCollectionCount());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metrics.put(<div class="text-green-300">"jvm.gc."</div> + name + <div class="text-green-300">".time"</div>, (<div class="text-blue-400">double</div>) gcBean.getCollectionTime());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">Exception</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"Error collecting JVM metrics: "</div> + e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">addListener</div>(<div class="text-blue-400">MetricsListener</div> listener) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;listeners.add(listener);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private void</div> <div class="text-yellow-400">notifyListeners</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">MetricsListener</div> listener : listeners) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;listener.onMetricsUpdated(<div class="text-blue-400">new</div> <div class="text-yellow-400">HashMap</div>&lt;&gt;(metrics));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">shutdown</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;scheduler.shutdown();<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">@FunctionalInterface</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public interface</div> <div class="text-yellow-400">MetricsListener</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">onMetricsUpdated</div>(<div class="text-blue-400">Map</div>&lt;<div class="text-blue-400">String</div>, <div class="text-blue-400">Double</div>&gt; metrics);<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <span class="w-3 h-8 bg-white rounded mr-3"></span>
          Practice Exercise: Enterprise Monitoring Platform
        </h2>
        <p class="text-indigo-100">Build a comprehensive enterprise monitoring platform with JMX integration and real-time dashboards</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Requirements</h3>
          <div class="space-y-4">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">1. Custom MBean Suite</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Application performance monitoring MBean</li>
                <li>• Database connection pool monitoring MBean</li>
                <li>• Cache statistics and management MBean</li>
                <li>• Business metrics tracking MBean</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">2. Metrics Collection Engine</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Automated metrics collection and aggregation</li>
                <li>• Configurable collection intervals and thresholds</li>
                <li>• Historical data storage and retention</li>
                <li>• Real-time alerting and notification system</li>
              </ul>
            </div>
            
            <div class="bg-cyan-50 p-4 rounded-lg">
              <h4 class="font-bold text-cyan-800 mb-2">3. Monitoring Dashboard</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Real-time metrics visualization with charts</li>
                <li>• Customizable dashboard layouts and widgets</li>
                <li>• Interactive drill-down capabilities</li>
                <li>• Export functionality for reports and analysis</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">4. Integration Framework</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• REST API for external monitoring tools</li>
                <li>• Prometheus metrics endpoint integration</li>
                <li>• SNMP adapter for network management systems</li>
                <li>• Email and Slack notification integrations</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">✅ Success Criteria</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                <div>
                  <p class="font-semibold text-gray-800">Comprehensive MBean Coverage</p>
                  <p class="text-gray-600 text-sm">Complete monitoring of application components and resources</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p class="font-semibold text-gray-800">Real-time Monitoring</p>
                  <p class="text-gray-600 text-sm">Live metrics collection and visualization</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p class="font-semibold text-gray-800">Alerting System</p>
                  <p class="text-gray-600 text-sm">Proactive notifications for threshold breaches</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                <div>
                  <p class="font-semibold text-gray-800">Dashboard Interface</p>
                  <p class="text-gray-600 text-sm">Intuitive and customizable monitoring dashboards</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</div>
                <div>
                  <p class="font-semibold text-gray-800">External Integration</p>
                  <p class="text-gray-600 text-sm">Seamless integration with enterprise monitoring tools</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</div>
                <div>
                  <p class="font-semibold text-gray-800">Performance Impact</p>
                  <p class="text-gray-600 text-sm">Minimal overhead on monitored applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🎯 Implementation Focus Areas</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="bg-yellow-50 p-3 rounded-lg">
                <h4 class="font-bold text-yellow-800 mb-1">MBean Design</h4>
                <p class="text-gray-700 text-sm">Create well-structured MBeans with clear naming conventions, appropriate attribute types, and meaningful operations.</p>
              </div>
              
              <div class="bg-orange-50 p-3 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-1">Notification System</h4>
                <p class="text-gray-700 text-sm">Implement JMX notifications for critical events, threshold violations, and system state changes.</p>
              </div>
              
              <div class="bg-red-50 p-3 rounded-lg">
                <h4 class="font-bold text-red-800 mb-1">Performance Optimization</h4>
                <p class="text-gray-700 text-sm">Optimize metrics collection to minimize performance impact on production systems.</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="bg-purple-50 p-3 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-1">Data Visualization</h4>
                <p class="text-gray-700 text-sm">Create interactive charts and graphs for metrics visualization with drill-down capabilities.</p>
              </div>
              
              <div class="bg-indigo-50 p-3 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-1">Historical Analysis</h4>
                <p class="text-gray-700 text-sm">Implement data retention policies and historical trend analysis for capacity planning.</p>
              </div>
              
              <div class="bg-blue-50 p-3 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-1">Security Integration</h4>
                <p class="text-gray-700 text-sm">Secure JMX endpoints with authentication and authorization for production deployment.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🔧 Technical Architecture</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Monitoring Layer</h4>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>• Custom MBeans for application metrics</li>
                <li>• JVM and system metrics collection</li>
                <li>• Business process monitoring</li>
                <li>• External service health checks</li>
              </ul>
            </div>
            
            <div class="bg-cyan-50 p-4 rounded-lg">
              <h4 class="font-bold text-cyan-800 mb-2">Data Processing</h4>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>• Real-time metrics aggregation</li>
                <li>• Threshold monitoring and alerting</li>
                <li>• Data transformation and enrichment</li>
                <li>• Historical data archival</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Presentation Layer</h4>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>• Web-based monitoring dashboard</li>
                <li>• REST API for programmatic access</li>
                <li>• Mobile-responsive interface</li>
                <li>• Export and reporting capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  }
};