<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click="leftSelected = item">
        {{item.name}}
        <Icon class="icon" v-if="item.children" name="right"></Icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items :items="rightItems"></gulu-cascader-items>
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
    }
  },
  methods: {},
  components: {
    Icon
  },
  computed: {
    rightItems() {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children;
      } else {
        return null;
      }
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
  }
  .right {
    margin-top: -1px;
    height: 100%;
    border-left: 1px solid $border-color;
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