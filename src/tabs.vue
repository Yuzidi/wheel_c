<!--
 * @Author: your name
 * @Date: 2020-05-09 10:25:43
 * @LastEditTime: 2020-05-11 10:15:25
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
    this.eventBus.$emit('update:selected', this.selected)
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