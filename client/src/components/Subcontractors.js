import React from "react";
import { useState, useEffect } from 'react'
import Subcontractor from "./Subcontractor";
import SubForm from "./SubForm";

function Subcontractors() {
    const [subcontractors, setSubcontractors] = useState([])

    useEffect(() => {
        fetch('/subcontractors')
        .then(r => r.json())
        .then(subcontractors => setSubcontractors(subcontractors))
    }, [])

    return (
        <div>
            <div className="container">
                <h1>Subcontractors</h1>
                <br/>
                <div className="card-container">
                    <div className="cards">
                        {subcontractors.length > 0 ? 
                            subcontractors.map(subcontractor =>
                                <Subcontractor
                                    key={subcontractor.id}
                                    subcontractor={subcontractor}
                                />) : null }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subcontractors