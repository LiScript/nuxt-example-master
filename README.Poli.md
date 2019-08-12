
# 前端开发规范

## NUXT目录结构规范：

``` bash
   ├── .nuxt           框架原生配置内容
   ├── api             公共axios请求
   ├── assets          资源目录，这里的资源会被wabpack构建
   │   ├── css             存放样式文件 media.less为整个项目的媒体查询文件，页面的适配统一在媒体查询中实现(单独页面里面不再写适配)；建议不同的开发者使用不同的媒体查询文件进行开发，进行适配开发
   │   ├── img             存放图片，同一个页面的图片放在一个文件夹下，图片能复用就复用
   │   ├── svg             存放svg文件，供svg-icon实用
   │   └── video           存放video
   ├── axios           存放axios配置文件，除链接地址可以配置外，其余项尽量不能修改
   │   ├── env.js          配置编译环境和线上环境之间的切换
   │   ├── http.js         axios的定义和引用
   │   └── index.js        axios个性化配置
   ├── components      存放全部公用子组件，将所有的子组件存放在这个目录下，其他地方不可以存放子组件
   ├── layouts         存放项目的布局 目前存放的：admin为前台个人中心布局，base为无头尾布局（无header和footer），default为有头有尾布局（有header和footer），error（404页面）
   ├── locales         i18n多语言文件
   │   ├── en.json         英文环境下加载
   │   ├── index.js        国际化调用 vuex使用
   │   └── zh-CN.json      中文环境下加载
   ├── middleware      存放项目的中间件进行项目的状态管理等（现存登录状态和多语言切换中间件判定）
   │   ├── i18n.js         i18n多语言切换中间件
   │   └── userAuth.js     登录状态验证中间件
   ├── pages           存放页面，Nuxt.js 框架读取该目录下所有的 .vue 文件并自动生成对应的路由配置
   │   ├── XXX             文件夹
   │   └── index.vue       首页
   ├── plugins         插件目录,实例化之前需要运行的 Javascript 插件, 在nuxt.config.js的plugins中引用 
   │   ├── awesome-swiper.js    轮播图
   │   ├── axios.js             axios
   │   ├── element-ui.js        element-ui
   │   ├── element-variables.scss   element-ui个性化样式
   │   ├── i18n.js             多语言
   │   ├── svg-icon.js         svg-icon组件
   │   └── vue-lazyload.js     图片懒加载
   ├── store            vuex
   │   └── index.js        Vuex 状态树 
   ├── utils            公用js
   │   ├── auth.js          一些方法
   │   ├── index.js         一些方法
   │   └── utils.js         一些方法 
   └── nuxt.config.js       nuxt的配置文件
```

## vue-fast-example目录结构规范：

``` bash
   ├── build                    构建脚本目录
   │ ├── build.js               生产环境构建脚本
   │ ├── check-versions.js      vue-cli中检查版本的js文件
   │ ├── utils.js               构建相关工具方法
   │ ├── vue-loader.conf.js     vue加载器的配置
   │ ├── webpack.base.conf.js   wabpack基础配置
   │ ├── webpack.dev.conf.js    wabpack开发环境配置
   │ ├── webpack.prod.conf.js   wabpack生产环境配置
   │ └── webpack.test.conf.js   wabpack测试环境配置
   ├── config   项目配置
   │ ├── dev.env.js             开发环境变量
   │ ├── index.js               项目配置文件
   │ ├── prod.env.js            生产环境变量
   │ └── prod.env.js            测试环境变量
   ├── src                      源码目录
   │ ├── assets                 资源目录,这里的资源会被wabpack构建
   │ │ ├── custom-theme         主题样式
   │ │ ├── img                  图片文件夹
   │ │ ├── scss                 样式文件夹
   │ │ │ ├── _base.scc          待完善
   │ │ │ ├── _fix.scc           待完善
   │ │ │ ├── _normalize.scc     待完善
   │ │ │ ├── _variables.scc     待完善
   │ │ │ └── index.scc          全局样式入口
   │ ├── components             公共组件存放位置
   │ │ ├── icon-svg             svg公共组件
   │ │ ├── table-tree-column    树形组件
   │ ├── element-ui-theme       element-UI自定义主题
   │ ├── icons                  存放svg文件，供svg-icon使用
   │ │ ├── svg                  存放svg图表的文件夹
   │ │ ├── iconfont.js          iconfontjs配置
   │ │ └── index.js             SVG组件配置文件
   │ ├── mock                   存放mock文件
   │ ├── router                  存放mock文件
   │ ├── store                   存放mock文件
   │ ├── utils                   存放mock文件
   │ ├── views                   存放mock文件
   │ ├── App.vue                 vue根组件
   │ ├── main.js                 入口js文件
   ├── static                    静态文件夹
   ├── package.json              npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
   └── README.md                 项目介绍
```

