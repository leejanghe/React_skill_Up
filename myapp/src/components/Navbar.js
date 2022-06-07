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
            <Link to="/study3">데이터 분류 (정렬 기능)</Link>
            <Link to="/study4">페이지네이션</Link>
            <Link to="/study5">파일 데이터 추가하기</Link>
            <Link to="/study6">네브바 상태 변경</Link>
            <Link to="/study7">모달 작업</Link>
            <Link to="/study8">렌덤 배경 컬러</Link>
        </NavWrap>
    )
}

export default Navbar
