import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { getVisibleCategories } from '../reducers/categories'
import CategoryItem from '../components/category/CategoryItem'
import CategoriesList from '../components/category/CategoriesList'

class CategoriesContainer extends Component {
  render() {
    const {categories192} = this.props
    console.log('Category LIST')
    console.log(categories192)
    return (
      <CategoriesList title = 'Categories 192'>
        {categories192.map(category =>
          <CategoryItem
            key={category.id}
            category={category} />
        )}
      </CategoriesList>
    )
  }
}

CategoriesContainer.propTypes = {
  categories192: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
}

function mapStateToProps(state) {
  return {
    categories192: getVisibleCategories(state.categories)
  }
}

export default connect(
  mapStateToProps
)(CategoriesContainer)
