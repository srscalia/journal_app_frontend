import React from 'react'

const TimelineEntry = (props)=> {
  return <div onClick={()=>props.handleEntryClick(props.entry.id)}>{props.entry.title}</div>
}

export default TimelineEntry
