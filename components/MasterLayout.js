import React, { Component } from 'react'
import ReactDOM from 'react-dom'
var Header = require('./home/header')
var BrandHeader = require('./home/brand-header')
var MainMenu = require('./home/main-menu')

export default class MasterLayout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <BrandHeader/>
        <div className="bg-overlay"></div>
        <MainMenu/>
        {this.props.children}
      </div>
    )
  }
}
