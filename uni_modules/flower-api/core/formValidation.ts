// 默认错误信息
const defaultErrorMsg = {
	regex: ':attribute不符合验证规则',
	require: ':attribute为必填项',
	number: ':attribute只能为数字整数',
	chn: ':attribute只能为中文汉字',
	chnNum: ':attribute只能为中文汉字和数字',
	chnOrNum: ':attribute只能为中文汉字或者数字',
	alphaLine: ':attribute只能包含英文和下划线，首尾不能是下划线、且不能只是下划线',
	landline: ':attribute格式不正确',
	mobile: ':attribute格式不正确',
	alphaNum: ':attribute只能是字母和数字',
	email: ':attribute格式不正确',
	zipCode: ':attribute格式不正确',
	min: ':attribute长度不能小于:rule位',
	max: ':attribute长度不能大于:rule位',
	length: ':attribute长度只能在:rule之间',
	notbetween: ':attribute 不在 :1 - :2 范围之间',
	in: ':attribute只能在:rule范围内',
	notIn: ':attribute不能能在:rule范围内',
	identical: ':attribute与:rule不相同',
	different: ':attribute不能与:rule相同',
	gt: ':attribute必须大于:rule',
	egt: ':attribute必须大于或等于:rule',
	elt: ':attribute必须小于或等于:rule',
	lt: ':attribute必须小于:rule',
	eq: ':attribute必须等于:rule',
	notEq: ':attribute不能与:rule相同'
};
// 验证类型别名
const alias = {
	'>': 'gt',
	'>=': 'egt',
	'<': 'lt',
	'<=': 'elt',
	'=': 'eq',
	'same': 'eq',
	'!=': 'notEq',
	'<>': 'notEq'
};
const ruleVerify = {
	/**
	 * 正则
	 * @param {*} rule
	 * @param {*} value
	 */
	regex(rule : any, value : any) {
		let pattern = new RegExp(rule);
		return pattern.test(value);
	},

	/**
	 * 长度不能小于
	 * @param {String | Number} rule
	 * @param {String | Number} value
	 */
	min(rule : string | number, value : string | number) {
		return String(value).length >= Number(rule);
	},

	/**
	 * 长度不能大于
	 * @param {String | Number} rule
	 * @param {String | Number} value
	 */
	max(rule : string | number, value : string | number) {
		return String(value).length <= Number(rule);
	},

	/**
	 * 长度范围内
	 * @param {String | Number} rule
	 * @param {String | Number} value
	 */
	length(rule : string | number, value : string | number) {
		let length : number = String(value).length;
		if (String(rule).indexOf(',') > -1) {
			// 区间
			const [min, max] = String(rule).split(',');
			return length >= Number(min) && length <= Number(max);
		} else {
			// 固定
			return length == Number(rule);
		}
	},

	/**
	 * 不在范围之间
	 * @param {String | Number} rule
	 * @param {String | Number} value
	 */
	notbetween(rule : string | number, value : string | number) {
		let length : number = String(value).length;
		if (String(rule).indexOf(',') > -1) {
			const [min, max] = String(rule).split(',');
			return length < Number(min) || length > Number(max);
		} else {
			return false;
		};
	},

	/**
	 * 数据范围内
	 * @param {String} rule a,b,c多个包含
	 * @param {String | Number} value
	 */
	in(rule : string, value : string | number) {
		return rule.split(',').includes(String(value));
	},

	/**
	 * 数组不在范围内
	 * @param {String} rule
	 * @param {String | Number} value
	 */
	notIn(rule : string, value : string | number) {
		return !rule.split(',').includes(String(value));
	},

	/**
	 * 字段相同
	 * @param {String | Number | Boolean} rule
	 * @param {String | Number | Boolean} value
	 */
	identical(rule : string | number | boolean, value : string | number | boolean) {
		return String(rule) === String(value);
	},

	/**
	 * 字段不相同
	 * @param {String | Number | Boolean} rule
	 * @param {String | Number | Boolean} value
	 */
	different(rule : string | number | boolean, value : string | number | boolean) {
		return String(rule) != String(value);
	},

	/**
	 * 大于某值
	 * @param {String | Number} rule
	 * @param {String | Number} value
	 */
	gt(rule : string | number, value : string | number) {
		return Number(value) > Number(rule);
	},

	/**
	 * 大于或等于某值
	 * @param {String | Number} rule
	 * @param {String | Number} value
	 */
	egt(rule : string | number, value : string | number) {
		return Number(value) >= Number(rule);
	},

	/**
	 * 小于或等于某值
	 * @param {String | Number} rule
	 * @param {String | Number} value
	 */
	elt(rule : string | number, value : string | number) {
		return Number(value) <= Number(rule);
	},

	/**
	 * 小于某值
	 * @param {String | Number} rule
	 * @param {String | Number} value
	 */
	lt(rule : string | number, value : string | number) {
		return Number(value) < Number(rule);
	},

	/**
	 * 等于某值
	 * @param {String | Number} rule
	 * @param {String | Number} value
	 */
	eq(rule : string | number, value : string | number) {
		return Number(value) == Number(rule);
	},

	/**
	 * 不等于某值
	 * @param {String | Number} rule
	 * @param {String | Number} value
	 */
	notEq(rule : string | number, value : string | number) {
		return Number(value) != Number(rule);
	}
};


const getAlias = (value : string, compare = (a : string, b : string) => a === b) => {
	let result = Object.keys(alias).find(k => compare(alias[k], value));
	if (typeof result == 'undefined') {
		result = alias[value];
	};
	return result;
};

// 正则验证
const regExpCheck = (regExp : any, value : any) => {
	return regExp.test(value)
};

