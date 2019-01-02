import React, { Component } from 'react';

export default class TimelineList extends Component {

  render () {
    return(
      this.props.photos.map(photo=><div><img src={photo['photo']}></img></div>)
    )
  }
}
