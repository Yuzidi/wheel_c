<!--
 * @Author: your name
 * @Date: 2020-05-15 17:22:15
 * @LastEditTime: 2020-05-18 17:55:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\collapse.vue
 -->
<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">{{title}}</div>
    <div class="content-wrapper" ref="contentwrapper">
      <div class="content" v-if="open" ref="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluCollapseItem",
  inject: ["eventBus"],
  data() {
    return {
      open: false,
      accordion: false
    };
  },
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    toggle() {
      if (this.open) {
        setTimeout(() => {
          this.eventBus &&
            this.eventBus.$emit("update:removeselected", this.name);
        }, 500);
        this.$refs.contentwrapper.style.height = "0px";
      } else {
        this.eventBus && this.eventBus.$emit("update:addselected", this.name);
        this.$refs.content &&
          (this.$refs.contentwrapper.style.height =
            this.$refs.content.getBoundingClientRect().height + "px");
      }
    }
  },
  created() {},
  mounted() {
    this.$refs.contentwrapper.style.height = "0px";
    this.eventBus &&
      this.eventBus.$on("update:selected", names => {
        if (names.indexOf(this.name) < 0) {
          this.$refs.contentwrapper.style.height = "0px";
          setTimeout(() => {
            this.open = false;
          }, 500);
        } else {
          this.open = true;
          setTimeout(() => {
            this.$refs.contentwrapper.style.height =
              this.$refs.content.getBoundingClientRect().height + "px";
          }, 100);
        }
      });
  }
};
</script>

<style lang='scss' scoped>
$grey: #ddd;
$border-radius: 4px;
.collapseItem {
  > .title {
    border-top: 1px solid $grey;
    margin: -1px;
    margin-bottom: 0;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  .content-wrapper {
    transition: all 0.5s;
    overflow: hidden;
  }
  .content {
    border-top: 1px solid $grey;
    padding: 8px;
  }
}
</style>