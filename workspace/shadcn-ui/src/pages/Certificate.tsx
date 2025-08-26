import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Download, Share2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UserProfile from '@/components/UserProfile';
import { courseModules, getTotalLessonsCount } from '@/data/courseStructure';
import { useAuth } from '@/contexts/AuthContext';

export default function Certificate() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const totalLessons = getTotalLessonsCount();
  const totalModules = courseModules.length;
  
  // Calculate total course duration
  const totalHours = courseModules.reduce((total, module) => {
    const moduleHours = module.lessons.reduce((moduleTotal, lesson) => {
      const duration = lesson.duration;
      const hours = duration.includes('min') ?
        parseInt(duration.replace(' min', '')) / 60 :
        parseFloat(duration.replace(' hours', '').replace(' hour', ''));
      return moduleTotal + hours;
    }, 0);
    return total + moduleHours;
  }, 0);

  // Function to clean and format user name (preserve initials with dots, remove department codes)
  const getCleanUserName = () => {
    if (!user) return '[Student Name]';
    
    const displayName = user.displayName || user.email?.split('@')[0] || 'Student';
    
    // Common department abbreviations to remove
    const departmentCodes = [
      'CSE', 'ECE', 'EEE', 'MECH', 'CIVIL', 'IT', 'BTECH', 'MTECH', 'MBA', 'MCA',
      'CS', 'EC', 'EE', 'ME', 'CE', 'AI', 'ML', 'DS', 'AIML', 'AIDS', 'CSBS'
    ];
    
    // First, handle initials with dots (preserve them temporarily)
    let cleanName = displayName
      .replace(/([A-Z])\./g, '$1DOTPLACEHOLDER') // Replace A. with ADOTPLACEHOLDER
      .replace(/[^a-zA-Z\s]/g, '') // Remove numbers and other special characters
      .replace(/DOTPLACEHOLDER/g, '.') // Restore dots for initials
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim(); // Remove leading/trailing spaces
    
    // Remove department codes (case insensitive)
    departmentCodes.forEach(dept => {
      const regex = new RegExp(`\\b${dept}\\b`, 'gi');
      cleanName = cleanName.replace(regex, '');
    });
    
    // Clean up extra spaces after removal
    cleanName = cleanName.replace(/\s+/g, ' ').trim();
    
    // Capitalize each word, handling initials properly
    const formattedName = cleanName
      .split(' ')
      .map(word => {
        if (word.length === 2 && word.endsWith('.')) {
          // Handle initials like "A." or "M."
          return word.charAt(0).toUpperCase() + '.';
        } else {
          // Handle regular words
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      })
      .join(' ');
    
    return formattedName || 'Student';
  };

  const studentName = getCleanUserName();

  const downloadCertificate = () => {
    const certificateElement = document.getElementById('certificate');
    
    if (certificateElement) {
      // Create a new window for printing
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Java Mastery Course Certificate</title>
              <style>
                @page {
                  size: A4;
                  margin: 0;
                }
                * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                }
                body {
                  font-family: serif;
                  background: white;
                  margin: 0;
                  padding: 0;
                }
                .certificate-print {
                  width: 210mm;
                  height: 297mm;
                  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                  position: relative;
                  overflow: hidden;
                  margin: 0 auto;
                }
                .watermark {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  opacity: 0.05;
                  width: 400px;
                  height: 400px;
                  z-index: 1;
                }
                .border-outer {
                  position: absolute;
                  top: 16px;
                  left: 16px;
                  right: 16px;
                  bottom: 16px;
                  border: 8px double #1e40af;
                  border-radius: 8px;
                }
                .border-inner {
                  position: absolute;
                  top: 24px;
                  left: 24px;
                  right: 24px;
                  bottom: 24px;
                  border: 2px solid #fbbf24;
                  border-radius: 8px;
                }
                .content {
                  position: relative;
                  z-index: 2;
                  padding: 32px;
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                }
                .header-section {
                  text-align: center;
                  margin-bottom: 12px;
                }
                .header-row {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  gap: 16px;
                  margin-bottom: 16px;
                }
                .logo {
                  width: 64px;
                  height: 64px;
                }
                .title-section h1 {
                  font-size: 30px;
                  line-height: 36px;
                  font-weight: 700;
                  color: #1e3a8a;
                  letter-spacing: 0.025em;
                  font-family: serif;
                  margin: 0;
                }
                .title-underline {
                  width: 128px;
                  height: 4px;
                  background: linear-gradient(to right, #fbbf24, #d97706);
                  margin: 8px auto 0;
                }
                .award-icon {
                  width: 64px;
                  height: 64px;
                  background: linear-gradient(to right, #fbbf24, #d97706);
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                }
                .main-content {
                  text-align: center;
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  gap: 16px;
                }
                .certify-text {
                  font-size: 18px;
                  line-height: 28px;
                  color: #374151;
                  font-family: serif;
                }
                .student-name {
                  font-size: 36px;
                  line-height: 40px;
                  font-weight: 700;
                  color: #1e3a8a;
                  border-bottom: 2px solid #d1d5db;
                  padding-bottom: 4px;
                  display: inline-block;
                  font-family: serif;
                }
                .name-instruction {
                  font-size: 12px;
                  line-height: 16px;
                  color: #6b7280;
                  font-style: italic;
                  margin-top: 4px;
                }
                .course-title {
                  font-size: 30px;
                  line-height: 36px;
                  font-weight: 700;
                  color: #1e3a8a;
                  margin: 12px 0;
                  font-family: serif;
                }
                .course-details {
                  background: rgba(255, 255, 255, 0.8);
                  padding: 16px;
                  border-radius: 8px;
                  max-width: 768px;
                  margin: 0 auto;
                  border: 1px solid #2563eb;
                }
                .modules-grid {
                  display: grid;
                  grid-template-columns: repeat(3, 1fr);
                  gap: 12px;
                  font-size: 12px;
                  line-height: 16px;
                  color: #4b5563;
                  margin-bottom: 12px;
                }
                .stats-grid {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  gap: 16px;
                  padding-top: 12px;
                }
                .stat-item {
                  text-align: center;
                  background: rgba(255, 255, 255, 0.6);
                  padding: 8px;
                  border-radius: 8px;
                }
                .stat-number {
                  font-size: 24px;
                  line-height: 32px;
                  font-weight: 700;
                }
                .stat-label {
                  font-size: 12px;
                  line-height: 16px;
                  color: #4b5563;
                }
                .blue { color: #2563eb; }
                .green { color: #16a34a; }
                .purple { color: #9333ea; }
                .orange { color: #ea580c; }
                .awarded-text {
                  font-size: 18px;
                  line-height: 28px;
                  color: #374151;
                  padding-top: 8px;
                  font-family: serif;
                }
                .footer-section {
                  margin-top: 16px;
                }
                .signatures {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin-bottom: 16px;
                }
                .signature {
                  text-align: center;
                }
                .signature-line {
                  width: 160px;
                  border-bottom: 2px solid #9ca3af;
                  margin-bottom: 4px;
                }
                .signature-title {
                  font-size: 12px;
                  line-height: 16px;
                  color: #4b5563;
                }
                .signature-name {
                  font-weight: 600;
                }
                .official-seal {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  gap: 4px;
                }
                .seal-icon {
                  width: 64px;
                  height: 64px;
                  background: linear-gradient(to right, #2563eb, #7c3aed);
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                }
                .seal-text {
                  font-size: 12px;
                  line-height: 16px;
                  color: #6b7280;
                }
                .certificate-id {
                  padding-top: 8px;
                  border-top: 1px solid #d1d5db;
                  text-align: center;
                  font-size: 12px;
                  line-height: 16px;
                  color: #6b7280;
                }
                @media print {
                  body { margin: 0; padding: 0; }
                  .certificate-print { margin: 0; }
                }
              </style>
            </head>
            <body>
              <div class="certificate-print">
                <div class="watermark">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="400" height="400">
                    <circle cx="100" cy="100" r="95" fill="#1e40af" stroke="#1d4ed8" stroke-width="2"/>
                    <circle cx="100" cy="100" r="75" fill="white"/>
                    <g transform="translate(100, 100)">
                      <rect x="-8" y="20" width="16" height="8" fill="#dc2626" rx="2"/>
                      <rect x="-3" y="10" width="6" height="15" fill="#dc2626"/>
                      <path d="M0,-25 C-8,-20 -8,-10 -4,-5 C-2,-8 2,-8 4,-5 C8,-10 8,-20 0,-25 Z" fill="#f59e0b"/>
                      <path d="M0,-20 C-5,-16 -5,-8 -2,-4 C-1,-6 1,-6 2,-4 C5,-8 5,-16 0,-20 Z" fill="#fbbf24"/>
                    </g>
                  </svg>
                </div>
                <div class="border-outer"></div>
                <div class="border-inner"></div>
                <div class="content">
                  <div class="header-section">
                    <div class="header-row">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="logo">
                        <circle cx="100" cy="100" r="95" fill="#1e40af" stroke="#1d4ed8" stroke-width="2"/>
                        <circle cx="100" cy="100" r="75" fill="white"/>
                        <g transform="translate(100, 100)">
                          <rect x="-8" y="20" width="16" height="8" fill="#dc2626" rx="2"/>
                          <rect x="-3" y="10" width="6" height="15" fill="#dc2626"/>
                          <path d="M0,-25 C-8,-20 -8,-10 -4,-5 C-2,-8 2,-8 4,-5 C8,-10 8,-20 0,-25 Z" fill="#f59e0b"/>
                          <path d="M0,-20 C-5,-16 -5,-8 -2,-4 C-1,-6 1,-6 2,-4 C5,-8 5,-16 0,-20 Z" fill="#fbbf24"/>
                        </g>
                      </svg>
                      <div class="title-section">
                        <h1>CERTIFICATE OF COMPLETION</h1>
                        <div class="title-underline"></div>
                      </div>
                      <div class="award-icon">🏆</div>
                    </div>
                  </div>

                  <div class="main-content">
                    <p class="certify-text">This is to certify that</p>
                    
                    <div>
                      <div class="student-name">${studentName}</div>
                      ${studentName === '[Student Name]' ? '<p class="name-instruction">Please log in to see your name</p>' : ''}
                    </div>

                    <p class="certify-text">has successfully completed the comprehensive</p>

                    <h3 class="course-title">Java Mastery Course</h3>

                    <div class="course-details">
                      <div class="modules-grid">
                        <div>• Java Fundamentals</div>
                        <div>• Object-Oriented Programming</div>
                        <div>• Data Structures</div>
                        <div>• Exception Handling</div>
                        <div>• Multithreading</div>
                        <div>• Lambda Expressions</div>
                        <div>• Database Connectivity</div>
                        <div>• Web Development</div>
                        <div>• Microservices</div>
                        <div>• Testing & QA</div>
                        <div>• Design Patterns</div>
                        <div>• Advanced Features</div>
                      </div>
                    </div>

                    <div class="stats-grid">
                      <div class="stat-item">
                        <div class="stat-number blue">${totalLessons}</div>
                        <div class="stat-label">Lessons</div>
                      </div>
                      <div class="stat-item">
                        <div class="stat-number green">${totalModules}</div>
                        <div class="stat-label">Modules</div>
                      </div>
                      <div class="stat-item">
                        <div class="stat-number purple">${Math.round(totalHours)}</div>
                        <div class="stat-label">Hours</div>
                      </div>
                      <div class="stat-item">
                        <div class="stat-number orange">100+</div>
                        <div class="stat-label">Exercises</div>
                      </div>
                    </div>

                    <p class="awarded-text">Awarded on <strong>${currentDate}</strong></p>
                  </div>

                  <div class="footer-section">
                    <div class="signatures">
                      <div class="signature">
                        <div class="signature-line"></div>
                        <p class="signature-title">Course Instructor</p>
                        <p class="signature-name">Java Mastery Team</p>
                      </div>
                      
                      <div class="official-seal">
                        <div class="seal-icon">🏆</div>
                        <p class="seal-text">Official Seal</p>
                      </div>

                      <div class="signature">
                        <div class="signature-line"></div>
                        <p class="signature-title">Program Director</p>
                        <p class="signature-name">KARE Education</p>
                      </div>
                    </div>

                    <div class="certificate-id">
                      Certificate ID: JM-${Date.now().toString().slice(-8)} |
                      Verification available at javamasterycourse.com/verify
                    </div>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `);
        
        printWindow.document.close();
        printWindow.focus();
        
        // Wait for content to load then print
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 500);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'serif' }}>
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex items-center space-x-2">
              <Button onClick={downloadCertificate} className="bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <UserProfile />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Certificate - A4 Size */}
          <Card
            id="certificate"
            className="bg-white shadow-2xl relative overflow-hidden"
            style={{
              width: '210mm',
              height: '297mm',
              margin: '0 auto',
              pageBreakAfter: 'always',
              background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
            }}
          >
            {/* KARE Logo Watermark */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <img
                src="/kare-logo.svg"
                alt="KARE Logo"
                className="w-96 h-96"
              />
            </div>

            {/* Decorative Border */}
            <div className="absolute inset-4 border-8 border-double border-blue-800 rounded-lg"></div>
            <div className="absolute inset-6 border-2 border-yellow-400 rounded-lg"></div>

            <CardContent className="p-8 h-full flex flex-col justify-between relative" style={{ zIndex: 2 }}>
              {/* Header Section */}
              <div className="text-center space-y-3">
                <div className="flex justify-center items-center space-x-4 mb-4">
                  <img src="/kare-logo.svg" alt="KARE Logo" className="w-16 h-16" />
                  <div>
                    <h1 className="text-3xl font-bold text-blue-900 tracking-wide" style={{ fontFamily: 'serif' }}>
                      CERTIFICATE OF COMPLETION
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-2"></div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="text-center space-y-4 flex-1">
                <p className="text-lg text-gray-700" style={{ fontFamily: 'serif' }}>
                  This is to certify that
                </p>
                
                <div className="space-y-1">
                  <h2 className="text-4xl font-bold text-blue-900 border-b-2 border-gray-300 pb-1 inline-block" style={{ fontFamily: 'serif' }}>
                    {studentName}
                  </h2>
                  {studentName === '[Student Name]' && (
                    <p className="text-xs text-gray-500 italic">Please log in to see your name</p>
                  )}
                </div>

                <p className="text-lg text-gray-700" style={{ fontFamily: 'serif' }}>
                  has successfully completed the comprehensive
                </p>

                <h3 className="text-3xl font-bold text-blue-900 mb-3" style={{ fontFamily: 'serif' }}>
                  Java Mastery Course
                </h3>

                {/* Course Details in Compact Format */}
                <div className="bg-white/80 p-4 rounded-lg mx-auto max-w-3xl border border-blue-200">
                  <div className="grid grid-cols-3 gap-3 text-xs text-gray-600 mb-3">
                    <div>• Java Fundamentals</div>
                    <div>• Object-Oriented Programming</div>
                    <div>• Data Structures</div>
                    <div>• Exception Handling</div>
                    <div>• Multithreading</div>
                    <div>• Lambda Expressions</div>
                    <div>• Database Connectivity</div>
                    <div>• Web Development</div>
                    <div>• Microservices</div>
                    <div>• Testing & QA</div>
                    <div>• Design Patterns</div>
                    <div>• Advanced Features</div>
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-4 gap-4 pt-3">
                  <div className="text-center bg-white/60 p-2 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{totalLessons}</div>
                    <div className="text-xs text-gray-600">Lessons</div>
                  </div>
                  <div className="text-center bg-white/60 p-2 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{totalModules}</div>
                    <div className="text-xs text-gray-600">Modules</div>
                  </div>
                  <div className="text-center bg-white/60 p-2 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{Math.round(totalHours)}</div>
                    <div className="text-xs text-gray-600">Hours</div>
                  </div>
                  <div className="text-center bg-white/60 p-2 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">100+</div>
                    <div className="text-xs text-gray-600">Exercises</div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 pt-2" style={{ fontFamily: 'serif' }}>
                  Awarded on <span className="font-semibold">{currentDate}</span>
                </p>
              </div>

              {/* Footer Section */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <div className="w-40 border-b-2 border-gray-400 mb-1"></div>
                    <p className="text-xs text-gray-600">Course Instructor</p>
                    <p className="font-semibold">Java Mastery Team</p>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-1">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-xs text-gray-500">Official Seal</p>
                  </div>

                  <div className="text-center">
                    <div className="w-40 border-b-2 border-gray-400 mb-1"></div>
                    <p className="text-xs text-gray-600">Program Director</p>
                    <p className="font-semibold">KARE Education</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-300 text-center">
                  <p className="text-xs text-gray-500">
                    Certificate ID: JM-{Date.now().toString().slice(-8)} |
                    Verification available at javamasterycourse.com/verify
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="text-center mt-8 space-y-4">
            <p className="text-gray-600">
              🎉 Congratulations on completing the Java Mastery Course! 🎉
            </p>
            <div className="flex justify-center space-x-4">
              <Button onClick={downloadCertificate} size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="h-5 w-5 mr-2" />
                Download Certificate
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="h-5 w-5 mr-2" />
                Share on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}