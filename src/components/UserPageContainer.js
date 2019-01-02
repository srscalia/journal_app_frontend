import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MainContentContainer from './MainContentContainer';
import EntryContainer from './EntryContainer';
import withAuth from '../hoc/withAuth';
import { connect } from 'react-redux';


class UserPageContainer extends Component {

  state = {
    showForm: false,
    all: [],
    photos: []
  }

  iconStyle = {
    float: 'right'
  };

  showFormFn = ()=>{
    this.setState({
      showForm: !this.state.showForm
    })
  }

  getAllEntries=()=>{
    let entries = []
    this.props.user.journals.map(j=>entries.push(j.entries))
    this.setState({
      all: entries.flat()
    }, () => this.props.showAllEntries())
  }

  styleMe = ()=>{
    return {
      'color': this.props.allEntries ? '#54c8ff' : '#808080'
    }
  }

  grabPhotos = () => {
    if (this.props.allEntries) {
      let imageEntries = this.state.all.filter(entry=>entry.photo !== '')
      let images=[]
      imageEntries.map(entry=>images.push(entry.photo))
      this.setState({
        photos: imageEntries
      }, ()=> this.props.showPhotos())
    } else if (this.props.selectedJournal) {
      let journal = this.props.user.journals.find(journal=>journal.id===this.props.selectedJournal)
      let imageEntries = journal.entries.filter(entry=>entry.photo !== '')
      this.setState({
        photos: imageEntries
      }, ()=> this.props.showPhotos())
    }else {
      return null
    }

    // update global store with showPhotos
  }


  render() {
    return (
      <div id='userPageContainer'className="ui internally celled grid">
        <div className="row">
          <div className="three wide column">
            <div className="ui small header">JOURNALS
                <div style={this.iconStyle}><button className="circular inverted ui icon button"><i onClick={()=>this.showFormFn()} className="inverted blue add sign box icon"></i></button></div>
            </div>
            <div style={this.styleMe()} onClick={()=>this.getAllEntries()}>All entries</div>
          </div>
          <div className="three wide column">
              <div className="ui small header">ENTRIES</div>
              <div onClick={()=>this.grabPhotos()}>Photos<span style={this.iconStyle}></span></div>
          </div>
        </div>
        <div className="row">
          <div className="three wide column">
            <Sidebar showForm={this.state.showForm} showFormFn={this.showFormFn}/>
          </div>
          <div className="three wide column">
            <MainContentContainer allEntriesArray={this.state.all}/>
          </div>
          <div className="eight wide column">
            <EntryContainer photos={this.state.photos}/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    allEntries: state.allEntries,
    selectedJournal: state.selectedJournal
  }
}

function mapDispatchToProps(dispatch){
  return {
    showAllEntries: (user)=> dispatch({
      type: "SHOW_ALL_ENTRIES"
    }),
    showPhotos: ()=> dispatch({
      type: "SHOW_PHOTOS"
    })
  }
}


export default withAuth(connect(mapStateToProps, mapDispatchToProps)(UserPageContainer))
