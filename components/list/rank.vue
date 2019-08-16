<template>
  <div class="rank container">
    <div class="rank_l">排序:</div>
  <ul class="rank_r">
      <li v-for="(item,index) in rank_data" :class="{active: showIndex === index}" @click="change(index)" :key="index">
        <div class="rank_rl" :style="`background: url(${arrow}) no-repeat right center`">{{item.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'rank',
    props:{
      rank_data:{}
    },
    data(){
      return{
        showIndex:2,
        arrow: require('../../assets/img/sort_down.gif'),
      }
    },
    methods:{
      change(index){
        this.showIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*整体框的样式，位置*/
  .rank{
    background: #fff;
    border: 1px solid #eee;
    padding: 10px 15px;
    height:70px;
    margin-bottom: 10px;
    /*排序*/
    .rank_l{
      display: inline-block;
  }
    /*选项*/
    .rank_r{
      display: inline-block;
      margin-left: 5px;
      li{
        display: inline-block;
        position: relative;
        border: 1px solid #eee;
        padding: 0 3px;
        background: #fff;
        margin: 12px 5px 0 0;
        cursor: pointer;
        .rank_rl{
          height: 25px;
          line-height: 25px;
          display: inline-block;
          padding: 0 10px;
      }
    }
      /*点击效果*/
      .active{
        background: #df1738;
        .rank_rl{
          color:#fff;
          padding: 0 13px 0 7px;
      }
    }
  }
  }
</style>
