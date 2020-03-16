<template>
    <svg class="icon">
        <use :xlink:href='`#icon-${name}`'></user>
    </svg>
</template>

<script>
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