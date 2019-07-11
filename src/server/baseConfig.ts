/**
 * 接口域名管理
 */
interface Base {
  pro?: string;
  dev?: string;
  url: string;
  db: string;
}
const base: Base = {
  pro: '',      // 线上
  dev: 'https://www.easy-mock.com/mock/5cb412e7e8c2f21d36dccd66/mzw',      // 测试
  url: 'http',
  db: '/api',   // 遇到db就替换
};

export default base;
