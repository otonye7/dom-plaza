import React from 'react';
import { AgendaContainer } from './edit.styles';
import TextField from '@material-ui/core/TextField';
import Button from '../buttons/buttons.component';
// import axios from 'axios';
// // import { ToastContainer, toast } from 'react-toastify';

const Edit = ({handleChange, handleSubmit, tasks}) => {
    const {task, dateValue, time} = tasks;

    return (
    <AgendaContainer>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div className='form-container'>
         <TextField
          label="Task"
          id="standard-size-normal"
          className='task'
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
      <pre>{JSON.stringify(tasks, null, 4)}</pre>
     </AgendaContainer>
    )
}

export default Edit;