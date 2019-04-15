<template>
  <div
    v-swiper:mySwiper="swiperOption"
    :style="{height:bannerHeight +'px',width:bannerwidth + 'px'}"
    ref="solution"
  >
    <div class="swiper-wrapper">
      ;
      <div
        class="swiper-slide"
        v-for="(item,index) in jjfahy"
        :key="index"
        @mouseenter="stopswiper()"
        @mouseleave="startswiper()"
      >
        <div class="jjfa-bg">
          <div>
            <svg-icon :iconClass="item.imgsrc" style="width: 32px;height: 32px;"/>
          </div>
          <div class="jjfa-p1">{{item.titlep1}}</div>
          <div class="jjfq-p2 hidden-xs-only">{{item.titlep2}}</div>
        </div>
      </div>
      <!-- <div class="swiper-slide" v-for="item in srclist" :key="item.id">
      </div>-->
    </div>
    <div class="swiper-pagination swiper-pagination-bullets swiper-pagination-white"></div>
    <div class="swiper-button-next my-button-hidden"></div>
    <div class="swiper-button-prev my-button-hidden"></div>
  </div>
</template>
<script>
export default {
  name: 'solution',
  data() {
    return {
      bannerHeight: 320,
      bannerwidth: 1200,
      jjfahy: [
        {
          imgsrc: 'dsj_normal',
          titlep1: 123123131,
          titlep2: 12312312
        },
        {
          imgsrc: 'dsj_normal',
          titlep1: 123123131,
          titlep2: 12312312
        },
        {
          imgsrc: 'dsj_normal',
          titlep1: 123123131,
          titlep2: 12312312
        },
        {
          imgsrc: 'dsj_normal',
          titlep1: 123123131,
          titlep2: 12312312
        },
        {
          imgsrc: 'dsj_normal',
          titlep1: 123123131,
          titlep2: 12312312
        }
      ],
      swiperOption: {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 12,
        autoplay: true,
        navigation: {
          nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
          prevEl: '.swiper-button-prev' //后退按钮的css选择器或HTML元素。
        },
        pagination: {
          el: '.swiper-pagination', // 选取css
          type: 'bullets', //样式
          clickable: true //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        },
        lazy: {
          // 图片懒加载loading
          loadPrevNext: true,
          loadPrevNextAmount: 2
        }
      }
    }
  },
  computed: {
    solutionSwiper() {
      // mySwiper 是要绑定到标签中的ref属性
      return this.$refs.solution.swiper
    }
  },
  methods: {
    stopswiper() {
      this.mySwiper.autoplay.stop()
    },
    startswiper() {
      this.mySwiper.autoplay.start()
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.2);
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  .jjfa-bg {
    padding: 80px 24px 80px 24px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 320px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    .jjfa-p1 {
      font-size: 18px;
      color: #ffffff;
      text-align: center;
      line-height: 22px;
      margin-top: 32px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
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
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
      }
      padding-top: 40px;
      background-color: $colorbg;
    }
  }
}
</style>
