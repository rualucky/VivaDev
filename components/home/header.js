var React = require('react')
var Link = require('react-router').Link

var Header = React.createClass({
  render: function() {
    return (
<header>
<div className="container-fluid">
<div className="row">
    <div className="col-lg-4 col-lg-offset-4 col-md-5 col-md-offset-4 col-sm-5 col-sm-offset-4">
        <div className="wrapper-search-header">
            <button className="btn btn-close-search visible-xs" type="button"><i className="fa fa-remove"></i></button>
            <div className="search-header">
                <input type="text" placeholder="Tìm nhanh video..."/>
                <button className="btn-search" type="submit"><i className="fa fa-search"></i></button>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-3 col-sm-3">
        <a href="#" className="btn-login-icon visible-xs"><i className="fa fa-user"></i></a>
        <a href="#" className="btn-search-icon visible-xs"><i className="fa fa-search"></i></a>
        <div className="account-header hidden-xs">
            <Link to='detail-video'>Detail</Link> |
            <a href="#">Test Login</a> |
            <Link to='category'>Chuyen muc</Link> |
            <a href="#" className="btn btn-login">Đăng nhập</a>
        </div>
    </div>
</div>
</div>
</header>
    )
  }
})

module.exports = Header

// import React, { Component } from 'react'
// export default class Header extends Component {
//   render() {
//     return (
//
//     )
//   }
// }
