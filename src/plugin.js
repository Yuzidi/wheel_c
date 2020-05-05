/*
 * @Author: your name
 * @Date: 2020-05-05 10:49:24
 * @LastEditTime: 2020-05-05 14:55:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\plugin.js
 */
import Toast from './toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor()
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}