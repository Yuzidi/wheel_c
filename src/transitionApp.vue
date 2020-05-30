<template>
  <div id="app">
    <!-- <div id="demo">
      <transition name="fade" >
        <button class="fadebutton" v-bind:key="docState" @click='docState = docState === "save" ? "Edit": "save"'>{{ buttonMessage }}</button>
      </transition>
    </div>-->

    <div id="list-demo" class="list-demo" style="margin-top: 100px">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">{{ item }}</span>
      </transition-group>
    </div>

    <div id="flip-list-demo" class="demo">
      <button v-on:click="shuffle">Shuffle</button>
      <transition-group name="flip-list" tag="ul">
        <li v-for="item in items" v-bind:key="item" class="flip-item">{{ item }}</li>
      </transition-group>
    </div>


    <button @click='visible=!visible'>toggle</button>
    <!-- <div> -->
      <g-transition :visible='visible'>
        <p>呵呵哈哈哈</p>
      </g-transition>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: [],
      show: true,
      docState: "save",
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      visible: true
    };
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle: function () {
      this.items = _.shuffle(this.items)
    }
  },
  components: {},
  created() {},
  computed: {
    buttonMessage: function() {
      switch (this.docState) {
        case "save":
          return "Edit";
        case "Edit":
          return "save";
      }
    }
  }
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   // text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
.fadebutton {
  position: absolute;
  width: 50px;
  box-sizing: border-box;
  transition: all 3s;
}
// 列表排序过渡
.flip-item {
  transition: all 1s;
}
// .flip-list-move {
//   transition: transform 1s;
// }

// 列表进入/离开过渡
.list-item {
  display: inline-block;
  transition: all 1s;
  margin-right: 10px;
}
// .list-enter-active,
// .list-leave-active {
// }
.list-leave-active {
  position: absolute;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

// 多组件过渡

// .fade-enter-active,
// .fade-leave-active {
// }
// .list-leave-active {
//   position: absolute;
// }
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
  background: red;
  // width: 100px;
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  // width: 100px;
  transform: translateX(-100%);
  background: red;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}

body {
  font-size: var(--font-size);
}

.box {
  margin-bottom: 20px;
}

.demobox {
  min-height: 50px;
  background-color: skyblue;
  border: 1px solid #000;
}

.sider {
  width: 200px;
}
.xxx {
  height: 200px !important;
}
</style>
