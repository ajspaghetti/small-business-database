import React from "react"
import Client from "./Client"
import ClientForm from './ClientForm'

function Clients({
    clients,
    setClients,
    client_companies,
    setClientCompanies
}) {
    

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
                <br />
                <div>
                    <ClientForm 
                        clients={clients}
                        setClients={setClients}
                        client_companies={client_companies}
                        setClientCompanies={setClientCompanies}
                    />
                </div>
            </div>
        </div>
    )
}

export default Clients