const buildError = (name : string, nameChn : string = '', rule : any, errorMsg : object = {}) => {
	let ruleValue : string = '';
	let ruleName : string = '';
	// 获取rule中 名称、范围
	if (typeof rule == 'object') {
		// 数组格式
		ruleName = rule[0];
		if (rule[1]) { ruleValue = rule[1]; };
	} else {
		// 字符串格式
		if (rule.indexOf(':') > -1) { [ruleName, ruleValue] = rule.split(':'); } else { ruleName = rule; };
	};
	// 装载错误信息
	const aliasRuleName : string = getAlias(ruleName) ? getAlias(ruleName) : ruleName;
	if (errorMsg[aliasRuleName]) {
		// 使用自定义错误信息
		// errorMessage.push(errorMsg[aliasRuleName]);
		return errorMsg[aliasRuleName];
	} else {
		let ruleValueArray : string[] = ['', ''];
		// 组合替换需要的数组格式
		if (String(ruleValue).indexOf(',') > -1) {
			// 范围内的数组格式
			ruleValueArray = ruleValue.split(',');
		};
		// 替换开始
		let defaultErrorMsgs = defaultErrorMsg[ruleName];
		defaultErrorMsgs = defaultErrorMsgs.replace(/(:attribute|:rule|:1|:2)/g, ($1 : string) => {
			return {
				// 可自定义字段中文名称
				':attribute': nameChn != '' ? nameChn : name,
				':rule': ruleValue,
				':1': ruleValueArray[0],
				':2': ruleValueArray[1],
			}[$1];
		});

		// errorMessage.push(defaultErrorMsgs);
		return defaultErrorMsgs;
	};
};

/**
 * 表单单项验证
 * @param {*} rule 验证规则名称
 * @param {*} value 验证数据
 */
const formCheckResult = (rule : any, value : any) : boolean => {
	switch (rule) {
		case 'require':
			// 必须项
			return !(!value || String(value).length < 1);
		case 'number':
			// 数值
			return regExpCheck(/^-?[1-9][0-9]?.?[0-9]*$/, value);
		case 'integer':
			// 整数
			return regExpCheck(/(^[1-9]\d*$)/, value);
		case 'float':
			// 浮点数
			return regExpCheck(/^(-?\\d+)(\\.\\d+)?$/, value);
		case 'chn':
			// 中文
			return regExpCheck(/^[\u4e00-\u9fa5]+$/u, value);
		case 'chnNum':
			// 同时包含数字和汉字
			return regExpCheck(/^[0-9\u4e00-\u9fa5]+$/u, value);
		case 'chnOrNum':
			// 包含汉字或者数字
			return regExpCheck(/^[\u4e00}-\u9fa5]+|[0-9]+$/u, value);
		case 'alphaLine':
			// 英文和下划线，首尾不能是下划线、且不能只是下划线
			return (value.slice(0, 1) != '_' && value.slice(-1) != '_' && regExpCheck(/^[A-Za-z\_]+$/, value));
		case 'landline':
			// 固定电话号
			return regExpCheck(/^(\+\d{2}-)?0\d{2,3}-\d{7,8}|(\+\d{2}-)?\(0\d{2,3}\)\d{7,8}$/, value);
		case 'mobile':
			// 手机号
			return regExpCheck(/^1[345789]\d{9}$/, value);
		case 'alphaNum':
			// 字母和数字
			return regExpCheck(/^[a-zA-Z]+|[0-9]+$/, value);
		case 'email':
			// 电子邮箱
			return regExpCheck(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, value);
		case 'zipCode':
			// 邮政编码
			return regExpCheck(/^[0-9]{6}$/, value);
		default:
			// 带范围验证
			let ruleArr : string[];
			if (typeof rule == 'string' && rule.indexOf(':') > -1) {
				// 字符串格式
				ruleArr = rule.split(':');
			};
			if (typeof rule == 'object') {
				// 数组格式
				ruleArr = rule;

			};
			if (typeof ruleVerify[ruleArr[0]] != 'function') {
				// 别名转换
				ruleArr[0] = getAlias(ruleArr[0]);
			};
			return ruleVerify[ruleArr[0]](ruleArr[1], value);
	};

};

interface ruleData {
	name : string,
	nameChn ?: string,
	rules : any[],
	errorMsg ?: object
}

/**
 * 表单单项验证
 * @param {Object} formData 表单数据
 * @param {*} ruleData 规则验证数据
 */
const formValidation = (formData : object, ruleData : ruleData[]) => {
	// 错误信息
	const errorMessage : object[] = [];
	// 是否验证通过
	let isVerify = true;
	for (let i in ruleData) {
		// 字段name
		const name = ruleData[i].name;
		// 字段中文名称
		const nameChn = ruleData[i].nameChn;
		// 字段数据
		const value = formData[name];
		// 规则列表
		const rules = ruleData[i].rules;
		// 自定义错误信息
		const errorMsg = ruleData[i].errorMsg;

		for (let index in rules) {
			// 如果规则中不存在require必填项，则跳过验证
			// 必填项
			if (rules.indexOf('require') < 0) { if (!formCheckResult('require', value)) { continue; }; };
			// 验证信息
			if (!formCheckResult(rules[index], value)) {
				// 验证未通过返回错误信息
				errorMessage.push(buildError(name, nameChn, rules[index], errorMsg));
			};
			// 是否通过验证
			if (isVerify) {
				if (!formCheckResult(rules[index], value)) {
					isVerify = false;
				};
			};
		};
	};
	// 验证结果
	return {
		verify: isVerify,
		message: isVerify ? '验证通过' : errorMessage[0],
		errorMessage: errorMessage
	};
}

export {
	formValidation,
	formCheckResult
};