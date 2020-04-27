<!--
 * @Author: your name
 * @Date: 2020-04-26 17:28:13
 * @LastEditTime: 2020-04-27 16:49:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ftmb-clientc:\Users\Administrator\Desktop\learn\wheel_c\src\col.vue
 -->
<template>
  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]" :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: 'GuluCol',
data() {
  return {
    gutter: 0
  }
},
props:{
  span:{
    type: [Number, String],
  },
  offset:{
    type: [Number, String],
  },
}
}
</script>

<style lang='scss' scoped>
.col{
  width: 50%;
  background-color: skyblue;
  height: 100px;
  border: 2px solid black;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%
    }
  }
}
</style>