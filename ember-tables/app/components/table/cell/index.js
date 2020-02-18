import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import ObjectProxy from '@ember/object/proxy';
import PromiseProxyMixin from '@ember/object/promise-proxy-mixin';
import { resolve } from 'rsvp';

let PromiseObject = ObjectProxy.extend(PromiseProxyMixin);

import { lookupTranslation } from 'ember-tables/utils/intl';

export default class TableCellComponent extends Component {
  @service intl;

  get value() {
    let {
      cell: { attribute, type },
      modelName
    } = this.args;

    let value = this.resolveValue();

    if (type === 'translate-value') {
      // Or translate "undefined" e.g. "-"
      if (!value) {
        return null;
      }

      let lookups = [
        `forms.${modelName}.options`,
        `forms.defaults.options`
      ];
      let append = `${attribute}.${value}`;
      return lookupTranslation(this.intl, lookups, { append, silent: value });
    }

    if (type === 'date') {
      this.intl.locale;
      return value ? this.intl.formatDate(value) : null;
    }

    return value;
  }

  resolveValue() {
    let {
      cell: { attribute, valuePath },
      record
    } = this.args;

    if (valuePath) {
      let promise = valuePath
        .split('.')
        .reduce((chain, currentPath) => {
          return chain
            .then((data) => {              
              if (!data) {
                return data;
              }
              
              return data[currentPath];
            });
        }, resolve(record))
        .catch(console.error);

      return PromiseObject.create({ promise });
    }

    return record[attribute];
  }
}
