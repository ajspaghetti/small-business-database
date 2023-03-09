import React from "react"
import { Link } from 'react-router-dom'
// import Employees from "./Employees"

function Skill({
    skill
}) {

    const data1 = skill.employees
    const listEmployees = data1.map((data1) => <li key={data1.id}>{data1.first_name} {data1.middle_name} {data1.last_name} {data1.suffix}, {data1.job_title}</li>)

    const data2 = skill.subcontractors
    const listSubs = data2.map((data2) => <li key={data2.id}>{data2.company_legal_name} <br/>(DBA: {data2.company_dba})</li>)
    
    return (
        <div className="card-spacing">
            <div className="card">
                <div className="card-details">
                    <ul className="cards-ul">
                        <li className="card-li">
                            <div>
                            <Link to={`/matrix/skills/${skill.id}`}>
                                <h3>Skill</h3>
                            </Link>
                            <div>
                                <h4>{skill.skill_name}</h4><br/>
                                {listEmployees.length > 0 ? <div>Employees: <br/><ul>{listEmployees}</ul></div> : null }<br/>
                                {listSubs.length > 0 ? <div>Subcontractors: <br/><ul>{listSubs}</ul></div> : null }<br/>
                            </div>
                            <div className="card-buttons">

                            </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skill