import React from "react";
import { useState, useEffect } from 'react'
import Employee from './Employee'
import EmployeeForm from './EmployeeForm'

function Employees() {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetch('/employees')
        .then(r => r.json())
        .then(employees => setEmployees(employees))
    }, [])

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
                                />) : null }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employees