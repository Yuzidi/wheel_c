<!--
 * @Author: your name
 * @Date: 2020-05-12 14:40:23
 * @LastEditTime: 2020-05-12 18:15:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\popover.vue
 -->
<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "GuluPopover",
  data() {
    return {
      visible: false
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
        console.log("guanbi");
        document.removeEventListener("click", this.onClickDocument);
      }
    },
    onShow() {
      setTimeout(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      }, 100);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        this.visible = !this.visible;
        if (this.visible === true) {
          this.onShow();
        } else {
          console.log("guanbi");
          document.removeEventListener("click", this.onClickDocument);
        }
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>