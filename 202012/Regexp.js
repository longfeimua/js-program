
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

console.log(reg5.test("kkkK3Rr@example.com"));  //true
console.log(reg5.test("@example.com"));         //false
console.log(reg5.test("kkkK3Rr@.com"));         //false
console.log(reg5.test("123456@mple.hahah"));    //true