import Vue from 'vue';

import router from 'router/router';
import App from 'pages/app.vue';

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
