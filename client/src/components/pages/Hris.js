import React from 'react'
import Employees from '../Employees'
import Subcontractors from '../Subcontractors'
import SearchSortFilter from './SearchSortFilter'
import { useContext } from 'react';
import { UserContext } from './UserProvider';

function Management({
    searchTerm,
    setSearchTerm
}) {
    const { user } = useContext(UserContext);
    return (
        
        <div>
            <div>
                <h1 className="group-title">HRIS ({user.username})</h1>
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