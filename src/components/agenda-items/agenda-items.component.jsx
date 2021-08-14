import { AgendaItemsContainer } from './agenda-items.styles';
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';

const AgendaItems = ({agenda}) => {
    const {task, dateValue, time} = agenda
    return (
        <AgendaItemsContainer>
                <div className='items'>
                     <h4 className='task'>{task}</h4>  
                    <h4 className='preview'>{dateValue}</h4>
                    <h4 className='time'>{time}</h4>
                    {/* <EditIcon />
                    <DeleteIcon /> */}
                </div>
        </AgendaItemsContainer>
    )
}

export default AgendaItems