// For more information see: http://emberjs.com/guides/routing/

Sample.StoryRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('story', params.story_id)
	}
});
