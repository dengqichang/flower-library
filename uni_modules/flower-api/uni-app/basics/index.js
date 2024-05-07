/**
 * 获取uuid
 * @param length 生成uuid的长度
 */
export function uuid(length) {
	let uuid = "";
	let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	for (let i = 0; i < length; i++) {
		uuid += chars[Math.floor(Math.random() * chars.length)];
	};
	return uuid
};