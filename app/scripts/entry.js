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


const TestComponent = React.createClass({
	render: function() {
		return <h1>Test~</h1>;
	}
});

let job1 = new JobModel({title: 'vice president', company: 'Walmart', address: 'austin, tx', description: 'The job you need', keywords: 'VP salaried full-time'}); 

console.log(job1);

ReactDOM.render(<Navigation />,  document.querySelector('nav'));
ReactDOM.render(<FilterBox />,  document.querySelector('main'));
ReactDOM.render(<JobRow model={job1} />, document.querySelector('.jobrow-holder'));
ReactDOM.render(<InfoBox />, document.querySelector('.info-holder'));
ReactDOM.render(<CompanyBox companyName="walmart" color="blue"/>, document.querySelector('.company-holder'));

