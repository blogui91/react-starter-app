
import { env } from 'helpers'

const api_url = env('BASE_URL', 'http://localhost:8000/') + 'api/'
export default {
  api_url,
  token_url: env('BASE_URL', 'http://localhost:8000/') + 'oauth/token',
  current_user_url: api_url + 'currentuser',
  endpoints: {
    users_url: api_url + 'users'
    // resource_url : api_url + 'resource'
  }
}
