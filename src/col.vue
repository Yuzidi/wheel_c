<!--
 * @Author: your name
 * @Date: 2020-04-26 17:28:13
 * @LastEditTime: 2020-04-28 16:21:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ftmb-clientc:\Users\Administrator\Desktop\learn\wheel_c\src\col.vue
 -->
<template>
  <div
    class="col"
    :class="ColClass"
    :style="ColStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluCol",
  data() {
    return {
      gutter: 0
    };
  },
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  computed: {
    ColClass() {
      let {span, offset} = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`
      ]
    },
    ColStyle() {
      let {gutter} = this
      return {
        paddingLeft: gutter/2+'px',
        paddingRight: gutter/2+'px'
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.col {
  width: 50%;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>