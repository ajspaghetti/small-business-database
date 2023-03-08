import React from "react"
import { useState, useEffect } from 'react'
import Company from './Company'
// import CompanyForm from './CompanyForm'

function Companies({
    client_companies,
    setClientCompanies
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
            </div>
        </div>
    )
}

export default Companies