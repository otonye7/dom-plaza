import React, {useState} from 'react';
import { AgendaContainer } from './agenda.styles';
import AgendaForm from '../agenda-form/agenda-form.component';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Agenda = () => {

    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    const [task, setTask] = useState('')
    const [dateValue, setDate] = useState('')
    const [time, setTime] = useState('')
  
    const handleTask = (e) => {
      setTask(e.target.value)
    }
  
    const handleDate = (e) => {
      setDate(e.target.value)
    }
  
    const handleTime = (e) => {
      setTime(e.target.value)
    }

    let cDate = dateValue.slice(8)
    let cmonth = dateValue.slice(5, 7)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (current.getDate() > parseInt(cDate)) {
            return toast.error('Wrong Date')
        }
        if (current.getMonth()+1 > parseInt(cmonth)) {
            return toast.error('Wrong Month')
        }
        try {
            const res = await axios.post(`http://localhost:8000/api/agenda`, {
                task,
                dateValue,
                time
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
    <AgendaContainer>
        <div className='container'>
            <h2 className='agenda-text'>What Are Your Agenda For Today ?</h2>
            <ToastContainer />
            <AgendaForm 
             handleTask={handleTask}
             handleDate={handleDate}
             handleTime={handleTime}
             handleSubmit={handleSubmit}
             task={task}
             getDate={dateValue}
             time={time}
            />
        </div>
     </AgendaContainer>
    )
}

export default Agenda;