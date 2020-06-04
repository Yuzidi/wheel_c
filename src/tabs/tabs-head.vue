<!--
 * @Author: your name
 * @Date: 2020-05-09 10:27:13
 * @LastEditTime: 2020-05-19 10:32:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\tabs-header.vue
 -->
<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluTabsHead",
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", (item, vm) => {
      this.updateLinePosition(vm)
    });
  },
  methods: {
    updateLinePosition(selectedVm) {
      let { width, left } = selectedVm.$el.getBoundingClientRect();
      let { left: left2 } = this.$refs.head.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left - left2}px`;
    }
  }
};
</script>

<style lang='scss' scoped>
$tab-height: 40px;
$blue: blue;
$tabs-border-color: #ddd;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  // border: 1px solid red;
  position: relative;
  border-bottom: 1px solid $tabs-border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
  }
}
</style>