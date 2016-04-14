import Backbone from 'backbone';


const JobModel = Backbone.Model.extend({
	defaults: {
		title: '',
		company: '',
		address: '',
		description: '',
		keywords: ''
	},

	rootUrl: 'http://tiny-za-server.herokkuapp.com/collections/mhgrossmann',
	idAttribute: '_id'

});


export default JobModel;  

