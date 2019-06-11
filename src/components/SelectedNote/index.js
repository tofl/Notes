import React from 'react';

// Custom imports
import './../../services/getCookieByName';
import getCookieByName from "../../services/getCookieByName";

const SelectedNote = props => {
	let cookie = JSON.parse(getCookieByName("notes"));
	
	return (
		<p>{ cookie[props.match.params.id].name }</p>
	)
};

export default SelectedNote;