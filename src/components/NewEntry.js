import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewEntry extends Component {


  render() {
    return (
      <button onClick={this.props.showNewEntryForm} className="ui icon button">
        <i className="plus icon"></i>
      </button>

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
