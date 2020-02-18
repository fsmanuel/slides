import Route from '@ember/routing/route';

export default class AuthorsRoute extends Route {
  queryParams = {
    state: { refreshModel: true },
  };

  model({ state }) {
    return this.store.query('author', {
      filter: { state },
    });
  }
}
