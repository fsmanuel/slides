import Route from '@ember/routing/route';

export default class PostsNewRoute extends Route {
  model() {    
    return this.store.createRecord('post');
  }
}
