<template>
  <div>
    <Tabbar />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Tabbar from '@/components/tabbar';

@Component({
  components: {
    Tabbar,
  }
})
export default class Mine extends Vue {
}
</script>

<style lang="scss">
  
</style>
