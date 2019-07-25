<template>
  <div class="films-wrap">
    <section>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in bannerList" :key="item.bannerId">
            <img :src="item.imgUrl">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </section>

    <section class="nav-wrapper">
      <router-link v-for="(item, index) in navList" :key="index" :to="item.path">{{item.name}}</router-link>
    </section>

    <section class="films-list-content">
      <router-view />
    </section>
    <MyTabbar />
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Watch } from 'vue-property-decorator';
import MyTabbar from '@/components/tabbar.vue';
import { films } from '@/server/api';
import Mint from 'mint-ui';
import Swiper from 'swiper';

@Component({
  components: {
    MyTabbar,
  },
})
export default class Index extends Vue {
  private bannerList: object = {};
  private navList: object[] = [
    { name: '正在热映', path: '/films/showingFilm' },
    { name: '即将上映', path: '/films/nextFilm' },
  ];

  private created() {
    this.initData();
  }
  
  private async initData(): Promise<void> {
    this.bannerList = await this.getBanber();
    this.$nextTick(() => {
      this.initSwiper();
    });
  }

  private initSwiper(): void {
    const swiper = new Swiper('.swiper-container', {
      autoplay: true, // 可选选项，自动滑动
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  private async getBanber(): Promise<object> {
    const { data } = await films.getBanner({ type: 2 });
    return data;
  }
}

</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';

.films-wrap {
  font-size: 14px;
  .swiper-container {
    @include wh(100%, 210px);

    .swiper-slide {
      img {
        @include wh(100%, 100%);
      }
    }
  }

  .nav-wrapper {
    @include wh(100%, 50px);
    display: flex;
    justify-content: space-around;
    align-items: center;

    .router-link-active {
      color: $dominantColor;
      position: relative;

      &::after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 2px;
        background: $dominantColor;
        position:absolute;
        bottom: -10px;
        left: 0;
      }
    }
  }
}
</style>