## 框架要求
### 1、前端框架
``` bash
1）web 端建议⽤用 nuxt 框架，即使没有做服务端渲染，也可静态化。[官⽹网地址](https://nuxtjs.org/)
2）管理理端建议⽤用 vue-fast-example，保持跟主系统⻛风格统⼀一。[项目地址](https://github.com/LiScript/vue-fast-example)
```
### 2、 UI 框架
``` bash
1）优先选择⽤Element UI， web 端建议做响应式。[官⽹网地址](https://element.eleme.cn/#/zh-CN/component/layout)
2）如果不能做响应式需要做两套， pc 端建议⽤ Element UI，⼿机端建议⽤mint-ui。[官⽹网地址](http://mint-ui.github.io/#!/zh-cn)
```

## 编码规范，强制要求使⽤用 eslint

``` bash
为了开发代码规范，我们强制要求完全按照 eslint 格式来编写代码。
另外很多 IDE 也有代码格式⼯具，但是不同的 IDE 格式化都不⼀样，所以建议搭建使⽤ vscode。格式
化插件有： Beautify、 Prettier。
```

## code review 和 Git

``` bash
为保证代码的可读，可维护，以后项⽬包括现有项⽬后期的迭代，每个⼈都不能提交 master，都在⾃
⼰的分⽀上开发。这⾥分⼏步：
1. 每个⼈建以⾃⼰名字为命名的分⽀，此分⽀不能删除；
如果后⾯在此分⽀上的功能暂时不上线，那就再新建功能型分⽀，功能型分⽀等功能上线之后就合并到
master，然后删除此功能分⽀；
2. 在每个⼩功能提交之后，都告知负责⼈提交了分⽀代码，负责⼈就需要对这部分代码进⾏ review；
3. 等代码达到测试要求的时候，在群⾥说⼀下，我们再做⼀次 review，对于不规范的代码，直到改到符合
我们的标准为⽌；
4. 项⽬发测试的之前，先把 master 合并到⾃⼰分⽀之后，在本地运⾏⽆误，再发测试，避免中间其他功
能合并 master ⽽引起冲突；
5. 等项⽬正式上线之后告知负责⼈，再由负责⼈合并到 master，之后的优化还是在分⽀上进⾏；
这样可以保证 master 永远跟线上是⼀致的。
```

## Git commit 规范

