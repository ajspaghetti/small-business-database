import React from "react"
import Subcontractor from "./Subcontractor"
import SubForm from "./SubForm"

function Subcontractors({
    subcontractors,
    setSubcontractors,
    addresses,
    setAddresses,
    zips,
    setZips,
    skills,
    setSkills
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
                <br />
                <div>
                    <SubForm
                       subcontractors={subcontractors}
                       setSubcontractors={setSubcontractors}
                       addresses={addresses}
                       setAddresses={setAddresses}
                       zips={zips}
                       setZips={setZips}
                       skills={skills}
                       setSkills={setSkills} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Subcontractors