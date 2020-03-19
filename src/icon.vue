<template>
    <svg class="icon">
        <use :xlink:href='`#icon-${name}`'></use>
    </svg>
</template>

<script>
import './svg.js'
export default {
props:{
    name:{

    }
}
}
</script>

<style lang='scss'>
 .icon {
      height: 1em;
      width: 1em;
  }
</style>