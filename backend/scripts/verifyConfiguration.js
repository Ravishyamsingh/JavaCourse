#!/usr/bin/env node

/**
 * Configuration Verification Script
 * Verifies that all backend and frontend configurations are properly set up
 * and that all hard-coded values have been replaced with dynamic configuration
 */

import config from '../src/config.js';
import fs from 'fs';
import path from 'path';

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

const log = {
  success: (msg) => console.log(`${colors.green}✅${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}❌${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠️${colors.reset}  ${msg}`),
  info: (msg) => console.log(`${colors.blue}ℹ️${colors.reset}  ${msg}`),
  section: (msg) => console.log(`\n${colors.cyan}═══ ${msg} ═══${colors.reset}`)
};

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
let warningChecks = 0;

const check = (condition, successMsg, failureMsg, isWarning = false) => {
  totalChecks++;
  if (condition) {
    log.success(successMsg);
    passedChecks++;
  } else if (isWarning) {
    log.warning(failureMsg);
    warningChecks++;
  } else {
    log.error(failureMsg);
    failedChecks++;
  }
};

const verifyEnvironmentVariables = () => {
  log.section('Environment Variables');

  check(config.NODE_ENV, 'NODE_ENV is set', 'NODE_ENV is not set');
  check(config.PORT, `PORT is configured: ${config.PORT}`, 'PORT is not configured');
  check(config.MONGO_URL, 'MONGO_URL is configured', 'MONGO_URL is not configured');
  check(config.FRONTEND_URL, `FRONTEND_URL is configured: ${config.FRONTEND_URL}`, 'FRONTEND_URL is not configured');
  check(config.BACKEND_URL, `BACKEND_URL is configured: ${config.BACKEND_URL}`, 'BACKEND_URL is not configured');
  
  // JWT Configuration
  check(config.JWT_ACCESS_SECRET, 'JWT_ACCESS_SECRET is configured', 'JWT_ACCESS_SECRET is not configured');
  check(config.JWT_REFRESH_SECRET, 'JWT_REFRESH_SECRET is configured', 'JWT_REFRESH_SECRET is not configured');
  check(config.JWT_ACCESS_EXPIRY, `JWT_ACCESS_EXPIRY is configured: ${config.JWT_ACCESS_EXPIRY}`, 'JWT_ACCESS_EXPIRY is not configured');
  check(config.JWT_REFRESH_EXPIRY, `JWT_REFRESH_EXPIRY is configured: ${config.JWT_REFRESH_EXPIRY}`, 'JWT_REFRESH_EXPIRY is not configured');

  // Google OAuth
  check(config.GOOGLE_CLIENT_ID, 'GOOGLE_CLIENT_ID is configured', 'GOOGLE_CLIENT_ID is not configured', config.NODE_ENV !== 'production');
  check(config.GOOGLE_CLIENT_SECRET, 'GOOGLE_CLIENT_SECRET is configured', 'GOOGLE_CLIENT_SECRET is not configured', config.NODE_ENV !== 'production');
  check(config.GOOGLE_CALLBACK_URL, `GOOGLE_CALLBACK_URL is configured: ${config.GOOGLE_CALLBACK_URL}`, 'GOOGLE_CALLBACK_URL is not configured');

  // Compiler Configuration
  check(config.PAIZA_API_BASE, `PAIZA_API_BASE is configured: ${config.PAIZA_API_BASE}`, 'PAIZA_API_BASE is not configured');
  check(config.PAIZA_API_KEY, 'PAIZA_API_KEY is configured', 'PAIZA_API_KEY is not configured');
  check(config.JAVA_SOURCE_LIMIT_BYTES, `JAVA_SOURCE_LIMIT_BYTES: ${config.JAVA_SOURCE_LIMIT_BYTES}`, 'JAVA_SOURCE_LIMIT_BYTES is not configured');
  check(config.JAVA_INPUT_LIMIT_BYTES, `JAVA_INPUT_LIMIT_BYTES: ${config.JAVA_INPUT_LIMIT_BYTES}`, 'JAVA_INPUT_LIMIT_BYTES is not configured');
  check(config.JAVA_OUTPUT_LIMIT_BYTES, `JAVA_OUTPUT_LIMIT_BYTES: ${config.JAVA_OUTPUT_LIMIT_BYTES}`, 'JAVA_OUTPUT_LIMIT_BYTES is not configured');
  check(config.COMPILER_POLL_INTERVAL_MS, `COMPILER_POLL_INTERVAL_MS: ${config.COMPILER_POLL_INTERVAL_MS}ms`, 'COMPILER_POLL_INTERVAL_MS is not configured');
  check(config.COMPILER_MAX_POLLS, `COMPILER_MAX_POLLS: ${config.COMPILER_MAX_POLLS}`, 'COMPILER_MAX_POLLS is not configured');

  // Security Configuration
  check(config.BCRYPT_SALT_ROUNDS, `BCRYPT_SALT_ROUNDS: ${config.BCRYPT_SALT_ROUNDS}`, 'BCRYPT_SALT_ROUNDS is not configured');
  check(config.SESSION_SECRET, 'SESSION_SECRET is configured', 'SESSION_SECRET is not configured', config.NODE_ENV !== 'production');

  // Rate Limiting
  check(config.RATE_LIMIT_WINDOW_MS, `RATE_LIMIT_WINDOW_MS: ${config.RATE_LIMIT_WINDOW_MS}ms`, 'RATE_LIMIT_WINDOW_MS is not configured');
  check(config.RATE_LIMIT_MAX_REQUESTS, `RATE_LIMIT_MAX_REQUESTS: ${config.RATE_LIMIT_MAX_REQUESTS}`, 'RATE_LIMIT_MAX_REQUESTS is not configured');
};

