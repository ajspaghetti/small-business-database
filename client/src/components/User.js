import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

function User(
    {
        user
    }
) {
   
    // THIS WILL BE FOR THE USER 'ACCOUNT.js' PAGE

    return (
        <div>
            <h1>Welcome, {user.username}!</h1>
        </div>
    )
}

export default User