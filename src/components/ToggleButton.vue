<template>
  <button class="toggle-button" :class="{ active }" @click="$emit('change', !active)">
    <i v-if="icon" class="iconfont" :class="`icon-${icon}`"></i>
    <span v-if="text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'ToggleButton',
  props: {
    icon: String,
    text: String,
    active: {
      type: Boolean,
      default: true
    }
  },
  model: {
    prop: 'active',
    event: 'change'
  }
}
</script>

<style src="../assets/fonts/iconfont.css"></style>
<style lang="less">
@import '../assets/styles/variables.less';

.toggle-button {
  display: inline-block;
  line-height: 1;
  padding: 10px 16px;
  font-size: 1rem;
  cursor: pointer;
  background: #fff;
  color: #42b983;
  border: none;
  &:hover {
    background: lighten(@primary-color, 17%);
    color: #fff;
  }
  &.active {
    color: #fff;
    background: @primary-color;
  }
  &:not(:first-child) {
    border-left: 1px solid @primary-color;
    &:hover, &.active {
      border-left: 1px solid #fff;
    }
  }
  span {
    margin-left: 3px;
  }
  @media (max-width: 420px) {
    .iconfont {
      display: none;
    }
    span {
      margin-left: 0;
    }
  }
  @media (max-width: 370px) {
    .iconfont {
      display: inline;
    }
    span {
      display: none;
    }
  }
}
</style>

