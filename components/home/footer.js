var React = require('react')

var Footer = React.createClass({
  render: () => {
    return(
      <footer>
        <div className="container">
            <div className="content-footer">
                <div className="row">
                    <div className="col-md-6">
                        <div className="info-footer">
                            <h1>Kênh giải trí số</h1>
                            <p>TỔNG HỢP CÁC NỘI DUNG HOT NHẤT HIỆN NAY</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ul className="menu-footer">
                            <li><a href="#">Giới thiệu về Viva Network</a></li>
                            <li><a href="#">Điều khoản sử dụng</a></li>
                            <li><a href="#">Trợ giúp</a></li>
                            <li><a href="#">Chính sách quyền riêng tư</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="copyright">© 2016 Vivanetwork. All rights reserved.</div>
                    </div>
                    <div className="col-sm-6">
                        <div className="wrapper-social clearfix">
                            <ul className="social">
                                <li><a href="https://www.youtube.com/channel/UCF5RuEuoGrqGtscvLGLOMew"><i className="fa fa-youtube-play"></i></a></li>
                                <li><a href="https://plus.google.com/u/0/b/111779885817750548495/+VIVAShows"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="https://www.facebook.com/vivanetworkvn"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/viva.shows/"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                             <div className="follow-viva hidden-xs">Theo dõi Viva <span></span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    )
  }
})

module.exports = Footer
