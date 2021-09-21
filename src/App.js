import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LogIn from './pages/login/Login.js';
import SignUp from './pages/register/Register.js';
import Dashboard from './components/dashboard';
import { Router } from '@material-ui/icons';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/login" component={LogIn}/>
        <Route path="/register" component={SignUp}/>
        <Router path="/dashboard" component={Dashboard}/>
        
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
