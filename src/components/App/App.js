import './App.css';
import SelectShip from '../SelectShip/SelectShip';
import Navigation from '../Navigation/Navigation';
import Map from '../Map/Map';
import About from '../About/About';
import Footer from '../Footer/Footer';

import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
    <Navigation />
    <div className="App">
      <br />
      <br />
      <br />
      This is the App view.
    <Switch>
        <Route path="/" component={SelectShip} exact />
        <Route path="/about" component={About} />
        <Route path="/map" component={Map} />
    </Switch>
    </div>
    <Footer />
    </>
  );
}

export default App;
