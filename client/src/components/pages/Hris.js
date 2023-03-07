// HRIS
import React from 'react'
// import { useState, useEffect } from "react"
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
                <h1 className="group-title">HRIS</h1>
                <div>
                    <SearchSortFilter />
                    <Employees />
                    <Subcontractors />
                </div>
            </div>
        </div>
        
    )
}

export default Management