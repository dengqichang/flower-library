import {
	reactive
} from "vue";
const network = reactive({
	networkText: '',
	networkType: '',
	networkConnected: false
});

uni.onNetworkStatusChange((res) => {
	network.networkType = res.networkType;
	switch (res.networkType) {
		case 'none':
			network.networkConnected = false;
			network.networkText = '无网络状态,请检查您的网络设置';
			break;
		case '2g':
			network.networkConnected = false;
			network.networkText = '网络连接不可用,请检查您的网络状态';
			break;
		default:
			network.networkConnected = true;
			network.networkText = `当前网络:${res.networkType}`;
			break;
	};
});

const getNetworkType = () => {
	uni.getNetworkType({
		success: (res) => {
			network.networkType = res.networkType;
			switch (res.networkType) {
				case 'none':
					network.networkConnected = false;
					network.networkText = '无网络状态,请检查您的网络设置';
					break;
				case '2g':
					network.networkConnected = false;
					network.networkText = '网络连接不可用,请检查您的网络状态';
					break;
				default:
					network.networkConnected = true;
					network.networkText = `当前网络:${res.networkType}`;
					break;
			};
		}
	});
	return network;
}

export {
	getNetworkType
}