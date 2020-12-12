const fs = require("fs");

// 返回指定地址的全部文件以及文件夹
function getAllFi(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) throw err
      resolve(files)
    })
  }).then((res) => {
    return res
  })
}

// 获得是否为文件 true--文件  false--文件夹
function IfDir(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) throw err;
      if (stats.isDirectory()) {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  }).then((res) => {
    return res
  })
}

// 获取文件大小 Kb
function getSize(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) throw err;
      let res = (stats.size).toFixed(2) + ' Kb';
      resolve(res)
    })
  }).then((res) => {
    return res
  })
}

//循环数组判断是否为文件
function arrIfDir(arr) {
  return new Promise((resolve, reject) => {
    arr.forEach((value) => {
      
    })
  }).then()
}

// 
async function Main(path) {
  let fi = await getAllFi(path);

}

Main('./')









// function findDirSize(path) {
//   fs.readdir(path, (err, files) => {
//     files.forEach((value) => {
//       fs.stat(path + '/' + value, (err, stats) => {
//         if (stats.isDirectory()) {
//           let sumSize = 0;
//           path += value;
//           recursiveDir(path, sumSize)
//           console.log(value + '\t' + '#文件大小：' + (sumSize / 1024 / 1024).toFixed(2) + ' MB');
//         } else {
//           console.log(value + '\t' + '#文件大小：' + (stats.size / 1024 / 1024).toFixed(2) + ' MB')
//         }
//       })
//     })
//   })
// }
// 文件夹递归
// function recursiveDir(path, sumSize) {
//   fs.readdir(path, (err, files) => {
//     files.forEach((value) => {
//       fs.stat(path + '/' + value, (err, stats) => {
//         if (stats.isDirectory()) {
//           path += value;
//           recursiveDir(path)
//         } else {
//           sumSize += stats.size
//         }
//       })
//     })
//   })
// }
