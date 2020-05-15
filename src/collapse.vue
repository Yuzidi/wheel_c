<!--
 * @Author: your name
 * @Date: 2020-05-15 17:22:15
 * @LastEditTime: 2020-05-15 18:08:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\collapse.vue
 -->
<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluCollapse',
  data () {
    return {

    };
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>