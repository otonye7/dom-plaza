import { useState, useEffect } from 'react';
import axios from 'axios';
import { DisplayContainer } from './display.styles';
import AgendaItems from '../agenda-items/agenda-items.component';


const Display = () => {
    const [getAgenda, setAgenda] = useState([])
    
    useEffect(() => {
        loadAgenda()
    }, [])

    const loadAgenda = async () => {
        let res = await axios.get(`http://localhost:8000/api/get-agenda`)
        setAgenda(res.data)
    }

    return (
    <DisplayContainer>
        <div className='container'>
            <h2 className='display-text'>Agenda</h2>
        </div>
        <div>
            {
                getAgenda.map((agenda) => <AgendaItems key={agenda._id} agenda={agenda}/> )
            }
        </div>
     </DisplayContainer>
    )
}

export default Display;