const verifyDatabaseConfiguration = () => {
  log.section('Database Configuration');

  const mongoUrl = config.MONGO_URL;
  check(mongoUrl && mongoUrl.includes('mongodb'), 'MongoDB URI is valid', 'MongoDB URI is invalid');
  check(!mongoUrl.includes('localhost') || config.NODE_ENV === 'development', 'MongoDB is not hardcoded to localhost in production', 'MongoDB is hardcoded to localhost');
};

const verifySecurityConfiguration = () => {
  log.section('Security Configuration');

  check(config.JWT_ACCESS_SECRET && config.JWT_ACCESS_SECRET.length >= 32, 'JWT_ACCESS_SECRET is strong (32+ chars)', 'JWT_ACCESS_SECRET is weak', config.NODE_ENV !== 'production');
  check(config.JWT_REFRESH_SECRET && config.JWT_REFRESH_SECRET.length >= 32, 'JWT_REFRESH_SECRET is strong (32+ chars)', 'JWT_REFRESH_SECRET is weak', config.NODE_ENV !== 'production');
  check(config.BCRYPT_SALT_ROUNDS >= 10, `BCRYPT_SALT_ROUNDS is secure: ${config.BCRYPT_SALT_ROUNDS}`, 'BCRYPT_SALT_ROUNDS is too low');
};

const verifyProctorConfiguration = () => {
  log.section('Proctoring Configuration');

  check(config.JAVA_SOURCE_LIMIT_BYTES > 0, 'Source code limit is set', 'Source code limit is not set');
  check(config.JAVA_INPUT_LIMIT_BYTES > 0, 'Input limit is set', 'Input limit is not set');
  check(config.JAVA_OUTPUT_LIMIT_BYTES > 0, 'Output limit is set', 'Output limit is not set');
  check(config.COMPILER_POLL_INTERVAL_MS > 0, 'Compiler poll interval is set', 'Compiler poll interval is not set');
  check(config.COMPILER_MAX_POLLS > 0, 'Compiler max polls is set', 'Compiler max polls is not set');
};

const verifyFrontendConfiguration = () => {
  log.section('Frontend Configuration');

  const frontendEnvPath = path.resolve(process.cwd(), '../workspace/shadcn-ui/.env.example');
  const frontendEnvLocalPath = path.resolve(process.cwd(), '../workspace/shadcn-ui/.env.development.local.example');

  check(fs.existsSync(frontendEnvPath), 'Frontend .env.example exists', 'Frontend .env.example not found');
  check(fs.existsSync(frontendEnvLocalPath), 'Frontend .env.development.local.example exists', 'Frontend .env.development.local.example not found');

  if (fs.existsSync(frontendEnvPath)) {
    const content = fs.readFileSync(frontendEnvPath, 'utf8');
    check(content.includes('VITE_API_URL'), 'Frontend has VITE_API_URL configuration', 'Frontend missing VITE_API_URL');
    check(content.includes('VITE_GOOGLE_CLIENT_ID'), 'Frontend has VITE_GOOGLE_CLIENT_ID configuration', 'Frontend missing VITE_GOOGLE_CLIENT_ID');
  }
};

