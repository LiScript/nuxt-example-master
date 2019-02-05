<template>
  <div>
    <div class="myhover">
      <div class="logo" @click="gotoindex">
        <img src="../assets/img/logo_lfz.png" height="60" width="60">
      </div>
      <div class="mynav">
        <div class="nav-contain">
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
            <div v-show="seen&&index==current" class="nav-area">
              <div class="pad-area">
                <div v-for="(item2,index) in item.sonList" :key="index" class="nav-list-pad">
                  <div
                    class="nav-list2"
                    @click="location(item2.navUrl,item.index)"
                  >{{item2.navName}}</div>
                  <div class="nav-list-detile">
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
      <div class="i18n">
        <el-button type="primary" @click="changezn()">切换中文版</el-button>
        <el-button type="primary" @click="changeen()">切换英文版</el-button>
        <el-button type="primary" @click="gotologin()" v-if="!tel">点击登录</el-button>
        <el-button type="primary" v-if="tel" @click="gotoadmin()">登录成功</el-button>
        <el-button type="primary" @click="logout()" v-if="tel">退出登录</el-button>
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
      userName: '',
      loacal: [
        {
          navName: this.$t('header.dgmdz'),
          navUrl: '/masscustom',
          index: 0,
          sonList: [
            {
              navName: this.$t('header.qdjd'),
              navUrl: null,
              sonList: [
                {
                  navName: this.$t('header.jhdz'),
                  navUrl: '/product/micro/?productId=104'
                },
                {
                  navName: this.$t('header.kfcx'),
                  navUrl: '/product/micro/?productId=106'
                },
                {
                  navName: this.$t('header.jzyx'),
                  navUrl: '/product/micro/?productId=107'
                },
                {
                  navName: this.$t('header.mkcg'),
                  navUrl: '/product/micro/?productId=105'
                },
                {
                  navName: this.$t('header.znsc'),
                  navUrl: '/product/micro/?productId=101'
                },
                {
                  navName: this.$t('header.zhwl'),
                  navUrl: '/product/micro/?productId=110'
                },
                {
                  navName: this.$t('header.zncp'),
                  navUrl: '/product/micro/?productId=109'
                }
              ]
            }
          ]
        },
        {
          navName: 'COSMO Store',
          navUrl: 'https://market.cosmoplat.com/'
        },
        {
          navName: '开发者平台',
          navUrl: 'http://developer.dev.cosmoplat.com/',
          sonList: [
            {
              navName: '开发者中心',
              navUrl: 'https://dev.cosmoplat.com/'
            },
            {
              navName: ' 开发者社区',
              navUrl: 'http://developer.dev.cosmoplat.com/'
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
    // 导航跳转
    location(url, index) {
      if (/^http[s]?:\/\/.*/.test(url)) {
        this.onclick = null // 跳转外链菜单不加样式
        window.open(url, '_blank')
      } else {
        if (url !== '' && url !== null) {
          this.onclick = index
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
.myhover {
  background-color: rgba(51, 51, 51, 0.5);
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  &:hover {
    background-color: rgba(51, 51, 51, 1);
  }
  // logo
  .logo {
    position: absolute;
    left: 2%;
    cursor: pointer;
  }
  // vue-i18n
  .i18n {
    top: 8px;
    position: absolute;
    right: 2%;
    cursor: pointer;
  }
  .mynav {
    top: 60px;
    height: 60px;
    width: 100%;
    z-index: 999;
    .nav-contain {
      padding: 5px 24px 5px 120px;
      height: 100%;
      .header-list {
        display: inline-block;
        font-size: 14px;
        .navhover {
          border-bottom: 3px solid #09f !important;
          transition: all 0.4s ease;
        }
        .navclick {
          color: #09f !important;
        }
        .pad-list {
          padding: 18px 24px;
          font-size: 14px;
          color: #ffffff;
          line-height: 16px;
          cursor: pointer;
          border-bottom: 3px solid transparent;
        }
      }
    }
  }
  .nav-area {
    position: absolute;
    left: 0%;
    min-height: 360px;
    width: 100%;
    background: rgba(51, 51, 51, 0.85);
    .pad-area {
      padding: 24px 70px 60px 70px;
      .nav-list-pad {
        vertical-align: top;
        display: inline-block;
        padding: 10px 80px 10px 0px;
        .nav-list2 {
          font-size: 14px;
          color: #cccccc;
          line-height: 14px;
          margin-bottom: 8px;
          font-weight: bold;
          cursor: pointer;
        }
        .nav-list3 {
          font-size: 14px;
          color: #cccccc;
          line-height: 28px;
          cursor: pointer;
        }
      }
    }
  }
}

.nav-list-detile {
  display: inline-flex !important;
  flex-wrap: wrap;
  flex-direction: column;
  max-height: 300px;
}

.pad-area {
  padding-right: 0px !important;
  padding-left: 65px !important;
}
</style>
