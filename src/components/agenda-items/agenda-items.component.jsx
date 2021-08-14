import { useState, useEffect } from 'react';
import axios from 'axios';
import Edit from '../edit/edit.component';
import { AgendaItemsContainer } from './agenda-items.styles';
 import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { withRouter } from "react-router";

const AgendaItems = ({agenda, match}) => {

    const {_id, task, dateValue, time} = agenda;

    const [tasks, setTasks] = useState('')

 useEffect(() => {
     loadAgenda()
 }, [])

 const handleChange = (e) => {
    setTasks(e.target.value)
}

 const loadAgenda = async () => {
     let res = await axios.get(`http://localhost:8000/api/get-agenda`)
     setTasks(...tasks, ...res.data)
 }


 const handleSubmit = async (e) => {
    e.preventDefault()
    try {
       let res = await axios.put(`http://localhost:8000/api/edit-agenda/${_id}`)
       console.log("updated", res)
    }
    catch (err) {
        console.log(err)
    }
    
 }

    
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure ?")) return;
        await axios.delete(`http://localhost:8000/api/delete-agenda/${id}`)
        .then((res) => {
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        })
    }
    return (
        <AgendaItemsContainer>
                <div className='items'>
                     <h4 className='task'>{task}</h4>  
                    <h4 className='preview'>{dateValue}</h4>
                    <h4 className='time'>{time}</h4> 
                </div>
                <div className='icons'>
                    <EditIcon className='edit'/>
                    <DeleteIcon onClick={() => handleDelete(_id)} className='delete'/>
                </div>
                <br />
                <Edit handleChange={handleChange} handleSubmit={handleSubmit} tasks={tasks}/>
                
        </AgendaItemsContainer>
    )
}

export default withRouter(AgendaItems)