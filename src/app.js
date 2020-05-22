/*
 * @Author: your name
 * @Date: 2020-04-23 09:58:20
 * @LastEditTime: 2020-05-16 16:10:43
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
import Layout from './layout.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Toast from './toast.vue'
import plugin from './plugin.js'
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsBody from './tabs-body.vue'
import TabsItem from './tabs-item.vue'
import TabsPane from './tabs-pane.vue'
import Popover from './popover.vue'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'
import Cascader from './cascader.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-cascader', Cascader)
Vue.use(plugin)

import './varScss.scss'

new Vue({
    el: '#app',
    data: {
        source: [{
                name: '浙江',
                children: [{
                        name: '杭州',
                        children: [{
                                name: '上城区'
                            },
                            {
                                name: '下城区'
                            },
                            {
                                name: '江干区'
                            },
                        ]
                    },
                    {
                        name: '嘉兴',
                        children: [{
                                name: '南湖区'
                            },
                            {
                                name: '秀洲区'
                            },
                            {
                                name: '嘉善区'
                            },
                        ]
                    },
                    {
                        name: '啊啊'
                    },
                ]
            },
            {
                name: '江西省',
                children: [{
                        name: '南昌',
                        children: [{
                                name: '新建县'
                            },
                            {
                                name: '经济开发区'
                            }
                        ]
                    },
                    {
                        name: '上饶',
                        children: [{
                            name: '鄱阳县'
                        }]
                    },
                ]
            }
        ]
    },
    methods: {},
    created() {
        // this.$toast()
    }
})