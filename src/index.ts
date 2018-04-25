import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'styles/main.scss';
import VeeValidate from 'vee-validate';

import router from 'router/router';
import App from 'pages/app.vue';
import store from 'store/index';

Vue.use(BootstrapVue);
Vue.use(VeeValidate);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
