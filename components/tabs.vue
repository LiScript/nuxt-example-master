<template>
  <div class="de-container tabs-area">
    <el-row class="tabs">
      <el-col
        :span="6"
        v-for="(tab,index) in tabList"
        :key="index"
        class="tabs-choose"
        @click.native="changeTab(tab)"
      >
        <svg-icon
          :iconClass="tabIndex == tab.number ? tab.iconssrchover : tab.iconssrc"
          class="icons"
        />
        <div>{{tab.title}}</div>
      </el-col>
      <div class="point" :style="{left:point_left + 'px'}"></div>
    </el-row>
    <div class="tabs-container">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyTabs',
  props: {
    tabList: Array, // tabs标签信息
    tabIndex: Number, // 当前激活页面
    point_left: Number
  },
  data() {
    return {
    }
  },
  methods: {
    changeTab: function(tab) {
      this.$emit('changeTab', tab)
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-area {
  .tabs {
    width: 1200px;
    margin: 0 auto;
    .point {
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 8px solid #66FFFF;
      transition: left .3s linear;
    }
    .tabs-active {
      background: #000000;
    }
    .tabs-choose {
      cursor: pointer;
      text-align: center;
      padding: 5px 0;
      .icons {
        width: 48px;
        height: 48px;
      }
    }
  }
  .tabs-container {
    width: 100%;
    background: #f5f5f6;
    .content {
      width: 1200px;
      min-height: 300px;
      margin: 0 auto;
      overflow: hidden;
    }
  }
}
</style>
