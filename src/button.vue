<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
      <svg v-if='icon' class="icon">
          <use :xlink:href='`#icon-${icon}`'></user>
      </svg>
      <div class="content">
        <slot></slot>
      </div>
  </button>
</template>

<script>
export default {
    props:['icon', 'icon-position']
};
</script>

<style lang='scss'>
.g-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--button-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:active {
    background: var(--button-active-bg);
  }
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:focus {
    outline: none;
  }
  .icon {
      height: 1em;
      width: 1em;
      order: 1;
      margin-right: .2em;
  }
  >.content {
      order: 2;
  }
  &.icon-right {
    >.icon {
      order: 2;
      margin-left: .2em;
      margin-right: 0;
    }
    >.content {
        order: 1;
    }
  }
}

</style>