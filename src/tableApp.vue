<template>
  <div id="app">
    {{selectedItems}}
    <div class="">
      <g-table :columns='columns' :dataSource='dataSource' indexVisible bordered :selectedItems.sync='selectedItems'></g-table>
    </div>
    <div class="">
      <g-table :columns='columns' :dataSource='dataSource' indexVisible bordered compact :striped='false' :selectedItems.sync='selectedItems'></g-table>
    </div>
    <div style="margin: 20px">
      <g-pager :total-page="10" :current-page.sync="currentPage" hideIfOnePage></g-pager>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      currentPage: 1,
      columns: [
        {text: '姓名', filed: 'name'},
        {text: '分数', filed: 'score'},
      ],
      dataSource:[
        {id: 1, name: '芳芳', score: 100},
        {id: 2, name: 'lj', score: 80},
        {id: 3, name: 'aa', score: 100},
        {id: 4, name: 'bb', score: 80},
        {id: 5, name: 'cc', score: 100},
        {id: 6, name: 'dd', score: 80},
      ],
      selectedItems: [],
    };
  },
  methods: {
  },
  components: {},
  created() {},
  computed: {}
};
</script>

<style lang="scss">
</style>
