<!--
 * @Author: your name
 * @Date: 2020-04-26 17:28:13
 * @LastEditTime: 2020-04-26 17:41:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ftmb-clientc:\Users\Administrator\Desktop\learn\wheel_c\src\col.vue
 -->
<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: 'GuluCol',
props:{
  span:{
    type: [Number, String]
  }
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
}
</style>