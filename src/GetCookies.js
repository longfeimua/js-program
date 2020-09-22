/*
	获取页面cookie，返回 网页cookie键值对
	{
		key1:"value1"
		key2:"value2"
		key3:"value3"
	}
*/
export function GetCookies() {
	let cookies = document.cookie.split(";")
	if (!cookies) { return }
	let cookieKeyValue = {}
	for (let i = 0; i < cookies.length; i++) {
		let item = cookies[i].split("=")
		cookieKeyValue[item[0]] = item[1]
	}
	return cookieKeyValue
}
