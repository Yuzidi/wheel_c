<template>
  <div class="g-nav-item" :class="{selected}" @click='onClick'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluNavItem',
  inject:['root', 'vertical'],
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
      this.root.namePath = []
      this.$parent.updateNamePath && this.$parent.updateNamePath()
      !this.vertical && this.$parent.$parent.close && this.$parent.$parent.close('close')
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
@import 'varScss';
.g-nav-item {
  padding: 10px 20px;
  position: relative;
  &.selected {
    // background-color: red;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      // top: 100%;
      width: 100%;
      border-bottom: 2px solid $blue;
    }
  }
}
.g-sub-nav .g-nav-item {
  
  
  &.selected {
    color: $color;
    background: $grey;
    &::after {
      display: none;
    }
  }
}
</style>