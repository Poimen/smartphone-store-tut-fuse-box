<template>
  <div class="home">
    <span>Hello from Home.vue</span>
    <span>{{msg}}</span>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Scaffold working!!'
    };
  }
}
</script>
<style lang="scss" scoped>
  .home {
    color: red;
  }
</style>


