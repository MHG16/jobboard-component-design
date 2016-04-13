import Backbone from 'backbone';
import CompanyModel from '../models/CompanyModel';


const CompanyCollection = Backbone.Collection.extend({
    model: CompanyModel
});


export default CompanyCollection;


