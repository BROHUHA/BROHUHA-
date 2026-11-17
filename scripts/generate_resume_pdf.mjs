import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { renderSVG } from 'uqr';
import { personalInfo, education, experience, featuredProjects } from '../app/data/resume.js';

const photoPath = path.resolve('public/images/band/abin_color.png');
const photoBase64 = fs.existsSync(photoPath)
  ? `data:image/png;base64,${fs.readFileSync(photoPath).toString('base64')}`
  : '';

// Generate crisp vector QR codes
const qrPortfolioSvg = renderSVG('https://4bin.vercel.app', { border: 0 });
const qrGithubSvg = renderSVG('https://github.com/BROHUHA', { border: 0 });

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${personalInfo.name} - Resume</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

    @page {
      size: A4 portrait;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      width: 210mm;
      height: 297mm;
      max-height: 297mm;
      background-color: #fbf9f4;
      background-image: 
        radial-gradient(#e4ded3 0.65px, transparent 0.65px),
        radial-gradient(#e4ded3 0.65px, #fbf9f4 0.65px);
      background-size: 20px 20px;
      background-position: 0 0, 10px 10px;
      color: #1a1a1a;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      -webkit-font-smoothing: antialiased;
      overflow: hidden;
      padding: 12mm 14mm;
    }

    /* Top Header */
    .header {
      text-align: center;
      margin-bottom: 7mm;
      position: relative;
    }

    .header-title-wrap {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      position: relative;
    }

    .header-name {
      font-size: 36pt;
      font-weight: 900;
      letter-spacing: -0.75px;
      color: #111111;
      line-height: 1;
      text-transform: capitalize;
    }

    .header-icon {
      width: 32px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #111;
    }

    .header-subtitle {
      font-family: 'Caveat', cursive, sans-serif;
      font-size: 24pt;
      font-weight: 700;
      color: #c2410c; /* Warm Terracotta / Burnt Orange matching reference */
      line-height: 1.15;
      margin-top: 3px;
    }

    /* Main Two-Column Layout */
    .layout-grid {
      display: grid;
      grid-template-columns: 72mm 1fr;
      gap: 10mm;
      align-items: start;
    }

    /* Left Column */
    .left-col {
      display: flex;
      flex-direction: column;
      gap: 5.5mm;
    }

    /* Photo Frame with Developer Tool Palette */
    .photo-card-container {
      position: relative;
      width: 100%;
      height: 72mm;
      background: #ece7dd;
      border-radius: 28px;
      overflow: hidden;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      border: 1px solid rgba(0,0,0,0.06);
      box-shadow: 0 8px 20px rgba(0,0,0,0.04);
    }

    /* Developer Toolbar on Left of Photo (Like Photoshop Toolbar in Reference) */
    .dev-toolbar {
      position: absolute;
      top: 12px;
      left: 11px;
      z-index: 10;
      background: rgba(24, 24, 27, 0.94);
      backdrop-filter: blur(8px);
      border-radius: 12px;
      padding: 7px 5px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      box-shadow: 0 4px 14px rgba(0,0,0,0.22);
    }

    .dev-tool-btn {
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #a1a1aa;
      font-size: 9px;
      font-family: monospace;
    }
    .dev-tool-btn.active {
      color: #38bdf8;
      background: rgba(56, 189, 248, 0.18);
      border-radius: 4px;
    }

    .photo-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
    }

    /* Dashed Section Header Tag */
    .tag-header {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin: 1mm 0;
    }

    .tag-header-pill {
      border: 1.5px dashed #9ca3af;
      background: rgba(255, 255, 255, 0.85);
      border-radius: 8px;
      padding: 4px 15px;
      font-size: 8.5pt;
      font-weight: 800;
      letter-spacing: 1.5px;
      color: #18181b;
      text-transform: uppercase;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .tag-header-pill svg {
      width: 10px;
      height: 10px;
      color: #71717a;
    }

    /* About Me Dark Card */
    .about-card {
      background: #1c1c1f;
      color: #e4e4e7;
      border-radius: 22px;
      padding: 15px 16px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.1);
      border: 1px solid rgba(255,255,255,0.06);
    }

    .about-card p {
      font-size: 8.2pt;
      line-height: 1.52;
      font-weight: 400;
      color: #d4d4d8;
    }

    .about-card strong {
      color: #ffffff;
      font-weight: 700;
    }

    /* Portfolio QR Code Card */
    .qr-card {
      background: #ffffff;
      border: 1.5px solid #d4d4d8;
      border-radius: 22px;
      padding: 11px 14px;
      display: flex;
      align-items: center;
      gap: 13px;
      text-decoration: none;
      color: inherit;
      box-shadow: 0 4px 12px rgba(0,0,0,0.03);
    }

    .qr-card-code {
      width: 52px;
      height: 52px;
      flex-shrink: 0;
      border-radius: 8px;
      overflow: hidden;
    }
    .qr-card-code svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .qr-card-info {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .qr-card-title {
      font-size: 7.8pt;
      font-weight: 700;
      color: #18181b;
      line-height: 1.25;
    }

    .qr-card-link {
      font-size: 8.2pt;
      font-weight: 800;
      color: #0284c7;
      text-decoration: underline;
    }

    /* Left Column Footer Contacts */
    .contact-footer {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-top: 2mm;
      padding-left: 2px;
    }

    .contact-footer a,
    .contact-footer span {
      font-size: 8pt;
      font-weight: 700;
      color: #27272a;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .contact-footer a:hover {
      color: #0284c7;
      text-decoration: underline;
    }

    .contact-icon {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
      color: #4b5563;
    }

    /* Right Column */
    .right-col {
      display: flex;
      flex-direction: column;
      gap: 5.5mm;
    }

    .section-block {
      display: flex;
      flex-direction: column;
      gap: 2.8mm;
    }

    .section-tag-right {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 0.5mm;
    }

    /* Entries (Education & Experience) */
    .entry-item {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .entry-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 8px;
    }

    .entry-title {
      font-size: 9.6pt;
      font-weight: 800;
      color: #111827;
      line-height: 1.2;
    }

    .entry-date {
      font-size: 8pt;
      font-weight: 700;
      color: #c2410c; /* Accent Terracotta */
      white-space: nowrap;
    }

    .entry-sub {
      font-size: 8.2pt;
      font-weight: 600;
      color: #4b5563;
      font-style: italic;
    }

    .entry-desc {
      font-size: 7.9pt;
      color: #374151;
      line-height: 1.48;
      margin-top: 1.5px;
      padding-left: 11px;
      position: relative;
    }

    .entry-desc::before {
      content: "•";
      position: absolute;
      left: 1px;
      color: #9ca3af;
      font-size: 10pt;
      line-height: 1;
    }

    /* Featured Projects Section with Clickable Links */
    .projects-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }

    .project-pill-link {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      padding: 7px 11px;
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: column;
      gap: 2px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.02);
      transition: all 0.15s ease;
    }

    .project-pill-link:hover {
      border-color: #111;
      transform: translateY(-1px);
    }

    .project-pill-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 4px;
    }

    .project-pill-name {
      font-size: 8.2pt;
      font-weight: 800;
      color: #111827;
    }

    .project-pill-arrow {
      font-size: 8.5pt;
      color: #0284c7;
      font-weight: bold;
    }

    .project-pill-desc {
      font-size: 7.1pt;
      color: #6b7280;
      line-height: 1.3;
    }

    /* Software & Stack Section */
    .stack-bottom-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding-top: 2px;
    }

    .software-badges-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      flex: 1;
    }

    .soft-badge {
      width: 28px;
      height: 28px;
      background: #18181b;
      color: #ffffff;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 7.8pt;
      font-weight: 800;
      letter-spacing: -0.3px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.12);
    }

    .soft-badge.accent {
      background: #0284c7;
    }
    .soft-badge.green {
      background: #16a34a;
    }
    .soft-badge.amber {
      background: #c2410c;
    }

    .github-qr-card {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      color: inherit;
      background: #ffffff;
      padding: 5px 10px 5px 8px;
      border-radius: 14px;
      border: 1px solid #d4d4d8;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    }

    .github-qr-img {
      width: 36px;
      height: 36px;
    }
    .github-qr-img svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .github-qr-label {
      display: flex;
      flex-direction: column;
    }

    .github-qr-text {
      font-size: 7pt;
      font-weight: 700;
      color: #374151;
      line-height: 1.15;
    }

    .github-qr-url {
      font-size: 7.4pt;
      font-weight: 800;
      color: #0284c7;
    }
  </style>
</head>
<body>

  <!-- Top Center Header -->
  <header class="header">
    <div class="header-title-wrap">
      <h1 class="header-name">${personalInfo.name}</h1>
      <span class="header-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      </span>
    </div>
    <div class="header-subtitle">${personalInfo.title}</div>
  </header>

  <!-- Two Column Layout (Matching Reference Aesthetic) -->
  <main class="layout-grid">

    <!-- LEFT COLUMN -->
    <aside class="left-col">

      <!-- Photo Card with Vertical Dev Toolbar -->
      <div class="photo-card-container">
        <!-- Floating Dev Tool Palette (Like Photoshop Palette in Reference) -->
        <div class="dev-toolbar">
          <span class="dev-tool-btn active">↖</span>
          <span class="dev-tool-btn">&lt;/&gt;</span>
          <span class="dev-tool-btn">&gt;_</span>
          <span class="dev-tool-btn">☁</span>
          <span class="dev-tool-btn">🗄</span>
          <span class="dev-tool-btn">⌥</span>
          <span class="dev-tool-btn">🔍</span>
        </div>
        <img src="${photoBase64}" alt="${personalInfo.name}" class="photo-img">
      </div>

      <!-- ABOUT ME SECTION -->
      <div class="tag-header">
        <div class="tag-header-pill">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          ABOUT ME
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </div>
      </div>

      <div class="about-card">
        <p>
          <strong>Full-Stack Software Engineer & Cloud Architect</strong> based in Kerala, India. Specialized in architecting resilient distributed microservices, automated cloud data pipelines on <strong>GCP & AWS</strong>, modern reactive web interfaces, and high-performance production developer utilities.
        </p>
        <p style="margin-top: 6px;">
          Actively building production AI tools, dynamic QR engines, and open-source systems with a relentless focus on performance and cloud scalability.
        </p>
      </div>

      <!-- PORTFOLIO QR CODE CARD (Interactive Clickable Link) -->
      <a href="${personalInfo.portfolio4bin}" class="qr-card" target="_blank">
        <div class="qr-card-code">
          ${qrPortfolioSvg}
        </div>
        <div class="qr-card-info">
          <span class="qr-card-title">Scan to view live portfolio & case studies ⤹</span>
          <span class="qr-card-link">4bin.vercel.app ↗</span>
        </div>
      </a>

      <!-- FOOTER CONTACT DETAILS (Original Vector SVG Icons) -->
      <div class="contact-footer">
        <a href="mailto:${personalInfo.email}">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          <span>${personalInfo.email}</span>
        </a>
        <a href="${personalInfo.github}" target="_blank">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>github.com/BROHUHA</span>
        </a>
        <a href="${personalInfo.website}" target="_blank">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
            <path d="M2 12h20"/>
          </svg>
          <span>abinbinoy.vercel.app</span>
        </a>
        <span>
          <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>${personalInfo.location}</span>
        </span>
      </div>

    </aside>

    <!-- RIGHT COLUMN -->
    <section class="right-col">

      <!-- 1. EDUCATION (FORMACIÓN) -->
      <div class="section-block">
        <div class="section-tag-right">
          <div class="tag-header-pill">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            EDUCATION
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>
        </div>

        <div class="entry-item">
          <div class="entry-header">
            <span class="entry-title">Bachelor of Computer Applications (BCA)</span>
            <span class="entry-date">2024 – 2027 • Pursuing</span>
          </div>
          <span class="entry-sub">Mahatma Gandhi University (MGU) • Kerala, India</span>
          <p class="entry-desc">
            Focus on cloud computing architecture, distributed systems, algorithms, and relational/NoSQL database persistence.
          </p>
        </div>

        <div class="entry-item" style="margin-top: 1.5px;">
          <div class="entry-header">
            <span class="entry-title">Higher Secondary (Pure Science)</span>
            <span class="entry-date">2022 – 2024 • Completed</span>
          </div>
          <span class="entry-sub">St. Xavier's Higher Secondary School • Chemmannar, Kerala</span>
          <p class="entry-desc">
            Rigorous foundation in Physics, Chemistry, Mathematics, analytical reasoning, and scientific methodology.
          </p>
        </div>
      </div>

      <!-- 2. EXPERIENCE (EXPERIENCIA) -->
      <div class="section-block">
        <div class="section-tag-right">
          <div class="tag-header-pill">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            EXPERIENCE
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>
        </div>

        <div class="entry-item">
          <div class="entry-header">
            <span class="entry-title">Full-Stack Software Developer & Open Source Architect</span>
            <span class="entry-date">2023 – Present</span>
          </div>
          <span class="entry-sub">Independent & Open Source</span>
          <p class="entry-desc">
            Architected and shipped production web applications utilizing Vue 3, Nuxt 3, React, Next.js, TypeScript, and Node.js.
          </p>
          <p class="entry-desc">
            Engineered scalable cloud data pipelines and microservices on Google Cloud Platform (Cloud Run, Pub/Sub) & AWS.
          </p>
        </div>

        <div class="entry-item" style="margin-top: 1.5px;">
          <div class="entry-header">
            <span class="entry-title">Cloud & Systems Engineering Researcher</span>
            <span class="entry-date">2024 – Present</span>
          </div>
          <span class="entry-sub">Self-Directed / Academic Labs • Kerala, India</span>
          <p class="entry-desc">
            Stress-tested event-driven pipelines on GCP, Docker multi-stage containers, Redis caching, and CI/CD automation.
          </p>
        </div>
      </div>

      <!-- 3. FEATURED PROJECTS (CLICKABLE PDF LINKS) -->
      <div class="section-block">
        <div class="section-tag-right">
          <div class="tag-header-pill">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            FEATURED PROJECTS (CLICKABLE)
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>
        </div>

        <div class="projects-grid">
          ${featuredProjects.slice(0, 4).map(p => `
            <a href="${p.url}" target="_blank" class="project-pill-link">
              <div class="project-pill-header">
                <span class="project-pill-name">${p.title}</span>
                <span class="project-pill-arrow">↗</span>
              </div>
              <span class="project-pill-desc">${p.tagline}</span>
            </a>
          `).join('')}
        </div>
      </div>

      <!-- 4. SOFTWARE & TECH STACK (WITH SECONDARY GITHUB QR) -->
      <div class="section-block">
        <div class="section-tag-right">
          <div class="tag-header-pill">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            SOFTWARE & TECH
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>
        </div>

        <div class="stack-bottom-row">
          <!-- Software Badges (Matching Ps, Ai, Ae, Id, Lr, Pr Badges in Reference) -->
          <div class="software-badges-wrap">
            <div class="soft-badge green" title="Vue.js">Vu</div>
            <div class="soft-badge green" title="Nuxt">Nx</div>
            <div class="soft-badge accent" title="React">Re</div>
            <div class="soft-badge" title="Next.js">Ne</div>
            <div class="soft-badge" title="Node.js">No</div>
            <div class="soft-badge amber" title="Python">Py</div>
            <div class="soft-badge accent" title="Google Cloud">Gc</div>
            <div class="soft-badge" title="Docker">Dk</div>
            <div class="soft-badge" title="Git">Gt</div>
          </div>

          <!-- Secondary GitHub Code QR Card -->
          <a href="${personalInfo.github}" target="_blank" class="github-qr-card">
            <div class="github-qr-img">
              ${qrGithubSvg}
            </div>
            <div class="github-qr-label">
              <span class="github-qr-text">GitHub Repos</span>
              <span class="github-qr-url">@BROHUHA ↗</span>
            </div>
          </a>
        </div>
      </div>

    </section>

  </main>

</body>
</html>`;

const tempHtmlPath = path.resolve('public/documents/temp_cv.html');
fs.writeFileSync(tempHtmlPath, htmlContent, 'utf-8');

const outputPdfPath = path.resolve('public/documents/Abin_Binoy_Resume.pdf');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const cmd = `"${chromePath}" --headless=new --no-sandbox --disable-gpu --no-pdf-header-footer --print-to-pdf="${outputPdfPath}" "${tempHtmlPath}"`;
console.log('Generating PDF via Chrome...');
execSync(cmd, { stdio: 'inherit' });

// Also generate high-res preview screenshot for artifact
const artifactDir = 'C:\\Users\\abinb\\.gemini\\antigravity\\brain\\a474277e-35d3-4623-a209-a022d495bd24';
const screenshotPath = path.join(artifactDir, 'abin_resume_styled_preview.png');
const screenshotCmd = `"${chromePath}" --headless=new --no-sandbox --disable-gpu --window-size=794,1123 --screenshot="${screenshotPath}" "${tempHtmlPath}"`;
try {
  execSync(screenshotCmd, { stdio: 'ignore' });
  console.log('Preview image generated at:', screenshotPath);
} catch (e) {
  console.warn('Screenshot capture skipped:', e.message);
}

console.log('PDF Generated Successfully at:', outputPdfPath);
const stats = fs.statSync(outputPdfPath);
console.log('File Size:', stats.size, 'bytes');

// Clean up temporary HTML
if (fs.existsSync(tempHtmlPath)) {
  fs.unlinkSync(tempHtmlPath);
}
