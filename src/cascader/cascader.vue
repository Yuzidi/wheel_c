<template>
<!-- 级联选择器 -->
  <div class="cascader" ref='cascader' v-click-ouside='close'>
    <div class="trigger" @click="toggle">
      <slot></slot>
      {{result || ''}}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible" ref='popoverWrapper'>
      <cascader-items
        :items="source"
        class="popover"
        :class="[popoverClassName]"
        :selected="selected"
        :load-data="loadData"
        @update:selected="onUpdateSelected"
        :load-item='loadItem'
      ></cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from "./cascader-items";
import clickOuside from '../click-outside'
export default {
  name: "GuluCascader",
  data() {
    return {
      popoverVisible: false,
      loadItem: {}
    };
  },
  props: {
    source: { // 数据源
      type: Array
    },
    popoverClassName: { // 为popover添加类, 可加样式
      type: String
    },
    selected: { // 选择的item和item的爸爸
      type: Array,
      default: () => []
    },
    loadData: { // 显示loading的回调函数
      type: Function
    }
  },
  methods: {
    // onClickDocument(e) {
    //   if (
    //     !(
    //       this.$refs.popoverWrapper &&
    //       this.$refs.popoverWrapper.contains(e.target)
    //     )
    //   ) {
    //     this.close()
    //     document.removeEventListener("click", this.onClickDocument);
    //   }
    // },
    open() {
      this.popoverVisible = true;
      // setTimeout(() => {
      //   document.addEventListener("click", this.onClickDocument);
      // }, 10);
    },
    close() {
      this.popoverVisible = false;
      // document.removeEventListener("click", this.onClickDocument);
    },
    toggle() {
      if (this.popoverVisible === true) {
        this.close();
      } else {
        this.open();
      }
    },
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
      let lastSelected = newSelected[newSelected.length - 1];
      let simplest = (children, id) => {
        return children.filter(item => item.id == id)[0];
      };
      let complex = (children, id) => {// 用递归的方式找到需要修改的那个子元素
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
      let updateSource = result => {// 修改数据源的回调函数, loadData请求数据成功之后执行
        this.loadItem = {}
        let sourceCopy = JSON.parse(JSON.stringify(this.source));
        let toUpdate = complex(sourceCopy, lastSelected.id);
        toUpdate.children = result;
        this.$emit("update:source", sourceCopy);
      };
      if (!lastSelected.isLeaf && this.loadData) {
        this.loadData(lastSelected, updateSource);
        this.loadItem = lastSelected
      }
    }
  },
  computed: {
    result() {
      return this.selected.map(item => item.name).join(" / ");
    }
  },
  directives: {
    clickOuside
  },
  components: {
    CascaderItems
  },
  created() {}
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
    background-color: #fff;
  }
  .popover-wrapper {
    position: absolute;
    z-index: 1;
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