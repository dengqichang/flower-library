export default {
	props: {
		// 图标大小
		size: {
			type: String,
			default: "48"
		},
		// 线段粗细
		strokeWidth: {
			type: Number,
			default: 4
		},
		// 图标风格（颜色）
		theme: {
			type: String,
			default: "outline"
		},
		// 图标颜色["外部描边颜色","外部填充颜色","内部描边颜色","内部填充颜色"]
		fill: {
			type: [String, Array],
			default: "#333"
		},
		// 端点类型
		strokeLinecap: {
			type: String,
			default: "round"
		},
		// 拐点类型
		strokeLinejoin: {
			type: String,
			default: "round"
		}
	},
	methods: {
		/**
		 * 颜色转化为数组
		 */
		fillColor() {
			if (typeof this.fill == "string") {
				return [`${this.fill}`];
			} else {
				return this.fill;
			};
		},
		/**
		 * 多色
		 */
		multiColor() {
			const colorArray = this.fillColor();
			if (colorArray.length == 4) {
				return [colorArray[0], colorArray[1], colorArray[2], colorArray[3]];
			} else {
				return ["#333", "#2F88FF", "#FFF", "#43CCF8"];
			};
		},
		/**
		 * 双色
		 */
		twoTone() {
			const colorArray = this.fillColor();
			if (colorArray.length == 2) {
				return [colorArray[0], colorArray[1], colorArray[0], colorArray[1]];
			} else {
				return ["#333", "#2F88FF", "#333", "#2F88FF"];
			};
		},
		/**
		 * 填充
		 */
		filled() {
			const colorArray = this.fillColor();
			if (colorArray.length == 1) {
				return [colorArray[0], colorArray[0], '#FFF', '#FFF'];
			} else {
				return ["#333", "#333", "#FFF", "#FFF"];
			};
		},
		/**
		 * 线性
		 */
		outline() {
			const colorArray = this.fillColor();
			if (colorArray.length == 1) {
				return [colorArray[0], 'none', colorArray[0], 'none'];
			} else {
				return ["#333", "none", "#333", "none"];
			};
		},
		/**
		 * 根据主题取色彩
		 */
		colors(index) {
			if (this.theme == "filled") {
				return this.filled()[index]
			} else if (this.theme == "two-tone") {
				return this.twoTone()[index]
			} else if (this.theme == "multi-color") {
				return this.multiColor()[index]
			} else {
				return this.outline()[index]
			};
		}
	}
}