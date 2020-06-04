<template>
  <div class="g-nav-item" :class="{selected}" @click='onClick'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluNavItem',
  inject:['root'],
  data() {
    return {
      selected: false
    };
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit('add:selected', this.name)
    }
  },
  created() {
    this.root.addItem(this)
  },
  mounted() {
  }
}
</script>

<style lang='scss' scoped>
.g-nav-item {
  padding: 10px 20px;
  &.selected {
    background-color: red;
  }
}
</style>