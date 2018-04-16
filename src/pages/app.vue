<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item><router-link to="/" class="nav-link">Home</router-link></b-nav-item>
          <b-nav-item><router-link to="/admin" class="nav-link">Admin</router-link></b-nav-item>
          <b-nav-item><router-link to="/cart" class="nav-link">Cart</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

