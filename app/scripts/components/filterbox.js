import React from 'react';

const FilterBox = React.createClass({
	render: function() {
		return (
			<div className='filterbox'>
			<div className='keywords'>
				<h1>Keywords</h1>
				<input type='text'/>
			</div>
			<div className='location'>
				<h1>Location</h1>
				<input type='text'/>
			</div>
				<input type="button"/>
			</div>
			);
	}

});












export default FilterBox;