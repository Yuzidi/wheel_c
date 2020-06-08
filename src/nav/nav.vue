<template>
  <div class="g-nav" :class="{vertical}">
    <slot></slot>
  </div>
</template>

<script>
import { log } from 'util';
export default {
  name: "GuluNav",
  data() {
    return {
      childrenItems: [],
      namePath: []
    };
  },
  provide() {
    return {
      root: this,
      vertical: this.vertical
    }
  },
  props: {
    selected: {
      type: String,
      default: () => []
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    addItem(vm){
      this.childrenItems.push(vm)
    },
    updateChildren() {
      this.childrenItems.forEach(vm => {
        if (this.selected === vm.name) {
          vm.selected = true;
        } else {
          vm.selected = false;
        }
      });
    },
    listenChildren() {
      this.childrenItems.forEach(vm => {
        vm.$on("update:selected", name => {
            this.$emit("update:selected", name);
        });
      });
    }
  },
  mounted() {
    this.updateChildren();
    this.listenChildren();
  },
  updated() {
    this.updateChildren();
  },
  computed: {
  }
};
</script>

<style lang='scss' scoped>
@import 'varScss';
.g-nav {
  user-select: none;
  display: flex;
  border-bottom: 1px solid $grey;
  color: $color;
  cursor: default;
  white-space: nowrap;
  &.vertical {
    flex-direction: column;
    border: 1px solid $grey;
  }
}
</style>