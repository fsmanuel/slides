import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';

import { labelValueOptions, lookupTranslation } from 'ember-tables/utils/intl';

export default class PostsNewController extends Controller {
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

  @computed
  get authors() {
    return this.store.findAll('author');
  }

  get stateOptionSelected() {
    return this.stateOptions.find(({ value }) => value === this.model.state);
  }

  states = [
    'draft',
    // 'pending',
    // 'reviewed',
    'published',
    'deleted',
  ];
  get stateOptions() {    
    let attribute = 'state';
    let modelName = this.modelName;

    let options = this
      .states
      .map((value) => {
        let lookups = [
          `forms.${modelName}.options.${attribute}.${value}`,
          `forms.defaults.options.${attribute}.${value}`
        ];
        let label = lookupTranslation(this.intl, lookups);
        return { value, label };
      });

    return options;
  }

  // get optionLookups() {
  //   return [
  //     `forms.${this.modelName}.options`,
  //     `forms.defaults.options`
  //   ];
  // }

  // eslint-disable-next-line no-dupe-class-members
  // get stateOptions() {
  //   let attribute = 'state';
  //   let lookups = this.optionLookups;

  //   return this.states
  //     .map((value) = {
  //       let append = `${attribute}.${value}`;
  //       let label = lookupTranslation(this.intl, lookups, { append });
  //       return { value, label };
  //     });
  // }

  // eslint-disable-next-line no-dupe-class-members
  // get stateOptions() {
  //   let lookups = this.optionLookups;
  //   return labelValueOptions.call(this, this.states, 'state', lookups);
  // }
}
