<!--
 * @Author: your name
 * @Date: 2020-05-05 10:47:53
 * @LastEditTime: 2020-05-07 11:41:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\toast.vue
 -->
<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
export default {
  name: "GuluToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 50
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    },
    log() {
      console.log("aaaa");
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
          this.$refs.wrapper.getBoundingClientRect().height + "px";
      });
    }
  },
  mounted() {
    this.updateStyles();
    this.execAutoClose();
  }
};
</script>

<style lang='scss' scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-min-height;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  color: #fff;
  // padding: 8px 16px;
  padding: 0px 16px;
  .message {
    padding: 8px 0;
    max-width: 400px;
    word-wrap: break-word;
    word-break: break-all;
  }
  .close {
    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin: 0 16px;
  }
}
</style>