import React, { Component } from 'react';
import TimelineEntry from './TimelineEntry';

class TimelineAllEntries extends Component {

  renderAllEntries = ()=>{
    return this.props.allEntriesArray.map(e=><TimelineEntry key={e.id} entry={e}/>)
  }

  render() {
    return (
      this.renderAllEntries()
    )
  }

}



export default (TimelineAllEntries)
