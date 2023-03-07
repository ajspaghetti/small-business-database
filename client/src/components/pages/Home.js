import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"


function Home({
    user,
    onLogin
}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: username,
            password: password,
          };
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
            .then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => { 
                    onLogin(user)
                    history.push("/")
                });
                
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
        setUsername("")
        setPassword("")
    }

    return(
        <div className='homepage'>
            <h1>urDB</h1>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <input
                        className="text-box-login"
                        placeholder="username"
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <br/>
                <div>
                    <input
                        className="text-box-login"
                        placeholder="password"
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br/>
                <div>
                    <button className="login-button" type="submit">
                    Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Home