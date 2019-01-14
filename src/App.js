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

// Store
import configureStore from "./store";
import { Provider } from 'react-redux'
import { setCurrentUser } from 'store/users/actions'
import { oauth } from './oauth';

const store = configureStore()

if (oauth.isAuthenticated()) {
  oauth.currentUser()
    .then(response => {
      store.dispatch(setCurrentUser(response.data))
    })
}
const hist = createBrowserHistory();
const App = () => (
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <PrivateRoute path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/login" render={props => <DefaultLayout {...props} />} /> 
        <Route path="/" render={props => <DefaultLayout {...props} />} /> 
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </Provider>
)

export default App;
