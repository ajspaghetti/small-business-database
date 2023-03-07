import React from 'react'
// import { useState, useEffect } from "react"
import Contracts from '../Contracts'
import Projects from '../Projects'
import Companies from '../Companies'
import Clients from '../Clients'
import Employees from '../Employees'
import Subcontractors from '../Subcontractors'
import SearchSortFilter from './SearchSortFilter'

function Management({
    searchTerm,
    setSearchTerm
}) {



    return (
        
        <div>
            <div>
                <h1 className="group-title">Skills Matrix</h1>
                <div>
                    <SearchSortFilter />
                    <Contracts />
                    <Projects />
                    <Companies />
                    <Clients />
                </div>
            </div>
        </div>
        
    )
}

export default Management