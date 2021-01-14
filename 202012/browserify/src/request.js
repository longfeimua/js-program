let request = require('requests');
const cheerio = require('cheerio'); // 处理网页文件


function req() {
  return new Promise((resolve, reject) => {
    request('http://127.0.0.1:3000', { mode: 'navigate' }).on('data', function (chunk) {

      const $ = cheerio.load(chunk);
      let window = {};

      eval($('#getAreaStat').html());

      let provinceData = []

      function parseJSON(jsonObj) {
        /* 保留到一级数据 */
        jsonObj.forEach(element => {
          provinceData.push({
            provinceName: element.provinceName,
            currentConfirmedCount: element.currentConfirmedCount
          })
        });
      }
        parseJSON(window.getAreaStat)
      // fs.writeFile(path.resolve(__dirname, 'demo.json'), JSON.stringify(provinceData), () => {
      //   console.log('OK');
      // })

      resolve(provinceData)
    })
  })
}

module.exports = req