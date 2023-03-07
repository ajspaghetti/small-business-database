import {useState} from 'react';
import LoginForm from './LoginForm';

function Login({ 
  user,
  email,
  setEmail,
  password,
  setPassword,
  setUser,
  loggedIn,
  handleLogin,
  handleLogout
 }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true)
    const loginuser = {
      username: username,
      password: password
    }
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginuser),
    })
      .then((r) => { 
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogIn(user));
        } else {
          r.json().then((err) => setErrors(err.errors))
        };
    });
  }

  return (
    <div>
    {loggedIn ? (
      <div>
        <p>You are logged in!</p>
        <button onClick={handleLogout}>Log out</button>
      </div>
    ) : (
      <LoginForm 
        user={user}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        setUser={setUser}
        loggedIn={loggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    )}
  </div>
  );
}

export default LoginPage;
