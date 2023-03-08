import React, { useState } from "react"
import { Link, useHistory } from 'react-router-dom'


function RegisterForm({ onLogIn }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    const registerForm = {
      username: username,
      password: password
    }
    setErrors([])
    setIsLoading(true)
    //console.log(registerForm)
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(registerForm),
    })
    .then(r => {
      setIsLoading(false)
      if(r.ok) {
        r.json()
        .then(newUser => onLogIn(newUser))
        history.push('/')
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
    setUsername("")
    setPassword("")
  }

  return (
    <div>
        <br/>
        <h1>Register</h1>
        <br/>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    required
                    size="lg"
                    type="text"
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <input
                    required
                    size="lg"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <br/>
            <button type="submit">Create Account</button>
        </form>
        <br/>
  <br/>
  <br/>
    <div>
        <Link to='/'>
            <button>Home</button>
        </Link>
    </div>
        </div>
  )
}

export default RegisterForm