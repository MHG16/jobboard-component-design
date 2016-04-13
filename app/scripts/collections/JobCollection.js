import Backbone from 'backbone';
import JobModel from '../models/JobModel';


const JobCollection = Backbone.Collection.extend({
    model: JobModel
});


export default JobCollection;  

