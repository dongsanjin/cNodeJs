export default function conversionTime (topic) {
  let obj = topic
  const nowTime = Date.now()
  const lastTime = Date.parse(obj.create_at)
  obj.create_at = Math.ceil((nowTime - lastTime) / 1000 / 60)
  if (obj.create_at < 60){
    obj.create_at = obj.create_at + "分钟前"
  }else if (obj.create_at > 60){
    obj.create_at = Math.floor((nowTime - lastTime) / 1000 / 3600)
    if (obj.create_at < 24) {
      obj.create_at = obj.create_at + "小时前"
    } else if (obj.create_at >= 24 && obj.create_at < 744){
      obj.create_at = Math.floor(obj.create_at / 24) + "天前"
    } else if (obj.create_at >= 744){
      obj.create_at = Math.floor(obj.create_at / 24 / 30) + "个月前"
    }
  }
  return obj
}