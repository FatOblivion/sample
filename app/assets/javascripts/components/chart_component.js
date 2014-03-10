var data = {
	labels : ["January","February","March","April","May","June","July"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : [13,34,87,22,80,50,30]
		},
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [55,90,78,18,35,15,90]
		}
	]
};

var data2 = {
	labels : ["January","February","March","April","May","June","July"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : [51,10,18,58,65,95,87]
		},
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [28,48,40,19,96,27,100]
		}
	]
};



Sample.ChartRoute = Ember.Route.extend({
  model: function(){
    return Ember.Object.create({
      modelOne: data,
      modelTwo: data2
    });
  }
});

Sample.LineChartComponent = Ember.Component.extend({
  tagName: 'canvas',
  attributeBindings: ['width', 'height'],
  width: '480',
  height: '360',
  data: null,
  didInsertElement: function() {
    var ctx = this.get('element').getContext("2d");
    var myNewChart = new Chart(ctx).Line(this.get('data'));
  }
});