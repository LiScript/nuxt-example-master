
# 使用 svg-sprite-loader 加载svg

## 一、安装 svg-sprite-loader
``` bash
npm install svg-sprite-loader --save-dev
```
## 二、新建子组建全局供全剧引用
``` bash
# svg-icon.vue

<template>
  <svg aria-hidden="true">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    }
  }
};
</script>

```
## 三、配置 svg-icon.js
``` bash
# 在plugins目录下新建 svg-icon.js

js 代码如下
import Vue from 'vue';
import SvgIcon from '~/components/svg-icon.vue'
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('~/assets/svg', false, /\.svg$/)
requireAll(req)

# 在 nuxt.config.js 引入

plugins下

'~/plugins/svg-icon', // icons

# 在 nuxt.config.js 配置svg加载

build下

extend(config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [resolve(__dirname, 'assets/svg')] // svg组件
      config.module.rules.push({
        test: /\.svg$/,
        include: [resolve(__dirname, 'assets/svg')],
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]'
        }
      })
    },
```
## 四、将svg放置assets-svg目录下
``` bash
# 使用 iconClass是svg的文件名
<svg-icon iconClass="cosmo_logo" style="width: 125px;height: 40px;"/>
```