import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

function User(
    {
        currentUser
    }
) {

    // console.log(currentUser)
   
    // THIS WILL BE FOR THE USER 'ACCOUNT.js' PAGE

    return (
        <div>
            <h1>Welcome, {currentUser}!</h1>
        </div>
    )
}

export default User