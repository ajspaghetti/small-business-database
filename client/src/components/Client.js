import React from "react";

function Client({
    client
}) {


    return (
        <div>
            <div className="card">
                <div className="card-details">
                    <ul className="cards-ul">
                        <li className="card-li">
                            <div>
                            <h4>Client</h4>
                            <p to={`/addresses/${client.id}`}></p>
                            <div>
                                <p>{client.first_name} {client.last_name}</p>
                                <p>{client.job_title}</p>
                                <p>{client.client_phone}</p>
                                <p>{client.client_email}</p>
                                <p>{client.client_company.legal_name}</p>
                                <p>{client.client_notes}</p>
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