import Vue from 'vue';

import router from 'router/router';
import App from 'pages/app.vue';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import 'styles/main.scss';

import VeeValidate from 'vee-validate';

Vue.use(BootstrapVue);
Vue.use(VeeValidate);

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
