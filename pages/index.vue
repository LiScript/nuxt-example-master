<template>
  <div>
    <!-- <banner/> -->
    <Goodbanner/>
    <div>
      <p class="testi18n">{{ $t('home.introduction') }}</p>
    </div>

    <!-- Tabs -->
    <my-tabs
      :tabList="tabList"
      :tabIndex="tabIndex"
      :point_left="point_left"
      @changeTab="changeTab"
    >
      <keep-alive>
        <transition enter-active-class="animated fadeIn" mode="out-in">
          <component :is="currentContent"></component>
        </transition>
      </keep-alive>
    </my-tabs>
    <Mapblack/>
    <Mapwhite/>
    <NumberGrow :value="numberadd"></NumberGrow>
    <!-- 视察背景 -->
    <div class="de-container">
      <div class="fixed-bg" v-lazy:background-image="{src: bgurl}">
        <div class="sologan">
          <div class="fixed-h1-add">将质量贯穿产品全生命周期</div>
          <div class="fixed-h1-add2">重塑质量，推动以质量为核心的智能制造</div>
        </div>
      </div>
    </div>
    <Solution/>
    <Looperbgimg/>
  </div>
</template>

<script>
import Banner from '~/components/Videobanner.vue'
import Goodbanner from '~/components/banner.vue'
import Solution from '~/components/solution.vue' // banner
import NumberGrow from '~/components/number.vue' // 数字滚动
import Tabs from '~/components/tabs.vue'
import Mapblack from '~/components/map/map-black.vue'
import Mapwhite from '~/components/map/map-white.vue'
import MyTabs from '~/components/tabs.vue'
import Looperbgimg from '~/components/looperbgimg.vue'
import One from './indextabs/one.vue'
import Two from './indextabs/two.vue'
import Three from './indextabs/three.vue'
import Four from './indextabs/four.vue'
export default {
  components: {
    Banner,
    Goodbanner,
    Mapblack,
    Mapwhite,
    MyTabs,
    one: One,
    two: Two,
    three: Three,
    four: Four,
    Looperbgimg,
    Solution,
    NumberGrow
  },
  data() {
    return {
      numberadd: 0,
      activejjfa: 1,
      // tabs
      tabIndex: 0,
      bgurl: require('../assets/img/index/fixedbg.png'), // 视差图片
      currentContent: 'one',
      point_left: 140,
      tabList: [
        {
          iconssrc: 'index001', // 正常icons 515151
          iconssrchover: 'index001_hover', // hovericons ff9600
          openurl: '',
          number: 0,
          component: 'one',
          title: '一个'
        },
        {
          iconssrc: 'index002',
          iconssrchover: 'index002_hover',
          openurl: '',
          number: 1,
          component: 'two',
          title: '两个'
        },
        {
          iconssrc: 'index003',
          iconssrchover: 'index003_hover',
          openurl: '',
          number: 2,
          component: 'three',
          title: '三个'
        },
        {
          iconssrc: 'index004',
          iconssrchover: 'index004_hover',
          openurl: '',
          number: 3,
          component: 'four',
          title: '四个'
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // tabs
    changeTab: function(tab) {
      this.tabIndex = tab.number
      this.currentContent = tab.component
      this.point_left = 140 + tab.number * 300
    },
    // 滚动改变数字入参数 number
    handleScroll() {
      this.scrolled = window.scrollY
      if (this.scrolled > 1200) {
        this.numberadd = 952798
        // console.log(this.numberadd)
        // console.log(this.number)
      } else if (this.scrolled < 800 || this.scrolled > 3000) {
        this.numberadd = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.testi18n {
  font-size: 48px;
  color: red;
}

.zb {
  height: 200px;
}
.fixed-bg {
  height: 300px;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  .sologan {
    padding-top: 64px;
    .fixed-h1-add {
      font-size: 36px;
      color: #ffffff;
      text-align: center;
      margin-top: 60px;
    }
    .fixed-h1-add2 {
      font-size: 18px;
      color: #ffffff;
      padding-top: 0px;
      text-align: center;
      margin-top: 20px;
    }
  }
}
</style>
