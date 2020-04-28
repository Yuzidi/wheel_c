<!--
 * @Author: your name
 * @Date: 2020-04-26 17:28:06
 * @LastEditTime: 2020-04-28 10:02:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ftmb-clientc:\Users\Administrator\Desktop\learn\wheel_c\src\row.vue
 -->
<template>
  <div class="row" :style="RowStyle">
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
  },
  computed: {
    RowStyle() {
      let {gutter} = this
      return {
        marginLeft: -gutter/2 +'px',
        marginRight: -gutter/2 +'px'
      }
    }
  }
};
</script>

<style scoped>
.row {
  display: flex;
}
</style>