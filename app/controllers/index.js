import Ember from 'ember';

export default Ember.Controller.extend({
  
  actions: {
    createList() {
      this.get('model').push({ title: "New List" });
    }
  }
});
