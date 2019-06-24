import React, { Component } from 'react';
import './style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
	
	updateCookie(e) {
		console.log(e)
	}
	
	render() {
		return (
			<div className="main">
				<BrowserRouter>
					<Sidebar notes={ this.state.notes } />
					<Switch>
						<Route exact path="/" component={ NoNoteSelected } />
						<Route path="/:id" render={ (props) => <SelectedNote {...props} updateName={ this.updateCookie } /> } />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
};

export default Notes;