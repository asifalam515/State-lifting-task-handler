import React, { useState } from 'react';
import shortid from 'shortid';
import CreateNewTasks from '../components/CreateNewTasks/CreateNewTasks';
import ShowTasks from '../components/showTasks/ShowTasks';

const AllTasks = () => {
    const[tasks,setTasks]=useState([])
    const [visibility,setVisibility]=useState('all')
    const createdTask=(text)=>{
       const task ={
        text,
        isCompleted:false,
        createdAt:new Date(),
        id:shortid.generate()
       }
       setTasks([task,...tasks])
    }
    return (
        <div>
           
            <CreateNewTasks createdTask={createdTask}></CreateNewTasks>
            {
              tasks.map((singleTasks)=> <ShowTasks singleTasks={singleTasks}></ShowTasks>)
            }

        </div>
    );
};

export default AllTasks;                