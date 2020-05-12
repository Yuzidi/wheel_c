<!--
 * @Author: your name
 * @Date: 2020-04-23 09:58:20
 * @LastEditTime: 2020-05-11 16:47:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\icon.vue
 -->
<template>
  <svg class="icon">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
import "./svg.js";
export default {
  name: "GuluIcon",
  props: {
    name: {}
  }
};
</script>

<style lang='scss' scoped>
.icon {
  height: 1em;
  width: 1em;
}
</style>