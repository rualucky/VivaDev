import category from '../api/category/category'
import * as types from '../constants/ActionTypes'

function receiveCategories(categories) {
  return {
    type: types.RECEIVE_CATEGORIES,
    categories: categories
  }
}

export function getAllCategories() {
  return dispatch => {
    category.getCategories(products => {
      dispatch(receiveCategories(products))
    })
  }
}
