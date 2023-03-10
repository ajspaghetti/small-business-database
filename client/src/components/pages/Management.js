import React from 'react'
// import { useState, useEffect } from "react"
import Contracts from '../Contracts'
import Projects from '../Projects'
import Companies from '../Companies'
import Clients from '../Clients'
import SearchSortFilter from './SearchSortFilter'
import { useContext } from 'react';
import { UserContext } from './UserProvider';
import {Link} from 'react-router-dom'

function Management({
    searchTerm,
    setSearchTerm
}) {

    const { user } = useContext(UserContext);


    return (
        
        <div>
            <div>
                <h1 className="group-title">Management ({user})</h1>
                <div>
                    <SearchSortFilter />
                    <Contracts />
                    <Projects />
                    <Companies />
                    <Clients />
                </div>
                <div>
                    <h3>Navigator</h3>
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

export default Management