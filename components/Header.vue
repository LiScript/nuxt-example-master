<template>
  <div>
    <div class="mynav-container">
      <div class="logo-container" @click="gotoindex">
        <img src="../assets/img/logo_lfz.png" height="60" width="60">
      </div>
      <!-- 导航 -->
      <div class="nav-contain">
        <div class="nav">
          <div
            class="header-list"
            v-for="(item,index) in loacal"
            :key="index"
            @mouseenter="enter(index)"
            @mouseleave="leave()"
          >
            <div
              class="pad-list"
              :class="{'navhover':index==current,'navclick':index==onclick}"
              @mouseenter="twohidd(item.sonList)"
              @click="location(item.navUrl,index)"
            >
              <div>{{item.navName}}</div>
            </div>
            <div v-if="index == 0">
              <div v-show="seen&&index==current" class="sonnav-container">
                <div class="pad-area">
                  <div class="nav-cp-list">
                    <div class="nav-cp-left">
                      <div
                        v-for="(item2,index) in item.sonList"
                        :key="index"
                        class="cp-list2"
                        @mouseenter="cplistenter(index)"
                        :class="{'cphover':index==cpcurrent}"
                      >
                        {{item2.navName}}
                        <i
                          class="el-icon-arrow-right point-i"
                          :class="{'point-click':index==cpcurrent}"
                        ></i>
                        <div class="nav-cp-right" v-show="index==cpcurrent">
                          <div>
                            <div
                              v-for="(item3,index) in item2.sonList"
                              :key="index"
                              class="cp-h2-area"
                            >
                              <div
                                class="cp-list-title1"
                                @click="location(item3.navUrl,item.index)"
                              >{{item3.navName}}</div>
                              <div v-for="(item4,index) in item3.sonList" :key="index">
                                <div
                                  class="cp-list-title2"
                                  @click="location(item4.navUrl,item.index)"
                                >{{item4.navName}}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div v-show="seen&&index==current" class="sonnav-container">
                <div class="pad-area">
                  <div v-for="(item2,index) in item.sonList" :key="index" class="nav-list-pad">
                    <div
                      class="nav-list2"
                      @click="location(item2.navUrl,item.index)"
                    >{{item2.navName}}</div>
                    <div class="nav-list3-display">
                      <div v-for="(item3,index) in item2.sonList" :key="index">
                        <div
                          @click="location(item3.navUrl,item.index)"
                          class="nav-list3"
                        >{{item3.navName}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 登陆按钮区域 -->
      <div class="login-area">
        <!-- <el-button type="primary" @click="changezn()">切换中文版</el-button>
        <el-button type="primary" @click="changeen()">切换英文版</el-button>-->
        <div class="but" @click="changezn()">切换中文版</div>
        <div class="but" @click="changeen()">切换英文版</div>
        <div v-if="!tel" @click="gotologin()" class="but">登录</div>
        <div v-if="!tel" class="but_on">注册</div>
        <!-- <el-button type="primary" @click="gotologin()" v-if="!tel">点击登录</el-button> -->
        <el-dropdown v-if="tel">
          <div class="but">
            登录成功
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="logout()">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- <el-button type="primary" v-if="tel">登录成功</el-button> -->
        <div class="but" v-if="tel" @click="gotoadmin()">运营中心</div>
        <!-- <el-button type="primary" @click="logout()" v-if="tel">退出登录</el-button> -->
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import { removeToken } from '@/utils/auth'
export default {
  data() {
    return {
      seen: false, // 导航显示隐藏变量
      current: null, // 导航显示隐藏变量
      onclick: null, // 导航点击加颜色变量
      isLogin: false,
      cpcurrent: 0, // 产品列表显示隐藏变量
      userName: '',
      loacal: [
        {
          navName: this.$t('header.dgmdz'),
          navUrl: null,
          index: 0,
          sonList: [
            {
              navName: this.$t('header.qdjd'),
              navUrl: null,
              sonList: [
                {
                  navName: '物联网云盒',
                  navUrl: null
                },
                {
                  navName: '物联网网关',
                  navUrl: null
                },
                {
                  navName: '环境监控终端',
                  navUrl: null
                },
                {
                  navName: '数据采集',
                  navUrl: null
                }
              ]
            },
            {
              navName: this.$t('header.jhdz'),
              navUrl: null,
              sonList: [
                {
                  navName: '质量文档管理',
                  navUrl: null
                },
                {
                  navName: '检验程序管理',
                  navUrl: null
                },
                {
                  navName: '测量报告管理',
                  navUrl: null
                },
                {
                  navName: '计量器具管理',
                  navUrl: null
                },
                {
                  navName: 'MBD',
                  navUrl: null
                },
                {
                  navName: '检验计划编辑器',
                  navUrl: null
                },
                {
                  navName: '质量追溯',
                  navUrl: null
                }
              ]
            },
            {
              navName: this.$t('header.kfcx'),
              navUrl: null,
              sonList: [
                {
                  navName: '质量大数据',
                  navUrl: null
                },
                {
                  navName: '设备大数据',
                  navUrl: null,
                  sonList: [
                    {
                      navName: '设备监控',
                      navUrl: null
                    },
                    {
                      navName: '设备健康',
                      navUrl: null
                    },
                    {
                      navName: '预测性维护',
                      navUrl: null
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          navName: '测试中间件',
          navUrl: '/userAuth',
          index: 5
        },
        {
          navName: '图表示例',
          navUrl: '/echart',
          index: 6
        },
        {
          navName: '测试多语言',
          navUrl: '/testlang',
          index: 7
        },
        {
          navName: '小组件测试',
          navUrl: '/sometest',
          index: 7
        }
      ]
    }
  },
  methods: {
    // 切换到中文
    changezn() {
      this.$confirm('此操作将切换到英文, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          Cookies.set('language', 'zh-CN')
          this.$i18n.locale = 'zh-CN'
          this.$router.go(0)
          this.$message({
            type: 'success',
            message: '切换成功'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消切换'
          })
        })
    },
    // 切换到英文
    changeen() {
      Cookies.set('language', 'en')
      this.$i18n.locale = 'en'
      this.$router.go(0)
    },
    // 跳转首页
    gotoindex() {
      this.$router.push({ path: '/' })
      this.onclick = null
    },
    // 登出
    logout() {
      removeToken()
      this.$store.commit('REMOVE_Tel')
      this.$router.push({ path: '/' })
      this.onclick = null
    },
    // 登录
    gotologin() {
      this.$router.push({ path: '/login/login2' })
    },
    // 导航无子菜单隐藏事件
    twohidd(val) {
      if (val) {
        this.seen = true
      } else {
        this.seen = false
      }
    },
    // 导航导航鼠标选中事件
    enter(index) {
      if (this.navigationList) {
        this.seen = true
      }
      this.current = index
    },
    // 导航导航鼠标移除事件
    leave() {
      this.seen = false
      this.current = null
    },
    // 产品展示控制
    cplistenter(index) {
      this.cpcurrent = index
    },
    // 导航跳转 空链接不跳转 外站链接另起一页面  内部页面路由跳转
    location(url, index) {
      if (/^http[s]?:\/\/.*/.test(url)) {
        this.onclick = null // 跳转外链菜单不加样式
        window.open(url, '_blank')
      } else {
        if (url !== '' && url !== null) {
          this.onclick = index
          // console.log(this.onclick)
          this.$router.push({ path: url })
        }
      }
    },
    // 登录成功跳转后台
    gotoadmin() {
      this.$router.push({ path: '/admin' })
    }
  },
  // 获取vuex里面的token
  computed: {
    tel() {
      return this.$store.state.tel
    }
  }
}
</script>

<style lang="scss" scoped>
// 最外层nav
.mynav-container {
  background-color: $colorbg6;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  // 导航hover样式
  &:hover {
    background-color: $colorbg5;
  }
  // logo样式 返回首页
  .logo-container {
    position: absolute;
    cursor: pointer;
    height: 60px;
    font-size: 20px;
    color: #fff;
    line-height: 60px;
    text-align: center;
    width: 160px;
    // background: #2395af !important;
    // border-right:2px solid #fff;
    span {
      font-weight: bold;
    }
  }

  // 一级菜单区域
  .nav-contain {
    top: 60px;
    height: 60px;
    width: 100%;
    z-index: 999;
    .nav {
      padding: 5px 24px 5px 160px;
      height: 100%;
      .header-list {
        display: inline-block;
        font-size: 14px;
        // 一级菜单悬浮
        .navhover {
          border-bottom: 3px solid #fff !important;
          transition: all 0.4s ease;
        }
        // 一级菜单点击
        .navclick {
          color: $colorbg !important;
          font-weight: 500;
        }
        // 一级菜单内容样式
        .pad-list {
          padding: 18px 24px;
          font-size: 14px;
          color: #ffffff;
          line-height: 16px;
          cursor: pointer;
          border-bottom: 3px solid transparent;
        }
      }
      // 子菜单区域容器
      .sonnav-container {
        position: absolute;
        left: 0%;
        min-height: 400px;
        width: 100%;
        background: $colorbg4;
        .pad-area {
          padding: 24px 20px 60px 120px;
          // 其他的菜单样式
          .nav-list-pad {
            vertical-align: top;
            display: inline-block;
            padding: 10px 80px 10px 0px;
            // 二级菜单内容样式
            .nav-list2 {
              font-size: 14px;
              color: #fff;
              line-height: 14px;
              margin-bottom: 8px;
              font-weight: bold;
              cursor: pointer;
            }
            // 三级菜单内容样式
            .nav-list3-display {
              display: inline-flex !important;
              flex-wrap: wrap;
              flex-direction: column;
              max-height: 300px;
              .nav-list3 {
                font-size: 14px;
                color: #ffffff;
                line-height: 28px;
                cursor: pointer;
              }
            }
          }
          // 产品菜单样式
          .nav-cp-list {
            position: relative;
            // 左侧
            .nav-cp-left {
              width: 180px;
              height: 370px;
              position: absolute;
              // box-sizing: border-box;
              left: 0;
              top: 0;
              // padding: 8px 0;
              // border-right: $colorbg solid 2px;
              .point {
                position: absolute;
                top: 12px;
                right: 8px;
                color: #fff;
              }
              .cp-list2 {
                font-size: 16px;
                line-height: 66px;
                text-align: left;
                color: #fff;
                font-weight: bold;
                background: $colorbg_nav_but;
                border-bottom: 1px solid $colorbg2;
                padding-left: 12px;
                margin-right: 1px;
                cursor: pointer;
                .point-i {
                  float: right;
                  padding: 25px;
                }
                .point-click {
                  color: $colorbg_nav;
                }
              }
              .cphover {
                background: #fff;
                color: #000;
              }
            }
            // 右侧
            .nav-cp-right {
              position: absolute;
              height: 300px;
              width: 1140px;
              left: 240px;
              top: -8px;
              color: #fff;
              .cp-h2-area {
                vertical-align: top;
                display: inline-block;
                width: 200px;
                .cp-list-title1 {
                  font-size: 14px;
                  color: #fff;
                  line-height: 14px;
                  margin-bottom: 8px;
                  margin-top: 16px;
                  font-weight: bold;
                  cursor: pointer;
                  width: 50%;
                  padding-bottom: 5px;
                  border-bottom: 1px dashed #fff;
                }
                .cp-list-title2 {
                  font-size: 14px;
                  color: #ffffff;
                  line-height: 24px;
                  height: 24px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }
}
//  登陆按钮区域样式 vue-i18n
.login-area {
  top: 0px;
  height: 60px;
  position: absolute;
  right: 2%;
  cursor: pointer;
  font-size: 0;
  // 按钮样式
  .but_on {
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    background: $colorbg_nav_but;
    font-size: 14px;
    color: #fff;
    display: inline-block;
  }
  .but {
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    font-size: 14px;
    color: #fff;
    display: inline-block;
  }
}
</style>
