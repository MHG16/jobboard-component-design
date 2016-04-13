import React from 'react';
import JobCollection from '../collections/JobCollection.js'

const JobRow = React.createClass({
	render: function() {
		console.log('this.props: ', this.props)
		return (
			<div className='jobrow'>
				<h1 className='line1'>{this.props.model.get('title')}</h1> 
				<span className='yesterday'>yesterday</span>
				<h2 className='line2'>{this.props.model.get('company')}</h2>
				<span className='bullet'>&#8226;</span>
				<h3 className='address'>New York, NY</h3>
				<p className='description'>Senior Frontend Engineer.  Solve Hard Problems With a Team of Infrastructure Pros.  NSONE is based in New York...
				</p>
				<section className='keywords'>
					<p>angularjs</p>
					<p>d3.js</p>
					<p>javascript</p>
					<p>ui</p>
					<p>css</p>
				</section>
			</div>   
			);
	}

});


export default JobRow;