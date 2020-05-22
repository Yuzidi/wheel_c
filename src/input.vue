<!--
 * @Author: your name
 * @Date: 2020-04-23 09:58:20
 * @LastEditTime: 2020-04-23 15:13:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ftmb-clientc:\Users\Administrator\Desktop\learn\wheel_c\src\input.vue
 -->
<template>
  <div class="wrapper" :class="{error}">
      <input :value='value' type="text" :disabled='disabled' :readonly='readonly'
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)">
      <template v-if="error">
          <icon name='error' class="icon-error"></icon>
          <span class="errorMessage">{{error}}</span>
      </template>
  </div>
</template>

<script>
import Icon from './icon'
export default {
    name: 'GuluInput',
    components:{
        Icon
    },
    props:{
        value:{
            type: String
        },
        disabled:{
            type: Boolean,
            default: false
        },
        readonly:{
            type: Boolean,
            default: false
        },
        error:{
            type: String
        }
    }
}
</script>

<style lang='scss' scoped>
// @import 'varScss';
$box-shadow-color: rgba(0,0,0,0.5);
$red: #F1453D;
$border-color: #999;
$input-height: 32px;
$border-radius: 4px;
.wrapper {
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    > :not(:last-child) {
        margin-right: 0.5em;
    }
    > input {
        height: $input-height;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: 0 8px;
        font-size: inherit;
        &:hover {
            border-color: #666;
        }
        &:focus {
            box-shadow: inset 0px 1px 3px $box-shadow-color;
            outline: none;
        }
        &[disabled], &[readonly] {
            border-color: #bbb;
            color: #bbb;
            cursor: not-allowed;
        }
    }
    &.error {
        >input {
            border-color: $red;
        }
        .icon-error {
            fill: $red;
        }
        .errorMessage {
            color: $red;
        }
    }
}
</style>