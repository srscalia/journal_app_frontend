import React, { Component, Fragment } from 'react'
import JournalList from './JournalList'
import NewJournal from './NewJournal'

class Sidebar extends Component {

  render() {
    return (
      <Fragment>
        {this.props.showForm ? <NewJournal showFormFn={this.props.showFormFn}/> : <JournalList/>}
      </Fragment>
    )
  }
}

export default Sidebar
