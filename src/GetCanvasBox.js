/**
 * 2020.9.19
 * xiximua
 * 一个特别鸡勒的网页div方块选择器
 * issue: 选择元素后就不容易选择被覆盖的其他元素
 * 
 * 2020.12.01
 * canvas显示方法 换为 创建一个div,边框加粗
 */


function CreateElementBox() {
  // 获取全部dom元素
  var allDiv
  allDiv = document.querySelectorAll("div");

  //为全部元素添加onmuseover方法
  for (let i = 0; i < allDiv.length; i++) {
    timer = -1;
    clearTimer = -1;
    allDiv[i].onclick = () => {
      console.log(this)
    }

    allDiv[i].onmouseover = function (e) {
      e.stopPropagation()
      e.preventDefault()

      let currentDiv = this
      // 防抖(先立即执行一次，再计时)
      if (timer === 1) {
        return
      } else {
        Main(currentDiv)
        timer = 1
        setTimeout(() => {
          timer = -1
        }, 300)
      }
    }

    allDiv[i].onmouseout = function (e) {
      e.stopPropagation()
      e.preventDefault()

      // 防抖
      if (clearTimer === 1) {
        return
      } else {
        clearDivBox()
        clearTimer = 1
        setTimeout(() => {
          clearTimer = -1
        }, 300)
      }
    }
  }


  // 创建一个div
  function createDivBox(x, y, width, height) {
    clearDivBox()
    let divBox = document.createElement("div")
    divBox.setAttribute("id", "myOwnerDivBox")
    divBox.style.width = width + "px"
    divBox.style.height = height + "px"
    divBox.style.border = "3px solid red"

    divBox.style.position = "fixed"
    divBox.style.zIndex = "999"
    divBox.style.top = y + "px"
    divBox.style.left = x + "px"
    document.body.appendChild(divBox)
  }

  // 清除divbox
  function clearDivBox() {
    document.getElementById("myOwnerDivBox") ? document.getElementById("myOwnerDivBox").remove() : 1
  }


  function Main(obj) {
    // 获取元素宽高,位置
    let x = obj.getBoundingClientRect().left
    let y = obj.getBoundingClientRect().top
    let width = obj.clientWidth
    let height = obj.clientHeight

    createDivBox(x, y, width, height)

    // CreateCanvas(x, y, width, height)
  }


  // 设置边框
  // function setBorder(e) {
  //   e.stopPropagation()
  //   this.style.border = ""
  //   this.style.boxSizing = "border-box"
  //   this.style.border = "1px solid red"
  // }

  //清除边框
  // function clearBorder() {
  //   this.style.border = ''
  // }


  // 设置背景色
  // function SetBackgroundColor(element, boolean) {
  //   if (boolean) {
  //     element.style.backgroundColor = "#aaa"
  //   }
  //   else {
  //     element.style.backgroundColor = ""
  //   }
  // }

  // 绘制canvas
  // function CreateCanvas(x, y, width, height) {
  //   // 删除已有canvas节点
  //   ClearCanvas()
  //   let oneCanvas = document.createElement("CANVAS")
  //   oneCanvas.setAttribute("id", "select")

  //   // 画布位置
  //   oneCanvas.width = width
  //   oneCanvas.height = height
  //   oneCanvas.style.position = "absolute"
  //   oneCanvas.style.top = y + "px"
  //   oneCanvas.style.left = x + "px"
  //   oneCanvas.style.zIndex = "999"

  //   // 绘制区域颜色
  //   const ctx = oneCanvas.getContext('2d')
  //   ctx.fillStyle = "rgba(255,33,66,0.3)"
  //   ctx.fillRect(0, 0, width, height)

  //   document.body.appendChild(oneCanvas)
  // }

  // // 删除已存在的canvas画布
  // function ClearCanvas() {
  //   if (document.getElementById("select")) document.getElementById("select").remove()
  // }
}
