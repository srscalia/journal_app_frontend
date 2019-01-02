import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class NewEntry extends Component {


  render() {
    return (
      <Fragment>
        {this.props.allEntries===false && this.props.selectedJournal===null ? null : <button class="circular inverted ui icon button"><i onClick={this.props.showNewEntryForm} className="inverted blue home add sign box icon"></i></button>}
      </Fragment>
    )
  }
}

function mapStateToProps(state){
  return {
    allEntries: state.allEntries,
    selectedJournal: state.selectedJournal
  }
}

function mapDispatchToProps(dispatch){
  return {
    showNewEntryForm: ()=> dispatch({
      type: "SHOW_FORM",
      payload: true
    })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewEntry)
