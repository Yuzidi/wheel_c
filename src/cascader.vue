<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVisible">
      <cascader-items :items='source'></cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from "./cascader-items";
export default {
  name: "GuluCascader",
  data() {
    return {
      popoverVisible: false,
      level1Selected: null,
      level2Selected: null,
    };
  },
  props: {
    source: {
      type: Array
    }
  },
  methods: {},
  computed: {
    level2Items() {
      return this.level1Selected ? this.level1Selected.children : []
    },
    level3Items() {
      return this.level2Selected ? this.level2Selected.children : []
    }
  },
  components: {
    CascaderItems
  }
};
</script>

<style lang='scss' scoped>
.cascader {
  .trigger {
    height: 32px;
    width: 100px;
    border: 1px solid red;
  }
  .popover {
    // width: 80px;
    height: 200px;
    border: 1px solid red;
    display: flex;
    .label {
      white-space: nowrap;
    }
  }
}
</style>