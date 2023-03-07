import React from "react";
import { Link } from 'react-router-dom'

function Contract({
    contract
}) {

    return (
        <div className="card-spacing">
            <div className="card">
                <div className="card-details">
                    <ul className="cards-ul">
                        <li className="card-li">
                            <div>
                            <Link to={`/contracts/${contract.id}`}></Link>
                            <div>
                                <h5>{contract.contract_title}</h5>
                                <p>CV: ${contract.contract_value}</p>
                                <p>Owner: {contract.user.username}</p>
                                <p>Project: {contract.project.project_name}</p>
                                <p>Company: {contract.client_company.legal_name}</p>
                                <p>Contact: {contract.client.first_name} {contract.client.last_name}</p>
                                <p>Phone: {contract.client.client_phone}</p>
                                <p>Email: {contract.client.client_email}</p>
                                <p>Notes: {contract.contract_notes}</p>
                                <br/>
                                <p>Assigned Team:</p>
                                <p>{contract.employee.first_name} {contract.employee.middle_name} {contract.employee.last_name} {contract.employee.suffix} | {contract.employee.emp_phone}</p>
                                <p>{contract.subcontractor.company_dba}, {contract.subcontractor.primary_poc_name} | {contract.subcontractor.poc_phone}</p>
                            </div>
                            <div>
                                <button>Edit</button>
                                <button>Send an Email</button>
                            </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contract