import { reactive } from "vue";
const network = reactive({ networkText: "", networkType: "", networkConnected: true });

const networkTypeArray : string[] = ['none', '2g', 'offline'];

const networkRecombination = (networkType : string) => {
	if (networkTypeArray.includes(networkType)) {
		network.networkConnected = false;
		network.networkText = `当前网络不可用,请检查你的网络设置`;
	} else {
		network.networkConnected = true;
		network.networkText = `网络连接正常：${networkType}`;
	};
	network.networkType = networkType;
};

uni.onNetworkStatusChange((res) => {
	networkRecombination(res.networkType)
});

uni.getNetworkType({
	success: (res) => {
		networkRecombination(res.networkType)
	}
});

const getNetwork = () => {
	return network;
}

export {
	network, getNetwork
}