<template>
  <div style="background: #f5f7f9;padding-top: 60px;">
    <!--推荐-->
    <recommend :recommend="recommend" />
    <!--选项-->
    <selected :selectClass="selectClass" />
    <!--排序-->
    <rank :rank_data="rank_data" />
    <!--列表-->
    <list :list_data="list_data" />
  </div>
</template>

<script>
import recommend from '../../components/list/recommend'
import rank from '../../components/list/rank'
import list from '../../components/list/list'
import selected from '../../components/list/selected'
export default {
  name: 'index',
  components: {
    recommend,
    rank,
    list,
    selected
  },
  data() {
    return {
      recommend: [
        {
          rec_img:
            'http://market.cosmoplat.com:80/upload/20180329/1522302746905!160.png',
          title: '海尔定制',
          price: '1799.00'
        },
        {
          rec_img:
            'http://market.cosmoplat.com:80/upload/20180329/1522302746905!160.png',
          title: '海尔定制',
          price: '1799.00'
        },
        {
          rec_img:
            'http://market.cosmoplat.com:80/upload/20180329/1522302746905!160.png',
          title: '海尔定制',
          price: '1799.00'
        },
        {
          rec_img:
            'http://market.cosmoplat.com:80/upload/20180329/1522302746905!160.png',
          title: '海尔定制',
          price: '1799.00'
        }
      ],
      list_data: [
        {
          list_img:
            'http://market.cosmoplat.com:80/upload/20180510/1525946265259!352.png',
          title: 'CUBA-业务运营中心',
          desc: '哈哈哈门户',
          val: 5,
          price: '￥999.00'
        },
        {
          list_img:
            'http://market.cosmoplat.com:80/upload/20180510/1525946265259!352.png',
          title: 'CUBA-业务运营中心',
          desc: '哈哈哈门户',
          val: 5,
          price: '￥999.00'
        },
        {
          list_img:
            'http://market.cosmoplat.com:80/upload/20180510/1525946265259!352.png',
          title: 'CUBA-业务运营中心',
          desc: '哈哈哈门户',
          val: 5,
          price: '￥999.00'
        },
        {
          list_img:
            'http://market.cosmoplat.com:80/upload/20180510/1525946265259!352.png',
          title: 'CUBA-业务运营中心',
          desc: '哈哈哈门户',
          val: 5,
          price: '￥999.00'
        }
      ],
      rank_data: [
        { title: '销量' },
        { title: '价格' },
        { title: '人气' },
        { title: '上架时间' }
      ],
      selectClass: [
        {
          title: '品牌',
          list: [
            '苹果',
            '小米',
            '锤子',
            '魅族',
            '华为',
            '三星',
            'OPPO',
            'vivo',
            '乐视',
            '360',
            '中兴',
            '索尼'
          ],
          active:-1
        },
        {
          title: '尺寸',
          list: [
            '3.0英寸以下',
            '3.0-3.9英寸',
            '4.0-4.5英寸',
            '4.6-4.9英寸',
            '5.0-5.5英寸',
            '6.0英寸以上'
          ],
          active:-1
        },
        {
          title: '系统',
          list: [
            '安卓(Android)',
            '苹果(IOS)',
            '微软(WindowsPhone)',
            '无',
            '其他'
          ],
          active:-1
        },
        {
          title: '网络',
          list: ['联通3G', '双卡单4G', '双卡双4G', '联通4G', '电信4G', '移动4G','5G'],
          active:-1
        },
        {
          title: '容量',
          list: ['16G', '32G', '64G', '128G', '258G', '512G','其他'],
          active:-1
        },
        {
          title: '颜色',
          list: ['黑色', '白色', '红色', '彩色', '金色', '其他'],
          active:-1
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
</style>
<style>
</style>
