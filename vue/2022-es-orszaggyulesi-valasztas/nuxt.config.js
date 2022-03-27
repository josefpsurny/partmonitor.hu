import questions from './content/questions_classic.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Voksmonitor 2022',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'author', name: 'author', content: 'Michal Škop, KohoVolit.eu, K-Monitor.hu, Cesko.digital' },
      { hid: "og:description", property:"og:description", content:"Voksmonitor.hu 2022."},
      { hid: "og:title", property: "og:title", content:"Voksmonitor.hu 2022"},
      { hid: "og:site_name", property:"og:site_name", content:"Voksmonitor.hu 2022"},
      { hid: "fb:app_id", property:"fb:app_id", content:"297106463778572" },
      { hid: "og:image", property:'og:image', content: "https://volebnikalkulacka.azureedge.net/senat-2016/image/bg.jpg" },
      { hid: "og:type", property:"og:type", content:"website" },
      { hid: "og:url", property:"og:url", content:"https://www.voksmonitor.hu/" },
      { hid: "apple-mobile-web-app-title", name: "apple-mobile-web-app-title", property:"apple-mobile-web-app-title", content:"Voksmonitor.hu 2022" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // https://stackoverflow.com/questions/47968256/what-is-best-way-for-including-bootstrap-css-to-nuxt-project
    "~/node_modules/bootswatch/dist/lumen/bootstrap.min.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://content.nuxtjs.org/
    '@nuxt/content',
    // https://www.npmjs.com/package/cookie-universal-nuxt?activeTab=readme
    'cookie-universal-nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'hu'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    // base: '/partmonitor.hu/vue/test-2022/'
    // base: '/hu/test-2022/'
    // base: '/'
    base: '/partmonitor.hu/'
  },
  generate: {
    routes() {
      let arr = [...Array(questions.length + 1).keys()]
      arr.shift()
      const arr1 = arr.map(x => '/question/' + x)
      return arr1
    }
  },
  // https://google-analytics.nuxtjs.org/setup/
  googleAnalytics: {
    id: 'UA-49538088-1'
  }
}
