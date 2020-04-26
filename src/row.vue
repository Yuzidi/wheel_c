<!--
 * @Author: your name
 * @Date: 2020-04-26 17:28:06
 * @LastEditTime: 2020-04-26 17:34:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ftmb-clientc:\Users\Administrator\Desktop\learn\wheel_c\src\row.vue
 -->
<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: 'GuluRow'
}
</script>

<style scoped>
.row {
  display: flex;
}
</style>