import React, { useState, useContext } from 'react'
import {UserContext} from './UserProvider.js'
  
function LoginForm() {
    const { login } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
      e.preventDefault()
      login(username, password)
    };

    return (
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username" 
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password" 
        />
        <button type="submit">Log In</button>
      </form>
    )
}

export default LoginForm