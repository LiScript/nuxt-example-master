<template>
  <div>
    <banner/>
    <!-- 解决方案 -->
    <div class="de-container container-jjfa">
      <div>
        <div class="area-jjfa">
          <div class="box area-top container hidden-sm-and-down" id="box" v-show="activejjfa === 1">
            <span class="prev clickbut" @click="addjjfaleft">
              <i class="el-icon-d-arrow-left"/>
            </span>
            <div class="menu">
              <ul>
                <li
                  v-for="(item,index) in jjfahy"
                  :key="index"
                  :style="{background: 'url(' + item.bgimgurl + ') no-repeat center' , backgroundSize:'100% 100%'}"
                >
                  <div class="jjfa-bg">
                    <div>
                      <svg-icon :iconClass="item.imgsrc" class="icons"/>
                    </div>
                    <div class="jjfa-p1">{{item.titlep1}}</div>
                    <div class="jjfq-p2">{{item.titlep2}}</div>
                  </div>
                </li>
              </ul>
            </div>
            <span class="next clickbut" @click="addjjfaright">
              <i class="el-icon-d-arrow-right"/>
            </span>
          </div>
        </div>
      </div>
    </div>
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
    <div class="map-service">
      <div class="map-service-right">
        <div class="china-map">
          <div class="region-list postition-1">
            <div class="area-box">
              <span class="dot"></span>
              <span class="pulse delay-01"></span>
              <span class="pulse delay-02"></span>
            </div>
          </div>
          <div class="region-list active postition-2 online-node">
            <div class="area-box">
              <span class="dot"></span>
              <span class="pulse delay-06"></span>
              <span class="pulse delay-05"></span>
              <span class="pulse delay-04"></span>
            </div>
            <div class="show-regin">
              <span>四川</span>
            </div>
          </div>
          <div class="region-list postition-3">
            <div class="area-box">
              <span class="dot"></span>
              <span class="pulse delay-01"></span>
              <span class="pulse delay-02"></span>
            </div>
          </div>
          <div class="region-list waite postition-4 waite-node">
            <div class="area-box">
              <span class="dot"></span>
              <span class="pulse delay-01"></span>
              <span class="pulse delay-02"></span>
            </div>
            <div class="show-regin">
              <span>陕西</span>
            </div>
          </div>
          <div class="region-list waite postition-5 waite-node">
            <div class="area-box">
              <span class="dot"></span>
              <span class="pulse delay-01"></span>
              <span class="pulse delay-02"></span>
            </div>
            <div class="show-regin">
              <span>湖北</span>
            </div>
          </div>
          <div class="region-list active postition-6 online-node">
            <div class="area-box">
              <span class="dot"></span>
              <span class="pulse delay-06"></span>
              <span class="pulse delay-05"></span>
              <span class="pulse delay-04"></span>
            </div>
            <div class="show-regin">
              <span>广东</span>
            </div>
          </div>
          <div class="region-list active postition-13 online-node">
            <div class="area-box">
              <span class="dot"></span>
              <span class="pulse delay-04"></span>
              <span class="pulse delay-05"></span>
              <span class="pulse delay-03"></span>
            </div>
            <div class="show-regin">
              <span>内蒙古</span>
            </div>
          </div>
          <div class="region-list active postition-11 online-node">
            <div class="area-box">
              <span class="dot"></span>
              <span class="pulse delay-06"></span>
              <span class="pulse delay-05"></span>
              <span class="pulse delay-04"></span>
            </div>
            <div class="show-regin">
              <span>山东</span>
            </div>
          </div>
          <div class="region-list active postition-7 online-node">
            <div class="area-box">
              <span class="dot"></span>
              <span class="pulse delay-10"></span>
              <span class="pulse delay-09"></span>
              <span class="pulse delay-08"></span>
            </div>
            <div class="show-regin">
              <span>辽宁</span>
            </div>
          </div>
          <div class="region-list active postition-8 online-node">
            <div class="area-box">
              <span class="dot"></span>
              <span class="pulse delay-06"></span>
              <span class="pulse delay-05"></span>
              <span class="pulse delay-04"></span>
            </div>
            <div class="show-regin">
              <span>北京</span>
            </div>
          </div>
          <div class="region-list active postition-9 online-node">
            <div class="area-box">
              <span class="dot"></span>
              <span class="pulse delay-10"></span>
              <span class="pulse delay-09"></span>
              <span class="pulse delay-08"></span>
            </div>
            <div class="show-regin">
              <span>江苏</span>
            </div>
          </div>
          <div class="region-list active postition-10 online-node">
            <div class="area-box">
              <span class="dot"></span>
              <span class="pulse delay-06"></span>
              <span class="pulse delay-05"></span>
              <span class="pulse delay-04"></span>
            </div>
            <div class="show-regin">
              <span>香港</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 测试全局链接 -->
    <div class="zb">
      <el-button type="success" @click="test">成功按钮</el-button>
    </div>
  </div>
