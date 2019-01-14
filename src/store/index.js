import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
// reducers
import usersReducer from 'store/users/reducers'
import articlesReducer from 'store/articles/reducers'

const rootReducer = combineReducers({
  usersReducer,
  articlesReducer
})

const loggerMiddleware = createLogger()

export default function configureStore (preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )
}
