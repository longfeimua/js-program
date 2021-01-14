/* 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间，然后写一个 myClear，停止上面的 mySetInterVal */

    function mySetInterVal(fn,a,b){
        this.a=a
        this.b=b
        this.fn=fn
        this.count = 0
        this.timeOuter = null
        this.start =()=>{
            this.timeOuter = setTimeout(()=>{
                fn()
                this.count++
                this.start()
            },a+this.count*b)
        }
        // 10秒停止
        this.myClear=()=>{
            setTimeout(()=>{
                clearTimeout(this.timeOuter)
            },10000)
        }
    }

    let Timer = new mySetInterVal(()=>{console.log(123);},1000,500)
    Timer.start()
    Timer.myClear()
    