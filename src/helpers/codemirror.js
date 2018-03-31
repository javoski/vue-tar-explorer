import CodeMirror from 'codemirror'
import emmet from '@emmetio/codemirror-plugin'
import 'codemirror/mode/vue/vue'
import 'codemirror/mode/javascript/javascript'

const options = {
  mode: 'vue',
  tabSize: 2,
  lineNumbers: true,
  theme: 'base16-light',
  extraKeys: {
		'Tab': 'emmetExpandAbbreviation',
		'Enter': 'emmetInsertLineBreak'
	}
}

emmet(CodeMirror)

export function fromTextArea (el) {
  return CodeMirror.fromTextArea(el, options)
}
