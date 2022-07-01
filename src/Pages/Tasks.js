import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';

const Tasks = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div>
            <div className="text-center my-12 ">
                <h3 className='text-primary text-xl font-bold uppercase'>Our Task</h3>
                <h2 className="text-5xl"> Task we provide</h2>
            </div>
            <div className=''>


                {
                    tasks.map(task => <TaskCard
                        key={task._id}
                        task={task}

                    ></TaskCard>)
                }
            </div>


        </div>
    );
};

export default Tasks;