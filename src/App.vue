<template>
  <div id="app">
    <g-slides :selected.sync="selected">
      <g-slides-item name="1">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="3">
        <div class="box">3</div>
      </g-slides-item>
    </g-slides>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: "1",
    };
  },
  methods: {
    showToast() {
      this.$toast("点击弹出提示");
    }
  },
  created() {
    // let n = 1;
    // setInterval(() => {
    //   if (n === 4) {
    //     n = 1;
    //   }
    //   this.selected = n.toString();
    //   n++;
    // }, 2000);
  }
};
</script>

<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box {
  width: 100%;
  height: 150px;
  background: #ddd;
  border: 1px solid red;
}
</style>