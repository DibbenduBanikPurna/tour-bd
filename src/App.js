import React from 'react';
//import Banner from './Components/Banner/Banner';
//import Card from './Components/Card/Card';
import Admin from './Components/Admin/Admin'
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Components/Home/Home';
import Information from './Components/Information/Information';
import Login from './Components/LogIn/Login';
import List from './Components/List/List';
import Contact from './Components/Contact/Contact';
import MyOrder from './Components/MyOrder/MyOrder';
import MangeOrder from './Components/ManageOrder/MangeOrder';
const App = () => {
  return (
    <div>

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"> <Home />  </Route>
          <Route path="/admin"> <Admin /> </Route>
          <Route path="/login"> <Login /> </Route>
          <Route path="/bookperson"> <List /> </Route>
          <Route path="/about"> <About /> </Route>
          <Route path="/myorder"> <MyOrder /> </Route>
          <Route path="/manageorder"> <MangeOrder /> </Route>
          <Route path="/contact"> <Contact /> </Route>
          <PrivateRoute path="/:id"> <Information /> </PrivateRoute>
        </Switch>
      </Router>
      {/* <Banner />
      <Card /> */}
    </div>
  );
};

export default App;