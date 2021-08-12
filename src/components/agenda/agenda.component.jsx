import React, {useState} from 'react';
import { AgendaContainer } from './agenda.styles';
import AgendaForm from '../agenda-form/agenda-form.component';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Agenda = () => {

    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    const [task, setTask] = useState('')
    const [getDate, setDate] = useState('')
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

    

    return (
    <AgendaContainer>
        <div className='container'>
            <h2 className='agenda-text'>What Are Your Agenda For Today ?</h2>
            <AgendaForm 
             handleTask={handleTask}
             handleDate={handleDate}
             handleTime={handleTime}
             task={task}
             getDate={getDate}
             time={time}
            />
        </div>
     </AgendaContainer>
    )
}

export default Agenda;