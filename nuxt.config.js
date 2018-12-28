const {
  resolve
} = require('path')
module.exports = {
  mode: 'spa',
  env: {
    NODE_ENV: process.env.NODE_ENV
  },
  /*
   ** Headers of the page
   */
  head: {
    title: '李方洲的模板',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: '李方洲的模板',
        name: '李方洲的模板',
        content: '李方洲的模板'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  loading: {
    color: '#fff'
  },
  css: [
    'element-ui/lib/theme-chalk/display.css', // 控制不同设备显示隐藏的样式
    '~assets/css/animate.css',
    '~assets/css/common.less',
    'swiper/dist/css/swiper.css', // 轮播样式
  ],
  plugins: [
    '@/plugins/element-ui', // element-ui
    '@/plugins/axios', // axios
    '@/plugins/vue-lazyload', // 懒加载
    {
      src: '~/plugins/awesome-swiper', // 轮播
      ssr: false
    },
    '~/plugins/svg-icon', // icons
    '~/plugins/i18n.js' // 国家化
  ],
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader', // eslint暂时关闭，很烦人
          exclude: /(node_modules)/
        })
      }
    },
    extend(config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [resolve(__dirname, 'assets/svg')] // svg组件
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
