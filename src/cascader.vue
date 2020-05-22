<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover-warpper" v-if="popoverVisible">
      <cascader-items :items="source" class="popover" :class="[popoverClassName]"></cascader-items>
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
      level2Selected: null
    };
  },
  props: {
    source: {
      type: Array
    },
    popoverClassName: {
      type: String
    }
  },
  methods: {},
  computed: {
    level2Items() {
      return this.level1Selected ? this.level1Selected.children : [];
    },
    level3Items() {
      return this.level2Selected ? this.level2Selected.children : [];
    }
  },
  components: {
    CascaderItems
  }
};
</script>

<style lang='scss' scoped>
// @import url('varScss');
.cascader {
  position: relative;
  .trigger {
    height: 32px;
    width: 100px;
    border: 1px solid black;
  }
  .popover-warpper {
    position: absolute;
    background-color: #fff;
    display: flex;
    // @extend .box-shadow;
    box-shadow: 0 0 5px rgba(63, 45, 45, 0.15);
    .popover {
      height: 200px;
    }
  }
}
</style>