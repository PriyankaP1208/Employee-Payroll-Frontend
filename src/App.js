import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LogIn from './pages/login/Login.js';
import SignUp from './pages/register/Register.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/login" component={LogIn}/>
        <Route exact path="/register" component={SignUp}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
