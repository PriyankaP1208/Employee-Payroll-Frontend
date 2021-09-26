import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import LogIn from './pages/login/Login.js';
import SignUp from './pages/register/Register.js';
import Dashboard from './pages/dashboard/dashboard';
import ErrorPage from "./components/errorPage";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route exact path="/login" component={LogIn}/>
          <Route path="/register" component={SignUp}/>
          <ProtectedRoute path="/dashboard" component={Dashboard}/>
          <Route component={ErrorPage} />
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
