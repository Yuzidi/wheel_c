<!--
 * @Author: your name
 * @Date: 2020-05-12 14:40:23
 * @LastEditTime: 2020-05-13 16:53:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\popover.vue
 -->
<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
        eat:['苹果', '猕猴桃', '橘子']
      }
    };
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      let { top, left } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
      this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
    },
    onClickDocument(e) {
      if (!(this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target))) {
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
  transform: translateY(-100%);
  padding: .5em 1em;
  margin-top: -10px;
  max-width: 20em;
  word-wrap: break-word;
  &::before, &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    position: absolute;
  }
  &::before {
    border-top-color: black;
    top: 100%;
  }
  &::after {
    border-top-color: white;
    top: calc(100% - 1px);
  }
}
</style>