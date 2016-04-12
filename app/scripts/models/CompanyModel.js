import Backbone from 'backbone';




const CompanyModel = Backbone.Model.extend({
	defaults: {
		name: '',
		power: '',
		color: ''

	}

});


export default CompanyModel;  




