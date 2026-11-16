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
      fhd: 'wave_1080p.mp4',
      hd: 'wave_720p.mp4',
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
    slug: 'gossip',
    title: 'Gossip',
    images: {
      cover: 'cover.jpg',
      back: 'back.jpg',
      galleta: 'galleta.png',
    },
    year: 2011,
    releaseDate: '2011-02-28',
    recordLabel: '',
    meta: {
      description: 'Gossip is the third album recorded by Abin Binoy.',
    },
    player: {
      spotify: 'https://open.spotify.com/embed/album/55dCAnS0nH77fJFehhlNiZ',
      bandcamp: {
        id: 3447235156,
        width: '100%',
        height: '439px'
      }
    },
    social: [
      {
        label: 'Spotify',
        link: 'https://open.spotify.com/album/2hfB4iLT48MfxtPa55cLKN',
        icon: 'simple-icons:spotify',
      },
      {
        label: 'Bandcamp',
        link: 'https://skizophonic.bandcamp.com/album/gossip',
        icon: 'simple-icons:bandcamp',
      },
    ],
    videos: {
      youtube: [
        {
          id: 'EgaE34PJiFc',
          title: 'I’m Gonna Get Rid Of You',
        },
        {
          id: 'wi6xNiO0xZQ',
          title: 'Annie - Conciertos de Radio 3 - TVE',
        },
      ],
    },
    bgVideo: {
      fhd: 'woman_finger_1080p.mp4',
      hd: 'woman_finger_720p.mp4',
    },
    tracklist: [
      'I Must Doubt',
      'I Wait',
      'She’s Not Late',
      'Gossip',
      'I’m Gonna Get Rid Of You',
      'Annie',
      'She Blushes',
      'Drinking Alone',
      'Today Save Your Weekend (Tomorrow Save Your Soul) - Herrasti Remix',
    ],
  },
  {
    id: 4,
    slug: 'living-room',
    title: 'Living room',
    images: {
      cover: 'cover.jpg',
      back: 'back.jpg',
      galleta: 'galleta.png',
    },
    year: 2009,
    releaseDate: '2009-09-19',
    recordLabel: '',
    meta: {
      description: 'Living Room is the second album/EP recorded by Abin Binoy.',
    },
    player: {
      spotify: 'https://open.spotify.com/embed/album/55dCAnS0nH77fJFehhlNiZ',
      bandcamp: {
        id: 2081532899,
        width: '100%',
        height: '340px'
      }
    },
    social: [
      {
        label: 'Spotify',
        link: 'https://open.spotify.com/album/2nzWHHLP7S2Go2It4pRo6d?si=fuZXu9eCQZm665EuRn4MVQ',
        icon: 'simple-icons:spotify',
      },
      {
        label: 'Bandcamp',
        link: 'http://skizophonic.bandcamp.com/album/living-room',
        icon: 'simple-icons:bandcamp',
      },
    ],
    videos: {
      youtube: [
        {
          id: 'Thhr_smM1YE',
          title: 'Living Room - Conciertos de Radio 3 - TVE',
        },
        // {
        //   id: 'pWc9u1KQ2ms',
        //   title: 'Living Room',
        // },
      ],
    },
    bgVideo: {
      fhd: 'factories_1080p.mp4',
      hd: 'factories_720p.mp4',
    },
    tracklist: [
      'Shut Up',
      'Today: Save Your Weekend (Tomorrow: Save Your Soul)',
      'It Was My Fault',
      'Still Forget',
      'Living Room',
      'Squaring The Circle',
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
      fhd: 'subway_1080p.mp4',
      hd: 'subway_720p.mp4',
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
