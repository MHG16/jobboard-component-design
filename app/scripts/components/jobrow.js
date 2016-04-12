import React from 'react';

const JobRow = React.createClass({
	render: function() {
		return (
			<div className='jobrow'>
				<h1 className='line1'>Senior Frontend Engineer</h1> 
				<span className='yesterday'>yesterday</span>
				<h2 className='line2'>NSONE</h2>
				<span className='bullet'>&#8226;</span>
				<h3 className='address'>New York, NY</h3>
				<p>Senior Frontend Engineer.  Solve Hard Problems With a Team of Infrastructure Pros.  NSONE is based in New York...
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