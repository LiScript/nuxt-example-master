<template>
  <div>
    <Header/>
    <div class="zpContainer">
      <nuxt/>
    </div>
    <div class="page-component-up" v-show="isGoTop" @click="goTop()">
      <i class="el-icon-caret-top"></i>
    </div>
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
    if (process.browser && process.env.NODE_ENV === 'production') {
      document.oncontextmenu = e => {
        // let path = e.path
        // 解决火狐和safari兼容问题
        const path = e.path || (e.composedPath && e.composedPath())
        let isBoolean = false
        path.forEach(item => {
          if (
            item.className === 'ql-editor ql-blank' ||
            item.className === 'ql-editor'
          ) {
            isBoolean = true
          }
        })
        return isBoolean
      }
      document.onselectstart = e => {
        // let path = e.path
        // 解决火狐和safari兼容问题
        const path = e.path || (e.composedPath && e.composedPath())
        let isBoolean = false
        path.forEach(item => {
          if (
            item.className === 'ql-editor ql-blank' ||
            item.className === 'ql-editor'
          ) {
            isBoolean = true
          }
        })
        return isBoolean
      }
    }
    // 鼠标点击事件文字滚动
    var fnTextPopup = function(arr, options) {
      // arr参数是必须的
      if (!arr || !arr.length) {
        return
      }
      // 主逻辑
      var index = 0
      document.documentElement.addEventListener('click', function(event) {
        var x = event.pageX,
          y = event.pageY
        var eleText = document.createElement('span')
        eleText.className = 'text-popup'
        this.appendChild(eleText)
        if (arr[index]) {
          eleText.innerHTML = arr[index]
        } else {
          index = 0
          eleText.innerHTML = arr[0]
        }
        // 动画结束后删除自己
        eleText.addEventListener('animationend', function() {
          eleText.parentNode.removeChild(eleText)
        })
        // 位置
        eleText.style.left = x - eleText.clientWidth / 2 + 'px'
        eleText.style.top = y - eleText.clientHeight + 'px'
        // index递增
        index++
      })
    }

    fnTextPopup([
      '富强',
      '民主',
      '文明',
      '和谐',
      '自由',
      '平等',
      '公正',
      '法治',
      '爱国',
      '敬业',
      '诚信',
      '友善'
    ])
    // 鼠标点击事件文字滚动
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
.zpContainer {
  min-height: 80vh;
}
/* 鼠标点击事件文字滚动 */
.text-popup {
  animation: textPopup 1s;
  color: red;
  user-select: none;
  white-space: nowrap;
  position: absolute;
  z-index: 99;
}
@keyframes textPopup {
  0%,
  100% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  100% {
    transform: translateY(-50px);
  }
}
</style>
