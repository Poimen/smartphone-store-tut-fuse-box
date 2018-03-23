import Vue from 'vue';
import Router from 'vue-router';

import Home from 'pages/home.vue';
import Cart from 'pages/cart.vue';

import Admin from 'pages/admin/admin.vue';
import AdminNew from 'pages/admin/new.vue';
import AdminProducts from 'pages/admin/products.vue';
import AdminEdit from 'pages/admin/edit.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/admin',
    component: Admin,
    children: [{
      path: 'new',
      name: 'New',
      component: AdminNew
    }, {
      path: '',
      name: 'Products',
      component: AdminProducts
    }, {
      path: 'edit/:id',
      name: 'Edit'
    }]
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }]
});


