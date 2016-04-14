import Backbone from 'backbone';


const CompanyModel = Backbone.Model.extend({
	defaults: {
		company: '',
		location: '',
		background: '',
		logo: ''
	}

});


export default CompanyModel;  




