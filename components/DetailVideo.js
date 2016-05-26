var React = require('react')

var DetailVideo = React.createClass({
  render: ()=>{
    return(
      <div className="wrapper-subpage">
    <div className="container">
        <div className="row">
            <div className="col-md-8 col-lg-7">
                <div className="detail-video">
                    <div className="fake-player"></div>
                    <div className="box-player">
                        <div className="wrapper-player">
                            <div className="player">
                                <iframe src="https://www.youtube.com/embed/LcdWiUamFME" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="info-detail-video">
                        <h1 className="title-detail-video">Thần Tượng Bolero 2016 | Vòng Tinh Hoa - Tập 04 [Full HD]</h1>
                        <div className="statis-view">3,900,999</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="info-channel-video">
                                <a href="#" className="thumb-channel-video"><img src="images/channel/show-1.jpg" alt="" className="img-responsive"/></a>
                                <h4>Thần tượng Bolero</h4>
                                <div className="btn-subscribe-youtube">
                                    <div className="g-ytsubscribe" data-channel="GoogleDevelopers" data-layout="default" data-count="default"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="share-video clearfix">
                                <div className="text-share-video"></div>
                                <div className="share-facebook">
                                    <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=133&layout=button_count&action=like&show_faces=false&share=true&height=46&appId" width="133" height="20" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-tags">
                        <div className="block-title">
                            <h3 className="the-title">Tags</h3>
                        </div>
                        <div className="block-content">
                            <ul className="list-tags">
                                <li><a href="#">thần tượng</a></li>
                                <li><a href="#">bolero</a></li>
                                <li><a href="#">quán quân</a></li>
                                <li><a href="#">dự đoán</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget-comments">
                        <div className="block-title">
                            <h3 className="the-title">Bình luận</h3>
                        </div>
                        <div className="block-content comments-content">
                            <div id="fb-root"></div>
                            
                            <div className="fb-comments" data-width="100%" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="5"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-lg-5">
                <div className="widget-l">
                    <div className="banner300x250">
                        <a href="#"><img src="images/banner300x250.jpg" alt=""/></a>
                    </div>
                    <div className="related-video">
                        <div className="block-title">
                            <h3 className="the-title">Video liên quan</h3>
                        </div>
                        <div className="block-content">
                            <div className="item-relate-video clearfix">
                                <a href="detail-vieo.html" className="thumb-relate-video"><img className="img-responsive" src="images/video/video-1.jpg" alt=""/><span className="times-showcase">03:40</span></a>
                                <a href="#" className="title-relate-video">Thần Tượng Bolero 2016 | Vòng Tinh Hoa - Tập 02 [Full HD]</a>
                                <span className="channel-relate-video">Thần tượng Bolero</span>
                            </div>
                            <div className="item-relate-video clearfix">
                                <a href="detail-vieo.html" className="thumb-relate-video"><img className="img-responsive" src="images/video/video-2.jpg" alt=""/><span className="times-showcase">03:40</span></a>
                                <a href="#" className="title-relate-video">Bước Nhảy Hoàn Vũ – VIP Dance 2016 | Audition - Tập 01 [Full HD]</a>
                                <span className="channel-relate-video">VivaShows</span>
                            </div>
                            <div className="item-relate-video clearfix">
                                <a href="detail-vieo.html" className="thumb-relate-video"><img className="img-responsive" src="images/video/video-3.jpg" alt=""/><span className="times-showcase">03:40</span></a>
                                <a href="#" className="title-relate-video">Thần Tượng Bolero 2016 | Vòng Tinh Hoa - Tập 03 [Full HD]</a>
                                <span className="channel-relate-video">Thần tượng Bolero</span>
                            </div>
                            <div className="item-relate-video clearfix">
                                <a href="detail-vieo.html" className="thumb-relate-video"><img className="img-responsive" src="images/video/video-4.jpg" alt=""/><span className="times-showcase">03:40</span></a>
                                <a href="#" className="title-relate-video">Bước Nhảy Hoàn Vũ – VIP Dance 2016 | Audition - Tập 02 [Full HD]</a>
                                <span className="channel-relate-video">Thần tượng Bolero</span>
                            </div>
                            <div className="item-relate-video clearfix">
                                <a href="detail-vieo.html" className="thumb-relate-video"><img className="img-responsive" src="images/video/video-5.jpg" alt=""/><span className="times-showcase">03:40</span></a>
                                <a href="#" className="title-relate-video">Thần Tượng Bolero 2016 | Vòng Tinh Hoa - Tập 04 [Full HD]</a>
                                <span className="channel-relate-video">Thần tượng Bolero</span>
                            </div>
                            <div className="item-relate-video clearfix">
                                <a href="detail-vieo.html" className="thumb-relate-video"><img className="img-responsive" src="images/video/video-6.jpg" alt=""/><span className="times-showcase">03:40</span></a>
                                <a href="#" className="title-relate-video">Bước Nhảy Hoàn Vũ – VIP Dance 2016 | Audition - Tập 03 [Full HD]</a>
                                <span className="channel-relate-video">Thần tượng Bolero</span>
                            </div>
                            <div className="item-relate-video clearfix">
                                <a href="detail-vieo.html" className="thumb-relate-video"><img className="img-responsive" src="images/video/video-7.jpg" alt=""/><span className="times-showcase">03:40</span></a>
                                <a href="#" className="title-relate-video">Thần Tượng Bolero 2016 | Vòng Tinh Hoa - Tập 02 [Full HD]</a>
                                <span className="channel-relate-video">Thần tượng Bolero</span>
                            </div>
                            <div className="item-relate-video clearfix">
                                <a href="detail-vieo.html" className="thumb-relate-video"><img className="img-responsive" src="images/video/video-8.jpg" alt=""/><span className="times-showcase">03:40</span></a>
                                <a href="#" className="title-relate-video">Bước Nhảy Hoàn Vũ – VIP Dance 2016 | Audition - Tập 01 [Full HD]</a>
                                <span className="channel-relate-video">VivaShows</span>
                            </div>
                            <div className="item-relate-video clearfix">
                                <a href="detail-vieo.html" className="thumb-relate-video"><img className="img-responsive" src="images/video/video-9.jpg" alt=""/><span className="times-showcase">03:40</span></a>
                                <a href="#" className="title-relate-video">Thần Tượng Bolero 2016 | Vòng Tinh Hoa - Tập 03 [Full HD]</a>
                                <span className="channel-relate-video">Thần tượng Bolero</span>
                            </div>
                            <div className="item-relate-video clearfix">
                                <a href="detail-vieo.html" className="thumb-relate-video"><img className="img-responsive" src="images/video/video-10.jpg" alt=""/><span className="times-showcase">03:40</span></a>
                                <a href="#" className="title-relate-video">Bước Nhảy Hoàn Vũ – VIP Dance 2016 | Audition - Tập 02 [Full HD]</a>
                                <span className="channel-relate-video">Thần tượng Bolero</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="widget-r visible-lg">
                    <div className="theiaStickySidebar">
                        <div className="widget-hot-video">
                            <div className="block-title">
                                <h3 className="the-title">Video hot</h3>
                            </div>
                            <div className="block-content">
                                <div className="widget-item-video-hot">
                                    <a href="#" className="thumb-wivh">
                                        <img className="img-responsive" src="images/video/video-13.jpg" alt=""/>
                                        <span className="times-showcase">03:40</span>
                                    </a>
                                    <a href="#" className="title-wivh">Acoustic Ver - Sau cơn mưa - Kiều Diễm </a>
                                    <span className="channel-wivh">SaoStar</span>
                                </div>
                                <div className="widget-item-video-hot">
                                    <a href="#" className="title-wivh">Thất Tình - Quách Tấn Du</a>
                                    <span className="channel-wivh">Nhân tố bí ẩn</span>
                                </div>
                                <div className="widget-item-video-hot">
                                    <a href="#" className="title-wivh">LiveShow Bolero Mãi Mãi Bên Em - Đàm Vĩnh Hưng </a>
                                    <span className="channel-wivh">The Voice</span>
                                </div>
                                <div className="widget-item-video-hot">
                                    <a href="#" className="title-wivh">Cực choáng với clip giả giọng Bigbang đặc biệt </a>
                                    <span className="channel-wivh">The Face Viet Nam</span>
                                </div>
                                <div className="widget-item-video-hot">
                                    <a href="#" className="title-wivh">Acoustic Ver - Sau cơn mưa - Kiều Diễm </a>
                                    <span className="channel-wivh">SaoStar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
  }
})

module.exports = DetailVideo
