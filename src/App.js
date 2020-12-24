import React, { useEffect , createContext,useReducer,useContext} from 'react';
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';
import Signup from './components/signup'
import Login from './components/sigin'
import './App.css'
import M from  'materialize-css/dist/js/materialize.min.js';
import Reset from './components/reset';
import NewPassword from './components/newpassword';
import Dashboard from './components/Dashboard';

const Routing = () => {
  return (
     <Switch>
     <Route exact path='/'> <Signup /> </Route>
      <Route path='/signin'> <Login /> </Route>
      <Route path='/signup'> <Signup /> </Route>
      <Route path='/reset'> <Reset /> </Route>
      <Route path='/newpassword'> <NewPassword /> </Route>
      <Route path='/dashboard'> <Dashboard /> </Route>
    </Switch>
  
    )
}
function App() {
  
  return (
    <BrowserRouter >
     <Routing />
     </BrowserRouter>
  );
}
export default App;