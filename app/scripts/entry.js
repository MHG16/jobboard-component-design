// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation.js';
import FilterBox from './components/FilterBox.js';
import JobRow from './components/JobRow.js';
import InfoBox from './components/InfoBox.js';
import CompanyBox from './components/CompanyBox.js';
import CompanyCollection from './collections/CompanyCollection';
import JobCollection from './collections/JobCollection';
import JobModel from './models/JobModel.js';
import CompanyModel from './models/CompanyModel.js'; 
import JobForm from './components/JobForm.js';

const App = React.createClass({
	getInitialState: function() {
		return {jobs: []}
	},

	componentDidMount: function() {
		JobCollection.on('add', () => {
			console.log('a job was added to the collection', this.state);
			this.setState({jobs: JobCollection})
		});
		JobCollection.fetch();

		console.log('the app component mounted');

	},


  render: function() {
  	//this will give us back an array of components
  	//each of the values will be a backbone model  
  	const JobRows = this.state.jobs.map((val, i, arr) => {
  		return (
  			<JobRow 
  			key={val.get('_id')}
  			title={val.get('title')}
  			comapny={val.get('company')}
  			address={val.get('address')}
  			description={val.get('description')}
  			keywords={val.get('keywords')}

  		)

  	});
    return (
    	<div>
	    	<JobForm/>
	    	{JobRows}
    	</div>
    )
  }
});







//instantiate a JobModel with data
let job1 = new JobModel({
	title: 'Vice President', 
	company: 'Walmart', 
	address: 'Austin, Tx', 
	description: 'The job you need, the job you want', 
	keywords: 'VP salaried full-time'
}); 

//instantiate a CompanyModel with data
let company1 = new CompanyModel({
	company: 'New Robotics',
	address: 'Honolulu, HI',
	background: 'http://www.publicdomainpictures.net/pictures/10000/nahled/1-1255451436LU5H.jpg',
	logo: 'https://d30y9cdsu7xlg0.cloudfront.net/png/23890-200.png'
});

console.log(job1);

ReactDOM.render(<Navigation />,  document.querySelector('nav'));
ReactDOM.render(<FilterBox />,  document.querySelector('main'));

//render a JobRow with the job1 model
//job1 is a variable here since it is in curly braces
ReactDOM.render(<JobRow model={job1} />, document.querySelector('.jobrow-holder'));
ReactDOM.render(<InfoBox />, document.querySelector('.info-holder'));


ReactDOM.render(<CompanyBox model={company1} />, document.querySelector('.company-holder'));
ReactDOM.render(<JobForm />, document.querySelector('.form-holder'));

