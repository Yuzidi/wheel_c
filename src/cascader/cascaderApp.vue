<template>
  <div id="app">
    <p>{{selected && selected[0] && selected[0].name || 'kon'}}</p>
    <p>{{selected && selected[1] && selected[1].name || 'kon'}}</p>
    <p>{{selected && selected[2] && selected[2].name || 'kon'}}</p>
    <div>
      <g-cascader
        :source.sync="source"
        popover-class-name="xxx"
        :selected.sync="selected"
        :load-data="loadData"
      ></g-cascader>
    </div>
    <div>
      <g-collapse accordion :selected.sync="selectedTab">
        <g-collapse-item title="标题1" name="1">
          内容1
          <div>11</div>
          <div>11</div>
          <div>11</div>
          <div>11</div>
          <div>11</div>
          <div>11</div>
          <div>11</div>
        </g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
      </g-collapse>
    </div>
    
  </div>
</template>

<script>
import db from "../../tests/fixtures/db";
function ajax(parentId = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id == parentId);
      result.forEach(node => {
        if (db.filter(item => item.parent_id == node.id).length > 0) {
          node.isLeaf = false;
        } else {
          node.isLeaf = true;
        }
      });
      success(result);
    }, 300);
  });
}
export default {
  name: "App",
  data() {
    return {
      selected: [],
      source: [],
      selectedTab: ["1"]
      // source: [
      //   {
      //     name: "浙江",
      //     children: [
      //       {
      //         name: "杭州",
      //         children: [
      //           {
      //             name: "上城区"
      //           },
      //           {
      //             name: "下城区"
      //           },
      //           {
      //             name: "江干区"
      //           }
      //         ]
      //       },
      //       {
      //         name: "嘉兴",
      //         children: [
      //           {
      //             name: "南湖区"
      //           },
      //           {
      //             name: "秀洲区"
      //           },
      //           {
      //             name: "嘉善区"
      //           }
      //         ]
      //       },
      //       {
      //         name: "啊啊"
      //       }
      //     ]
      //   },
      //   {
      //     name: "江西省",
      //     children: [
      //       {
      //         name: "南昌",
      //         children: [
      //           {
      //             name: "新建县"
      //           },
      //           {
      //             name: "经济开发区"
      //           }
      //         ]
      //       },
      //       {
      //         name: "上饶",
      //         children: [
      //           {
      //             name: "鄱阳县"
      //           }
      //         ]
      //       }
      //     ]
      //   },
      //   {
      //     name: "江西省",
      //   },
      // ]
    };
  },
  methods: {
    loadData({ id }, fn) {
      ajax(id).then(result => {
        fn(result);
      });
    },
    xxx(item, fn) {
      ajax();
    }
  },
  components: {},
  created() {
    ajax(0).then(result => {
      this.source = result;
    });
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
