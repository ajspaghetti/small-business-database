import React from "react"
import { useState, useEffect } from 'react'
import Employee from './Employee'
import EmployeeForm from './EmployeeForm'

function Employees({
    employees,
    setEmployees
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
                                />) : null }
                    </div>
                </div>
                <br />
                <div>
                    <EmployeeForm 
                        employees={employees}
                        setEmployees={setEmployees}
                    />
                </div>
            </div>
        </div>
    )
}

export default Employees