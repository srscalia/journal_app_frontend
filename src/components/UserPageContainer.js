import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MainContentContainer from './MainContentContainer';
import EntryContainer from './EntryContainer';


class UserPageContainer extends Component {

  state = {
    showForm: false
  }

  iconStyle = {
    float: 'right'
  };

  showFormFn = ()=>{
    this.setState({
      showForm: !this.state.showForm
    })
    console.log('hi')
  }

  render() {
    return (
      <div className="ui internally celled grid">
        <div className="row">
          <div className="three wide column">
            <div className="ui small header">Journals
                <div style={this.iconStyle}><i onClick={()=>this.showFormFn()} className="circular small plus icon"></i></div>
            </div>

          </div>
          <div className="three wide column">
              <div className="ui small header">Entries</div>
          </div>
        </div>
        <div className="row">
          <div className="three wide column">
            <Sidebar showForm={this.state.showForm} showFormFn={this.showFormFn}/>
          </div>
          <div className="three wide column">
            <MainContentContainer/>
          </div>
          <div className="eight wide column">
            <EntryContainer/>
          </div>
        </div>
      </div>
    )
  }
}


export default UserPageContainer
