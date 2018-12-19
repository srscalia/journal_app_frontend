import React, { Component, Fragment } from 'react'
import Journal from './Journal'
import { connect } from 'react-redux'

class JournalList extends Component {


  renderJournals = ()=>{
    if (this.props.user) {
      return this.props.user.journals.map(journal=>{
        return <Journal
          key={journal.id}
          journal={journal}/>
      })
    }
  }

  render() {
    return (
      <Fragment>
        <div className="ui internally celled grid">
          {this.renderJournals()}
        </div>
    </Fragment>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(JournalList)
