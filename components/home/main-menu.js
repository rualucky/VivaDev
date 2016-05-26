var React = require('react')

var MainMenu = React.createClass({
  render: () => {
    return (
      <nav className="main-menu">
        <ul className="list-main-menu">
            <li><a href="#"> TV Show<span className="fa fa-long-arrow-right"></span></a></li>
            <li><a className="active" href="#">Giải trí<span className="fa fa-long-arrow-right"></span></a></li>
            <li><a href="#">Làm đẹp<span className="fa fa-long-arrow-right"></span></a></li>
            <li><a href="#">Trẻ em<span className="fa fa-long-arrow-right"></span></a></li>
            <li><a href="#">Gaming<span className="fa fa-long-arrow-right"></span></a></li>
        </ul>
      </nav>
    )
  }
})

module.exports = MainMenu
