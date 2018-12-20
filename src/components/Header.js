import React from 'react'
import { Fragment } from 'react'

const Header = ()=> {

  const logout = ()=>{
    localStorage.clear();
  }


  return (
    <Fragment>
      <div className="ui secondary pointing menu">
        <a className="active item" href="/home">
          Home
        </a>
        <div className="right menu">
          <a onClick={()=>logout()} className="ui item" href="/home">
            Logout
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default Header
