import Model, { attr, belongsTo } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('string') title;
  @attr('string') state;
  @attr('date') publishedAt;
  @attr('date') createdAt;
  @attr('date') updatedAt;

  @belongsTo('author') author;

  save() {
    let date = new Date();

    this.updatedAt = date;
    if (this.isNew) {
      this.createdAt = date;
    }

    return super.save();
  }
}
