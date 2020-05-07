/*
 * @Author: your name
 * @Date: 2020-05-05 10:49:24
 * @LastEditTime: 2020-05-05 16:05:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\plugin.js
 */
import Toast from './toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: toastOptions
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}