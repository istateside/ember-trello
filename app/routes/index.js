import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const lists =  this.store.findAll('list');
    const mappedLists = lists.map(function(list) { return { list: list, cards: list.get('cards') }})
    return { lists: mappedLists } // FIXME: Not working.
  }
});
