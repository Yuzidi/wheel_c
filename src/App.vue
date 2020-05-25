<template>
  <div id="app">
    <p>11</p>
    <g-cascader :source='source' popover-class-name='xxx'></g-cascader>
    <p>322</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      source: [{
        name: '浙江',
        children: [{
            name: '杭州',
            children: [{
                name: '上城区'
              },
              {
                name: '下城区'
              },
              {
                name: '江干区'
              },
            ]
          },
          {
            name: '嘉兴',
            children: [{
                name: '南湖区'
              },
              {
                name: '秀洲区'
              },
              {
                name: '嘉善区'
              },
            ]
          },
          {
            name: '啊啊'
          },
        ]
      },
      {
        name: '江西省',
        children: [{
            name: '南昌',
            children: [{
                name: '新建县'
              },
              {
                name: '经济开发区'
              }
            ]
          },
          {
            name: '上饶',
            children: [{
              name: '鄱阳县'
            }]
          },
        ]
      }
    ]
    }
  },
  components: {
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
