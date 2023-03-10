import React from "react"
import { Link } from 'react-router-dom'

function Project({
    project
}) {


    // Mapping has_many contracts serialized
    // console.log(project.contracts)
    const data1 = project.contracts
    const listData1 = data1.map((data1) => <li key={data1.id}>{data1.contract_title} | CV: {data1.contract_value} | Owner: {data1.user.username}</li>)

    // Mapping has_many client_companies serialized
    // console.log(project.client_companies)
    const data2 = project.client_companies
    const listData2 = data2.map((data2) => <li key={data2.id}>{data2.legal_name} | Primary POC: {data2.primary_poc_name} | Role: {data2.poc_role} | Contact: {data2.poc_phone}, {data2.poc_email}</li>)

    // Mappring has_many clients serialized
    // console.log(project.clients)
    const data3 = project.clients
    const listData3 = data3.map((data3) => <li key={data3.id}>{data3.first_name} {data3.last_name} | Role: {data3.job_title} | Contact: {data3.client_phone}, {data3.client_email}</li>)

    // Mapping has_many employees serialized
    // console.log(project.employees)
    const data4 = project.employees
    const listData4 = data4.map((data4) => <li key={data4.id}>{data4.first_name} {data4.middle_name} {data4.last_name} {data4.suffix} | {data4.emp_phone} </li>)

    // Mapping has_many subcontractors serialized
    // console.log(project.subcontractor)
    const data5 = project.subcontractors
    const listData5 = data5.map((data5) => <li key={data5.id}>{data5.company_dba}, {data5.primary_poc_name} | {data5.poc_phone}</li>)



    return (
        <div className="card-spacing">
            <div className="card">
                <div className="card-details">
                    <ul className="cards-ul">
                        <li className="card-li">
                            <div>
                            <Link to={`/projects/${project.id}`}><h3>{project.project_name}</h3></Link>
                            <div>
                                <p>Description:<br/>{project.project_desc}</p>
                                <p>Owner: {project.user.username}</p>
                                <p>Location: {project.address.line_one}, {project.address.line_two}</p>    
                                <p>Project Notes: {project.project_notes}</p>
                                <br/>
                                <p>Active Contracts:</p>
                                <div><ul>{listData1}</ul></div>
                                <br/>
                                <p>Active Companies:</p>
                                <div>Companies: <ul>{listData2}</ul></div>
                                <div>Company Contacts: <ul>{listData3}</ul></div>
                                <br/>
                                <p>Workers Assigned:</p>
                                <div>Employees: <ul>{listData4}</ul></div>
                                <div>Subcontractors: <ul>{listData5}</ul></div>
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

export default Project