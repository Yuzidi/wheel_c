<template>
  <div class="g-nav">
    <slot></slot>
  </div>
</template>

<script>
import { log } from 'util';
export default {
  name: "GuluNav",
  data() {
    return {};
  },
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateChildren() {
      this.childrenItems.forEach(vm => {
        if (this.selected.indexOf(vm.name) >= 0) {
          vm.selected = true;
        } else {
          vm.selected = false;
        }
      });
    },
    listenChildren() {
      this.childrenItems.forEach(vm => {
        vm.$on("add:selected", name => {
          if (this.multiple) {
            if (this.selected.indexOf(name) < 0) {
              let copySelected = JSON.parse(JSON.stringify(this.selected));
              copySelected.push(name);
              this.$emit("update:selected", copySelected);
            }
          } else {
            this.$emit("update:selected", [name]);
          }
        });
      });
    }
  },
  mounted() {
    console.log(this.childrenItems[0].name);
    this.updateChildren();
    this.listenChildren();
  },
  updated() {
    this.updateChildren();
  },
  computed: {
    childrenItems() {
      return this.$children.filter(vm => vm.$options.name === "GuluNavItem");
    }
  }
};
</script>

<style lang='scss' scoped>
.g-nav {
  display: flex;
  border: 1px solid red;
}
</style>