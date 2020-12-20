
/* 创建一个简单的正则表达式 */
let reg = new RegExp(123);
// console.log(reg);

let reg1 = /123/;
// console.log(reg1);

/* 验证字符串 */
// console.log(reg1.test("123")); // true
// console.log(reg1.test("012345")); // true
// console.log(reg1.test("012453456")); // false

let reg3 = /^\w\d$/;

// console.log(reg3.test("t1"));   // true
// console.log(reg3.test("ty"));   // false

/*
顺便介绍一下表达式中的^和$，分别是匹配字符串的开头和结尾。
*/

let reg4 = /^(13[0-9]|14[01456879])\d{8}$/

// console.log(reg4.test("18888888888"));  //false
// console.log(reg4.test("13000000000"));  //true
// console.log(reg4.test("1300000"));      //false
// console.log(reg4.test("14400000000"));  //true
// console.log(reg4.test("14200000000"));  //false


// 邮箱

let reg5 = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/

// console.log(reg5.test("kkkK3Rr@example.com"));  //true
// console.log(reg5.test("@example.com"));         //false
// console.log(reg5.test("kkkK3Rr@.com"));         //false
// console.log(reg5.test("123456@mple.hahah"));    //true

// 简单用户名规则
let reg6 = /^[a-zA-Z0-9]{3,20}$/

// console.log(reg6.test("Ponder")); // ture
// console.log(reg6.test("Po"));     //false
// console.log(reg6.test("ThereAreMoreThanTwentyCharacters"));//false
// console.log(reg6.test("中文用户名")); //false

// 不能使用除汉字以外的其他字符符号或空格

let reg7 = /[\u4e00-\u9fa5]{3,6}/;

// console.log(reg7.test("English"));    //false
// console.log(reg7.test("中文汉字"));   //true

// 这个汉字的编码我也是在网上找到的，unicode编码，相信大家在平时多多少少也见过的

// 违禁词替换
let reg8 = /(违禁|坎坷|最牛|第一)/g;
let str8 = "我是违禁词语，最牛系统，第一品牌,坎和坷";
let value = str8.match(reg8)
console.log(value); // [ '违禁', '最牛', '第一' ]
let toStr = str8.replace(reg8,"**")
console.log(toStr); // 我是**词语，**系统，**品牌,坎和坷


