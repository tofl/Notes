import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

const Sidebar = props => {
	
	if (props.notes) {
		return (
			<div className="sidebar">
					<ul>
						{
							props.notes.map((note, index) => (
								<li key={index}><Link to={"/" + index}>{note.name}</Link></li>
							))
						}
					</ul>
			</div>
		);
		
	}
	
	return(
		<div className="sidebar-empty">
			<p>No notes were found</p>
		</div>
	);
};

export default Sidebar;