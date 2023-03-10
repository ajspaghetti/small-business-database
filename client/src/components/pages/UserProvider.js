import { createContext, useState, useEffect } from 'react'



export const UserContext = createContext(null)

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const login = (username, password) => {
        fetch('/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then((response) => {
            if (response.ok) {
            return response.json();
            } else {
            throw new Error('Authentication failed.');
            }
        })
        .then((user) => {
            setUser(user); 
        })
        .catch((error) => {
            console.error(error);
        });
    };
    
    const logout = () => {
        setUser(null);
      };

      useEffect(() => {
        fetch("/me").then((r) => {
        if (r.ok) {
            r.json().then((user) => {
                setUser(user)
                // console.log(user)
            }
            );
        }
        });
    }, []);

      console.log(user)

    return (
        <UserContext.Provider value={{ user, setUser, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider