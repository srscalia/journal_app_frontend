import React, { Component } from 'react';

export default class PhotoGallery extends Component {

  render () {
    return(
        <div id='gallery' className='ui grid'>
          {this.props.photos.map(photo=> photo.photo.includes('video') ? <video key={photo.id} className='gallery' controls >
              <source src={photo['photo']} type="video/mp4"></source>
            </video> : <div key={photo.id} className='five wide column'><img className='gallery' src={photo['photo']} alt='journal'></img></div>)}
        </div>
    )
  }
}
