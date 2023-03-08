import React from "react"

function Company({
    company
}) {

    return (
        <div className="card-spacing">
            <div className="card">
                <div className="card-details">
                    <ul className="cards-ul">
                        <li className="card-li">
                            <div>
                            <p to={`/client_companies/${company.id}`}></p>
                            <div>
                                <h4>{company.legal_name}<br/>DBA: {company.dba_name}</h4>
                                <p>Industry: {company.industry}</p>
                                <p>Address: <br/>{company.address.line_one} {company.address.line_two} </p>
                                <p>Contact: <br/>{company.co_phone}<br/>{company.co_email}</p>
                                <p>Annual Revenue: <br/>${company.annual_revenue}</p>
                                <p>Notes: <br/>{company.cc_notes}</p>
                            </div>
                            <div className="card-buttons">
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

export default Company