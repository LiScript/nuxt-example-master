<template>
  <div>
    <div class="de-banner">
      <div v-swiper:mySwiper="swiperOption" ref="mySwiper" :style="{height:bannerHeight +'px'}">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in srclist" :key="item.id">
            <div v-if="item.imsrc" @click="location(item.openurl)">
              <img :data-src="item.imsrc" class="swiper-lazy">
              <!-- 图片懒加载loading -->
              <div class="swiper-lazy-preloader"></div>
            </div>
            <div v-if="item.videosrc" @click="location(item.openurl)">
              <video
                :data-src="item.videosrc"
                autoplay="autoplay"
                muted
                loop="loop"
                style="width: 100%;display: block;"
                class="swiper-lazy"
              />
              <!-- 图片懒加载loading -->
              <div class="swiper-lazy-preloader"></div>
            </div>
          </div>
        </div>

        <div class="swiper-pagination swiper-pagination-bullets swiper-pagination-white"></div>
        <div class="swiper-button-next my-button-hidden" @click="slideNext()"></div>
        <div class="swiper-button-prev my-button-hidden" @click="slidePrev()"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoBanner',
  data() {
    return {
      bannerwidth: 1920,
      bannerHeight: 480,
      //视频图片列表
      srclist: [
        {
          videosrc: 'http://file.maker.haier.net/media/banner_wan.mp4',
          openurl: 'http://act.dev.cosmoplat.com/'
        },
        {
          videosrc: '',
          openurl: 'https://www.th-icloud.cn/'
        },
        {
          imsrc: require('../assets/video/banner-sk.gif'),
          openurl: ''
        },
        {
          videosrc: '',
          openurl: ''
        },
        {
          imsrc: require('../assets/video/bannerqqsf.gif'),
          openurl: ''
        },
        {
          videosrc: '',
          openurl: 'http://him.cosmoplat.com/'
        }
      ],
      srclist2: [
        {
          videosrc: 'http://file.maker.haier.net/media/banner_wan.mp4',
          openurl: 'http://act.dev.cosmoplat.com/'
        },
        {
          videosrc: 'http://file.maker.haier.net/media/tianhe.mp4',
          openurl: 'https://www.th-icloud.cn/'
        },
        {
          imsrc: require('../assets/video/banner-sk.gif'),
          openurl: ''
        },
        {
          videosrc: 'http://file.maker.haier.net/media/banner_r.mp4',
          openurl: ''
        },
        {
          imsrc: require('../assets/video/bannerqqsf.gif'),
          openurl: ''
        },
        {
          videosrc: 'http://file.maker.haier.net/media/banner_h.mp4',
          openurl: 'http://him.cosmoplat.com/'
        }
      ],
      swiperOption: {
        loop: true,
        initialSlide: 0, //设定初始化时slide的索引
        speed: 1000, // 切换速度
        // direction: 'horizontal', //小手掌抓取滑动
        effect: 'fade', // 切换动画
        navigation: {
          nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
          prevEl: '.swiper-button-prev' //后退按钮的css选择器或HTML元素。
        },
        pagination: {
          el: '.swiper-pagination', // 选取css
          type: 'bullets', //样式
          clickable: false //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        },
        lazy: {
          // 图片懒加载loading
          loadPrevNext: true,
          loadPrevNextAmount: 2
        }
      },
    }
  },
  create() {
    this.bannerwidth = document.documentElement.offsetWidth
    this.bannerHeight = 0.27 * this.bannerwidth
  },
  mounted() {
    // 第一次加载banner
    this.bannerLoaded()
    window.addEventListener(
      'resize',
      () => {
        this.bannerwidth = document.documentElement.offsetWidth
        this.bannerHeight = 0.27 * this.bannerwidth
      },
      false
    )
  },
  methods: {
    async bannerLoaded() {
      this.bannerwidth = document.documentElement.offsetWidth
      this.bannerHeight = 0.27 * this.bannerwidth
    },
    location(url) {
      if (/^http[s]?:\/\/.*/.test(url)) {
        window.open(url, '_blank')
      } else {
        if (url !== '' && url !== null) {
          this.$router.push({
            path: url
          })
        }
      }
    },
    // 上一个banner
    slidePrev() {
      this.srclist = this.srclist2
      this.$refs.mySwiper.swiper.slidePrev()
      this.$refs.mySwiper.swiper.params.pagination.clickable = true
      this.$refs.mySwiper.swiper.pagination.destroy()
      this.$refs.mySwiper.swiper.pagination.init()
      this.$refs.mySwiper.swiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');
    },
    // 下一个banner
    slideNext() {
      this.srclist = this.srclist2
      this.$refs.mySwiper.swiper.slideNext()
      this.$refs.mySwiper.swiper.params.pagination.clickable = true
      this.$refs.mySwiper.swiper.pagination.destroy()
      this.$refs.mySwiper.swiper.pagination.init()
      this.$refs.mySwiper.swiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');
    },
  }
}
</script>
<style scoped>
.swiper-slide {
  cursor: pointer;
}
/* 右按钮 */
.swiper-button-next {
  background: url('../assets/img/swiper/next.png') !important;
  width: 56px !important;
  height: 56px !important;
  right: 34px !important;
  cursor: pointer;
}
/* 左按钮 */
.swiper-button-prev {
  background: url('../assets/img/swiper/prev.png') !important;
  width: 56px !important;
  height: 56px !important;
  left: 34px !important;
  cursor: pointer;
}
</style>
<style lang="scss" scoped>
// @import '~swiper/dist/css/swiper.css';
.de-banner {
  .swiper-slide {
    min-height: 100px;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>