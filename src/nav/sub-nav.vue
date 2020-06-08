<template>
  <div class="g-sub-nav" v-click-ouside="close" :class="{active}">
    <span @click="onClick" class="g-sub-nav-label">
      <slot name="title"></slot>
      <span class="g-sub-nav-icon" :class="{open}">
        <g-icon class="g-sub-nav-icon-right" name="right"></g-icon>
        <g-icon class="g-sub-nav-icon-down" name="down"></g-icon>
      </span>
    </span>
    <g-transition :visible='open'>
      <div class="g-sub-nav-popover" v-show="open" :class="{vertical}">
        <slot></slot>
      </div>
    </g-transition>
  </div>
</template>

<script>
import clickOuside from "../click-outside";
import GIcon from "../icon";
import GTransition from '../transition'
export default {
  name: "GuluSubNav",
  inject: ["root", 'vertical'],
  data() {
    return {
      open: false
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
      this.open = !this.open;
    },
    close(e) {
      this.open = false;
      !this.vertical && e && this.$parent.$parent.close && this.$parent.$parent.close("close");
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name);
      if (this.$parent.$parent.updateNamePath) {
        this.$parent.$parent.updateNamePath();
      }
    }
  },
  computed: {
    active() {
      // console.log(this.root.namePath);
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false;
    }
  },
  directives: {
    clickOuside
  },
  components: {
    GIcon
  }
};
</script>

<style lang='scss' scoped>
@import "varScss";
.g-sub-nav {
  position: relative;
  &.active {
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      // top: 100%;
      width: 100%;
      border-bottom: 2px solid $blue;
    }
  }
  &-label {
    padding: 10px 20px;
    display: block;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-icon {
    display: inline-flex;
    margin-left: 1em;
    transition: transform 250ms;
    font-size: 12px;
      svg {
        fill: $light-color;
      }
      &.open {
        transform: rotate(180deg);
      }
    &-right {
      display: none;
    }
  }
  &-popover {
    font-size: $font-size;
    color: $light-color;
    background: #fff;
    position: absolute;
    margin-top: 4px;
    @extend .box-shadow;
    border-radius: $border-radius;
    top: 100%;
    left: 0;
    white-space: nowrap;
    min-width: 8em;
    &.vertical {
      position: static;
      border: none;
      border-radius: 0px;
      box-shadow: none;
    }
  }
}
.g-sub-nav .g-sub-nav {
  &.active {
    &::after {
      display: none;
    }
  }
  .g-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
  .g-sub-nav-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
  }
  .g-sub-nav-icon {
    display: inline-flex;
    margin-left: 1em;
    transition: transform 250ms;
      svg {
        fill: $light-color;
      }
      &.open {
        transform: rotate(180deg);
      }
    &-right {
      display: inline-flex;
    }
    &-down {
      display: none;
    }
  }
}
</style>