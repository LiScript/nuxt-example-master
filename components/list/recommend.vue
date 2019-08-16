<template>
  <div class="recommend">
    <div class="container">
      <el-row :gutter="20">
        <el-col
          v-for="(item,index) in recommend"
          :key="index"
          :xs="12"
          :sm="6"
          :md="6"
          class="">
          <el-card shadow="hover">
            <div class="rec">
              <img :src="`${item.rec_img}`" alt="" class="rec-l">
              <div class="rec-r">
                <h3>{{item.title}}</h3>
                <p>{{item.price}}</p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recommend',
    props: {
      recommend: {}
    },
  }
</script>

<style lang="scss" scoped>
  .recommend{
    background: #6db1f5;
    padding: 20px 0;
    .rec {
      height: 80px;
    }
    .rec-l{
      display: inline-block;
      width: 80px;
      height: 80px;
      vertical-align: middle;
    }
    .rec-r{
      display: inline-block;
      margin-left: 5px;
      vertical-align: middle;
      p{
        font-size: 20px;
        color: #df4e62;
      }
    }
  }
</style>
<style>
  .recommend .el-card__body{
    padding: 15px;
  }
</style>
