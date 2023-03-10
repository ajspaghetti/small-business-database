import React from "react"
import Skill from './Skill'
import SkillForm from './SkillForm'
import { useContext, useState } from 'react';
import { UserContext } from './pages/UserProvider';
import { Link } from "react-router-dom";

function Skills(
{
    skills,
    setSkills,
    employees,
    setEmployees,
    subcontractors,
    setSubcontractors
}
) {

    const { user, setUser } = useContext(UserContext)
    const [clicked, setClicked] = useState(null)
    
    return (
        <div>
            <div className="container">
                <h1>Skills</h1>
                <br/>
                <div className="card-container">
                    <div className="cards">
                        {skills.length > 0 ? 
                            skills.map(skill =>
                                <Skill
                                    key={skill.id}
                                    skill={skill}
                                />) : null }
                    </div>
                </div>
                <br />
                <div>
                    {/* <SkillForm
                        skills={skills}
                        setSkills={setSkills}
                        employees={employees}
                        setEmployees={setEmployees}
                        subcontractors={subcontractors}
                        setSubcontractors={setSubcontractors}
                    /> */}
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

export default Skills