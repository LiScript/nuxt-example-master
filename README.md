# 基于NUXT的门户模板项目
``` bash
# (https://nuxtjs.org) 源于个人-Poli

# 主要用到的组件如下，依照顺引用于plugins文件夹

# vue-awesome-swiper 轮播插件，支持手机端手势滑动
# axios 前后交互 配置文件在 ～/axios 目录下
# ui 使用element-ui  官网：http://element-cn.eleme.io/#/zh-CN
# i18n 使用国际化组件
# svg-icon svg引用
# vue-lazyload 图片懒加载 

# 具体使用方式见各种示例模块
```
## Build Setup
``` bash
# 安装依赖包
$ npm install
# 启动
$ nopm run dev
#打包发版
$ npm  run build 线上测试环境
$ npm  run g 线上正式环境
```
### 各种示例
``` bash
# vue-awesome-swiper
详见示例 目录：(components/Videobanner)
# svg使用示例
将svg文件放到assets/svg目录下
iconClass写svg名字
可以自定义样式
！！直接组件中使用，不需要引入子组件！！
<svg-icon iconClass="cosmo_logo" style="width: 125px;height: 40px;"/>
# vue-lazyload
v-lazy= 替代 :src= 可实现静态图片懒加载
# i18n 
将数据维护进不同的json 目录：(locales/en~zh-CN)
在data中使用this.$t('header.qdjd')
在html中使用{{$t('header.qdjd')}}
#axios环境变量设置-多环境部署准备
axios - env.js
#axios拦截设置
axios - http.js
#axios示例get.post
this.$API.post
this.$API.get
```

####NUXT框架前端开发规范
``` bash
#目录结构：
api - axios的公用接口管理（示例见pages-login-index.vue）
assets - 存放静态文件
            - img 存放图片，同一个页面的图片放在一个文件夹下，图片能复用就复用
            - css 存放样式文件 media.less为整个项目的媒体查询文件，页面的适配统一在媒体查询中实现(单独页面里面不再写适配)；建议不同的开发者使用不同的媒体查询文件进行开发，进行适配开发
            - svg 存放svg文件
            - js 存放静态js
axios - 存放axios配置文件，除链接地址可以配置外，其余项尽量不能修改
components - 存放全部子组件，将所有的子组件存放在这个目录下，其他地方不可以存放子组件
layouts - 存放项目的布局 目前存放的：admin为前台个人中心布局，base为无头尾布局（无header和footer），default为有头有尾布局（有header和footer），error（404页面）
middleware - 存放项目的中间件进行项目的状态管理等（现存登录状态中间件判定）
pages - 存放页面，Nuxt.js 框架读取该目录下所有的 .vue 文件并自动生成对应的路由配置
plugins - 插件目录
插件目录 plugins 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。
static - favicon.ico
store - vuex操作

nuxt.config.js - nuxt的配置文件

#Css开发：
1、多用element-ui2.4.11版本及以上的组件样式，若需要修改 element-ui默认样式，请在单页面中使用scoped标签进行单页面的样式修改，不要全局修改；
2、手写样式使用scss开发，使用scss的嵌套开发标准来进行css的开发。
3、注释使用单行注释 //，这种注释只保留在SASS源文件中，编译后会被省略。
4、样式绑定仅使用class进行绑定，不建议使用id进行样式绑定，不建议使用style进行内联样式编写；
5、可以通过为template的根节点添加不同class区别不同页面的样式

#Js开发：
data：只加载和处理本vue及父子组件的数据，冗余数据请删除
methods：写好注释，若牵扯element-ui相关方法开发请按照官方文档开发；
合理利用生命周期钩子
debugger 和console及时注释

#html开发：
1、布局请考虑好适配布局；
2、使用element-ui的Layout 布局进行基础的栅格布局；
3、注意element不同元素闭包与嵌套
```