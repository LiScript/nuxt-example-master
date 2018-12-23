<template>
  <!-- 合作伙伴 -->
  <div class="shengtai">
    <div class="img-looper hidden-sm-and-down">
      <div class="bg-top"></div>
      <div class="bg-bottom"></div>
      <div class="img-sc">
          <div class="contant">内容</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.shengtai {
  .img-looper {
    overflow: hidden;
    height: 560px;
    position: relative;
    .bg-top {
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      );
      height: 130px;
      width: 100%;
      position: absolute;
      top: 0;
    }
    .bg-bottom {
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      );
      height: 130px;
      width: 100%;
      position: absolute;
      bottom: 0;
    }
    .img-sc {
      background-image: url('../assets/img/index/560_logo.png');
      background-position: center top;
      width: 100%;
      height: 100%;
      animation: mall-bg 40s linear infinite;
      font-size: 24px;
      color: #000000;
      .contant {
          width: 1200px;
          margin: 0 auto;
          padding: 100px 0;
          opacity: 0.8;
      }
    }
  }
}
/*合作伙伴动画 开始*/
@keyframes mall-bg {
  0% {
    background-position-y: 0;
  }
  100% {
    background-position-y: -608px;
  }
}
/*合作伙伴动画 结束*/
</style>
