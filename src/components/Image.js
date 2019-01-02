import React from 'react'
import { Fragment } from 'react'

const Image = (props)=> {
  return (
    <Fragment>
      { props.entry.photo.length>3 ? props.entry.photo.includes('video') ? <video controls>
          <source src={props.entry['photo']} type="video/mp4"></source>
        </video> : <img id="photo" src={props.entry['photo']} alt="journal entry"></img> : null
            }
    </Fragment>
  )
}

export default Image

// { props.entry.photo.length>3 ? <img id="photo" src={props.entry['photo']} alt="journal entry"></img> : null
//    }
