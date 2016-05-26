import React, { Component, PropTypes } from 'react'

export default class Category extends Component {
  render() {
    const { id, title, videoList } = this.props
    return (
        <div>
            {id}  --  {title}
            <div>
              <ul>
                  {videoList.map((name, index) => {
                    return <li key={index}>{name}</li>;
                  })}
              </ul>
            </div>
        </div>
    )
  }
}

Category.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  videoList: PropTypes.array
}
