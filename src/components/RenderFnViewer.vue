<template>
  <pre class="CodeMirror cm-s-monokai render-fn"><!--
    --><code v-html="highlightedCode"></code><!--
  --></pre>
</template>

<script>
import beautify from 'js-beautify'
import highlight from '../helpers/highlight'

export default {
  props: {
    code: String
  },
  computed: {
    highlightedCode () {
      return highlight(beautify(this.code, { indent_size: 2 }), 'javascript')
    }
  }
}
</script>

<style src="codemirror/theme/monokai.css"></style>

<style lang="less" scoped>
.render-fn {
  padding: 5px 10px;
  white-space: pre;
  overflow-x: auto;
}
</style>


