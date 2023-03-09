import React from "react"
import Project from './Project'
import ProjectForm from './ProjectForm'

function Projects({
    projects,
    setProjects,
    addresses,
    setAddresses,
    zips,
    setZips,
    currentUser
}) {

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
                <div>
                    <ProjectForm
                        projects={projects}
                        setProjects={setProjects}
                        addresses={addresses}
                        setAddresses={setAddresses}
                        zips={zips}
                        setZips={setZips}
                        currentUser={currentUser}
                    />
                </div>
        </div>
    </div>
    )
}

export default Projects