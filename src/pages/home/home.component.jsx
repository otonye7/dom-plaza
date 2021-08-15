import Agenda from '../../components/agenda/agenda.component';
import Display from '../../components/display/display.component';
import { HomeContainer } from './home.styles';
import ParticlesBg from 'particles-bg';



const Home = () => {
    return (
    <HomeContainer>
        <div className='home-container'>
        <ParticlesBg type="circle" num={200} bg={true} />
            <Agenda />
            <Display />
        <ParticlesBg type="circle" num={200} bg={true} />
        </div>
    </HomeContainer>
    )
}

export default Home