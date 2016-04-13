import Backbone from 'backbone';


const CompanyModel = Backbone.Model.extend({
	defaults: {
		company: '',
		location: '',
		logo: ''

	}

});


export default CompanyModel;  




