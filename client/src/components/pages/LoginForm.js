import { useState } from 'react';
import axios from 'axios';
  
function LoginForm(
  { 
    user,
    email,
    setEmail,
    password,
    setPassword,
    setUser,
    loggedIn,
    handleLogin,
    handleLogout
  }
  ) {





  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email" />
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