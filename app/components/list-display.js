import Ember from 'ember';

export default Ember.Component.extend({  
  store: Ember.inject.service(),
  classNames: ['list__wrapper'],
  tagName: "li",
  actions: {
    addNewCard() {
      const store = this.get('store');
      const newCard = store.createRecord('card', { list_id: this.get('list').id });
      // newCard.save();
      window.Lists.lists[this.get('list').id - 1].cards.push(newCard);
    },
  }
});
