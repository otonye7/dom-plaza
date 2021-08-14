import {useState} from 'react';
import axios from 'axios';
import Edit from '../edit/edit.component';
import { AgendaItemsContainer } from './agenda-items.styles';
 import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { withRouter } from "react-router";
import { Card } from '@material-ui/core';

const AgendaItems = ({agenda, match}) => {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

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
            <div className='ag-container'>
            <Card  variant="outlined">
               <div className='items'>
                     <h4 className='task'>{task}</h4>  
                    <h4 className='preview'>{dateValue}</h4>
                    <h4 className='time'>{time}</h4> 
                </div>
                <div className='icons'>
                    <EditIcon onClick={handleShow} className='edit'/>
                    <DeleteIcon onClick={() => handleDelete(_id)} className='delete'/>
                </div>

                {
                        show ? <Edit _id={_id}/>   : null
                }
             </Card>
             <br />
             </div>
                  
        </AgendaItemsContainer>
    )
}

export default withRouter(AgendaItems)
















