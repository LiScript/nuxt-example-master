<template>
  <div>
    <div class="swiper-container" v-swiper="swiperOption" ref="mySwiper">
      <div class="swiper-wrapper" @mousemove="mousemove()" @mouseout="mouseout()">
        <div
          class="swiper-slide"
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
        </div>
      </div>
      <!-- 左切换 -->
      <div class="swiper-button-next my-button-hidden"></div>
      <!-- 右切换 -->
      <div class="swiper-button-prev my-button-hidden"></div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <div>
      <el-button type="success" @click="test">成功按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true, // 循环播放
        slidesPerView: 3,
        spaceBetween: 30,
        notNextTick: true,
        navigation: {
          nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
          prevEl: '.swiper-button-prev' //后退按钮的css选择器或HTML元素。
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
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
      ]
    }
  },
  methods: {
    mousemove() {
      this.$refs.mySwiper.swiper.autoplay.stop()
    },
    mouseout() {
      this.$refs.mySwiper.swiper.autoplay.start()
    },
    test() {
      console.log(this.$refs.mySwiper.swiper.autoplay)
    }
  },
  mounted() {
    //鼠标覆盖停止自动切换 有问题 页面多容器混淆
    // this.$refs.mySwiper.swiper.el.onmouseover = function() {
    //   this.swiper.autoplay.stop()
    // }
    //鼠标离开开始自动切换
    // this.$refs.mySwiper.swiper.el.onmouseout = function() {
    //   this.swiper.autoplay.start()
    // }
  }
}
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 1200px;
  height: 320px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  width: 288px !important;
  justify-content: center;
  align-items: center;
  // margin-right: 0px !important;
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
</style>

