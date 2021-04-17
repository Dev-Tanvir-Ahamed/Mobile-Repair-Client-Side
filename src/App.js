
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './componets/Home/Home/Home';
// import Header from './componets/Home/Header/Header';
function App() {
  return (
    <div>
          <Router>
            <Switch>
              {/* <Header/> */}
              <Route path="/home">
                <Home/>              
              </Route>
              <Route exact path="/">
                <Home/>
              </Route>
            </Switch>
          </Router>
          
    </div>
  );
}

export default App;
