<template>
  <div class="film-item">
    <img :src="filmItem.poster"/>

    <section class="film-item-info">
      <div class="ellipsis film-item-name">
        <span class="ellipsis">{{filmItem.name}}</span>
        <span class="tag">{{filmItem.filmType.name}}</span>
      </div>
      <div class="ellipsis label film-item-grade" :class="!!filmItem.grade ? '' :'visibility'">
        <span>观众评分</span>
        <span>{{filmItem.grade}}</span>
      </div>
      <div class="ellipsis label">主演：{{actors}}</div>
      <div class="ellipsis">
        <span class="label">{{filmItem.nation}} | {{filmItem.runtime}} 分钟</span>
      </div>
    </section>

    <div class="buy-btn" v-if="filmItem.isPresale">购票</div>
    <div class="buy-btn presale-btn" v-else>预购</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class FilmTemplate extends Vue {
  @Prop({ default: {} }) public filmItem: any;

  get actors(): string {
    return this.$props.filmItem.actors.reduce(
      (total: any, item: any): string => {
        return total + item.name;
      },
      '',
    );
  }
}
</script>


<style lang="scss">
@import '@/style/mixin.scss';

.visibility {
  visibility: hidden;
}

.film-item {
  height: 94px;
  display: flex;
  align-items: center;
  padding: 15px 15px;

  img {
    @include wh(66px, 94px);
  }

  .film-item-info {
    width: 210px;
    padding: 0 10px;

    .label {
      @include font(13px, #797d82);
      margin-top: 4px;
      display: block;
    }

    .film-item-name {
      height: 22px;
      @include font(18px, #191a1b);
      display: flex;
      align-items: center;

      .tag {
        @include font(9px, #fff);
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        margin-left: 5px;
      }
    }
  }

  .buy-btn {
    @include wh(50px, 25px);
    @include font(13px, $dominantColor);
    border: 1px solid $dominantColor;
    line-height: 23px;
    text-align: center;
    border-radius: 2px;
  }
  .presale-btn {
    border: 1px solid #ffb232;
    @include font(13px, #ffb232);
  }
}
</style>