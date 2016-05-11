import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    return $.get("http://localhost:3000/lists").then(function(data) {
      return data;
    });
  }  
});
