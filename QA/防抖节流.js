/* 介绍防抖节流原理、区别以及应用，并用JavaScript进行实现  */

/* 
	防抖原理：在一个事件触发之后进行的延时操作，若事件在此延时段内又被触发，则重新计时。
	场景适用：搜索框输入联想，防止按钮短时间多次触发 
	使用setTimeout -- setTimeout
*/

// 规定时间过后执行 (创建很多的定时器)
function debounce(func, wait) {

	let timeouter;

	return function () {

		clearTimeout(timeouter);

		setTimeout(() => {
			func()
		}, wait)

	}
}

// 先执行一次
function debounce(func, wait) {

	let

}

/*
	节流原理：规定一定时间内只能触发一次函数
*/


