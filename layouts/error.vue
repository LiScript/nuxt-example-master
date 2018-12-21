<template>
  <section class="container">
    <img src="../assets/img/error.jpg" alt="404" />
  </section>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style scoped>

.container {
  text-align: center;
  margin: 240px auto;
}

.title
{
  margin-top: 15px;
  font-size: 5em;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button
{
  margin-top: 50px;
}
</style>
