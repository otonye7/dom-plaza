import { useState, useEffect } from 'react';
import axios from 'axios';
import { DisplayContainer } from './display.styles';


const Display = () => {
    const [getAgenda, setAgenda] = useState([])
    
    useEffect(() => {
        loadAgenda()
    }, [])

    const loadAgenda = async () => {
        let res = await axios.get(`http://localhost:8000/api/get-agenda`)
        console.log(res)
    }

    return (
    <DisplayContainer>
        <div className='container'>
            <h2 className='display-text'>Agenda's</h2>
        </div>
     </DisplayContainer>
    )
}

export default Display;