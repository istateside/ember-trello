import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    createNewList() {
      this.get('onClick')();
    }
  }
});
