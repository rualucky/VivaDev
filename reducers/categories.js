import { combineReducers } from 'redux'
import { RECEIVE_CATEGORIES, ADD_CATEGORY} from '../constants/ActionTypes'

function byId(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return Object.assign({}, state,
      action.categories.reduce((obj, category) => {
        obj[category.id] = category
        console.log('BY ID');
        console.log(obj)
        return obj
      }, {})
    )
    default:
      const {categoryId} = action
      if (categoryId) {
        return Object.assign({}, state, {
          [categoryId]: categories(state[categoryId], action)
        })
      }
      return state
  }
}

function visibleIds1(state = [], action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories.map(category => category.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds1
})

export function getCategory(state, id) {
  return state.byId[id]
}

export function getVisibleCategories(state) {
  console.log(state)
  return state.visibleIds1.map(id=>getCategory(state, id));
}
