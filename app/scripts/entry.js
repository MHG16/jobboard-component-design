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
import Jobs from './components/Jobs.js';
import Companies from './components/Companies.js';


const TestComponent = React.createClass({
	render: function() {
		return <h1>Test~</h1>;
	}
});

ReactDOM.render(<Navigation />,  document.querySelector('nav'));
ReactDOM.render(<FilterBox />,  document.querySelector('main'));
ReactDOM.render(<JobRow />, document.querySelector('.jobrow-holder'));
ReactDOM.render(<InfoBox />, document.querySelector('.info-holder'));
ReactDOM.render(<CompanyBox />, document.querySelector('.company-holder'));

