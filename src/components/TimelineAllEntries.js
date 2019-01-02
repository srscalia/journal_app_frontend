import React, { Component } from 'react';
import TimelineEntry from './TimelineEntry';

class TimelineAllEntries extends Component {

  renderAllEntries = ()=>{
    return this.props.allEntries.map(e=><TimelineEntry key={e.id} entry={e}/>)
  }

  render() {
    return (<div id='allEntries' className="ui internally celled grid">
      {this.renderAllEntries()}
    </div>
    )
  }

}



export default (TimelineAllEntries)
