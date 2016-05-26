var React = require('react')
var UtilsHome = require('../../commons/utils-home')

var ShowCase = React.createClass({
  componentDidMount: function() {
    if (UtilsHome.checkMobile() === null) {
      UtilsHome.setShowCaseCustomScrollBar();
      UtilsHome.resizeShowcase();
    }
  },
  render: function() {
    return(
      <section id="showcase" className="showcase">
        <div className="content-showcase clearfix">
            <div className="block-showcase">
                <div className="item-showcase item-x2">
                    <img src="images/showcase/showcase_1_lg.jpg"/>
                    <a href="detail-video.html" className="info-showcase">
                        <svg className="icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px"
                             y="0px" viewBox="0 0 135 135" >
                            <g>
                                <g>
                                    <g>
                                        <path d="M67.5,135c-8.1,0-16.2-1.5-24-4.4C13.3,119.1-4.6,87.7,1,55.8c0.2-1.4,1.5-2.3,2.9-2c1.4,0.2,2.3,1.5,2,2.9
                                            c-5.2,29.5,11.3,58.6,39.3,69.2c15.6,5.9,32.6,5.4,47.8-1.4c15.2-6.8,26.9-19.2,32.8-34.8c5.9-15.6,5.4-32.6-1.4-47.8
                                            c-6.8-15.2-19.2-26.9-34.8-32.8C62.7-1.2,32.4,8.3,16.1,32c-0.8,1.1-2.3,1.4-3.5,0.6c-1.1-0.8-1.4-2.3-0.6-3.5
                                            C29.6,3.5,62.3-6.6,91.5,4.4c16.8,6.4,30.2,19,37.6,35.4c7.4,16.4,7.9,34.8,1.5,51.6c-6.4,16.8-19,30.2-35.4,37.6
                                            C86.3,133,76.9,135,67.5,135z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M52,77.4v-36c0-0.9,0.5-1.7,1.3-2.2c0.8-0.4,1.7-0.4,2.5,0L101,65.4c0.8,0.4,1.3,1.3,1.3,2.2c0,0.9-0.5,1.7-1.3,2.2
                                                    L55.8,95.8c-0.4,0.2-0.8,0.3-1.3,0.3c-0.4,0-0.9-0.1-1.3-0.3c-0.8-0.4-1.3-1.3-1.3-2.2V74.7"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <circle cx="7.7" cy="42.9" r="2.5"/>
                            </g>
                        </svg>
                        <div className="title-box">
                            <span className="title-showcase">Giọng hát gây nhiều chú ý nhất</span>
                            <span className="channel-showcase">Thần tượng Bolero</span>
                        </div>
                        <span className="views-showcase"><i className="fa fa-play"></i>1,980,000</span>
                    </a>
                </div>
                <div className="item-showcase">
                    <img src="images/showcase/showcase_1.jpg"/>
                    <a href="detail-video.html" className="info-showcase">
                        <svg className="icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px"
                             y="0px" viewBox="0 0 135 135" >
                            <g>
                                <g>
                                    <g>
                                        <path d="M67.5,135c-8.1,0-16.2-1.5-24-4.4C13.3,119.1-4.6,87.7,1,55.8c0.2-1.4,1.5-2.3,2.9-2c1.4,0.2,2.3,1.5,2,2.9
                                            c-5.2,29.5,11.3,58.6,39.3,69.2c15.6,5.9,32.6,5.4,47.8-1.4c15.2-6.8,26.9-19.2,32.8-34.8c5.9-15.6,5.4-32.6-1.4-47.8
                                            c-6.8-15.2-19.2-26.9-34.8-32.8C62.7-1.2,32.4,8.3,16.1,32c-0.8,1.1-2.3,1.4-3.5,0.6c-1.1-0.8-1.4-2.3-0.6-3.5
                                            C29.6,3.5,62.3-6.6,91.5,4.4c16.8,6.4,30.2,19,37.6,35.4c7.4,16.4,7.9,34.8,1.5,51.6c-6.4,16.8-19,30.2-35.4,37.6
                                            C86.3,133,76.9,135,67.5,135z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M52,77.4v-36c0-0.9,0.5-1.7,1.3-2.2c0.8-0.4,1.7-0.4,2.5,0L101,65.4c0.8,0.4,1.3,1.3,1.3,2.2c0,0.9-0.5,1.7-1.3,2.2
                                                    L55.8,95.8c-0.4,0.2-0.8,0.3-1.3,0.3c-0.4,0-0.9-0.1-1.3-0.3c-0.8-0.4-1.3-1.3-1.3-2.2V74.7"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <circle cx="7.7" cy="42.9" r="2.5"/>
                            </g>
                        </svg>
                        <div className="title-box">
                            <span className="title-showcase">Lan Khuê ngã khi đăng quang Siêu mẫu</span>
                            <span className="channel-showcase">Thần tượng âm nhạc</span>
                        </div>
                        <span className="views-showcase"><i className="fa fa-play"></i>80,000</span>
                    </a>
                </div>
                <div className="item-showcase">
                    <img src="images/showcase/showcase_2.jpg"/>
                    <a href="detail-video.html" className="info-showcase">
                        <svg className="icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px"
                             y="0px" viewBox="0 0 135 135" >
                            <g>
                                <g>
                                    <g>
                                        <path d="M67.5,135c-8.1,0-16.2-1.5-24-4.4C13.3,119.1-4.6,87.7,1,55.8c0.2-1.4,1.5-2.3,2.9-2c1.4,0.2,2.3,1.5,2,2.9
                                            c-5.2,29.5,11.3,58.6,39.3,69.2c15.6,5.9,32.6,5.4,47.8-1.4c15.2-6.8,26.9-19.2,32.8-34.8c5.9-15.6,5.4-32.6-1.4-47.8
                                            c-6.8-15.2-19.2-26.9-34.8-32.8C62.7-1.2,32.4,8.3,16.1,32c-0.8,1.1-2.3,1.4-3.5,0.6c-1.1-0.8-1.4-2.3-0.6-3.5
                                            C29.6,3.5,62.3-6.6,91.5,4.4c16.8,6.4,30.2,19,37.6,35.4c7.4,16.4,7.9,34.8,1.5,51.6c-6.4,16.8-19,30.2-35.4,37.6
                                            C86.3,133,76.9,135,67.5,135z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M52,77.4v-36c0-0.9,0.5-1.7,1.3-2.2c0.8-0.4,1.7-0.4,2.5,0L101,65.4c0.8,0.4,1.3,1.3,1.3,2.2c0,0.9-0.5,1.7-1.3,2.2
                                                    L55.8,95.8c-0.4,0.2-0.8,0.3-1.3,0.3c-0.4,0-0.9-0.1-1.3-0.3c-0.8-0.4-1.3-1.3-1.3-2.2V74.7"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <circle cx="7.7" cy="42.9" r="2.5"/>
                            </g>
                        </svg>
                        <div className="title-box">
                            <span className="title-showcase">HLV Đan Trường lý giải biệt danh 'cá vàng' cho thí sinh Yên Nhiên</span>
                            <span className="channel-showcase">Thần tượng Bolero</span>
                        </div>
                        <span className="views-showcase"><i className="fa fa-play"></i>1,540,000</span>
                    </a>
                </div>
                <div className="item-showcase">
                    <img src="images/showcase/showcase_4.jpg"/>
                    <a href="detail-video.html" className="info-showcase">
                        <svg className="icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px"
                             y="0px" viewBox="0 0 135 135" >
                            <g>
                                <g>
                                    <g>
                                        <path d="M67.5,135c-8.1,0-16.2-1.5-24-4.4C13.3,119.1-4.6,87.7,1,55.8c0.2-1.4,1.5-2.3,2.9-2c1.4,0.2,2.3,1.5,2,2.9
                                            c-5.2,29.5,11.3,58.6,39.3,69.2c15.6,5.9,32.6,5.4,47.8-1.4c15.2-6.8,26.9-19.2,32.8-34.8c5.9-15.6,5.4-32.6-1.4-47.8
                                            c-6.8-15.2-19.2-26.9-34.8-32.8C62.7-1.2,32.4,8.3,16.1,32c-0.8,1.1-2.3,1.4-3.5,0.6c-1.1-0.8-1.4-2.3-0.6-3.5
                                            C29.6,3.5,62.3-6.6,91.5,4.4c16.8,6.4,30.2,19,37.6,35.4c7.4,16.4,7.9,34.8,1.5,51.6c-6.4,16.8-19,30.2-35.4,37.6
                                            C86.3,133,76.9,135,67.5,135z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M52,77.4v-36c0-0.9,0.5-1.7,1.3-2.2c0.8-0.4,1.7-0.4,2.5,0L101,65.4c0.8,0.4,1.3,1.3,1.3,2.2c0,0.9-0.5,1.7-1.3,2.2
                                                    L55.8,95.8c-0.4,0.2-0.8,0.3-1.3,0.3c-0.4,0-0.9-0.1-1.3-0.3c-0.8-0.4-1.3-1.3-1.3-2.2V74.7"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <circle cx="7.7" cy="42.9" r="2.5"/>
                            </g>
                        </svg>
                        <div className="title-box">
                            <span className="title-showcase">Phương mỹ chi hát tốt nhất đêm chung kết</span>
                            <span className="channel-showcase">Giọng hát việt nhí 2016</span>
                        </div>
                        <span className="views-showcase"><i className="fa fa-play"></i>90,000</span>
                    </a>
                </div>
                <div className="item-showcase item-x2">
                    <img src="images/showcase/showcase_2_lg.jpg"/>
                    <a href="detail-video.html" className="info-showcase">
                        <svg className="icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px"
                             y="0px" viewBox="0 0 135 135" >
                            <g>
                                <g>
                                    <g>
                                        <path d="M67.5,135c-8.1,0-16.2-1.5-24-4.4C13.3,119.1-4.6,87.7,1,55.8c0.2-1.4,1.5-2.3,2.9-2c1.4,0.2,2.3,1.5,2,2.9
                                            c-5.2,29.5,11.3,58.6,39.3,69.2c15.6,5.9,32.6,5.4,47.8-1.4c15.2-6.8,26.9-19.2,32.8-34.8c5.9-15.6,5.4-32.6-1.4-47.8
                                            c-6.8-15.2-19.2-26.9-34.8-32.8C62.7-1.2,32.4,8.3,16.1,32c-0.8,1.1-2.3,1.4-3.5,0.6c-1.1-0.8-1.4-2.3-0.6-3.5
                                            C29.6,3.5,62.3-6.6,91.5,4.4c16.8,6.4,30.2,19,37.6,35.4c7.4,16.4,7.9,34.8,1.5,51.6c-6.4,16.8-19,30.2-35.4,37.6
                                            C86.3,133,76.9,135,67.5,135z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M52,77.4v-36c0-0.9,0.5-1.7,1.3-2.2c0.8-0.4,1.7-0.4,2.5,0L101,65.4c0.8,0.4,1.3,1.3,1.3,2.2c0,0.9-0.5,1.7-1.3,2.2
                                                    L55.8,95.8c-0.4,0.2-0.8,0.3-1.3,0.3c-0.4,0-0.9-0.1-1.3-0.3c-0.8-0.4-1.3-1.3-1.3-2.2V74.7"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <circle cx="7.7" cy="42.9" r="2.5"/>
                            </g>
                        </svg>
                        <div className="title-box">
                            <span className="title-showcase">Giọng hát gây nhiều chú ý nhất</span>
                            <span className="channel-showcase">Thần tượng Bolero</span>
                        </div>
                        <span className="views-showcase"><i className="fa fa-play"></i>3,980,000</span>
                    </a>
                </div>
                <div className="item-showcase">
                    <img src="images/showcase/showcase_3.jpg"/>
                    <a href="detail-video.html" className="info-showcase">
                        <svg className="icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px"
                             y="0px" viewBox="0 0 135 135" >
                            <g>
                                <g>
                                    <g>
                                        <path d="M67.5,135c-8.1,0-16.2-1.5-24-4.4C13.3,119.1-4.6,87.7,1,55.8c0.2-1.4,1.5-2.3,2.9-2c1.4,0.2,2.3,1.5,2,2.9
                                            c-5.2,29.5,11.3,58.6,39.3,69.2c15.6,5.9,32.6,5.4,47.8-1.4c15.2-6.8,26.9-19.2,32.8-34.8c5.9-15.6,5.4-32.6-1.4-47.8
                                            c-6.8-15.2-19.2-26.9-34.8-32.8C62.7-1.2,32.4,8.3,16.1,32c-0.8,1.1-2.3,1.4-3.5,0.6c-1.1-0.8-1.4-2.3-0.6-3.5
                                            C29.6,3.5,62.3-6.6,91.5,4.4c16.8,6.4,30.2,19,37.6,35.4c7.4,16.4,7.9,34.8,1.5,51.6c-6.4,16.8-19,30.2-35.4,37.6
                                            C86.3,133,76.9,135,67.5,135z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M52,77.4v-36c0-0.9,0.5-1.7,1.3-2.2c0.8-0.4,1.7-0.4,2.5,0L101,65.4c0.8,0.4,1.3,1.3,1.3,2.2c0,0.9-0.5,1.7-1.3,2.2
                                                    L55.8,95.8c-0.4,0.2-0.8,0.3-1.3,0.3c-0.4,0-0.9-0.1-1.3-0.3c-0.8-0.4-1.3-1.3-1.3-2.2V74.7"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <circle cx="7.7" cy="42.9" r="2.5"/>
                            </g>
                        </svg>
                        <div className="title-box">
                            <span className="title-showcase">Chung kết bước nhảy Hoàn Vũ 2016</span>
                            <span className="channel-showcase">Bước nhảy hoàn vũ</span>
                        </div>
                        <span className="views-showcase"><i className="fa fa-play"></i>390,000</span>
                    </a>
                </div>
            </div>
            <div className="block-showcase">
                <div className="item-showcase item-x2">
                    <img src="images/showcase/showcase_3_lg.jpg"/>
                    <a href="detail-video.html" className="info-showcase">
                        <svg className="icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px"
                             y="0px" viewBox="0 0 135 135" >
                            <g>
                                <g>
                                    <g>
                                        <path d="M67.5,135c-8.1,0-16.2-1.5-24-4.4C13.3,119.1-4.6,87.7,1,55.8c0.2-1.4,1.5-2.3,2.9-2c1.4,0.2,2.3,1.5,2,2.9
                                            c-5.2,29.5,11.3,58.6,39.3,69.2c15.6,5.9,32.6,5.4,47.8-1.4c15.2-6.8,26.9-19.2,32.8-34.8c5.9-15.6,5.4-32.6-1.4-47.8
                                            c-6.8-15.2-19.2-26.9-34.8-32.8C62.7-1.2,32.4,8.3,16.1,32c-0.8,1.1-2.3,1.4-3.5,0.6c-1.1-0.8-1.4-2.3-0.6-3.5
                                            C29.6,3.5,62.3-6.6,91.5,4.4c16.8,6.4,30.2,19,37.6,35.4c7.4,16.4,7.9,34.8,1.5,51.6c-6.4,16.8-19,30.2-35.4,37.6
                                            C86.3,133,76.9,135,67.5,135z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M52,77.4v-36c0-0.9,0.5-1.7,1.3-2.2c0.8-0.4,1.7-0.4,2.5,0L101,65.4c0.8,0.4,1.3,1.3,1.3,2.2c0,0.9-0.5,1.7-1.3,2.2
                                                    L55.8,95.8c-0.4,0.2-0.8,0.3-1.3,0.3c-0.4,0-0.9-0.1-1.3-0.3c-0.8-0.4-1.3-1.3-1.3-2.2V74.7"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <circle cx="7.7" cy="42.9" r="2.5"/>
                            </g>
                        </svg>
                        <div className="title-box">
                            <span className="title-showcase">Giọng hát gây nhiều chú ý nhất</span>
                            <span className="channel-showcase">Thần tượng Bolero</span>
                        </div>
                        <span className="views-showcase"><i className="fa fa-play"></i>1,980,000</span>
                    </a>
                </div>
                <div className="item-showcase">
                    <img src="images/showcase/showcase_5.jpg"/>
                    <a href="detail-video.html" className="info-showcase">
                        <svg className="icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px"
                             y="0px" viewBox="0 0 135 135" >
                            <g>
                                <g>
                                    <g>
                                        <path d="M67.5,135c-8.1,0-16.2-1.5-24-4.4C13.3,119.1-4.6,87.7,1,55.8c0.2-1.4,1.5-2.3,2.9-2c1.4,0.2,2.3,1.5,2,2.9
                                            c-5.2,29.5,11.3,58.6,39.3,69.2c15.6,5.9,32.6,5.4,47.8-1.4c15.2-6.8,26.9-19.2,32.8-34.8c5.9-15.6,5.4-32.6-1.4-47.8
                                            c-6.8-15.2-19.2-26.9-34.8-32.8C62.7-1.2,32.4,8.3,16.1,32c-0.8,1.1-2.3,1.4-3.5,0.6c-1.1-0.8-1.4-2.3-0.6-3.5
                                            C29.6,3.5,62.3-6.6,91.5,4.4c16.8,6.4,30.2,19,37.6,35.4c7.4,16.4,7.9,34.8,1.5,51.6c-6.4,16.8-19,30.2-35.4,37.6
                                            C86.3,133,76.9,135,67.5,135z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M52,77.4v-36c0-0.9,0.5-1.7,1.3-2.2c0.8-0.4,1.7-0.4,2.5,0L101,65.4c0.8,0.4,1.3,1.3,1.3,2.2c0,0.9-0.5,1.7-1.3,2.2
                                                    L55.8,95.8c-0.4,0.2-0.8,0.3-1.3,0.3c-0.4,0-0.9-0.1-1.3-0.3c-0.8-0.4-1.3-1.3-1.3-2.2V74.7"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <circle cx="7.7" cy="42.9" r="2.5"/>
                            </g>
                        </svg>
                        <div className="title-box">
                            <span className="title-showcase">Lan Khuê ngã khi đăng quang Siêu mẫu</span>
                            <span className="channel-showcase">Thần tượng âm nhạc</span>
                        </div>
                        <span className="views-showcase"><i className="fa fa-play"></i>80,000</span>
                    </a>
                </div>
                <div className="item-showcase">
                    <img src="images/showcase/showcase_6.jpg"/>
                    <a href="detail-video.html" className="info-showcase">
                        <svg className="icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px"
                             y="0px" viewBox="0 0 135 135" >
                            <g>
                                <g>
                                    <g>
                                        <path d="M67.5,135c-8.1,0-16.2-1.5-24-4.4C13.3,119.1-4.6,87.7,1,55.8c0.2-1.4,1.5-2.3,2.9-2c1.4,0.2,2.3,1.5,2,2.9
                                            c-5.2,29.5,11.3,58.6,39.3,69.2c15.6,5.9,32.6,5.4,47.8-1.4c15.2-6.8,26.9-19.2,32.8-34.8c5.9-15.6,5.4-32.6-1.4-47.8
                                            c-6.8-15.2-19.2-26.9-34.8-32.8C62.7-1.2,32.4,8.3,16.1,32c-0.8,1.1-2.3,1.4-3.5,0.6c-1.1-0.8-1.4-2.3-0.6-3.5
                                            C29.6,3.5,62.3-6.6,91.5,4.4c16.8,6.4,30.2,19,37.6,35.4c7.4,16.4,7.9,34.8,1.5,51.6c-6.4,16.8-19,30.2-35.4,37.6
                                            C86.3,133,76.9,135,67.5,135z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M52,77.4v-36c0-0.9,0.5-1.7,1.3-2.2c0.8-0.4,1.7-0.4,2.5,0L101,65.4c0.8,0.4,1.3,1.3,1.3,2.2c0,0.9-0.5,1.7-1.3,2.2
                                                    L55.8,95.8c-0.4,0.2-0.8,0.3-1.3,0.3c-0.4,0-0.9-0.1-1.3-0.3c-0.8-0.4-1.3-1.3-1.3-2.2V74.7"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <circle cx="7.7" cy="42.9" r="2.5"/>
                            </g>
                        </svg>
                        <div className="title-box">
                            <span className="title-showcase">HLV Đan Trường lý giải biệt danh 'cá vàng' cho thí sinh Yên Nhiên</span>
                            <span className="channel-showcase">Thần tượng Bolero</span>
                        </div>
                        <span className="views-showcase"><i className="fa fa-play"></i>1,540,000</span>
                    </a>
                </div>
                <div className="item-showcase">
                    <img src="images/showcase/showcase_7.jpg"/>
                    <a href="detail-video.html" className="info-showcase">
                        <svg className="icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px"
                             y="0px" viewBox="0 0 135 135" >
                            <g>
                                <g>
                                    <g>
                                        <path d="M67.5,135c-8.1,0-16.2-1.5-24-4.4C13.3,119.1-4.6,87.7,1,55.8c0.2-1.4,1.5-2.3,2.9-2c1.4,0.2,2.3,1.5,2,2.9
                                            c-5.2,29.5,11.3,58.6,39.3,69.2c15.6,5.9,32.6,5.4,47.8-1.4c15.2-6.8,26.9-19.2,32.8-34.8c5.9-15.6,5.4-32.6-1.4-47.8
                                            c-6.8-15.2-19.2-26.9-34.8-32.8C62.7-1.2,32.4,8.3,16.1,32c-0.8,1.1-2.3,1.4-3.5,0.6c-1.1-0.8-1.4-2.3-0.6-3.5
                                            C29.6,3.5,62.3-6.6,91.5,4.4c16.8,6.4,30.2,19,37.6,35.4c7.4,16.4,7.9,34.8,1.5,51.6c-6.4,16.8-19,30.2-35.4,37.6
                                            C86.3,133,76.9,135,67.5,135z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M52,77.4v-36c0-0.9,0.5-1.7,1.3-2.2c0.8-0.4,1.7-0.4,2.5,0L101,65.4c0.8,0.4,1.3,1.3,1.3,2.2c0,0.9-0.5,1.7-1.3,2.2
                                                    L55.8,95.8c-0.4,0.2-0.8,0.3-1.3,0.3c-0.4,0-0.9-0.1-1.3-0.3c-0.8-0.4-1.3-1.3-1.3-2.2V74.7"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <circle cx="7.7" cy="42.9" r="2.5"/>
                            </g>
                        </svg>
                        <div className="title-box">
                            <span className="title-showcase">Phương mỹ chi hát tốt nhất đêm chung kết</span>
                            <span className="channel-showcase">Giọng hát việt nhí 2016</span>
                        </div>
                        <span className="views-showcase"><i className="fa fa-play"></i>90,000</span>
                    </a>
                </div>
                <div className="item-showcase item-x2">
                    <img src="images/showcase/showcase_4_lg.jpg"/>
                    <a href="detail-video.html" className="info-showcase">
                        <svg className="icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px"
                             y="0px" viewBox="0 0 135 135" >
                            <g>
                                <g>
                                    <g>
                                        <path d="M67.5,135c-8.1,0-16.2-1.5-24-4.4C13.3,119.1-4.6,87.7,1,55.8c0.2-1.4,1.5-2.3,2.9-2c1.4,0.2,2.3,1.5,2,2.9
                                            c-5.2,29.5,11.3,58.6,39.3,69.2c15.6,5.9,32.6,5.4,47.8-1.4c15.2-6.8,26.9-19.2,32.8-34.8c5.9-15.6,5.4-32.6-1.4-47.8
                                            c-6.8-15.2-19.2-26.9-34.8-32.8C62.7-1.2,32.4,8.3,16.1,32c-0.8,1.1-2.3,1.4-3.5,0.6c-1.1-0.8-1.4-2.3-0.6-3.5
                                            C29.6,3.5,62.3-6.6,91.5,4.4c16.8,6.4,30.2,19,37.6,35.4c7.4,16.4,7.9,34.8,1.5,51.6c-6.4,16.8-19,30.2-35.4,37.6
                                            C86.3,133,76.9,135,67.5,135z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M52,77.4v-36c0-0.9,0.5-1.7,1.3-2.2c0.8-0.4,1.7-0.4,2.5,0L101,65.4c0.8,0.4,1.3,1.3,1.3,2.2c0,0.9-0.5,1.7-1.3,2.2
                                                    L55.8,95.8c-0.4,0.2-0.8,0.3-1.3,0.3c-0.4,0-0.9-0.1-1.3-0.3c-0.8-0.4-1.3-1.3-1.3-2.2V74.7"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <circle cx="7.7" cy="42.9" r="2.5"/>
                            </g>
                        </svg>
                        <div className="title-box">
                            <span className="title-showcase">Giọng hát gây nhiều chú ý nhất</span>
                            <span className="channel-showcase">Thần tượng Bolero</span>
                        </div>
                        <span className="views-showcase"><i className="fa fa-play"></i>3,980,000</span>
                    </a>
                </div>
                <div className="item-showcase">
                    <img src="images/showcase/showcase_8.jpg"/>
                    <a href="detail-video.html" className="info-showcase">
                        <svg className="icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px"
                             y="0px" viewBox="0 0 135 135" >
                            <g>
                                <g>
                                    <g>
                                        <path d="M67.5,135c-8.1,0-16.2-1.5-24-4.4C13.3,119.1-4.6,87.7,1,55.8c0.2-1.4,1.5-2.3,2.9-2c1.4,0.2,2.3,1.5,2,2.9
                                            c-5.2,29.5,11.3,58.6,39.3,69.2c15.6,5.9,32.6,5.4,47.8-1.4c15.2-6.8,26.9-19.2,32.8-34.8c5.9-15.6,5.4-32.6-1.4-47.8
                                            c-6.8-15.2-19.2-26.9-34.8-32.8C62.7-1.2,32.4,8.3,16.1,32c-0.8,1.1-2.3,1.4-3.5,0.6c-1.1-0.8-1.4-2.3-0.6-3.5
                                            C29.6,3.5,62.3-6.6,91.5,4.4c16.8,6.4,30.2,19,37.6,35.4c7.4,16.4,7.9,34.8,1.5,51.6c-6.4,16.8-19,30.2-35.4,37.6
                                            C86.3,133,76.9,135,67.5,135z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M52,77.4v-36c0-0.9,0.5-1.7,1.3-2.2c0.8-0.4,1.7-0.4,2.5,0L101,65.4c0.8,0.4,1.3,1.3,1.3,2.2c0,0.9-0.5,1.7-1.3,2.2
                                                    L55.8,95.8c-0.4,0.2-0.8,0.3-1.3,0.3c-0.4,0-0.9-0.1-1.3-0.3c-0.8-0.4-1.3-1.3-1.3-2.2V74.7"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <circle cx="7.7" cy="42.9" r="2.5"/>
                            </g>
                        </svg>
                        <div className="title-box">
                            <span className="title-showcase">Chung kết bước nhảy Hoàn Vũ 2016</span>
                            <span className="channel-showcase">Bước nhảy hoàn vũ</span>
                        </div>
                        <span className="views-showcase"><i className="fa fa-play"></i>390,000</span>
                    </a>
                </div>
            </div>
        </div>
      </section>
    )
  }
})

module.exports = ShowCase
