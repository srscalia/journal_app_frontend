import React from 'react'
import { connect } from 'react-redux'

const TimelineEntry = (props)=> {

  let styleMe = () => {
    return {
      'backgroundColor': props.entry.id === props.selectedEntry ? '#F5F5F5' : '#FFFFFF'
    }
  }

  let getDate = () => {
    return new Date(props.entry.date).getDate()
  }
  let getMonth = () => {
    let day;
    switch (new Date(props.entry.date).getMonth()) {
      case 0:
        day = "Jan";
        break;
      case 1:
        day = "Feb";
        break;
      case 2:
         day = "Mar";
        break;
      case 3:
        day = "Apr";
        break;
      case 4:
        day = "May";
        break;
      case 5:
        day = "Jun";
        break;
      case 6:
        day = "Jul";
        break;
      case 7:
        day = "Aug";
        break;
      case 8:
        day = "Sep";
        break;
      case 9:
        day = "Oct";
        break;
      case 10:
        day = "Nov";
        break;
      case 11:
        day = "Dec";
        break;
      default:
        day= '';
    }
    return day
  }

// on click, we want to check if allEntries is true
// if it is, then we want to use props that are passed down to set
// selectedJournal and selectedEntry per props and showEntry to true
// else (allEntries is false and a journal is selected) and we want to use selectEntry as normal

  let handleClick = () => {
    if (props.allEntries) {
      props.selectEntryAllEntries(props.entry)
    }else {
      props.selectEntry(props.entry.id)
    }
  }



  return (
  <div className="row" style={styleMe()} onClick={()=>handleClick()}>
    <div className="column">
      {props.entry.title}
      <div id="dateNumber"><span>{getDate()}</span><div id='dateMonth'>{getMonth()}</div></div>
    </div>
  </div>
  )
}


function mapStateToProps(state){
  return {
    selectedEntry: state.selectedEntry,
    allEntries: state.allEntries
  }

}

function mapDispatchToProps(dispatch){
  return {
    selectEntry: (id)=> dispatch({
      type: "SELECT_ENTRY",
      payload: id
    }),
    selectEntryAllEntries: (entry) => dispatch({
      type: "SELECT_ENTRY_ALL_ENTRIES",
      payload: entry
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineEntry)
