
function test() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      a = 6
      resolve('ok')
    }, 3000);
  })
}

function test1() {
  setTimeout(() => {
    a = 7
  }, 3000);
}

let a = 1

async function start() {
  await test()
  console.log(a)
}

start()

/* 可以看出async 函数后 */