import Controller from '@ember/controller';
import { action } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';

import { labelValueOptions } from 'ember-tables/utils/intl';

export default class AuthorsNewController extends Controller {
  @service intl;
  @readOnly('model.constructor.modelName') modelName;

  @action
  save() {    
    this.model.save();
  }

  @action
  updateAttribute(attribute, value) {    
    this.model.set(attribute, value);
  }

  @action
  changeState({ value }) {    
    this.model.set('state', value);
  }
  get stateOption() {
    return this.stateOptions.find(({ value }) => value === this.model.state);
  }

  get optionLookups() {
    return [
      `forms.${this.modelName}.options`,
      `forms.defaults.options`
    ];
  }
  states = [ '1', '2' ];
  get stateOptions() {
    let lookups = this.optionLookups;
    return labelValueOptions.call(this, this.states, 'state', lookups);
  }
}
