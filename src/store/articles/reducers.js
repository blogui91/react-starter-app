import { ADD_ARTICLE, FETCH_ARTICLES } from './constants'
import initialState from './state'

function articlesReducer(state = initialState, action) {

  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    })
  }

  if (action.type === FETCH_ARTICLES) {
    return Object.assign({}, state, {
      articles: action.payload
    })
  }

  return state
}
export default articlesReducer
