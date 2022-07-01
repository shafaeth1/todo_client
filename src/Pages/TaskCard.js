import React, { useState } from 'react';

const TaskCard = ({ task, complete }) => {

    const [date, setDate] = useState('')
    const [tnc, setTnc] = useState(false)
    const handleSubmit = async e => {
        e.preventDefault();
        await fetch(`http://localhost:5000/task/${task._id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ date, tnc }),
            }
        ).then(res => res.json())
            .then(result => setDate(result)

            )
    }


    return (
        <li className=' border p-3 list-none'>
            <div className='flex justify-between '>
                <div className=' flex items-center'>
                    <input type="checkbox"
                        name='complete'
                        id='complete'
                        checked={complete}
                        onChange={(e) => setTnc(e.target.checked)}
                    />
                    <p> Name of the tasklist:{task.task}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>

                        <input onChange={(e) => setDate(e.target.value)} type="text" name='task' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Type here" value="update" class="btn btn-secondary input input-bordered w-full max-w-xs" />
                    </div>
                </form>
            </div>
        </li>
    );
};

export default TaskCard;