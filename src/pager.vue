<template>
  <div class="gulu-pager">
    <span v-for='page in pager' :key='page' class="gulu-pager-item" :class="{active: page === currentPage, separator: page === '...'}">
      {{page}}
    </span>
  </div>
</template>

<script>
function unique(array) {
  // return [...new Set(array)] IE11以下不兼容
  const object = {}
  array.map((number) => {
    object[number] = true
  })
  return Object.keys(object).map(s => parseInt(s, 10))
}
export default {
  name: "GuluPager",
  data() {
    let arr = [1, this.totalPage, this.currentPage, this.currentPage - 1,this.currentPage - 2, this.currentPage + 1, this.currentPage + 2];
    let pager = unique(arr.sort((a, b) => a-b)).reduce((prev, current, index, array) => {
      prev.push(current)
      array[index + 1] && array[index + 1] - array[index] > 1 && prev.push('...')
      return prev
    }, [])
    return {
      pager
    }
  },
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
@import 'varScss';
.gulu-pager {
  &-item {
    border: 1px solid #e1e1e1;
    border-radius: $border-radius;
    padding: 0 6px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    min-width: 24px;
    height: 24px;
    box-sizing: border-box;
    margin: 4px;
    cursor: pointer;
    &.separator {
      border: none;
      cursor: default;
    }
    &.active, &:hover {
      border-color: $blue;
    }
    &.active {
      border-color: $blue;
      cursor: default;
    }
  }
}
</style>