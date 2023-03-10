import React, {useContext} from "react"
import { UserContext } from './UserProvider'
import { Link } from "react-router-dom"
import logoNoBackground from '../../assets/logoNoBackground.png'
import "../../styles/App.css"

function Navbar({
  onLogOut,
  // user,
}) {
  const { user, logout } = useContext(UserContext)

  // console.log(user)

  function handleLogOut() {
    fetch('/logout', {
        method: 'DELETE'
    })
        .then(() => onLogOut())
  }
  
  const logo = logoNoBackground
  

  return (
    <nav className="navbar-container">
          
            
            
            {user !== null ? 
            <ul className="nav-links">
            <Link to="/">
              <img className="nav-logo" src={logo} title="Home" alt="navLogo"></img>
            </Link>
            <li>   
              <Link to="/management/contracts">
                <button>Contracts</button>
              </Link>         
            </li>
            <li>
              <Link to="/management/projects">
                <button>Projects</button>
              </Link>
            </li>
            <li>
              <Link to="/management/client_companies">
                <button>Companies</button>
              </Link>
            </li>
            <li>
              <Link  to="/management/clients">
                <button>Clients</button>
              </Link>
            </li>
            <li>
              <Link to="/hris/employees">
                <button>Employees</button>
              </Link>
            </li>
            <li>
              <Link to="/hris/subcontractors">
                <button>Subcontractors</button>
              </Link>
            </li>
            <li>
              <Link to="/matrix/skills">
                <button>Skills</button>
              </Link>
            </li>
            <li>
              <Link to="/logout" >
                <button onClick={logout}>Log Out</button>
              </Link>
            </li>
            <div>
              <p><br/><br/></p>
            </div>
            </ul>
            
              :

            <ul className="nav-links-login">
              <Link href="/" to="/">
                <img className="nav-logo" src={logo} title="Home" alt="navLogo"></img>
              </Link>
              <li>
                <a className="nav-item"href="/" to="/">Login</a>
              </li>
              <li>
                <a className="nav-item"href="/register" to ="/register">Register</a>
              </li>
              </ul>
            }
            
            
    </nav>
  )
}
  export default Navbar