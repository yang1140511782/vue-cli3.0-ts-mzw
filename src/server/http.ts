import axios from 'axios';
import qs from 'qs';

// 设置axios的请求超时
axios.defaults.timeout = 60000;

axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});

// post传参序列化(请求拦截器)
axios.interceptors.request.use((config): any => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  console.error('错误的参数');
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((res): any => {
  return res;
}, (error) => {
  return Promise.reject(error);
});

export function axiosGet(url: string, params: object | void): any {
  return new Promise((resolve, reject) => {
    axios.get(url, { params })
      .then((res) => {
        resolve(res.data);
      }, (error) => {
        reject(error);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function axiosPost(url: string, params: object | void): any {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then((res) => {
        resolve(res.data);
      }, (error) => {
        reject(error);
      })
      .catch((error) => {
        reject(error);
      });
  });
}


