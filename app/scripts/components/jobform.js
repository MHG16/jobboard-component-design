import React from 'react';
import JobCollection from '../collections/JobCollection.js'

const JobForm = React.createClass({
	
		handleSubmit: function(e) {
			console.log('you clicked submit');
		e.preventDefault();  
 		let newJob = {
 			title: this.refs.title.value,
 			company: this.refs.company.value,
 			location: this.refs.location.value,
 			description: this.refs.description.value,
 			tags: this.refs.tags.value

 		};
		
 		JobCollection.create(newJob);

 	},


		render: function() {
		//console.log('this.props: ', this.props)
		return (
			<form onSubmit={this.handleSubmit}>
				<div className='jobform'>
					<h1>Post your job</h1>
					<h2>Title</h2>
					<input type='text' 
						className='input-title'
						ref='title' />
					<h2>Company Name</h2>
					<input type='text' 
						className='input-company'
						ref='company'/>
					<h2>Location</h2>
					<input type='text' 
						className='input-location' 
						ref='location' />
					<h2>Description</h2>
					<input type='text' 
						className='input-description' 
						ref='description' />
					<h2>Tags</h2>
					<input type='text' 
						className='input-tags'
						ref='tags' />
					<div class='button'>
						<button type='submit' 
							className='submit-job'>Submit Job</button>
					</div>  
				</div>   
			</form>
			);
	}

});


export default JobForm;

