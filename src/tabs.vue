<!--
 * @Author: your name
 * @Date: 2020-05-09 10:25:43
 * @LastEditTime: 2020-05-09 15:56:44
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
  }
};
</script>

<style>
/* .tabs {
  
} */
</style>