<template>
  <div class="selected container">
    <ul>
      <li>
        <div class="tit">你的选择</div>
        <div class="opts" v-for="(item,key) in choose" :key="key" @click="delFn(key)">
          <div class="opt" v-if="item">{{item}}</div>
        </div>
      </li>
      <li v-for="(item,Findex) in selectClass" :key="Findex" v-show="Findex < num">
        <div class="tit">{{item.title}}</div>
        <div class="opts" v-for="(value,Sindex) in item.list" :key="Sindex">
          <div
            class="opt"
            :class="{ 'opt-click':item.active === Sindex }"
            @click="showFn(value,Findex,Sindex)"
          >{{value}}</div>
        </div>
      </li>
    </ul>
    <div class="hs" @click="showNum">
      <span>{{isShow}}</span>
      <span>
        <i :class="arrows"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selected',
  props: {
    selectClass: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      num: 4,
      isShow: '展开',
      arrows: 'el-icon-arrow-down',
      choose: [] // 你的选择数组
    }
  },
  methods: {
    showNum() {
      if (this.num !== 4) {
        this.num = 4
        this.isShow = '展开'
        this.arrows = 'el-icon-arrow-down'
      } else {
        this.num = 8
        this.isShow = '收起'
        this.arrows = 'el-icon-arrow-up'
      }
    },
    showFn(value,Findex,Sindex) {
      //下面这种方法给对象添加属性并不会响应
      this.$set(this.choose, Findex, value)
      //找到操作的一行，把这一行的数据中的index设置为点击的标签的下标
      this.selectClass[Findex].active = Sindex
    },
    /*
      删除对象中的属性
      */
    delFn(key) {
      // console.log('del', key)
      this.choose.splice(key, 1, null)
      this.selectClass[key].active = -1
    }
  }
}
</script>

<style lang="scss" scoped>
.selected {
  margin-bottom: 10px;
  ul {
    list-style: none;
    background: #fff;
    li {
      line-height: 50px;
      padding: 0 15px;
      border-bottom: 1px dashed #f3f3f3;
      font-size: 13px;
      .tit {
        font-size: 13px;
        color: #999;
        width: 100px;
        display: inline-block;
      }
      .opts {
        display: inline-block;
        .opt {
          display: inline-block;
          padding: 5px 10px;
          line-height: 30px;
        }
        .opt-click {
          border: 1px solid #09f;
          border-radius: 10px;
        }
      }
    }
  }
  .hs {
    margin: 0 auto;
    text-align: center;
    width: 80px;
    height: 30px;
    line-height: 30px;
    background: #fff;
  }
}
</style>
