<template>
 <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button>默认按钮</g-button>
    <g-button icon="setting">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Button from "../../../src/button/button";
export default {
  name: "",
  data() {
    return {
      content: `
        <g-button>默认按钮</g-button>
        <g-button icon='setting'>默认按钮</g-button>
        <g-button :loading='true'>默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
      `.replace(/\t+| +/g, '').trim()
    };
  },
  methods: {},
  components: {
    "g-button": Button
  }
};
</script>

<style lang='' scoped>
</style> 