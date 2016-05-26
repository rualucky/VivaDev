import { combineReducers } from 'redux'
import categories, * as fromCategories from './categories'

export default combineReducers({
  //cart,
  categories
})

/*
function getCategory(state, id) {
  return fromCategories.getCategory(state.categories, id)
}
*/
