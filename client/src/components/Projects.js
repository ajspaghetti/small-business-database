import React from "react"
import Project from './Project'
import ProjectForm from './ProjectForm'
import { useContext, useState } from 'react';
import { UserContext } from './pages/UserProvider';
import { Link } from "react-router-dom";

function Projects({
    projects,
    setProjects,
    addresses,
    setAddresses,
    zips,
    setZips
}) {

    const { user, setUser } = useContext(UserContext)
    const [clicked, setClicked] = useState(null)

    return (
        <div>
        <div className="container">
            <h1>Projects</h1>
            <br/>
            <div className="card-container">
                <div className="cards">
                    {projects.length > 0 ? 
                        projects.map(project =>
                            <Project
                                key={project.id}
                                project={project}
                            />) : null }
                </div>
            </div>
            <br />
                {/* <div>
                    <ProjectForm
                        projects={projects}
                        setProjects={setProjects}
                        addresses={addresses}
                        setAddresses={setAddresses}
                        zips={zips}
                        setZips={setZips}
                    />
                </div> */}
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

export default Projects