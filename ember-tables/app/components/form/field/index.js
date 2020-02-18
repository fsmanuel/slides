import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

import { lookupTranslation, translate } from 'ember-tables/utils/intl';

export default class FormFieldComponent extends Component {
  @service intl;

  get label() {
    let { attribute, label, modelName } = this.args;
    let lookups = [
      `forms.${modelName}.fields.${attribute}`,
      `forms.defaults.fields.${attribute}`
    ];

    return translate.call(this, label, lookups);
  }

  get hint() {
    let { attribute, hint, modelName } = this.args;
    let lookups = [
      `forms.${modelName}.hints.${attribute}`,
      `forms.defaults.hints.${attribute}`
    ];

    return translate.call(this, hint, lookups, { silent: true });
  }
  
  // eslint-disable-next-line no-dupe-class-members
  // get hint() {
  //   let { attribute, hint, modelName } = this.args;
  //   let lookups = [
  //     `forms.${modelName}`,
  //     `forms.defaults`
  //   ];

  //   let append = `hints.${attribute}`;
  //   return lookupTranslation(this.intl, lookups, { append, silent: hint });
  // }

  // translate() {
  //   return translate.apply(this, arguments);
  // }

  get value() {
    let {
      attribute,
      model,
      value
    } = this.args;

    return value || (model && model[attribute]);
  }

  set value(value) {
    this.args.onUpdate(this.args.attribute, value);
  }
}
