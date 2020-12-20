let fs = require('fs');
let path = require('path');
let request = require('requests');
const cheerio = require('cheerio')


request('https://www.jsdaima.com/Uploads/js/201803/1522376449/css/demo.css').on('data', function (chunk) {
  // fs.writeFile(path.resolve(__dirname, 'demo.css'), chunk, () => {
  //   console.log('OK');
  // })


  const $ = cheerio.load(chunk)


})
