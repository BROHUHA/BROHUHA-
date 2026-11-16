export const albums = [
  {
    id: 1,
    slug: 'btscanner',
    title: 'BT SCANNER',
    images: {
      cover: 'cover.png',
      back: 'back.png',
      galleta: 'galleta.png',
    },
    year: 2026,
    releaseDate: '2026-01-01',
    category: 'Computer Vision & Deep Learning',
    meta: {
      description: 'BT-Scanner is an AI-powered Brain Tumor MRI Detection and Classification platform by Abin Binoy.',
    },
    basicInfo: 'BT-Scanner is an intelligent computer vision system that analyzes Magnetic Resonance Imaging (MRI) brain scans to detect and classify brain tumors with clinical-grade accuracy.',
    howToUse: '# Clone repository\ngit clone https://github.com/BROHUHA/BT-Scanner.git\ncd BT-Scanner\n\n# Install dependencies\npip install -r requirements.txt\n\n# Run the application\npython app.py',
    player: null,
    social: [
      {
        label: 'GitHub Repository',
        link: 'https://github.com/BROHUHA/BT-Scanner',
        icon: 'simple-icons:github',
      },
      {
        label: 'Direct Install (ZIP)',
        link: 'https://github.com/BROHUHA/BT-Scanner/archive/refs/heads/main.zip',
        icon: 'lucide:download',
      },
    ],
    videos: {
      youtube: [],
    },
    bgVideo: {
      fhd: 'wave_1080p.mp4',
      hd: 'wave_720p.mp4',
    },
    tracklist: [
      {
        name: 'Python 3.10+',
        reason: 'Core programming language powering the end-to-end machine learning pipeline, dataset ingestion, and model training routines.',
      },
      {
        name: 'TensorFlow & Keras',
        reason: 'Primary deep learning framework utilized for model architecture definition, transfer learning, and gradient backpropagation.',
      },
      {
        name: 'PyTorch',
        reason: 'Used for comparative model experiments, custom loss function evaluations, and rapid tensor computation prototyping.',
      },
      {
        name: 'Convolutional Neural Networks (CNN)',
        reason: 'Deep residual feature extraction layers specialized in recognizing spatial patterns, margins, and density variations in brain MRI slices.',
      },
      {
        name: 'OpenCV (Image Preprocessing)',
        reason: 'Computer vision library used for skull stripping, contour detection, CLAHE contrast enhancement, and MRI slice normalization.',
      },
      {
        name: 'Scikit-Learn',
        reason: 'Utilized for stratified dataset splitting, cross-validation scoring, ROC curve generation, and confusion matrix evaluation.',
      },
      {
        name: 'NumPy & Pandas',
        reason: 'Essential for multi-dimensional MRI matrix manipulations, array operations, and clinical metadata dataset handling.',
      },
      {
        name: 'Streamlit / Flask Web UI',
        reason: 'Frontend and API interface providing real-time MRI scan uploading, instantaneous tumor classification, and interactive visual outputs.',
      },
      {
        name: 'Grad-CAM (Visual Explainability)',
        reason: 'Generates class-activation heatmaps directly over MRI scans to reveal the precise anatomical regions driving the model\'s diagnostic classification.',
      },
      {
        name: 'Matplotlib & Seaborn',
        reason: 'Generates high-resolution visualization plots for training/validation loss curves, ROC-AUC comparisons, and class distribution charts.',
      },
      {
        name: 'CUDA & cuDNN (GPU Acceleration)',
        reason: 'NVIDIA hardware acceleration framework enabling high-throughput tensor operations and sub-120ms real-time MRI inference.',
      },
      {
        name: 'Git & GitHub Version Control',
        reason: 'Manages codebase versioning, CI/CD workflows, open-source reproducibility, and collaborative development.',
      },
    ],
  },
  {
    id: 2,
    slug: 'apkcook',
    title: 'APKCOOK',
    images: {
      cover: 'cover.png',
      back: 'back.png',
      galleta: 'galleta.png',
    },
    year: 2026,
    releaseDate: '2026-01-01',
    category: 'Android Security & Dynamic Instrumentation',
    meta: {
      description: 'APKCook is an open-source, unified Android application security auditing, reverse engineering, and dynamic instrumentation laboratory by Abin Binoy.',
    },
    basicInfo: 'APKCook is a unified Android application security auditing and dynamic instrumentation laboratory. It combines static bytecode disassembly, automated regex vulnerability heuristics, automated Frida gadget injection, cryptographic multi-scheme APK signing, and a live ADB device command center into a fast, native desktop environment.',
    howToUse: '# Clone repository\ngit clone https://github.com/BROHUHA/APKCook.git\ncd APKCook\n\n# Run the application (.NET 8 + Avalonia UI)\ndotnet run --project src/APKCook.Avalonia\n\n# Or publish standalone Windows binary\ndotnet publish src/APKCook.Avalonia -c Release -r win-x64 --self-contained -p:PublishSingleFile=true -o release',
    player: null,
    social: [
      {
        label: 'Visit Site',
        link: 'https://apkcook.vercel.app',
        icon: 'lucide:globe',
      },
      {
        label: 'GitHub Repository',
        link: 'https://github.com/BROHUHA/APKCook',
        icon: 'simple-icons:github',
      },
      {
        label: 'Direct Install (ZIP)',
        link: 'https://github.com/BROHUHA/APKCook/archive/refs/heads/main.zip',
        icon: 'lucide:download',
      },
    ],
    videos: {
      youtube: [],
    },
    bgVideo: {
      fhd: 'apkcook_1080p.mp4',
      hd: 'apkcook_720p.mp4',
    },
    tracklist: [
      {
        name: '.NET 8 & C# 12',
        reason: 'Modern high-performance runtime delivering multi-threaded execution, memory safety, and cross-platform binary processing efficiency.',
      },
      {
        name: 'Avalonia UI 11',
        reason: 'Cross-platform XAML GUI framework providing hardware-accelerated, native desktop rendering without Electron memory overhead.',
      },
      {
        name: 'Apktool Engine',
        reason: 'Decodes binary XML resources, disassembles DEX bytecode into readable Smali opcodes, and rebuilds modified APK archives.',
      },
      {
        name: 'Frida Dynamic Instrumentation',
        reason: 'Automates gadget injection (frida-gadget.so) into native libraries for live runtime hooking, memory probing, and SSL pinning bypass.',
      },
      {
        name: 'Uber-APK-Signer',
        reason: 'Performs multi-scheme Android cryptographic signing supporting v1, v2, and v3 signature formats with automated zipalign verification.',
      },
      {
        name: 'Android Debug Bridge (ADB)',
        reason: 'Direct device communication bridge managing physical phones and emulators for package installs, live logcat streaming, and frame capture.',
      },
      {
        name: 'Smali & Baksmali',
        reason: 'Intermediate DEX disassembly format utilized to analyze register allocation, control-flow graphs, and method signatures during audits.',
      },
      {
        name: 'ReactiveUI & MVVM',
        reason: 'Architectural design pattern providing declarative state binding, asynchronous command dispatching, and reactive event streams.',
      },
      {
        name: 'Heuristic Security Scanner',
        reason: 'Configurable regex rule engine identifying hardcoded secrets, insecure cryptographic algorithms, root detection, and exposed endpoints.',
      },
      {
        name: 'Zipalign Optimization',
        reason: 'Ensures all uncompressed data starts with a 4-byte boundary alignment, optimizing memory mapping efficiency on Android OS.',
      },
      {
        name: 'Java Development Kit (JDK 17+)',
        reason: 'Underlying runtime environment utilized by Apktool, jarsigner, and APK signature verification utilities.',
      },
      {
        name: 'Git & GitHub Version Control',
        reason: 'Open-source repository management, CI/CD automated release builds, cross-architecture testing, and documentation tracking.',
      },
    ],
  },
  {
    id: 3,
    slug: 'allqr',
    title: 'ALLQR',
    images: {
      cover: 'cover.png',
      back: 'back.png',
      galleta: 'galleta.png',
    },
    year: 2025,
    releaseDate: '2025-01-01',
    category: 'Privacy-First QR Engineering & Utilities',
    meta: {
      description: 'AllQR (QRCARD) is an open-source, privacy-first QR code generator and printable card platform by Abin Binoy.',
    },
    basicInfo: 'AllQR is an open-source, client-side digital utility and printable card generator. It enables users to instantly encode WiFi credentials, URLs, and contact info into custom QR codes with high-resolution image and print export, running 100% in-browser with zero remote data collection.',
    howToUse: '# Clone repository\ngit clone https://github.com/BROHUHA/QRCARD.git\ncd QRCARD\n\n# Install dependencies\nnpm install --legacy-peer-deps\n\n# Start development server\nnpm start',
    player: null,
    social: [
      {
        label: 'GitHub Repository',
        link: 'https://github.com/BROHUHA/QRCARD',
        icon: 'simple-icons:github',
      },
      {
        label: 'Visit Site',
        link: 'https://allqr.vercel.app',
        icon: 'lucide:globe',
      },
    ],
    videos: {
      youtube: [],
    },
    bgVideo: {
      fhd: 'allqr_1080p.mp4',
      hd: 'allqr_720p.mp4',
    },
    tracklist: [
      {
        name: 'React 17',
        reason: 'Component-driven frontend architecture handling dynamic state management, instant credential binding, and real-time live preview rendering.',
      },
      {
        name: 'qrcode.react Engine',
        reason: 'Vector QR matrix generation library supporting configurable error correction levels (L, M, Q, H) to maintain scan reliability even on damaged prints.',
      },
      {
        name: 'WiFi Protocol URI Standardization',
        reason: 'Generates compliant WiFi network URI schemas supporting WPA, WPA2, WPA3, WEP, and 802.1X WPA2-EAP enterprise network configurations.',
      },
      {
        name: 'Evergreen UI Component Suite',
        reason: 'Enterprise-grade React design system delivering accessible form controls, layout primitives, and polished interactive settings panels.',
      },
      {
        name: 'html-to-image DOM Rasterization',
        reason: 'Converts live DOM nodes and SVG graphics into high-resolution Canvas elements for pixel-perfect card rasterization.',
      },
      {
        name: 'downloadjs File Dispatcher',
        reason: 'Lightweight client-side file downloader facilitating instantaneous PNG card generation directly to the user\'s local filesystem.',
      },
      {
        name: 'i18next Internationalization',
        reason: 'Localization framework supporting 30+ global languages with automated browser locale detection and dynamic RTL layout switching for Arabic, Persian, and Urdu.',
      },
      {
        name: 'Zero-Telemetry Security Architecture',
        reason: 'Guarantees 100% client-side computation, ensuring WiFi passwords and personal data never leave the browser or touch remote servers.',
      },
      {
        name: 'Glassmorphism Design System',
        reason: 'Modern visual styling tokens incorporating frosted backdrop filters, delicate elevation highlights, and fluid micro-interactions.',
      },
      {
        name: 'Print-Optimized CSS (@media print)',
        reason: 'Tailored print stylesheets handling bleed margins, portrait and landscape orientation toggling, and physical wallet/desk card formats.',
      },
      {
        name: 'Progressive Web App (PWA)',
        reason: 'Web App Manifest and service worker offline caching enabling standalone execution across mobile and desktop without internet connectivity.',
      },
      {
        name: 'Git & GitHub Version Control',
        reason: 'Manages open-source repository history, community localization contributions, continuous integration, and releases.',
      },
    ],
  },
  {
    id: 4,
    slug: 'portfolio',
    title: 'PORTFOLIO',
    images: {
      cover: 'cover.png',
      back: 'back.png',
      galleta: 'galleta.png',
    },
    year: 2025,
    releaseDate: '2025-01-01',
    category: 'Interactive Portfolio & Creative Development',
    meta: {
      description: 'The official interactive developer portfolio of Abin Binoy, built with Vue 3, GSAP, Tailwind CSS v4, and modern web animations.',
    },
    basicInfo: 'The official interactive portfolio platform of Abin Binoy. Engineered with Vue 3, GSAP timeline choreography, Lenis smooth scrolling, Tailwind CSS v4, and reactive micro-interactions to showcase full-stack systems, machine learning utilities, and security laboratories.',
    howToUse: null,
    player: null,
    social: [
      {
        label: 'Visit Site',
        link: 'https://abinbinoy.vercel.app',
        icon: 'lucide:globe',
      },
    ],
    videos: {
      youtube: [],
    },
    bgVideo: {
      fhd: 'portfolio_1080p.mp4',
      hd: 'portfolio_720p.mp4',
    },
    tracklist: [
      {
        name: 'Vue 3 & Composition API',
        reason: 'Modern reactive user interface architecture leveraging <script setup> single-file components and declarative state pipelines.',
      },
      {
        name: 'GSAP & ScrollTrigger',
        reason: 'Advanced timeline choreography orchestrating cinematic viewport reveals, 3D card perspective flipping, and complex SVG morphing animations.',
      },
      {
        name: 'Tailwind CSS v4',
        reason: 'Next-generation utility-first stylesheet engine with Vite integration, CSS variables, and fluid responsive typography.',
      },
      {
        name: 'Lenis Smooth Scroll',
        reason: 'High-performance inertial scroll engine ensuring fluid 60fps scrolling across high-refresh-rate desktop and mobile displays.',
      },
      {
        name: 'Vite 6 Fast Bundler',
        reason: 'Lightning-fast frontend development server and Rollup-based production bundler with instant Hot Module Replacement (HMR).',
      },
      {
        name: 'tsParticles Interactive Engine',
        reason: 'Hardware-accelerated dynamic particle systems providing interactive cosmic and wave background effects.',
      },
      {
        name: 'Lucide Icons Suite',
        reason: 'Comprehensive, lightweight SVG iconography library delivering crisp monochrome symbols for interface controls and actions.',
      },
      {
        name: 'Unhead & SEO Architecture',
        reason: 'Automated dynamic meta tags, OpenGraph previews, and canonical link generation for maximum search engine indexability.',
      },
      {
        name: 'Vue Router 4',
        reason: 'Declarative client-side routing with custom animated page transition hooks and smooth view state preservation.',
      },
      {
        name: 'Vue I18n Internationalization',
        reason: 'Multi-language internationalization framework enabling seamless switching between English and Spanish localizations.',
      },
      {
        name: 'Responsive 3D Jewel Case Physics',
        reason: 'Custom CSS 3D transforms (rotate-y-180, perspective-[1000px], transform-3d) simulating physical CD jewel cases and disc extraction.',
      },
      {
        name: 'Vercel Cloud Edge Deployment',
        reason: 'Global edge network hosting providing instant SSD caching, automatic SSL, and sub-second global asset delivery.',
      },
    ],
  },
  {
    id: 5,
    slug: 'one',
    title: 'One',
    images: {
      cover: 'cover.jpg',
      back: 'back.jpg',
      galleta: 'galleta.png',
    },
    year: 2008,
    releaseDate: '2008-05-01',
    recordLabel: '',
    meta: {
      description: 'One is the first album recorded by Abin Binoy.',
    },
    player: {
      spotify: '',
      bandcamp: {
        id: '',
        width: '',
        height: ''
      }
    },
    social: [],
    videos: {
      youtube: [
        {
          id: 'srcpryXQHXo',
          title: 'Sweating Blood',
        },
        // {
        //   id: 'YmKeR4UfhOA',
        //   title: 'Smiles & Clouds',
        // },
      ],
    },
    bgVideo: {
      fhd: 'portfolio_1080p.mp4',
      hd: 'portfolio_720p.mp4',
    },
    tracklist: [
      'Exhibitionist',
      'The Last Stupid Rock Project',
      'Smiles & Clouds',
      'The Wrong Way',
      '1968',
      'Disco Stinks',
      'Lucky Boy',
      'The Other Side Of Border Line',
      'Sweating Blood',
    ],
  },
];
