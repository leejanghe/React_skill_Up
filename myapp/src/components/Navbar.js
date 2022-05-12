import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/test1">test link</Link>
        </div>
    )
}

export default Navbar
