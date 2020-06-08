<template>
  <div id="app">
    <g-nav :selected.sync="selected" style="width: 300px">
      <g-nav-item name="home">
        <a href="www.baidu.com">hh</a>
      </g-nav-item>
      <!-- <g-nav-item name='about'>关于</g-nav-item> -->
      <g-sub-nav name='about'>
        <template slot="title">关于</template>
        <g-nav-item name="options1">选项1</g-nav-item>
        <g-nav-item name="options2">选项2</g-nav-item>
        <g-nav-item name="options3">选项3</g-nav-item>
        <g-sub-nav name='phone'>
          <template slot="title">联系方式</template>
          <g-nav-item name="wechat">微信</g-nav-item>
          <g-nav-item name="qq">qq</g-nav-item>
          <g-nav-item name="alipay">支付宝</g-nav-item>
          <g-sub-nav name='barbecue'>
            <template slot="title">烧烤</template>
            <g-nav-item name="chicken">鸡腿</g-nav-item>
            <g-nav-item name="hhh">哈哈哈</g-nav-item>
            <g-nav-item name="xxx">嘻嘻嘻</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>
      </g-sub-nav>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
    <div style="height: 300px"></div>
    <g-nav :selected.sync="selected" vertical style="width: 300px">
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav name='about'>
        <template slot="title">关于</template>
        <g-nav-item name="options1">选项1</g-nav-item>
        <g-nav-item name="options2">选项2</g-nav-item>
        <g-nav-item name="options3">选项3</g-nav-item>
        <g-sub-nav name='phone'>
          <template slot="title">联系方式</template>
          <g-nav-item name="wechat">微信</g-nav-item>
          <g-nav-item name="qq">qq</g-nav-item>
          <g-nav-item name="alipay">支付宝</g-nav-item>
          <g-sub-nav name='barbecue'>
            <template slot="title">烧烤</template>
            <g-nav-item name="chicken">鸡腿</g-nav-item>
            <g-nav-item name="hhh">哈哈哈</g-nav-item>
            <g-nav-item name="xxx">嘻嘻嘻</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>
      </g-sub-nav>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
    <div>{{selected}}</div>
  </div>
  
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: "chicken"
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