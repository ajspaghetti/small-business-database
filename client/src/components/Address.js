import React from "react"
import { Link } from 'react-router-dom'

function Address({
    address
}) {

    return (
        <div className="card-spacing">
            <div className="card">
                <div className="card-details">
                    <ul className="cards-ul">
                        <li className="card-li">
                            <Link to={`/addresses/${address.id}`}>
                                <h3>Address</h3>
                            </Link>
                            <div>
                                <p>{address.line_one}</p>
                                <p>Unit: {address.line_two}</p>
                                <p>{address.zip.city}, {address.zip.state}  {address.zip.zip_code}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Address