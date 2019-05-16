export default function conversionTime (originTime) {
  let time = originTime
  const nowTime = Date.now()
  const lastTime = Date.parse(time)
  time = Math.ceil((nowTime - lastTime) / 1000 / 60)
  if (time < 60){
    time = time + "分钟前"
  }else if (time > 60){
    time = Math.floor((nowTime - lastTime) / 1000 / 3600)
    if (time < 24) {
      time = time + "小时前"
    } else if (time >= 24 && time < 744){
      time = Math.floor(time / 24) + "天前"
    } else if (time >= 744){
      time = Math.floor(time / 24 / 30) + "个月前"
    }
  }
  return time
}