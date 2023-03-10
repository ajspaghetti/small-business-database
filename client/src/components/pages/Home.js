import React, {useContext} from "react"
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import { UserContext } from './UserProvider'


function Home() {
    const { user } = useContext(UserContext)
    
    // console.log(user)

    return(

        <div className='homepage'>
            <div className='home-text'>
                <div className="login-home">
                {user == null ? 
                (
                    
                    <div>
                        <h3>Please Log In</h3>
                        <LoginForm />
                        <br/>
                    </div>
                )
                
                :
                <div>
                    <h1>Welcome, {user.username}!</h1>
                    <Link to='/'>
                        <button>Home</button>
                    </Link>
                    <Link to='/management/contracts'>
                        <button>Contracts</button>
                    </Link>
                    <Link to='/management/projects'>
                        <button>Projects</button>
                    </Link>
                    <Link to='/management/client_companies'>
                        <button>Companies</button>
                    </Link>
                    <Link to='/management/clients'>
                        <button>Clients</button>
                    </Link>
                    <Link to='/hris/employees'>
                        <button>Employees</button>
                    </Link>
                    <Link to='/hris/subcontractors'>
                        <button>Subcontractors</button>
                    </Link>
                    <Link to='/matrix/skills'>
                        <button>Skills</button>
                    </Link>
                    <Link to='/regional/addresses'>
                        <button>Addresses</button>
                    </Link>
                </div>
                
                } 
                
            </div>
        </div>
        </div>

    )
}

export default Home