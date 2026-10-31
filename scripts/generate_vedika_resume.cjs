const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function buildResume(outputPath) {
  return new Promise((resolve, reject) => {
    // A4 dimensions: 595.28 x 841.89 pt
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 32, bottom: 28, left: 36, right: 36 },
      autoFirstPage: true,
      bufferPages: true,
      info: {
        Title: 'Vedika Bawane - Resume',
        Author: 'Vedika Bawane',
        Subject: 'Software Developer Resume',
        Keywords: 'Software Developer, Python, Flask, React, MySQL, REST API, Full Stack'
      }
    });

    const writeStream = fs.createWriteStream(outputPath);
    doc.pipe(writeStream);

    const primary = '#000000';
    const bodyColor = '#111827';
    const leftMargin = 36;
    const rightMargin = 559.28;
    const contentWidth = rightMargin - leftMargin; // ~523.28 pt

    // Helper: Draw horizontal line
    const drawRule = () => {
      doc.moveDown(0.15);
      const ruleY = doc.y;
      doc.strokeColor('#000000').lineWidth(0.65).moveTo(leftMargin, ruleY).lineTo(rightMargin, ruleY).stroke();
      doc.moveDown(0.25);
    };

    // Helper: Draw Section Title
    const drawSectionTitle = (title) => {
      doc.font('Times-Bold').fontSize(10.5).fillColor(primary).text(title.toUpperCase(), leftMargin, doc.y, {
        characterSpacing: 0.5
      });
      drawRule();
    };

    // Helper: Draw Bullet Point with custom small circle
    const drawBullet = (boldPrefix, normalText, extraLineGap = 1.0) => {
      const bulletX = leftMargin + 8;
      const textX = leftMargin + 16;
      const textWidth = contentWidth - 16;
      
      const startY = doc.y;
      // Draw tiny bullet circle aligned with cap-height of 8.5pt text
      const bulletY = startY + 4.2;
      doc.circle(bulletX, bulletY, 1.4).fillColor('#000000').fill();

      // Write text
      doc.font('Times-Bold').fontSize(8.5).fillColor(primary)
         .text(boldPrefix, textX, startY, { continued: true });
      doc.font('Times-Roman').fontSize(8.5).fillColor(bodyColor)
         .text(normalText, {
           width: textWidth,
           lineGap: extraLineGap,
           align: 'left'
         });
      doc.moveDown(0.08);
    };

    // ==========================================
    // 1. HEADER
    // ==========================================
    const topY = 32;
    // Left: Name & LinkedIn
    doc.font('Times-Bold').fontSize(16).fillColor(primary).text('Vedika Bawane', leftMargin, topY);
    doc.font('Times-Roman').fontSize(9).fillColor(primary).text('linkedin.com/in/Vedika Bawane', leftMargin, doc.y + 1, {
      link: 'https://linkedin.com/in/vedika-bawane',
      underline: false
    });

    // Right: Email & Phone
    doc.font('Times-Roman').fontSize(9).fillColor(primary).text('vedikabawane70@gmail.com', leftMargin, topY + 2, {
      align: 'right',
      width: contentWidth,
      link: 'mailto:vedikabawane70@gmail.com'
    });
    doc.font('Times-Roman').fontSize(9).fillColor(primary).text('9309030556', leftMargin, doc.y + 1, {
      align: 'right',
      width: contentWidth,
      link: 'tel:9309030556'
    });

    // Space before summary
    doc.y = topY + 36;

    // ==========================================
    // 2. PROFESSIONAL SUMMARY
    // ==========================================
    drawSectionTitle('Professional Summary');
    doc.font('Times-Roman').fontSize(8.5).fillColor(bodyColor).text(
      'Aspiring Software Developer with a foundation in Python, web development, and database management. Familiar with Flask, React.js, REST APIs, MySQL, JavaScript, HTML, CSS, and Bootstrap. Gained practical experience in frontend development through a Web Development Internship at CodSoft and developed projects including a Marathi-first Police Bharati Student Learning Platform and a Campus Placement Management System. Interested in building responsive, user-friendly web applications and improving technical skills through practical problem-solving and continuous learning.',
      leftMargin,
      doc.y,
      {
        width: contentWidth,
        lineGap: 1.4,
        align: 'justify'
      }
    );
    doc.moveDown(0.4);

    // ==========================================
    // 3. EXPERIENCE
    // ==========================================
    drawSectionTitle('Experience');
    
    // Header line 1: CodSoft | Kolkata, West Bengal
    const expStartY = doc.y;
    doc.font('Times-Bold').fontSize(9.5).fillColor(primary).text('CodSoft', leftMargin, expStartY);
    doc.font('Times-Roman').fontSize(9).fillColor(primary).text('Kolkata, West Bengal', leftMargin, expStartY, {
      align: 'right',
      width: contentWidth
    });

    // Header line 2: Web Development Intern | Aug 2024
    const roleY = doc.y + 0.5;
    doc.font('Times-Italic').fontSize(8.5).fillColor(primary).text('Web Development Intern', leftMargin, roleY);
    doc.font('Times-Roman').fontSize(8.5).fillColor(primary).text('Aug 2024', leftMargin, roleY, {
      align: 'right',
      width: contentWidth
    });
    doc.moveDown(0.2);

    const expBullets = [
      ['Frontend Development: ', 'Developed three frontend projects during the Web Development Internship, including a personal portfolio, landing pages, and a calculator using HTML, CSS, and JavaScript.'],
      ['Responsive Web Design: ', 'Created interactive and user-friendly web interfaces with a focus on responsive design, webpage layout, and usability.'],
      ['Personal Portfolio: ', 'Designed and developed a personal portfolio website to present information through a structured and user-friendly web interface.'],
      ['Landing Pages: ', 'Built landing pages using HTML, CSS, and JavaScript to create organized layouts and interactive user interface elements.'],
      ['Calculator Application: ', 'Developed a calculator project using HTML, CSS, and JavaScript to implement basic calculations and interactive functionality.'],
      ['Technical Skills: ', 'HTML5, CSS3, JavaScript, Responsive Web Design, Frontend Development']
    ];

    expBullets.forEach(([prefix, text]) => {
      drawBullet(prefix, text, 1.2);
    });
    doc.moveDown(0.35);

    // ==========================================
    // 4. PROJECTS
    // ==========================================
    drawSectionTitle('Projects');

    // Project 1: Police Bharati
    doc.font('Times-Bold').fontSize(9.5).fillColor(primary).text('Police Bharati Student Learning Platform', leftMargin, doc.y);
    doc.moveDown(0.12);

    const p1Bullets = [
      ['Project Overview: ', 'Developed a Marathi-first web platform for Maharashtra Police Bharti aspirants, featuring digital study resources, online tests, and progress tracking.'],
      ['Backend and Authentication: ', 'Built RESTful APIs using Flask, SQLAlchemy, and MySQL, implementing JWT authentication and role-based access control for 2 user roles: students and administrators.'],
      ['Learning Modules: ', 'Implemented 6+ learning resource categories, including subject-wise notes, PDFs, educational videos, previous-year questions, current affairs, and recruitment notices.'],
      ['Testing and Progress Tracking: ', 'Developed online test workflows, result tracking, rankings, student dashboards, and physical training progress monitoring. Added automated backend tests for API behavior, authentication, and data persistence.'],
      ['Tech Stack: ', 'Python, Flask, React.js, MySQL, SQLAlchemy, REST APIs, JWT, HTML, CSS, JavaScript']
    ];

    p1Bullets.forEach(([prefix, text]) => {
      drawBullet(prefix, text, 1.2);
    });
    doc.moveDown(0.25);

    // Project 2: Campus Placement Management System
    doc.font('Times-Bold').fontSize(9.5).fillColor(primary).text('Campus Placement Management System', leftMargin, doc.y);
    doc.moveDown(0.12);

    const p2Bullets = [
      ['Project Overview: ', 'Developed a web-based placement management system for students and placement officers to centralize placement activities and improve communication.'],
      ['Student Management: ', 'Implemented student registration and profile management to organize student information.'],
      ['Placement Tracking: ', 'Developed placement tracking and announcement features to keep students informed about placement activities and updates.'],
      ['Administrative Operations: ', 'Implemented administrative features to manage placement activities and streamline routine tasks.'],
      ['Tech Stack: ', 'HTML, CSS, JavaScript, Bootstrap, PHP, MySQL, XAMPP']
    ];

    p2Bullets.forEach(([prefix, text]) => {
      drawBullet(prefix, text, 1.2);
    });
    doc.moveDown(0.35);

    // ==========================================
    // 5. TECHNICAL SKILLS
    // ==========================================
    drawSectionTitle('Technical Skills');

    const skillBullets = [
      ['Programming Languages: ', 'Python, JavaScript, SQL, Java, C, C++'],
      ['Backend Development: ', 'Django, Django REST Framework, Flask, RESTful APIs, API Integration, PHP'],
      ['Authentication and Security: ', 'JWT Authentication, RBAC, Request Validation, HTTP Error Handling'],
      ['Frontend Development: ', 'React.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap, React Router, Axios'],
      ['Databases and ORM: ', 'PostgreSQL, MySQL, MongoDB, SQLAlchemy, Flask-Migrate'],
      ['DevOps and Cloud: ', 'Docker, Kubernetes, Azure Cloud, Azure DevOps'],
      ['Development Tools: ', 'Git, GitHub, Postman, Linux, Visual Studio Code'],
      ['Core Concepts: ', 'OOPs, Data Structures, Algorithms, Database Design, REST API Design, System Design, Data Analytics']
    ];

    skillBullets.forEach(([prefix, text]) => {
      drawBullet(prefix, text, 1.2);
    });
    doc.moveDown(0.35);

    // ==========================================
    // 6. EDUCATION
    // ==========================================
    drawSectionTitle('Education');

    const eduStartY = doc.y;
    doc.font('Times-Bold').fontSize(9.5).fillColor(primary).text('Government College of Engineering, Chandrapur', leftMargin, eduStartY);
    doc.font('Times-Roman').fontSize(9).fillColor(primary).text('Chandrapur, Maharashtra', leftMargin, eduStartY, {
      align: 'right',
      width: contentWidth
    });

    const degY = doc.y + 0.5;
    doc.font('Times-Italic').fontSize(8.5).fillColor(primary).text('B.Tech Computer Science & Engineering (CGPA: 8.53)', leftMargin, degY);
    doc.font('Times-Roman').fontSize(8.5).fillColor(primary).text('2022 – 2026', leftMargin, degY, {
      align: 'right',
      width: contentWidth
    });

    // Check total pages
    const range = doc.bufferedPageRange();
    console.log(`Document generated with ${range.count} page(s). Final y = ${doc.y}`);

    doc.end();

    writeStream.on('finish', () => {
      resolve(range.count);
    });
    writeStream.on('error', reject);
  });
}

const targetDir = path.resolve(__dirname, '..', 'public');
const targetFile1 = path.join(targetDir, 'resume.pdf');
const targetFile2 = path.join(targetDir, 'Vedika_Bawane_Resume.pdf');

buildResume(targetFile1).then((pageCount) => {
  fs.copyFileSync(targetFile1, targetFile2);
  
  const distDir = path.resolve(__dirname, '..', 'dist');
  if (fs.existsSync(distDir)) {
    fs.copyFileSync(targetFile1, path.join(distDir, 'resume.pdf'));
    fs.copyFileSync(targetFile1, path.join(distDir, 'Vedika_Bawane_Resume.pdf'));
  }

  console.log(`Successfully written 1-page resume to:
  - ${targetFile1}
  - ${targetFile2}
  Page count: ${pageCount}`);
}).catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
