<!--
 * @Author: your name
 * @Date: 2020-04-26 17:28:06
 * @LastEditTime: 2020-04-27 16:55:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ftmb-clientc:\Users\Administrator\Desktop\learn\wheel_c\src\row.vue
 -->
<template>
  <div class="row" :style="{marginLeft: -gutter/2 +'px', marginRight: -gutter/2 +'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluRow",
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  }
};
</script>

<style scoped>
.row {
  display: flex;
}
</style>