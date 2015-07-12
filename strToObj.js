/*-- 2015.07.12 | https://github.com/Luoxue-xu/strToObj--*/

//解析字符串转换为对象
function toObj(value) {
	var str = value.replace(/\{|\}/g, '').split(','),
		i = 0,
		len = str.length,
		attrs = {};

	for( ; i < len; i++ ) {
		attrs[str[i].split(':')[0]] = /^\d/.test(str[i].split(':')[1]) ? parseInt(str[i].split(':')[1]) : str[i].split(':')[1];
	}
	return attrs;
}