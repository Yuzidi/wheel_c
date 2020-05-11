<!--
 * @Author: your name
 * @Date: 2020-05-09 10:27:13
 * @LastEditTime: 2020-05-11 10:08:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\tabs-header.vue
 -->
<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluTabsHead",
  inject: ["eventBus"],
  created() {}
};
</script>

<style lang='scss' scoped>
$tab-height: 40px;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>