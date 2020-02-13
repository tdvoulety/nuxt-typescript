import StylelintPlugin from 'stylelint-webpack-plugin'

const isProd = process.env.NODE_ENV === 'production'

export default {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      itemscope: '',
      itemtype: 'http://schema.org/WebPage',
    },
    title: '',
    meta: [
      { charset: 'utf-8' },
      { content: 'IE=edge', 'http-equiv': 'X-UA-Compatible' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=2.0' },
      { hid: 'description', name: 'description', content: '' },
    ],
  },
  router: {
    middleware: [
      'i18n',
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  loadingIndicator: {
    name: 'fading-circle',
    color: '#949799',
    background: 'white',
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/style.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/compositionApi',
    '@/plugins/axios',
    '@/plugins/i18n',
    '@/plugins/global',
    '@/plugins/filters',
    '@/plugins/routing',
    '@/plugins/localStorage',
    '@/plugins/bootstrapVue',
    { src: '@/plugins/lazysizes', mode: 'client' },
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Docs: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { systemvars: true }],
    // Docs: https://github.com/nuxt-community/router-module#user-content-usage
    ['@nuxtjs/router', { keepDefaultRouter: false }],
    // Docs: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Docs: https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt#user-content-api
    'cookie-universal-nuxt',
    // Docs: https://github.com/nuxt-community/style-resources-module#user-content-scss-example
    '@nuxtjs/style-resources',
    // Docs: https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // Docs: https://github.com/nuxt-community/device-module
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_bootstrap.scss',
      'bootstrap/scss/mixins/_breakpoints.scss',
    ],
  },
  /*
  ** Build configuration
  */
  buildModules: ['@nuxt/typescript-build'],
  build: {
    cache: true,
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
            },
          ],
        ]
      },
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: true,
        maxSize: 100000,
      },
    },
    extend(nuxtConfig, { isDev, isClient }) {
      if (isDev && isClient) {
        // Run ESLint on save
        nuxtConfig.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })

        // Run Stylelint on save
        nuxtConfig.plugins.push(new StylelintPlugin({
          files: '**/*.(scss|vue)',
        }))
      }
    },
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => ['script', 'style', 'font'].includes(type),
    },
    resourceHints: true,
  },
  server: {
    port: (!isProd && process.env.DEV_PORT) || 3000,
  },
}