### Commit message 的格式
``` bash
每次提交， Commit message 都包括三个部分： header， body 和 footer；
规则如下： type(scope): subject；
其中 type（必需）、 scope（可选）和 subject（必需）。
```
### type
``` bash
1. feat：新功能（feature）
2. fix：修补 bug
3. docs：⽂档（documentation）
4. style： 格式（不影响代码运⾏的变动）
5. refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
6. test：增加测试
7. chore：构建过程或辅助⼯具的变动
```
### scope
``` bash
scope ⽤于说明 commit 影响的范围，⽐如数据层、控制层、视图层等等，视项⽬不同⽽不同。
这⾥我们不做强制要求写这个，但是有⼀些是必须要填的，⽐如
在公共样式⾥⾯修改了 elementUI 样式， scope 为 elementUI
router 的修改， scope 为 router
permission 的修改， scope 为 permission
utils 的修改， scope 为 utils
vue.config.js 的修改， scope 为 config
新增 npm 包， scope 为 npm
```
### subject
``` bash
subject 是 commit ⽬的的简短描述，不超过 50 个字符。要尽可能的能描述清楚此次修改的内容，避免
出现以前那种修改、优化太过简单的描述。
```
``` bash
# 修改bug
fix(utils): 解决了时间戳转换时间不能具体到秒
# 新增
feat: 在app.vue新增聊天功能

[参考网址](https://www.jianshu.com/p/201bd81e7dc9?utm_source=oschina-app)
```

## README.md

``` bash
必须把项⽬从安装到运⾏、打包等命令说清楚。
需要表明每个 baseUrl 对应是测试还是正式，管理后台需要把测试账号、密码都说明。
针对当前框架的⼀些特殊说明标注清楚，⽐如下⾯⽂档说⽤到的图⽚预加载和富⽂本的插件，我们会针
对 GitHub 上的插件做本项⽬特殊化修改，像这种的就需要在⽂档⾥⾯标注修改了哪，是为了解决什么
问题。
```

## 基于组件化开发规范

``` bash
单文件系统，样式局部作用域
基本组成结构：<template/> <script/> <style scoped/>
组件注册方式：1）公共组件全局注册 2）其余组件局部注册

<template>
<div>
<!--必须在div中编写⻚⾯-->
</div>
</template>
<script>
export default {
components: {},
data() {
return {}
},
methods: {},
mounted() {}
}
</script>
<!--声明语⾔，并且添加scoped-->
<style lang="scss" scoped></style>
```
## 组件命名规范

``` bash
当注册组件 (或者 prop) 时，可以使用 kebab-case (短横线分隔命名)、camelCase (驼峰式命名) 或 PascalCase (单词首字母大写命名)。
PascalCase 是最通用的声明约定而 kebab-case 是最通用的使用约定。
 1、有意义的名词、简短、具有可读性
 2、以小写开头，采用短横线分割命名
 3、公共组件命名以公司名称简拼为命名空间(app-xx.vue)
 4、文件夹命名主要以功能模块代表命名
 同时还需要注意：必须符合自定义元素规范: 使用连字符分隔单词，切勿使用保留字。app- 前缀作为命名空间: 如果非常通用的话可使用一个单词来命名，这样可以方便于其它项目里复用。 
```

## vue文件方法声明顺序

``` bash
    - components   
    - props    
    - data     
    - created
    - mounted
    - activited
    - update
    - beforeRouteUpdate
    - metods   
    - filter
    - computed
    - watch
```

## 注释规范

``` bash
1.公共组件使用说明
2.各组件中重要函数或者类说明
3.复杂的业务逻辑处理说明
4.特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、函数中使用的hack、使用了某种算法或思路等需要进行注释描述
5.注释块必须以/**（至少两个星号）开头**/；
6.单行注释使用 // ,
普通方法一般使用单行注释  // 来说明该方法主要作用；
7.多行注释使用
 组件使用说明，和调用说明 
      <!--公用组件：数据表格
      /**
      * 组件名称
      * @module 组件存放位置
      * @desc 组件描述
      * @author 组件作者
      * @date 2017年12月05日17:22:43
      * @param {Object} [title]    - 参数说明
      * @param {String} [columns] - 参数说明
      * @example 调用示例
      *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
          */
       -->
```

## Css编码规范：

