import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MainContentContainer from './MainContentContainer';
import EntryContainer from './EntryContainer';
import withAuth from '../hoc/withAuth';
import { connect } from 'react-redux';


class UserPageContainer extends Component {

  state = {
    showForm: false,
    all: []
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

  render() {
    return (
      <div id='userPageContainer'className="ui internally celled grid">
        <div className="row">
          <div className="three wide column">
            <div className="ui small header">JOURNALS
                <div style={this.iconStyle}><i onClick={()=>this.showFormFn()} className="inverted blue add sign box icon"></i></div>
            </div>
            <div onClick={()=>this.getAllEntries()}>All entries</div>
          </div>
          <div className="three wide column">
              <div className="ui small header">ENTRIES</div>
              <div>Photos<span style={this.iconStyle}></span></div>
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
            <EntryContainer/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch){
  return {
    showAllEntries: (user)=> dispatch({
      type: "SHOW_ALL_ENTRIES"
    })
  }
}


export default withAuth(connect(mapStateToProps, mapDispatchToProps)(UserPageContainer))
