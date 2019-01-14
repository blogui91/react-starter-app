import { ADD_ARTICLE, FETCH_ARTICLES } from './constants'
import Post from 'services/post.service'

export function addArticle (payload) {
  return {
    type: ADD_ARTICLE,
    payload
  }
}

export function getArticles (payload) {
  return dispatch => {
    Post.get()
      .then(posts => {
        dispatch(fetchedArticles(posts.data))
      })
      .catch(error => {
        console.error(error)
      })
  }
}

export function fetchedArticles(payload) {
  return {
    type: FETCH_ARTICLES,
    payload
  }
}
