<template>
  <el-container>
    <el-header>
      <Aheader/>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Aside/>
      </el-aside>
      <el-container>
        <el-main>
          <div class="zpContainer">
            <nuxt/>
          </div>
        </el-main>
        <el-footer>
          <div class="footer">My love Poli @1989</div>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import Aside from '~/components/Aside.vue'
import Aheader from '~/components/Aheader.vue'
export default {
  components: {
    Aside,
    Aheader
  }
}
</script>

<style lang="scss" scoped>
.el-header {
    padding: 0;
}
.zpContainer {
  min-height: 80vh;
}
.footer {
  text-align: center;
}
</style>
