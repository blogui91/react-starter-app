import {
  config
} from '../helpers'
// import Store from 'src/store'
import AuthService from './service'
class OAuth {
  constructor() {
    this.session = window.localStorage
  }

  logout() {
    this.session.removeItem('access_token')
    this.session.removeItem('refresh_token')
    //  Store.dispatch('users/destroyCurrentUser')
  }

  guest() {
    return !this.session.getItem('access_token')
  }

  isAuthenticated() {
    return !this.guest()
  }

  login(username, password) {
    let data = {
      username,
      password
    }

    // We merge grant type and client secret stored in configuration
    Object.assign(data, config('auth.oauth'))
    return new Promise((resolve, reject) => {
      AuthService.attemptLogin(data)
        .then(response => {
          this.storeSession(response.data)
          resolve(response)
        })
        .catch(error => {
          console.log('OAUTH Authentication error: ', error)
          reject(error)
        })
    })
  }

  currentUser() {
    if (this.session.getItem('access_token')) {
      return new Promise((resolve, reject) => {
        AuthService.currentUser()
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            if (error.response && (error.response.status === 401 || error.response.status === 429)) {
              this.logout()
            }
            reject(error)
          })
      })
    }
    return new Promise(resolve => resolve(null))
  }

  getAuthHeader() {
    if (this.session.getItem('access_token')) {
      let access_token = this.getItem('access_token')
      return config('auth.oauth_type') + ' ' + access_token
    }
    return null
  }

  getItem(key) {
    return this.session.getItem(key)
  }

  storeSession(data) {
    this.session.setItem('access_token', data.access_token)
    this.session.setItem('refresh_token', data.access_token)
  }
}

export default OAuth
export const oauth = new OAuth()
