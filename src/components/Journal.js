import React, { Component } from 'react';
import { connect } from 'react-redux'

class Journal extends Component {
  render() {
    return (
      <div onClick={()=>this.props.selectJournal(this.props.journal.id)}>
        Journal: {this.props.journal.theme}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    selectJournal: (id)=> dispatch({
      type: "SELECT_JOURNAL",
      payload: id
    })
  }
}

export default connect(null, mapDispatchToProps)(Journal)
