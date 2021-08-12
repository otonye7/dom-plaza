import { AgendaFormContainer } from './agenda-form.styles';
import TextField from '@material-ui/core/TextField';
import Button from '../buttons/buttons.component';

const AgendaForm = ({handleTask, handleDate, handleTime, handleSubmit}) => {

  return (
    <AgendaFormContainer>
       <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div className='form-container'>
         <TextField
          label="Task"
          id="standard-size-normal"
          className='task' 
          onChange={handleTask}
         />
          <br />
          <br />
          <TextField
             id="date"
             label="Date"
             type="date"
             className="date"
             onChange={handleDate}
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
          onChange={handleTime}
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
            <Button className='btn'>ADD AGENDA</Button>
          </div> 
      </form>
    </AgendaFormContainer>
      
  )
}

export default AgendaForm;

























