import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home.component';
// import ParticlesBg from 'particles-bg'

function App() {
  return (
    <div className="App">
      {/* <ParticlesBg type="circle" bg={true} /> */}
      <Switch>
        <Route exact path={'/'} component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
