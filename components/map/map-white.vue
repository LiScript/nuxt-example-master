<template>
    <!--这块是地图 开始-->
    <div class="map de-container">
      <div class="container">
        <div class="main-img">
          <img src="~/assets/img/index/map.png" width="100%">
          <div class="point-buling point-1">
            <div class="point-buling2">
              <div class="point-buling3"/>
            </div>
          </div>
          <div class="point-buling point-2">
            <div class="point-buling2">
              <div class="point-buling3"/>
            </div>
          </div>
          <div class="point-buling point-3">
            <div class="point-buling2">
              <div class="point-buling3"/>
            </div>
          </div>
          <div class="point-buling point-4">
            <div class="point-buling2">
              <div class="point-buling3"/>
            </div>
          </div>
          <div class="point-buling point-5">
            <div class="point-buling2">
              <div class="point-buling3"/>
            </div>
          </div>
          <div class="point-buling point-6">
            <div class="point-buling2">
              <div class="point-buling3"/>
            </div>
          </div>
          <div class="point-buling point-7">
            <div class="point-buling2">
              <div class="point-buling3"/>
            </div>
          </div>
          <div class="point-buling point-8">
            <div class="point-buling2">
              <div class="point-buling3"/>
            </div>
          </div>
          <div class="point-buling point-9">
            <div class="point-buling2">
              <div class="point-buling3"/>
            </div>
          </div>
          <div class="point-buling point-10">
            <div class="point-buling2">
              <div class="point-buling3"/>
            </div>
          </div>
          <!-- <el-row :gutter="20" class="map_title hidden-sm-and-down">
              <el-col :span="6" v-for="(item,index) in fordata" :key="index">
                <div class="t_h1">{{item.title}}</div>
                <div class="line"></div>
                <div class="t_h2"><span class="t_b">{{item.number}}</span>{{item.ppp}}</div>
              </el-col>
          </el-row>-->
        </div>
      </div>
    </div>
    <!--这块是地图 结束-->
</template>
<style lang="scss" scoped>
.map {
  background-color: #f7f8fa;
  padding: 64px 0;
  .h1-padding {
    margin-bottom: 48px;
  }
  .main-img {
    padding: 20px 0;
    width: 100%;
    position: relative;
    .point-1 {
      left: 81.89%;
      top: 22.99%;
    }
    .point-2 {
      left: 18%;
      top: 23%;
    }
    .point-3 {
      left: 10%;
      top: 21%;
    }
    .point-4 {
      left: 11%;
      top: 36%;
    }
    .point-5 {
      left: 67%;
      top: 38%;
    }
    .point-6 {
      left: 79%;
      top: 32%;
    }
    .point-7 {
      left: 94%;
      top: 73%;
    }
    .point-8 {
      left: 53%;
      top: 10%;
    }
    .point-9 {
      left: 84.5%;
      top: 24%;
    }
    .point-10 {
      left: 80.5%;
      top: 28%;
    }
    .point-buling {
      animation: sploosh 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .point-buling2 {
      animation: sploosh2 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .point-buling3 {
      animation: sploosh3 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .point-buling,
    .point-buling2,
    .point-buling3 {
      height: 10px;
      width: 10px;
      line-height: 10px;
      border-radius: 100%;
      position: absolute;
      z-index: 10;
      animation-iteration-count: infinite;
      background: transparent;
    }
  }
  .map_title {
    margin-top: 32px;
    padding-left: 110px;
    .t_h1 {
      font-size: 14px;
      color: #333333;
      line-height: 14px;
    }
    .line {
      height: 4px;
      width: 16px;
      background: #0099ff;
      margin: 10px 0;
    }
    .t_h2 {
      font-size: 14px;
      color: #333333;
      line-height: 14px;
      .t_b {
        font-size: 48px;
        color: #333333;
        line-height: 48px;
      }
    }
  }
}
/*地图动画 开始*/



@keyframes sploosh {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 153, 255, 0.2);
    background: rgba(0, 153, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 0 30px rgba(255, 220, 1, 0);
    background: rgba(255, 220, 1, 0);
  }
}

@keyframes sploosh2 {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 153, 255, 0.2);
    background: rgba(0, 153, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 0 20px rgba(0, 153, 255, 0);
    background: rgba(0, 153, 255, 0.3);
  }
}

@keyframes sploosh3 {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 153, 255, 0.2);
    background: rgba(0, 153, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(0, 153, 255, 0);
    background: rgba(0, 153, 255, 0.5);
  }
}

/*地图动画 结束*/
</style>