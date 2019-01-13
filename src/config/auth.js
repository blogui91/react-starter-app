import { env } from '../helpers'
export default {
  oauth: {
    grant_type: 'password',
    client_id: env('CLIENT_ID'),
    client_secret: env('CLIENT_SECRET'),
    scope: '*'
  },
  oauth_type: 'Bearer'
}
