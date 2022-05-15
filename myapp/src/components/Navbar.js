import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NavWrap = styled.div`
background: #333C83;
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
            <Link to="/study1">데이터 길이</Link>
            <Link to="/study2">재사용컴포넌트</Link>
            
        </NavWrap>
    )
}

export default Navbar
