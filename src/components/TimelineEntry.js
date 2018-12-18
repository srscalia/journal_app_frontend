import React from 'react'
import { connect } from 'react-redux'

const TimelineEntry = (props)=> {

  let styleMe = ()=>{
    return {
      'backgroundColor': props.entry.id === props.selectedEntry ? '#A2D8C0' : '#FFFFFF'
    }
  }


  return <div className="row" style={styleMe()} onClick={()=>props.selectEntry(props.entry.id)}>
    <div className="column">
      <div>{props.entry.title}</div>
    </div>
  </div>
}

function mapStateToProps(state){
  return {
    selectedEntry: state.selectedEntry
  }

}

function mapDispatchToProps(dispatch){
  return {
    selectEntry: (id)=> dispatch({
      type: "SELECT_ENTRY",
      payload: id
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineEntry)
