<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click="onClickLabel(item)">
        {{item.name}}
        <Icon class="icon" v-if="item.children && item.children.length > 0" name="right"></Icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items :items="rightItems" :level='level + 1' :selected='selected' @update:selected='onUpdateSelected'></gulu-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  name: "GuluCascaderItems",
  data() {
    return {
      leftSelected: null
    };
  },
  props: {
    items: {
      type: Array
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onClickLabel(item) {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      selectedCopy[this.level] = item
      selectedCopy.splice(this.level + 1)
      this.$emit('update:selected', selectedCopy)
    },
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    }
  },
  components: {
    Icon
  },
  computed: {
    rightItems() {
      if(this.selected[this.level]) {
        let selected = this.items.filter(item => item.name === this.selected[this.level].name)
        if(selected && selected[0].children && selected[0].children.length > 0) {
          return selected[0].children
        }
      }
      // let currentSelected = this.selected[this.level]
      // if (currentSelected && currentSelected.children) {
      //   return currentSelected.children;
      // } else {
      //   return null;
      // }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "varScss";
.cascaderItem {
  display: flex;
  height: 100%;
  .left {
    height: 100%;
    padding: 0.3em 0;
    overflow: auto;
  }
  .right {
    margin-top: -1px;
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
  .label {
    padding: 0.3em 1em;
    display: flex;
    align-items: center;
    .icon {
      margin-left: 2em;
      transform: scale(0.7);
    }
  }
}
</style>