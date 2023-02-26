import React, { useState } from 'react';
import CreateNewTasks from '../components/CreateNewTasks/CreateNewTasks';

const AllTasks = () => {
    const[task,setTask]=useState('')
    const [visibility,setVisibility]=useState('all')
    const createdTask=(text)=>{
        setTask(text)
    }
    return (
        <div>
           
            <CreateNewTasks createdTask={createdTask}></CreateNewTasks>
            {
               <div>
                 <ul>
                    <h1>{task}</h1>
                </ul>
               </div>
            }

        </div>
    );
};

export default AllTasks;                