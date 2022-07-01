import { format } from 'date-fns';
import React, { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import Calender from './Calender';
import { toast } from 'react-toastify';
import Footer from '../Footer';
import To_Do from './To_Do';
// import auth from '../../firebase.init';

const Home = () => {
    const [date, setDate] = useState(new Date())
    // const [user] = useAuthState(auth)

    const handleSubmit = event => {
        event.preventDefault();


        const tasks = {



            task: event.target.task.value,



        }


        fetch(`http://localhost:5000/task`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasks)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast(`Task is set for`)
                }
                else {
                    toast.error(`Already task `)
                }
            })

    }
    return (
        <div>

            <label for="my-modal-6" class="btn modal-button ">Add Task</label>

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle" date={date}>
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-center">My Task Manager</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='task' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Type here" class="btn btn-secondary input input-bordered w-full max-w-xs" />
                    </form>
                    {/* <button type="button" class="btn btn-primary">Enter task</button> */}
                    <p date={date} setDate={setDate}>Date:{format(date, 'PP')}</p>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">Close</label>
                    </div>
                </div>
            </div>
            <Calender date={date} setDate={setDate} ></Calender>
            <To_Do></To_Do>
            <Footer></Footer>
        </div>

    );
};

export default Home;