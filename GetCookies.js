/*
	获取页面cookie，返回 cookie键值对
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
