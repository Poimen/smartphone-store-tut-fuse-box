<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-lg3 col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu">
            <li><b-link to="/admin">View Products</b-link></li>
            <li><b-link to="/admin/new">New Products</b-link></li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'admin',
  data() {
    return {
      msg: 'Welcome to admin screen'
    }
  }
}
</script>

