import Vue from 'vue';

import router from 'router/router';
import App from 'pages/app.vue';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