``` bash
1.建议选择⽤ sass，然后在项⽬⾥⾯配置全局变量，把公⽤的变量都放在⼀个⽂件⾥⾯，减少后期维护
成本。例如_variables.scss。
甚⾄⼀些公⽤的⽅法也可以封装到全局引⽤⾥⾯。
// font相关
//-----------------------------------------------------
$fontSize: 14px !default;
$fontLineHeight: 1.5 !default;
$fontFamily: system-ui, -apple-system, BlinkMacSystemFont, 'Microsoft YaHei UI', '
Microsoft YaHei', Roboto, 'Hiragino Sans GB', 'Source Han Sans CN', Fira Sans,
'Droid Sans', 'Helvetica Neue', arial, sans-serif !default;
// 苹⽅, 冬⻘⿊体，微软雅⿊UI（win8.1+），微软雅⿊，思源⿊体（安卓）
$fontCn: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei UI', 'Microsoft YaHei
', 'Source Han Sans CN' sans-serif !default;
// 前两个为safari chrome, ios4.0+, ios4.0-, Android 4.0+, Android 4.0-, windows&wind
ows Phone,
$fontEn: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Roboto, '
Droid Sans', 'Seogoe UI', Arial !default;
// 背景⾊，⽂本⾊，边框⾊，链接⾊
//-----------------------------------------------------
$colorText: #000 !default;
$colorBg: #fff !default;
$colorBorder: #dbdbdb !default;
$colorLink: #333 !default;
$colorPlaceholder: #999 !default; // input placeholder color
$colorDisabled: (
text: #999,
bg: #e3e3e3,
border: #dbdbdb
) !default; // textColor bgColor borderColor
README.md
CSS 预处理器$colorOverlay: rgba(0, 0, 0, 0.7) !default; // 遮罩层颜⾊
$colorBgF: #f7f8f9 !default;
$colorLazy: #f1f1f1; // 加载颜⾊
$colorT: #313138;
$border: #979797;
$colorBgB: #f4f4f4;
// 基本颜⾊
//-----------------------------------------------------
$color2: #222;
$color3: #333;
$color6: #666;
$color9: #999;
$colorC: #ccc;
$colorB: #bbb;
$colorF: #4d4d4d;
$blue: #b3d4fd !default;
$orange: #fed989 !default;
$pink: #fdbbbb !default;
$red: #ff5353 !default;
$green: #4cd964 !default;
$primary: #007aff !default;
$yellow: #dbb76c !default;

2.选择器尽可能简单,每个选择器和声明都要独立新行。
    例：能使用 .test 别使用 div.test
3.Class 和 ID 的命名应该语义化，通过看名字就知道是干嘛的；多个单词用连接线 - 连接。
4.属性缩写
    例：
    // 反例
    border-width: 1px;
    border-style: solid;
    border-color: #ccc;

    // 正例
    border: 1px solid #ccc;
5、多用element-ui2.4.11版本及以上的组件样式，若需要修改 element-ui默认样式，请在单页面中使用scoped标签进行单页面的样式修改，不要全局修改；
6、样式绑定仅使用class进行绑定，不建议使用id进行样式绑定，不建议使用style进行内联样式编写；
7、可以通过为template的根节点添加不同class区别不同页面的样式
```

## Js编码规范：

``` bash
1.使用ES6风格编码源码
    建议不再使用 var,而使用 let / const
    定义变量使用let ,定义常量使用const
    使用export ，import 进行模块化开发
2.组件 props:在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。
    提供默认值
    使用 type 属性校验类型
    使用 props 之前先检查该 prop 是否存在
3.为v-for设置键值
    例:
    v-for="(todo,index) in todos"
    :key="index"
4.data:只加载和处理本页面相关变量，冗余变量及时清理
5.避免 this.$parent
6.谨慎使用 this.$refs
7.调试信息console.log() debugger 使用完及时删除
```
## 全局 Store 数据

``` bash
所有的数据都放在 store ⾥⾯，包括 ajax 请求返回的列表都放在 store ⾥⾯。
在 store/modules ⾥⾯建对应 views 的 aaaBbb.js，新 admin 框架不需要在 store/index.js ⾥⾯在引⽤
这个 js，以前的 admin 框架需要引⽤⼀下。
```

