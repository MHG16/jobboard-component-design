import Backbone from 'backbone';


const JobModel = Backbone.Model.extend({
	defaults: {
		title: '',
		company: '',
		location: '',
		description: '',
		tags: ''
	},

	rootUrl: 'http://tiny-za-server.herokkuapp.com/collections/mhgrossmann',
	idAttribute: '_id'

});


export default JobModel;  

