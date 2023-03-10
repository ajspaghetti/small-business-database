import React, {useContext, useState} from "react"
import { Link } from 'react-router-dom'
import { UserContext } from './pages/UserProvider'
import Employee from './Employee'
import EmployeeForm from './EmployeeForm'

function Employees({
    employee,
    employees,
    setEmployees,
    addresses,
    setAddresses,
    zips,
    setZips,
    skills,
    setSkills,
    onShowDetails,
    displayCard,
    setDisplayCard,
    onSubmitNewEmployee,
    onSubmitNewAddress,
    onSubmitNewSkill
}) {

    const { user } = useContext(UserContext)
    const [clicked, setClicked] = useState(null)

    return (
        <div>
            <div className="container">
                <h1>Employees</h1>
                <br/>
                <div className="card-container">
                    <div className="cards">
                        {employees.length > 0 ? 
                            employees.map(employee =>
                                <Employee
                                    key={employee.id}
                                    employee={employee}
                                    // test={console.log(employee.id)}
                                />) : null }
                    </div>
                </div>
                <br />
                <div>
                    <EmployeeForm
                        employee={employee}
                        employees={employees}
                        setEmployees={setEmployees}
                        addresses={addresses}
                        setAddresses={setAddresses}
                        zips={zips}
                        setZips={setZips}
                        skills={skills}
                        setSkills={setSkills}
                        onShowDetails={onShowDetails}
                        displayCard={displayCard}
                        setDisplayCard={setDisplayCard}
                        onSubmitNewEmployee={onSubmitNewEmployee}
                        onSubmitNewSkill={onSubmitNewSkill}
                        onSubmitNewAddress={onSubmitNewAddress}
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

export default Employees