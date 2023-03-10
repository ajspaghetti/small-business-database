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
                <div></div>
                
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
            <div></div>
            <div className="paragraph">
                <p>
                urDB is an Application made with small businesses in mind. <br/><br/>
                Small businesses struggle with digitalization because they don't have the typical resources that a large company has, whether it be financially or lack of time, personnel, or knowledge.<br/><br/>
                What these businesses don't realize is that so many important things fall through the cracks when they don't have readily accessible documentation on their employees.<br/><br/>
                This tool is meant to be a simple, quick, and painless way for small businesses to manage their workforce and all their data in a secure, easy-to-use suite.<br/>
                </p>
                </div>  
        </div>
        </div>

    )
}

export default Home