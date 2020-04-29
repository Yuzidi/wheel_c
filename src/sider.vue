<!--
 * @Author: your name
 * @Date: 2020-04-29 15:33:38
 * @LastEditTime: 2020-04-29 17:59:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\sider.vue
 -->
<template>
  <transition name="fade">
    <div class="sider" v-if='visible'>
      <slot></slot>
      <button @click='visible = false'>close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GuluSider",
  data() {
    return {
      visible: true
    }
  },
  methods: {
    
  },
};
</script>

<style lang='scss' scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  margin-left: -200px;
}
</style>