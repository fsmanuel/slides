import Route from '@ember/routing/route';

export default class SlidesRoute extends Route {
  activate() {
    let route = this.fullRouteName;
    if (route !== 'slides') {
      this.controllerFor('slides').set('collapsed', true);
    }
  }

  deactivate() {
    let route = this.fullRouteName;
    if (route !== 'slides') {
      this.controllerFor('slides').set('collapsed', false);
    }
  }
}
