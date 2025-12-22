/**
 * Redis Connection Test Script
 * Tests connection to Redis Cloud and basic operations
 */

import { createClient } from 'redis';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function testRedisConnection() {
  console.log('🔍 Testing Redis Connection...\n');

  if (!process.env.REDIS_URL) {
    console.error('❌ REDIS_URL not found in environment variables');
    console.log('Please ensure your .env file contains REDIS_URL');
    process.exit(1);
  }

  console.log('📋 Configuration:');
  console.log(`   REDIS_URL: ${process.env.REDIS_URL.replace(/:[^:@]+@/, ':****@')}`);
  console.log(`   REDIS_DB: ${process.env.REDIS_DB || 0}\n`);

  let client;

  try {
    // Create Redis client
    client = createClient({
      url: process.env.REDIS_URL,
      password: process.env.REDIS_PASSWORD,
      database: parseInt(process.env.REDIS_DB || '0'),
      socket: {
        reconnectStrategy: (retries) => {
          if (retries > 3) {
            console.error('❌ Failed to connect after 3 retries');
            return new Error('Max retries reached');
          }
          return Math.min(retries * 50, 500);
        }
      }
    });

    // Set up error handler
    client.on('error', (err) => {
      console.error('❌ Redis Client Error:', err.message);
    });

    // Connect to Redis
    console.log('🔌 Connecting to Redis...');
    await client.connect();
    console.log('✅ Connected to Redis successfully!\n');

    // Test 1: Set a value
    console.log('📝 Test 1: Setting a test value...');
    await client.set('test:connection', 'Hello from Java Course Backend!');
    console.log('✅ Value set successfully\n');

    // Test 2: Get the value
    console.log('📖 Test 2: Reading the test value...');
    const value = await client.get('test:connection');
    console.log(`✅ Value retrieved: "${value}"\n`);

    // Test 3: Set with expiry
    console.log('⏱️  Test 3: Setting value with 60 second expiry...');
    await client.set('test:expiry', 'This will expire', { EX: 60 });
    const ttl = await client.ttl('test:expiry');
    console.log(`✅ Value set with TTL: ${ttl} seconds\n`);

    // Test 4: Check memory usage
    console.log('💾 Test 4: Checking Redis memory usage...');
    const info = await client.info('memory');
    const usedMemory = info.match(/used_memory_human:([^\r\n]+)/)?.[1];
    const maxMemory = info.match(/maxmemory_human:([^\r\n]+)/)?.[1];
    console.log(`✅ Memory Usage: ${usedMemory || 'N/A'}`);
    console.log(`   Max Memory: ${maxMemory || 'N/A (unlimited)'}\n`);

    // Test 5: Clean up
    console.log('🧹 Test 5: Cleaning up test keys...');
    await client.del('test:connection', 'test:expiry');
    console.log('✅ Test keys deleted\n');

    console.log('🎉 All Redis tests passed successfully!');
    console.log('✅ Your Redis connection is working correctly\n');

  } catch (error) {
    console.error('❌ Redis connection test failed:');
    console.error(`   Error: ${error.message}\n`);
    
    if (error.message.includes('ENOTFOUND')) {
      console.log('💡 Troubleshooting:');
      console.log('   - Check if the Redis host is correct');
      console.log('   - Verify your internet connection');
    } else if (error.message.includes('WRONGPASS') || error.message.includes('NOAUTH')) {
      console.log('💡 Troubleshooting:');
      console.log('   - Check if REDIS_PASSWORD is correct');
      console.log('   - Verify your Redis credentials');
    } else if (error.message.includes('ETIMEDOUT')) {
      console.log('💡 Troubleshooting:');
      console.log('   - Check your firewall settings');
      console.log('   - Verify Redis Cloud allows connections from your IP');
    }
    
    process.exit(1);
  } finally {
    // Clean up connection
    if (client && client.isOpen) {
      await client.quit();
      console.log('🔌 Redis connection closed');
    }
  }
}

// Run the test
testRedisConnection();
