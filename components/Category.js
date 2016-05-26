import React, { Component } from 'react'
import CategoriesContainer from '../containers/CategoriesContainer'
import { Link } from 'react-router'

export default class Category extends Component {
  render() {
    return (
      <div>
        <h1>Category Layout</h1>
        <Link to='/'>Home</Link> | <Link to='category'>Chuyen muc</Link> | <Link to='about'>Lien he</Link>
        <h1>Category Page</h1>
        <CategoriesContainer/>
      </div>
    )
  }
}
