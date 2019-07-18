import { ActionTree } from 'vuex';
import { films } from '@/server/api';

const actions: ActionTree<any, any> = {
  // 获取电影列表
  async getFilms({ state, commit }, params): Promise<object> {
    const { data } = await films.getFilms(params);
    return data;
  },
};

export default actions;
