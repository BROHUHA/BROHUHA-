import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { renderSVG } from 'uqr';
import { personalInfo, education, experience, featuredProjects } from '../app/data/resume.js';

// Base64 encode photo and custom signature font
const photoPath = path.resolve('public/images/band/abin_color.png');
const photoBase64 = fs.existsSync(photoPath)
  ? `data:image/png;base64,${fs.readFileSync(photoPath).toString('base64')}`
  : '';

const fontPath = path.resolve('public/fonts/grindy-brush/grindy-brush.otf');
const fontBase64 = fs.existsSync(fontPath)
  ? fs.readFileSync(fontPath).toString('base64')
  : '';

// Generate crisp vector QR codes
const qrPortfolioSvg = renderSVG('https://4bin.vercel.app', { border: 0 });
const qrGithubSvg = renderSVG('https://github.com/BROHUHA', { border: 0 });

// Official authentic SVG brand logos for languages and infrastructure
const techIcons = {
  vue: `<svg viewBox="0 0 256 221" width="14" height="14"><path fill="#42b883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"/><path fill="#35495e" d="M0 0l128 220.8L256 0h-51.2L128 132.48 49.92 0H0z"/></svg>`,
  nuxt: `<svg viewBox="0 0 256 192" width="15" height="15"><path fill="#00dc82" d="M124.6 153.2c-4.4 7.6-15.4 7.6-19.8 0L49.4 57.5c-4.4-7.6 1.1-17.1 9.9-17.1h39.7c5.3 0 10.2 2.8 12.8 7.4l35.8 62.4-23 43z"/><path fill="#002e3b" d="M206.6 153.2c-4.4 7.6-15.4 7.6-19.8 0l-55.4-95.7c-4.4-7.6 1.1-17.1 9.9-17.1h39.7c5.3 0 10.2 2.8 12.8 7.4l35.8 62.4-23 43z"/></svg>`,
  react: `<svg viewBox="-11.5 -10.23174 23 20.46348" width="14" height="14"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>`,
  typescript: `<svg viewBox="0 0 256 256" width="14" height="14"><rect width="256" height="256" rx="36" fill="#3178c6"/><path fill="#ffffff" d="M150 156.4c5.7 3.6 12.5 5.7 20 5.7 11.5 0 17.5-5.7 17.5-13.8 0-8.6-8.2-12-19-16.7-14.8-6.4-23.7-13.5-23.7-25.5 0-14.7 11.5-26.1 29.5-26.1 9.2 0 16.5 2.5 22.2 6.5l-6.7 15.6c-4.7-3.1-10.7-4.9-16.2-4.9-7.7 0-13 4.2-13 10.6 0 7.4 6.7 10.5 17.6 15.2 15.5 6.6 25.1 13.8 25.1 27.2 0 16.2-12.8 27.8-33.1 27.8-11.5 0-21.7-3.6-28.2-8.6l8-17zM70 100.5h62.6v17.4H103v63.1H81.7v-63.1H70v-17.4z"/></svg>`,
  javascript: `<svg viewBox="0 0 256 256" width="14" height="14"><rect width="256" height="256" rx="36" fill="#f7df1e"/><path fill="#000000" d="M67.3 211.7l19.5-11.9c4.2 7.1 8 13.1 17.2 13.1 8.8 0 14.5-3.5 14.5-17.2V115h24.2v80.9c0 26.2-15.3 37.8-37.4 37.8-20.3 0-32-10.7-38-22m92-3.8l19.5-11.3c5.3 8.6 12.4 15 24.2 15 10.2 0 16.7-5.1 16.7-12.3 0-8.6-6.8-11.8-18.2-16.8l-6.2-2.7c-17.9-7.6-29.8-17.3-29.8-37.5 0-18.7 14.3-32.9 36.7-32.9 15.9 0 27.3 5.4 35.3 19.3l-18.7 12c-4.2-7.1-8.9-10.1-16.7-10.1-8 0-13.6 5.1-13.6 11.5 0 8 5.2 11.2 15.9 15.8l6.2 2.7c21.2 9.1 32.3 18.7 32.3 38.8 0 22.3-17.4 34.7-40.8 34.7-22.7.2-36.9-11.6-43.7-26.6"/></svg>`,
  python: `<svg viewBox="0 0 256 255" width="14" height="14"><defs><linearGradient id="pyA" x1="12.96%" y1="12.04%" x2="79.64%" y2="78.21%"><stop offset="0%" stop-color="#387eb8"/><stop offset="100%" stop-color="#366994"/></linearGradient><linearGradient id="pyB" x1="19.13%" y1="20.73%" x2="90.74%" y2="88.63%"><stop offset="0%" stop-color="#ffe052"/><stop offset="100%" stop-color="#ffc331"/></linearGradient></defs><path fill="url(#pyA)" d="M126.9 0c-35.4 0-33.2 15.3-33.2 15.3l.04 15.9h33.9v4.8H46.4S23 33.3 23 68.7s20.5 34.3 20.5 34.3h12.2V86.7s-.7-20.5 20.2-20.5h34.8c18.5 0 18.2-16.8 18.2-16.8V15.3S132.3 0 126.9 0zm-18.5 10.3c3.8 0 6.9 3.1 6.9 6.9s-3.1 6.9-6.9 6.9-6.9-3.1-6.9-6.9c0-3.9 3.1-6.9 6.9-6.9z"/><path fill="url(#pyB)" d="M129.1 254.7c35.4 0 33.2-15.3 33.2-15.3l-.04-15.9h-33.9v-4.8h81.2s23.4 2.7 23.4-32.7-20.5-34.3-20.5-34.3h-12.2v16.3s.7 20.5-20.2 20.5h-34.8c-18.5 0-18.2 16.8-18.2 16.8v34.1s-3.4 15.3 2 15.3zm18.5-10.3c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9c0 3.9-3.1 6.9-6.9 6.9z"/></svg>`,
  node: `<svg viewBox="0 0 256 289" width="13" height="15"><path fill="#539e43" d="M128 0L7.5 69.5v139.1L128 278.2l120.5-69.5V69.5L128 0zm-14.7 197.8c-28.7 0-35.8-13.6-35.8-31.5 0-24.2 13.6-33.6 44-33.6h17.9v-6.9c0-9.2-3.1-14.4-16.9-14.4-11.3 0-15.4 3.6-18.4 10.8l-19.5-11.8c6.7-13.8 17.9-17.9 37.9-17.9 29.2 0 38.4 12.8 38.4 33.3v44.1c0 8.7 3.1 11.3 10.8 11.3 3.6 0 6.7-.5 9.7-1.5v17.4c-4.1 1.5-9.7 2.6-16.9 2.6-12.3 0-18.4-6.2-20.5-16.4-6.6 11.8-16.9 18.5-30.7 18.5zm31.3-48.7h-16.4c-13.8 0-20 4.1-20 15.4 0 9.7 4.6 15.4 17.9 15.4 11.8 0 18.5-6.7 18.5-18.5v-12.3z"/></svg>`,
  gcp: `<svg viewBox="0 0 256 206" width="16" height="13"><path fill="#ea4335" d="M141.2 50.4l20.4-35.3C152.1 5.3 139.3 0 125.6 0 97.4 0 72.7 15.3 59.4 38.3l22.6 39.1c5.5-16.1 20.7-27 38.7-27 7.4 0 14.3 1.9 20.5 5.5z"/><path fill="#4285f4" d="M256 122.9c0-8.5-1.5-16.8-4.3-24.4-4.8-13.6-14-25.1-26-32.6l-20.4 35.3c3.5 4.3 5.6 9.8 5.6 15.8 0 13.5-11 24.5-24.5 24.5H125.6l-22.6 39.1h83.4c39.6 0 71.6-32 71.6-71.7l-2-6z"/><path fill="#fbbc05" d="M82 77.4L59.4 38.3C23.6 51.5 0 85.4 0 122.9c0 28.5 13.5 54.4 34.6 70.8l22.6-39.1c-7.9-6.9-12.9-17-12.9-28.4 0-17.7 12-32.6 28.5-37.1l9.2-11.7z"/><path fill="#34a853" d="M125.6 179.3l22.6-39.1c-2.3-.9-4.8-1.5-7.5-1.5-13.5 0-24.5-11-24.5-24.5 0-4.6 1.3-8.8 3.5-12.4L97.1 62.7C74.6 72 58.6 93.9 57.2 120.4c-1.5 27.6 12.8 53.6 36.7 66.8l31.7-7.9z"/></svg>`,
  docker: `<svg viewBox="0 0 256 186" width="16" height="12"><path fill="#2496ed" d="M106.8 54.1H84.1V31.4h22.7v22.7zm-26 0H58.1V31.4h22.7v22.7zm52 0h-22.7V31.4h22.7v22.7zm-26-26H84.1V5.4h22.7v22.7zm26 0h-22.7V5.4h22.7v22.7zm-78 26H32.1V31.4h22.7v22.7zm104 0h-22.7V31.4h22.7v22.7zm26 0h-22.7V31.4h22.7v22.7zm-26-26h-22.7V5.4h22.7v22.7zM251.2 73.1c-3.1-22.7-22.7-34.1-22.7-34.1-6.2 12.4-15.5 18.6-24.8 21.7-12.4 3.1-24.8 0-37.2-6.2H12.4C6.2 54.5 0 60.7 0 66.9c0 15.5 6.2 31 15.5 43.4 18.6 24.8 52.7 40.3 89.9 40.3 65.1 0 117.8-37.2 136.4-86.8 3.1 0 6.2 0 9.3-.1 0 0 .1-.2.1-.2v-.1l-.1-10.3z"/></svg>`,
  git: `<svg viewBox="0 0 256 256" width="14" height="14"><path fill="#f05032" d="M250.9 115.6L140.4 5.1c-6.8-6.8-17.8-6.8-24.6 0L92 28.9l31.2 31.2c7.3-2.5 15.8-.8 21.6 5 5.8 5.8 7.5 14.3 5 21.6l30 30c7.3-2.5 15.8-.8 21.6 5 8.2 8.2 8.2 21.5 0 29.7s-21.5 8.2-29.7 0c-6-6-7.6-14.7-4.8-22.1l-28-28v68.9c2 1.1 3.9 2.5 5.5 4.1 8.2 8.2 8.2 21.5 0 29.7s-21.5 8.2-29.7 0-8.2-21.5 0-29.7c2-2 4.4-3.5 6.9-4.5v-70c-2.5-1-4.9-2.5-6.9-4.5-5.9-5.9-7.6-14.8-4.9-22.3L77.9 43 5.1 115.8c-6.8 6.8-6.8 17.8 0 24.6l110.5 110.5c6.8 6.8 17.8 6.8 24.6 0l110.7-110.7c6.8-6.8 6.8-17.8 0-24.6z"/></svg>`,
  tailwind: `<svg viewBox="0 0 256 154" width="16" height="10"><path fill="#38bdf8" d="M128 0C90.7 0 69.3 18.7 64 56c16-21.3 34.7-29.3 56-24 12.2 3 20.9 11.9 30.6 21.7C166.4 69.6 186.1 89.6 224 89.6c37.3 0 58.7-18.7 64-56-16 21.3-34.7 29.3-56 24-12.2-3-20.9-11.9-30.6-21.7C185.6 20 165.9 0 128 0zM32 64C-5.3 64-26.7 82.7-32 120c16-21.3 34.7-29.3 56-24 12.2 3 20.9 11.9 30.6 21.7C70.4 133.6 90.1 153.6 128 153.6c37.3 0 58.7-18.7 64-56-16 21.3-34.7 29.3-56 24-12.2-3-20.9-11.9-30.6-21.7C89.6 84 69.9 64 32 64z"/></svg>`,
  postgres: `<svg viewBox="0 0 256 264" width="14" height="14"><path fill="#336791" d="M128.5 0C84.3 0 46.5 24.4 27.2 60.5c-4.2 7.8-7.3 16.3-9.3 25.1C6.8 132.8 1.9 181.7 0 231.2c9.5-3.3 19.3-5.7 29.3-7.2 1.3-26.7 4.2-53.2 8.6-79.6 12.9 22.7 33.7 40.5 58.7 50.3 3.6 1.4 7.2 2.6 10.9 3.5 11.7 2.9 24.1 3.7 36.3 2.5 12.3-1.2 24.2-4.8 35-10.7 21.3-11.6 37.7-30.8 46.2-54.1 8.5-23.3 8.3-49.2-.6-72.5-8.9-23.3-25.7-42.2-47.5-53.3C161.4 3.7 145 0 128.5 0z"/></svg>`,
};

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${personalInfo.name} - Official Resume</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Caveat:wght@600;700&display=swap');

    @font-face {
      font-family: 'Grindy Brush';
      src: url('data:font/otf;base64,${fontBase64}') format('opentype');
      font-weight: normal;
      font-style: normal;
    }

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
      background-color: #fcfbfa;
      background-image: 
        radial-gradient(#e6dfd5 0.65px, transparent 0.65px),
        radial-gradient(#e6dfd5 0.65px, #fcfbfa 0.65px);
      background-size: 20px 20px;
      background-position: 0 0, 10px 10px;
      color: #1a1a1a;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      -webkit-font-smoothing: antialiased;
      overflow: hidden;
      padding: 11mm 13mm;
    }

    /* Top Center Header with Signature Grindy Brush Font */
    .header {
      text-align: center;
      margin-bottom: 6mm;
      position: relative;
    }

    .header-name {
      font-family: 'Grindy Brush', cursive, sans-serif;
      font-size: 44pt;
      font-weight: normal;
      color: #111111;
      line-height: 0.95;
      text-transform: none;
      letter-spacing: normal;
      display: inline-block;
    }

    .header-subtitle {
      font-size: 11pt;
      font-weight: 800;
      color: #c2410c; /* High-contrast Terracotta */
      letter-spacing: 2.2px;
      text-transform: uppercase;
      line-height: 1.2;
      margin-top: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .header-subtitle-line {
      display: inline-block;
      width: 28px;
      height: 1.5px;
      background: #c2410c;
      opacity: 0.7;
    }

    /* Main Two-Column Layout */
    .layout-grid {
      display: grid;
      grid-template-columns: 73mm 1fr;
      gap: 9mm;
      align-items: start;
    }

    /* Left Column */
    .left-col {
      display: flex;
      flex-direction: column;
      gap: 5mm;
    }

    /* Photo Frame with Developer Tool Palette */
    .photo-card-container {
      position: relative;
      width: 100%;
      height: 72mm;
      background: #ede9e1;
      border-radius: 28px;
      overflow: hidden;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      border: 1px solid rgba(0,0,0,0.06);
      box-shadow: 0 8px 20px rgba(0,0,0,0.04);
    }

    /* Developer Toolbar on Left of Photo (Original Vector SVG Icons) */
    .dev-toolbar {
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 10;
      background: rgba(20, 20, 24, 0.94);
      backdrop-filter: blur(8px);
      border-radius: 12px;
      padding: 6px 5px;
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
      color: #9ca3af;
    }
    .dev-tool-btn svg {
      width: 12px;
      height: 12px;
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
      background: rgba(255, 255, 255, 0.9);
      border-radius: 8px;
      padding: 3.5px 14px;
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
      background: #18181b;
      color: #e4e4e7;
      border-radius: 20px;
      padding: 14px 15px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.1);
      border: 1px solid rgba(255,255,255,0.06);
    }

    .about-card p {
      font-size: 8.1pt;
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
      border-radius: 20px;
      padding: 10px 13px;
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: inherit;
      box-shadow: 0 4px 12px rgba(0,0,0,0.03);
    }

    .qr-card-code {
      width: 50px;
      height: 50px;
      flex-shrink: 0;
      border-radius: 6px;
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
      gap: 2.5px;
    }

    .qr-card-title {
      font-size: 7.7pt;
      font-weight: 700;
      color: #18181b;
      line-height: 1.25;
    }

    .qr-card-link {
      font-size: 8pt;
      font-weight: 800;
      color: #0284c7;
      text-decoration: underline;
    }

    /* Left Column Footer Contacts (Vector SVG Icons) */
    .contact-footer {
      display: flex;
      flex-direction: column;
      gap: 5.5px;
      margin-top: 1.5mm;
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
      gap: 5mm;
    }

    .section-block {
      display: flex;
      flex-direction: column;
      gap: 2.6mm;
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
      font-size: 9.5pt;
      font-weight: 800;
      color: #111827;
      line-height: 1.2;
    }

    .entry-date {
      font-size: 7.8pt;
      font-weight: 700;
      color: #c2410c; /* Accent Terracotta */
      white-space: nowrap;
    }

    .entry-sub {
      font-size: 8.1pt;
      font-weight: 600;
      color: #4b5563;
      font-style: italic;
    }

    .entry-desc {
      font-size: 7.8pt;
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

    /* Software & Tech Stack with Real Brand SVG Logos */
    .stack-bottom-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding-top: 2px;
    }

    .software-badges-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 5.5px;
      flex: 1;
    }

    .tech-pill-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 4px 7px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }

    .tech-pill-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
    }

    .tech-pill-text {
      font-size: 7.4pt;
      font-weight: 700;
      color: #1f2937;
      letter-spacing: -0.2px;
    }

    .github-qr-card {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      color: inherit;
      background: #ffffff;
      padding: 5px 9px 5px 7px;
      border-radius: 14px;
      border: 1px solid #d4d4d8;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
      flex-shrink: 0;
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
      font-size: 6.8pt;
      font-weight: 700;
      color: #374151;
      line-height: 1.15;
    }

    .github-qr-url {
      font-size: 7.2pt;
      font-weight: 800;
      color: #0284c7;
    }
  </style>
