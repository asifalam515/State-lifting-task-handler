import React, { useState } from 'react';
import CreateTasks from '../components/tasks/CreateTasks';
import ShowTasks from '../components/tasks/ShowTasks';

const Tasks = () => {
const [tasks,setTasks]=useState([])
const [visibility,setVisibility]=useState('all')
const addNewTask=(text)=>{
    const task={
        text,
        isCompleted:false,
        cretedAt:new Date(),
    }
setTasks([task,...tasks])
}
    return (
        <div>
            <h1>Your Tasks</h1>
            <CreateTasks addNewTask={addNewTask}></CreateTasks>
            <ShowTasks tasks={tasks}></ShowTasks>
        </div>
    );
};

export default Tasks;