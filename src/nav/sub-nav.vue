<template>
  <div class="g-sub-nav">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="g-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluSubNav",
  data() {
    return {
      open: false
    };
  },
  methods: {
    onClick() {
      this.open = true;
    }
  }
};
</script>

<style lang='scss' scoped>
.g-sub-nav {
  position: relative;
  > span {
    padding: 10px 20px;
    display: inline-block;
    vertical-align: text-top;
  }
  &-popover {
    position: absolute;
    border: 1px solid skyblue;
    top: 100%;
    left: 0;
    white-space: nowrap;
  }
}
</style>