import React from "react"
import { useState, useEffect } from 'react'
import Contract from "./Contract"
import ContractForm from "./ContractForm"


function Contracts({
    contracts,
    setContracts
}) {

    return (
        <div>
            <div className="container">
                <h1>Contracts</h1>
                <br/>
                <div className="card-container">
                    <div className="cards">
                        {contracts.length > 0 ? 
                            contracts.map(contract =>
                                <Contract
                                    key={contract.id}
                                    contract={contract}
                                />) : null }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contracts