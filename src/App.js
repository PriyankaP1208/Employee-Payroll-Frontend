import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LogIn from './pages/Login';
import SignUp from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/login'>
        <LogIn/>
      </Route>
      <Route exact path='/register'>
        <SignUp/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
