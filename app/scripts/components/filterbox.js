import React from 'react';

const FilterBox = React.createClass({
	render: function() {
		return (
			<div className='filterbox'>
				<div className='left'>
					<h1>Keywords</h1>
					<input type='text' className='keywords'/>
				</div>
				<div className='right'>
					<h1>Location</h1>
					<input type='text' className='location'/>
					<button type='button' className='search'>Search</button>
				</div>
			</div>
			);
	}

});












export default FilterBox;