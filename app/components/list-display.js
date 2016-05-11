import Ember from 'ember';

export default Ember.Component.extend({  
  store: Ember.inject.service(),
  classNames: ['list__wrapper'],
  tagName: "li",
  editingTitle: false,
  
  actions: {
    addNewCard() {
      this.get("list.cards").push({ list_id: this.get('list').id, title: "New card" });
      this.rerender();
    },
    
    toggleEdit() {
      window.event.preventDefault();
      this.toggleProperty('editingTitle');
    },
    
    deleteCard(id) {
      // this.set('list.cards', this.get('list.cards').filter(function(card) { return card.id !== 8 }));
      const unwantedCardIdx = this.get('list.cards').findIndex(card => card.id === id);
      this.get('list.cards').splice(unwantedCardIdx, 1);
      this.rerender();
    }
  }
});
