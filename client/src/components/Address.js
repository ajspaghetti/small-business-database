import React from "react";

function Address({
    address
}) {

    return (
        <div className="card-spacing">
            <div className="card">
                <div className="card-details">
                    <ul className="cards-ul">
                        <li className="card-li">
                            <div>
                            <h4>Address</h4>
                            <p to={`/addresses/${address.id}`}></p>
                            <div>
                                <p>{address.line_one}</p>
                                <p>Unit: {address.line_two}</p>
                                <p>{address.zip.city}, {address.zip.state}  {address.zip.zip_code}</p>
                            </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Address