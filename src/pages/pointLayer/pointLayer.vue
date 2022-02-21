<template>
	<view class="content">
		<Map class="map-box" :my-markers="pointMarkers"></Map>
	</view>
</template>

<script setup>
	import Map from '../map/map.vue'
	import { ref, onMounted } from 'vue'
	import { requestPoints } from '@/api/map.js'
	import { POINTS_DATA } from '@/data/pointsData.js'
	const pointMarkers = ref([])
	const getMarkers = () => {
		// 网络请求
		// requestPoints().then(res => {
		// 	console.log(res)
		// })
		// 本地模拟
		buildMarkers(POINTS_DATA.result)
	}
	const buildMarkers = (data) => {
		const res = []
		const {features} = data
		// console.log(features)
		features.forEach((item,index) => {
			const tmp = {
				// rotate: 0,
				iconPath: '/static/images/map/toiletIcon.png',
				width: 20,
				height: 20,
				joinCluster: true, // 指定了该参数才会参与聚合
				// label: {
				// 	content: '当前位置',
				// 	textAlign: 'center',
				// 	color: '#FB3109'
				// }
				callout: { // 图标上方小气泡
					content: `第${index}个测试点`,
					display: 'BYCLICK' // 点击显示
				}
			}
			tmp.id = index
			tmp.longitude = item.geometry.coordinates[0]
			tmp.latitude = item.geometry.coordinates[1]
			res.push(tmp)
		})
		pointMarkers.value = res
	}
	
	onMounted(()=>{
		getMarkers()
	})
	
</script>

<style lang="scss" scoped>
	
</style>
