<template>
  <div>
    <div class="bar" id="fixedBar" :class="{ fixedBar: isFixed }">
      <a
        rel="external nofollow"
        @click="goto('#anchor-'+index)"
        v-for="(item,index) in 10"
        :key="index"
        class="leeft"
      >{{index}}</a>
    </div>
    <div :id="'anchor-'+index" class="item" v-for="(item,index) in 10" :key="index">{{index}}</div>
  </div>
</template>
<script>
export default {
  layout: 'base',
  // middleware: 'userAuth',
  data() {
    return {
      isFixed: false, // bar浮动
      offsetTop: 0, // 触发bar浮动的阈值
    }
  },
  mounted() {
    // 设置bar浮动阈值为 #fixedBar 至页面顶部的距离
    this.offsetTop = document.querySelector('#fixedBar').offsetTop
    // 开启滚动监听
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    goto(selector) {
      var anchor = this.$el.querySelector(selector)
      document.documentElement.scrollTop = anchor.offsetTop
    },
    // 滚动监听 滚动触发的效果写在这里
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop

      if (scrollTop >= this.offsetTop) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll) // 离开页面 关闭监听 不然会报错
  }
}
</script>
<style lang="scss" scoped>
.bar {
  width: 100%;
  height: 40px;
  background: #f0f3f6;
  margin-top: 50px;
  .leeft {
    padding: 10px 20px;
    font-size: 20px;
    line-height: 20px;
    display: inline-block;
    cursor: pointer;
  }
}

.item {
  width: 100%;
  height: 222px;
  line-height: 222px;
  text-align: center;
}
.fixedBar {
  position: fixed;
  top: 0px;
  margin-top: 0px !important;
  z-index: 999;
  width: 100%;
  height: 40px;
  background: #f6f6f6;
}
</style>