import React, { Component } from 'react'

class ViewEntry extends Component {
  render() {
    return (
      <div>
        {this.props.entry ? this.props.entry.title : null}

      </div>
    )
  }
}

export default ViewEntry
