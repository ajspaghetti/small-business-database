import React from "react";
import { Link } from "react-router-dom";
import "../../styles/App.css"

function Navbar({
  onLogOut,
  currentUser,
}) {

  const handleLogOut = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(() => onLogOut())
  };

  return (
    <nav className="navbar-container">
          <ul className="nav-links">
            <li>
              <a href="/" to="/" title="Home">urDB</a>
            </li>
            <li>          
              <a className="nav-item"href="/contracts" to="/contracts">Contracts</a>
            </li>
            <li>
              <a className="nav-item"href="/projects" to="/projects">Projects</a>
            </li>
            <li>
              <a className="nav-item"href="/client_companies" to="/client_companies">Companies</a>
            </li>
            <li>
              <a className="nav-item"href="/clients" to="/clients">Clients</a>
            </li>
            <li>
              <a className="nav-item"href="/employees" to="/employees">Employees</a>
            </li>
            <li>
              <a className="nav-item"href="subcontractors" to="/subcontractors">Subcontractors</a>
            </li>
            <li>
              <a className="nav-item"href="skills" to="/skills">Skills Matrix</a>
            </li>
            <li>
              <a className="nav-item"href="/users/:id" to="/users/:id">Account</a>
            </li>
            {/* <li>
              <a className="nav-item"href="/logout" to="/logout">Log Out</a>
            </li>
            <li>
              <a className="nav-item"href="/login" to="/login">Login</a>
            </li>
            <li>
              <a className="nav-item"href="/register" to ="/register">Register</a>
            </li> */}
          </ul>
    </nav>
  );
}
  export default Navbar;