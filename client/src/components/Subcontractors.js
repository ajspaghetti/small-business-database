import React from "react"
import Subcontractor from "./Subcontractor"
import SubForm from "./SubForm"
import { useContext, useState } from 'react';
import { UserContext } from './pages/UserProvider';
import { Link } from "react-router-dom";

function Subcontractors({
    subcontractors,
    setSubcontractors,
    addresses,
    setAddresses,
    zips,
    setZips,
    skills,
    setSkills
}) {

    const { user, setUser } = useContext(UserContext)
    const [clicked, setClicked] = useState(null)

    return (
        <div>
            <div className="container">
                <h1>Subcontractors</h1>
                <br/>
                <div className="card-container">
                    <div className="cards">
                        {subcontractors.length > 0 ? 
                            subcontractors.map(subcontractor =>
                                <Subcontractor
                                    key={subcontractor.id}
                                    subcontractor={subcontractor}
                                />) : null }
                    </div>
                </div>
                <br />
                <div>
                    <SubForm
                       subcontractors={subcontractors}
                       setSubcontractors={setSubcontractors}
                       addresses={addresses}
                       setAddresses={setAddresses}
                       zips={zips}
                       setZips={setZips}
                       skills={skills}
                       setSkills={setSkills} 
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

export default Subcontractors