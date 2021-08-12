import { AgendaContainer } from './agenda.styles';
import AgendaForm from '../agenda-form/agenda-form.component';

const Agenda = () => {
    return (
    <AgendaContainer>
        <div className='container'>
            <h2 className='agenda-text'>What Are Your Agenda For Today ?</h2>
            <AgendaForm />
        </div>
     </AgendaContainer>
    )
}

export default Agenda;