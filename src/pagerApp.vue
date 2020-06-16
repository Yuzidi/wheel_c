<template>
  <div id="app">
    <g-pager :total-page='10' :current-page.sync='currentPage' hideIfOnePage></g-pager>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      currentPage: 1
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
