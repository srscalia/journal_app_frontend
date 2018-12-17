import React, { Component } from 'react'
import JournalList from './JournalList'
import NewJournal from './NewJournal'

class Sidebar extends Component {

  state = {
    showForm: false
  }

showForm = ()=>{
  this.setState({
    showForm: !this.state.showForm
  })
}



  render() {
    return (
      <div>
        {this.state.showForm ? <NewJournal showForm={this.showForm}/> : <button onClick={this.showForm} className="mini ui icon button">
          <i className="plus icon"></i>
        </button>}

        <JournalList/>
      </div>
    )
  }
}

export default Sidebar
