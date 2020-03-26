<template>
    <svg class="icon">
        <use :xlink:href='`#icon-${name}`'></use>
    </svg>
</template>

<script>
import './svg.js'
export default {
    name: 'GuluIcon',
props:{
    name:{

    }
}
}
</script>

<style lang='scss' scoped>
 .icon {
      height: 1em;
      width: 1em;
  }
</style>