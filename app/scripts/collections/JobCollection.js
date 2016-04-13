import Backbone from 'backbone';
import JobModel from '../models/JobModel';


const JobCollection = Backbone.Colletion.extend({
    model: JobModel
});


export default JobCollection;  

