import { useState } from 'react';



function LoginForm({
  onLogIn
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
        <h1>LoginForm</h1>
    </div>
  );
}

export default LoginForm