</template>

<script>
import Banner from '~/components/Videobanner.vue'
export default {
  components: {
    Banner
  },
  data() {
    return {
      activejjfa: 1,
      jjfahy: [
        {
          bgimgurl: require('../assets/img/index/hy-jd.png'),
          imgsrc: 'baobiao',
          titlep1: '家电智能制造方案',
          titlep2:
            '通过独有互联工厂模式，完成工厂高精度下的高效率，通过全方位精益排程、工业设计云、工业大数据分析和COSMO-IM等智能制造套件，助力企业提质增效，完成智能制造转型。'
        },
        {
          bgimgurl: require('../assets/img/index/hy-ny.png'),
          imgsrc: 'baojing',
          titlep1: '智慧农业方案',
          titlep2:
            '旨在通过数字化、信息化、智能化的管理手段对传统模具行业赋能，提供从用户端到生产端的数据分析服务，精准打造“质量零缺陷”、“成本最优”、“交付零延误”、“资产零流失”的模具竞争力。同时聚合模具领域关键资源，搭建模具大规模定制云平台，实现模具体验升级，为客户提供个性化定制需求。'
        },
        {
          bgimgurl: require('../assets/img/index/hy-jy.png'),
          imgsrc: 'biaoji',
          titlep1: '智能制造教育方案',
          titlep2:
            '精选的智造课程体系，助力企业智造转型，通过互联工厂整体解决方案，从不同的场景体验智能制造的魅力，提升企业和个人的智能制造水平，成为新世纪的智能制造数字化人才。'
        },
        {
          bgimgurl: require('../assets/img/index/hy-fc.png'),
          imgsrc: 'dengpaodian',
          titlep1: '房车定制方案',
          titlep2:
            '为了保持在房车的竞争优势，COSMOPlat房车采用系统整体方案，并涵盖产品和生产过程的整个生命周期，通过这些智能制造解决方案，可以提升房车产品整体质量水平，并不断贴合用户需求，提升市场竞争力。'
        },
        {
          bgimgurl: require('../assets/img/index/hy-fz.png'),
          imgsrc: 'dingwei',
          titlep1: '纺机智慧运维方案',
          titlep2:
            '纺织厂目前面临人工现场设备困难，维护成本不断增加，用户对设备的维护要求不断提升的现状，海尔 COSMOPlat与在纺机行业数十年深耕细作和具有深入工艺基础的青岛纺机强强联合、跨界赋能，联合研发了纺机 智慧运维系统。'
        }
      ]
    }
  },
  methods: {
    addjjfaleft: function() {
      var oBox = document.getElementById('box')
      var aSpan = oBox.getElementsByTagName('span')
      var oMenu = oBox.getElementsByTagName('div')[0]
      var oUl = oMenu.getElementsByTagName('ul')[0]
      var aLi = oUl.getElementsByTagName('li')
      var iW = 0
      for (var i = 0; i < aLi.length; i++) {
        iW += aLi[i].offsetWidth
      }
      oUl.style.width = iW + 'px'
      var iLeft = oUl.offsetLeft + 288
      iLeft >= 0 && (iLeft = 0)
      oUl.style.left = iLeft + 'px'
    },
    addjjfaright: function() {
      var oBox = document.getElementById('box')
      var aSpan = oBox.getElementsByTagName('span')
      var oMenu = oBox.getElementsByTagName('div')[0]
      var oUl = oMenu.getElementsByTagName('ul')[0]
      var aLi = oUl.getElementsByTagName('li')
      var iW = 0
      for (var i = 0; i < aLi.length; i++) {
        iW += aLi[i].offsetWidth
      }
      oUl.style.width = iW + 4 + 'px'
      var iLeft = oUl.offsetLeft - 288
      var maxLeft = oMenu.offsetWidth - oUl.offsetWidth
      iLeft <= maxLeft && (iLeft = maxLeft)
      oUl.style.left = iLeft + 'px'
    },
    test() {
      const params = {
        object: {
          language: 0,
          type: '智造资讯'
        },
        orderBy: 'date',
        pageIndex: 1,
        pageSize: 3
      }
      this.$API
        .post('api/zhizZix/list', params)
        .then(res => {
          console.log(res)
        })
        .catch(() => {
          this.loading = false
          this.$message.error('用户名或密码错误')
        })
      // this.$alert('这是一段内容', '标题名称', {
      //     confirmButtonText: '确定',
      //     callback: action => {
      //       this.$message({
      //         type: 'info',
      //         message: this.$baseUrl
      //       });
      //     }
      //   });
    }
  }
}
</script>

