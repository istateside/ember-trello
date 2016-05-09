import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['modalOpen'],
  
  init() {
    this._super(...arguments);
  },
  
  actions: {
    toggleModal() {
      this.toggleProperty('modalOpen');
    }
  },
});
