<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluSlides",
  data() {
    return {};
  },
  props: {
    selected: {
      type: String
    }
  },
  methods: {
    updateChildren() {
      let first = this.$children[0];
      let selected = this.selected || first.name;
      this.$children.forEach(item => {
        item.selected = selected;
      });
    }
  },
  mounted() {
    this.updateChildren();
  },
  updated() {
    console.log("aaa");
    this.updateChildren();
  }
};
</script>

<style lang='scss' scoped>
.g-slides {
  display: inline-block;
  border: 1px solid black;
  &-wrapper {
    position: relative;
  }
}
</style>