<style lang="scss" scoped>
.container-jjfa {
  background: url('../assets/img/index/jjfa-bg.png') no-repeat;
  background-size: 100% 100%;
  // 整个盒子
  .box {
    max-width: 1230px;
    width: 100%;
    overflow: hidden;
    height: 320px;
    position: relative;
    .menu {
      float: left;
      max-width: 1152px;
      width: 93%;
      overflow: hidden;
      height: 320px;
      position: relative;
    }
    ul {
      position: absolute;
      width: 1480px;
      font-size: 0;
    }
    li {
      list-style: none;
      display: inline-block;
      vertical-align: top;
      height: 320px;
      width: 288px;
    }
    .clickbut {
      float: left;
      height: 100%;
      line-height: 30px;
      font-size: 28px;
      width: 30px;
      text-align: center;
      cursor: pointer;
      color: #fff;
      padding-top: 133px;
      &:hover {
        background: #373d41;
      }
    }
  }
  // 背景样式
  .jjfa-bg {
    padding: 80px 24px 80px 24px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 320px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    .icons {
      width: 48px;
      height: 48px;
    }
    .jjfa-p1 {
      font-size: 18px;
      color: #ffffff;
      text-align: center;
      line-height: 18px;
      margin-top: 32px;
    }
    .jjfq-p2 {
      font-size: 14px;
      color: #ffffff;
      line-height: 18px;
      display: none;
      margin-top: 16px;
    }
    &:hover {
      .jjfq-p2 {
        display: block;
      }
      padding-top: 40px;
      background-color: rgba(18, 147, 253, 0.6);
    }
  }
}
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
.zb {
  height: 200px;
}
/*地图动画 开始*/

// 地图2
.map-service {
  position: relative;
  height: 760px;
  background: url('../assets/img/index/map_balck_whole_bg.jpg') center no-repeat;
  .map-service-right {
    margin-left: 414px;
    padding-top: 60px;
    .china-map {
      width: 748px;
      height: 618px;
      background: url('../assets/img/index/map_black_bg.png') center no-repeat;
      position: relative;
    }
  }
}

.region-list {
  position: absolute;
  left: 0;
  top: 0;
}


