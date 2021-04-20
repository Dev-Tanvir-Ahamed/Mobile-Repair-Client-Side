
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './componets/Home/Home/Home';
import Login from './componets/Login/Login';
import PrivateRoute from './componets/Shared/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import ServiceCart from './componets/ServicesCart/ServiceCart/ServiceCart';
import OrderedList from './componets/ServicesCart/OrderedList/OrderedList';
import Review from './componets/ServicesCart/Review/Review';

// import Header from './componets/Home/Header/Header';
export let UserContext = createContext()
function App() {
  let [loggedInUser, setLoggedInUser] = useState({})
  
  return (
   
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Switch>
              {/* <Header/> */}
              <Route path="/home">
                <Home/>              
              </Route>
              <Route path="/login">
                <Login/>             
              </Route>
              <PrivateRoute path="/serviceCart/:id">
                  <ServiceCart/>
              </PrivateRoute>
              <PrivateRoute path="/orderList">
                  <OrderedList/>
              </PrivateRoute>
              <PrivateRoute path="/review">
                  <Review/>
              </PrivateRoute>
              <Route exact path="/">
                <Home/>
              </Route>
            </Switch>
          </Router>
          </UserContext.Provider>
          
    </div>
  );
}

export default App;
