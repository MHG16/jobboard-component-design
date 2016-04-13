import React from 'react';
import featuredlogo from './../../images/featuredlogo.jpg';
import featured from './../../images/featured.jpg';
import CompanyCollection from '../collections/CompanyCollection.js';




const CompanyBox = React.createClass({
	render: function() {
		console.log(this.props);
		return (
			<div class='companyinfo'>
				<h1 className='info'>{this.props.companyName}</h1>
				<div className='pictureholder'>
					<img className='featuredlogo'src={featuredlogo} />
					<img className='featured'src={featured} />
				</div>
				<h1 className='max'>Max Play</h1>
				<h2 className='austin'>Austin Texas</h2>

			</div>   
			);
	}

});





export default CompanyBox;