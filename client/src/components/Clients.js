import React, {useContext, useState} from "react"
import { Link } from 'react-router-dom'
import { UserContext } from './pages/UserProvider'
import Client from "./Client"
import ClientForm from './ClientForm'

function Clients({
    clients,
    setClients,
    client_companies,
    setClientCompanies
}) {
    
    const { user } = useContext(UserContext)
    const [clicked, setClicked] = useState(null)

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
                <div className='footer'>
                    <Link to='/'>
                        <button>Home</button>
                    </Link>
                    <Link to='/management/contracts'>
                        <button>Contracts</button>
                    </Link>
                    <Link to='/management/projects'>
                        <button>Projects</button>
                    </Link>
                    <Link to='/management/client_companies'>
                        <button>Companies</button>
                    </Link>
                    <Link to='/management/clients'>
                        <button>Clients</button>
                    </Link>
                    <Link to='/hris/employees'>
                        <button>Employees</button>
                    </Link>
                    <Link to='/hris/subcontractors'>
                        <button>Subcontractors</button>
                    </Link>
                    <Link to='/matrix/skills'>
                        <button>Skills</button>
                    </Link>
                    <Link to='/regional/addresses'>
                        <button>Addresses</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Clients