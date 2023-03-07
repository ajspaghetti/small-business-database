import React from "react";
import { Link } from 'react-router-dom'

function Employee({
    employee
}) {

    // console.log(employee.skills)
    const data = employee.skills
    const listSkills = data.map((data) => <li key={data.skill_name}>{data.skill_name}</li>)

    return (
        <div className="card-spacing">
            <div className="card">
                <div className="card-details">
                    <ul className="cards-ul">
                        <li className="card-li">
                            <div>
                            <Link to={`/employees/${employee.id}`}></Link>
                            <div>
                                <h5>{employee.first_name} {employee.middle_name} {employee.last_name} {employee.suffix}</h5>
                                <p>Role: {employee.job_title}</p>
                                <p>Contact: <br/>{employee.emp_phone}<br/>{employee.emp_email}</p>
                                <p>Address: <br/>{employee.address.line_one}, {employee.address.line_two}</p>
                                <p>Gender: {employee.gender}</p>
                                <p>SSN: ***-**-{employee.tax_number.slice(7, 11)}</p>
                                <p>Start Date: {employee.start_date}</p>
                                <p>Compensation: {employee.hourly_or_salary}</p>
                                <p>Hourly-Rate: ${employee.hourly_rate}</p>
                                <p>Annual-Salary: ${employee.annual_salary}</p>
                                <p>PTO Policy: <br/>{employee.pto_policy}</p>
                                <div>Skills: <br/><ul>{listSkills}</ul></div>
                                <p>Notes: <br/>{employee.emp_notes}</p>
                                <br/>
                                
                                
                            </div>
                            <div>
                                <button>Edit</button>
                                <button>Expand/Collapse</button>
                            </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Employee