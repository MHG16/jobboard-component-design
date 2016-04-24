import React from 'react';
import logo from './../../images/logo.png';

const Navigation = React.createClass({
	render: function() {
		return (
			<div className="nav">
			<img src ={logo}/>
			<a href = '#' className="company">Fresh Jobs</a>
			<a href = '#' className="links">JOBS</a>
			<a href = '#' className="links">COMPANIES</a>
			<a href = '#' className="links">CITIES</a>
			<a href = '#' className="links">WHY FRESH?</a>
			<a href = '#' className="links">FOR EMPLOYERS</a>
			</div>
			);
	}

});




export default Navigation;