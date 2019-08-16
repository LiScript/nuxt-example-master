<template>
  <div class="list container">
    <div class="h" v-for="(item,index) in list_data" :key="index">
      <img :src="`${item.list_img}`" alt="" class="list-l">
      <div class="list-c">
        <div class="ct">{{item.title}}</div>
        <div  class="cb">{{item.desc}}</div>
      </div>
      <div class="list-b">
        <div style="display: inline-block;vertical-align: middle">
          产品评分：
        </div>
        <div class="star">
          <el-rate
            v-model="item.val"
            disabled
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </div>
      </div>
      <div class="list-r">
        <p>{{item.price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    props:{
      list_data:{}
    },
  }
</script>

<style lang="scss" scoped>
  .list{
    background: #fff;
    .h{
      padding: 25px 20px;
      border-bottom: 1px solid #f3f3f3;
    }
    .list-l{
      display: inline-block;
      width: 100px;
      height: 100px;
      vertical-align: middle;
    }
    .list-c{
      display: inline-block;
      width: 42%;
      margin-right: 20px;
      margin-left: 20px;
      vertical-align: middle;
      .ct{
        font-size: 18px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 5px;
        font-weight: normal;
      }
      .cb{
        font-size: 12px;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 5px;
      }
    }
    .list-b{
      display: inline-block;
      margin-left: 5px;
      vertical-align: middle;
      width: 20%;
      .star{
        display: inline-block;
      }
    }
    .list-r{
      display: inline-block;
      margin-left: 5px;
      vertical-align: middle;
      p{
        font-size: 22px;
        color: #df4e62;
      }
    }
  }
</style>
