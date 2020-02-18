import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

import { translate } from 'ember-tables/utils/intl';

export default class TableColumnComponent extends Component {
  @service intl;

  get label() {
    let { modelName, column: { attribute, label } } = this.args;
    let lookups = [
      `tables.${modelName}.fields.${attribute}`,
      `tables.defaults.fields.${attribute}`,
      `forms.${modelName}.fields.${attribute}`,
      `forms.defaults.fields.${attribute}`
    ];

    return translate.call(this, label, lookups);
  }
}
