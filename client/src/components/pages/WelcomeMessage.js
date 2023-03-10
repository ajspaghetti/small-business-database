import React, { useContext } from 'react'
import { UserContext } from './UserProvider'

function WelcomeMessage() {
const { user, setUser } = useContext(UserContext)

// console.log(user)
  return (
    <div>
      {/* <h1>Welcome, {user}!</h1> */}
    </div>
  )
}

export default WelcomeMessage