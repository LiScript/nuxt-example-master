<template>
  <div>
    <div class="de-banner">
      <div v-swiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in srclist" :key="item.id">
            <div v-if="item.imsrc" @click="location(item.openurl)">
              <img :src="item.imsrc">
            </div>
            <div v-if="item.videosrc" @click="location(item.openurl)">
              <video
                :src="item.videosrc"
                autoplay="autoplay"
                muted
                loop="loop"
                style="width: 100%;display: block;"
              />
            </div>
          </div>
        </div>
        <!-- 左切换 -->
        <div class="swiper-button-next my-button-hidden"></div>
        <!-- 右切换 -->
        <div class="swiper-button-prev my-button-hidden"></div>
        <!-- 左右切换 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoBanner',
  data() {
    return {
      //视频图片列表
      srclist: [
        {
          videosrc: 'http://file.maker.haier.net/media/home12.mp4',
          openurl: ''
        },
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
        loop:true, // 循环播放
        initialSlide:0, // 设定初始化时slide的索引
        speed: 1000, // 切换速度
        direction : 'horizontal', // 小手掌抓取滑动
        effect : 'fade', // 切换动画
        navigation: {
          nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
          prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
        },
        pagination: {
          el: '.swiper-pagination', // 选取css
          type: 'bullets', //样式
          clickable: true //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        }
      },
    }
  },
  methods: {
    // 跳转方法判断路由和url
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
}
/* 左按钮 */
.swiper-button-prev {
  background: url('../assets/img/swiper/prev.png') !important;
  width: 56px !important;
  height: 56px !important;
  left: 34px !important;
}
</style>
<style lang="scss" scoped>
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