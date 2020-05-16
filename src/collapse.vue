<!--
 * @Author: your name
 * @Date: 2020-05-15 17:22:15
 * @LastEditTime: 2020-05-16 15:52:59
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
import Vue from "vue";
export default {
  name: "GuluCollapse",
  data() {
    return {
      eventBus: new Vue()
    };
  },
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String,
    },
  },
  methods: {},
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
  },
  provide() {
    if (this.accordion) {
      return {
        eventBus: this.eventBus
      };
    }
  }
};
</script>

<style lang='scss' scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>