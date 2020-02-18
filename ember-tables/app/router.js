import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('authors', function() {
    this.route('new');
    this.route('author', { path: ':author_id' });
  });
  this.route('posts', function() {
    this.route('new');
    this.route('post', { path: ':post_id' });
  });
  this.route('slides', function() {
    this.route('motivation');
    this.route('objectives');
    this.route('file-structure');
    this.route('translations-structure');
    this.route('examples');
    this.route('qa');
  });
});
