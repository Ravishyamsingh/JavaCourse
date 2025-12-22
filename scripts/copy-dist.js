import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.resolve(__dirname, '../workspace/shadcn-ui/dist');
const targetDir = path.resolve(__dirname, '../dist');

// Function to copy directory recursively
function copyDirectory(source, target) {
  // Create target directory if it doesn't exist
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  // Read source directory
  const items = fs.readdirSync(source);

  for (const item of items) {
    const sourcePath = path.join(source, item);
    const targetPath = path.join(target, item);

    const stat = fs.statSync(sourcePath);

    if (stat.isDirectory()) {
      // Recursively copy subdirectory
      copyDirectory(sourcePath, targetPath);
    } else {
      // Copy file
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

// Check if source directory exists
if (!fs.existsSync(sourceDir)) {
  console.error('❌ Source directory does not exist:', sourceDir);
  console.error('Make sure to run the build command first.');
  process.exit(1);
}

console.log('📦 Copying dist folder...');
console.log(`   From: ${sourceDir}`);
console.log(`   To: ${targetDir}`);

try {
  // Remove existing target directory if it exists
  if (fs.existsSync(targetDir)) {
    fs.rmSync(targetDir, { recursive: true });
  }

  // Copy the directory
  copyDirectory(sourceDir, targetDir);
  
  console.log('✅ Successfully copied dist folder!');
} catch (error) {
  console.error('❌ Failed to copy dist folder:', error.message);
  process.exit(1);
}
