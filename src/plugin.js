/*
 * @Author: your name
 * @Date: 2020-05-05 10:49:24
 * @LastEditTime: 2020-05-07 15:57:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\plugin.js
 */
import Toast from './toast'

let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if(currentToast) {currentToast.close()}
      currentToast = createToast({Vue, message, propsData: toastOptions})
    }
  }
}

function createToast({Vue, message, propsData}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}