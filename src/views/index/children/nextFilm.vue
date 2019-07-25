<template>
  <div class="showing-film-box">
    <div class="loading" v-show="showLoading">
      <mt-spinner type="fading-circle"></mt-spinner>
      <p>加载中</p>
    </div>

    <FilmTemplate v-for="item in filmList" :key="item.filmId" :filmItem="item"></FilmTemplate>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import FilmTemplate from '@/components/filmTemplate.vue';
import { Action } from 'vuex-class';
import { Spinner } from 'mint-ui';
@Component({
  components: {
    FilmTemplate,
    [Spinner.name]: Spinner,
  },
})
export default class ShowingFilm extends Vue {
  @Action public getNextFilm!: (params: { type: number }) => Promise<object>;

  private filmList: [] = [];
  private showLoading: boolean = true;

  private created() {
    this.initData();
  }

  private async initData() {
    const data: any = await this.getNextFilm({ type: 1 });
    this.filmList = data.films;

    this.$nextTick((): void => {
      this.showLoading = false;
    });
  }
}
</script>

<style lang="scss">
.showing-film-box {
  overflow: auto;

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>