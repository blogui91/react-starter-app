import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { PrivateRoute } from 'helpers'
// Layouts
import AdminLayout from "layouts/Admin/Admin";
import DefaultLayout from "layouts/Default";

// Initialize plugins
import 'plugins/axios'
import 'plugins/theme'

const hist = createBrowserHistory();

const App = () => (
  <Router history={hist}>
    <div className="App">
      <Switch>
        <PrivateRoute path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/login" render={props => <DefaultLayout {...props} />} /> 
        <Route path="/" render={props => <DefaultLayout {...props} />} /> 
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  </Router>
)

export default App;
