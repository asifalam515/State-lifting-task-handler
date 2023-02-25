import React, { useState } from 'react';
import CreateTasks from '../components/tasks/CreateTasks';

const Tasks = () => {
const [tasks,setTaks]=useState([])
const [visibility,setVisibility]=useState('all')
const addNewTask=(text)=>{
    console.log('text calling from main component')
    console.log(text)
  
}
    return (
        <div>
            <h1>Your Tasks</h1>
            <CreateTasks addNewTask={addNewTask}></CreateTasks>
        </div>
    );
};

export default Tasks;