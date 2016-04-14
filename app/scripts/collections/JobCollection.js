import Backbone from 'backbone';
import JobModel from '../models/JobModel';


const JobCollection = Backbone.Collection.extend({
    model: JobModel,
    url: 'http://tiny-za-server.herokuapp.com/collections/mhgrossmann'
});

let jobs = new JobCollection();

export default jobs;  



 

