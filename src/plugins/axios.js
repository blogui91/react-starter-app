import { oauth } from '../oauth'
import http from 'axios';
import { config as Config } from 'helpers'
http.interceptors.request.use(
  function(config) {
    if (config.url.indexOf(Config('api.api_url')) > -1 && oauth.getAuthHeader()) {
      config.headers['Authorization'] = oauth.getAuthHeader()
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

export { http }
