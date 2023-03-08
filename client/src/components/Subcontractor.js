import React from "react"
import { Link } from 'react-router-dom'

function Subcontractor({
    subcontractor
}) {
    // console.log(subcontractor.skills)
    const data = subcontractor.skills
    const listSkills = data.map((data) => <li key={data.skill_name}>{data.skill_name}</li>)

    const contracts = subcontractor.contracts
    const listContracts = contracts.map((contract) => <li key={contract.id}>{contract.contract_title}</li>)

    const projects = subcontractor.projects
    const listProjects = projects.map((project) => <li key={project.id}>{project.project_name}</li>)

    return (
        <div className="card-spacing">
            <div className="card">
                <div className="card-details">
                    <ul className="cards-ul">
                        <li className="card-li">
                            <div>
                            <Link to={`/subcontractors/${subcontractor.id}`}></Link>
                            <div>
                                <h5>{subcontractor.company_legal_name}<br/>DBA: {subcontractor.company_dba}</h5>
                                <p>Address: <br/>{subcontractor.address.line_one}, {subcontractor.address.line_two}</p>
                                <p>Contact: {subcontractor.primary_poc_name}<br/>Role: {subcontractor.poc_role}<br/>Phone: {subcontractor.poc_phone}<br/>Email: {subcontractor.poc_email}</p>
                                <p>EIN or TAX ID: ***-**-{subcontractor.sub_tax_number.slice(6, 12)}</p>
                                <div>Skills: <br/><ul>{listSkills}</ul></div>
                                <br/>
                                <div>Active Contracts: <br/><ul>{listContracts}</ul></div>
                                <br/>
                                <div>Active Projects: <br/><ul>{listProjects}</ul></div>
                                <p>Notes: <br/>{subcontractor.sub_notes}</p>
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

export default Subcontractor