import React, { Component } from 'react';
import TimelineEntry from './TimelineEntry';
import { connect } from 'react-redux';


class TimelineList extends Component {

  renderEntries = ()=>{
    if (this.props.selectedJournal) {
      let journal = this.props.user.journals.find(journal=>journal.id===this.props.selectedJournal)
      return journal.entries.map(entry=> {
        return <TimelineEntry
          key={entry.id}
          entry={entry}
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

function mapStateToProps(state){
  return {
    user: state.user,
    selectedJournal: state.selectedJournal
  }
}

export default connect(mapStateToProps)(TimelineList)
