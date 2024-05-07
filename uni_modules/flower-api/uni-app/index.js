// 基础
import { uuid } from "./basics";
// 页面
import { getCurrentPagesRoute } from "./getCurrentPages";
// flower-store
import { useStore, mixinStore } from "@/uni_modules/flower-store/uni-app"
// flower-theme
import { generate } from "@/uni_modules/flower-theme/uni-app";

export {
	uuid,
	getCurrentPagesRoute,
	useStore, mixinStore,
	generate
}