<!--
 * @Author: your name
 * @Date: 2020-04-26 17:28:06
 * @LastEditTime: 2020-05-07 15:26:35
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
    },
    align: {
      type: String,
      validator(value) {
        return ['center', 'end', 'space-between', 'space-around', 'left', 'right'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  },
  computed: {
    RowStyle() {
      let {gutter, align} = this
      align && align === 'left' && (align = 'flex-start')
      align && align === 'right' && (align = 'flex-end')
      return {
        marginLeft: -gutter/2 +'px',
        marginRight: -gutter/2 +'px',
        justifyContent: align,
      }
    }
  }
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
</style>