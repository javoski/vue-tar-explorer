<template>
  <div class="ast-collection">
    <div
      @click="expanded = !expanded"
      class="toggle"
      :class="{ active: !isEmpty, expanded }"
    >
      <span class="property-name" v-if="name">{{ name }}:</span>
      <span class="property-value" v-if="expanded">{{isArray ? `Array(${value.length})` : 'Object'}}</span>
      <span class="property-value" v-else>{{ brackets.open }}{{!isEmpty ? '...' : ''}}{{ brackets.close }}</span>
    </div>
    <ul v-if="expanded && !isEmpty" class="property-list">
      <li v-for="(v, k) in value">
        <ASTNode :name="String(k)" :value="v" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ASTCollection',
  data () {
    return {
      expanded: false
    }
  },
  props: {
    name: {
      type: [String, Number]
    },
    value: {
      type: [Object, Array],
      required: true
    }
  },
  beforeCreate () {
    // Circular reference
    this.$options.components.ASTNode = require('./ASTNode.vue').default
  },
  computed: {
    isArray: vm => Array.isArray(vm.value),
    isEmpty: vm => (vm.isArray ? vm.value : Object.keys(vm.value)).length === 0,
    brackets () {
      let [open, close] = this.isArray ? ['[', ']'] : ['{', '}']
      return { open, close }
    }
  }
}
</script>

<style lang="less">
.ast-collection {
  .toggle {
    &.active {
      cursor: pointer;
      position: relative;
      &::before {
        position: absolute;
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        border-left: 7px solid #6e6e6e;
        left: -10px;
        top: 5px;
      }
      &.expanded {
        &::before {
          top: 6px;
          border-top: 7px solid #6e6e6e;
          border-bottom: none;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
        }
      }
    }
  }
}
.property-list {
  margin-left: 1em;
}
</style>

