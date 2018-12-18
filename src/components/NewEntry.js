import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewEntry extends Component {


  render() {
    return (
        <i onClick={this.props.showNewEntryForm} className="circular small plus icon"></i>
    )
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
export default connect(null, mapDispatchToProps)(NewEntry)
