import { useState, useEffect } from 'react';
import axios from 'axios';
import { AgendaItemsContainer } from './agenda-items.styles';
 import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const AgendaItems = ({agenda}) => {
    const {_id, task, dateValue, time} = agenda;
    
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
        </AgendaItemsContainer>
    )
}

export default AgendaItems