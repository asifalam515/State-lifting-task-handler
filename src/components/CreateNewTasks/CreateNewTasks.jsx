import React, { useState } from 'react';

const CreateNewTasks = ({createdTask}) => {
    const[text,setText]=useState('')
    return (
        <div>
            <h1>New Tasks will be created here</h1>
            <input type="text" placeholder='Enter Your Tasks' value={text} onChange={(event)=>{
                setText(event.target.value)
              
            }}/>
          
            <button onClick={()=>{
                createdTask(text)
                setText('')
    
            }}>Create Tasks</button>
        </div>
    );
};

export default CreateNewTasks;