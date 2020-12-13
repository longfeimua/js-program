# cookies,sessionStorage,localStorage之间的区别

首先三者均可以保存浏览器的状态数据，数据是存储在客服端的

cookie 支持的数据内容小，8k 左右。localStorage 目前能支持到 10M.
cookie 不能跨域访问，作为 http 请求的一部分，无意中增加带宽。
localStorage 本地持久化。
Web Storage 拥有 setItem,getItem,removeItem,clear 等方法
不像 cookie 需要前端开发者自己封装 setCookie，getCookie。
localStorage 适用于长期存储数据，浏览器关闭后数据不丢失
sessionStorage 存储的数据在浏览器关闭后自动删除

cookie 数据始终在同源的 http 请求中携带（即使不需要），即 cookie 在浏览器和服务器间来回传递。
而 sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存。
cookie 数据还有路径（path）的概念，可以限制 cookie 只属于某个路径下。

### 总结

- cookie 会在浏览器和服务器间来回传递，尽管这个cookie不需要
- sessionStorage 和 localStorage 不会
- sessionStorage 和 localStorage 的存储空间更大；
- sessionStorage 和 localStorage 有更多丰富易用的接口；
- sessionStorage 和 localStorage 各自独立的存储空间；