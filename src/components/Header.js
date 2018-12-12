import React from 'react'
import { Fragment } from 'react'

const Header = ()=> {
  return (
    <Fragment>
      <div className="ui secondary pointing menu">
        <a className="active item">
          Home
        </a>
        <div className="right menu">
          <a className="ui item">
            Logout
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default Header
