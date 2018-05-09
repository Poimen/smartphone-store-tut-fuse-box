<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item><router-link to="/" class="nav-link"><i class="nav-icon fas fa-home"></i>Home</router-link></b-nav-item>
          <b-nav-item><router-link to="/admin" class="nav-link"><i class="nav-icon fas fa-user"></i>Admin</router-link></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item><router-link to="/cart" class="nav-link"><i class="nav-icon fas fa-shopping-cart"></i>Cart</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
    <button @click="clicked"></button>
    <notifications group="foo" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  created() {
  }

  clicked() {
    this.$notify({
      group: 'foo',
      title: 'Important message',
      text: 'Hello user! This is a notification!'
    });
  }
}
</script>

<style lang="scss" scoped>
.nav-link {
  margin-right: 5px;
}

.nav-icon {
  margin-right: 10px;
}
</style>
