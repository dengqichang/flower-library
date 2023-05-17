import "../../core/emptyChunk.js";
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
	 * @param {Object} rule
	 * @param {Object} value
	 */
	regex(rule, value) {
		var pattern = new RegExp(rule);
		return pattern.test(value);
	},

	/**
	 * 长度不能小于
	 * @param {Object} rule
	 * @param {Object} value
	 */
	min(rule, value) {
		return String(value).length >= rule;
	},

	/**
	 * 长度不能大于
	 * @param {Object} rule
	 * @param {Object} value
	 */
	max(rule, value) {
		return String(value).length <= rule;
	},

	/**
	 * 长度范围内
	 * @param {Object} rule
	 * @param {Object} value
	 */
	length(rule, value) {
		var length = String(value).length;
		if (String(rule).indexOf(',') > -1) {
			// 区间
			[min, max] = rule.split(',');
			return length >= min && length <= max;
		} else {
			// 固定
			return length == rule;
		}
	},

	/**
	 * 不在范围之间
	 * @param {Object} rule
	 * @param {Object} value
	 */
	notbetween(rule, value) {
		if (String(rule).indexOf(',') > -1) {
			[min, max] = rule.split(',');
			return value < min || value > max;
		}
		return false;
	},

	/**
	 * 数据范围内
	 * @param {Object} rule a,b,c多个包含
	 * @param {Object} value
	 */
	in(rule, value) {
		return rule.split(',').includes(value);
	},

	/**
	 * 数组不在范围内
	 * @param {Object} rule
	 * @param {Object} value
	 */
	notIn(rule, value) {
		return !rule.split(',').includes(value);
	},

	/**
	 * 字段相同
	 * @param {Object} rule
	 * @param {Object} value
	 */
	identical(rule, value) {
		return rule === value;
	},

	/**
	 * 字段不相同
	 * @param {Object} rule
	 * @param {Object} value
	 */
	different(rule, value) {
		return rule != value;
	},

	/**
	 * 大于某值
	 * @param {Object} rule
	 * @param {Object} value
	 */
	gt(rule, value) {
		return Number(value) > rule;
	},

	/**
	 * 大于或等于某值
	 * @param {Object} rule
	 * @param {Object} value
	 */
	egt(rule, value) {
		return Number(value) >= rule;
	},

	/**
	 * 小于或等于某值
	 * @param {Object} rule
	 * @param {Object} value
	 */
	elt(rule, value) {
		return Number(value) <= rule;
	},

	/**
	 * 小于某值
	 * @param {Object} rule
	 * @param {Object} value
	 */
	lt(rule, value) {
		return Number(value) < rule;
	},

	/**
	 * 等于某值
	 * @param {Object} rule
	 * @param {Object} value
	 */
	eq(rule, value) {
		return Number(value) == rule;
	},

	/**
	 * 不等于某值
	 * @param {Object} rule
	 * @param {Object} value
	 */
	notEq(rule, value) {
		return Number(value) != rule;
	}
};

// 查找别名
function getAlias(value, compare = (a, b) => a === b) {
	var result = Object.keys(alias).find(k => compare(alias[k], value))
	if (typeof result == 'undefined') {
		var result = alias[value];
	}
	return result;
};

// 错误信息
let error = [];
// 构建错误信息
function buildError(name, nameChn = '', rule, errorMsg = '') {
	// 获取rule中 名称、范围
	if (typeof rule == 'object') {
		// 数组格式
		var ruleName = rule[0];
		if (rule[1]) {
			var ruleValue = rule[1];
		} else {
			var ruleValue = '';
		}
	} else {
		// 字符串格式
		if (rule.indexOf(':') > -1) {
			var ruleArray = rule.split(':');
			var ruleName = ruleArray[0];
			var ruleValue = ruleArray[1];
		} else {
			var ruleName = rule;
			var ruleValue = '';
		}
	}

	if (errorMsg !== '') {
		// 使用自定义错误信息
		if (!errorMsg[ruleName]) {
			// 规则中有不存在的自定义信息
			if (typeof getAlias(ruleName) != 'undefined') {
				// 别名
				error.push(errorMsg[getAlias(ruleName)]);
				return;
			}
		} else {
			// 所有规则自定义信息都存在
			error.push(errorMsg[ruleName]);
			return;
		}
	}

	// 组合替换需要的数组格式
	if (String(ruleValue).indexOf(',') > -1) {
		// 范围内的数组格式
		var ruleValueArray = ruleValue.split(',');
		ruleValueArray.push('');
	} else {
		var ruleValueArray = ['', '', ''];
	}

	// 替换开始
	var defaultErrorMsgs = defaultErrorMsg[ruleName];
	defaultErrorMsgs = defaultErrorMsgs.replace(/(:attribute|:rule|:1|:2)/g, ($0, $1) => {
		return {
			// 可自定义字段中文名称
			':attribute': nameChn != '' ? nameChn : name,
			':rule': ruleValue,
			':1': ruleValueArray[0],
			':2': ruleValueArray[1],
		} [$1];
	});
	error.push(defaultErrorMsgs);
};

