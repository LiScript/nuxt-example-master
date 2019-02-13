
# NUXT框架前端开发规范

## 目录结构规范：

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

## 基于组件化开发规范

``` bash
单文件系统，样式局部作用域
基本组成结构：<template/> <script/> <style scoped/>
组件注册方式：1）公共组件全局注册 2）其余组件局部注册
```
## 组件命名规范

``` bash
当注册组件 (或者 prop) 时，可以使用 kebab-case (短横线分隔命名)、camelCase (驼峰式命名) 或 PascalCase (单词首字母大写命名)。
PascalCase 是最通用的声明约定而 kebab-case 是最通用的使用约定。
 1、有意义的名词、简短、具有可读性
 2、以小写开头，采用短横线分割命名
 3、公共组件命名以公司名称简拼为命名空间(cosmo-xx.vue)
 4、文件夹命名主要以功能模块代表命名
 同时还需要注意：必须符合自定义元素规范: 使用连字符分隔单词，切勿使用保留字。cosmo- 前缀作为命名空间: 如果非常通用的话可使用一个单词来命名，这样可以方便于其它项目里复用。 
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
1.选择器尽可能简单,每个选择器和声明都要独立新行。
    例：能使用 .test 别使用 div.test
2.Class 和 ID 的命名应该语义化，通过看名字就知道是干嘛的；多个单词用连接线 - 连接。
3.属性缩写
    例：
    // 反例
    border-width: 1px;
    border-style: solid;
    border-color: #ccc;

    // 正例
    border: 1px solid #ccc;
4、多用element-ui2.4.11版本及以上的组件样式，若需要修改 element-ui默认样式，请在单页面中使用scoped标签进行单页面的样式修改，不要全局修改；
5、样式绑定仅使用class进行绑定，不建议使用id进行样式绑定，不建议使用style进行内联样式编写；
6、可以通过为template的根节点添加不同class区别不同页面的样式
```

## Css编码规范：

``` bash
1.选择器尽可能简单,每个选择器和声明都要独立新行。
    例：能使用 .test 别使用 div.test
2.Class 和 ID 的命名应该语义化，通过看名字就知道是干嘛的；多个单词用连接线 - 连接。
3.属性缩写
    例：
    // 反例
    border-width: 1px;
    border-style: solid;
    border-color: #ccc;

    // 正例
    border: 1px solid #ccc;
4、多用element-ui2.4.11版本及以上的组件样式，若需要修改 element-ui默认样式，请在单页面中使用scoped标签进行单页面的样式修改，不要全局修改；
5、样式绑定仅使用class进行绑定，不建议使用id进行样式绑定，不建议使用style进行内联样式编写；
6、可以通过为template的根节点添加不同class区别不同页面的样式
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

## Html编码规范：

``` bash
1、布局请考虑好适配布局；
2、使用element-ui的Layout 布局进行基础的栅格布局；
3、注意element不同元素闭包与嵌套
```
