import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

import { labelValueOptions } from 'ember-tables/utils/intl';

export default class AuthorsController extends Controller {
  @service intl;

  queryParams = ['state'];
  @tracked state = '1';

  get tableColumns() {
    return [
      {
        attribute: 'id',
      },
      {
        attribute: 'name',
      },
      {
        attribute: 'state',
        type: 'translate-value',
      },
      {
        attribute: 'updatedAt',
        type: 'date',
      },
      {
        attribute: 'createdAt',
        type: 'date',
      },
    ]
  }

  @action
  changeState({ value }) {    
    this.state = value;
  }
  get stateOption() {
    return this.stateOptions.find(({ value }) => value === this.state);
  }

  get optionLookups() {
    return [
      `forms.author.options`,
      `forms.defaults.options`
    ];
  }
  states = [ '1', '2' ];
  get stateOptions() {
    let lookups = this.optionLookups;
    return labelValueOptions.call(this, this.states, 'state', lookups);
  }

  @action
  deleteRecord(record) {
    return record.destroyRecord();
  }

  @action
  rowClicked(record) {
    this.transitionToRoute('authors.author', record);
  }
}
