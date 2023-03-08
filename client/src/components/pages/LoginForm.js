import { useState } from 'react';
  
function LoginForm(
  { 
    currentUser,
    username,
    setUsername,
    password,
    setPassword,
    setIsLoading,
    onLogIn,
    setErrors,
  }
  ) {

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

  console.log(currentUser)


  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username" />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password" />
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm