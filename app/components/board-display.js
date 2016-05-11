import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewList() {
      this.get('lists').push({ title: "New List" });
      this.rerender();
    }
  }
});
