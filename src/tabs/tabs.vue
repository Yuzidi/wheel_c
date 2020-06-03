<!--
 * @Author: your name
 * @Date: 2020-05-09 10:25:43
 * @LastEditTime: 2020-05-12 13:44:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\tabs.vue
 -->
<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "GuluTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  mounted() {
    if(this.$children.length === 0) {
      console && console.warn && console.warn('tab的子组件应该是tabs-head和tabs-body, 但你没有写子组件')
    }
    this.$children.forEach(vm => {
      if(vm.$options.name === "GuluTabsHead") {
        vm.$children.forEach(childVm => {
          if(childVm.$options.name === 'GuluTabsItem' && childVm.name === this.selected) {
            this.eventBus.$emit('update:selected', this.selected, childVm)
          }
        })
      }
     })
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  }
};
</script>

<style lang='scss' scoped>
/* .tabs {
  
} */
</style>