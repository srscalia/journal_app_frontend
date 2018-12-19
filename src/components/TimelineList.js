import React, { Component } from 'react';
import TimelineEntry from './TimelineEntry';
import { connect } from 'react-redux';


class TimelineList extends Component {

  sortEntries = (entries)=>{
    return entries.sort(function(a,b){
      let dateA = a.id // ignore upper and lowercase
      let dateB = b.id // ignore upper and lowercase
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
        return 0;
    })
  }

  renderEntries = ()=>{
    if (this.props.selectedJournal) {
      let journal = this.props.user.journals.find(journal=>journal.id===this.props.selectedJournal)
      let sortedEntries = this.sortEntries(journal.entries)
      return sortedEntries.map(entry=> {
        return <TimelineEntry
          key={entry.id}
          entry={entry}
          />
      })
    }
  }

  render () {
    return(<div className="ui internally celled grid">
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
