<template>
  <div>
    <banner/>
    <div>
      <p class="testi18n">{{ $t('home.introduction') }}</p>
    </div>
    <div class="banner-down">
      <Looper/>
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
    <!-- 解决方案 -->
    <div class="de-container container-jjfa">
      <div>
        <div class="area-jjfa">
          <div class="box area-top container hidden-sm-and-down" id="box" v-show="activejjfa === 1">
            <span class="prev clickbut" @click="addjjfaleft">
              <i class="el-icon-d-arrow-left"/>
            </span>
            <div class="menu">
              <ul>
                <li
                  v-for="(item,index) in jjfahy"
                  :key="index"
                  :style="{background: 'url(' + item.bgimgurl + ') no-repeat center' , backgroundSize:'100% 100%'}"
                >
                  <div class="jjfa-bg">
                    <div>
                      <svg-icon :iconClass="item.imgsrc" class="icons"/>
                    </div>
                    <div class="jjfa-p1">{{item.titlep1}}</div>
                    <div class="jjfq-p2">{{item.titlep2}}</div>
                  </div>
                </li>
              </ul>
            </div>
            <span class="next clickbut" @click="addjjfaright">
              <i class="el-icon-d-arrow-right"/>
            </span>
          </div>
        </div>
      </div>
    </div>
    <Mapblack/>
    <Mapwhite/>
    <Looperbgimg/>
    <!-- 测试全局链接 -->
    <div class="zb">
      <el-button type="success" @click="test">测接口</el-button>
    </div>
  </div>
</template>

