<template>
  <div class="cascaderItem">
    {{sourceItem.name}}
    <gulu-cascader-item v-for="(item, index) in sourceItem.children" :key='index' v-if='sourceItem.children' :sourceItem='item'></gulu-cascader-item>
  </div>
</template>

<script>
export default {
  name: 'GuluCascaderItem',
  data() {
    return {

    };
  },
  props: {
    sourceItem: {
      type: Object
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
.cascaderItem{
  border: 1px solid red;
  margin: 10px;
}
</style>