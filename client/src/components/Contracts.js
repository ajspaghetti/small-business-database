import React from "react"
import Contract from "./Contract"
import ContractForm from "./ContractForm"
import { useContext, useState } from 'react';
import { UserContext } from './pages/UserProvider';
import { Link } from "react-router-dom";

function Contracts({
    contracts,
    setContracts,
    projects,
    setProjects,
    client_companies,
    setClientCompanies,
    clients,
    setClients,
    employees,
    setEmployees,
    subcontractors,
    setSubcontractors
}) {

    const { user, setUser } = useContext(UserContext)
    const [clicked, setClicked] = useState(false)

    return (
        <div>
            <div className="container">
                <h1>Contracts</h1>
                <br/>
                <div className="card-container">
                    <div className="cards">
                        {contracts.length > 0 ? 
                            contracts.map(contract =>
                                <Contract
                                    key={contract.id}
                                    contract={contract}
                                    // test={console.log(contract)}
                                />) : null }
                    </div>
                </div>
                <br />
                {/* <div>
                    <ContractForm
                        contracts={contracts}
                        setContracts={setContracts}
                        projects={projects}
                        setProjects={setProjects}
                        client_companies={client_companies}
                        setClientCompanies={setClientCompanies}
                        clients={clients}
                        setClients={setClients}
                        employees={employees}
                        setEmployees={setEmployees}
                        subcontractors={subcontractors}
                        setSubcontractors={setSubcontractors}
                        
                    />
                </div> */}
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

export default Contracts