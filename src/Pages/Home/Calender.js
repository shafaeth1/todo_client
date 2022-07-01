// import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = ({ date, setDate }) => {
    // const [date, setDate] = useState(new Date())
    return (
        <div>
            <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
            />


        </div>

    );
};

export default Calender;