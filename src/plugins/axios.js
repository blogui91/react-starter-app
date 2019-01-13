import { oauth } from '../oauth'
import http from 'axios';

http.interceptors.request.use(
  function(config) {
    config.headers['Authorization'] = oauth.getAuthHeader()
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

export { http }
