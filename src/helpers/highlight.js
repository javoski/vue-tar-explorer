/* This is written based on codemirror/addon/runmode/runmode.js */
import CodeMirror from 'codemirror'

export default function highlight (code, modeSpec, options) {
  const mode = CodeMirror.getMode(CodeMirror.defaults, modeSpec)
  const tabSize = (options && options.tabSize) || CodeMirror.defaults.tabSize
  let highlightedHtml = ''
  let col = 0

  function onProcessed (text, style) {
    if (text === '\n') {
      highlightedHtml += '\n'
      col = 0
      return
    }

    let content = ''
    // replace tabs
    for (let pos = 0;;) {
      let idx = text.indexOf('\t', pos)
      if (idx === -1) {
        content += text.slice(pos)
        col += text.length - pos
        break
      } else {
        col += idx - pos
        content += text.slice(pos, idx)
        const size = tabSize - col % tabSize
        col += size
        for (let i = 0; i < size; ++i) content += ' '
        pos = idx + 1
      }
    }

    if (style) {
      const className = "cm-" + style.replace(/ +/g, " cm-")
      content = `<span class="${className}">${content}</span>`
    }
    highlightedHtml += content
  }
  const lines = CodeMirror.splitLines(code)
  const state = (options && options.state) || CodeMirror.startState(mode)
  for (var i = 0; i < lines.length; i++) {
    if (i) onProcessed("\n")
    var stream = new CodeMirror.StringStream(lines[i])
    if (!stream.string && mode.blankLine) mode.blankLine(state)
    while (!stream.eol()) {
      var style = mode.token(stream, state)
      onProcessed(stream.current(), style)
      stream.start = stream.pos
    }
  }

  return highlightedHtml
}