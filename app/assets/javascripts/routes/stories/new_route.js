// For more information see: http://emberjs.com/guides/routing/

Sample.StoriesNewRoute = Ember.Route.extend({
	model: function(){
		return this.store.createRecord('story');
	},

	actions: {
		create: function(story) {
			var route = this;
			story.save().then(function() {
				route.transitionTo('stories');
			});

		}
	}


});
