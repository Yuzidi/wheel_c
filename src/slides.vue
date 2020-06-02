<template>
  <div
    class="g-slides"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
      <div class="g-slides-dots">
        <span
          :class="{active: selectedIndex === n-1}"
          v-for="n in childrenLength"
          :key="n"
          @click="select(n-1)"
        >{{n}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluSlides",
  data() {
    return {
      childrenLength: 0,
      lastSelected: undefined,
      timeId: undefined,
      startTouch: undefined
    };
  },
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onTouchStart(e) {
      if (e.touches.length > 1) {
        return;
      }
      this.startTouch = e.touches[0];
      this.pause();
    },
    onTouchEnd(e) {
      let endTouch = e.changedTouches[0];
      let { clientX: x1, clientY: y1 } = this.startTouch;
      let { clientX: x2, clientY: y2 } = endTouch;
      let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      let deltaY = Math.abs(y2 - y1);
      let rate = distance / deltaY;
      if (rate > 2) {
        if (x2 > x1) {
          this.select(this.selectedIndex - 1);
        } else {
          this.select(this.selectedIndex + 1);
        }
      }
      this.playAutomatically();
    },
    onMouseEnter() {
      this.pause();
    },
    onMouseLeave() {
      this.playAutomatically();
    },
    pause() {
      window.clearTimeout(this.timeId);
      this.timeId = undefined;
    },
    playAutomatically() {
      if (this.timeId) {
        return;
      }
      let index = this.names.indexOf(this.getSlected());
      let run = () => {
        index = index + 1;
        this.select(index);
        this.timeId = setTimeout(run, 3000);
      };
      this.timeId = setTimeout(run, 3000);
    },
    getSlected() {
      let first = this.$children[0];
      return this.selected || first.name;
    },
    updateChildren() {
      let selected = this.getSlected();
      this.$children.forEach(item => {
        let reverse = this.selectedIndex > this.lastSelected ? false : true;
        if (this.timeId) {
          if (
            this.selectedIndex == this.$children.length - 1 &&
            this.lastSelected == 0
          ) {
            reverse = true;
          }
          if (
            this.selectedIndex === 0 &&
            this.lastSelected === this.$children.length - 1
          ) {
            reverse = false;
          }
        }

        item.reverse = reverse;
        this.$nextTick(() => {
          item.selected = selected;
        });
      });
    },
    select(index) {
      this.lastSelected = this.selectedIndex;
      if (index === this.names.length) {
          index = 0;
        }
        if (index === -1) {
          index = this.names.length - 1;
        }
      this.$emit("update:selected", this.names[index]);
    }
  },
  computed: {
    selectedIndex() {
      return this.selected ? this.names.indexOf(this.selected) : 0;
    },
    names() {
      return this.$children.map(vm => vm.name);
    }
  },
  mounted() {
    this.updateChildren();
    this.playAutomatically();
    this.childrenLength = this.$children.length;
  },
  updated() {
    this.updateChildren();
  }
};
</script>

<style lang='scss' scoped>
.g-slides {
  // display: inline-block;
  border: 1px solid black;
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    padding: 8px 0;
    display: flex;
    justify-content: center;
    > span {
      display: inline-block;
      background: #ddd;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 0 8px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      font-size: 12px;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background: #666;
        color: #fff;
        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>