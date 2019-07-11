<template>
  <div>
		<!-- <van-tabbar
			v-model="active"
			active-color="#e54847"
		>
			<van-tabbar-item v-for="(item, index) in tabbarList" :key="index" :icon="item.icon">{{item.name}}</van-tabbar-item>
		</van-tabbar> -->
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import { Tabbar, TabbarItem } from 'vant';

@Component({
	components: {
		// [Tabbar.name]: Tabbar,
		// [TabbarItem.name]: TabbarItem,
	},
})

export default class Footer extends Vue {
	private active: number = 0;
	private tabbarList: object[] = [
		{
			icon: 'home-o',
			path: '/film',
			name: '电影',
		},
		{
			icon: 'search',
			path: '/cinema',
			name: '影院',
		},
		{
			icon: 'manager-o',
			path: '/mine',
			name: '我的',
		},
	];
}
</script>

<style>

</style>