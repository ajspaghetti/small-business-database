import React from "react"
import LoginForm from './LoginForm'
import logoNoBackground from "../../assets/logo-white.png"

function Home({
    currentUser
}) {
    
    // console.log(currentUser)

    return(

        <div className='homepage'>
            <div className='home-text'>
                <div className="logo-container"><img className="logo" src={logoNoBackground} alt="logo"></img></div>
                <div className="login-home">
                <h3>{currentUser ? `Welcome, ${currentUser.username}` : ""}</h3>
                    <LoginForm />
                    <br/>
                    {/* <div>{currentUser}<div/> */}
                </div>
            </div>
        </div>

    )
}

export default Home