import React from 'react';
//import Banner from './Components/Banner/Banner';
//import Card from './Components/Card/Card';
import Navbar from './Components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Components/Home/Home';
import Information from './Components/Information/Information';
const App = () => {
  return (
    <div>

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"> <Home />  </Route>
          <Route path="/:id"> <Information /> </Route>
        </Switch>
      </Router>
      {/* <Banner />
      <Card /> */}
    </div>
  );
};

export default App;