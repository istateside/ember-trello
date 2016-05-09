import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['modalOpen'],
  
  init() {
    this._super(...arguments);
  },
  
  actions: {
    closeModal() {
      this.set('modalOpen', false);
    },
    
    openModal() {
      this.set('modalOpen', true);
    },
  },
});
