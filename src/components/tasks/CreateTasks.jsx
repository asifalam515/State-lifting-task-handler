import React, { useState } from 'react';

const CreateTasks = (props) => {
    const [text,setText]=useState('')
    return (
        <div>
            <input type="text" placeholder='Type Your Task' value={text} onChange={(event)=>{
                setText(event.target.value)
                
            }} />
            <button onClick={()=>{
                if(text){
                    props.addNewTask(text)
                setText('')
                }
                else{
                    alert('No text added')
                }
            }}>Create Task</button>
            
        </div>
    );
};

export default CreateTasks;