import React from 'react'
import { Fragment } from 'react'

const Header = ()=> {

  const logout = ()=>{
    localStorage.clear();
  }

  const iconStyle = {
    height: '40px',
    width: '40px',
    marginTop: '18px',
    marginBottom: '15px',
    marginLeft: '30px'
  }

  return (
    <Fragment>
      <div className="ui secondary pointing menu">
      <img style={iconStyle} src="https://png.pngtree.com/svg/20160616/_bookmark_63711.png" alt="bookmark icon"></img>
        <div className="right menu">
          <a onClick={()=>logout()} className="ui item" href="/home">
            Logout
          </a>
        </div>
      </div>
    </Fragment>
  )
}


// <i class="big book icon"></i>
export default Header
