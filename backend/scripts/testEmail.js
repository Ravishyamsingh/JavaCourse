/**
 * Email Service Test Script
 * Tests Gmail configuration and sends a test email
 */

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function testEmailService() {
  console.log('📧 Testing Email Service...\n');

  // Check configuration
  if (!process.env.EMAIL_USER) {
    console.error('❌ EMAIL_USER not found in .env file');
    console.log('Please add your Gmail address to .env file');
    process.exit(1);
  }

  if (!process.env.EMAIL_PASSWORD) {
    console.error('❌ EMAIL_PASSWORD not found in .env file');
    console.log('Please add your Gmail App Password to .env file');
    process.exit(1);
  }

  console.log('📋 Configuration:');
  console.log(`   Service: ${process.env.EMAIL_SERVICE || 'gmail'}`);
  console.log(`   User: ${process.env.EMAIL_USER}`);
  console.log(`   Password: ${'*'.repeat(16)}`);
  console.log(`   From: ${process.env.EMAIL_FROM || process.env.EMAIL_USER}\n`);

  try {
    // Create transporter
    console.log('🔌 Creating email transporter...');
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log('✅ Transporter created\n');

    // Verify connection
    console.log('🔍 Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified\n');

    // Send test email
    console.log('📨 Sending test email...');
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself for testing
      subject: '✅ Java Course Backend - Email Test Successful!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #4CAF50;">🎉 Email Service Working!</h1>
          <p>Congratulations! Your email service is configured correctly.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3>✅ Configuration Details:</h3>
            <ul>
              <li><strong>Service:</strong> ${process.env.EMAIL_SERVICE || 'gmail'}</li>
              <li><strong>From:</strong> ${process.env.EMAIL_FROM || process.env.EMAIL_USER}</li>
              <li><strong>Daily Limit:</strong> 500 emails/day (Gmail Free)</li>
            </ul>
          </div>

          <h3>📋 Available Email Features:</h3>
          <ul>
            <li>✅ Welcome emails</li>
            <li>✅ Password reset</li>
            <li>✅ Account locked notifications</li>
            <li>✅ Security alerts</li>
            <li>✅ Quiz results</li>
            <li>✅ Certificate notifications</li>
            <li>✅ Admin notifications</li>
          </ul>

          <div style="background-color: #e3f2fd; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0;"><strong>📧 Test Email Details:</strong></p>
            <p style="margin: 5px 0;">Sent at: ${new Date().toLocaleString()}</p>
            <p style="margin: 5px 0;">From: Java Course Backend</p>
          </div>

          <p style="margin-top: 30px; color: #666;">
            This is an automated test email from your Java Course Backend.
          </p>
        </div>
      `,
    });

    console.log('✅ Test email sent successfully!\n');
    console.log('📬 Email Details:');
    console.log(`   Message ID: ${info.messageId}`);
    console.log(`   To: ${process.env.EMAIL_USER}`);
    console.log(`   Subject: Email Test Successful\n`);

    console.log('🎉 All email tests passed!');
    console.log('✅ Your email service is ready to use');
    console.log('\n📊 Gmail Free Tier Limits:');
    console.log('   • 500 emails per day');
    console.log('   • 100 recipients per email');
    console.log('   • Perfect for your Java course platform!\n');

  } catch (error) {
    console.error('❌ Email test failed:');
    console.error(`   Error: ${error.message}\n`);

    if (error.message.includes('Invalid login')) {
      console.log('💡 Troubleshooting:');
      console.log('   1. Check if 2-Step Verification is enabled');
      console.log('   2. Generate a new App Password');
      console.log('   3. Copy the 16-character password (remove spaces)');
      console.log('   4. Update EMAIL_PASSWORD in .env file');
      console.log('   5. Make sure EMAIL_USER is your full Gmail address\n');
    } else if (error.message.includes('getaddrinfo')) {
      console.log('💡 Troubleshooting:');
      console.log('   - Check your internet connection');
      console.log('   - Verify Gmail is accessible\n');
    }

    process.exit(1);
  }
}

// Run the test
testEmailService();
