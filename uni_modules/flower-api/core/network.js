import {
	reactive
} from "vue";
const network = reactive({
	networkText: "",
	networkType: "",
	networkConnected: true
});

const networkTypeArray = ['none', '2g', 'offline'];

const networkRecombination = (e) => {
	if(networkTypeArray.includes(e.networkType)){
		network.networkConnected = false;
		network.networkText = `当前网络不可用,请检查你的网络设置`;
	}else{
		network.networkConnected = true;
		network.networkText = `网络连接正常：${e.networkType}`;
	};
	network.networkType = e.networkType;
}

uni.onNetworkStatusChange((res) => {
	networkRecombination(res)
});

uni.getNetworkType({
	success: (res) => {
		networkRecombination(res)
	}
});

const getNetwork = ()=>{
	return network;
}

export {
	network
}