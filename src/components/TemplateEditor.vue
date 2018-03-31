<template>
  <div class="editor-wrapper">
    <textarea ref="editor" v-text="value"></textarea>
  </div>
</template>

<script>
import { fromTextArea } from '../helpers/codemirror'

export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.codeMirror = fromTextArea(this.$refs.editor)
    this.codeMirror.setValue(this.value)
    this.codeMirror.on('change', cm => {
      this.$emit('input', cm.getValue())
    })
  },
  watch: {
    value (val) {
      const code = this.codeMirror.getValue()
      if (code !== val) {
        const scrollInfo = this.codeMirror.getScrollInfo()
        this.codeMirror.setValue(val)
        this.codeMirror.scrollTo(scrollInfo.left, scrollInfo.top)
      }
    }
  }
}
</script>

<style src="codemirror/lib/codemirror.css"></style>
<style src="codemirror/theme/base16-light.css"></style>
<style>
.editor-wrapper {
  max-width: 100%;
  height: 100%;
}
.CodeMirror {
  height: 100%;
  width: 100%;
}
</style>

