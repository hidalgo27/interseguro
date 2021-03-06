const pkg = require('./package')
require('dotenv').config()

const SentryWebpackPlugin = require("@sentry/webpack-plugin");

module.exports = {
  //Prod
  /*
  BASE_URL      =     https://www.interseguro.pe/
  API_BASE_URL  =     https://www.interseguro.pe/vehicular-api/
  CULQI_PK      =     pk_live_mrWwATMNEg6JuUVG
  CULQI_URL     =     https://www.interseguro.pe/vehicular/cotiza/como-pagar
  API_BASE_URL_REMARKETING = https://www.interseguro.pe/
 */

  //Test
  /*
  BASE_URL      =     https://test.interseguro.pe/
  API_BASE_URL  =     https://test.interseguro.pe/vehicular-api/
  CULQI_PK      =     pk_test_RrlEyfOK587sZBN0
  CULQI_URL     =     https://test.interseguro.pe/vehicular/cotiza/como-pagar
  API_BASE_URL_REMARKETING = https://test.interseguro.pe/
 */

// BASE_URL      =     https://dev.interseguro.pe/
// API_BASE_URL  =     https://dev.interseguro.pe/vehicular-api/
// CULQI_PK      =     pk_test_RrlEyfOK587sZBN0
// CULQI_URL     =     https://dev.interseguro.pe/vehicular/cotiza/como-pagar
// API_BASE_URL_REMARKETING =  https://dev.interseguro.pe/

// NODE_ENV      =     'test'
// BASE_URL      =     http://localhost:3000/
// API_BASE_URL  =     http://35.230.0.222:8080/
// CULQI_PK      =     pk_test_RrlEyfOK587sZBN0
// CULQI_URL     =     http://localhost:8080/cotiza/como-pagar

// API_BASE_URL_REMARKETING = http://10.138.0.2:8001/
  //Server midleware
  mode: 'universal',
  router: {
    base: '/vehicular/'
  },
  head: {
    title: 'Seguro Vehicular | Interseguro',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1, maximum-scale=6, minimum-scale=1' },
      { hid: 'description', name: 'description', content: "¿Qué cubre el Seguro Vehicular? Te cubrimos en todo el Perú. Cotiza Online, desde $12 mensuales. Compra aquí tu seguro peru. " },
      { hid: 'keywords', name: 'keywords', content: 'Seguro Vehicular / Seguro de auto / Seguro Vehicular Peru' },
      { hid: 'author', name: 'author', content: 'Seguro vehicular | Interseguro' },
      { hid: 'copyright', name: 'copyright', content: 'Seguro vehicular | Interseguro' },
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#00aba9' },
      { hid: 'theme-color', name: 'theme-color', content: '#ffffff' },
      //Facebook

      { hid: 'fb:og:type', property: 'og:type', content: 'seguros' },
      { hid: 'fb:og:type', property: 'og:locale', content: 'es_PE' },

      { hid: 'fb:og:site_name', property: 'og:site_name', content: 'Seguro Vehicular | Interseguro' },
      { hid: 'fb:og:url', property: 'og:url', content: 'https://www.interseguro.pe/vehicular/' },
      { hid: 'fb:og:image:width', property: 'og:image:width', content: '800' },
      { hid: 'fb:og:image:height', property: 'og:image:height', content: '418' }
    ],
    // link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://www.interseguro.pe/vehicular/interseguro.ico' }],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', href: 'favicon/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: 'favicon/favicon-16x16.png' },
      { rel: 'manifest', href: 'favicon/site.webmanifest' },
      { rel: 'mask-icon', color: '#0056b3', href: 'favicon/safari-pinned-tab.svg' }
    ],
  },

  loading: { color: '#fff' },
  css: ['@/assets/css/main.scss'],
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    'vue-sweetalert2/nuxt',
  ],
  plugins: [
    '~/plugins/bootstrap.js',
    '~/plugins/vuelidate.js',
    '~/plugins/eventBus.js',

    { src: '~/plugins/inactividad.js', ssr: false },
    { src: '~/plugins/vuejs-datepicker.js', ssr: false },
    { src: '~plugins/vue-carousel.js', sync: false },
    { src: '~plugins/vue-slide.js', sync: false },
    { src: '~plugins/vue-tabs.js', ssr: false },
    { src: '~plugins/vue-tab.js', ssr: false },
    { src: '~/plugins/localStorage.js', ssr: false },
    { src: '~plugins/vue-cliploader.js', ssr: false },
    { src: '~plugins/clipboard.js', ssr: false },
    { src: '~plugins/hotjar.js', ssr: false },
    { src: '~plugins/chat.js', ssr: false },
    // { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/zepto.js', ssr: false },
    // { src: '~plugins/bing.js', ssr: false },
    // { src: '~/plugins/sentry.js', ssr: false },

  ],
  axios: {
    baseURL: process.env.API_BASE_URL,
    browserBaseURL: process.env.API_BASE_URL,
    credentials: false
  },

  build: {
    extend(config, ctx) {
        // config.output.publicPath = 'https://cdn.interseguro.pe/vehicular/_nuxt/',
        config.module.rules.push(
          {
            test: /\.(pdf|docx)$/,
            use: [ { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: './assets/images/' }} ]
          }
        )
    }
  },
  env: {

    environment: process.env.ENVIRONMENT,
    URL: process.env.BASE_URL,
    baseURL: process.env.API_BASE_URL,
    culqiPK: process.env.CULQI_PK,
    culqiURL: process.env.CULQI_URL,
    url_remarketing: process.env.API_BASE_URL_REMARKETING
  },
  configureWebpack: {
    plugins: [
      new SentryWebpackPlugin({
        // sentry-cli configuration
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: "interseguro",
        project: "interseguro-vehicular",

        // webpack specific configuration
        include: ".",
        ignore: ["node_modules", "webpack.config.js"],
      }),
    ],
  },
}
