import React from 'react';
import {Component} from 'react';

// Custom imports
import getCookieByName from "../../services/getCookieByName";

class SelectedNote extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			cookie: JSON.parse(getCookieByName("notes")),
			note: JSON.parse(getCookieByName("notes"))[this.props.match.params.id]
		};
		
		this.updateName = this.updateName.bind(this);
	}
	
	componentWillReceiveProps(props) {
		this.setState({
			cookie: JSON.parse(getCookieByName("notes")),
			note: JSON.parse(getCookieByName("notes"))[props.match.params.id]
		});
	}
	
	updateName(e) {
		// Update name in cookie
		let updatedNote = this.state.note;
		updatedNote.name = e.target.value;
		
		let updatedCookie = this.state.cookie;
		updatedCookie[this.props.match.params.id] = updatedNote;
		
		document.cookie = 'notes=' + JSON.stringify(updatedCookie);
		console.log(JSON.stringify(updatedCookie));
		
		
		// Update the state
		this.setState({
			cookie: JSON.parse(getCookieByName("notes")),
			note: JSON.parse(getCookieByName("notes"))[this.props.match.params.id]
		});
		
		
		// Inform the parent component about the change
		// Make the parent inform the sidebar
		
		
		//this.props.updateName("aaa");
	}
	
	
	render() {
		return (
			<div className="note-read">
				<div className="name">
					<input type="text" value={ this.state.note.name } onChange={ this.updateName } />
				</div>
			</div>
		);
	}
};

export default SelectedNote;