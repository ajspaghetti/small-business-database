import React from "react";
import LoginForm from './LoginForm'

function Home({
    currentUser
}) {
    
    console.log(currentUser)

    return(
        <div className='homepage'>
            <h1>urDB, {currentUser}</h1>
            <LoginForm />
            <br/>
            {/* <div>{currentUser}<div/> */}
        </div>
    )
}

export default Home