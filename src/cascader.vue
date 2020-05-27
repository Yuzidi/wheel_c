<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
      {{result || ''}}
    </div>
    <div class="popover-warpper" v-if="popoverVisible">
      <cascader-items
        :items="source"
        class="popover"
        :class="[popoverClassName]"
        :selected="selected"
        @update:selected="onUpdateSelected"
      ></cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from "./cascader-items";
export default {
  name: "GuluCascader",
  data() {
    return {
      popoverVisible: false,
      level1Selected: null,
      level2Selected: null
    };
  },
  props: {
    source: {
      type: Array
    },
    popoverClassName: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    loadData: {
      type: Function
    }
  },
  methods: {
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
      let lastSelected = newSelected[newSelected.length - 1];
      let simplest = (children, id) => {
        return children.filter(item => item.id == id)[0];
      };
      let complex = (children, id) => {
        let noChildren = [];
        let hasChildren = [];
        children.forEach(item => {
          if (item.children) {
            hasChildren.push(item);
          } else {
            noChildren.push(item);
          }
        });
        let found = simplest(children, id);
        if (found) {
          return found;
        } else {
          for (let i = 0; i < hasChildren.length; i++) {
            found = complex(hasChildren[i].children, id);
            if (found) {
              return found;
            }
          }
          return undefined;
        }
      };
      let updateSource = result => {
        let sourceCopy = JSON.parse(JSON.stringify(this.source));
        let toUpdate = complex(sourceCopy, lastSelected.id);
        toUpdate.children = result;
        this.$emit("update:source", sourceCopy);
      };
      this.loadData(lastSelected, updateSource);
    }
  },
  computed: {
    result() {
      return this.selected.map(item => item.name).join(" / ");
    }
  },
  components: {
    CascaderItems
  },
  created() {
  }
};
</script>

<style lang='scss' scoped>
@import "varScss";
.cascader {
  position: relative;
  display: inline-flex;
  .trigger {
    height: 32px;
    min-width: 10em;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
  }
  .popover-warpper {
    position: absolute;
    background-color: #fff;
    display: flex;
    // @extend .box-shadow;
    box-shadow: 0 0 5px rgba(63, 45, 45, 0.15);
    top: 100%;
    left: 0;
    white-space: nowrap;
    margin-top: 8px;
    .popover {
      height: 200px;
    }
  }
}
</style>