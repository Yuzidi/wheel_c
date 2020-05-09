<!--
 * @Author: your name
 * @Date: 2020-05-09 10:27:13
 * @LastEditTime: 2020-05-09 16:03:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\tabs-header.vue
 -->
<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name='actions'></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsHead',
  
}
</script>

<style>
.tabs-head {
  
}
</style>