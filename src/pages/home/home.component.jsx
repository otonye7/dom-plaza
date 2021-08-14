import Agenda from '../../components/agenda/agenda.component';
import Display from '../../components/display/display.component';
import { HomeContainer } from './home.styles';
import ParticlesBg from 'particles-bg';



const Home = () => {
    return (
    <HomeContainer>
        <ParticlesBg type="circle" num={200} bg={true} />
        <div className='home-container'>
            <Agenda />
            <Display />
        </div>
    </HomeContainer>
    )
}

export default Home