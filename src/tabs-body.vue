<!--
 * @Author: your name
 * @Date: 2020-05-09 10:27:13
 * @LastEditTime: 2020-05-11 17:19:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\tabs-header.vue
 -->
<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsBody',
  inject: ['eventBus'],
  created() {
  }
}
</script>

<style lang='scss' scoped>
// .tabs-body {}
</style>