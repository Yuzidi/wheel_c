<template>
  <div id="app">
    <g-nav :selected.sync="selected">
      <g-nav-item name="home">首页</g-nav-item>
      <!-- <g-nav-item name='about'>关于</g-nav-item> -->
      <g-sub-nav>
        <template slot="title">关于</template>
        <g-nav-item name="options1">选项1</g-nav-item>
        <g-nav-item name="options2">选项2</g-nav-item>
        <g-nav-item name="options3">选项3</g-nav-item>
        <g-sub-nav>
          <template slot="title">联系方式</template>
          <g-nav-item name="wechat">微信</g-nav-item>
          <g-nav-item name="qq">qq</g-nav-item>
          <g-nav-item name="alipay">支付宝</g-nav-item>
          <g-sub-nav>
            <template slot="title">联系方式</template>
            <g-nav-item name="wechat">微信</g-nav-item>
            <g-nav-item name="qq">qq</g-nav-item>
            <g-nav-item name="alipay">支付宝</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>
      </g-sub-nav>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: ["options1"]
    };
  },
  methods: {},
  created() {}
};
</script>

<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>