<!--
 * @Author: your name
 * @Date: 2020-05-09 10:27:13
 * @LastEditTime: 2020-05-11 16:28:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\tabs-header.vue
 -->
<template>
  <div class="tabs-item" @click='xxx' :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
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
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name, this)
    }
  },
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  },
  
}
</script>

<style lang='scss' scoped>
$blue: blue;
.tabs-item {
  /* flex-grow: 1; */
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  // border: 1px solid green;
  &.active {
    // background-color: red;
    color: $blue;
  }
}
</style>