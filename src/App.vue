<template>
  <div id="app">
    <header class="main-header">
      <h1 class="main-title">Vue Template Compiler Explorer</h1>
      <div class="tab-wrapper">
        <div class="tab-button-group">
          <ToggleButton
            v-for="panel in panels"
            :key="panel.text"
            :text="panel.text"
            :icon="panel.icon"
            v-model="panel.show"
          />
        </div>
      </div>
      <div class="flex-holder"></div>
    </header>
    <main>
      <section class="panels">
        <div class="panel" v-show="panels[0].show" :style="panelStyle">
          <TemplateEditor 
            v-model="tpl"
          />
        </div>
        <div class="panel" v-show="panels[1].show" :style="panelStyle">
          <ASTExplorer 
            :ast="ast"
          />
        </div>
        <div class="panel" v-show="panels[2].show" :style="panelStyle">
          <RenderFnViewer 
            :code="renderFn"
          />
        </div>
      </section>
      <section class="yahaha">
        "Yahaha! You found me!"
      </section>
    </main>
  </div>
</template>

<script>
import { compile } from 'vue-template-compiler'

// components
import TemplateEditor from './components/TemplateEditor'
import ASTExplorer from './components/ASTExplorer'
import RenderFnViewer from './components/RenderFnViewer'
import ToggleButton from './components/ToggleButton'

import { initialTemplate } from './config'

export default {
  name: 'App',
  data () {
    return {
      tpl: initialTemplate,
      panels: [
        { text: 'Template', show: true, icon: 'template' },
        { text: 'AST', show: true, icon: 'ast' },
        { text: 'Render Function', show: true, icon: 'render' }
      ]
    }
  },
  computed: {
    compiled () {
      return compile(this.tpl)
    },
    ast () {
      return this.compiled.ast
    },
    renderFn () {
      return this.compiled.render.toString()
    },
    activePanelsNum () {
      return this.panels.filter(p => p.show).length
    },
    panelWidth () {
      return ['100%', '50%', '33.3%'][this.activePanelsNum - 1]
    },
    panelStyle () {
      return { width: this.panelWidth }
    }
  },
  components: {
    TemplateEditor,
    ASTExplorer,
    RenderFnViewer,
    ToggleButton
  }
}
</script>

<style src="./assets/styles/common.css"></style>
<style lang="less">
@import './assets/styles/variables.less';

html, body {
  height: 100%;
  font-size: 14px/1;
}

#app {
  height: 100%;
  font-family: 'Courier', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-header {
  height: 50px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #eee;
  border-bottom: 1px solid #ccc;
  .main-title, .tabs-wrapper, .flex-holder {
    flex: 1;
  }
  @media (max-width: 1040px) {
    .main-title, .tabs-wrapper {
      flex: none;
    }
    .flex-holder {
      display: none;
    }  
  }
  @media (max-width: 700px) {
    .main-title {
      display: none;
    }
  }
}

.tab-button-group {
  text-align: center;
  border: 1px solid @primary-color;
  border-radius: @btn-border-radius;
  overflow: hidden;
}


.main-title {
  font-size: 1.3rem;
  color: @primary-color;
}

main {
  height: calc(100% - 50px);
  font-size: 1rem;
  position: relative;
  .yahaha {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
}

.panels {
  height: 100%;
  display: flex;
}

.panel {
  height: 100%;
  border-right: 1px solid #ccc;
  background: #fff;
  &:last-child {
    border-right: none;
  }
}
</style>
