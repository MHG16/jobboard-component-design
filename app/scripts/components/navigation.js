import React from 'react';
import logo from './../../images/logo.png';

const Navigation = React.createClass({
	render: function() {
		return (
			<div>
			<img src ={logo}/>
			<a href = "#">Fresh Jobs</a>
			</div>
			);
	}

});












export default Navigation;