.area-box .dot {
  position: absolute;
  left: 0;
  width: 10px;
  height: 10px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background: #a2a9b4;
  opacity: 1;
  filter: alpha(opacity=100);
}
.area-box .pulse {
  position: absolute;
  top: -28px;
  left: -28px;
  height: 66px;
  width: 66px;
  border: 2px solid #b7b7b7;
  border-radius: 48px;
  box-shadow: 0 0 4px #82878f, 0 0 10px #82878f inset;
  opacity: 0.12;
  filter: alpha(opacity=0);
  animation: warn 2s ease-out both;
  animation-iteration-count: infinite;
  background: 0 0;
}
.area-box .delay-01 {
  animation-delay: 0;
}
.area-box .delay-02 {
  animation-delay: 0.4s;
}
.area-box .delay-03 {
  animation-delay: 0.8s;
}
.area-box .delay-04 {
  animation-delay: 1.2s;
}
.area-box .delay-05 {
  animation-delay: 1.6s;
}
.area-box .delay-06 {
  animation-delay: 2s;
}
.area-box .delay-07 {
  animation-delay: 2.4s;
}
.area-box .delay-08 {
  animation-delay: -0.4s;
}
.area-box .delay-09 {
  animation-delay: -0.8s;
}
.area-box .delay-10 {
  animation-delay: -1.2s;
}
.area-box .delay-11 {
  animation-delay: 4s;
}
.region-list.active .area-box .dot {
  background: #009fd9;
}
.region-list.active .area-box .pulse {
  border-color: #009fd9;
  top: -39px;
  left: -39px;
  height: 88px;
  width: 88px;
  box-shadow: 0 0 12px #0080d9, 0 0 20px #0080d9 inset;
}
.region-list.waite .area-box .dot {
  background: #f90;
}
.region-list.waite .area-box .pulse {
  border-color: #f90;
}
.show-regin {
  position: absolute;
  left: 2px;
  height: 0;
  top: 0;
  width: 11px;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
.online-node .show-regin,
.region-list:hover .show-regin,
.underline-node .show-regin,
.waite-node .show-regin {
  height: 127px;
  opacity: 1;
}
.show-regin span {
  width: 80px;
  position: absolute;
  left: 8px;
  top: -11px;
  padding: 6px 10px;
  font-size: 14px;
  color: #ccc;
  border-radius: 2px;
  text-align: center;
  white-space: nowrap;
}
.postition-10 .show-regin span {
  left: 0;
}
.postition-6 .show-regin span {
  left: -72px;
}
.area-box {
  z-index: 77;
}
.show-regin {
  z-index: 66;
}
.region-list.active .show-regin span {
  position: relative;
  color: #ccc;
}
.region-list.waite .show-regin span {
  color: #ccc;
}
.postition-1 {
  left: 302px;
  top: 308px;
}
.postition-2 {
  left: 401px;
  top: 403px;
}
.postition-3 {
  left: 358px;
  top: 516px;
}
.postition-4 {
  left: 473px;
  top: 348px;
}
.postition-5 {
  left: 526px;
  top: 394px;
}
.postition-6 {
  left: 526px;
  top: 515px;
}
.postition-7 {
  left: 652px;
  top: 200px;
}
.postition-7.region-list.active .area-box .pulse {
  top: -50px;
  left: -50px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
}
.postition-8 {
  left: 559px;
  top: 229px;
}
.postition-9 {
  left: 637px;
  top: 371px;
}
.postition-9.region-list.active .area-box .pulse {
  top: -50px;
  left: -50px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
}
.postition-10 {
  left: 554px;
  top: 539px;
}
.postition-11 {
  left: 604px;
  top: 300px;
}
.postition-13 {
  left: 470px;
  top: 250px;
}
.douhao {
  width: 0;
}
// ditu2

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
/*地图动画2 开始*/
@keyframes warn {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
/*地图动画2 结束*/
</style>
