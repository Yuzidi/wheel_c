<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <span class="icons">
          <template v-if='item.name !== loadItem.name'>
            <Icon class="icon next" v-if="rightArrowVisible(item)" name="right"></Icon>
          </template>
          <template v-else>
            <Icon class="icon loading" name="Loading"></Icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items
        :items="rightItems"
        :level="level + 1"
        :selected="selected"
        :load-data="loadData"
        @update:selected="onUpdateSelected"
        :load-item='loadItem'
      ></gulu-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from "../icon";
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
    },
    loadData: {
      type: Function
    },
    loadItem: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    onClickLabel(item) {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      selectedCopy[this.level] = item;
      selectedCopy.splice(this.level + 1);
      this.$emit("update:selected", selectedCopy);
    },
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
    },
    rightArrowVisible(item) {
      return this.loadData ? !item.isLeaf : item.children;
    }
  },
  components: {
    Icon
  },
  computed: {
    rightItems() {
      if (this.selected[this.level]) {
        let selected = this.items.filter(
          item => item.name === this.selected[this.level].name
        );
        if (
          selected &&
          selected[0].children &&
          selected[0].children.length > 0
        ) {
          return selected[0].children;
        }
      }
    }
  },
  created() {}
};
</script>

<style lang='scss' scoped>
@import "../varScss";
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
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
    > .name {
      margin-right: 1.5em;
      user-select: none;
    }
    .icons {
      margin-left: auto;
      .next {
        transform: scale(0.7);
      }
      .loading {
        animation: spin 1s infinite linear;
      }
    }
  }
}
</style>