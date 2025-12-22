import { ReportData } from '@/services/dashboardService';

export interface ReportConfig {
  id: string;
  name: string;
  description: string;
  columns: string[];
  filename: string;
}

export const REPORT_TEMPLATES: Record<string, ReportConfig> = {
  STUDENT_PROGRESS: {
    id: 'student-progress',
    name: 'Student Progress Report',
    description: 'Comprehensive student progress and performance metrics',
    columns: [
      'name',
      'email',
      'role',
      'status',
      'lessonsCompleted',
      'quizzesAttempted',
      'totalScore',
      'certificatesEarned',
      'studyStreak',
      'totalStudyTime',
      'joinedDate',
      'lastLogin'
    ],
    filename: 'student-progress-report'
  },
  ENGAGEMENT: {
    id: 'engagement',
    name: 'Engagement Report',
    description: 'User engagement and activity metrics',
    columns: [
      'name',
      'email',
      'status',
      'lessonsCompleted',
      'quizzesAttempted',
      'studyStreak',
      'totalStudyTime',
      'lastLogin'
    ],
    filename: 'engagement-report'
  },
  PERFORMANCE: {
    id: 'performance',
    name: 'Performance Report',
    description: 'User performance and scoring metrics',
    columns: [
      'name',
      'email',
      'totalScore',
      'quizzesAttempted',
      'certificatesEarned',
      'status'
    ],
    filename: 'performance-report'
  },
  COMPLETION: {
    id: 'completion',
    name: 'Completion Report',
    description: 'Course and lesson completion metrics',
    columns: [
      'name',
      'email',
      'lessonsCompleted',
      'certificatesEarned',
      'status',
      'joinedDate'
    ],
    filename: 'completion-report'
  }
};

export class ReportExporter {
  /**
   * Convert data to CSV format
   */
  static toCSV(data: ReportData[], columns: string[]): string {
    if (!data || data.length === 0) return '';

    // Create header
    const headers = columns.join(',');

    // Create rows
    const rows = data.map(row => {
      return columns.map(col => {
        const value = (row as any)[col];
        if (value === null || value === undefined) return '';
        if (typeof value === 'string' && value.includes(',')) {
          return `"${value}"`;
        }
        return value;
      }).join(',');
    });

    return [headers, ...rows].join('\n');
  }

  /**
   * Convert data to JSON format
   */
  static toJSON(data: ReportData[], columns: string[]): string {
    const filtered = data.map(row => {
      const obj: any = {};
      columns.forEach(col => {
        obj[col] = (row as any)[col];
      });
      return obj;
    });

    return JSON.stringify(filtered, null, 2);
  }

  /**
   * Convert data to Excel-compatible format (TSV)
   */
  static toTSV(data: ReportData[], columns: string[]): string {
    if (!data || data.length === 0) return '';

    const headers = columns.join('\t');
    const rows = data.map(row => {
      return columns.map(col => {
        const value = (row as any)[col];
        return value === null || value === undefined ? '' : value;
      }).join('\t');
    });

    return [headers, ...rows].join('\n');
  }

