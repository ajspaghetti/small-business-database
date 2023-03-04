import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

function Home({
    currentUser
}) {

    return(
        <div className='homepage'>
            <div className='homepage-text'>
            <br/>
            <br/>
                <h1>urDB</h1>
                <br/>
                <br/>
                <h4>Small Business Project Management and HRIS Tool</h4>
                <br/>
                <br/>
                <p>{currentUser ? `Logged in as ${currentUser.username}` : 'Please Log In'}</p>
                <br />
                <span className="home-menu">
                    {currentUser ?
                        <div>
                            <h1>Logged In</h1> 
                        </div>
                        
                        :
                        <Link to='/login'>
                            <Button>Login or Register</Button>
                        </Link>
                    }
                </span>
            </div>
        </div>
    )
}

export default Home