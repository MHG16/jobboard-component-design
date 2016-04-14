import React from 'react';
import JobCollection from '../collections/JobCollection.js'

const JobForm = React.createClass({
	render: function() {
		//console.log('this.props: ', this.props)
		return (
			<div className='jobform'>
				<h1>Post your job</h1>
				<h2>Title</h2>
				<input type='text' className='input-title' />
				<h2>Company Name</h2>
				<input type='text' className='input-company' />
				<h2>Location</h2>
				<input type='text' className='input-location' />
				<h2>Description</h2>
				<input type='text' className='input-description' />
				<h2>Tags</h2>
				<input type='text' className='input-tags' />
				<div class='button'>
					<button type='button' className='submit-job'>Submit Job</button>
				</div>  
			</div>   
			);
	}

});


export default JobForm;