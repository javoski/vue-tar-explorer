<template>
  <ASTCollection v-if="isObject(value)" :name="name" :value="value" />
  <div v-else>
    <span class="property-name" v-if="name">{{ name }}:</span>
    <span class="property-value" :class="[type]" >{{ displayValue }}</span>
  </div>
</template>

<script>
import ASTCollection from './ASTCollection'

export default {
  name: 'ASTNode',
  props: {
    name: [String, Number],
    value: {
      type: null,
      required: true
    }
  },
  computed: {
    type () {
      if (this.value === null) {
        return 'null'
      }
      return typeof this.value
    },
    displayValue () {
      if (this.type === 'string') {
        return JSON.stringify(this.value)
      }
      return String(this.value)
    }
  },
  methods: {
    isObject (v) {
      return typeof v === 'object' && v !== null
    }
  },
  components: {
    ASTCollection
  }
}
</script>

<style lang="less">
.property-name {
  color: #8a2593;
  +.property-value {
    margin-left: .4em;
  }
}
.property-value {
  color: #232323;
  &.string {
    color: #c62d2f;
  }
  &.undefined, &.null {
    color: #808080;
  }
  &.number, &.boolean {
    color: #112aa2;
  }
}

</style>

