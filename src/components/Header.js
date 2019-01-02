import React from 'react'
import { Fragment } from 'react';
import logo from '../bookmark.svg';

const Header = ()=> {

  const logout = ()=>{
    localStorage.clear();
  }

  const iconStyle = {
    height: '42px',
    width: '42px',
    marginTop: '22px',
    marginBottom: '18px',
    marginLeft: '30px'
  }

  const logoutStyle = {
    paddingTop: '0px',
    paddingBottom: '25px',
    paddingRight: '25px'
  }

  return (
    <Fragment>
      <div className="ui secondary pointing menu">
      <img style={iconStyle} src={logo} alt="bookmark icon"></img>
        <div className="right menu">
          <a style={logoutStyle} onClick={()=>logout()} className="ui item" href="/home">
            Logout
          </a>
        </div>
      </div>
    </Fragment>
  )
}


// <i class="big book icon"></i>
export default Header
