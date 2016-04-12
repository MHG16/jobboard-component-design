import React from 'react';

const InfoBox = React.createClass({
	render: function() {
		return (
			<div className='infobox'>
				<h1 class='looking'>Looking for a Job?</h1>
				<span class="profile">Create a fresh jobs profile and</span>
				<span>let employers come to you</span>
				<ul class='features'>
					<li>Employers Search our database and contact you</li>
					<li>Import easily from LinkedIn</li>
					<li>Link to Stack Overflow, GitHub, Codeplex and more</li>
				</ul>
				<button type='button' className='createprofile'>Create a Profile</button>  
			</div>
			);
	}

});












export default InfoBox;