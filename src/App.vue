<template>
  <div id="app">
    <p>{{selected && selected[0] && selected[0].name || 'kon'}}</p>
    <p>{{selected && selected[1] && selected[1].name || 'kon'}}</p>
    <p>{{selected && selected[2] && selected[2].name || 'kon'}}</p>
    <g-cascader :source="source" popover-class-name="xxx" :selected.sync='selected'></g-cascader>
    <p>322</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: [],
      source: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [
                {
                  name: "上城区"
                },
                {
                  name: "下城区"
                },
                {
                  name: "江干区"
                }
              ]
            },
            {
              name: "嘉兴",
              children: [
                {
                  name: "南湖区"
                },
                {
                  name: "秀洲区"
                },
                {
                  name: "嘉善区"
                }
              ]
            },
            {
              name: "啊啊"
            }
          ]
        },
        {
          name: "江西省",
          children: [
            {
              name: "南昌",
              children: [
                {
                  name: "新建县"
                },
                {
                  name: "经济开发区"
                }
              ]
            },
            {
              name: "上饶",
              children: [
                {
                  name: "鄱阳县"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  components: {}
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
  height: 400px !important;
}
</style>
