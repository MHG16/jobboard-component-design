import React from 'react';
import featuredlogo from './../../images/featuredlogo.jpg';
import featured from './../../images/featured.jpg';


const CompanyBox = React.createClass({
	render: function() {
		return (
			<div>
				<h1 className="">Company Information</h1>
				<img src={featuredlogo} />
				<img src={featured} />
				<h1 className="">Max Play</h1>
				<h2 className="">Austin Texas</h2>

			</div>   
			);
	}

});





export default CompanyBox;