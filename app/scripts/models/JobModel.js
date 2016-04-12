import Backbone from 'backbone';



const JobModel = Backbone.Model.extend({
	defaults: {
		name: '',
		power: '',
		color: ''

	}

});


export default JobModel;  

