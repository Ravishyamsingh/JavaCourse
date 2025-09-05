module.exports = {
  apps: [{
    name: 'java-course-auth-api',
    script: 'index.js',
    instances: 2,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development',
      PORT: 8000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 8000
    },
    // Logging
    log_file: 'logs/combined.log',
    out_file: 'logs/out.log',
    error_file: 'logs/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    
    // Process management
    max_memory_restart: '500M',
    min_uptime: '10s',
    max_restarts: 10,
    
    // Monitoring
    watch: false,
    ignore_watch: ['node_modules', 'logs'],
    
    // Advanced features
    kill_timeout: 5000,
    wait_ready: true,
    listen_timeout: 10000,
    
    // Auto restart on file changes (development only)
    watch_options: {
      followSymlinks: false
    }
  }]
};