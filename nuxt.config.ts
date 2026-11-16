import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Need to disable server-side rendering to prevent error 500 (no idea why yet).
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    'lenis/nuxt',
    '@nuxtjs/sitemap',
  ],
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
      pathPrefix: false,
      global: true
    }
  ],
  site: {
    url: 'https://4bin.vercel.app',
    name: '4bin - Abin Binoy (BROHUHA)',
  },
  content: {
    renderer: {
      anchorLinks: { h2: false, h3: false, h4: false }
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: '4bin - Abin Binoy | Full Stack Developer (BROHUHA)',
      meta: [
        {
          name: 'description',
          content: 'Official developer portfolio of 4bin (Abin Binoy / BROHUHA) - Full-Stack Developer specializing in Vue, Nuxt, Python, Android dynamic instrumentation, and AI applications.',
        },
        {
          name: 'keywords',
          content: '4bin, 4bin binoy, abin binoy, brohuha, abin binoy portfolio, 4bin developer, abin, brohuha github, apkcook, allqr, btscanner',
        },
        {
          name: 'author',
          content: 'Abin Binoy (4bin / BROHUHA)',
        },
        {
          name: 'google-site-verification',
          content: 'googlec6bcbea9d1c6f3b9',
        },
        {
          name: 'robots',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        },
        {
          property: 'og:site_name',
          content: '4bin - Abin Binoy',
        },
        {
          property: 'og:title',
          content: '4bin - Abin Binoy | Full Stack Developer (BROHUHA)',
        },
        {
          property: 'og:description',
          content: 'Official developer portfolio of 4bin (Abin Binoy / BROHUHA) - Full-Stack Developer specializing in Vue, Nuxt, Python, Android dynamic instrumentation, and AI applications.',
        },
        {
          property: 'og:image',
          content: 'https://4bin.vercel.app/images/og-cover.jpg',
        },
        {
          property: 'og:image:secure_url',
          content: 'https://4bin.vercel.app/images/og-cover.jpg',
        },
        {
          property: 'og:image:type',
          content: 'image/jpeg',
        },
        {
          property: 'og:image:alt',
          content: '4bin - Abin Binoy (BROHUHA) Portfolio Cover',
        },
        {
          property: 'og:image:width',
          content: '1024',
        },
        {
          property: 'og:image:height',
          content: '578',
        },
        {
          property: 'og:url',
          content: 'https://4bin.vercel.app',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: '4bin - Abin Binoy | Full Stack Developer (BROHUHA)',
        },
        {
          name: 'twitter:description',
          content: 'Official developer portfolio of 4bin (Abin Binoy / BROHUHA) - Full-Stack Developer.',
        },
        {
          name: 'twitter:image',
          content: 'https://4bin.vercel.app/images/og-cover.jpg',
        },
        {
          name: 'twitter:image:alt',
          content: '4bin - Abin Binoy (BROHUHA) Portfolio Cover',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-title', content: '4bin' },
      ],
      link: [
        { rel: 'canonical', href: 'https://4bin.vercel.app' },
        { rel: 'icon', type: 'image/svg+xml', media: '(prefers-color-scheme: light)', href: '/favicons/favicon-light-mode.svg' },
        { rel: 'icon', type: 'image/svg+xml', media: '(prefers-color-scheme: dark)', href: '/favicons/favicon-dark-mode.svg' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/favicon-96x96.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', type: 'image/x-icon', href: '/favicons/apple-touch-icon.png' },
        { rel: 'manifest', href: '/favicons/site.webmanifest' },
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebSite',
                '@id': 'https://4bin.vercel.app/#website',
                'url': 'https://4bin.vercel.app',
                'name': '4bin - Abin Binoy Portfolio',
                'alternateName': ['4bin', '4bin binoy', 'BROHUHA', 'Abin Binoy'],
                'description': 'Official developer portfolio of 4bin (Abin Binoy / BROHUHA)',
                'publisher': {
                  '@id': 'https://4bin.vercel.app/#person'
                }
              },
              {
                '@type': 'Person',
                '@id': 'https://4bin.vercel.app/#person',
                'name': 'Abin Binoy',
                'alternateName': ['4bin', '4bin binoy', 'BROHUHA', 'abinbinoy'],
                'url': 'https://4bin.vercel.app',
                'jobTitle': 'Full-Stack Developer',
                'sameAs': [
                  'https://github.com/BROHUHA',
                  'https://www.linkedin.com/in/abinbinoy',
                  'https://abinbinoy.vercel.app'
                ],
                'knowsAbout': [
                  'Full-Stack Web Development',
                  'Vue.js & Nuxt',
                  'Python & Machine Learning',
                  'Android Security & Reverse Engineering',
                  'Cloud Architecture'
                ]
              }
            ]
          })
        }
      ]
    }
  },
  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    google: {
      families: {
        'Poppins': [600, 700, 800, 900],
      },
      display: 'swap'
    },
  },
  runtimeConfig: {
    web3formsAccessKey: process.env.WEB3FORMS_ACCESS_KEY || '358a7427-79e7-4aaa-80ab-98be68b368f1',
    public: {
      appUrl: process.env.APP_URL || 'https://4bin.vercel.app',
      emailjs: {
        serviceId: process.env.EMAILJS_SERVICE_ID || '',
        templateId: process.env.EMAILJS_TEMPLATE_ID || '',
        publicKey: process.env.EMAILJS_PUBLIC_KEY || '',
      }
    }
  }
})
