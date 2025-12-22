#!/usr/bin/env node

import GeminiDebugger from '../src/utils/geminiDebugger.js';
import { logger } from '../src/utils/monitoring.js';

/**
 * Gemini API Diagnostics Script
 * Run: node scripts/geminiDiagnostics.js
 */

async function runDiagnostics() {
  try {
    const geminiDebugger = new GeminiDebugger();
    const report = await geminiDebugger.runFullDiagnostics();
    
    geminiDebugger.printReport(report);

    // Save report to file
    const fs = await import('fs').then(m => m.promises);
    const reportPath = './gemini-diagnostics-report.json';
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n📄 Report saved to: ${reportPath}`);

    // Exit with appropriate code
    const hasCriticalFailures = report.summary.failed > 0;
    process.exit(hasCriticalFailures ? 1 : 0);
  } catch (error) {
    logger.error('Diagnostics failed', { error: error.message });
    console.error('❌ Diagnostics failed:', error.message);
    process.exit(1);
  }
}

runDiagnostics();
