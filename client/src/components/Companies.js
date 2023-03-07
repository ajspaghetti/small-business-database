import React from "react";
import { useState, useEffect } from 'react'
import Company from './Company'
// import CompanyForm from './CompanyForm'

function Companies() {
    const [client_companies, setClientCompanies] = useState([])

    useEffect(() => {
        fetch('/client_companies')
        .then(r => r.json())
        .then(client_companies => setClientCompanies(client_companies))
    }, [])

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
            </div>
        </div>
    )
}

export default Companies