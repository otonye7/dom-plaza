import React from 'react';
import { AgendaFormContainer } from './agenda-form.styles';
import TextField from '@material-ui/core/TextField';



const AgendaForm = () => {

  return (
    <AgendaFormContainer>
       <form  noValidate autoComplete="off">
        <div className='form-container'>
         <TextField label="Task" id="standard-size-normal" className='task' />
          <br />
          <br />
          <TextField
             id="date"
             label="Date"
             type="date"
             className="date"
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
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
         />
        </div>
        <div className='button-container'>
          {/* <div className='btn'>
            <Button className='btn'>Login</Button>
          </div> */}
        </div>
      </form>
    </AgendaFormContainer>
      
  )
}

export default AgendaForm;

























