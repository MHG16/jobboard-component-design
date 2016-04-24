import React from 'react';
import featuredlogo from './../../images/featuredlogo.jpg';
import featured from './../../images/featured.jpg';
import CompanyCollection from '../collections/CompanyCollection.js';




const CompanyBox = React.createClass({
	render: function() {
		console.log(this.props);
		return (
			<div class='companyinfo'>
				<h1 className='info'>Company Information</h1>
				<div className='pictureholder'>
					<img className='featuredlogo'src={this.props.model.get('logo')} />
					<img className='featured'src={this.props.model.get('background')}/>
				</div>
				<h1 className='companyName'>{this.props.model.get('company')}</h1>
				<h2 className='location'>{this.props.model.get('location')}</h2>

			</div>   
			);
	}

});





export default CompanyBox;