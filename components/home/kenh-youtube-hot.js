var React = require('react')

var KenhYouTube = React.createClass({
  componentDidMount: function() {
    window.generateSlideYoutube()
  },
  render: function() {
    return(
      <section className="block-section">
    <div className="container">
        <div className="block-title">
            <h3 className="the-title">Kênh youtube hot</h3>
        </div>
        <div className="block-content">
            <div className="slide-youtube">
                <div className="item-youtube">
                    <a href="https://www.youtube.com/channel/UCZq4u4hadohQDXO6ra8aubQ" className="img-youtube img-responsive"><img src="images/channel/show-1.jpg"/></a>
                    <div className="info-item-youtube">
                        <a href="https://www.youtube.com/channel/UCZq4u4hadohQDXO6ra8aubQ" className="title-item-youtube">Thần tượng Bolero</a>
                        <div className="btn-subscribe-youtube">
                            <div className="g-ytsubscribe" data-channel="GoogleDevelopers" data-layout="default" data-count="default"></div>
                        </div>
                    </div>
                </div>
                <div className="item-youtube">
                    <a href="https://www.youtube.com/c/nhantobianvietnam" className="img-youtube img-responsive"><img src="images/channel/show-2.jpg"/></a>
                    <div className="info-item-youtube">
                        <a href="https://www.youtube.com/c/nhantobianvietnam" className="title-item-youtube">The X Factory</a>
                        <div className="btn-subscribe-youtube">
                            <div className="g-ytsubscribe" data-channel="nhantobianvietnam" data-layout="default" data-count="default"></div>
                        </div>
                    </div>
                </div>
                <div className="item-youtube">
                    <a href="#" className="img-youtube img-responsive"><img src="images/channel/show-3.jpg"/></a>
                    <div className="info-item-youtube">
                        <a href="#" className="title-item-youtube">The Voice Kids</a>
                        <div className="btn-subscribe-youtube">
                            <div className="g-ytsubscribe" data-channel="nhantobianvietnam" data-layout="default" data-count="default"></div>
                        </div>
                    </div>
                </div>
                <div className="item-youtube">
                    <a href="#" className="img-youtube img-responsive"><img src="images/channel/show-4.jpg"/></a>
                    <div className="info-item-youtube">
                        <a href="#" className="title-item-youtube">Cặp đôi hoàn hảo</a>
                        <div className="btn-subscribe-youtube">
                            <div className="g-ytsubscribe" data-channel="GoogleDevelopers" data-layout="default" data-count="default"></div>
                        </div>
                    </div>
                </div>
                <div className="item-youtube">
                    <a href="#" className="img-youtube img-responsive"><img src="images/channel/show-5.jpg"/></a>
                    <div className="info-item-youtube">
                        <a href="#" className="title-item-youtube">The Voice</a>
                        <div className="btn-subscribe-youtube">
                            <div className="g-ytsubscribe" data-channel="GoogleDevelopers" data-layout="default" data-count="default"></div>
                        </div>
                    </div>
                </div>
                <div className="item-youtube">
                    <a href="#" className="img-youtube img-responsive"><img src="images/channel/show-6.jpg"/></a>
                    <div className="info-item-youtube">
                        <a href="#" className="title-item-youtube">Bước nhảy hoàn vũ</a>
                        <div className="btn-subscribe-youtube">
                            <div className="g-ytsubscribe" data-channel="GoogleDevelopers" data-layout="default" data-count="default"></div>
                        </div>
                    </div>
                </div>
                <div className="item-youtube">
                    <a href="#" className="img-youtube img-responsive"><img src="images/channel/show-7.jpg"/></a>
                    <div className="info-item-youtube">
                        <a href="#" className="title-item-youtube">Siêu mẫu Việt Nam</a>
                        <div className="btn-subscribe-youtube">
                            <div className="g-ytsubscribe" data-channel="GoogleDevelopers" data-layout="default" data-count="default"></div>
                        </div>
                    </div>
                </div>
                <div className="item-youtube">
                    <a href="#" className="img-youtube img-responsive"><img src="images/channel/show-8.jpg"/></a>
                    <div className="info-item-youtube">
                        <a href="#" className="title-item-youtube">Sao Star</a>
                        <div className="btn-subscribe-youtube">
                            <div className="g-ytsubscribe" data-channel="GoogleDevelopers" data-layout="default" data-count="default"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    )
  }
})

module.exports = KenhYouTube
