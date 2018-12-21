<template>
  <div>
    <banner/>
  </div>
</template>

<script>
import Banner from '~/components/Videobanner.vue'

export default {
  components: {
    Banner
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
