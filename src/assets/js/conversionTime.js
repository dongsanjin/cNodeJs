export default function conversionTime (arr) {
  const nowTime = Date.now()
  let create = ''
  arr.forEach(list => {
    let time = 0
    if (create !== '' && typeof create === 'boolean') {
      if(create === false){
        time = list.last_reply_at
      } else {
        time = list.create_at  
      }
    } else {
      if (list.last_reply_at) {
        create = false
        time = list.last_reply_at
      } else {
        create = true
        time = list.create_at
      }
    }
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
    create === false ? list.last_reply_at = time : list.create_at = time
  })
  return arr
}