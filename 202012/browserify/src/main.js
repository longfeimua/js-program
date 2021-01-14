let request = require('./request')
let echarts = require('echarts')

var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据
request().then((data) => {


  var option = {
    title: {
      text: '国内各省当前感染人数'
    },
    tooltip: {},
    legend: {
      data: ['当前感染人数']
    },
    xAxis: {
      data: []
    },
    yAxis: {},
    series: [{
      name: '当前感染人数',
      type: 'bar',
      data: []
    }]
  };

  data.forEach((element) => {
    option.xAxis.data.push(element.provinceName)
    option.series[0].data.push(element.currentConfirmedCount)
  })


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})

