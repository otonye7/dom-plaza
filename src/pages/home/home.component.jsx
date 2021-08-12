import Agenda from '../../components/agenda/agenda.component';
import Display from '../../components/display/display.component';
import { HomeContainer } from './home.styles';


const Home = () => {
    return (
    <HomeContainer>
        <div className='home-container'>
            <Agenda />
            <Display />
        </div>
    </HomeContainer>
    )
}

export default Home