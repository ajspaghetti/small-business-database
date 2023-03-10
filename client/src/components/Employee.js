import React from "react"
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from './pages/UserProvider';


function Employee({
    employee
    // test
}) {
    const { user } = useContext(UserContext);

    console.log(employee.id)
    console.log(user)

    // console.log(test)

    const data = employee.skills
    const listSkills = data.map((data) => <li key={data.skill_name}>{data.skill_name}</li>)

    return (
        <div className="card-spacing">
            <div className="card">
                <div className="card-details">
                    <ul className="cards-ul">
                        <li className="card-li">
                            <div>
                                <Link to={`/hris/employees/${employee.id}`}>
                                    <h3>{employee.first_name} {employee.middle_name} {employee.last_name} {employee.suffix}</h3>
                                </Link>
                                <div>
                                    <p><>Role:</> <>{employee.job_title}</></p>
                                    <div><>Contact Info:</><br/><>Phone: <><ul>{employee.emp_phone}</ul></></><>Email: </><ul>{employee.emp_email}</ul></div>
                                    <div><>Address:</><br/><ul><>{employee.address.line_one}, {employee.address.line_two}</><br/><>{employee.address.zip.city}, {employee.address.zip.state} {employee.address.zip.zip_code}</></ul></div>
                                    <p><>Gender: </>{employee.gender}</p>
                                    <p><>SSN/Tax ID: </> ***-**-{employee.tax_number.slice(7, 11)}</p>
                                    <p>Start Date: {employee.start_date}</p>
                                    <p>Compensation: {employee.hourly_or_salary}</p>
                                    <p>Hourly-Rate: ${employee.hourly_rate}</p>
                                    <p>Annual-Salary: ${employee.annual_salary}</p>
                                    <div>PTO Policy: <br/><ul><>{employee.pto_policy}</></ul></div>
                                    <div>Skills: <br/><ul>{listSkills}</ul></div>
                                    <p>Notes: <br/>{employee.emp_notes}</p>
                                    <br/>
                                </div>
                            <div className="card-buttons">
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