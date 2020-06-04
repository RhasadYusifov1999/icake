const bodyParser = require('body-parser');
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {href: 'https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap', rel: "stylesheet"}
    ]
  },


  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],


  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: "http://localhost:3000/api"
  },

  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
    }
  },
  serverMiddleware: [
    bodyParser.json({ limit: '5000mb' }),
    "~/api"
  ]
}
