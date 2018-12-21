const pkg = require('./package')

module.exports = {
  mode: 'universal',
  env: {
    NODE_ENV: process.env.NODE_ENV
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    'element-ui/lib/theme-chalk/display.css', // 控制不同设备显示隐藏的样式
    '~assets/css/common.less',
    'swiper/dist/css/swiper.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/vue-lazyload',
    {
      src: '~/plugins/awesome-swiper',
      ssr: false
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    prefix: '/api/',
    proxy: true // Can be also an object with default options
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/api/': { target: 'http://localhost:8081', pathRewrite: {'^/api/': ''} }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extractCSS: true,
    uglify: {
      uglifyOptions: {
        compress: {
          drop_console: true // 隐藏console.log()
        }
      }
    }
  }
}
