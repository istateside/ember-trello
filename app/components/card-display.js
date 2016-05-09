import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['modalOpen', 'fadingOut'],
  
  actions: {
    openModal() {
      this.set('modalOpen', true);
    },
    
    cardSubmit() {
      this.get('card')
      console.log('card submit', arguments);
    },
    
    deleteCard() {
      this.set('fadingOut', true);
      setTimeout(function() {
        this.destroy();
      }.bind(this), 800);
    },
  },
});
