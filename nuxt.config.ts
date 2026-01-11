// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
  ],
  css: ['typeface-fira-code', '~/assets/css/main.css', '~/assets/css/prism-brutal.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt', '/about', '/projects', '/contact']
    }
  },
  site: {
    url: 'https://aniket.letsbug.in/',
    name: 'Aniket Singh - Software Engineer Portfolio',
    description: 'Software Engineer at DSHGSonic specializing in full-stack development with Laravel, PHP, Next.js, Node.js, and Python. Experienced in LLM deployment, Docker containerization, and building AI-powered applications.',
    defaultLocale: 'en'
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://aniket.letsbug.in/sitemap.xml'
  },
  sitemap: {
    sources: [
      '/',
      '/about',
      '/projects',
      '/contact'
    ]
  }
})