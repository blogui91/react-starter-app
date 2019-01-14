import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { oauth } from '../oauth'

export const PrivateRoute = (attributes) => {
  const renderize = (props) => {
    const route = {
      pathname: '/login',
      state: {
        from: props.location
      }
    }
    return (
      oauth.isAuthenticated() ? <Component {...props} /> : <Redirect to={route} />
    )
  }
  const { ...rest } = attributes
  const Component = attributes.render || attributes.Component

  return <Route {...rest} render={renderize} />
}
