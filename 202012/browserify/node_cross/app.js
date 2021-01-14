let express = require('express')
let request = require('requests')

let app = express()

// 设置跨域和相应数据格式
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, mytoken')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization')
  res.setHeader('Content-Type', 'application/json;charset=utf-8')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  if (req.method == 'OPTIONS') res.sendStatus(200)
   /*让options请求快速返回*/ else next()
})


app.get('/', (req, res) => {
  request('https://ncov.dxy.cn/ncovh5/view/pneumonia?from=timeline&isappinstalled=0').on('data', function (chunk) {
    res.send(chunk)
  })
})

app.listen(3000);