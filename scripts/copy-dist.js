const fs = require('fs');
const path = require('path');

const sourceDir = path.resolve(__dirname, '../workspace/shadcn-ui/dist');
const targetDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(sourceDir)) {
  console.error(`Expected build output at ${sourceDir}, but it was not found.`);
  process.exit(1);
}

// Refresh root-level dist so Vercel can detect the static build output reliably.
fs.rmSync(targetDir, { recursive: true, force: true });
fs.mkdirSync(targetDir, { recursive: true });
fs.cpSync(sourceDir, targetDir, { recursive: true });

console.log(`Copied ${sourceDir} to ${targetDir}.`);
