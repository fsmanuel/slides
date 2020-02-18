import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

import { labelValueOptions } from 'ember-tables/utils/intl';

export default class PostsController extends Controller {
  @service intl;

  queryParams = ['state'];
  @tracked state = 'draft';

  get tableColumns() {
    return [
      {
        attribute: 'id',
      },
      {
        attribute: 'title',
      },
      {
        attribute: 'author',
        // label: this.intl.t('forms.post.fields.title') || false,
        valuePath: 'author.name',
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
      `forms.post.options`,
      `forms.defaults.options`
    ];
  }
  states = [
    'draft',
    'published',
    'deleted',
  ];
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
    this.transitionToRoute('posts.post', record);
  }
}
