<!--
 * @Author: your name
 * @Date: 2020-05-09 10:27:13
 * @LastEditTime: 2020-05-11 10:19:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\tabs-header.vue
 -->
<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsPane',
  inject: ['eventBus'],
  props: {
    name: {
      type: [String, Number]
    }
  },
  data() {
    return {
      active: false,
    }
  },
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  }
}
</script>

<style lang='scss' scoped>
.tabs-pane {
  &.active {
    background-color: red;
  }
}
</style>