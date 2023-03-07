import React from "react";
import { useState, useEffect } from 'react'
import Client from "./Client"

function Clients() {
    const [clients, setClients] = useState([])

    useEffect(() => {
        fetch('/clients')
        .then(r => r.json())
        .then(clients => setClients(clients))
    }, [])

    return (
        <div>
            <div className="container">
                <h1>Clients</h1>
                <br/>
                <div className="card-container">
                    <div className="cards">
                        {clients.length > 0 ? 
                            clients.map(client =>
                                <Client
                                    key={client.id}
                                    client={client}
                                />) : null }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients