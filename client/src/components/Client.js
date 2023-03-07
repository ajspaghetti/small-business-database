import React from "react";
import { Link } from 'react-router-dom'

function Client({
    client
}) {

    return (
        <div className="card-spacing">
            <div className="card">
                <div className="card-details">
                    <ul className="cards-ul">
                        <li className="card-li">
                            <div>
                            <h4>{client.first_name} {client.last_name}</h4>
                            {/* <Link to={`/clients/${client.id}`}></Link> */}
                            <div>
                                <p>Role: {client.job_title}</p>
                                <p>Phone:<br/>{client.client_phone}</p>
                                <p>Email:<br/>{client.client_email}</p>
                                <p>Company:<br/>{client.client_company.legal_name}</p>
                                <p>Notes:<br/>{client.client_notes}</p>
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

export default Client