<!--
 * @Author: your name
 * @Date: 2020-05-15 17:22:15
 * @LastEditTime: 2020-05-18 14:54:27
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
    accordion: { // 是否开启手风琴模式,只展开一个
      type: Boolean,
      default: false
    },
    selected: { // 展开的是哪一个
      type: Array
    }
  },
  methods: {},
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
    this.eventBus.$on("update:removeselected", name => { // 监听当关闭item时, 触发父组件的修改selected
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      let index = this.selected.indexOf(name);
      selectedCopy.splice(index, 1);
      this.eventBus.$emit("update:selected", selectedCopy); // 触发eventBus的事件
      this.$emit("update:selected", selectedCopy); // 触发父组件的事件
    });
    this.eventBus.$on("update:addselected", name => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      if (this.accordion) { // 如果是手风琴, 就直接赋值
        selectedCopy = [name];
      } else {
        selectedCopy.push(name); // 不是手风琴, 就push
      }
      this.eventBus.$emit("update:selected", selectedCopy);
      this.$emit("update:selected", selectedCopy);
    });
    this.$children.forEach(vm => {
      vm.accordion = this.accordion;
      // console.log(vm);
    });
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  }
};
</script>

<style lang='scss' scoped>
@import 'varScss';
.collapse {
  transition: all .5s;
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>