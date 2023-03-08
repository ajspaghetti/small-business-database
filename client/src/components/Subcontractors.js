import React from "react"
import Subcontractor from "./Subcontractor"
import SubForm from "./SubForm"

function Subcontractors({
    subcontractors,
    setSubcontractors
}) {

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