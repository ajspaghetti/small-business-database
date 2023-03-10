import React, {useContext, useState} from "react"
import { Link } from 'react-router-dom'
import { UserContext } from './pages/UserProvider'
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

    const { user } = useContext(UserContext)
    const [clicked, setClicked] = useState(false)

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
                    {/* < CompanyForm
                        companies={client_companies}
                        setCompanies={setClientCompanies}
                        addresses={addresses}
                        setAddresses={setAddresses}
                        zips={zips}
                        setZips={setZips}
                    /> */}
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

export default Companies