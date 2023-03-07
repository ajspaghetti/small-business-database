import React from "react";
import { Link } from 'react-router-dom'

function User({
    user
}) {

    // const data = user.contracts
    // const listContracts = data.map((contract) => <li key={contract.id}>{contract.contract_title}<br/>Notes:<br/>{contract.contract_notes}<br/></li>)

    // const projects = user.projects
    // const listProjects = projects.map((project) => <li key={project.id}>{project.project_name}<br/>{project.project_desc}<br/>Notes:<br/>{project.project_notes}<br/></li>)

    return (
        <div className="card-spacing">
            <div className="card">
                <div className="card-details">
                    <ul className="cards-ul">
                        <li className="card-li">
                            <div>
                            <h4>User</h4>
                            {/* <Link to={`/users/${user.id}`}></Link> */}
                            <div>
                                <p>{currentUser.username}</p>
                                <br/>
                                {/* <div>Projects:<ul>{listProjects}</ul></div> */}
                                {/* <div>Contracts:<br/><ul>{listContracts}</ul></div> */}
                            </div>
                            <div>
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

export default User