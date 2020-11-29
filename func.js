let a = function(){
  function u(){}
  console.log(this)
  console.log(u.prototype)
}
a()
console.log(a.__proto__)