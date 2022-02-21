/**
 * 关于手机设备操作
 */
// 开始监听手机转向
export const startDeviceMotionListening = (cb) => {
		console.log('开始监听方向')
		// #ifdef MP-WEIXIN
		wx.startDeviceMotionListening({
			success: (res) => {
				console.log(res)
			}
		})
		wx.onDeviceMotionChange((res) => {
			cb(res)
			// console.log(res)
		})
		// #endif
	}