import uniRequest from '@/utils/uniRequest'

export const requestPoints = (params) => {
	return uniRequest({
		url: '/map/allPoints',
		data: params,
		method: 'get'
	})
}