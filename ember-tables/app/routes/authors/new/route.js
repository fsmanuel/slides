import Route from '@ember/routing/route';

export default class AuthorsNewRoute extends Route {
  model() {    
    return this.store.createRecord('author');
  }
}
