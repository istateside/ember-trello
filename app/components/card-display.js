import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "li",
  classNames: ['card__wrapper'],
  classNameBindings: ['modalOpen', 'fadingOut'],
  
  actions: {
    openModal() {
      this.set('modalOpen', true);
    },
    
    cardSubmit() {
      this.set('modalOpen', false);
    },
    
    deleteThisCard() {
      this.get('deleteCard')();
    },
  },
});
