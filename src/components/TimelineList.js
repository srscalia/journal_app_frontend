import React, { Component } from 'react'
import TimelineEntry from './TimelineEntry'


class TimelineList extends Component {

  renderEntries = () => {
    if (this.props.journal) {
      return this.props.journal.entries.map(entry=> {
        return <TimelineEntry
          key={entry.id}
          entry={entry}
          handleEntryClick={this.props.handleEntryClick}
          />
      })
    }
  }

  render () {
    return(<div>
      -TimelineList
      {this.renderEntries()}
    </div>)
  }
}

export default TimelineList
