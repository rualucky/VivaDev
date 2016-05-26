import _categories from './category.json'

const TIMEOUT = 100

export default {
  getCategories(cb, timeout) {
    setTimeout(()=>cb(_categories), timeout || TIMEOUT)
  }
}
