
import initialState from './state'
import { FETCH_CURRENT_USER } from './constants'
export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      console.log(FETCH_CURRENT_USER)
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}