## Axios

``` bash
建议使⽤ Axios，并且测试和⽣产修改的 baseUrl 建议放在 根⽬录/config ⾥⾯。
暴露全局参数，可直接使⽤ axios 相关⽅法，修改 baseUrl 在 config/env.js ⾥⾯。
这⾥的 baseUrl 配置⽂件跟框架有关系，⽤ vue-cli3 搭建的项⽬，可直接配置在 .env.production 或
.env.development ⾥⾯，当然也可以写在 config ⽂件⾥⾯，但是没有必要。 [参考网址](https://cli.vuejs.org/zh/guide/mode-and-env.html#模式)

this.$axios
// 完整post请求规范为：
this.$axios({
method: 'post',
url: '/test',
data: this.$qs.stringify({}) // 这⾥需不需要⽤qs转需要看后台接⼝需不需要
})
.then(res => {
console.log(res)
})
.catch(error => {
this.$message.error(error.msg || error.message || error)
})
// 完整get请求规范为：
this.$axios({
method: 'get',
url: '/test',
params: this.$qs.stringify({}) // 这⾥需不需要⽤qs转需要看后台接⼝需不需要
})
.then(res => {
console.log(res)
})
.catch(error => {
this.$message.error(error.msg || error.message || error)
})
```
## 图⽚懒加载 Vue-Lazyload

``` bash
建议使⽤这个插件来处理预加载， npm 装的时候需要装 vue-lazyload-cosmo-zp ，⽬的是为了解决⼿机端
⾃适应图⽚的问题。
修改 const containerWidth = container.offsetWidth * scale 为 const containerWidth =
container.offsetWidth，适配⼿机端⾃适应图⽚问题。
如果遇到图⽚不更新 bug，⼤概率是因为没有写:key。
[github](https://github.com/hilongjw/vue-lazyload)

<template>
<div ref="container">
<img v-lazy="imgUrl" />
<div v-lazy:background-image="imgUrl"></div>
<!-- with customer error and loading -->
<img v-lazy="imgObj" />
<div v-lazy:background-image="imgObj"></div>
<!-- Customer scrollable element -->
<img v-lazy.container="imgUrl" />
<div v-lazy:background-image.container="img"></div>
<!-- srcset -->
<img v-lazy="'img.400px.jpg'" data-srcset="img.400px.jpg 400w, img.800px.jpg 8
00w, img.1200px.jpg 1200w" />
<img v-lazy="imgUrl" :data-srcset="imgUrl' + '?size=400 400w, ' + imgUrl + ' ?
size=800 800w, ' + imgUrl +'/1200.jpg 1200w'" />
</div>
</template>
<style>
img[lazy='loading'] {
/*your style here*/
}
img[lazy='error'] {
/*your style here*/
}
img[lazy='loaded'] {
/*your style here*/
}
/*
or background-image
*/
.yourclass[lazy='loading'] {
/*your style here*/
}
.yourclass[lazy='error'] {
/*your style here*/
}
.yourclass[lazy='loaded'] {
/*your style here*/
}
</style>
```
## 富⽂本 vue-quill-editor

``` bash
富⽂本建议⽤这个框架， npm 安装的时候建议安装 vue-quill-editor-cosmo ，⽬的为了解决下拉字号显示问
题。
此富⽂本插件⽀持 spa 和 ssr 两种⽅式， nuxt 项⽬采⽤ ssr 形式，以指令形式插⼊到 html 中。
[github]( https://github.com/surmon-china/vue-quill-editor)
```


## 轮播图 vue-awesome-swiper
``` bash
基于 Swiper4、适⽤于 Vue 的轮播组件，⽀持服务端渲染和单⻚应⽤。
[github](  https://github.com/surmon-china/vue-awesome-swiper)
```
