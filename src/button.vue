<template>
  <button class="g-button">按钮</button>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.g-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--button-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:active {
    background: var(--button-active-bg);
  }
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:focus {
    outline: none;
  }
}
</style>