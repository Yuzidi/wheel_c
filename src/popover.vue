<!--
 * @Author: your name
 * @Date: 2020-05-12 14:40:23
 * @LastEditTime: 2020-05-14 15:19:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\popover.vue
 -->
<template>
  <div class="popover" @click="onClick" ref="popover">
    <div
      ref="contentWrapper"
      class="content-wrapper"
      v-if="visible"
      :class="{[`position-${position}`]: true}"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "GuluPopover",
  data() {
    return {
      visible: false,
      person: {
        height: 1.68,
        weight: 48,
        eat: ["苹果", "猕猴桃", "橘子"]
      }
    };
  },
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    }
  },
  methods: {
    positionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      const { height: height2 } = contentWrapper.getBoundingClientRect();
      const { top, left, height, width } = triggerWrapper.getBoundingClientRect();
      let position = {
        top: {
          left: left + window.scrollX,
          top: top + window.scrollY
        },
        bottom: {
          left: left + window.scrollX,
          top: top + height + window.scrollY
        },
        left: {
          left: left + window.scrollX,
          top: top + window.scrollY + (height - height2) / 2
        },
        right: {
          left: left + width + window.scrollX,
          top: top + window.scrollY + (height - height2) / 2
        },
      }
      contentWrapper.style.left = position[this.position].left + 'px'
      contentWrapper.style.top = position[this.position].top + 'px'
    },
    onClickDocument(e) {
      if (
        !(
          this.$refs.contentWrapper &&
          this.$refs.contentWrapper.contains(e.target)
        )
      ) {
        this.visible = false;
        document.removeEventListener("click", this.onClickDocument);
      }
    },
    onShow() {
      setTimeout(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      }, 1);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        this.visible = !this.visible;
        if (this.visible === true) {
          this.onShow();
        } else {
          document.removeEventListener("click", this.onClickDocument);
        }
      }
    }
  }
};
</script>

<style lang='scss' scoped>
$border-color: #333;
$border-radiu: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radiu;
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: #fff;
  padding: 0.5em 1em;
  max-width: 20em;
  word-wrap: break-word;
  &::before,
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    position: absolute;
  }
  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%);
    &::before {
      border-top-color: black;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before {
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    margin-left: -10px;
    transform: translateX(-100%);
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-left-color: black;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-right-color: black;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>