import React from "react"
import { useState, useEffect } from 'react'
import Skill from './Skill'
import SkillForm from './SkillForm'

function Skills({
    skills,
    setSkills
}) {
    

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
            </div>
        </div>
    )
}

export default Skills