import React from "react"
import Contract from "./Contract"
import ContractForm from "./ContractForm"

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
    setSubcontractors,
    currentUser
}) {

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
                <div>
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
                        currentUser={currentUser}
                    />
                </div>
            </div>
        </div>
    )
}

export default Contracts