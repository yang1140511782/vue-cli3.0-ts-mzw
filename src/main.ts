import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import axios from 'axios';

import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
