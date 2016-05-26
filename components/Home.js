import React, { Component } from 'react'
import { Link } from 'react-router'

// import Header from './home/header'

var ShowCase = require('./home/show-case')
var KenhYouTube = require('./home/kenh-youtube-hot')
var HotVideos = require('./home/hot-videos')
var NewVideos = require('./home/new-videos')
var Footer = require('./home/footer')
export default class Home extends Component {
  render() {
    return (
      <div>
        <ShowCase/>     {/*section*/}
        {/*<KenhYouTube/>*/}  {/*section*/}
        <HotVideos/>    {/*section*/}
        <NewVideos/>    {/*section*/}
        <Footer/>
      </div>
    )
  }
}
