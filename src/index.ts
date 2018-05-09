import Vue from 'vue';

// bootstrao-vue components
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'styles/main.scss';

// form validation
import VeeValidate from 'vee-validate';

// toast notification
import Notifications from 'vue-notification';

// Application
import router from 'router/router';
import App from 'pages/App.vue';
import store from 'store/index';

Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(Notifications);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
