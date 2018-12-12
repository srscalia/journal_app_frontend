import React from 'react'
import { connect } from 'react-redux'

const TimelineEntry = (props)=> {
  return <div onClick={()=>props.selectEntry(props.entry.id)}>{props.entry.title}</div>
}

function mapDispatchToProps(dispatch){
  return {
    selectEntry: (id)=> dispatch({
      type: "SELECT_ENTRY",
      payload: id
    })
  }
}

export default connect(null, mapDispatchToProps)(TimelineEntry)
