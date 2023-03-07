import React from "react";
import { useState, useEffect } from 'react'
import User from './User'



function Users({
    user
}) {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('/users')
        .then(r => r.json())
        .then(users => setUsers(users))
    }, [])

    return (
        <div>
            <div className="container">
                <h1>Users</h1>
                <br/>
                <div className="card-container">
                    <div className="cards">
                        {users.length > 0 ? 
                            users.map(user =>
                                <User
                                    key={user.id}
                                    // user={user}
                                    // user={user}
                                />) : null }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users