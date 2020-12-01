
/* push() */

let arr1 = [11, 24]
let count1 = arr1.push(1, "hello", 77)
arr1    // [ 11, 24, 1, 'hello', 77 ]
count1  // 5

/* unshift() */

let arr2 = [11, 24, 12]
let count2 = arr2.unshift("hello", 23)
arr2    // [ 'hello', 23, 11, 24, 12 ]
count2  // 5

/* pop() */

let arr3 = [11, 24, 12, "hello"]
let char3 = arr3.pop()
arr3  // [ 11, 24, 12 ]
char3 // "hello"

/* shift() */

let arr4 = [11, 24, 12]
let char4 = arr4.shift()
arr4  // [24,12]
char4 // 11

/* reverse() */

let arr5 = [11, 24, 12, 89]
let newarr5 = arr5.reverse()
arr5  //[ 89, 12, 24, 11 ]
newarr5 // [ 89, 12, 24, 11 ]

/* sort() */

let arr6 = [89, 12, 24, 11]
let newarr6 = arr6.sort((a, b) => {
  return a - b
})
arr6  // [ 11, 12, 24, 89 ]
newarr6 // [ 11, 12, 24, 89 ]

/* splice() */

let arr7 = [43, 26, 47, 23]
let newarr7 = arr7.splice(2, 1, "从第三个开始删除一个，再添加上我")
arr7  // [ 43, 26, '从第三个开始删除一个，再添加上我', 23 ]
newarr7 // [ 47 ]

/* concat() */

let arr8 = [9, 8, 7, 6]
let arrr8 = [5, 4, 3, 2]
let newarr8 = arr8.concat(arrr8)
newarr8 //[ 9, 8, 7, 6, 5, 4, 3, 2 ]

/* join() */

let arr9 = [11, 24, 12, 34, 20, 67, 85]
let str9 = arr9.join('-')
str9 // 11-24-12-34-20-67-85

/* slice() */

let arr10 = [11, 24, 12, 34, 20, 67, 85]
let newarr10 = arr10.slice(1, 3)
newarr10 // [ 24, 12 ]
arr10 // 不改变

/* toString() */

let arr11 = [11, 24, 12, 34, 20, 67, 85]
let newstr11 = arr11.toString()
newstr11  // 11,24,12,34,20,67,85
arr11     // 不改变

/* indexOf() */

let arr12 = [11, 24, 12, 34, 20, 12, 12]
let newIndex12 = arr12.indexOf(12)
let noIndex12 = arr12.indexOf(98)
newIndex12  // 2
noIndex12   // -1


/* lastIndexOf() */

let arr13 = [11, 24, 12, 34, 20, 12, 12, 85]
let newIndex13 = arr13.lastIndexOf(12)
let noIndex13 = arr13.lastIndexOf(98)
newIndex13  // 6
noIndex13   // -1

/* forEach */

let arr14 = [11, 24, 12, 34, 20, 12, 12, 85]
let newarr14 = arr14.forEach((value, index, array) => {
  return value + 2
})
newarr14 //undefied

/* map() */

let arr15 = [11, 24, 12, 34, 20, 12, 12, 85]
let newarr15 = arr15.map((value, index) => {
  return '' + value + index
})
// 原数组不变，经过回调函数对每项处理返回新的数组

let arr16 = [11, 24, 12, 34, 20, 12, 12, 85]
let newarr16 = arr16.filter((value, index) => {
  return value > 30
})
newarr16  // [34, 85]

/* every() */

let arr17 = [11, 24, 12, 34, 20, 12, 12, 85]
let newbool17 = arr17.every((value,index)=>{
  return value > 25
})
newbool17   // false

/* some() */

let arr18 = [11, 24, 12, 34, 20, 12, 12, 85]
let newbool18 = arr18.every((value,index)=>{
  return value > 25
})
newbool18   // true

/* reduce() */

let arr19 = [11, 24, 12, 34, 20, 12, 12, 85]
let newarr19 = arr19.reduce((prev,value,index)=>{
  return prev + value
})
newarr19 // 210

//reduce可以传入prev初始值

let newarrr19 = arr19.reduce((prev,value,index)=>{
  return prev + value
},100)
newarrr19 // 310

/* includes() */

let arr20 = [11, 24, 12, 34, 20, 12, 12, 85]
let newbool20 = arr20.includes(34,2)
newbool20 // true
// 第二个参数表示从哪个位置开始查找（从左到右）
