// For more information see: http://emberjs.com/guides/routing/

Sample.Router.map(function() {
  this.resource('stories', function() { 
  	this.resource('story', { path: ':story_id'}, function() {
  		this.route('edit');
  	});
  	this.route('new');
	});
});

Sample.Router.map(function() {
  this.route("chart", { path: "/chart" });
  
});