// 验证结果
function checkResult(rule, value) {
	switch (rule) {
		case 'require':
			// 必须项
			return !(!value || String(value).length < 1);
			break;
		case 'number':
			// 数值
			return regex(/^-?[1-9][0-9]?.?[0-9]*$/, String(value));
			break;
		case 'integer':
			// 整数
			return regex(/(^[1-9]\d*$)/, String(value));
			break;
		case 'float':
			// 浮点数
			return regex(/^(-?\\d+)(\\.\\d+)?$/, String(value));
			break;
		case 'chn':
			// 中文
			return regex(/^[\u4e00-\u9fa5]+$/u, decodeURI(value));
			break;
		case 'chnNum':
			// 同时包含数字和汉字
			return regex(/^[0-9\u4e00-\u9fa5]+$/u, decodeURI(value));
			break;
		case 'chnOrNum':
			// 包含汉字或者数字
			return regex(/^[\u4e00}-\u9fa5]+|[0-9]+$/u, decodeURI(value));
			break;
		case 'alphaLine':
			// 英文和下划线，首尾不能是下划线、且不能只是下划线
			return (value.slice(0, 1) != '_' && value.slice(-1) != '_' && regex(/^[A-Za-z\_]+$/, value));
			break;
		case 'landline':
			// 固定电话号
			return regex(/^(\+\d{2}-)?0\d{2,3}-\d{7,8}|(\+\d{2}-)?\(0\d{2,3}\)\d{7,8}$/, decodeURI(value));
			break;
		case 'mobile':
			// 手机号
			return regex(/^1[345789]\d{9}$/, parseInt(decodeURI(value)));
			break;
		case 'alphaNum':
			// 字母和数字
			return regex(/^[a-zA-Z]+|[0-9]+$/, value);
			break;
		case 'email':
			// 电子邮箱
			return regex(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, value);
			break;
		case 'zipCode':
			// 邮政编码
			return regex(/^[0-9]{6}$/, value);
			break;
		default:
			// 带范围验证
			if (typeof rule == 'string' && rule.indexOf(':') > -1) {
				// 字符串格式
				var ruleArr = rule.split(':');
			}
			if (typeof rule == 'object') {
				// 数组格式
				var ruleArr = rule;
			};
			if (typeof ruleVerify[ruleArr[0]] != 'function') {
				// 别名转换
				ruleArr[0] = getAlias(ruleArr[0]);
			}
			return ruleVerify[ruleArr[0]](ruleArr[1], value);
	}
};

// 开始验证
function formValidator(formData, param) {
	// 避免再次验证后出现重复错误信息，清空错误信息
	error = [];

	for (var i = 0; i < param.length; i++) {
		// 字段name
		var name = param[i].name;
		// 字段中文名称
		var nameChn = param[i].nameChn;
		// 字段数据
		var value = formData[name];
		// 规则列表
		var rules = param[i].rules;
		// 自定义错误信息
		var errorMsg = param[i].errorMsg;

		for (let index in rules) {
			if (rules.indexOf('require') < 0) {
				// 必填项
				if (!checkResult('require', value)) {
					continue;
				}
			}

			if (!checkResult(rules[index], value)) {
				// 验证未通过返回错误信息
				buildError(name, nameChn, rules[index], errorMsg);
			}
		}
	};
	// 验证结果
	return {
		verify: JSON.stringify(error) == '[]' ? true : false,
		message: error[0] || '验证通过',
		errorMessage: error
	};
};



export {
	formValidator
}