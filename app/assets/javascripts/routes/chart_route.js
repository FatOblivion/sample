Sample.ChartRoute = Ember.Route.extend({
  model: function(){
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.run.later(function() {
        var m = Ember.Object.create({
          modelOne: data,
          modelTwo: data2
        });
        resolve(m);
      }, 2000);
    });
  }
});