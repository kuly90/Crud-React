import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">

        <ul className="navbar-nav">              
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" 
            id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">MENU</a>
                         
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink className="dropdown-item" activeClassName="active" to="/Home" >Home</NavLink>
            <NavLink className="dropdown-item" activeClassName="active" to="/PageTable" >PageTable</NavLink>
            <NavLink className="dropdown-item" activeClassName="active" to="/pageAdd" >PageAdd</NavLink>
            </div>
          </li>         
        </ul>

         <div className="container">
          <button className="navbar-toggler" data-toggle="collapse" data-target="#mainNav">
            <span className="navbar-toggler-icon" >Menu</span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link" activeClassName="active" to="/PageTable" >PageTable</NavLink>
              <NavLink className="nav-item nav-link" activeClassName="active" to="/pageAdd" >PageAdd</NavLink>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}