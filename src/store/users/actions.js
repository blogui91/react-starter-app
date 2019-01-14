import { FETCH_CURRENT_USER } from './constants';

export function setCurrentUser(user) {
  return {
    type: FETCH_CURRENT_USER,
    payload: user
  }
}
