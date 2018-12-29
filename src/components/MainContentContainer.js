import React, { Component } from 'react';
import TimelineList from './TimelineList';
import TimelineAllEntries from './TimelineAllEntries';
import { connect } from 'react-redux';

class MainContentContainer extends Component {
  render() {
    return (
      <div>
        {this.props.allEntries ? <TimelineAllEntries allEntries={this.props.allEntriesArray}/> : <TimelineList/>}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    allEntries: state.allEntries
  }
}

export default connect(mapStateToProps)(MainContentContainer)

// if the AllEntries state is true, then render TimelineAllEntries, else
// render the TimelineList
