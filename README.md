[ 开发规范 ](./README.Poli.md)
[ SVG ](./README.svg.md)
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
### Build Setup
``` bash
# 安装依赖包
$ npm install
# 启动
$ npm run dev
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