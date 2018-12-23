const pkg = require('./package')
const { resolve } = require('path')
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
    '~assets/css/animate.css',
    '~assets/css/common.less',
    'swiper/dist/css/swiper.css', // 轮播样式
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui', // element-ui
    '@/plugins/axios', // axios
    '@/plugins/vue-lazyload', // 懒加载
    {
      src: '~/plugins/awesome-swiper', // 轮播
      ssr: false
    },
    '~/plugins/svg-icon' // icons
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  // /*
  // ** Axios module configuration
  // */
  // axios: {
  //   prefix: '/api/',
  //   proxy: true // Can be also an object with default options
  //   // See https://github.com/nuxt-community/axios-module#options
  // },
  // proxy: {
  //   '/api/': { target: 'http://localhost:8081', pathRewrite: {'^/api/': ''} }
  // },

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
    extend(config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [resolve(__dirname, 'assets/svg')]

      // Includes /assets/svg for svg-sprite-loader
      config.module.rules.push({
        test: /\.svg$/,
        include: [resolve(__dirname, 'assets/svg')],
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]'
        }
      })
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
