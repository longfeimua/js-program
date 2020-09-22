/**
 * 2020.9.19
 * xiximua
 * 
 */


export function CreateElementCanvas() {
  // 获取全部dom元素
  var allDiv, body
  allDiv = document.querySelectorAll("div");
  body = document.querySelector("body");

  //为全部元素添加onmuseover方法
  body.onmouseover = Main()
  for (let i = 0; i < allDiv.length; i++) {
    allDiv[i].onmouseover = Main()
  }

  function Main() {
    // 获取元素宽高
    let x = this.offsetLeft
    let y = this.offsetTop
    let width = this.offsetWidth
    let height = this.offsetHeight

    CreateCanvas(x, y, width, height)
  }

  //设置背景色
  function SetBackgroundColor(element, boolean) {
    if (boolean) {
      element.style.backgroundColor = "#aaa"
    }
    else {
      element.style.backgroundColor = ""
    }
  }

  //绘制canvas
  function CreateCanvas(x, y, width, height) {
    // 删除已有canvas节点
    ClearCanvas()
    let oneCanvas = document.createElement("CANVAS")
    oneCanvas.setAttribute("id", "select")

    // 画布位置
    oneCanvas.width = width
    oneCanvas.height = height
    oneCanvas.style.position = "absolute"
    oneCanvas.style.top = y + "px"
    oneCanvas.style.left = x + "px"
    oneCanvas.style.zIndex = "999"

    // 绘制区域颜色
    const ctx = oneCanvas.getContext('2d')
    ctx.fillStyle = "rgba(255,33,66,0.3)"
    ctx.fillRect(0, 0, width, height)

    document.body.appendChild(oneCanvas)
  }

  // 删除已存在的canvas画布
  function ClearCanvas() {
    if (document.getElementById("select")) document.getElementById("select").remove()
  }
}