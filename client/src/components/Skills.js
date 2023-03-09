import React from "react"
import Skill from './Skill'
import SkillForm from './SkillForm'

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
                    <SkillForm
                        skills={skills}
                        setSkills={setSkills}
                        employees={employees}
                        setEmployees={setEmployees}
                        subcontractors={subcontractors}
                        setSubcontractors={setSubcontractors}
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills