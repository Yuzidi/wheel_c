<!--
 * @Author: your name
 * @Date: 2020-04-29 15:33:32
 * @LastEditTime: 2020-04-29 17:45:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\layout.vue
 -->
<template>
  <div class="layout" :class='layoutClass'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      if(vm.$options.name === 'GuluSider'){
        this.layoutClass.hasSider = true
      }
    })
  }
};
</script>

<style lang='scss' scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasSider {
    flex-direction: row;
  }
}
</style>