import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function () {
      this.get('model').deleteRecord();
      this.get('model').save();
      this.transitionToRoute('index');
    },
    update: function () {
      var note_selected = this.get('model');
      note_selected.save();
      this.transitionToRoute('index');
    }
  }
});
