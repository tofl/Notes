import React, { Component } from 'react';
import './style.css';
import { BrowserRouter, Route } from 'react-router-dom';

// Custom imports
import Sidebar from './../../components/Sidebar';
import getCookieByName from './../../services/getCookieByName';
import NoNoteSelected from './../../components/NoNoteSelected';
import SelectedNote from './../../components/SelectedNote';

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
				<BrowserRouter>
					<Sidebar notes={ this.state.notes } />
					<Route exact path="/" component={ NoNoteSelected } />
					<Route path="/:id" component={ SelectedNote } />
				</BrowserRouter>
			</div>
		);
	}
};

export default Notes;