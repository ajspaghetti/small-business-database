import React from 'react'
import { Link } from "react-router-dom"

function SearchSortFilter({
    setSearchTerm
}) {


    return (
        <div className="search">
            <div className="search-and-filter-container">
                <form className="search-bar">
                <input
                    id="search-bar"
                    type="text"
                    placeholder=" Search..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                </form>
                {/* <div className="filter-buttons">
                    <Link to="/contracts">Contracts</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/client_companies">Companies</Link>
                    <Link to="/clients">Clients</Link>
                    <Link to="/employees">Employees</Link>
                    <Link to="/subcontractors">Subcontractors</Link>
                    <Link to="/skills"Skills></Link>
                </div> */}
            </div>
        </div>
    )
}

export default SearchSortFilter