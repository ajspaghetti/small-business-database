import React from "react"
import Address from './Address'
import AddressForm from './AddressForm'


function Addresses({
    addresses,
    setAddresses,
    zips,
    setZips
}) {

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
                <br />
                <div>
                    <AddressForm 
                        addresses={addresses}
                        setAddresses={setAddresses}
                        zips={zips}
                        setZips={setZips}
                    />
                </div>
            </div>
        </div>
    )
}

export default Addresses