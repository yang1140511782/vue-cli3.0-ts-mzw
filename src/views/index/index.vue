<template>
  <div>
    <MyTabbar />
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import MyTabbar from '../../components/tabbar';
@Component({
  components: {
    MyTabbar,
  },
})
export default class Index extends Vue {
  public num: number = 1;
}

</script>

<style lang="scss">
  
</style>