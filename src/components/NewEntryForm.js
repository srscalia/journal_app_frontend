import React, { Component } from 'react'
import { connect } from 'react-redux';

class NewEntryForm extends Component {

  state={
    title: '',
    body: '',
    photo: '',
    location: '',
    date: new Date().toString()
  }

  widget = window.cloudinary.createUploadWidget({
    cloudName: process.env.REACT_APP_CLOUD_NAME, uploadPreset: process.env.REACT_APP_UPLOAD_PRESET }, (error, result) => {
      if (result && result.event==="success") {
        this.setState({
          photo: result.info.url
        }
      )
    }

  });

  componentDidMount(){
    this.showLocation()
  }

  handleClick = (event)=>{
    event.preventDefault()
    this.widget.open();
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    this.addEntry()
  }

  addEntry = ()=>{
    fetch('http://localhost:3000/api/v1/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage['Authorization']}`
      },
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body,
        photo: this.state.photo,
        journal_id: this.props.selectedJournal
      })
    }).then(r=>r.json())
      .then((json)=>{
        fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage['Authorization']}`
          }
        })
        .then(r=>r.json())
        .then(json => this.props.updateUserEntries(json))

    }).then(()=>{
      this.props.updateShowForm()
    })
  }

  handleDiscard = (event)=>{
    event.preventDefault()
    this.props.updateShowForm()
  }

  showLocation = ()=>{
    fetch('http://ip-api.com/json')
    .then(r=>r.json())
    .then(json=>{
      let location = json.city +', '+json.countryCode
      this.setState({
        location: location
      })
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
          <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleChangeFor('title')}></input>
          <textarea placeholder="A safe place your thoughts" value={this.state.body} onChange={this.handleChangeFor('body')}></textarea>
        </div>
        <div>Location: {this.state.location}</div>
        <div>Date: {this.state.date}</div>
        <button onClick={this.handleClick} id="upload_widget" className="cloudinary-button ui button">Upload files</button>
        <button type='submit' className="ui primary button">
          Save
        </button>
        <button className="ui button" onClick={this.handleDiscard}>
          Discard
        </button>
      </form>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    selectedJournal: state.selectedJournal
  }
}

function mapDispatchToState(dispatch){
  return {
    updateUserEntries: (user)=> dispatch({
      type: "UPDATE_USER",
      payload: user
    }),
    updateShowForm: ()=> dispatch({
      type: "SHOW_FORM",
      payload: false
    })
  }
}



export default connect(mapStateToProps, mapDispatchToState)(NewEntryForm)
