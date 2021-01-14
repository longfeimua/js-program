/* 
大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。
n\leq 39n≤39
*/

function Fibonacci(n)
{
    // write code here
    // 0 1 1 2 3 5 8 11 
//     n = (n-1)+(n-2)
    if(n === 0) return 0
    if(n === 1) return 1
    let num1=0,num2=1,currntNum
    for( i = 2; i <= n; i++ ){
        currntNum = num1 + num2
        num1 = num2
        num2 = currntNum
    }
    return currntNum
}

module.exports = {
    Fibonacci : Fibonacci
};