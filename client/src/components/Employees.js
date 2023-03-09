import React from "react"
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
                                    test={console.log(employee.id)}
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
            </div>
        </div>
    )
}

export default Employees