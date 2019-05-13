//通过history.pushState()API来实现改变url同时不刷新页面
export default function changeUrl ( data ) {
  let url = ''
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  console.log(url)
  window.history.pushState(null, null, url)
  //同时将返回到页面顶部
  document.documentElement.scrollTop = 0
}

function param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}