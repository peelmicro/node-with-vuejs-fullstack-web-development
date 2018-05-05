
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-with-node',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxt client version for Node with React Fullstack Web Dev' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ],
    script: [
      { src: 'https://js.stripe.com/v3/' }
    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: [
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? process.env.HOST : 'http://localhost:3000',
    browserBaseURL: '/api'
  },
  env: {
    stripePublishableKey:
      process.env.STRIPE_PUBLISHABLE_KEY || 'pk_test_TAxyscASw6HzuArW1lBMAqvI'
  }
}
