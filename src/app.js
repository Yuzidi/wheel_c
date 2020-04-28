/*
 * @Author: your name
 * @Date: 2020-04-23 09:58:20
 * @LastEditTime: 2020-04-26 17:31:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ftmb-clientc:\Users\Administrator\Desktop\learn\wheel_c\src\app.js
 */
import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'h1'
    },
    methods: {
        inputchange(e) {
            console.log(e);
        }
    },
}) 