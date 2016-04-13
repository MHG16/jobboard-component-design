import React from 'react';

const JobList = this.props.data.map((job, index, array) => {
			return (
				<Jobs
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