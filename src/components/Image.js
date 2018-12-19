import React from 'react'
import { Fragment } from 'react'

const Image = (props)=> {
  return (
    <Fragment>
      { props.entry.photo.length>3 ? <img id="photo" src={props.entry['photo']} alt="journal entry"></img> : null
         }
    </Fragment>
  )
}

export default Image
