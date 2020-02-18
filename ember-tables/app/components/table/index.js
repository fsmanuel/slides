import Component from '@glimmer/component';

export default class TableComponent extends Component {
  get showHeaders() {
    return this.args.showHeaders || true;
  }
}
