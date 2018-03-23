<template>
  <div class="home">
    <b-alert show variant="primary">Primary Alert</b-alert>
    <b-alert show variant="secondary">Secondary Alert</b-alert>
    <b-alert show variant="success">Success Alert</b-alert>
    <b-alert show variant="danger">Danger Alert</b-alert>
    <b-alert show variant="warning">Warning Alert</b-alert>
    <b-alert show variant="info">Info Alert</b-alert>
    <b-alert show variant="light">Light Alert</b-alert>
    <b-alert show variant="dark">Dark Alert</b-alert>
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


