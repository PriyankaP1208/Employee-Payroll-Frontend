import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import LogIn from './pages/login/Login.js';
import SignUp from './pages/register/Register.js';
//import Dashboard from './pages/dashboard/dashboard';
import ErrorPage from "./components/errorPage";
import ProtectedRoute from "./components/protectedRoute";

const LazyDashboard = React.lazy(() => import("./pages/dashboard/dashboard"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <React.Suspense fallback="Loading...">
          <Route exact path="/login" component={LogIn}/>
          <Route path="/register" component={SignUp}/>
          <ProtectedRoute path="/dashboard" component={LazyDashboard}/>
          </React.Suspense>
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
