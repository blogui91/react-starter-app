import Http from 'axios'
import {
  config
} from '../helpers'
export default {
  async attemptLogin(credentials) {
    try {
      let response = await Http.post(config('api.token_url'), credentials)
      return new Promise(resolve => resolve(response))
    } catch (error) {
      return new Promise((resolve, reject) => reject(error))
    }
  },
  currentUser() {
    return Http.get(config('api.current_user_url'))
  }
}
