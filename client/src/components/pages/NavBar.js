import React from "react";
import { Link } from "react-router-dom";

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
      <Link to="/">
        <p className="logo-text">urDB</p>
      </Link>
      <menu>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          {!currentUser() && (
          <li>
            <Link to="/login">Login</Link>
          </li>
          )}
          {!currentUser() && (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )}
          {currentUser() && (
            <li>
              <Link to="/hris/employees">Employees</Link>
            </li>
          )}

          {currentUser() && (
            <li>
              <Link to="/hris/subcontractors">Subcontractors</Link>
            </li>
          )}
          {currentUser() && (
            <li>
              <Link to="/hris/skills-matrix">Skills Matrix</Link>
            </li>
          )}
          {currentUser() && (
            <li>
              <Link to="/project-management/contracts">Contracts</Link>
            </li>
          )}
          {currentUser() && (
            <li>
              <Link to="/project-management/projects">Projects</Link>
            </li>
          )}
          {currentUser() && (
            <li>
              <Link to="/project-management/companies">Companies</Link>
            </li>
          )}
          {currentUser() && (
            <li>
              <Link to="/project-management/clients">Clients</Link>
            </li>
          )}
          {currentUser() && (
            <li>
              <Link to="/users/:id">Profile</Link>
            </li>
          )}
          <li>
            <Link to="/about">About</Link>
          </li>
          { currentUser ? <li className="username">✅ {currentUser.username}</li> : null }
          {currentUser() && (
            <li>
              <Link onClick={handleLogOut}>Logout</Link>
            </li>
          )}
        </ul>
      </menu>
    </nav>
  );
}
  export default Navbar;