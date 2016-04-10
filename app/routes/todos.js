import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let todos = [
      {
        title: 'Buy book',
        complete: false
      },
      {
        title: 'Play with puppiws',
        complete: true
      },
      {
        title: 'Watch netflix',
        complete: false
      }
    ];
    return todos;

  }
});


