import React from 'react';
import {Component} from 'react';

// Custom imports
import getCookieByName from "../../services/getCookieByName";

/*
const updateName = obj => {
};
*/

class SelectedNote extends Component {
	
	componentDidMount() {
		console.log("componentDidMount");
	}
	
	render() {
		let cookie = JSON.parse(getCookieByName("notes"));
		let note = cookie[this.props.match.params.id];
		
		console.log(note);
		
		return (
			<div className="note-read">
				<div className="name">
					{ note.name }
				</div>
			</div>
		);
	}
};

export default SelectedNote;