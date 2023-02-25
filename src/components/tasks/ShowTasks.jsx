import React from 'react';

const ShowTasks = ({tasks}) => {
    return (
        <div>
            {tasks.length>0?(
            <ul>
                {tasks.map(task=>(<li>{task.text}</li>))}
            </ul>
            ):(
                <ul>
                    <p>No Task Found</p>
                </ul>
            )}
        </div>
    );
};

export default ShowTasks;