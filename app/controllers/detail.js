import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      const favorite = this.store.createRecord('favorite', {
        name: this.get('model.business.name'),
        yelpid: this.get('model.business.id'),
        rating:this.get('model.business.rating'),
        location:this.get('model.business.location.formatted_address'),
        price:this.get('model.business.price')
      });
      favorite.save().then(() => {
        this.set('model.favorite', favorite);
      });
    },
    unsave() {
      this.get('model.favorite')
        .destroyRecord()
        .then(() => {
          this.set('model.favorite', undefined);
        });
    }
  }
});