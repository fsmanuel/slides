import Model, { attr, hasMany } from '@ember-data/model';

export default class AuthorModel extends Model {
  @attr('string') name;
  @attr('string') state;
  @attr('date') createdAt;
  @attr('date') updatedAt;

  @hasMany('post') posts;

  save() {
    let date = new Date();

    this.updatedAt = date;
    if (this.isNew) {
      this.createdAt = date;
    }

    return super.save();
  }
}
