import { axiosGet } from '../http';
import { ResJson } from '../types';

/**
 * 电影首页接口
 */
const films = {
  getBanner(params: object = {}): Promise<ResJson> {
    return axiosGet('/api/getBanner', { params });
  },
  getFilms(params: object = {}): Promise<ResJson> {
    return axiosGet('api/getFilms', { params });
  },
  getNextFilm(params: object = {}): Promise<ResJson> {
    return axiosGet('api/getNextFilm', { params });
  },
};

export default films;
