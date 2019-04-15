<template>
  <div class="de-banner">
    <div class="banner">
      <div v-swiper:mySwiper2="swiperOption" ref="banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in bannerlist" :key="index">
            <img :src="item.bannersrc">
            <div class="detail">
              <h3>{{item.bannerh1}}</h3>
              <p>
                <span>{{item.bannerh2}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerlist: [
        {
          bannersrc: require('../assets/img/swiper/slide2.png'),
          bannerh1: 'Poli加油',
          bannerh2:
            '你的人生永远不会辜负你的，那些转错的弯，那些走错的路，那些流下的泪水，那些留下的伤痕，全都会让你成为独一无二的自己。'
        },
        {
          bannersrc: require('../assets/img/swiper/slide3.png'),
          bannerh1: 'Poli加油',
          bannerh2:
            '你所羡慕的一切，背后藏着多少不为人知的心酸与努力。那一切，并非突如其来，全都是早有准备。'
        },
        {
          bannersrc: require('../assets/img/swiper/slide4.png'),
          bannerh1: 'Poli',
          bannerh2:
            '人生不怕起点低，就怕没追求；不怕走得慢，就怕走错路；不怕不如意，就怕想不通。与其羡慕别人，不如做好自己。'
        }
      ],
      swiperOption: {
        loop: true,
        speed: 500,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        // autoplayDisableOnInteraction: false,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination', // 选取css
          type: 'bullets', //样式
          clickable: true //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        },
        on: {
          slideChangeTransitionStart: function() {
            const trList = [
              'leftUp',
              'moveRight',
              'moveDown',
              'centerBig',
              'rightDownBig'
            ]
            const nextSlide = this.slides.eq(this.activeIndex)
            nextSlide.addClass(trList[Math.floor(Math.random() * 5)])
          },
          slideChangeTransitionEnd: function() {
            const prevSlide = this.slides[this.previousIndex]
            prevSlide.className = 'swiper-slide'
          }
        }
      }
    }
  },
  computed: {
    mySwiper() {
      // mySwiper 是要绑定到标签中的ref属性
      return this.$refs.banner.swiper
    }
  }
}
</script>
<style>
/* 按钮样式 等待调整 */
.swiper-pagination-bullet {
  width: 20px !important;
  height: 20px !important;
  display: inline-block !important;
  border-radius: 100% !important;
  background: #fff !important;
  margin: 0 5px !important;
}
.swiper-pagination-bullets {
  bottom: 30px !important;
  left: 36% !important;
}
</style>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 520px;
  overflow: hidden;
  position: relative;
  .swiper-container {
    width: 100%;
    height: 520px;
    position: absolute;
    .swiper-slide {
      img {
        animation-duration: 5s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        -webkit-animation-duration: 5s;
        -webkit-animation-timing-function: linear;
        -webkit-animation-fill-mode: forwards;
      }
      .detail {
        height: 90px;
        background: rgba(0, 0, 0, 0.7);
        position: absolute;
        width: 100%;
        bottom: 0;
        color: #fff;
        opacity: 0;
        transition: opacity 0.3s 0.3s;
        p {
          width: 950px;
          margin: 5px auto 0;
          span {
            width: 650px;
            display: block;
          }
        }
        h3 {
          width: 950px;
          margin: 15px auto 0;
        }
      }
    }
    .swiper-slide-active {
      .detail {
        opacity: 1;
      }
    }
  }
}

/**/
.effect1 img {
  transform: scale(1.25, 1.25) translate(10%, 10%);
  transform: scale(1.1, 1.1) translate(4.545%, 4.545%);
  /*tr     =    (sc-1)/2sc*100%              */
  /* --1.25       0.25/2.5*100%=10%          */
}

.leftUp img {
  animation-name: leftUp;
}
@keyframes leftUp {
  0% {
    transform: scale(1.1, 1.1) translate(4.545%, 4.545%);
  }
  100% {
    transform: scale(1.1, 1.1) translate(-4.545%, -4.545%);
  }
}

.moveRight img {
  animation-name: moveRight;
}
@keyframes moveRight {
  0% {
    transform: scale(1.1, 1.1) translate(-4.545%, 0);
  }
  100% {
    transform: scale(1.1, 1.1) translate(4.545%, 0);
  }
}

.moveDown img {
  animation-name: moveDown;
}
@keyframes moveDown {
  0% {
    transform: scale(1.1, 1.1) translate(0, -4.545%);
  }
  100% {
    transform: scale(1.1, 1.1) translate(0, 4.545%);
  }
}

.centerBig img {
  animation-name: centerBig;
}
@keyframes centerBig {
  100% {
    transform: scale(1.1, 1.1);
  }
}

.rightDownBig img {
  animation-name: rightDownBig;
}
@keyframes rightDownBig {
  100% {
    transform: scale(1.1, 1.1) translate(4%, 4%);
  }
}
</style>
