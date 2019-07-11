import VueRouter, { Route } from 'vue-router';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $http: any;
    $notify: any;
    $router: VueRouter;
    $route: Route
  }
}
declare module 'qs/types/qs' {
  const qs: any;
  export default qs;
}

// 使用import导入图片
declare module "*.png" {
  const value: any;
  export = value;
}