<template>
  <div>
    <span @click="minus">-</span>
    <input type="text">
    <span @click="add">+</span>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
  @Prop ({ default: 0 }) private num: any;
}
</script>

<style lang="scss">
  
</style>
