
/* 抽卡模拟 */

// 部分配置
const _option = {
  // ssr概率
  SSR_PROBABILITY: 0.03,
  // sp概率
  SP_PROBABILITY: 0.0075
}

//卡片类
class Card {
  constructor(name) {
    this.name = name
  }
}

// ssr卡片类
class Ssr extends Card {
  constructor(name) {
    super(name)
  }
  // 来点东西？
  // 比如是否觉醒
}

// sp卡片类
class Sp extends Card {
  constructor(name) {
    super(name)
  }
}

// 定义ssr卡片
const dyw = new Ssr('大岳丸')
const qj = new Ssr('千姬')
const cm = new Ssr('茨木童子')
const gq = new Ssr('鬼切')
const yzq = new Ssr('玉藻前')
const jt = new Ssr('酒吞童子')
const xln = new Ssr('小鹿男')
const dtg = new Ssr('大天狗')
const qxd = new Ssr('青行灯')
const ydj = new Ssr('妖刀姬')
const bah = new Ssr('彼岸花')
const h = new Ssr('荒')
const xtz = new Ssr('雪童子')
const yml = new Ssr('一目连')
const jnl = new Ssr('紧那罗')
const yzj = new Ssr('御馔津')
const hyj = new Ssr('辉夜姬')
const hnj = new Ssr('花鸟卷')
const ym = new Ssr('阎魔')
const sf = new Ssr('山风')
const mlq = new Ssr('面灵气')
const bzz = new Ssr('白藏主')
const bzh = new Ssr('不知火')
const lycj = new Ssr('泷夜叉姬')
const ywj = new Ssr('云外镜')
const gtw = new Ssr('鬼童丸')
const yjs = new Ssr('缘结神')
const llyq = new Ssr('铃鹿御前')

// 定义sp卡片
const yybr = new Sp('御怨般若')
const jtyzq = new Sp('烬天玉藻前')
const gwjt = new Sp('鬼王酒吞童子')
const cfyml = new Sp('仓管一目连')
const fgqj = new Sp('缚骨清姬')
const xyw = new Sp('骁浪荒川之主')
const lycm = new Sp('炼狱茨木童子')
const tjrxgq = new Sp('天剑韧心鬼切')
const sydtg = new Sp('少羽大天狗')
const dhs = new Sp('稻荷神御馔津')
const cyydj = new Sp('赤影妖刀姬')
const lmdyw = new Sp('麓铭大岳丸')
const dxghn = new Sp('待宵姑获鸟')
const fsqxd = new Sp('浮世青行灯')
const lhjyj = new Sp('聆海金鱼姬')

// 向ssr卡池添加卡片
let ssrPool = new Array
ssrPool.push(dyw, gq, cm, qj, yzq, jt, xln, dtg, qxd, ydj, bah, h, xtz, yml, jnl, yzj, hyj, hnj, ym, sf, mlq, bzz, bzh, lycj, ywj, gtw, llyq, yjs)

// 向sp卡池添加卡片
let spPool = new Array
spPool.push(yybr, jtyzq, gwjt, cfyml, fgqj, xyw, lycm, tjrxgq, sydtg, dhs, cyydj, lmdyw, dxghn, fsqxd, lhjyj)

// 抽一次卡
function getCard() {
  let aNum = Math.floor(Math.random() * 1000) / 1000
  // let aNum = 0.001
  if (aNum < _option.SSR_PROBABILITY) {
    // 随机一个ssr
    return {
      name: ssrPool[parseInt(Math.random() * ssrPool.length)].name,
      rarity: 'SSR'
    }
  } else if (aNum < _option.SSR_PROBABILITY + _option.SP_PROBABILITY) {
    return {
      name: spPool[parseInt(Math.random() * spPool.length)].name,
      rarity: 'SP'
    }
  } else {
    return 'empty'
  }
}

// 抽n次卡
function getTenCard(n) {
  let a = new Array
  let left = 0
  let count = 0
  let achievement = {
    primary: 0,
    middle: 0,
    advance: 0,
    ultimate: 0,
    big: 0
  }
  a.push('当前卡池SSR概率为' + _option.SSR_PROBABILITY + '；当前卡池SP概率为' + _option.SP_PROBABILITY + '；总共抽取' + n + '次\n')
  for (let i = 1; i <= n; i++) {
    // 判断非酋成就完成情况
    if (left >= 200) achievement.primary = 1
    if (left >= 300) achievement.middle = 1
    if (left >= 400) achievement.advance = 1
    if (left >= 500) achievement.ultimate = 1
    if (left >= 600) achievement.big = 1

    left++
    const oneCard = getCard()
    if (oneCard !== 'empty') {
      left = 0
      count = 1
      const c = '在第' + i + '次抽卡中获得' + oneCard.rarity + ' ' + oneCard.name+'\n'
      a.push(c)
    }
  }
  if (count === 0) {
    a.push('这一波无事发生')
  } else {
    if (achievement.primary === 1) a.push('###完成成就：非酋·初级\n')
    if (achievement.middle === 1) a.push('###完成成就：非酋·中级\n')
    if (achievement.advance === 1) a.push('###完成成就：非酋·高级\n')
    if (achievement.ultimate === 1) a.push('###完成成就：非酋·阴阳师\n')
    if (achievement.big === 1) a.push('###完成成就：非酋·大阴阳师\n')
  }
  return a.toString()
}

// 模拟10次抽卡
console.log(getTenCard(10))