</head>
<body>

  <!-- Top Center Header with Signature Grindy Brush Font -->
  <header class="header">
    <h1 class="header-name">${personalInfo.name}</h1>
    <div class="header-subtitle">
      <span class="header-subtitle-line"></span>
      <span>${personalInfo.title}</span>
      <span class="header-subtitle-line"></span>
    </div>
  </header>

  <!-- Two Column Layout -->
  <main class="layout-grid">

    <!-- LEFT COLUMN -->
    <aside class="left-col">

      <!-- Photo Card with Vertical Dev Toolbar -->
      <div class="photo-card-container">
        <!-- Floating Dev Tool Palette (Original SVG Developer Icons) -->
        <div class="dev-toolbar">
          <span class="dev-tool-btn active">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m3 3 7 18 3-7 7-3L3 3z"/></svg>
          </span>
          <span class="dev-tool-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </span>
          <span class="dev-tool-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
          </span>
          <span class="dev-tool-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
          </span>
          <span class="dev-tool-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
          </span>
          <span class="dev-tool-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
          </span>
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

      <!-- 4. SOFTWARE & LANGUAGES (OFFICIAL VECTOR BRAND LOGOS) -->
      <div class="section-block">
        <div class="section-tag-right">
          <div class="tag-header-pill">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            LANGUAGES & TECH STACK
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>
        </div>

        <div class="stack-bottom-row">
          <!-- Authentic Official Tech Badges with Logos -->
          <div class="software-badges-wrap">
            <div class="tech-pill-badge" title="Vue.js">
              <span class="tech-pill-logo">${techIcons.vue}</span>
              <span class="tech-pill-text">Vue 3</span>
            </div>
            <div class="tech-pill-badge" title="Nuxt.js">
              <span class="tech-pill-logo">${techIcons.nuxt}</span>
              <span class="tech-pill-text">Nuxt</span>
            </div>
            <div class="tech-pill-badge" title="React">
              <span class="tech-pill-logo">${techIcons.react}</span>
              <span class="tech-pill-text">React</span>
            </div>
            <div class="tech-pill-badge" title="TypeScript">
              <span class="tech-pill-logo">${techIcons.typescript}</span>
              <span class="tech-pill-text">TypeScript</span>
            </div>
            <div class="tech-pill-badge" title="JavaScript">
              <span class="tech-pill-logo">${techIcons.javascript}</span>
              <span class="tech-pill-text">JavaScript</span>
            </div>
            <div class="tech-pill-badge" title="Python">
              <span class="tech-pill-logo">${techIcons.python}</span>
              <span class="tech-pill-text">Python</span>
            </div>
            <div class="tech-pill-badge" title="Node.js">
              <span class="tech-pill-logo">${techIcons.node}</span>
              <span class="tech-pill-text">Node.js</span>
            </div>
            <div class="tech-pill-badge" title="Google Cloud Platform">
              <span class="tech-pill-logo">${techIcons.gcp}</span>
              <span class="tech-pill-text">GCP</span>
            </div>
            <div class="tech-pill-badge" title="Docker">
              <span class="tech-pill-logo">${techIcons.docker}</span>
              <span class="tech-pill-text">Docker</span>
            </div>
            <div class="tech-pill-badge" title="Git">
              <span class="tech-pill-logo">${techIcons.git}</span>
              <span class="tech-pill-text">Git</span>
            </div>
            <div class="tech-pill-badge" title="Tailwind CSS">
              <span class="tech-pill-logo">${techIcons.tailwind}</span>
              <span class="tech-pill-text">Tailwind</span>
            </div>
            <div class="tech-pill-badge" title="PostgreSQL">
              <span class="tech-pill-logo">${techIcons.postgres}</span>
              <span class="tech-pill-text">PostgreSQL</span>
            </div>
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
