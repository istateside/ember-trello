import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['modalOpen', ''],
  actions: {
    closeModal() {
      this.set('modalOpen', false);
    },
    
    openModal() {
      this.set('modalOpen', true);
    },
    
    submitForm() {
      event.preventDefault();
      this.get('onSubmit')([this.get('title'), this.get('description')]);
      this.send('closeModal');
    },
    
    openConfirm() {
      const confirmed = confirm("Are you sure?");
      if (confirmed) {
        this.get('onConfirm')();
        this.send('closeModal');
      }
    },
  }
});
