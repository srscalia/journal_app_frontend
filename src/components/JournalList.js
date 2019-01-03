import React, { Component, Fragment } from 'react'
import Journal from './Journal'
import { connect } from 'react-redux'

class JournalList extends Component {

  sortJournals = (journals)=>{
    return journals.sort(function(a,b){
      let dateA = a.id // ignore upper and lowercase
      let dateB = b.id // ignore upper and lowercase
      if (dateB < dateA) {
        return -1;
      }
      if (dateB > dateA) {
        return 1;
      }
        return 0;
    })
  }

  renderJournals = ()=>{
    if (this.props.user) {
      let journals = this.sortJournals(this.props.user.journals)
      return journals.map(journal=>{
        return <Journal
          key={journal.id}
          journal={journal}/>
      })
    }
  }

  render() {
    return (
      <Fragment>
        <div id="parent" className="ui internally celled grid">
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
