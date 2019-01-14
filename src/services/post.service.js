import { Service } from 'easy-requests'

export default class Post extends Service {
  constructor () {
    super()
    this.config.origin = 'https://jsonplaceholder.typicode.com/'
    this.config.endpoint = 'posts'
  }
}
