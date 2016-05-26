import React, { Component, PropTypes } from 'react'
import Category from './Category'

export default class CategoryItem extends Component {
  render() {
    const { category } = this.props
    console.log('Category ITEM');
    console.log(category);
    return (
      <div style={{marginBottom: 20}}>
        <Category
          id = {category.id}
          title = {category.title}
          videoList = {category.videoList}
        />
      </div>
    )
  }
}

CategoryItem.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    videoList: PropTypes.array.isRequired
  }).isRequired
}
