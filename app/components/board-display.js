import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewList() {
      this.get('lists').push({title: "New List", cards: []})
      const newLists = this.get('lists');
      this.set('lists', this.get('lists'));
    }
  }
});
