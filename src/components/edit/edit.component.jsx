import { useState, useEffect } from 'react';
import { AgendaContainer } from './edit.styles';
import TextField from '@material-ui/core/TextField';
import Button from '../buttons/buttons.component';
import { withRouter } from "react-router";
import axios from 'axios';
// // import { ToastContainer, toast } from 'react-toastify';

const Edit = ({_id, match}) => {
  // const [task, setTasks] = useState('')
  // const [dateValue, setDateValues] = useState('')
  // const [time, setTimes] = useState('')
  const [values, setValues] = useState({
    task: '',
    dateValue: '',
    time: ''
  })

  const {task, dateValue, time} = values

  useEffect(() => {
    loadAgenda()
}, [])
  
const loadAgenda = async () => {
  let res = await axios.get(`http://localhost:8000/api/get-agenda/${_id}`)
  setValues({...values, ...res.data})
}


  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }




const handleSubmit = async (e) => {
  e.preventDefault()
  try {
     let res = await axios.put(`http://localhost:8000/api/edit-agenda/${_id}`, {
       task,
       dateValue,
       time
     })
     setTimeout(() => {
      window.location.reload()
  }, 1000)
  }
  catch (err) {
      console.log(err)
  }
  
}
    

    return (
    <AgendaContainer>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div className='form-container'>
         <TextField
          label="Task"
          id="standard-size-normal"
          className='task'
          name='task'
          value={task} 
          onChange={handleChange}
         />
          <br />
          <br />
          <TextField
             id="date"
             label="Date"
             type="date"
             className="date"
             name='dateValue'
             value={dateValue} 
             onChange={handleChange}
             InputLabelProps={{
             shrink: true,
          }}
         />
        <br />
        <br />
        
        <TextField
          id="time"
          label="Time"
          type="time"
          className="time"
          name='time'
          value={time}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
         />
        </div>
         <br />
         <br />
          <div className='btn'>
            <Button className='btn'>Edit AGENDA</Button>
          </div> 
      </form>  
     </AgendaContainer>
    )
}

export default withRouter(Edit);