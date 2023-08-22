import zh_Hans from "./language/zh_Hans"
import en from "./language/en"
export default {
	colors: {

	},
	http: {
		development: '开发环境',
		production: '生产环境'
	},
	language: {
		languageCode: "zh_Hans",
		languagePackage: {
			"zh_Hans": zh_Hans,
			"en": en
		}
	},
	plugins: {
		"ui-layout": {
			backdrop: "",
			signboard: ""
		}
	}
}