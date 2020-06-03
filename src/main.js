import Vue from "vue";
import App from "./App.vue";
import Button from './button/button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button/button-group'
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
import Tabs from './tabs/tabs.vue'
import TabsHead from './tabs/tabs-head.vue'
import TabsBody from './tabs/tabs-body.vue'
import TabsItem from './tabs/tabs-item.vue'
import TabsPane from './tabs/tabs-pane.vue'
import Popover from './popover.vue'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'
import Cascader from './cascader.vue'
import Transition from './transition.vue'
import Slides from './slides.vue'
import SlidesItem from './slides-item.vue'

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
Vue.component('g-transition', Transition)
Vue.component('g-slides', Slides)
Vue.component('g-slides-item', SlidesItem)
Vue.use(plugin)

import './varScss.scss'

Vue.config.productionTip = false;

new Vue({
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
  render: h => h(App)
}).$mount("#app");