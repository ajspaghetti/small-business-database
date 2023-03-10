import React, {useContext, useState} from "react"
import Address from './Address'
import AddressForm from './AddressForm'
import {Link} from 'react-router-dom'
import { UserContext } from './pages/UserProvider'


function Addresses({
    addresses,
    setAddresses,
    zips,
    setZips
}) {

    const { user } = useContext(UserContext)
    const [clicked, setClicked] = useState(false)

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
                <div className='footer'>
                    <Link to='/'>
                        <button>Home</button>
                    </Link>
                    <Link to='/management/contracts'>
                        <button>Contracts</button>
                    </Link>
                    <Link to='/management/projects'>
                        <button>Projects</button>
                    </Link>
                    <Link to='/management/client_companies'>
                        <button>Companies</button>
                    </Link>
                    <Link to='/management/clients'>
                        <button>Clients</button>
                    </Link>
                    <Link to='/hris/employees'>
                        <button>Employees</button>
                    </Link>
                    <Link to='/hris/subcontractors'>
                        <button>Subcontractors</button>
                    </Link>
                    <Link to='/matrix/skills'>
                        <button>Skills</button>
                    </Link>
                    <Link to='/regional/addresses'>
                        <button>Addresses</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Addresses