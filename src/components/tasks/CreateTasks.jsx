import React, { useState } from 'react';

const CreateTasks = (props) => {
    const [text,setText]=useState('sample task')
    return (
        <div>
            <input type="text" placeholder='Type Your Task' value={text} onChange={(event)=>{
                setText(event.target.value)
            }} />
            <button onClick={()=>{
                props.addNewTask(text)
            }}>Create Task</button>
            
        </div>
    );
};

export default CreateTasks;