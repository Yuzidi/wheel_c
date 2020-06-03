<template>
  <transition name="slide">
    <div class="g-slides-item" v-if="visible" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GuluSlidesItem",
  data() {
    return {
      selected: undefined,
      reverse: false
    };
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {},
  computed: {
    visible() {
      // console.log(this.reverse);
      return this.selected === this.name;
    }
  },
  created() {
    // console.log(this.reverse);
  },

};
</script>

<style lang='scss' scoped>
.slide-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter.reverse {
  transform: translateX(-100%);
}
.slide-leave-to.reverse {
  transform: translateX(100%);
}
</style>