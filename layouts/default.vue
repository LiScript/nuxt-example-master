<template>
  <div>
    <Header/>
    <div class="zpContainer">
    <nuxt/>
    </div>
     <div class="page-component-up" v-show="isGoTop" @click="goTop()"><i class="el-icon-caret-top"></i></div>
    <Footer/>
  </div>
</template>
<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
export default {
  data() {
    return {
      isGoTop: false
    }
  },
  components: {
    Footer,
    Header
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  created() {
    if ( process.browser && process.env.NODE_ENV === 'production' ) {
        document.oncontextmenu = (e) => {
          // let path = e.path
          // 解决火狐和safari兼容问题
          const path = e.path || (e.composedPath && e.composedPath());
          let isBoolean = false
          path.forEach(item => {
            if(item.className === 'ql-editor ql-blank' || item.className === 'ql-editor') {
              isBoolean = true
            }
          })
          return isBoolean
        }
        document.onselectstart = (e) => {
          // let path = e.path
          // 解决火狐和safari兼容问题
          const path = e.path || (e.composedPath && e.composedPath());
          let isBoolean = false
          path.forEach(item => {
            if(item.className === 'ql-editor ql-blank' || item.className === 'ql-editor') {
              isBoolean = true
            }
          })
          return isBoolean
        }
      }
  },
  methods: {
    goTop: function() {
      var gotoTop = function() {
        var currentPosition =
          document.documentElement.scrollTop || document.body.scrollTop
        currentPosition -= 233
        if (currentPosition > 0) {
          window.scrollTo(0, currentPosition)
        } else {
          window.scrollTo(0, 0)
          clearInterval(timer)
          timer = null
        }
      }
      var timer = setInterval(gotoTop, 50)
    },
    handleScroll() {
      this.scrolled = window.scrollY
      if (this.scrolled > 900) {
        this.isGoTop = true
      } else if (this.scrolled < 800) {
        this.isGoTop = false
      }
      if (document.documentElement.clientHeight < 700) {
        this.isGoTop = false
      }
    }
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.zpContainer{
  min-height: 80vh;
}
</style>
