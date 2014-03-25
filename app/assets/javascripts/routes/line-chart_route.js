
Sample.LineChartComponentRoute = Ember.Route.extend({
  model: function(){
    return Ember.Object.create({
      modelOne: data,
      modelTwo: data2
    });
  }
});
