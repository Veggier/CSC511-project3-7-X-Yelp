import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  name: attr('string'),
  yelpid: attr('string'),
  rating: attr('string'),
  location: attr('string'),
  price: attr('string')
});
