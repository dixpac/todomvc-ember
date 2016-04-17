import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.filter('todo', function(todo) {
      return !todo.get('complete');
    })
  },
  remderTemplate(controller, model) {
    this.render('todos.inex', {
      model: model
    })
  }
});
