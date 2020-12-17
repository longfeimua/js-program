# 正则表达式（Regular expression）学习记录2

12-17

前两天刚刚初步认识了正则表达式的创建以及简单的匹配。

今天我想到了一些之前遇到过的很多表单验证：注册页面的密码规则，用户名规则。

### 简单用户名规则

1).例如有这样的一个要求：**用户名可以由所有大小写字母以及数字组成，总共字符长度在3-20位（包括3和20）**

```javascript
let reg6 = /^[a-zA-Z0-9]{3,20}$/

console.log(reg6.test("Ponder")); // ture
console.log(reg6.test("Po"));     //false
console.log(reg6.test("ThereAreMoreThanTwentyCharacters")); //false
console.log(reg6.test("中文用户名")); //false
```

2),以前在某些**游戏起名的时候被要求只能用中文，不能用字母和数字符号还有空格**。

```javascript
let reg7 = /[\u4e00-\u9fa5]{3,10}/;

console.log(reg7.test("English"));	//false
console.log(reg7.test("中文汉字"));		//ture
// 这个汉字的编码我也是在网上找到的，Unicode编码。
// 除此之外，Unicode包含了国际上大部分已知字符
// 我们国家的汉字都在上边那个范围内
```

3).聊天时**不允许有违禁词**。

这个其实比较常见，屏蔽关键词，星号替换违规词

```javascript
let reg8 = /(违禁|坎坷|最牛|第一)/g;
let str8 = "我是违禁词语，最牛系统，第一品牌,坎和坷";
let value = str8.match(reg8)
console.log(value); // [ '违禁', '最牛', '第一' ]
let toStr = str8.replace(reg8,"**")
console.log(toStr); // 我是**词语，**系统，**品牌,坎和坷
```