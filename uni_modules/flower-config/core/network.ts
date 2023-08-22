/**
 * 作者：邓琪昌
 * 创建日期：2023年8月10日
 * 描述：无网络检测
 */
import { ref } from "vue";
// 当前网络类型
const networkType = ref("");
// 不可用网络设定
const networkTypeArray : string[] = ['none', '2g', 'offline'];

uni.onNetworkStatusChange((res) => {
	networkType.value = res.networkType;
});

uni.getNetworkType({
	success: (res) => {
		networkType.value = res.networkType;
	}
});
/**
 * 判断网络是否错误
 * true：网络不可用
 * false：网络正常
 */
const judgeNetworkError = () : boolean => {
	return networkTypeArray.includes(networkType.value);
};

const getCurrentNetwork = () : boolean => {
return !networkTypeArray.includes(networkType.value);
}



export {
	judgeNetworkError,getCurrentNetwork
}