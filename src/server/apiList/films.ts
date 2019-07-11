import { axiosGet } from '../http';
/**
 * 电影首页接口
 */
const films = {
  getBanner() {
    return axiosGet('/api/getBanner', {params: { type: 2 }});
  },
};

export default films;
