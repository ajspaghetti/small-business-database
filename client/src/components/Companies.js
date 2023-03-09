import React from "react"
import Company from './Company'
import CompanyForm from './CompanyForm'

function Companies({
    client_companies,
    setClientCompanies,
    addresses,
    setAddresses,
    zips,
    setZips
}) {


    return (
        <div>
            <div className="container">
                <h1>Companies</h1>
                <br/>
                <div className="card-container">
                    <div className="cards">
                        {client_companies.length > 0 ?
                            client_companies.map(company =>
                                <Company
                                    key={company.id}
                                    company={company}
                                />) : null }
                    </div>
                </div>
                <br />
                <div>
                    < CompanyForm
                        companies={client_companies}
                        setCompanies={setClientCompanies}
                        addresses={addresses}
                        setAddresses={setAddresses}
                        zips={zips}
                        setZips={setZips}
                    />
                </div>
            </div>
        </div>
    )
}

export default Companies