  /**
   * Download file
   */
  static downloadFile(content: string, filename: string, mimeType: string = 'text/plain') {
    const blob = new Blob([content], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}-${new Date().toISOString().split('T')[0]}.${this.getMimeExtension(mimeType)}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  /**
   * Get file extension from MIME type
   */
  private static getMimeExtension(mimeType: string): string {
    const mimeMap: Record<string, string> = {
      'text/csv': 'csv',
      'text/tab-separated-values': 'tsv',
      'application/json': 'json',
      'text/plain': 'txt'
    };
    return mimeMap[mimeType] || 'txt';
  }

  /**
   * Export report with specified format
   */
  static exportReport(
    data: ReportData[],
    template: ReportConfig,
    format: 'csv' | 'json' | 'tsv' = 'csv'
  ) {
    let content: string;
    let mimeType: string;

    switch (format) {
      case 'json':
        content = this.toJSON(data, template.columns);
        mimeType = 'application/json';
        break;
      case 'tsv':
        content = this.toTSV(data, template.columns);
        mimeType = 'text/tab-separated-values';
        break;
      case 'csv':
      default:
        content = this.toCSV(data, template.columns);
        mimeType = 'text/csv';
        break;
    }

    this.downloadFile(content, template.filename, mimeType);
  }

  /**
   * Generate summary statistics
   */
  static generateSummary(data: ReportData[]): Record<string, any> {
    if (!data || data.length === 0) {
      return {
        totalRecords: 0,
        activeUsers: 0,
        inactiveUsers: 0,
        averageScore: 0,
        averageLessonsCompleted: 0,
        averageStudyTime: 0
      };
    }

    const activeUsers = data.filter(d => d.status === 'active').length;
    const totalScore = data.reduce((sum, d) => sum + (d.totalScore || 0), 0);
    const totalLessons = data.reduce((sum, d) => sum + (d.lessonsCompleted || 0), 0);
    const totalStudyTime = data.reduce((sum, d) => sum + (d.totalStudyTime || 0), 0);

    return {
      totalRecords: data.length,
      activeUsers,
      inactiveUsers: data.length - activeUsers,
      averageScore: Math.round(totalScore / data.length),
      averageLessonsCompleted: Math.round(totalLessons / data.length),
      averageStudyTime: Math.round(totalStudyTime / data.length),
      totalCertificates: data.reduce((sum, d) => sum + (d.certificatesEarned || 0), 0),
      generatedAt: new Date().toISOString()
    };
  }

  /**
   * Filter data based on criteria
   */
  static filterData(
    data: ReportData[],
    filters: {
      status?: string;
      role?: string;
      minScore?: number;
      maxScore?: number;
      minLessons?: number;
    }
  ): ReportData[] {
    return data.filter(row => {
      if (filters.status && row.status !== filters.status) return false;
      if (filters.role && row.role !== filters.role) return false;
      if (filters.minScore && (row.totalScore || 0) < filters.minScore) return false;
      if (filters.maxScore && (row.totalScore || 0) > filters.maxScore) return false;
      if (filters.minLessons && (row.lessonsCompleted || 0) < filters.minLessons) return false;
      return true;
    });
  }

  /**
   * Sort data
   */
  static sortData(
    data: ReportData[],
    sortBy: keyof ReportData,
    order: 'asc' | 'desc' = 'asc'
  ): ReportData[] {
    const sorted = [...data].sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];

      if (aVal === undefined || aVal === null) return 1;
      if (bVal === undefined || bVal === null) return -1;

      if (typeof aVal === 'string') {
        return order === 'asc'
          ? aVal.localeCompare(bVal as string)
          : (bVal as string).localeCompare(aVal);
      }

      return order === 'asc'
        ? (aVal as number) - (bVal as number)
        : (bVal as number) - (aVal as number);
    });

    return sorted;
  }

  /**
   * Generate HTML report
   */
  static toHTML(data: ReportData[], template: ReportConfig, summary?: Record<string, any>): string {
    const timestamp = new Date().toLocaleString();
    
    let html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>${template.name}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          h1 { color: #333; }
          .summary { background: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px; }
          .summary-item { display: inline-block; margin-right: 30px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th { background: #3b82f6; color: white; padding: 10px; text-align: left; }
          td { padding: 10px; border-bottom: 1px solid #ddd; }
          tr:hover { background: #f9f9f9; }
          .footer { margin-top: 30px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <h1>${template.name}</h1>
        <p>${template.description}</p>
    `;

    if (summary) {
      html += `
        <div class="summary">
          <h2>Summary</h2>
          ${Object.entries(summary).map(([key, value]) => `
            <div class="summary-item">
              <strong>${key}:</strong> ${value}
            </div>
          `).join('')}
        </div>
      `;
    }

    html += `
      <table>
        <thead>
          <tr>
            ${template.columns.map(col => `<th>${col}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${data.map(row => `
            <tr>
              ${template.columns.map(col => `<td>${(row as any)[col] || ''}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="footer">
        <p>Generated on ${timestamp}</p>
      </div>
      </body>
      </html>
    `;

    return html;
  }

  /**
   * Download HTML report
   */
  static downloadHTMLReport(
    data: ReportData[],
    template: ReportConfig,
    summary?: Record<string, any>
  ) {
    const html = this.toHTML(data, template, summary);
    const blob = new Blob([html], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${template.filename}-${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
}

export default ReportExporter;
