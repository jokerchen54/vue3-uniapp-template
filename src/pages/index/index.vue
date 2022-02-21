<template>
	<view class="content">
		<!-- <div>svg-icon 使用示例(只有在h5中能使用)</div> -->
		<!-- <svg-icon icon-class="dashboard" class="dashboard" /> -->
		<Map class="map-box" :is-show-location="true"></Map>
		<button class="button" size="mini" type="primary" @click="startNavigateTo">路径规划测试</button>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	import Map from '../map/map.vue'
	// eslint-disable-next-line no-undef
	let plugin = requirePlugin('routePlan');
	let key = 'EL4BZ-HNSR3-65K3Y-YEFVH-6QCIT-S6FPB'; //使用在腾讯位置服务申请的key
	let referer = '公厕导航测试'; //调用插件的app的名称
	const startNavigateTo = () => {
		let endPoint = JSON.stringify({ //终点
		 'name': '测试地点',
		 'latitude': 23,
		 'longitude': 113
		});
		// #ifdef MP-WEIXIN
		wx.navigateTo({
		 url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
		});
		// #endif
		
	}
</script>

<style lang="scss" scoped>
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.button {
		position: absolute;
		z-index: 99999;
	}
</style>
