import Backbone from 'backbone';


const JobModel = Backbone.Model.extend({
	defaults: {
		title: '',
		company: '',
		address: '',
		description: '',
		keywords: ''
	}

});


export default JobModel;  

