<template>
  <div>
    <div class="myhover">
      <div class="logo">
        <nuxt-link to="/">
        <img src="../assets/img/logo_lfz.png" height="60" width="60">
        </nuxt-link>
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
              :class="{navhover:seen&&index==current}"
              @mouseenter="twohidd(item.sonList)"
              @click="location(item.navUrl)"
            >
              <div>{{item.navName}}</div>
            </div>
            <div v-show="seen&&index==current" class="nav-area">
              <div class="pad-area">
                <div v-for="(item2,index) in item.sonList" :key="index" class="nav-list-pad">
                  <div class="nav-list2" @click="location(item2.navUrl)">{{item2.navName}}</div>
                  <div class="nav-list-detile">
                    <div v-for="(item3,index) in item2.sonList" :key="index">
                      <div @click="location(item3.navUrl)" class="nav-list3">{{item3.navName}}</div>
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
</template>

<script>
export default {
  data() {
    return {
      seen: false,
      current: 0,
      navigationList: [],
      isLogin: false,
      userName: '',
      loacal: [
        {
          navName: '大规模定制',
          navUrl: '/masscustom',
          sonList: [
            {
              navName: '七大节点',
              navUrl: null,
              sonList: [
                {
                  navName: '交互定制',
                  navUrl: '/product/micro/?productId=104'
                },
                {
                  navName: '开放创新',
                  navUrl: '/product/micro/?productId=106'
                },
                {
                  navName: '精准营销',
                  navUrl: '/product/micro/?productId=107'
                },
                {
                  navName: '模块采购',
                  navUrl: '/product/micro/?productId=105'
                },
                {
                  navName: '智能生产',
                  navUrl: '/product/micro/?productId=101'
                },
                {
                  navName: '智慧物流',
                  navUrl: '/product/micro/?productId=110'
                },
                {
                  navName: '智能产品',
                  navUrl: '/product/micro/?productId=109'
                }
              ]
            }
          ]
        },
        {
          navName: '产品',
          navUrl: '/product',
          sonList: [
            {
              navName: '市场营销',
              navUrl: null,
              sonList: [
                {
                  navName: '社群交互中心',
                  navUrl: '/product/micro/?productId=39',
                  sonList: []
                },
                {
                  navName: '交易交付系统',
                  navUrl: '/product/micro/?productId=50',
                  sonList: []
                },
                {
                  navName: '订单处理中台',
                  navUrl: '/product/micro/?productId=31',
                  sonList: []
                },
                {
                  navName: '业务运营中心',
                  navUrl: '/product/micro/?productId=27',
                  sonList: []
                },
                {
                  navName: '多任务协同中心',
                  navUrl: '/product/micro/?productId=47',
                  sonList: []
                },
                {
                  navName: '情感感知引擎',
                  navUrl: '/product/micro/?productId=43',
                  sonList: []
                },
                {
                  navName: '多场景社群交互矩阵',
                  navUrl: '/product/micro/?productId=41',
                  sonList: []
                },
                {
                  navName: '流程及系统勾稽关系',
                  navUrl: '/product/micro/?productId=28',
                  sonList: []
                },
                {
                  navName: '用户忠诚度管理器',
                  navUrl: '/product/micro/?productId=46',
                  sonList: []
                }
              ]
            },
            {
              navName: '研发设计',
              navUrl: null,
              sonList: [
                {
                  navName: '开放创新',
                  navUrl: '/product/micro/?productId=40',
                  sonList: []
                },
                {
                  navName: '众创孵化中心',
                  navUrl: '/product/micro/?productId=45',
                  sonList: []
                },
                {
                  navName: '天河仿真云',
                  navUrl: '/product/micro/?productId=134',
                  sonList: []
                }
              ]
            },
            {
              navName: '生产制造',
              navUrl: null,
              sonList: [
                {
                  navName: '能源管理系统',
                  navUrl: '/product/micro/?productId=29',
                  sonList: []
                },
                {
                  navName: '数字化生产制造执行系统',
                  navUrl: '/product/micro/?productId=42',
                  sonList: []
                },
                {
                  navName: '智能排产解决方案',
                  navUrl: '/product/micro/?productId=44',
                  sonList: []
                },
                {
                  navName: '智能仓储管理系统',
                  navUrl: '/product/micro/?productId=48',
                  sonList: []
                },
                {
                  navName: '实验室信息管理系统',
                  navUrl: '/product/micro/?productId=51',
                  sonList: []
                },
                {
                  navName: '物料采购平台',
                  navUrl: '/product/micro/?productId=52',
                  sonList: []
                },
                {
                  navName: '生产过程控制与调度自动化系统',
                  navUrl: '/product/micro/?productId=54',
                  sonList: []
                },
                {
                  navName: 'COSMO-Line',
                  navUrl: '/product/micro/?productId=56',
                  sonList: []
                }
              ]
            },
            {
              navName: '仓储物流',
              navUrl: null,
              sonList: [
                {
                  navName: '物流商务管理系统',
                  navUrl: '/product/micro/?productId=57',
                  sonList: []
                },
                {
                  navName: '仓库管理系统',
                  navUrl: '/product/micro/?productId=58',
                  sonList: []
                },
                {
                  navName: 'COSMO-TMS',
                  navUrl: '/product/micro/?productId=59',
                  sonList: []
                },
                {
                  navName: '物流大数据',
                  navUrl: '/product/micro/?productId=60',
                  sonList: []
                }
              ]
            },
            {
              navName: '用户服务',
              navUrl: null,
              sonList: [
                {
                  navName: '呼叫中心',
                  navUrl: '/product/micro/?productId=61',
                  sonList: []
                },
                {
                  navName: '用户体验即时并联系统',
                  navUrl: '/product/micro/?productId=62',
                  sonList: []
                }
              ]
            },
            {
              navName: '企业管理',
              navUrl: null,
              sonList: [
                {
                  navName: 'HR-创吧',
                  navUrl: '/product/micro/?productId=67',
                  sonList: []
                },
                {
                  navName: 'COSMO-FIN',
                  navUrl: '/product/micro/?productId=72',
                  sonList: []
                },
                {
                  navName: 'COSMO-EAM',
                  navUrl: '/product/micro/?productId=70',
                  sonList: []
                }
              ]
            },
            {
              navName: '智慧生活方案',
              navUrl: null,
              sonList: [
                {
                  navName: 'UHomeOS',
                  navUrl: '/product/micro/?productId=117',
                  sonList: []
                },
                {
                  navName: 'U+互联互通',
                  navUrl: '/product/micro/?productId=116',
                  sonList: []
                },
                {
                  navName: 'U+大数据',
                  navUrl: '/product/micro/?productId=115',
                  sonList: []
                },
                {
                  navName: 'U+人工智能',
                  navUrl: '/product/micro/?productId=37',
                  sonList: []
                },
                {
                  navName: 'U+用户交互',
                  navUrl: '/product/micro/?productId=119',
                  sonList: []
                },
                {
                  navName: 'U+生态平台',
                  navUrl: '/product/micro/?productId=38',
                  sonList: []
                }
              ]
            },
            {
              navName: '工业物联网',
              navUrl: null,
              sonList: [
                {
                  navName: '物联平台',
                  navUrl: '/product/micro/?productId=73',
                  sonList: []
                },
                {
                  navName: '工业服务',
                  navUrl: 'http://shop.365ind.com/index',
                  sonList: []
                }
              ]
            },
            {
              navName: '工业安全',
              navUrl: null,
              sonList: [
                {
                  navName: '海安盾',
                  navUrl: '/product/micro/?productId=118',
                  sonList: []
                },
                {
                  navName: '区块链数据服务',
                  navUrl: 'https://market.cosmoplat.com/customer/bcintro.html',
                  sonList: []
                }
              ]
            },
            {
              navName: '工业大数据服务平台',
              navUrl: null,
              sonList: [
                {
                  navName: '边缘及业务数据汇聚',
                  navUrl: '/product/micro/?productId=123',
                  sonList: []
                },
                {
                  navName: '工业大数据存储',
                  navUrl: '/product/micro/?productId=124',
                  sonList: []
                },
                {
                  navName: '大数据服务',
                  navUrl: '/product/micro/?productId=125',
                  sonList: []
                },
                {
                  navName: '行业机理模型',
                  navUrl: '/product/indus',
                  sonList: []
                }
              ]
            },
            {
              navName: '工业互联网云服务',
              navUrl: null,
              sonList: [
                {
                  navName: 'DevOps',
                  navUrl: 'http://developer.dev.cosmoplat.com/#devops',
                  sonList: []
                },
                {
                  navName: '开发工具',
                  navUrl: 'http://developer.dev.cosmoplat.com/#develop-tool',
                  sonList: []
                },
                {
                  navName: '通用算法模型',
                  navUrl: 'http://developer.dev.cosmoplat.com/#algorithm',
                  sonList: []
                },
                {
                  navName: '微服务组件',
                  navUrl: 'http://developer.dev.cosmoplat.com/#micro-service',
                  sonList: []
                }
              ]
            },
            {
              navName: '边缘层接入',
              navUrl: null,
              sonList: [
                {
                  navName: '边缘计算',
                  navUrl: '/solution/cosmo_edge',
                  sonList: []
                },
                {
                  navName: '智能网关CP3352',
                  navUrl: '/product/micro/?productId=113',
                  sonList: []
                },
                {
                  navName: '智能网关CP3399',
                  navUrl: '/product/micro/?productId=111',
                  sonList: []
                },
                {
                  navName: '智能网关CP5708',
                  navUrl: '/product/micro/?productId=112',
                  sonList: []
                }
              ]
            }
          ]
        },
        {
          navName: '解决方案',
          navUrl: '/solution',
          sonList: [
            {
              navName: '行业解决方案',
              navUrl: null,
              sonList: [
                {
                  navName: '火电',
                  navUrl: '/solution/micro/?solutionId=81',
                  sonList: []
                },
                {
                  navName: '农业',
                  navUrl: '/solution/micro/?solutionId=114',
                  sonList: []
                },
                {
                  navName: '机械',
                  navUrl: '/solution/micro/?solutionId=120',
                  sonList: []
                },
                {
                  navName: '教育',
                  navUrl: '/solution/micro/?solutionId=85',
                  sonList: []
                },
                {
                  navName: '房车',
                  navUrl: '/solution/micro/?solutionId=87',
                  sonList: []
                },
                {
                  navName: '建陶',
                  navUrl: '/solution/micro/?solutionId=98',
                  sonList: []
                },
                {
                  navName: '家电',
                  navUrl: '/solution/micro/?solutionId=96',
                  sonList: []
                },
                {
                  navName: '服装',
                  navUrl: '/solution/micro/?solutionId=94',
                  sonList: []
                },
                {
                  navName: '化工',
                  navUrl: '/solution/micro/?solutionId=95',
                  sonList: []
                }
              ]
            },
            {
              navName: '领域解决方案',
              navUrl: null,
              sonList: [
                {
                  navName: '工业大数据',
                  navUrl: '/solution/micro/?solutionId=132',
                  sonList: []
                },
                {
                  navName: '智慧园区',
                  navUrl: '/solution/micro/?solutionId=100',
                  sonList: []
                },
                {
                  navName: '智慧家庭',
                  navUrl: '/solution/micro/?solutionId=83',
                  sonList: []
                },
                {
                  navName: '智慧能源',
                  navUrl: '/solution/micro/?solutionId=82',
                  sonList: []
                },
                {
                  navName: '智慧模具',
                  navUrl: '/solution/cosmo_moju',
                  sonList: []
                },
                {
                  navName: '开放创新平台',
                  navUrl: '/solution/micro/?solutionId=86',
                  sonList: []
                },
                {
                  navName: 'E+节能云',
                  navUrl: '/solution/micro/?solutionId=88',
                  sonList: []
                },
                {
                  navName: '智能水务',
                  navUrl: '/solution/micro/?solutionId=89',
                  sonList: []
                },
                {
                  navName: '模块采购',
                  navUrl: '/solution/micro/?solutionId=79',
                  sonList: []
                },
                {
                  navName: '设备预测性维保',
                  navUrl: '/solution/micro/?solutionId=78',
                  sonList: []
                },
                {
                  navName: '食联网',
                  navUrl: '/solution/micro/?solutionId=91',
                  sonList: []
                },
                {
                  navName: '中央空调',
                  navUrl: '/solution/micro/?solutionId=93',
                  sonList: []
                },
                {
                  navName: '衣联网',
                  navUrl: '/solution/micro/?solutionId=90',
                  sonList: []
                }
              ]
            },
            {
              navName: 'IOT方案',
              navUrl: null,
              sonList: [
                {
                  navName: '制造设备',
                  navUrl: '/solution/cosmo_edge'
                },
                {
                  navName: '商业设备',
                  navUrl: '/solution/micro/?solutionId=102'
                },
                {
                  navName: '智慧家庭',
                  navUrl: '/solution/micro/?solutionId=127'
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
          navName: '智研院',
          navUrl: null,
          sonList: [
            {
              navName: '关于智研院',
              navUrl: '/college',
              sonList: [
                {
                  navName: '走进智研院',
                  navUrl: '/college#anchor1'
                },
                {
                  navName: '发展历程',
                  navUrl: '/college#anchor2'
                },
                {
                  navName: '组织架构',
                  navUrl: '/college#anchor3'
                },
                {
                  navName: '战略布局',
                  navUrl: '/college#anchor4'
                }
              ]
            },
            {
              navName: '技术支持',
              navUrl: null,
              sonList: [
                {
                  navName: '技术能力布局',
                  navUrl: '/college/technique/techability'
                },
                {
                  navName: '共性关键技术',
                  navUrl: '/college/technique/technique'
                },
                {
                  navName: '国际合作',
                  navUrl: '/college/technique/technation'
                }
              ]
            },
            {
              navName: '教育培训',
              navUrl: null,
              sonList: [
                {
                  navName: '培训模式',
                  navUrl: '/college/education/edupattern'
                },
                {
                  navName: '课程标准',
                  navUrl: '/college/education/edutrain'
                },
                {
                  navName: '资源分享',
                  navUrl: '/college/education/eduresource'
                },
                {
                  navName: '培训动态',
                  navUrl: '/college/education/eduimpress'
                }
              ]
            },
            {
              navName: '产业孵化',
              navUrl: null,
              sonList: [
                {
                  navName: '孵化模式',
                  navUrl: '/college/industry/induspattern'
                },
                {
                  navName: '智能空间',
                  navUrl: '/college/industry/induspace'
                },
                {
                  navName: '关键案例',
                  navUrl: '/college/industry/indusexample'
                }
              ]
            }
          ]
        },
        // {
        //   navName: '合作伙伴',
        //   navUrl: 'https://cosmoplat.com/#/alliance',
        // },
        {
          navName: '资讯洞察',
          navUrl: '/news/?newstype=最新资讯',
          sonList: [
            {
              navName: 'COSMOPlat大事件',
              navUrl: '/news/?newstype=COSMOPlat大事件',
              sonList: [
                {
                  navName: '最新资讯',
                  navUrl: '/news/?newstype=最新资讯'
                },
                {
                  navName: '前沿动态',
                  navUrl: '/news/?newstype=前沿动态'
                },
                {
                  navName: '行业研究',
                  navUrl: '/news/?newstype=行业研究'
                },
                {
                  navName: '智研周报',
                  navUrl: '/news/?newstype=智研周报'
                },
                {
                  navName: '政策信息',
                  navUrl: '/news/?newstype=政策信息'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    twohidd(val) {
      if (val) {
        this.seen = true
      } else {
        this.seen = false
      }
    },
    enter(index) {
      if (this.navigationList) {
        this.seen = true
      }
      this.current = index
    },
    leave() {
      this.seen = false
      this.current = null
    },
    location(url) {
      if (/^http[s]?:\/\/.*/.test(url)) {
        window.open(url, '_blank')
      } else {
        if (url !== '' && url !== null) {
          window.location.href = url
        }
      }
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
  .logo {
    position: absolute;
    left: 2%;
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
