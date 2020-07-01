<template>
  <div class="gulu-table-wrapper">
    <table class="gulu-table" :class="{bordered, compact, striped}">
      <thead>
        <tr>
          <th>
            <input type="checkbox" @change="onChangeAllItems" ref='allChecked' :checked='areAllItemsSelected' />
          </th>
          <th v-if="indexVisible">#</th>
          <th v-for="column in columns" :key='column.filed'>
            <div class="gulu-table-header">
              {{column.text}}
              <span class="gulu-table-sorter" v-if='orderBy && orderBy[column.filed]'  @click='changeOrderBy(column.filed)'>
                <g-icon name='asc' :class="{active: orderBy && orderBy[column.filed] === 'asc'}"></g-icon>
                <g-icon name='desc' :class="{active: orderBy && orderBy[column.filed] === 'desc'}"></g-icon>
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataSource" :key='item.id'>
          <td>
            <input type="checkbox" @change="onChangeItem(item, index, $event)" 
            :checked='inSelectedItems(item)'
            />
          </td>
          <td v-if="indexVisible">{{index+1}}</td>
          <template v-for="(column, coluIndex) in columns">
            <td :key="column.field">{{item[column.filed]}}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { log } from "util";
import { clearInterval } from 'timers';
export default {
  name: "GuluTable",
  data() {
    return {};
  },
  props: {
    orderBy: { // 每一项为升序还是降序
      type: Object,
      default: () => {}
    },
    striped: { // 表格是否为条纹
      type: Boolean,
      default: true
    },
    compact: { // 是否紧凑
      type: Boolean,
      default: false
    },
    selectedItems: { // 选择的item数组
      type: Array,
      default: () => []
    },
    columns: { // 表头数据
      type: Array,
      required: true
    },
    dataSource: { // tbody数据
      type: Array,
      required: true,
      validator(array){
        return !(array.filter(item => item.id === undefined).length > 0)
      }
    },
    indexVisible: {// 是否显示表格的索引
      type: Boolean,
      default: false
    },
    bordered: {// 是否显示边框
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeOrderBy(key) { // 修改排序规则, 升序还是降序还是不排序
      let copyOrderBy = JSON.parse(JSON.stringify(this.orderBy))
      let value = copyOrderBy[key] === 'asc' ? 'desc' : copyOrderBy[key] === 'desc' ? 'true' : 'asc'
      copyOrderBy[key] = value
      this.$emit('update:orderBy', copyOrderBy)
    },
    inSelectedItems(item) { // 过滤出选中的td,赋值给checked
      return this.selectedItems.filter(i => i.id === item.id).length > 0
    },
    onChangeItem(item, index, e) { // 当td的checked修改时
      let selected = e.target.checked;
      let copySelected = JSON.parse(JSON.stringify(this.selectedItems));
      if (selected) { // 如果是选中,则push
        copySelected.push(item);
      } else { // 如果不选中, 则删除
        copySelected.splice(copySelected.findIndex(i => i.id === item.id), 1);
        // copySelected = copySelected.filter(i => i.id !== item.id)
      }
      this.$emit("update:selectedItems", copySelected);
    },
    onChangeAllItems(e) { // 全选按钮改变事件
      let selected = e.target.checked;
      this.$emit("update:selectedItems", selected ? this.dataSource : []);
    }
  },
  computed: {
    areAllItemsSelected() { // 计算出数据源和选中的item数组是否相等
      const a = this.dataSource.map(item => item.id).sort()
      const b = this.selectedItems.map(item => item.id).sort()
      return a.join('') === b.join('')
      // return this.selectedItems.length === this.dataSource.length
    },
  },
  watch: {
    selectedItems() { // 监听选择项的修改判断全选框是半选还是全选, 还是不选
      if(this.selectedItems.length === this.dataSource.length) {
        this.$refs.allChecked.indeterminate = false
      }else if (this.selectedItems.length === 0) {
        this.$refs.allChecked.indeterminate = false

      }else {
        this.$refs.allChecked.indeterminate = true
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "varScss";
$darkengrey: darken($grey, 10%);
.gulu-table {
  border-collapse: collapse;
  // border-spacing: 8;
  border-bottom: 1px solid $darkengrey;
  width: 100%;
  &.bordered {
    border: 1px solid $darkengrey;
    td,
    th {
      border: 1px solid $darkengrey;
    }
  }
  &.compact {
    td,
    th {
      padding: 4px;
    }
  }
  &.striped {
    tbody {
      > tr {
        &:nth-child(odd) {
          background: white;
        }
        &:nth-child(even) {
          background: lighten($grey, 4%);
        }
      }
    }
  }
  td,
  th {
    border-bottom: 1px solid $darkengrey;
    text-align: left;
    padding: 8px;
  }
  &-header {
    display: inline-flex;
    align-items: center;
  }
  &-sorter {
    display: inline-flex;
    flex-direction: column;
    margin: 0 4px;
    cursor: pointer;
    svg {
      width: 10px;
      height: 10px;
      fill: darken($grey, 20%);
      &.active {
        fill:darken($grey, 60%);
      }
      &:first-child {
          position: relative;
          bottom: -1px;
        }
        &:nth-child(2) {
          position: relative;
          top: -1px;
        }
    }
  }
}
</style>