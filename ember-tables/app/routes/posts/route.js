import Route from '@ember/routing/route';

export default class PostsRoute extends Route {
  queryParams = {
    state: { refreshModel: true },
  };

  model({ state }) {
    return this.store.query('post', {
      filter: { state },
    });
  }
}
