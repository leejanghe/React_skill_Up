import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NavWrap = styled.div`
background: #2e282a;
padding: 25px;
display: flex;
flex-direction: column;
font-size: 1.1rem;
height: 100vh;
>a{
    color: white;
    text-decoration: none;
    margin-bottom: 10px;
}
`

function Navbar() {
    return (
        <NavWrap>
            <Link to="/">Home</Link>
            <Link to="/test1">test link</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
        </NavWrap>
    )
}

export default Navbar
