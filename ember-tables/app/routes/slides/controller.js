import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class SlidesController extends Controller {
  @tracked collapsed = false;

  get slides() {
    return [
      {
        label: 'Motivation',
        route: 'slides.motivation'
      },
      {
        label: 'Objectives',
        route: 'slides.objectives'
      },
      {
        label: 'File Structure',
        route: 'slides.file-structure'
      },
      {
        label: 'Translations Structure',
        route: 'slides.translations-structure'
      },
      {
        label: 'Examples',
        route: 'slides.examples'
      },
      {
        label: 'Q&A',
        route: 'slides.qa'
      },
    ]
  }
}
