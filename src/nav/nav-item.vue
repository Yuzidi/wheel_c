<template>
  <div class="g-nav-item" :class="{selected, vertical}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluNavItem",
  inject: ["root", "vertical"],
  data() {
    return {
      selected: false
    };
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick() {
      this.root.namePath = [];
      this.$parent.$parent.updateNamePath &&
        this.$parent.$parent.updateNamePath();
      !this.vertical &&
        this.$parent.$parent.close &&
        this.$parent.$parent.close("close");
      this.$emit("add:selected", this.name);
    }
  },
  created() {
    this.root.addItem(this);
  },
  mounted() {
    this.$parent.$parent.updateNamePath &&
      this.$parent.$parent.updateNamePath();
    this.root.$options.propsData.selected.forEach(vm => {
      if (vm === this.name) {
        this.vertical && this.$parent.$parent.switch();
      }
    });
    this.selected && console.log("aaa");
    this.$emit("add:selected", "barbecue");
  }
};
</script>

<style lang='scss' scoped>
@import "varScss";
.g-nav-item {
  padding: 10px 20px;
  position: relative;
  &:hover {
      color: $color;
    }
  &.selected {
    // background-color: red;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      // top: 100%;
      width: 100%;
      border-bottom: 2px solid $blue;
    }
    &.vertical {
      &::after {
        border: none;
      }
    }
  }
  &.vertical {
    &:hover {
      background-color: $blue-bg;
    }
    &.selected {
      color: $blue;
      background-color: $blue-bg;
    }
  }
}
a {
  color: inherit;
  text-decoration: none;
}
.g-sub-nav .g-nav-item {
  &.selected {
    color: $color;
    background: $grey;
    &::after {
      display: none;
    }
    &.vertical {
      color: $blue;
      background-color: $blue-bg;
    }
  }
}
</style>