document.addEventListener('click', (e) => {
  callback.forEach(item => {
    if(item.el === e.target || item.el.contains(e.target)) {
      return
    }else {
      item.callback()
    }
  })
})
let callback = []
export default {
  bind: function (el, binging, vnode) {
    callback.push({el, callback: binging.value})
  }
}