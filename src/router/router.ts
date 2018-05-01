import Vue from 'vue';
import Router from 'vue-router';

import Home from 'pages/Home.vue';
import Cart from 'pages/Cart.vue';

import Admin from 'pages/admin/Admin.vue';
import AdminNew from 'pages/admin/New.vue';
import AdminProducts from 'pages/admin/Products.vue';
import AdminEdit from 'pages/admin/Edit.vue';

import Details from 'pages/Details.vue';

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
      name: 'Edit',
      component: AdminEdit
    }]
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }]
  // }, {
  //   path: '/details/:id',
  //   name: 'Details',
  //   component: Details
  // }]
});


