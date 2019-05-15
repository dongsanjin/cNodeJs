export default function conversionTime (arr) {
  const nowTime = Date.now()
  arr.forEach(list => {
    const lastTime = Date.parse(list.last_reply_at)
    list.last_reply_at = Math.ceil((nowTime - lastTime) / 1000 / 60)
    if (list.last_reply_at < 60){
      list.last_reply_at = list.last_reply_at + "分钟前"
    }else if (list.last_reply_at > 60){
      list.last_reply_at = Math.floor((nowTime - lastTime) / 1000 / 3600)
      if (list.last_reply_at < 24) {
        list.last_reply_at = list.last_reply_at + "小时前"
      } else if (list.last_reply_at >= 24 && list.last_reply_at < 744){
        list.last_reply_at = Math.floor(list.last_reply_at / 24) + "天前"
      } else if (list.last_reply_at >= 744){
        list.last_reply_at = Math.floor(list.last_reply_at / 24 / 30) + "个月前"
      }
    }
  })
  return arr
}