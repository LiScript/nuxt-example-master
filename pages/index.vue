<template>
  <div>
    <banner/>
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
    <Looperbgimg/>
  </div>
</template>

<script>
import Banner from '~/components/Videobanner.vue'
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
    Mapblack,
    Mapwhite,
    MyTabs,
    one: One,
    two: Two,
    three: Three,
    four: Four,
    Looperbgimg
  },
  data() {
    return {
      activejjfa: 1,
      // tabs
      tabIndex: 0,
      currentContent: 'one',
      point_left: 140,
      tabList: [
        {
          iconssrc: 'weigui', // 正常icons
          iconssrchover: 'shui', // hovericons
          openurl: '',
          number: 0,
          component: 'one'
        },
        {
          iconssrc: 'tubiao',
          iconssrchover: 'weigui',
          openurl: '',
          number: 1,
          component: 'two'
        },
        {
          iconssrc: 'KPI',
          iconssrchover: 'jichu',
          openurl: '',
          number: 2,
          component: 'three'
        },
        {
          iconssrc: 'jihua',
          iconssrchover: 'yunhang',
          openurl: '',
          number: 3,
          component: 'four'
        }
      ]
    }
  },
  methods: {
    // tabs
    changeTab: function(tab) {
      this.tabIndex = tab.number
      this.currentContent = tab.component
      this.point_left = 140 + tab.number * 300
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
</style>
