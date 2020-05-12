<!--
 * @Author: your name
 * @Date: 2020-05-12 14:40:23
 * @LastEditTime: 2020-05-12 15:02:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\popover.vue
 -->
<template>
  <div class="popover" @click="xxx">
    <div class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluPopover",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    xxx() {
      this.visible = !this.visible;
    }
  }
};
</script>

<style lang='scss' scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>