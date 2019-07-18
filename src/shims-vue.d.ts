import VueRouter, { Route } from 'vue-router';
import Vue from 'vue';
import { Store } from 'vuex';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    $http: any;
    $notify: any;
    $router: VueRouter;
    $route: Route;
    $store: Store<any>;
  }
}

// 使用import导入图片
declare module "*.png" {
  const value: any;
  export = value;
}