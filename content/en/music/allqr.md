---
title: ALLQR
---

## Privacy-First WiFi & Digital QR Code Generator

**AllQR (QRCARD)** is an open-source, client-side digital utility and printable card generation platform engineered by **Abin Binoy**. It empowers users to instantly create customized, secure, and print-ready QR code cards for WiFi networks, contact details, URLs, and social profiles—executing entirely in the client browser with zero telemetry or remote data logging.

---

### Core Capabilities & Engineering Modules

The platform delivers seamless, private digital card authoring with immediate physical and digital export pipelines:

- **Instant WiFi Connect**: Encodes WiFi access credentials into standardized protocol strings (`WIFI:T:<auth>;S:<ssid>;P:<password>;H:<hidden>;;`) enabling one-tap camera connection without manual password entry.
- **Multi-Scheme Network Authentication**: Comprehensive support across WPA, WPA2, WPA3, WPA2-EAP Enterprise (with identity and phase 2 authentication), legacy WEP, and open unencrypted networks.
- **Client-Side High-Res Rendering**: Utilizes `qrcode.react` to render high-contrast SVG / Canvas vector matrices alongside `html-to-image` for pixel-perfect PNG card exports.
- **Print-Optimized Card Formats**: Tailored `@media print` CSS layouts with both portrait and landscape orientation support, pre-configured margins, and wallet/desk card dimensions.
- **Glassmorphism Visual Interface**: Built with Evergreen UI and custom glassmorphism design tokens featuring backdrop blur, subtle elevation shadows, and fluid animations.
- **Comprehensive Internationalization**: Integrated with `i18next` supporting 30+ languages, automated browser locale detection, and native Right-to-Left (RTL) text flows for Arabic, Persian, and Urdu.
- **Zero-Telemetry Security**: 100% in-browser generation ensuring sensitive WiFi credentials and personal URLs never touch external servers or cloud storage.

---

### System Architecture & Technical Specifications

- **Frontend Framework**: Built on **React 17** delivering declarative component architecture, synchronized form states, and rapid re-renders.
- **Component System**: Powered by **Evergreen UI** for accessible, enterprise-grade form controls, sliders, and modal dialogs.
- **Vector QR Engine**: Driven by **qrcode.react** with dynamic error correction levels (L, M, Q, H) to guarantee scan reliability even on damaged prints.
- **Canvas Serialization**: Leverages **html-to-image** and **downloadjs** for asynchronous DOM-to-Canvas rasterization and direct client-side blob downloads.
- **PWA Capabilities**: Configured with Web App Manifest and offline caching for standalone execution on mobile and desktop without internet connectivity.
- **Containerization**: Includes lightweight **Docker** runtime definitions and Makefile scripts for local containerized deployment.

---

### Key Capabilities & Benchmarks

| Capability | Specification |
| :--- | :--- |
| **Execution Architecture** | 100% Client-Side (Zero Server-Side Storage) |
| **Authentication Modes** | WPA3 / WPA2 / WPA / WPA2-EAP / WEP / Open |
| **Export Formats** | High-DPI PNG, Print-Ready CSS PDF, Live Vector SVG |
| **Internationalization** | 30+ Languages with Bi-Directional RTL Support |
| **Card Orientations** | Portrait & Landscape with Responsive Bleed Margins |
| **Security Standard** | Zero Cookies, Zero Analytics, Zero Remote Logging |

---

### Open Source Repository

- **GitHub Repository**: [github.com/BROHUHA/QRCARD](https://github.com/BROHUHA/QRCARD)
- **Author**: Abin Binoy
- **License**: MIT License
