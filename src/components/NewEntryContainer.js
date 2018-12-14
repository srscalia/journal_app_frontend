import React, { Component, Fragment } from 'react';
import NewEntry from './NewEntry';
import NewEntryForm from './NewEntryForm';
import { connect } from 'react-redux'

class NewEntryContainter extends Component {


  render() {
    return (
      <Fragment>
      {this.props.showForm ? <NewEntryForm/> : <NewEntry/>}
      </Fragment>
    )
  }
}

function mapStateToProps(state){
  return {
    showForm: state.showForm
  }
}

export default connect(mapStateToProps)(NewEntryContainter)
