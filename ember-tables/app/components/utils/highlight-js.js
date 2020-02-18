import Component from '@glimmer/component';
import hljs from 'highlight.js';

export default class HighlightJsComponent extends Component {
  get lang() {
    return this.args.lang || 'js';
  }

  highlightBlock(element) {
    hljs.configure({ tabReplace: '  ' });

    // Trim
    element.textContent = element.textContent.trim();
    hljs.highlightBlock(element);
  }
}
