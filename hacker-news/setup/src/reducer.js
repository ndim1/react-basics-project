import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return {...state,loading:true}
  }
  if (action.type === SET_STORIES) {
    return {...state,loading:false,hits:action.payload.hits,nbPages:action.payload.pages}
  }
  if (action.type === REMOVE_STORY) {
    const removeItem = state.hits.filter(story => story.objectID !== action.payload)
    return {...state,hits:removeItem}
  }
  if (action.type === HANDLE_SEARCH) {
    return {...state,query:action.payload}
  }
  if (action.type === HANDLE_PAGE) {
    if (action.payload === 'inc') {
      let nextPage = state.page + 1
      if (nextPage > state.nbPages - 1) {
        nextPage = 0
      }
      return {...state,page:nextPage}
    }
    if (action.payload === 'dec') {
      let prevPage = state.page - 1
      if (prevPage < 0) {
        prevPage = state.nbPages - 1
      }
      return {...state,page:prevPage}
    }
  }
  throw new Error (`no matching ${action.type}`)
}
export default reducer
