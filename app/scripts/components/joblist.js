import React from 'react';
import JobRow from './JobRow';

const JobList = this.props.data.map((job, index, array) => {
			
			return (
				<JobRow
					key={index}
					title={job.title}
					company={job.company}
					address={job.address}
					description={job.description}
					keywords={job.keywords}/>
			)

		return (
			<div>
				<Header/>
				{JobComponents}
			</div>
		)
});


export default JobList; 