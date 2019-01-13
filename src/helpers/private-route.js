import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { oauth } from '../oauth'

export const PrivateRoute = (attributes) => {
  const { ...rest } = attributes
  const Component = attributes.render || attributes.Component
  return <Route {...rest} render={(props) => oauth.isAuthenticated() ? <Component {...props} /> : <Redirect to={{pathname: '/login', state: { from: props.location }}} />
  }/>
}
