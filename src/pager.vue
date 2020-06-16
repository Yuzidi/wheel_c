<template>
  <div class="gulu-pager" :class="{hide: hideIfOnePage && totalPage <= 1}">
    <span
      class="gulu-pager-nav prev"
      :class="{disable: currentPage === 1}"
      @click="onClickPage(currentPage-1)"
    >
      <g-icon name="left"></g-icon>
    </span>
    <template v-for="page in pager">
      <template v-if="page === currentPage">
        <span class="gulu-pager-item current">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <g-icon class="gulu-pager-separator" name="dots"></g-icon>
      </template>
      <template v-else>
        <span class="gulu-pager-item other" @click="onClickPage(page)">{{page}}</span>
      </template>
    </template>
    <span
      class="gulu-pager-nav prev"
      :class="{disable: currentPage === totalPage}"
      @click="onClickPage(currentPage+1)"
    >
      <g-icon name="right"></g-icon>
    </span>
    <!-- <span v-for='page in pager' :key='page' class="gulu-pager-item" :class="{active: page === currentPage, separator: page === '...'}">
      {{page}}
    </span>-->
  </div>
</template>

<script>
import GIcon from "./icon";
function unique(array) {
  // return [...new Set(array)] IE11以下不兼容
  const object = {};
  array.map(number => {
    object[number] = true;
  });
  return Object.keys(object).map(s => parseInt(s, 10));
}
export default {
  name: "GuluPager",
  data() {
    return {
      // pager: this.pages
    };
  },
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    hideIfOnePage: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClickPage(n) {
      if (n >= 1 && n <= this.totalPage) {
        this.$emit("update:currentPage", n);
      }
    }
  },
  computed: {
    pager() {
      let arr = [
        1,
        this.totalPage,
        this.currentPage,
        this.currentPage - 1,
        this.currentPage - 2,
        this.currentPage + 1,
        this.currentPage + 2
      ].filter(n => n >= 1 && n <= this.totalPage);
      let pager = unique(arr.sort((a, b) => a - b)).reduce(
        (prev, current, index, array) => {
          prev.push(current);
          array[index + 1] &&
            array[index + 1] - array[index] > 1 &&
            prev.push("...");
          return prev;
        },
        []
      );
      return pager;
    }
  },
  components: {
    GIcon
  }
};
</script>

<style lang='scss' scoped>
@import "varScss";
$width: 20px;
$height: 20px;
$font-size: 12px;
.gulu-pager {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &.hide {
    display: none;
  }
  &-separator {
    width: $width;
    font-size: $font-size;
  }
  &-item {
    border: 1px solid #e1e1e1;
    border-radius: $border-radius;
    padding: 0 6px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: $font-size;
    min-width: $width;
    height: $height;
    box-sizing: border-box;
    margin: 4px;
    cursor: pointer;
    &.current,
    &:hover {
      border-color: $blue;
    }
    &.current {
      border-color: $blue;
      cursor: default;
    }
  }
  &-nav {
    cursor: pointer;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e1e1e1;
    border-radius: $border-radius;
    font-size: 8px;
    width: $width;
    height: $height;
    background: $grey;
    svg {
      fill: darken($grey, 70%);
    }
    &.disable {
      cursor: not-allowed;
      svg {
        fill: darken($grey, 30%);
      }
    }
  }
}
</style>