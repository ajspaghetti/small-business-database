import React from 'react'
import Skills from '../Skills'
import Employees from '../Employees'
import Subcontractors from '../Subcontractors'
import SearchSortFilter from './SearchSortFilter'

function Matrix({
    searchTerm,
    setSearchTerm
}) {

    return (
        <div>
            <div>
                <h1 className="group-title">Skills Matrix</h1>
                <div>
                    <SearchSortFilter />
                    <Skills />
                    <Employees />
                    <Subcontractors />
                </div>
            </div>
        </div>
        
    )
}

export default Matrix