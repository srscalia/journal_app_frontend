import React, { Component } from 'react'
import NewEntry from './NewEntry'
import ViewEntry from './ViewEntry'

class EntryContainer extends Component {
  render() {
    return (
      <div>
        EntryContainer
        <NewEntry/>
        <ViewEntry/>
      </div>
    )
  }
}

export default EntryContainer
