import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NavWrap = styled.div`
background: blue;
>a{
    color: white;
    text-decoration: none;
}
`

function Navbar() {
    return (
        <NavWrap>
            <Link to="/">Home</Link>
            <Link to="/test1">test link</Link>
        </NavWrap>
    )
}

export default Navbar
