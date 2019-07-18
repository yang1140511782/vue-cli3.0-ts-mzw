<template>
  <div>
    <mt-tabbar>
      <mt-tab-item 
        v-for="(item, index) in tabbarList" 
        :key="item.id"
        @click.native="changeTab(index, item)">
        <div :class="currentTab === index ? 'tarbar-item-active' : 'tarbar-item'"> 
          <i class="icon" :class="currentTab === index ? 'icon-active'+index : 'icon-default'+index" :src="item.icon"></i>
          {{item.name}}
        </div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Tabbar, TabItem } from 'mint-ui';

interface TabbarList {
  id: number;
  name: string;
  path: string;
}

@Component({
  components: {
    [Tabbar.name]: Tabbar,
    [TabItem.name]: TabItem,
  },
})
export default class MyTabbar extends Vue {
  private tabbarList: TabbarList[] = [
    {id: 1, name: '电影', path: '/films'},
    {id: 2, name: '影院', path: '/mine'},
    {id: 3, name: '特惠', path: '/mine'},
    {id: 4, name: '我的', path: '/mine'},
  ];
  private currentTab: number = 0;

  private changeTab(index: number, item: any): void {
    this.currentTab = index;
    console.log('this.currentTab: ', this.currentTab);
    this.$router.push(item.path);
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';
.mint-tabbar {
  position: fixed;
  .mint-tab-item {
    background: #fff;
  }
  .tarbar-item, .tarbar-item-active {
    @include flex;
    flex-direction: column;
    color: #797d82;

    .icon {
      @include wh(21px, 21px);
      display: inline-block;
      margin-bottom: 5px;
    }

    .icon-default0 {
      @include backgroundImg('../assets/img/icon/films-default.png');
    }
    .icon-default1 {
      @include backgroundImg('../assets/img/icon/cinemas-default.png');
    }
    .icon-default2 {
      @include backgroundImg('../assets/img/icon/uugroupon-default.png');
    }
    .icon-default3 {
      @include backgroundImg('../assets/img/icon/mine-default.png');
    }

    .icon-active0 {
      @include backgroundImg('../assets/img/icon/films-active.png');
    }
    .icon-active1 {
      @include backgroundImg('../assets/img/icon/cinemas-active.png');
    }
    .icon-active2 {
      @include backgroundImg('../assets/img/icon/uugroupon-active.png');
    }
    .icon-active3 {
      @include backgroundImg('../assets/img/icon/mine-active.png');
    }
  }

  .tarbar-item-active {
    color: #ff5f16;
  }
}
</style>