<script>
import Banner from '~/components/Videobanner.vue'
import Tabs from '~/components/tabs.vue'
import Mapblack from '~/components/map/map-black.vue'
import Mapwhite from '~/components/map/map-white.vue'
import MyTabs from '~/components/tabs.vue'
import Looper from '~/components/looper.vue'
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
    Looperbgimg,
    Looper
  },
  data() {
    return {
      activejjfa: 1,
      jjfahy: [
        {
          bgimgurl: require('../assets/img/index/hy-jd.png'),
          imgsrc: 'baobiao',
          titlep1: '家电智能制造方案',
          titlep2:
            '通过独有互联工厂模式，完成工厂高精度下的高效率，通过全方位精益排程、工业设计云、工业大数据分析和COSMO-IM等智能制造套件，助力企业提质增效，完成智能制造转型。'
        },
        {
          bgimgurl: require('../assets/img/index/hy-ny.png'),
          imgsrc: 'baojing',
          titlep1: '智慧农业方案',
          titlep2:
            '旨在通过数字化、信息化、智能化的管理手段对传统模具行业赋能，提供从用户端到生产端的数据分析服务，精准打造“质量零缺陷”、“成本最优”、“交付零延误”、“资产零流失”的模具竞争力。同时聚合模具领域关键资源，搭建模具大规模定制云平台，实现模具体验升级，为客户提供个性化定制需求。'
        },
        {
          bgimgurl: require('../assets/img/index/hy-jy.png'),
          imgsrc: 'biaoji',
          titlep1: '智能制造教育方案',
          titlep2:
            '精选的智造课程体系，助力企业智造转型，通过互联工厂整体解决方案，从不同的场景体验智能制造的魅力，提升企业和个人的智能制造水平，成为新世纪的智能制造数字化人才。'
        },
        {
          bgimgurl: require('../assets/img/index/hy-fc.png'),
          imgsrc: 'dengpaodian',
          titlep1: '房车定制方案',
          titlep2:
            '为了保持在房车的竞争优势，COSMOPlat房车采用系统整体方案，并涵盖产品和生产过程的整个生命周期，通过这些智能制造解决方案，可以提升房车产品整体质量水平，并不断贴合用户需求，提升市场竞争力。'
        },
        {
          bgimgurl: require('../assets/img/index/hy-fz.png'),
          imgsrc: 'dingwei',
          titlep1: '纺机智慧运维方案',
          titlep2:
            '纺织厂目前面临人工现场设备困难，维护成本不断增加，用户对设备的维护要求不断提升的现状，海尔 COSMOPlat与在纺机行业数十年深耕细作和具有深入工艺基础的青岛纺机强强联合、跨界赋能，联合研发了纺机 智慧运维系统。'
        }
      ],
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
    addjjfaleft: function() {
      var oBox = document.getElementById('box')
      var aSpan = oBox.getElementsByTagName('span')
      var oMenu = oBox.getElementsByTagName('div')[0]
      var oUl = oMenu.getElementsByTagName('ul')[0]
      var aLi = oUl.getElementsByTagName('li')
      var iW = 0
      for (var i = 0; i < aLi.length; i++) {
        iW += aLi[i].offsetWidth
      }
      oUl.style.width = iW + 'px'
      var iLeft = oUl.offsetLeft + 288
      iLeft >= 0 && (iLeft = 0)
      oUl.style.left = iLeft + 'px'
    },
    addjjfaright: function() {
      var oBox = document.getElementById('box')
      var aSpan = oBox.getElementsByTagName('span')
      var oMenu = oBox.getElementsByTagName('div')[0]
      var oUl = oMenu.getElementsByTagName('ul')[0]
      var aLi = oUl.getElementsByTagName('li')
      var iW = 0
      for (var i = 0; i < aLi.length; i++) {
        iW += aLi[i].offsetWidth
      }
      oUl.style.width = iW + 4 + 'px'
      var iLeft = oUl.offsetLeft - 288
      var maxLeft = oMenu.offsetWidth - oUl.offsetWidth
      iLeft <= maxLeft && (iLeft = maxLeft)
      oUl.style.left = iLeft + 'px'
    },
    test() {
      const params = {
        object: {
          language: 0,
          type: '智造资讯'
        },
        orderBy: 'date',
        pageIndex: 1,
        pageSize: 3
      }
      this.$API
        .post('api/zhizZix/list', params)
        .then(res => {
          console.log(res)
        })
        .catch(() => {
          this.loading = false
          this.$message.error('用户名或密码错误')
        })
    },
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
// @import '~assets/css/animate.css';
.banner-down {
  // background: #000000;
  // height: 200px;
}
.container-jjfa {
  background: url('../assets/img/index/jjfa-bg.png') no-repeat;
  background-size: 100% 100%;
  // 整个盒子
  .box {
    max-width: 1230px;
    width: 100%;
    overflow: hidden;
    height: 320px;
    position: relative;
    .menu {
      float: left;
      max-width: 1152px;
      width: 93%;
      overflow: hidden;
      height: 320px;
      position: relative;
    }
    ul {
      position: absolute;
      width: 1480px;
      font-size: 0;
    }
    li {
      list-style: none;
      display: inline-block;
      vertical-align: top;
      height: 320px;
      width: 288px;
    }
    .clickbut {
      float: left;
      height: 100%;
      line-height: 30px;
      font-size: 28px;
      width: 30px;
      text-align: center;
      cursor: pointer;
      color: #fff;
      padding-top: 133px;
      &:hover {
        background: #373d41;
      }
    }
  }
  // 背景样式
  .jjfa-bg {
    padding: 80px 24px 80px 24px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 320px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    .icons {
      width: 48px;
      height: 48px;
    }
    .jjfa-p1 {
      font-size: 18px;
      color: #ffffff;
      text-align: center;
      line-height: 18px;
      margin-top: 32px;
    }
    .jjfq-p2 {
      font-size: 14px;
      color: #ffffff;
      line-height: 18px;
      display: none;
      margin-top: 16px;
    }
    &:hover {
      .jjfq-p2 {
        display: block;
      }
      padding-top: 40px;
      background-color: rgba(18, 147, 253, 0.6);
    }
  }
}

.zb {
  height: 200px;
}
</style>
