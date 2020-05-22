<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click='leftSelected = item'>{{item.name}}</div>
    </div>
    <div class="right" v-if='rightItems'>
      <gulu-cascader-items :items='rightItems'></gulu-cascader-items>
    </div>
  </div>
</template>

<script>
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
  computed: {
    rightItems() {
      if(this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      }else {
        return null
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.cascaderItem {
  display: flex;
  .left {
    border: 1px solid red;
  }
  .right {
    margin-top: -1px;
  }
}
</style>