import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NavWrap = styled.div`
background: blue;
padding: 25px;
display: flex;
flex-direction: column;
font-size: 1.1rem;
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
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
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
