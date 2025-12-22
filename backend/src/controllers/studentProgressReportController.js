import {
  generateUserProgressReport,
  generatePerformanceMetricsReport,
  generateActivityReport,
  generateStudentActivityMetrics,
  filterReportColumns,
  convertToCSV,
  convertToJSON,
  getReportStatistics,
  exportReportWithStatistics,
  REPORT_TEMPLATES
} from '../services/studentProgressReportService.js';

/**
 * Get student progress report
 */
export const getStudentProgressReport = async (req, res, next) => {
  try {
    const { format = 'json', template = 'STUDENT_PROGRESS' } = req.query;

    const reportData = await generateUserProgressReport();
    const statistics = await getReportStatistics(reportData);

    if (format === 'csv') {
      const columns = REPORT_TEMPLATES[template] || REPORT_TEMPLATES.STUDENT_PROGRESS;
      const filtered = filterReportColumns(reportData, columns);
      const csv = convertToCSV(filtered, columns);

      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', `attachment; filename="student-progress-${Date.now()}.csv"`);
      return res.send(csv);
    }

    res.json({
      success: true,
      reportType: 'STUDENT_PROGRESS',
      generatedAt: new Date().toISOString(),
      statistics,
      data: reportData,
      count: reportData.length
    });
  } catch (error) {
    console.error('Error generating student progress report:', error);
    next(error);
  }
};

/**
 * Get performance metrics report
 */
export const getPerformanceMetricsReport = async (req, res, next) => {
  try {
    const { format = 'json' } = req.query;

    const reportData = await generatePerformanceMetricsReport();
    const statistics = await getReportStatistics(reportData);

    if (format === 'csv') {
      const columns = REPORT_TEMPLATES.PERFORMANCE_METRICS;
      const csv = convertToCSV(reportData, columns);

      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', `attachment; filename="performance-metrics-${Date.now()}.csv"`);
      return res.send(csv);
    }

    res.json({
      success: true,
      reportType: 'PERFORMANCE_METRICS',
      generatedAt: new Date().toISOString(),
      statistics,
      data: reportData,
      count: reportData.length
    });
  } catch (error) {
    console.error('Error generating performance metrics report:', error);
    next(error);
  }
};

/**
 * Get activity report
 */
export const getActivityReport = async (req, res, next) => {
  try {
    const { format = 'json' } = req.query;

    const reportData = await generateActivityReport();
    const statistics = await getReportStatistics(reportData);

    if (format === 'csv') {
      const columns = REPORT_TEMPLATES.ACTIVITY_REPORT;
      const csv = convertToCSV(reportData, columns);

      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', `attachment; filename="activity-report-${Date.now()}.csv"`);
      return res.send(csv);
    }

    res.json({
      success: true,
      reportType: 'ACTIVITY_REPORT',
      generatedAt: new Date().toISOString(),
      statistics,
      data: reportData,
      count: reportData.length
    });
  } catch (error) {
    console.error('Error generating activity report:', error);
    next(error);
  }
};

/**
 * Get student activity metrics
 */
export const getStudentActivityMetrics = async (req, res, next) => {
  try {
    const metrics = await generateStudentActivityMetrics();

    res.json({
      success: true,
      generatedAt: new Date().toISOString(),
      data: metrics
    });
  } catch (error) {
    console.error('Error generating student activity metrics:', error);
    next(error);
  }
};

/**
 * Get comprehensive report
 */
export const getComprehensiveReport = async (req, res, next) => {
  try {
    const { format = 'json' } = req.query;

    const reportData = await generateUserProgressReport();
    const statistics = await getReportStatistics(reportData);

    if (format === 'csv') {
      const columns = REPORT_TEMPLATES.COMPREHENSIVE;
      const filtered = filterReportColumns(reportData, columns);
      const csv = convertToCSV(filtered, columns);

      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', `attachment; filename="comprehensive-report-${Date.now()}.csv"`);
      return res.send(csv);
    }

    res.json({
      success: true,
      reportType: 'COMPREHENSIVE',
      generatedAt: new Date().toISOString(),
      statistics,
      data: reportData,
      count: reportData.length
    });
  } catch (error) {
    console.error('Error generating comprehensive report:', error);
    next(error);
  }
};

/**
 * Export report with custom template
 */
export const exportCustomReport = async (req, res, next) => {
  try {
    const { reportType = 'STUDENT_PROGRESS', format = 'json' } = req.query;

    if (!REPORT_TEMPLATES[reportType]) {
      return res.status(400).json({
        success: false,
        message: `Invalid report type. Available types: ${Object.keys(REPORT_TEMPLATES).join(', ')}`
      });
    }

    const result = await exportReportWithStatistics(reportType, format);

    if (format === 'csv') {
      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', `attachment; filename="report-${reportType}-${Date.now()}.csv"`);
      return res.send(result);
    }

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('Error exporting custom report:', error);
    next(error);
  }
};

/**
 * Get report templates
 */
export const getReportTemplates = async (req, res, next) => {
  try {
    res.json({
      success: true,
      templates: REPORT_TEMPLATES,
      availableFormats: ['json', 'csv']
    });
  } catch (error) {
    console.error('Error fetching report templates:', error);
    next(error);
  }
};

export default {
  getStudentProgressReport,
  getPerformanceMetricsReport,
  getActivityReport,
  getStudentActivityMetrics,
  getComprehensiveReport,
  exportCustomReport,
  getReportTemplates
};
