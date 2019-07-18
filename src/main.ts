import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import axios from 'axios';
// import FastClick from 'fastclick';
import Mint from 'mint-ui';
import 'swiper/dist/css/swiper.css';
import 'mint-ui/lib/style.css';

Vue.use(Mint);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

// 兼容毒瘤ios的300ms延迟问题
/* if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      (FastClick as any).attach(document.body);
    },
    false,
  );
} */

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
