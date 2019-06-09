import React, { Component } from 'react';
import './style.css';

// Custom imports
import Sidebar from './../../components/Sidebar';
import getCookieByName from './../../services/getCookieByName';

class Notes extends Component {
	
	state = {
		notes: null
	};
	
	componentDidMount() {
		
		if (getCookieByName("notes") !== '') {
			this.setState({ notes: JSON.parse(getCookieByName("notes"))});
		}
	}
	
	render() {
		return (
			<div className="main">
				<Sidebar />
			</div>
		);
	}
};

export default Notes;