const verifyBackendFiles = () => {
  log.section('Backend Files');

  const requiredFiles = [
    '../src/config.js',
    '../src/server.js',
    '../src/routes.js',
    '../src/controllers.js',
    '../src/models.js',
    '../src/middleware/auth.js',
    '../src/middleware/rbac.js',
    '../src/middleware/security.js',
    '../src/middleware/production.js',
    '../src/controllers/authController.js',
    '../src/controllers/proctorController.js',
    '../src/controllers/progressController.js',
    '../src/controllers/compilerController.js',
    '../src/models/ProctorModels.js',
    '../src/models/Token.js',
    '../src/services/proctorService.js',
    '../src/services/remoteCompiler.js',
    '../src/utils/tokenManager.js',
    '../src/utils/validation.js',
    '../src/utils/auth.js',
    '../src/utils/googleAuth.js',
    '../src/config/passport.js',
    '../src/routes/proctorRoutes.js'
  ];

  requiredFiles.forEach(file => {
    const filePath = path.resolve(process.cwd(), file);
    check(fs.existsSync(filePath), `${file} exists`, `${file} not found`);
  });
};

const verifyNoHardcodedValues = () => {
  log.section('Hard-coded Values Check');

  const filesToCheck = [
    '../src/server.js',
    '../src/routes.js',
    '../src/controllers/proctorController.js',
    '../src/services/remoteCompiler.js'
  ];

  const hardcodedPatterns = [
    { pattern: /localhost:5000/g, name: 'localhost:5000' },
    { pattern: /localhost:5173/g, name: 'localhost:5173' },
    { pattern: /java-cert-test/g, name: 'java-cert-test (test ID)' },
    { pattern: /default-session/g, name: 'default-session (session ID)' }
  ];

  filesToCheck.forEach(file => {
    const filePath = path.resolve(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      hardcodedPatterns.forEach(({ pattern, name }) => {
        const matches = content.match(pattern);
        if (matches) {
          log.warning(`Found potential hard-coded value in ${file}: ${name} (${matches.length} occurrence(s))`);
          warningChecks++;
          totalChecks++;
        }
      });
    }
  });

  log.success('Hard-coded values check completed');
};

const verifyEndToEndConnectivity = () => {
  log.section('End-to-End Connectivity');

  check(config.FRONTEND_URL && config.BACKEND_URL, 'Frontend and Backend URLs are configured', 'Frontend or Backend URL is missing');
  check(config.GOOGLE_CALLBACK_URL && config.GOOGLE_CALLBACK_URL.includes(config.BACKEND_URL), 'Google callback URL matches backend URL', 'Google callback URL does not match backend URL');
  check(config.MONGO_URL, 'Database connection string is configured', 'Database connection string is missing');
  check(config.JWT_ACCESS_SECRET && config.JWT_REFRESH_SECRET, 'JWT secrets are configured', 'JWT secrets are missing');
};

const printSummary = () => {
  log.section('Summary');
  console.log(`Total Checks: ${totalChecks}`);
  console.log(`${colors.green}Passed: ${passedChecks}${colors.reset}`);
  console.log(`${colors.yellow}Warnings: ${warningChecks}${colors.reset}`);
  console.log(`${colors.red}Failed: ${failedChecks}${colors.reset}`);

  const successRate = ((passedChecks / totalChecks) * 100).toFixed(2);
  console.log(`\nSuccess Rate: ${successRate}%`);

  if (failedChecks === 0) {
    log.success('All critical checks passed! ✨');
    process.exit(0);
  } else {
    log.error(`${failedChecks} critical check(s) failed. Please fix the issues above.`);
    process.exit(1);
  }
};

// Run all verifications
console.log(`${colors.cyan}╔════════════════════════════════════════════════════════════╗${colors.reset}`);
console.log(`${colors.cyan}║     Backend Configuration Verification Script              ║${colors.reset}`);
console.log(`${colors.cyan}╚════════════════════════════════════════════════════════════╝${colors.reset}\n`);

verifyEnvironmentVariables();
verifyDatabaseConfiguration();
verifySecurityConfiguration();
verifyProctorConfiguration();
verifyFrontendConfiguration();
verifyBackendFiles();
verifyNoHardcodedValues();
verifyEndToEndConnectivity();

printSummary();
