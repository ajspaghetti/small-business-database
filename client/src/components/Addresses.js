import React, { useState, useEffect } from "react";
import Address from './Address'


function Addresses() {

    const [addresses, setAddresses] = useState([])

    useEffect(() => {
        fetch('/addresses')
        .then(r => r.json())
        .then(addresses => setAddresses(addresses))
    }, [])

    return (
        <div>
            <div className="container">
                <h1>Addresses</h1>
                <br/>
                <div className="card-container">
                    <div className="cards">
                        {addresses.length > 0 ? 
                            addresses.map(address =>
                                <Address
                                    key={address.id}
                                    address={address}
                                />) : null }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addresses