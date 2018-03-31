<template>
  <div class="ast-wrapper">
    <ASTNode :value="ast" />
  </div>
</template>

<script>
import ASTNode from './ASTNode'

export default {
  name: 'ASTExplorer',
  props: {
    ast: {
      type: Object,
      required: true
    }
  },
  mounted () {
    console.log(this.ast)
  },
  components: {
    ASTNode
  }
}
</script>

<style>
.ast-wrapper {
  padding: 5px 15px;
  height: 100%;
  overflow: auto;
  white-space: nowrap;
}
</style>

