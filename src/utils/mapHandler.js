/**
 * 小程序地图、位置相关操作
 */
export const getLocation = (cb) => {
	uni.showLoading({
		title: '正在获取定位'
	});
	uni.getLocation({
		type: "gcj02",
		timeout: '1000',
		geocode: true,
		success: (res) => {
			uni.hideLoading();
			// this.longitude = res.longitude;
			// this.latitude = res.latitude;
			//把原始定位另存一份，便于返回
			cb(res)
		},
		fail: (err) => {
			uni.hideLoading();
			uni.showModal({
				title: '提示',
				content: '位置信息获取失败（请确定定位功能是否打开）',
				showCancel: false
			});
		}
	})
};
