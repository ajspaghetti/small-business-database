import {useState} from 'react';
import LoginForm from './LoginForm';

function Login({ 
  currentUser,
  onLogIn,
  onLogOut
 }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
    {currentUser!=null ? (
      <div>
        <p>You are logged in!</p>
        <button onClick={onLogOut}>Log out</button>
      </div>
    ) : (
      <div>
        <LoginForm 
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          onLogIn={onLogIn}
          errors={errors}
          setErrors={setErrors}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          // handleSubmit={handleSubmit}
        />
      </div>
    )}
  </div>
  );
}

export default Login;
