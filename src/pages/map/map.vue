<template>
	<view>
		<map
			id="myMap" ref="myMap" style="width: 100%; height: 100vh;" :longitude="mapState.longitude"
			:show-location="isShowLocation" :latitude="mapState.latitude" :markers="myMarkers"></map>
	</view>
</template>

<script setup>
	import {
		reactive,
		onMounted
	} from 'vue'
	import env from '@/env/index'
	import {
		getImageUrl
	} from '@/utils/index'
	import { getLocation } from '@/utils/mapHandler.js'
	const props = defineProps({
	  isShowLocation: {
	    default: false,
	    type: Boolean,
	  },
	  myMarkers: {
		  default: ()=>[],
		  type: Array,
	  }
	});
	const mapState = reactive({
		longitude: 113.3230572938919,
		latitude: 23.150121689640006,
		currentPoint: {
			id: 0,
			longitude: 113,
			latitude: 23,
			rotate: 0,
			iconPath: '/static/images/map/nowPosition.png',
			width: 30,
			height: 30,
			label: {
				content: '当前位置',
				textAlign: 'center',
				color: '#FB3109'
			}
		}
	})
	const myGetLocation = () => {
		getLocation((res)=>{
			mapState.longitude = res.longitude;
			mapState.latitude = res.latitude;
			mapState.currentPoint.longitude = res.longitude;
			mapState.currentPoint.latitude = res.latitude;
		})
	}

	onMounted(() => {
		// env.MapContext = uni.createMapContext('map')
		myGetLocation()
	})
</script>

<style>
	
</style>
