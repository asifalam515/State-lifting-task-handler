import React from 'react';

const ShowTasks = (props) => {
	return (
		<div>
			<h1>{props.singleTasks.text}</h1>
		</div>
	);
};

export default ShowTasks;