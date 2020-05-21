<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for='(item, index) in source' :key='index'>
        <cascader-item :sourceItem='item'></cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItem from './cascader-item'
export default {
  name: "GuluCascader",
  data() {
    return {};
  },
  props: {
    source: {
      type: Array
    }
  },
  methods: {},
  components:{
    CascaderItem
  }
};
</script>

<style lang='scss' scoped>
.cascader {
}
</style>